import { LitElement, html } from 'lit';
import '../../../styles/component/card-lazy.scss';

class CardLazy extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
        <div class="card-lazy">
        <div class="image-lazy">
        </div>
        <div class="description-lazy">
            <div><span></span><span></span></div>
            <div class="btn-lazy"><span></span></div>
        </div>
    </div>
        `;
  }
}

customElements.define('card-lazy', CardLazy);
