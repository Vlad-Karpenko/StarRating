export default class Notification {

    show(notify) {
        const content = document.querySelector('.content');
        const alert = `<div class="notification ${notify.class}">${notify.text}</div>`;

        this._hide();
        content.insertAdjacentHTML('afterbegin', alert);

        setTimeout(this._hide, 2000);
    }

    _hide() {
        const currentAlert = document.querySelector('.notification');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}