import '../component/result-search.js'

class SearchPage {
    static renderPage(keyword){
        $('main').html(this._pageSection(keyword));
        this._pageSection(keyword);
    }

    static _pageSection(keyword){
        return `
            <hero-element inputValue="${keyword}"></hero-element>
            <result-search query="${keyword}"></result-search>
        `;
    }
}

export default SearchPage;