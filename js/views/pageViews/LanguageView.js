import * as elements from "../../elements.js";
import stepsView from "./StepsView";

class LanguageView {
  divElements = {
    language: null,
    languageEachDivs: null,
    de: null,
    en: null,
  };

  _markup() {
    return `<div class="language">
            <div class="language-inner">
                <div class="language-each language-de active" data-lang="de">de</div>
                <div class="language-each language-en" data-lang="en">en</div>
            </div>
        </div>`;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this._markup());
  }

  selectElements() {
    this.divElements.language = document.querySelector(".language");
    this.divElements.de = document.querySelector(".language-de");
    this.divElements.en = document.querySelector(".language-en");
    this.divElements.languageEachDivs = document.querySelectorAll(
      ".language-each"
    );
  }

  selectLanguageEvent(allocateText) {
    this.divElements.language.addEventListener(
      "click",
      function (e) {
        const languages = Array.from(this.divElements.languageEachDivs);
        languages.forEach((lang) => {
          if (e.target === lang && !lang.classList.contains("active")) {
            lang.classList.add("active");
            localStorage.setItem("lang", lang.dataset.lang);
            allocateText(lang.dataset.lang);
          } else if (e.target === lang && lang.classList.contains("active")) {
            localStorage.setItem("lang", lang.dataset.lang);
            allocateText(lang.dataset.lang);
          } else if (lang.classList.contains("active")) {
            lang.classList.remove("active");
          }
        });
        stepsView.clickTopicBtn();
      }.bind(this)
    );
  }

  setLanguage(allocateText) {
    const languages = Array.from(this.divElements.languageEachDivs);
    const langInLocalStorage = localStorage.getItem("lang");
    let clickDiv;
    if (langInLocalStorage) {
      languages.forEach((lang) => {
        if (lang.dataset.lang === langInLocalStorage) {
          clickDiv = lang;
        }
      });
    } else {
      const browserLangArr = ["de-at", "de-de", "de-li", "de-lu", "de-ch"];
      if (browserLangArr.includes(navigator.language)) {
        clickDiv = this.divElements.de;
        console.log("de...");
      } else {
        clickDiv = this.divElements.en;
        console.log("en...");
      }
    }
    clickDiv.click();
  }
}

export default new LanguageView();
