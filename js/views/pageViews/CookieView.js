import * as elements from "../../elements.js";

class CookieView {
  cookieDiv = null;
  textElements = {
    cookieBtn: null,
    cookieText1: null,
    cookieText2: null,
    cookiePolicyLink: null,
  };
  _markup() {
    return `
        <div class="cookies hide-cookies">
            <div class="cookies-inner">
                
                <span class="cookie-text-1">
                this website uses some cookies and you can find our cookie policy
                included in the 
                </span>
                <span class="cookie-policy-link">privacy policy</span>
                <span class="cookie-text-2">
                please send your concent for cookies by cliking the following button
                </span>
                <div class="cookie-btn">agree</div>
            </div>
        </div>
        `;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this._markup());
  }

  selectElements() {
    this.cookieDiv = document.querySelector(".cookies");
    this.textElements.cookieBtn = document.querySelector(".cookie-btn");
    this.textElements.cookieText1 = document.querySelector(".cookie-text-1");
    this.textElements.cookieText2 = document.querySelector(".cookie-text-2");
    this.textElements.cookiePolicyLink = document.querySelector(
      ".cookie-policy-link"
    );
  }

  showCookies() {
    const isCookies = localStorage.getItem("zeylanicCookies");
    if (!isCookies) {
      if (this.cookieDiv.classList.contains("hide-cookies")) {
        this.cookieDiv.classList.remove("hide-cookies");
      }
    } else if (!(isCookies === "agreed")) {
      if (this.cookieDiv.classList.contains("hide-cookies")) {
        this.cookieDiv.classList.remove("hide-cookies");
      }
    } else {
      if (!this.cookieDiv.classList.contains("hide-cookies")) {
        this.cookieDiv.classList.add("hide-cookies");
      }
    }
  }

  agreeClickEvent() {
    this.textElements.cookieBtn.addEventListener(
      "click",
      function () {
        localStorage.setItem("zeylanicCookies", "agreed");
        if (!this.cookieDiv.classList.contains("hide-cookies")) {
          this.cookieDiv.classList.add("hide-cookies");
        }
      }.bind(this)
    );
  }

  cookiePolicyClickEvent(showLegalText) {
    this.textElements.cookiePolicyLink.addEventListener(
      "click",
      function (e) {
        showLegalText("privacyView");
      }.bind(this)
    );
  }
}

export default new CookieView();
