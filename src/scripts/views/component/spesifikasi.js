import { LitElement, html } from 'lit';
import '../../../styles/component/spesifikasi.scss';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import PhoneApi from '../../data/phone-api';

class SpecPhone extends LitElement {
  static properties = {
    phone: { type: 'String' },
  };

  constructor() {
    super();
    this.phone = '';
    this.addEventListener('click', this._changeImage);
  }

  createRenderRoot() {
    return this;
  }

  _changeImage(e) {
    if (!$(e.target).hasClass('thumb-image')) return;
    const image = e.target.getAttribute('src');
    $('.thumb-hero img').attr('src', image);

    const thumb = $('.thumbnails img');
    thumb.each(function () {
      $(this).removeClass('active');
    });
    $(e.target).addClass('active');
  }

  render() {
    return html`
            <article id="spec">
                ${until(this._renderDetail(this.phone), this._loading())}
            </article>
        `;
  }

  _loading() {
    const element = `
            <div class="loading">
                <span></span>
            </div>
        `;

    return unsafeHTML(element);
  }

  async _renderDetail(slug) {
    const { data } = await PhoneApi.detail(slug);
    const phone = data.data;
    const { specifications } = phone;
    let thumbnail = '';
    let SpecDetail = '';

    specifications.forEach((data) => {
      SpecDetail += `
                    <div class="spec-detail">
                        <p>${data.title}</p>
                        
            `;

      data.specs.forEach((specs) => {
        SpecDetail += `
                        <table>
                            <tr>
                                <td>${specs.key}</td>
                                <td>: ${specs.val.join(', ')}</td>
                            </tr>
                        </table>
                `;
      });

      SpecDetail += '</div>';
    });

    phone.phone_images.forEach((images) => {
      thumbnail += `
                <div class="thumb">
                    <img src="${images}" alt="${phone.phone_name}" class="thumb-image">
                </div>
            `;
    });

    const sectionDesc = `
            <section class="main-spec">
                <div class="phone-images">
                    <div class="thumb-hero">
                        <img src="${phone.thumbnail}" alt="" >
                    </div>
                    <div class="thumbnails">
                        <div class="thumb"><img src="${phone.thumbnail}" class="active thumb-image" alt="${phone.phone_name}"></div>
                        ${thumbnail}
                    </div>
                </div>
                <div class="phone-desc">
                    <h3>${phone.brand}</h3>
                    <h4>${phone.phone_name}</h4>
                    <table>
                        <tr>
                            <th>Release Date</th>
                            <td>: ${phone.release_date}</td>
                        </tr>
                        <tr>
                            <th>Dimension</th>
                            <td>: ${phone.dimension}</td>
                        </tr>
                        <tr>
                            <th>Operating System</th>
                            <td>: ${phone.os}</td>
                        </tr>
                        <tr>
                            <th>Storage</th>
                            <td>: ${phone.storage}</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section class="spesification">
                <h2>Spesification</h2>
                ${SpecDetail}
            </section>
        `;

    return unsafeHTML(sectionDesc);
  }
}

customElements.define('spec-phone', SpecPhone);
