import 'regenerator-runtime';
import '../scripts/views/component/header-text';
import '../scripts/views/component/footer';
import '../scripts/views/component/button-scroll';
import HomePage from './views/pages/home-page';
import 'jquery';
import '../../utils/font-awesome';

const App = new HomePage();

$('header').html('<header-text></header-text>');
$('footer').html('<footer-text></footer-text>');

$(window).on('load', () => {
  $('main').html(App.renderPage());
});
