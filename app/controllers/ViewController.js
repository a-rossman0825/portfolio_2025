import { viewServices } from "../services/ViewServices.js";


export class ViewController {
  constructor() {

  }


  changeProjectView() {
    viewServices.changeProjectsView();
  }
}