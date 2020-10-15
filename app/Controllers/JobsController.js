import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsServices.js"

function _draw() {
  let jobs = ProxyState.jobs
  let template = ""
  jobs.forEach(j => template += j.Template)
  document.getElementById("jobs").innerHTML = template
}

export default class JobsController {
  constructor() {
    console.log("jobs controller")
    console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  createJob() {
    event.preventDefault();
    console.log("job creating")
    let form = event.target
    console.log(form)
    let rawJob = {
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      minimumAge: form.minimumAge.value,
      // @ts-ignore
      pay: form.pay.value,
      // @ts-ignore
      jobDescription: form.jobDescription.value,
      // @ts-ignore
      imageUrl: form.imageUrl.value
    }
    console.log(rawJob)
    jobsService.createJob(rawJob)
  }

  delete(id) {
    jobsService.removeJob(id)
  }

  offer(id) {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.offer.value)
    // @ts-ignore
    let offer = form.offer.value
    jobsService.offer(id, offer)
  }

}