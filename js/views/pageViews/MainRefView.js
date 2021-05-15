import * as elements from "../../elements.js";

class MainRefView {
  refImgs = null;
  refDiv = null;

  textElements = {
    refTitle: null,
    irinaDes: null,
    yakekDes: null,
    teaflowerDes: null,
  };

  _markup() {
    return `
        
            <div class="main-ref">
                <div class="main-ref-title-outer">
                  <div class="main-ref-title">some of our work - so far ☺</div> 
                </div> 
                <div class="main-ref-inner">
                    <div class = "main-ref-block-container">
                        
                        <div class="main-ref-1 main-ref-block main-ref-block-img main-ref-block-img-left" data-url="https://weisheitendesherzens.de/"></div>
                        
                        <div class="main-ref-2 main-ref-block main-ref-block-des main-ref-block-des-right">
                          <div class="main-ref-block-title">
                            <a href="https://weisheitendesherzens.de/" target="_blank">
                              IRINA EDITION
                            </a>
                          </div>
                          <div class="main-ref-block-URL"><a href="https://weisheitendesherzens.de/" target="_blank">
                            https://weisheitendesherzens.de/
                          </a></div>
                          <div class="main-ref-block-text main-ref-block-text-irina">
                            Homepage eines Dichters in München
                          </div>
                        </div>


                        <div class="main-ref-3 main-ref-block main-ref-block-des main-ref-block-des-left">
                          <div class="main-ref-block-title">
                            <a href="https://yakek.com/" target="_blank">
                              YAKEK
                            </a>
                          </div>
                          <div class="main-ref-block-URL"><a href="https://yakek.com/" target="_blank">
                            https://yakek.com/
                          </a></div>
                          <div class="main-ref-block-text main-ref-block-text-yakek">
                            Web app, Finance managemen system for individuals 
                          </div>
                        </div>
                        
                        <div class="main-ref-4 main-ref-block main-ref-block-img main-ref-block-img-right" data-url="https://yakek.com/"></div>
                        

                        
                        
                        <div class="main-ref-5 main-ref-block main-ref-block-img main-ref-block-img-left" data-url="https://teaflower.de/"></div>
                        
                        <div class="main-ref-6 main-ref-block main-ref-block-des main-ref-block-des-right">
                          <div class="main-ref-block-title">
                            <a href="https://teaflower.de/" target="_blank">
                              TEA FLOWER
                            </a>
                          </div>
                          <div class="main-ref-block-URL"><a href="https://teaflower.de/" target="_blank">
                            https://teaflower.de/
                          </a></div>
                          <div class="main-ref-block-text main-ref-block-text-teaflower">
                            Online shop
                          </div>
                        </div>


                    </div>
                </div>
            </div>

        `;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this._markup());
  }

  selectElements() {
    this.refImgs = document.querySelectorAll(".main-ref-block-img");
    this.refDiv = document.querySelector(".main-ref");

    this.textElements.refTitle = document.querySelector(".main-ref-title");
    this.textElements.irinaDes = document.querySelector(
      ".main-ref-block-text-irina"
    );
    this.textElements.yakekDes = document.querySelector(
      ".main-ref-block-text-yakek"
    );
    this.textElements.teaflowerDes = document.querySelector(
      ".main-ref-block-text-teaflower"
    );
  }

  empty() {
    this.refDiv.remove();
  }

  refDivClickEvent() {
    this.refDiv.addEventListener("click", (e) => {
      const imgArr = Array.from(this.refImgs);
      imgArr.forEach((img) => {
        if (e.target === img) {
          const url = img.dataset.url;
          window.open(url);
          console.log(url);
        }
      });
    });
  }
}

export default new MainRefView();
