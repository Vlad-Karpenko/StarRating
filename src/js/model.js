export default class Model {
    constructor(storage) {
        this._storage = storage;
    }

    addRating(rating) {
        this._storage.addRating(rating);
    }


    getRating() {
        return this._storage.getRating();
    }
}