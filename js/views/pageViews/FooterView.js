import * as elements from "../../elements.js";

class FooterView {
  footer = null;
  imprintLink = null;
  privacyLink = null;
  impressum = null;
  privacy = null;

  textElements = {
    footerImpressum: null,
    footerPrivacy: null,
  };

  _markup() {
    return `
        <div class="footer">
          <div class="footer-inner">
            <div class="footer-block footer-left">&copy; zeylanic.de</div>
            <div class="footer-block footer-middle"></div>
            <div class="footer-block footer-right">
                <span class="imprint-link legal-text-link" data-legal-text = "impressumView">imprint</span> | <span class="privacy-link legal-text-link" data-legal-text = "privacyView">privacy</span>
            </div>
          </div>
        </div>
        `;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this._markup());
  }

  selectElements() {
    this.footer = document.querySelector(".footer");
    this.impressum = document.querySelector(".imprint-link");
    this.privacy = document.querySelector(".privacy-link");

    this.textElements.footerImpressum = this.impressum;
    this.textElements.footerPrivacy = this.privacy;
  }

  empty() {
    if (this.footer) this.footer.remove();
  }

  clickFooter(showLegalText) {
    this.footer.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("legal-text-link")) {
          showLegalText(e.target.dataset.legalText);
        }
        if (e.target.classList.contains("footer-middle")) {
          console.log("fb");
          window.open(`https://www.facebook.com/zeylanicde`);
        }
      }.bind(this)
    );
  }
}

export default new FooterView();
