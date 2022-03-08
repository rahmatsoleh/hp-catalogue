import 'regenerator-runtime';
import '../scripts/views/component/header-text.js';
// import '../scripts/views/component/hero-element.js';
// import '../scripts/views/component/article-phone.js';
import HomePage from './views/pages/home-page.js';
import '../styles/main.scss';
import 'jquery';

const App = new HomePage();

$('header').html('<header-text></header-text>');

$(window).on("load", _ => {
    $('main').html(App.renderPage());
})
