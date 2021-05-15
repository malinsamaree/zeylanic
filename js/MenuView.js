import * as elements from "./elements.js";

class MenuView {
  menuLetters = null;
  menu = null;
  menuBlock = null;
  menuExit = null;
  menuItems = null;

  textElements = {
    menuHome: null,
    menuWork: null,
    menuService: null,
    menuReviews: null,
    menuProcess: null,
    menuTools: null,
    menuGraphics: null,
    menuContact: null,
  };

  _markup() {
    return `
        <div class="menu">
            <div class="menu-inner">
                <span class="menu-letters">Z</span>&nbsp;&nbsp;<span class="menu-letters">YLANIC</span>    
                <!--Z&nbsp;&nbsp;YLANIC-->
                <div class="menu-stripes">
                    <div class="menu-stripes-inner">
                        <div class="menu-strip-container">
                            <div class="menu-stripe menu-stripe-1"></div>
                            <div class="menu-stripe menu-stripe-2"></div>
                            <div class="menu-stripe menu-stripe-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="menu-block">
          <div class="menu-block-inner">
            <div class="menu-item menu-item-home" data-view="home">home</div>
            <div class="menu-item menu-item-work" data-view="main-ref">our work</div>
            <div class="menu-item menu-item-services" data-view="imagine">services</div>
            <div class="menu-item menu-item-reviews" data-view="recomendations">reviews</div>
            <div class="menu-item menu-item-process" data-view="steps">process</div>
            <div class="menu-item menu-item-tools" data-view="knowhow">our toolbox</div>
            <div class="menu-item menu-item-praphics" data-view="graphics">graphics and photography</div>
            <div class="menu-item menu-item-contact" data-view="contact">contact</div>
            <div class="menu-item menu-item-exit">&Cross;</div>
          </div>
        </div>

        `;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this._markup());
  }

  selectElements() {
    this.menuLetters = document.querySelectorAll(".menu-letters");
    this.menu = document.querySelector(".menu");
    this.menuBlock = document.querySelector(".menu-block");
    this.menuExit = document.querySelector(".menu-item-exit");
    this.menuItems = document.querySelectorAll(".menu-item");

    this.textElements.menuHome = document.querySelector(".menu-item-home");
    this.textElements.menuWork = document.querySelector(".menu-item-work");
    this.textElements.menuService = document.querySelector(
      ".menu-item-services"
    );
    this.textElements.menuReviews = document.querySelector(
      ".menu-item-reviews"
    );
    this.textElements.menuProcess = document.querySelector(
      ".menu-item-process"
    );
    this.textElements.menuTools = document.querySelector(".menu-item-tools");
    this.textElements.menuGraphics = document.querySelector(
      ".menu-item-praphics"
    );
    this.textElements.menuContact = document.querySelector(
      ".menu-item-contact"
    );
  }

  showMenuBar() {
    this.menu.addEventListener(
      "click",
      function (e) {
        if (e.target.closest(".menu-stripes-inner")) {
          this.menuBlock.style.display = "block";
        }
      }.bind(this)
    );
  }

  gotoDiv(hideLegalText) {
    this.menuBlock.addEventListener("click", function (e) {
      this.style.display = "none";
      if (e.target.classList.contains("menu-item")) {
        const gotoDiv = e.target.dataset.view;

        if (!document.querySelector(".home")) {
          hideLegalText();
        }
        if (gotoDiv) {
          const gotoDivDiv = document.querySelector(`.${gotoDiv}`);
          gotoDivDiv.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }
}

export default new MenuView();
