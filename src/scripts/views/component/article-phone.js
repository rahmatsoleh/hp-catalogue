import '../../../styles/component/article.scss';
import { LitElement, html } from 'lit';
import '../templates/card.js';

class ArticlePhone extends LitElement {

    static properties = {
        articleTitle : { type: 'String'},
        dataCard : { type: 'Array' }
    }

    constructor(){
        super();
        this.articleTitle = 'Article Title';
        this.dataCard = [];
    }

    createRenderRoot(){
        return this;
    }

    render(){
        return html`
            <article id="article-catalogue">
                <h2>${this.articleTitle}</h2>
                <div>${this.renderCard()}</div>
            </article>
        `;
    }

    renderCard(){
        const card = html`
            <card-phone></card-phone>
            <card-phone></card-phone>
            <card-phone></card-phone>
            <card-phone></card-phone>
        `;

        return card;
    }
}

customElements.define('article-phone', ArticlePhone);