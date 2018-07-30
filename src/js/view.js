import Template from "./template";

export default class View {
    constructor() {
        this._template = new Template();
        this._app = document.querySelector('.app');
    }

    get _options() {
        return {
            stars: this._app.querySelectorAll('.fa-star')
        }
    }

    init(resultRating) {
        this._renderStars();
        this._renderTitle('.content');
        this._renderAvgRating(resultRating, '.content')
    }

    _renderTitle(parentSelector) {
        const template = this._template.createTitleTemplate();
        document.querySelector(parentSelector).insertAdjacentHTML('afterbegin', template);
    }

    _renderStars() {
        const template = this._template.createStarsTemplate();
        this._app.insertAdjacentHTML('afterbegin', template);
    }

    _renderAvgRating(resultRating, parentSelector) {
        if (resultRating.length) {
            let avgRating = 0;
            for (let i = 0; i < resultRating.length; i++) {
                avgRating += Number(resultRating[i])
            }
            avgRating = (avgRating / resultRating.length).toFixed(1);
            const template = this._template.createResultTemplate(avgRating);
            const divResult = document.querySelector('.resultRating');
            if (divResult) {
                divResult.remove();
                document.querySelector(parentSelector).insertAdjacentHTML('afterend', template);
            } else {
                document.querySelector(parentSelector).insertAdjacentHTML('afterend', template);
            }

        }
    }

    bindEvent(eventName, handler) {
        switch (eventName) {
            case 'addRating':
                this._addRating(handler);
                break;
            default:
                console.log("Unknown event");
        }
    }

    _addRating(handler) {
        for (let i = 0; i < this._options.stars.length; i++) {
            this._options.stars[i].addEventListener('click', (event) => {
                const rating = this._options.stars[i].dataset.rating;
                handler(rating);
            });
        }
    }
}