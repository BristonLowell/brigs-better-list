
import { generateId } from "../Utils/GenerateId.js"
export default class Job {
  constructor({ title, hours, minimumAge, pay, imageUrl, jobDescription }) {
    this.title = title
    this.hours = hours
    this.minimumAge = minimumAge
    this.pay = pay
    this.image = imageUrl
    this.jobDescription = jobDescription || "No description available"
    this.id = generateId()
  }

  get Template() {
    return `<div class="col-4">
    <div class="card">
    <img class="card-img-top img-fluid" src="${this.image}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.title}  ${this.hours} hours per week.</h4>
        <p class="card-text">${this.pay}/hr. ${this.jobDescription}</p>
        <form onsubmit="app.jobsController.offer('${this.id}')">
        <div class="form-group p-1">
        <input type="text"
        class="form-control" name="offer" id="offer" aria-describedby="helpId" placeholder="Referal Name">
        </div>
        <button class="btn btn-success btn-block mb-1" type="submit" >Apply</button>
        </form>
        <button class="btn btn-danger btn-block" onclick="app.jobsController.delete('${this.id}')">Delete</button>

    </div>
    </div>
</div>`
  }

}