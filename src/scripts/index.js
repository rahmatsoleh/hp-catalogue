import 'regenerator-runtime';
import '../scripts/views/component/header-text.js';
import '../scripts/views/component/footer.js';
import '../scripts/views/component/button-scroll.js';
// import '../scripts/views/component/hero-element.js';
// import '../scripts/views/component/article-phone.js';
import HomePage from './views/pages/home-page.js';
import SearchPage from './views/pages/search-page.js';
import Detail from './views/pages/detail.js';
import 'jquery';
import './utils/font-awesome.js';

// const App = new SearchPage();
const App = new HomePage();

$('header').html('<header-text></header-text>');
$('footer').html('<footer-text></footer-text>');

// $(window).on("load", _ => {
//     $('main').html(App.renderPage('dzgdfgdfgzdfg'));
// })
$(window).on("load", _ => {
    $('main').html(App.renderPage());
})

// const App = new Detail();

// $(window).on("load", () => {
//     $('main').html(App.renderPage('apple_iphone_12_pro_max-10237', 'apple'));
// })