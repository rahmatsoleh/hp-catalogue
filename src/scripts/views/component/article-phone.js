import '../../../styles/component/article.scss';
import { LitElement, html } from 'lit';
import { until } from 'lit/directives/until.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import '../templates/card.js';
import PhoneApi from '../../data/phone-api';

const fetchData = async () => {
    const { data } = await PhoneApi.latest();
    const phoneData = data.data.phones;
    let cardData = '';
    phoneData.forEach(item => {
        cardData += `
            <card-phone 
                image="${item.image}"
                merk="${item.phone_name}"
                slug="${item.slug}"
            ></card-phone>
        `
    });
    const htmlElement = unsafeHTML(cardData);
    return htmlElement;
}

class ArticlePhone extends LitElement {

    static properties = {
        articleTitle : { type: 'String'},
        dataCard : { state: true }
    }

    constructor(){
        super();
        this.articleTitle = 'Article Title';
        this.dataCard = fetchData();
    }

    createRenderRoot(){
        return this;
    }

    render(){
        return html`
            <article id="article-catalogue">
                <h2>${this.articleTitle}</h2>
                <div>${until(this.dataCard, '')}</div>
            </article>
        `;
    }
}

customElements.define('article-phone', ArticlePhone);