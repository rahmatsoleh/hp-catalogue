import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import '../../../styles/component/result-search.scss';
import PhoneApi from '../../data/phone-api';
import '../templates/card-lazy';
import '../templates/card';
import Mockup from '../../../public/images/mockup.jpg';
import Empty from '../../../public/images/empty.jpg';

class ResultSearch extends LitElement {
  static properties = {
    query: { type: 'String' },
  };

  constructor() {
    super();
    this.query = '';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
            <article class="result-search">
                <h2>Hasil Pencarian <span>${this.query}</span></h2>
                <div>${until(this.makeCard(), this.makeCardLazy())}</div>
            </article>
        `;
  }

  async makeCard() {
    const { data } = await PhoneApi.search(this.query);
    const response = data.data.phones;
    let card = '';

    response.forEach((item) => {
      card += `
                <card-phone 
                    image="${item.image || Mockup}"
                    merk="${item.phone_name}"
                    slug="${item.slug}"
                    keyword="${this.query}"
                ></card-phone>
            `;
    });

    if (response.length == 0) {
      card = `
                <div class="image-empty">
                <img src="${Empty}" alt="Nothing Phone"/>
                <p>${this.query} Tidak Ditemukan</p>
                <div>
            `;
    }

    const elementHtml = unsafeHTML(card);
    return elementHtml;
  }

  makeCardLazy() {
    let card = '';
    for (let i = 0; i < 10; i++) {
      card += '<card-lazy></card-lazy>';
    }

    return unsafeHTML(card);
  }
}

customElements.define('result-search', ResultSearch);
