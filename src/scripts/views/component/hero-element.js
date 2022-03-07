import { LitElement, html } from "lit";
import PhoneApi from "../../data/phone-api";
import '../../../styles/component/hero-element.scss';


class HeroElement extends LitElement{    

    render(){
        return html`
            <article id="hero-element" style="background-image: url(images/hero-image.jpg)">
                <div>
                    <h2>Spesifikasi HP</h2>
                    <p>Website Pembantu Untuk Mencari <span>Spesifikasi HP</span></p>
                    <div class="search-element">
                        <button name="button" @click=${this.getDataQuery}><i class="fas fa-search"></i></button>
                        <input type="text" placeholder="Cari HP disini..." @keyup="${this.keyAwesome}">
                        <button name="reset" hidden @click=${this.hidden}>&#x2716;</button>
                    </div>
                </div>
            </article>
        `;
    }
    
    createRenderRoot(){
        return this;
    }

    async getDataQuery(){
        const keyword = $('input[type="text"]').val();
        const dataResponse = await PhoneApi.search(keyword) || 'Kosong';
        console.log(dataResponse);
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