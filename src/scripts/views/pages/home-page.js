import '../component/hero-element';
import '../component/article-phone';

class HomePage {
  renderPage() {
    return `
            <hero-element></hero-element>
            ${this._phoneCollection()}
        `;
  }

  _phoneCollection() {
    return `
            <article-phone articleTitle="Latest" cardData="latest"></article-phone>
            <article-phone articleTitle="Top By Interest" cardData="interest"></article-phone>
            <article-phone articleTitle="Top By Fans" cardData="fans"></article-phone>
        `;
  }
}

export default HomePage;
