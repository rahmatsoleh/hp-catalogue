import '../../../styles/component/card.scss';
import { LitElement, html } from 'lit';
import Detail from '../pages/detail';
import Mockup from '../../../public/images/mockup.jpg';

class Card extends LitElement {
  static properties = {
    image: { type: 'String' },
    merk: { type: 'String' },
    slug: { type: 'String' },
    keyword: { type: 'String' },
  };

  constructor() {
    super();
    this.image = Mockup;
    this.merk = 'Brand Hanphone';
    this.slug = '';
    this.keyword = '';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
            <div class="card">
                <div class="image">
                    <img src="${this.image}" alt="${this.merk}" />
                </div>
                <div class="description">
                    <h3>${this.merk}</h3>
                    <a href="#" slug="${this.slug}" @click="${this._clickHandler}">Lihat Detail &#x2794;</a>
                </div>
            </div>
        `;
  }

  _clickHandler(e) {
    Detail.renderPage(e.target.getAttribute('slug'), this.keyword);
  }
}

customElements.define('card-phone', Card);
