import '../../../styles/component/article.scss';
import Mockup from '../../../public/images/mockup.jpg';
import { LitElement, html } from 'lit';
import { until } from 'lit/directives/until.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import '../templates/card.js';
import PhoneApi from '../../data/phone-api';
import '../templates/card-lazy.js';

class ArticlePhone extends LitElement {

    static properties = {
        articleTitle : { type: 'String'},
        cardData : { type: 'String' }
    }

    constructor(){
        super();
        this.articleTitle = 'Article Title';
        this.cardData = '';
    }

    createRenderRoot(){
        return this;
    }

    render(){
        return html`
            <article class="article-catalogue">
                <h2>${this.articleTitle}</h2>
                <div>${until(this._renderCard(), this.makeCardLazy())}</div>
            </article>
        `;
    }

    async _renderCard(){
        const { data } = await PhoneApi.listPhone(this.cardData);
        const phoneData = data.data.phones;
        const response = phoneData;
        let cardData = '';
        response.forEach(item => {
            cardData += `
                <card-phone 
                    image="${item.image || Mockup}"
                    merk="${item.phone_name}"
                    slug="${item.slug}"
                ></card-phone>
            `
        });
        const htmlElement = unsafeHTML(cardData);
        return htmlElement;
    }

    makeCardLazy(){
        let card = '';
        for(let i = 0; i < 10; i++){
            card += '<card-lazy></card-lazy>'
        }

        return unsafeHTML(card);
    }
}

customElements.define('article-phone', ArticlePhone);