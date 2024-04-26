import { Car } from '../interfaces/car.interface'
import CarModel from '../models/cars'

const getCars = async () => {
  const responseCars = await CarModel.find({})
  return responseCars
}

const getCar = async (id: string) => {
  const responseCar = await CarModel.findOne({ _id: id })
  return responseCar
}

const insertCar = async (car: Car) => {
  const responseCar = await CarModel.create(car)
  return responseCar
}

const updateCar = async (id: string, car: Car) => {
  const responseCar = await CarModel.findOneAndUpdate({ _id: id }, car, {
    new: true,
  })
  return responseCar
}

const deleteCar = async (id: string) => {
  const responseCar = await CarModel.deleteOne({ _id: id })
  return responseCar
}

export { getCars, getCar, insertCar, updateCar, deleteCar }
