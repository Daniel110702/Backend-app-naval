/**
 * funciones de configuracion de las rutas http que se realizaran
 * para las peticiones.
 */
import Request from "../models/Request";

export const createRequest = async(req, res) =>{
    // console.log(req.body);
    const {name, guardia, fecha, grado, departamento, division, asunto, objeto, lugar, desde, hasta, estado} = req.body;

    const newRequest = new Request({
        name,
        guardia,
        fecha: convertirFechaJSONaJS(fecha),
        grado,
        departamento,
        division,
        asunto,
        objeto,
        lugar,
        desde: convertirFechaJSONaJS(desde),
        hasta: convertirFechaJSONaJS(hasta),
        estado
    });

    function convertirFechaJSONaJS(json) {
        json = json.replace(/\D/g, ' ');
        let component = json.split(' ');
        let fecha = new Date(Date.UTC.apply(null, component));
        return fecha;
      }

    const requestSaved = await newRequest.save();
    res.status(201).json(requestSaved);
}

export const getRequests = async(req, res) =>{
    const requests =  await Request.find();
    res.json(requests);
}

export const getRequestById = async (req, res) =>{
    const request = await Request.findById(req.params.requestId);
    res.status(200).json(request);
}

export const updateRequestById = async (req, res) =>{
    const updateRequest = await Request.findByIdAndUpdate(req.params.requestId, req.body, {
        new: true
    })
    res.status(200).json(updateRequest)
}

export const deleteRequestById = async (req, res) =>{
    const { requestId } = req.params;
    const deleteRequest = await Request.findByIdAndDelete(requestId);
    res.status(204).json()
}