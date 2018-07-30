import LocalStorage from "./localStorage"
import Controller from "./controller";
import View from "./view";
import Model from "./model";


class Rating {
    constructor() {
        const localStorage = new LocalStorage();
        const model = new Model(localStorage);
        const view = new View();
        this._controller = new Controller(model, view);
    }

    start() {
        this._controller.init();
    }
}

const run = new Rating();
run.start();