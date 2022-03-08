import { LitElement, html } from "lit";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import PhoneApi from "../../data/phone-api";
import '../../../styles/component/result-search.scss';
import '../templates/card.js'
import Mockup from '../../../public/images/mockup.jpg';

class ResultSearch extends LitElement {
    static properties = {
        query : { type: 'String'}
    }

    constructor(){
        super();
        this.query = '';
    }

    createRenderRoot(){
        return this;
    }

    render(){
        return html`
            <article class="result-search">
                <h2>Hasil Pencarian <span>${this.query}</span></h2>
                <div>${until(this.makeCard(), 'Mohon ditunggu')}</div>
            </article>
        `;
    }

    async makeCard(){
        const { data } = await PhoneApi.search(this.query);
        const response = data.data.phones;
        let card = '';
        
        response.forEach(item => {
            card += `
                <card-phone 
                    image="${item.image || Mockup}"
                    merk="${item.phone_name}"
                    slug="${item.slug}"
                ></card-phone>
            `
        });

        const elementHtml = unsafeHTML(card);
        return elementHtml;
    }
}

customElements.define('result-search', ResultSearch);