import * as elements from "../../elements.js";

class LegalTextView {
  legalTextDiv = null;
  homeLink = null;

  renderMarkup(markup) {
    const finalMarkup = `
    <div class="legal-text">
        <div class="legal-text-inner">
          <div class="home-icon">
            <span class="material-icons-outlined">
              home
            </span>
          </div>
            ${markup}
          <div class="home-icon">
            <span class="material-icons-outlined">
              home
            </span>
          </div>
        </div>
    </div>
    `;

    elements.root.insertAdjacentHTML("afterbegin", finalMarkup);
    this.selectElements();
    this.legalTextDiv.scrollIntoView();
  }

  selectElements() {
    this.legalTextDiv = document.querySelector(".legal-text");
    this.homeLink = document.querySelectorAll("material-icons-outlined");
  }

  empty() {
    if (this.legalTextDiv) this.legalTextDiv.remove();
  }

  gotoHomeClickEvent(hideLegalText) {
    if (this.legalTextDiv) {
      this.legalTextDiv.addEventListener("click", function (e) {
        if (e.target.classList.contains("material-icons-outlined")) {
          hideLegalText();
        }
      });
    }
  }
}

export default LegalTextView;
