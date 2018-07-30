import Notification from "./notification";


export default class Controller {
    constructor(model, view) {
        this._view = view;
        this._model = model;
        this._notification = new Notification();
    }

    init() {
        this.resultRating = this._model.getRating();
        this._view.init(this.resultRating);
        this.bindEventListener();
    }

    bindEventListener() {
        this._view.bindEvent("addRating", this._addRatingHandler.bind(this));
    }

    _addRatingHandler(rating) {

        this._notification.show({
            text: 'Спасибо, ваш голос добавлен для рейтинга!',
            class: 'alert alert-success'
        });

        this._createNewRating(rating);
    }

    _createNewRating(rating) {
        this._model.addRating(rating);
        this._view._renderAvgRating(this.resultRating, '.content');


    }

}