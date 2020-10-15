import Car from "./Models/Car.js"
import Job from "./Models/Job.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({ make: "Honda", model: "Accord", year: 2002, price: 5000, img: "//placehold.it/200x200", description: "This is a red honda." })]
  // cars = []

  /** @type {Job[]}*/

  jobs = [new Job({ title: "Landscaper", hours: 12, minimumAge: 16, pay: 10, imageUrl: "//placehold.it/200x200", jobDescription: "This is a sweet Job." })]
  // jobs = []

  /** @type {House[]}*/

  houses = [new House({ stories: "3-Story", type: "Retro", yearH: 2017, priceH: 200000, image: "//placehold.it/200x200", houseDescription: "This is a sweet House." })]
  // houses = []
}
// new Car("Jeep", "Rango",1990, 10000, "//placehold.it/200x200", "A nice jeep")

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
