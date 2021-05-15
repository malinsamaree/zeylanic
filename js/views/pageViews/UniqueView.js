import * as elements from "../../elements.js";

class UniqueView {
  divElements = {
    uniqueFixed: null,
    unique: null,
    uniqueQuote: null,
    uniqueHeading: null,
  };

  textElements = {
    e1Fixed: null,
    i1Fixed: null,
    n1Fixed: null,
    z1Fixed: null,
    i2Fixed: null,
    g1Fixed: null,
    a1Fixed: null,
    r1Fixed: null,
    t1Fixed: null,
    i3Fixed: null,
    g2Fixed: null,
    e1: null,
    i1: null,
    n1: null,
    z1: null,
    i2: null,
    g1: null,
    a1: null,
    r1: null,
    t1: null,
    i3: null,
    g2: null,
    g1Word: null,
    r1Word: null,
    i3Word: null,
    uniqueQuote: null,
  };

  markup() {
    return `
            <div class="unique-fixed">
                <div class="unique-heading">
                    <div class="unique-heading-inner">
                        <div class="einzigarting-begin einzigartig"></div>
                        <div class="e1 e1-fixed einzigartig">e</div>
                        <div class="i1 i1-fixed einzigartig">i</div>
                        <div class="n1 n1-fixed einzigartig">n</div>
                        <div class="z1 z1-fixed einzigartig">z</div>
                        <div class="i2 i2-fixed einzigartig">i</div>
                        <div class="g1 g1-fixed einzigartig">g</div>
                        <div class="a1 a1-fixed einzigartig">a</div>
                        <div class="r1 r1-fixed einzigartig">r</div>
                        <div class="t1 t1-fixed einzigartig">t</div>
                        <div class="i3 i3-fixed einzigartig">i</div>
                        <div class="g2 g2-fixed einzigartig">g</div>
                        <div class="einzigarting-end einzigartig"></div>
                    </div>
                </div>
            </div>
            <div class="unique">
              <div class="unique-inner">
                <div class="unique-heading">
                    <div class="unique-heading-inner">
                        <div class="einzigarting-begin einzigartig"></div>
                        <div class="e1 e1-scroll einzigartig">e</div>
                        <div class="i1 i1-scroll einzigartig">i</div>
                        <div class="n1 n1-scroll einzigartig">n</div>
                        <div class="z1 z1-scroll einzigartig">z</div>
                        <div class="i2 i2-scroll einzigartig">i</div>
                        <div class="g1 g1-scroll einzigartig">g</div>
                        <div class="a1 a1-scroll einzigartig">a</div>
                        <div class="r1 r1-scroll einzigartig">r</div>
                        <div class="t1 t1-scroll einzigartig">t</div>
                        <div class="i3 i3-scroll einzigartig">i</div>
                        <div class="g2 g2-scroll einzigartig">g</div>
                        <div class="einzigarting-end einzigartig"></div>
                    </div>
                </div>
                <div class="unique-content">
                    <div class="unique-content-inner">
                        <div class="einzigarting-begin einzigartig1"></div>
                        <div class="e1 einzigartig1"></div>
                        <div class="i1 einzigartig1"></div>
                        <div class="n1 einzigartig1">
                        &darr;<br /><br />
                        d<br />
                        e<br />
                        s<br />
                        i<br />
                        g<br />
                        n

                        </div>
                        <div class="z1 einzigartig1"></div>
                        <div class="i2 einzigartig1"></div>
                        <div class="g1 g1-word einzigartig1">
                        &darr;<br /><br />
                        e<br />
                        r<br />
                        f<br />
                        h<br />
                        r<br />
                        u<br />
                        n<br />
                        g
                        </div>
                        <div class="a1 einzigartig1"></div>
                        <div class="r1 r1-word einzigartig1"></div>
                        <div class="t1 einzigartig1"></div>
                        <div class="i3 i3-word einzigartig1">
                        &darr;<br /><br />
                        m<br />
                        a<br />
                        r<br />
                        k<br />
                        e
                        </div>
                        <div class="g2 einzigartig1">
                        
                        </div>
                        <div class="einzigarting-end einzigartig1"></div>
                    </div>
                    
                </div>
              </div>
            </div>

            <div class="unique-quote">
              <div class="unique-quote-inner">
                "Good design is good business." <br /> Thomas Watson Jr., second president of IBM
              </div>
            </div>

            <div class="unique-heading-outer">
                <div class="unique-heading">
                    <div class="unique-heading-inner">
                        <div class="einzigarting-begin einzigartig"></div>
                        <div class="e1 einzigartig"></div>
                        <div class="i1 einzigartig"></div>
                        <div class="n1 einzigartig"></div>
                        <div class="z1 einzigartig"></div>
                        <div class="i2 einzigartig"></div>
                        <div class="g1 einzigartig"></div>
                        <div class="a1 einzigartig"></div>
                        <div class="r1 einzigartig"></div>
                        <div class="t1 einzigartig"></div>
                        <div class="i3 einzigartig"></div>
                        <div class="g2 einzigartig"></div>
                        <div class="einzigarting-end einzigartig"></div>
                    </div>
                </div>
            </div>
            `;
  }

  render() {
    elements.root.insertAdjacentHTML("beforeend", this.markup());
  }

  selectElements() {
    this.divElements.uniqueFixed = document.querySelector(".unique-fixed");
    this.divElements.unique = document.querySelector(".unique");
    this.divElements.uniqueQuote = document.querySelector(".unique-quote");
    this.divElements.uniqueHeading = document.querySelector(
      ".unique-heading-outer"
    );

    this.textElements.e1Fixed = document.querySelector(".e1-fixed");
    this.textElements.i1Fixed = document.querySelector(".i1-fixed");
    this.textElements.n1Fixed = document.querySelector(".n1-fixed");
    this.textElements.z1Fixed = document.querySelector(".z1-fixed");
    this.textElements.i2Fixed = document.querySelector(".i2-fixed");
    this.textElements.g1Fixed = document.querySelector(".g1-fixed");
    this.textElements.a1Fixed = document.querySelector(".a1-fixed");
    this.textElements.r1Fixed = document.querySelector(".r1-fixed");
    this.textElements.t1Fixed = document.querySelector(".t1-fixed");
    this.textElements.i3Fixed = document.querySelector(".i3-fixed");
    this.textElements.g2Fixed = document.querySelector(".g2-fixed");
    this.textElements.e1 = document.querySelector(".e1-scroll");
    this.textElements.i1 = document.querySelector(".i1-scroll");
    this.textElements.n1 = document.querySelector(".n1-scroll");
    this.textElements.z1 = document.querySelector(".z1-scroll");
    this.textElements.i2 = document.querySelector(".i2-scroll");
    this.textElements.g1 = document.querySelector(".g1-scroll");
    this.textElements.a1 = document.querySelector(".a1-scroll");
    this.textElements.r1 = document.querySelector(".r1-scroll");
    this.textElements.t1 = document.querySelector(".t1-scroll");
    this.textElements.i3 = document.querySelector(".i3-scroll");
    this.textElements.g2 = document.querySelector(".g2-scroll");
    this.textElements.g1Word = document.querySelector(".g1-word");
    this.textElements.r1Word = document.querySelector(".r1-word");
    this.textElements.i3Word = document.querySelector(".i3-word");
    this.textElements.uniqueQuote = document.querySelector(
      ".unique-quote-inner"
    );
  }

  empty() {
    this.divElements.uniqueFixed.remove();
    this.divElements.unique.remove();
    this.divElements.uniqueQuote.remove();
    this.divElements.uniqueHeading.remove();
  }
}

export default new UniqueView();
