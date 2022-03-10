import { LitElement, html } from 'lit';
import '../../../styles/component/header-text.scss';

class HeaderText extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
            <h1 id="header">HP Catalogue</h1>
        `;
  }
}

customElements.define('header-text', HeaderText);
