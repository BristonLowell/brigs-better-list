
import { generateId } from "../Utils/GenerateId.js"
export default class House {
  constructor({ stories, type, yearH, priceH, image, houseDescription }) {
    this.stories = stories
    this.type = type
    this.year = yearH
    this.price = priceH
    this.image = image
    this.houseDescription = houseDescription || "No description available"
    this.id = generateId()
  }

  get Template() {
    return `<div class="col-4">
    <div class="card">
    <img class="card-img-top img-fluid" src="${this.image}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.stories} story ${this.type} house</h4>
        <p class="card-text">${this.price}. ${this.houseDescription}</p>
        <form onsubmit="app.housesController.offer('${this.id}')">
        <div class="form-group p-1">
        <input type="number"
        class="form-control" name="offer" id="offer" aria-describedby="helpId" placeholder="offer">
        </div>
        <button class="btn btn-success btn-block mb-1" type="submit" >Offer</button>
        </form>
        <button class="btn btn-danger btn-block" onclick="app.housesController.delete('${this.id}')">Delete</button>

    </div>
    </div>
</div>`
  }

}