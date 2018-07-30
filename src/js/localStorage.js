export default class LocalStorage {
    constructor() {
        this._storage = window.localStorage;
        this._rating = JSON.parse(this._storage.getItem('rating')) || [];
    }

    addRating(rating) {
        this._rating.push(rating);
        this._updateStorage();
    }


    getRating() {
        return this._rating;
    }

    _updateStorage() {
        this._storage.setItem('rating', JSON.stringify(this._rating));
    }
}