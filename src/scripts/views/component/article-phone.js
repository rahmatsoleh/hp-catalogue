import '../../../styles/component/article.scss';
import Mockup from '../../../public/images/mockup.jpg';
import { LitElement, html } from 'lit';
import { until } from 'lit/directives/until.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import '../templates/card.js';
import PhoneApi from '../../data/phone-api';

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
                <div>${until(this._renderCard(), '')}</div>
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

    
}

customElements.define('article-phone', ArticlePhone);