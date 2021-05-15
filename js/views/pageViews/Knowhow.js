import * as elements from "../../elements";

class Knowhow {
  knowhowDiv = null;

  textElements = {
    knowhowTitle: null,
    knowHowDes: null,
  };

  _markup() {
    return `
    <div class="knowhow">
        <div class="knowhow-inner">
            <div class="knowhow-title">technologies that we are familiar with 🐱‍👤</div>
            <div class="knowhow-des_1">
                in our journey towards designing a stand out and unique homepage as well as
                developing a tailor-made web application to fulfil your specific requirements,
                we mostly utilize core technologies. We thouroughly believe, that this 
                approach gives us the maximum freedom and flexibility in the design and development process
            </div>
            <div class="knowhow-content">
                
                <div class="knowhow-block">
                    <div class="knowhow-block-title">HTML</div>
                    <div class="knowhow-block-image knowhow-block-image-1"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title">CSS</div>
                    <div class="knowhow-block-image knowhow-block-image-2"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title">JavaScript</div>
                    <div class="knowhow-block-image knowhow-block-image-3"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title">PHP</div>
                    <div class="knowhow-block-image knowhow-block-image-4"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title">Node JS</div>
                    <div class="knowhow-block-image knowhow-block-image-5"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title">MySQL</div>
                    <div class="knowhow-block-image knowhow-block-image-6"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title">mongoDB</div>
                    <div class="knowhow-block-image knowhow-block-image-7"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title"></div>
                    <div class="knowhow-block-image knowhow-block-image-8"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title"></div>
                    <div class="knowhow-block-image knowhow-block-image-9"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title"></div>
                    <div class="knowhow-block-image knowhow-block-image-10"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title"></div>
                    <div class="knowhow-block-image knowhow-block-image-11"></div>
                </div>

                <div class="knowhow-block">
                    <div class="knowhow-block-title"></div>
                    <div class="knowhow-block-image knowhow-block-image-12"></div>
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
    this.knowhowDiv = document.querySelector(".knowhow");

    this.textElements.knowhowTitle = document.querySelector(".knowhow-title");
    this.textElements.knowHowDes = document.querySelector(".knowhow-des_1");
  }

  empty() {
    this.knowhowDiv.remove();
  }
}

export default new Knowhow();
