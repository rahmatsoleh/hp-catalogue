import '../component/hero-element.js';
import '../component/article-phone.js';
import PhoneApi from '../../data/phone-api.js';

class HomePage {
    renderPage(){
        return `
            <hero-element></hero-element>
            ${this._phoneCollection()}
        `;
    }

    _phoneCollection(){

        return `
            <article-phone articleTitle="HP Terbaru" cardData="latest"></article-phone>
            <article-phone articleTitle="HP Menarik" cardData="interest"></article-phone>
            <article-phone articleTitle="HP Populer" cardData="fans"></article-phone>
        `
    }
}

export default HomePage;