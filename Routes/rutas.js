import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion() //usando el controlador

import { ControladorReserva } from '../Controllers/ControladorReserva.js'
let controladorReserva=new ControladorReserva()

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesnick/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorReserva.reservarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:idReserva',controladorReserva.reservarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorReserva.registrarReserva)
rutasPersonalizadas.put('/hotelesnick/habitacion/:idReserva',controladorReserva.editarReserva)

