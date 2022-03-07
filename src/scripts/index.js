import 'regenerator-runtime';
import '../scripts/views/component/header-text.js';
import '../scripts/views/component/hero-element.js';
import '../scripts/views/component/article-phone.js';
import '../styles/main.scss';
import 'jquery';

const main = `
    <hero-element></hero-element>
    <article-phone articleTitle="HP Terbaru"></article-phone>
`;

$('header').html('<header-text></header-text>');
$('main').html(main);
