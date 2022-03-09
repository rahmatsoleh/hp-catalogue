import { LitElement, html, css } from "lit";
import SearchPage from "../pages/search-page";

class ButtonBack extends LitElement {
    constructor(){
        super();
        this.inputSearch = '';
    }

    static properties = {
        inputSearch : { type: 'String'}
    }

    static styles = css`
        a {
            display: block;
            font-size: 1.5em;
            color: #457b9d;
            text-decoration: none;
            margin: 0 .5em;
            font-weight: bold;
        }
        
        a span {
            display: inline-block;
            transform: rotate(180deg);
            margin-right: 5px;
        }

        a:hover {
            color: #1d3557;
            text-decoration: underline;
        }
    `;

    render(){
        return html`
            <a href="#" @click="${this._backToHome}"><span>&#x279C;</span>Kembali</a>
        `;
    }

    _backToHome(){

        (this.inputSearch == '') ? location.reload() : SearchPage.renderPage(this.inputSearch);
    }
}

customElements.define('button-back', ButtonBack);