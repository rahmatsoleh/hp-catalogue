import 'regenerator-runtime';
import '../scripts/views/component/header-text.js';
import '../scripts/views/component/hero-element.js';
import '../styles/main.scss';
import 'jquery';

const main = `
    <hero-element></hero-element>
`;

$('header').html('<header-text></header-text>');
$('main').html(main);

const form = document.querySelector('hero-element #hero-element');

console.log(form);