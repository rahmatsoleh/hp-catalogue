import { LitElement, html } from "lit";

class HeaderText extends LitElement {
    createRenderRoot(){
        return this;
    }
    
    render(){
        return html`
            <h1 class="font-poppins bg-sky-600 text-white text-2xl text-center uppercase font-bold p-2 shadow-md md:text-left">HP Catalogue</h1>
        `;
    }
}

customElements.define("header-text", HeaderText);