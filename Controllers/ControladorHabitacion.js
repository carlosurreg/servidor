import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"
export class ControladorHabitacion{

    constructor(){}

    async buscarHabitaciones(request,response){

        let objetoServicioHabitacion = new ServicioHabitacion

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos": await objetoServicioHabitacion.buscarHabitaciones(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })
        }             
    }

    async buscarHabitacionPorId(request,response){
        let idhabitacion=request.params.idHabitacion//recibo id dela peticion 
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{

            response.status(200).json({
                "mensaje":"exito en la consulta"+idhabitacion,
                "datos": await objetoServicioHabitacion.buscarHabitacionPorId(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })
        }
    }

    async registrarHabitacion(request,response){
        let datosHabitacion=request.body
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            if(datosHabitacion.numeroMaximoPersonas<5){

                await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)
            
            response.status(200).json({
                "mensaje":"exito registrando habitacion",
                "datos":null,
            })
        
            }else{
                response.status(400).json({
                    "mensaje":"solo se permiten 5 personas ",
                    "datos":null,
            })
            }

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async editarHabitacion(request,response){
        let id=request.params.idHabitacion
        let datosEditar = request.body
        
        let objetoServicioHabitacion = new ServicioHabitacion()

        try{
            await objetoServicioHabitacion.editarHabitacion(id,datosEditar)
            response.status(200).json({
                "mensaje":"exito editando"+id,
                "datos":datosHabitacion,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }


}