import * as elements from "../../elements.js";

class StepsView {
  steps = null;
  stepBtnContainer = null;
  stepBtns = null;
  stepTexts = null;
  stepText = null;
  stepContentInnerRight = null;
  clickedStepTopic = null;

  textElements = {
    stepsTitle: null,
    stepHeading1: null,
    stepHeading2: null,
    stepHeading3: null,
    stepHeading4: null,
    stepHeading5: null,
    stepHeading6: null,
    stepHeading7: null,
    stepHeading8: null,
    stepText1: null,
    stepText2: null,
    stepText3: null,
    stepText4: null,
    stepText5: null,
    stepText6: null,
    stepText7: null,
    stepText8: null,
  };

  _markup() {
    return `
        <div class="steps">
            <div class="steps-inner">
                <div class="steps-title">this is how we do this 🔧</div>
                <div class="steps-content">
                    <div class="steps-content-inner">
                        <div class="steps-content-inner-left">
                            <div class="step-topic step-topic-1" data-text-div="step-text-1" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">1</div>
                                <div class="step-heading step-heading-1">brainstroming</div>
                              </div>  
                              <div class="step-text step-text-1"></div>
                            </div>
                            
                            <div class="step-topic step-topic-2" data-text-div="step-text-2" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">2</div>
                                <div class="step-heading step-heading-2">strategy formulation</div>
                              </div>
                              <div class="step-text step-text-2"></div>
                            </div>
                            <div class="step-topic step-topic-3" data-text-div="step-text-3" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">3</div>
                                <div class="step-heading step-heading-3">prototyping</div>
                              </div>
                              <div class="step-text step-text-3"></div>
                            </div>
                            <div class="step-topic step-topic-4" data-text-div="step-text-4" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">4</div> 
                                <div class="step-heading step-heading-4">desing & development</div>
                              </div>
                              <div class="step-text step-text-4"></div>
                            </div>
                            <div class="step-topic step-topic-5" data-text-div="step-text-5" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">5</div> 
                                <div class="step-heading step-heading-5">reviewing</div>
                              </div>
                              <div class="step-text step-text-5"></div>
                            </div>
                            <div class="step-topic step-topic-6" data-text-div="step-text-6" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">6</div> 
                                <div class="step-heading step-heading-6">testing</div>
                              </div>
                              <div class="step-text step-text-6"></div>
                            </div>
                            <div class="step-topic step-topic-7" data-text-div="step-text-7" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">7</div> 
                                <div class="step-heading step-heading-7">completion & deployment</div>
                              </div>
                              <div class="step-text step-text-7"></div>
                            </div>
                            <div class="step-topic step-topic-8" data-text-div="step-text-8" data-text="">
                              <div class = "step-heading-container">
                                <div class="step-no">8</div>
                                <div class="step-heading step-heading-8">maintenance</div>
                              </div>
                              <div class="step-text step-text-8"></div>        
                            </div>
                        </div>  
                        <div class="steps-content-inner-right"></div>  
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
    this.steps = document.querySelector(".steps");
    this.stepBtns = document.querySelectorAll(".step-topic");
    this.stepBtnContainer = document.querySelector(".steps-content-inner-left");
    this.stepTexts = document.querySelectorAll(".step-text");
    this.stepContentInnerRight = document.querySelector(
      ".steps-content-inner-right"
    );

    this.textElements.stepsTitle = document.querySelector(".steps-title");
    this.textElements.stepHeading1 = document.querySelector(".step-heading-1");
    this.textElements.stepHeading2 = document.querySelector(".step-heading-2");
    this.textElements.stepHeading3 = document.querySelector(".step-heading-3");
    this.textElements.stepHeading4 = document.querySelector(".step-heading-4");
    this.textElements.stepHeading5 = document.querySelector(".step-heading-5");
    this.textElements.stepHeading6 = document.querySelector(".step-heading-6");
    this.textElements.stepHeading7 = document.querySelector(".step-heading-7");
    this.textElements.stepHeading8 = document.querySelector(".step-heading-8");
    this.textElements.stepText1 = document.querySelector(".step-text-1");
    this.textElements.stepText2 = document.querySelector(".step-text-2");
    this.textElements.stepText3 = document.querySelector(".step-text-3");
    this.textElements.stepText4 = document.querySelector(".step-text-4");
    this.textElements.stepText5 = document.querySelector(".step-text-5");
    this.textElements.stepText6 = document.querySelector(".step-text-6");
    this.textElements.stepText7 = document.querySelector(".step-text-7");
    this.textElements.stepText8 = document.querySelector(".step-text-8");
  }

  empty() {
    this.steps.remove();
  }

  btnClickEvent() {
    this.stepBtnContainer.addEventListener(
      "click",
      function (e) {
        if (e.target.closest(".step-topic")) {
          this.clickedStepTopic = e.target.closest(".step-topic");
          this.stepText = this.clickedStepTopic.querySelector(".step-text");
          Array.from(this.stepBtns).forEach((btn) => {
            btn.classList.remove("step-topic-selected");
          });
          this.clickedStepTopic.classList.add("step-topic-selected");
          this.stepContentInnerRight.innerHTML = this.stepText.innerHTML;
          this.showStepText();
        }
      }.bind(this)
    );
  }

  clickTopicBtn() {
    if (this.clickedStepTopic) this.clickedStepTopic.click();
  }

  clickInitialBtn() {
    document.querySelector(".step-topic-1").click();
  }

  showStepText() {
    if (window.innerWidth <= 680) {
      Array.from(this.stepTexts).forEach((div) => {
        div.style.display = "none";
      });
      this.stepText.style.display = "block";
    } else {
      Array.from(this.stepTexts).forEach((div) => {
        div.style.display = "none";
      });
    }
  }
}

export default new StepsView();
