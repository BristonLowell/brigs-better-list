import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesServices.js"

function _draw() {
  let houses = ProxyState.houses
  let template = ""
  houses.forEach(h => template += h.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HousesController {
  constructor() {
    console.log("houses controller")
    console.log(ProxyState.houses)
    _draw()
    ProxyState.on("houses", _draw)
  }

  createHouse() {
    event.preventDefault();
    console.log("house creating")
    let form = event.target
    console.log(form)
    let rawHouse = {
      // @ts-ignore
      stories: form.stories.value,
      // @ts-ignore
      type: form.type.value,
      // @ts-ignore
      yearH: form.yearH.value,
      // @ts-ignore
      priceH: form.priceH.value,
      // @ts-ignore
      houseDescription: form.houseDescription.value,
      // @ts-ignore
      image: form.imageURL.value
    }
    console.log(rawHouse)
    housesService.createHouse(rawHouse)
  }

  delete(id) {
    housesService.removeHouse(id)
  }

  offer(id) {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.offer.value)
    // @ts-ignore
    let offer = form.offer.value
    housesService.offer(id, offer)
  }

}