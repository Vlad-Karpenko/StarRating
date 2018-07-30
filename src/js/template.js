export default class Template {
    createTitleTemplate() {
        const template = `<h1>JavaScript Rating</h1>`;
        return template;
    }

    createStarsTemplate() {
        const template = `<section>
                             <div class="container">
                             <div class="content">
                                 <div class="stars">
                                    <i class="fas fa-star" data-rating="1"></i>
                                    <i class="fas fa-star" data-rating="2"></i>
                                    <i class="fas fa-star" data-rating="3"></i>
                                    <i class="fas fa-star" data-rating="4"></i>
                                    <i class="fas fa-star" data-rating="5"></i>
                                </div>
                                </div>
                              </div>
                          </section>`;
        return template;
    }

    createResultTemplate(ratingData) {
        const template = `<div class="resultRating">
                            <span>Оценка: ${ratingData}</span>
                        </div>`;
        return template;
    }
}