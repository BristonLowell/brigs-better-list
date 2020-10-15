import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HousesService {
  constructor() {
    console.log("housesService");
  }



  offer(id, offerAmount) {
    let temp = ProxyState.houses
    if (offerAmount > 0) {
      let job = temp.find(j => j.id == id)
      job.price += parseInt(offerAmount)
      ProxyState.houses = temp
    }
  }
  removeHouse(id) {
    let temp = ProxyState.houses
    let houseIndex = temp.findIndex(h => h.id == id)
    temp.splice(houseIndex, 1)
    ProxyState.houses = temp
  }

  createHouse(rawHouse) {
    // let newCar = new Car(rawCar) 
    // console.log(newCar)  
    // let cars = [...ProxyState.cars, newCar ]
    // ProxyState.cars = cars

    // ProxyState.cars = ProxyState.cars.concat(new Car(rawCar))

    let temp = ProxyState.houses
    temp.push(new House(rawHouse))
    ProxyState.houses = temp
  }

}
export const housesService = new HousesService()