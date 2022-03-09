import '../component/button-back.js';
import '../component/spesifikasi.js';

class Detail {
    static renderPage(slug, keyword=''){
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