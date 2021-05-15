import * as elements from "../../elements";
import uniqueView from "./UniqueView";
import menuView from "../../MenuView";
import stepsView from "./StepsView.js";
import contactView from "./ContactView.js";

class HomeView {
  divElements = {
    home: null,
    hamburger: null,
    hamburger_top: null,
    hamburger_middle: null,
    hamburger_bottom: null,
    hamburger_e: null,
    hamburger_z: null,
    hamburger_ylanic: null,
    hamburger_title: null,
    hamburger_e_heading: null,
    hamburger_e_description: null,
    hamburger_scroller: null,
    hamburger_scroller_inner: null,
  };

  textElements = {
    homeText1: null,
    homeText2: null,
    homeText3: null,
    homeBtn1: null,
    homeBtn2: null,
    homeBtn3: null,
  };

  animFactor = null;
  leftMove = null;
  rightMove = null;
  bottomMovePerc = null;
  verticalScroll = 700;
  verticalScrollFactor = 7;
  verticalScrollWait = 500;
  isScrolled = false;

  _markup() {
    return `<div class="home">
    <div class="hamburger">
      <div class="hamburger-zeylanic">
        <div class="hamburger-z">Z</div>
        <div class="hamburger-e">
          <div class="hamburger-e-top">
            <div class="hamburger-e-inner">
                <h1 class="hamburger-e-heading hamburger-e-heading-r">webdesign</h1>
                <h2 class="hamburger-e-description hamburger-e-description-r">
                  <span class="home-text-1">unique, responsive, seo friendly, branded</span>
                  <button class="hamburger-e-button hamburger-e-button-1">let's discuss</button>
                </h2>
            </div>
          </div>
          <div class="hamburger-e-bar hamburger-e-middle">
            <div class="hamburger-e-inner">
                <h1 class="hamburger-e-heading">online shops</h1>
                <h2 class="hamburger-e-description">
                  <span class="home-text-2">reach out to new markets, expand the customer pool and see the sales growing</span>
                  <button class="hamburger-e-button hamburger-e-button-2">start selling</button>
                </h2>
            </div>
          </div>
          <div class="hamburger-e-bar hamburger-e-bottom">
            <div class="hamburger-e-inner">
              <h1 class="hamburger-e-heading hamburger-e-heading-r">web apps</h1>
              <h2 class="hamburger-e-description hamburger-e-description-r">
                <span class="home-text-3">make your unique requirement a reality. may be a vehicle selling app or a appointment management system
                or anything else </span>
                <button class="hamburger-e-button hamburger-e-button-3">it's time</button>
              </h2>
            </div>  
          </div>
        </div>
        <div class="hamburger-ylanic">YLANIC</div>
      </div>
      <div class="hamburger-title"><h1>webdesign-studio münchen</h1></div>
      
    </div>
    <div class="hamburger-scroller">
      <div class="hamburger-scroller-inner"></div>
    </div>
  </div>`;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this._markup());
    uniqueView.render();
    uniqueView.selectElements();
    // menuView.render();
    // menuView.selectElements();
  }

  selectElements() {
    this.divElements.home = document.querySelector(".home");
    this.divElements.hamburger_top = document.querySelector(".hamburger-e-top");
    this.divElements.hamburger_middle = document.querySelector(
      ".hamburger-e-middle"
    );
    this.divElements.hamburger_bottom = document.querySelector(
      ".hamburger-e-bottom"
    );
    this.divElements.hamburger_z = document.querySelector(".hamburger-z");
    this.divElements.hamburger_ylanic = document.querySelector(
      ".hamburger-ylanic"
    );
    this.divElements.hamburger_title = document.querySelector(
      ".hamburger-title"
    );
    this.divElements.hamburger_e = document.querySelector(".hamburger-e");
    this.divElements.hamburger_e_heading = document.querySelectorAll(
      ".hamburger-e-heading"
    );
    this.divElements.hamburger_e_description = document.querySelectorAll(
      ".hamburger-e-description"
    );
    this.divElements.hamburger = document.querySelector(".hamburger");
    this.divElements.hamburger_scroller = document.querySelector(
      ".hamburger-scroller"
    );
    this.divElements.hamburger_scroller_inner = document.querySelector(
      ".hamburger-scroller-inner"
    );
    this.textElements.homeText1 = document.querySelector(".home-text-1");
    this.textElements.homeText2 = document.querySelector(".home-text-2");
    this.textElements.homeText3 = document.querySelector(".home-text-3");
    this.textElements.homeBtn1 = document.querySelector(
      ".hamburger-e-button-1"
    );
    this.textElements.homeBtn2 = document.querySelector(
      ".hamburger-e-button-2"
    );
    this.textElements.homeBtn3 = document.querySelector(
      ".hamburger-e-button-3"
    );
  }

  empty() {
    this.divElements.home.remove();
    uniqueView.empty();
  }

  initMoves() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 800) {
      this.leftMove = 287;
      // this.leftMove = 293;
      this.rightMove = 466;
      this.animFactor = 1;
      this.bottomMovePerc = 0.8;
    } else if (windowWidth >= 600) {
      // this.leftMove = 193;
      this.leftMove = 187;
      this.rightMove = 366;
      this.animFactor = 2;
      this.bottomMovePerc = 0.9;
    } else {
      this.leftMove = 46;
      this.rightMove = 219;
      this.animFactor = 3;
      this.bottomMovePerc = 1;
    }
    this.divElements.home.style.height = `${
      this.rightMove * this.animFactor +
      this.verticalScroll +
      this.verticalScrollWait +
      window.outerHeight
    }px`;
  }

  scrolling() {
    this.isScrolled = true;
    const headingsArr = Array.from(this.divElements.hamburger_e_heading);
    const descriptionArr = Array.from(this.divElements.hamburger_e_description);

    const menuLetters = Array.from(menuView.menuLetters);
    if (window.scrollY > 1) {
      this.divElements.hamburger_scroller.style.display = `none`;
      menuLetters.forEach((letter) => {
        letter.style.opacity = 1;
      });
    } else {
      uniqueView.divElements.uniqueFixed.style.bottom = `-50px`;
      this.divElements.hamburger_scroller.style.display = `flex`;
      menuLetters.forEach((letter) => {
        letter.style.opacity = 0;
      });
    }
    if (window.scrollY > 1 && window.scrollY <= 50) {
      uniqueView.divElements.uniqueFixed.style.bottom = `${
        window.scrollY - 50
      }px`;
    } else if (window.scrollY > 50) {
      uniqueView.divElements.uniqueFixed.style.bottom = `0px`;
    }

    if (window.scrollY < this.leftMove * this.animFactor) {
      this.divElements.hamburger_middle.style.left = `${
        -(window.scrollY / this.animFactor) + 3
      }px`;
      this.divElements.hamburger_z.style.opacity = (100 - window.scrollY) / 100;
      this.divElements.hamburger_ylanic.style.opacity =
        (100 - window.scrollY) / 100;
      this.divElements.hamburger_title.style.opacity =
        (100 - window.scrollY) / 100;

      const opacityVal =
        Math.round((window.scrollY / this.animFactor / this.leftMove) * 10) /
          10 -
        0.5;
      headingsArr.forEach((heading) => {
        heading.style.opacity = opacityVal;
      });
    }

    if (window.scrollY >= this.leftMove * this.animFactor) {
      this.divElements.hamburger_middle.style.left = `${-this.leftMove + 3}px`;
      headingsArr.forEach((heading) => {
        heading.style.opacity = 1;
      });
    }

    if (window.scrollY >= 100) {
      this.divElements.hamburger_z.style.opacity = 0;
      this.divElements.hamburger_ylanic.style.opacity = 0;
      this.divElements.hamburger_title.style.opacity = 0;
    }

    if (window.scrollY < this.rightMove * this.animFactor) {
      this.divElements.hamburger_top.style.left = `${
        window.scrollY / this.animFactor + 3
      }px`;
      this.divElements.hamburger_bottom.style.left = `${
        (window.scrollY / this.animFactor) * this.bottomMovePerc + 3
      }px`;
    }

    if (window.scrollY >= this.rightMove * this.animFactor) {
      this.divElements.hamburger_top.style.left = `${this.rightMove + 3}px`;
      this.divElements.hamburger_bottom.style.left = `${
        (this.rightMove + 3) * this.bottomMovePerc
      }px`;
    }

    if (
      window.scrollY > this.rightMove * this.animFactor &&
      window.scrollY < this.rightMove * this.animFactor + this.verticalScroll
    ) {
      this.divElements.hamburger_top.style.top = `${
        -(
          (window.scrollY - this.rightMove * this.animFactor) /
          this.verticalScrollFactor
        ) + 12
      }px`;
      this.divElements.hamburger_bottom.style.top = `${
        (window.scrollY - this.rightMove * this.animFactor) /
          this.verticalScrollFactor +
        50
      }px`;
      descriptionArr.forEach((desc) => {
        desc.style.opacity =
          (window.scrollY - this.rightMove * this.animFactor) /
          this.verticalScroll;
      });
    }

    if (
      window.scrollY >=
      this.rightMove * this.animFactor + this.verticalScroll
    ) {
      this.divElements.hamburger_top.style.top = `${-100 + 12}px`;
      this.divElements.hamburger_bottom.style.top = `150px`;

      descriptionArr.forEach((desc) => {
        desc.style.opacity = 1;
      });
    }

    if (window.scrollY <= this.rightMove * this.animFactor) {
      this.divElements.hamburger_top.style.top = `12px`;
      this.divElements.hamburger_bottom.style.top = `50px`;
      descriptionArr.forEach((desc) => {
        desc.style.opacity = 0;
      });
    }

    if (
      window.scrollY >=
      this.rightMove * this.animFactor +
        this.verticalScroll +
        this.verticalScrollWait
    ) {
      const windowHeight = window.innerHeight;
      let scrollFactor = 11;
      if (windowHeight < 640) {
        scrollFactor = 1;
      } else if (windowHeight < 800) {
        scrollFactor = 4;
      }
      const hamburgerTopPerc = Math.floor(
        (window.scrollY -
          (this.rightMove * this.animFactor +
            this.verticalScrollWait +
            this.verticalScroll)) /
          scrollFactor
      );
      this.divElements.hamburger.style.top = `${50 - hamburgerTopPerc}%`;
    } else {
      this.divElements.hamburger.style.top = `50%`;
    }

    // 50 is the bottom value of div uniqueFixed
    if (
      window.innerHeight - 50 >=
      uniqueView.divElements.unique.getBoundingClientRect().top
    ) {
      uniqueView.divElements.uniqueFixed.style.display = `none`;
    } else {
      uniqueView.divElements.uniqueFixed.style.display = `block`;
    }
  }

  scrollEvent() {
    window.addEventListener("scroll", () => this.scrolling());
  }

  scrollClick() {
    this.divElements.hamburger_scroller_inner.addEventListener("click", (e) => {
      window.scroll({
        top:
          this.rightMove * this.animFactor +
          this.verticalScroll +
          this.verticalScrollWait,
        behavior: "smooth",
      });
      this.isScrolled = true;
    });
  }

  autoScroll() {
    setTimeout(() => {
      if (!this.isScrolled) {
        window.scroll({
          top:
            this.rightMove * this.animFactor +
            this.verticalScroll +
            this.verticalScrollWait,
          behavior: "smooth",
        });
        this.isScrolled = true;
      }
    }, 5000);
  }

  resizeEvent() {
    window.addEventListener("resize", (e) => {
      this.initMoves();
      this.scrolling();
      stepsView.showStepText();
    });
  }

  clickBtnEventHandler() {
    this.divElements.hamburger_e.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("hamburger-e-button")) {
          if (e.target.classList.contains("hamburger-e-button-1")) {
            contactView.selectJob.getElementsByTagName("option")[0].selected =
              "selected";
          } else if (e.target.classList.contains("hamburger-e-button-2")) {
            contactView.selectJob.getElementsByTagName("option")[1].selected =
              "selected";
          } else if (e.target.classList.contains("hamburger-e-button-3")) {
            contactView.selectJob.getElementsByTagName("option")[2].selected =
              "selected";
          }
          contactView.contactDiv.scrollIntoView();
        }
      }.bind(this)
    );
  }
}

export default new HomeView();
