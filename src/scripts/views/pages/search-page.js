import '../component/result-search.js'

class SearchPage {
    static renderPage(keyword = ''){
        if(!keyword) location.reload();
        $('main').html(this._pageSection(keyword));
        this._pageSection(keyword);
    }

    static _pageSection(params){
        return `
            <hero-element inputValue="${params}"></hero-element>
            <result-search query="${params}"></result-search>
        `;
    }
}

export default SearchPage;