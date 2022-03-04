import { LitElement, html } from "lit";

class FooterText extends LitElement {
    createRenderRoot(){
        return this;
    }

    render(){
        return html`
            <div class="font-poppins text-sm bg-sky-600 text-white font-normal uppercase text-center py-2">
                <p>Rahmat Soleh | MSIB 2</p>
                <p>Dicoding | Fundamental Front End Web</p>
            </div>
        `;
    }
}

customElements.define('footer-text', FooterText);