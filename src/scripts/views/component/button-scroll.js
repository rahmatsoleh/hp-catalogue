import { LitElement, html } from "lit";
import '../../../styles/component/button-scroll.scss';

class ButtonScroll extends LitElement {

    createRenderRoot(){
        return this;
    }

    render(){
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 300){
                $('#scroll-top').css('display', 'block');
            } else {
                $('#scroll-top').css('display', 'none');
            }
        })

        return html`
            <button id="scroll-top" @click="${this._scrollTop}"><span>&#x2794;</span></button>
        `;
    }

    _scrollTop(){
        $(window).scrollTop(0);
    }
}

customElements.define('button-scroll', ButtonScroll);