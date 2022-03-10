import '../component/button-back';
import '../component/spesifikasi';

class Detail {
  static renderPage(slug, keyword = '') {
    const main = `
            <button-back 
                title="Kembali ke beranda"
                inputSearch="${keyword}"
            ></button-back>
            <spec-phone phone="${slug}"></spec-phone>
        `;

    $('main').html(main);
  }
}

export default Detail;
