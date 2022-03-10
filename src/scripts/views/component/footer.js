import { LitElement, html } from 'lit';
import '../../../styles/component/footer.scss';

class Footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
            <div class="footer">
                <p>Rahmat Soleh | MSIB 2022</p>
                <p>Fundamental Front End | Dicoding</p>
            </div>
        `;
  }
}

customElements.define('footer-text', Footer);
