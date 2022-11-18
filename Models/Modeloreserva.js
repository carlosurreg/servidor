//idHabitacion:String
//fechaEntrada:Date
//fechaSalida:Date
//numerosAdultos:Number
//numerosNiños:Number
//costoReserva.Number

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({
    
    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numerosAdultos:{
        required:true,
        type:Number
    },
    numerosNiños:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:true,
        type:Number
    }

  });

  export const modeloReserva=mongoose.model('Reserva',EsquemaReserva)