import LegalTextView from "./LegalTextView.js";

class ImpressumView extends LegalTextView {
  _markup() {
    return `
      <p class="legal-text-title">impressum</p>

      <p>Zeylanic</p>

      <p>Inhaber: Malin Manjula Samaranayake</p>

      <p>Wallbergstrasse 10</p>

      <p>81539 München</p>

      <p>Deutschland</p>

      <p>Telefon: +4915117577304</p>

      <p>Mail: malin@zeylanic.de</p>

      <p>Umsatzsteuer-Identifikationsnummer: 146/183/41802</p>

      <p>Kleinunternehmer gemäß § 19 UStG</p>

      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. Wir sind bereit, an einem außergerichtlichen Schlichtungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <!--<p>Impressum erstellt mit dem <a href="https://shop.trustedshops.com/de/">Trusted Shops</a> Rechtstexter in Kooperation mit <a href="https://www.wbs-law.de/">Wilde Beuger Solmecke Rechtsanwälte</a> .</p>-->

      `;
  }

  render() {
    this.renderMarkup(this._markup());
  }
}

export default new ImpressumView();
