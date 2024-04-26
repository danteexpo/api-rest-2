import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item'

const getCars = async () => {
  const responseItems = await ItemModel.find({})
  return responseItems
}

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id })
  return responseItem
}

const insertCar = async (item: Car) => {
  const responseItem = await ItemModel.create(item)
  return responseItem
}

const updateCar = async (id: string, item: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, item, {
    new: true,
  })
  return responseItem
}

const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.deleteOne({ _id: id })
  return responseItem
}

export { getCars, getCar, insertCar, updateCar, deleteCar }
