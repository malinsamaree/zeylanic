import * as elements from "../../elements.js";

class GraficsView {
  graficsDiv = null;
  galleryExit = null;
  gallery = null;
  graficContentInner = null;
  imgDivs = null;

  textElements = {
    graphicsTitle: null,
  };

  _markup() {
    return `
        <div class="graphics">
            <div class="graphics-inner">
                <div class="graphics-title">
                    our graphics and photography 📷
                </div>
                <div class="graphics-content">
                    <div class="graphics-content-inner">

                            <div class="graphic-block-1"></div>
                            <div class="graphic-block graphic-block-2" data-img-div="galary-img3"></div>
                            <div class="graphic-block graphic-block-3" data-img-div="galary-img5"></div>
                            <div class="graphic-block graphic-block-4" data-img-div="galary-img6"></div>
                            <div class="graphic-block-5"></div>
                            <div class="graphic-block graphic-block-7" data-img-div="galary-img4"></div>
                            <div class="graphic-block-8"></div>
                            <div class="graphic-block graphic-block-9" data-img-div="galary-img1"></div>
                            <div class="graphic-block graphic-block-10" data-img-div="galary-img2"></div>

                    </div>
                    
                </div>
            </div>
        </div>

        <div class="gallery hide">
          <div class="gallery-inner">
            <div class="gallery-exit">✖</div>
            <div class="galary-img galary-img1 invisible"></div>
            <div class="galary-img galary-img2 invisible" ></div>
            <div class="galary-img galary-img3 invisible"></div>
            <div class="galary-img galary-img4 invisible"></div>
            <div class="galary-img galary-img5 invisible"></div>
            <div class="galary-img galary-img6 invisible"></div>

          </div>
        </div>

        `;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this._markup());
  }

  assignElements() {
    this.graficsDiv = document.querySelector(".graphics");
    this.gallery = document.querySelector(".gallery");
    this.galleryExit = document.querySelector(".gallery-exit");
    this.graficContentInner = document.querySelector(".graphics-content-inner");
    this.imgDivs = document.querySelectorAll(".galary-img");
    this.textElements.graphicsTitle = document.querySelector(".graphics-title");
  }

  empty() {
    this.graficsDiv.remove();
  }

  thumbClickEvent() {
    this.graficContentInner.addEventListener("click", (e) => {
      if (e.target.classList.contains("graphic-block")) {
        const imgDivClass = e.target.dataset.imgDiv;
        this.gallery.classList.remove("hide");
        Array.from(this.imgDivs).forEach((imgDiv) => {
          if (imgDiv.classList.contains(imgDivClass)) {
            imgDiv.classList.remove("invisible");
            imgDiv.classList.add("rotate-image");
          } else if (!imgDiv.classList.contains("invisible")) {
            imgDiv.classList.remove("rotate-image");
            imgDiv.classList.add("invisible");
          }
        });
      }
    });
  }

  galleryClickEvent() {
    this.gallery.addEventListener("click", (e) => {
      Array.from(this.imgDivs).forEach((imgDiv) => {
        if (!imgDiv.classList.contains("invisible")) {
          imgDiv.classList.add("invisible");
          imgDiv.classList.remove("rotate-image");
        }
      });
      this.gallery.classList.add("hide");
    });
  }

  galleryExitClickEvent() {
    this.galleryExit.addEventListener("click", () => {
      Array.from(this.imgDivs).forEach((imgDiv) => {
        if (!imgDiv.classList.contains("invisible")) {
          imgDiv.classList.add("invisible");
          imgDiv.classList.remove("rotate-image");
        }
      });
      this.gallery.classList.add("hide");
    });
  }
}

export default new GraficsView();
