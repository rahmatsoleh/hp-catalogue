import { LitElement, html } from "lit";
import '../../../styles/component/hero-element.scss';
import SearchPage from "../pages/search-page";


class HeroElement extends LitElement{  
    
    static properties = {
        inputValue : { type: 'String'}
    }

    constructor(){
        super();
        this.inputValue = '';
    }

    render(){
        return html`
            <article id="hero-element" style="background-image: url(images/hero-image.jpg)">
                <div>
                    <h2>Spesifikasi HP</h2>
                    <p>Website Pembantu Untuk Mencari <span>Spesifikasi HP</span></p>
                    <div class="search-element">
                        <button name="button" @click=${this.getDataQuery}><i class="fas fa-search"></i></button>
                        <input type="text" placeholder="Cari HP disini..." @keyup="${this.keyAwesome}" value="${this.inputValue}">
                        <button name="reset" hidden @click=${this.hidden}>&#x2716;</button>
                    </div>
                </div>
            </article>
        `;
    }
    
    createRenderRoot(){
        return this;
    }

    getDataQuery(){
        const keyword = $('input[type="text"]').val();
        
        (keyword == '') ? location.reload() : SearchPage.renderPage(keyword);
    }

    hidden(){
        $('button[name="reset"]').attr('hidden', true);
        $('input[type="text"]').val('');
    }

    keyAwesome(e){
        const keyword = $('input[type="text"]').val();
        
        if(keyword){
            $('button[name="reset"]').removeAttr('hidden');
        } else {
            this.hidden();
        }
        
        if(e.keyCode == 13){
            this.getDataQuery();
        }
    }
}

customElements.define('hero-element', HeroElement);