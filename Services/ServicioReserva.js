import { modeloReserva } from '../Models/Modeloreserva.js'

export class ServicioReserva{

    async reservarHabitaciones(){
        let habitaciones = await modeloReserva.find()
        return habitaciones 
    }

    async reservarHabitacionPorId(idr){
        let reserva = await modeloReserva.findById(idr)
        return reserva
    }

    async registrarReserva(datosreserva){
        let datosValidados = new modeloReserva(datosreserva)
        return await datosValidados.save()
    }

    async editarReserva(id,datos){

        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

    async borrarReserva(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}