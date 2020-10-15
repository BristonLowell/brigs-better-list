import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";

class JobsService {
  constructor() {
    console.log("jobsService");
  }



  offer(id, offerAmount) {
    let temp = ProxyState.jobs
    if (offerAmount > 0) {
      let job = temp.find(j => j.id == id)
      job.pay += parseInt(offerAmount)
      ProxyState.jobs = temp
    }
  }
  removeJob(id) {
    let temp = ProxyState.jobs
    let jobIndex = temp.findIndex(j => j.id == id)
    temp.splice(jobIndex, 1)
    ProxyState.jobs = temp
  }

  createJob(rawJob) {
    let temp = ProxyState.jobs
    temp.push(new Job(rawJob))
    ProxyState.jobs = temp
  }

}
export const jobsService = new JobsService()