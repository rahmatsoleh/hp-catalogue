import { LitElement, html } from "lit";


class HeroElement extends LitElement{    
    static keyword = '';

    render(){
        return html`
            <section id="hero-element" style="background-image: url(images/hero-image.jpg)">
                <div>
                    <h2>Spesifikasi HP</h2>
                    <p>Website Pembantu Untuk Mencari <span>Spesifikasi HP</span></p>
                    <div class="search-element">
                        <button name="button" @click=${this.getKeyword}><i class="fas fa-search"></i></button>
                        <input type="text" placeholder="Cari HP disini..." @keyup="${this.keyAwesome}">
                        <button name="reset" hidden @click=${this.hidden}>&#x2716;</button>
                    </div>
                </div>
            </section>
        `;
    }
    
    createRenderRoot(){
        return this;
    }

    getKeyword(){
        console.log(this.keyword);
    }

    hidden(){
        $('button[name="reset"]').attr('hidden', true);
        $('input[type="text"]').val('');
    }

    keyAwesome(e){
        const keyword = $('input[type="text"]').val();
        this.keyword = keyword;
        
        if(keyword){
            $('button[name="reset"]').removeAttr('hidden');
        } else {
            this.hidden();
        }
        
        if(e.keyCode == 13){
            this.getKeyword();
        }
    }
}

customElements.define('hero-element', HeroElement);