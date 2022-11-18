import { ServicioReserva } from "../Services/ServicioReserva.js"
import { ServicioHabitacion } from "../Services/Serviciohabitacion.js"


export class ControladorReserva{

    constructor(){}

    async reservarHabitaciones(request,response){

        let objetoServicioReserva = new ServicioReserva()

        try{

            response.status(200).json({
                "mensaje":"exito en la reserva",
                "datos": await- objetoServicioReserva.reservarHabitaciones(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })

        }

        
        
    }

    async reservarHabitacionPorId(request,response){
        let idReserva=request.params.idReserva//recibo id dela peticion 
        let objetoServicioReserva = new ServicioReserva()
        try{

            response.status(200).json({
                "mensaje":"exito en la reserva"+id,
                "datos": await objetoServicioReserva.reservarHabitacionPorId(idReserva),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })

        }
    }

    async registrarReserva(request,response){
        let datosReserva=request.body
        let objetoServicioReserva = new ServicioReserva()
        let objetoServicioHabitacion = new ServicioHabitacion()
        console.log(datosReserva);
        
        try{
            let datos_habitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idHabitacion)
            let maximoPersonas = datos_habitacion.numeroMaximoPersonas
            let numeroPersonas = Number(datosReserva.numerosNiños) + Number(datosReserva.numerosAdultos)
            let entrada = new Date(datosReserva.fechaEntrada)
            let salida = new Date(datosReserva.fechaSalida)
            const diffInDays = Math.floor((salida-entrada) / (1000*60*60*24));
            let costo=0
            console-log("numero personas ",maximoPersonas, numeroPersonas);
            if(diffInDays>0){
                if(maximoPersonas>=numeroPersonas){
                    costo = Number(datos_habitacion.valorNoche)*Number(diffInDays);
                    datosReserva.costoReserva=costo
                    await objetoServicioReserva.agregarReservaEnBD(datosReserva)
                    response.status(200).json({
                        "mensaje":"exito registrando la reserva",
                        "datos":null,
                    })
                }else{
                response.status(400).json({
                    "mensaje":"Sobrepaso el numero maximo de personas",
                    "datos":null,
                    "estado":true
                    })
                }
            }else{
                response.status(400).json({
                    "mensaje":"Sobrepasa el numero permitido de dias",
                    "datos":null,
                    "estado":true
            })
        }

            

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })

        }
    }

    async editarReserva(request,response){
        let idr=request.params.idReserva
        let datosReserva = request.body
        let objetoServicioReserva = new ServicioReserva()
        try{
            await objetoServicioReserva.editarReserva(idr,datosReserva)
            response.status(200).json({
                "mensaje":"exito editando"+idr,
                "datos":null,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })

        }
    }
    
    async eliminarReserva(request,response){
        let id_del = request.params.idReserva
        let objReserva = new ServicioReserva()
        console.log(id_del)
        try{
            await objReserva.borrarReserva(id_del)
            response.status(200).json({
                "mensaje":"se elimino la reserva",
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
            "mensaje":"error en la reserva "+error,
            "datos":null
            })
        }
    }

}