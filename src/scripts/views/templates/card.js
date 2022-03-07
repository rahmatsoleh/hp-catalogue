import '../../../styles/component/card.scss';
import { LitElement, html } from 'lit';
import Mockup from '../../../public/images/mockup.jpg';

class Card extends LitElement{
    createRenderRoot(){
        return this;
    }

    render(){
        return html`
            <div class="card">
                <div class="image">
                    <img src="${Mockup}" alt="Judul Hp" />
                </div>
                <div class="description">
                    <h3>Samsung Galaxy a4567</h3>
                    <a href="#" slug="slug">Lihat Detail &#x2794;</a>
                </div>
            </div>
        `;
    }
}

customElements.define('card-phone', Card);