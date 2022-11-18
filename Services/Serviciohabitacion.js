import { modeloHabitacion } from '../Models/ModeloHabitacion.js'

export class ServicioHabitacion{
//se preograma metodos, para cada una de las consultas

async buscarHabitaciones(){
    let habitaciones = await modelohabitacion.find()
    return habitaciones
}

async buscarHabitacionPorId(id){
    let habitacion = await modelohabitacion.findById(id)
    return habitacion
}
async registrarHabitacion(datos){
    let datosValidados = new modelohabitacion(datos)
    return await datosValidados.save()
}
async editarhabitacion(id,datos){
    return await modelohabitacion.findByIdAndupdate(id,datos)
}
}