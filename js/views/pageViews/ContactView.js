import * as elements from "../../elements.js";
// import contactView from ''

class ContactView {
  contactDiv = null;
  contactForm = null;
  formSubmitted = null;

  selectJob = null;
  inputEmail = null;
  inputPhone = null;
  checkBoxCallMe = null;
  inputDate = null;
  inputTime = null;
  inputName = null;

  textElements = {
    contactTitle: null,
    contactDearMalin: null,
    contactWeNeed: null,
    contactAWebsite: null,
    contactAnOnlineshop: null,
    contactAWebapp: null,
    contactSomethingSpecific: null,
    contactDropEmail: null,
    contactOrAnd: null,
    contactCallOn: null,
    contactFreeToCall: null,
    contactUntilThen: null,
    contactSubmitBtn: null,
    formSubmittedText: null,
    goBackToForm: null,
  };

  _markup() {
    return `
        <div class="contact">
            <div class="contact-inner">

                <div class="contact-title">
                    let's start an awesome project
                </div>

                <div class="contact-phone-email">
                    <div class="contact-phone-email-inner">
                        <div class="contact-phone">+49 151 17577304</div>
                        <div class="contact-phone">+49 89 55056427</div>
                        <div class="contact-email">malin@zeylanic.de</div>
                    </div>
                </div>
                
                <div class="team">
                    <div class="member-container">
                        <div class="members">
                            <div class="member malin">
                                <div class="member-photo member-malin-photo"></div>
                            </div>    
                        </div>
                    </div>
                </div>

                <div class="team-text">malin</div>

                <div class="contact-content">
                    <div class="contact-content-inner">
                        
                            <div class="form">
                                <form class="contact-form">
                                    <p class="contact-dear-malin">dear malin,</p>
                                    
                                    <span class="contact-we-need-of">we are in need of&nbsp;</span>
                                    <select name="" class="select-job input-border">
                                      <option value="" class="contact-a-website">a website</option>
                                      <option value="" class="contact-an-onlineshop">an online shop</option>
                                      <option value="" class="contact-a-webapp">a web app</option>
                                      <option value="" class="contact-something-specific">something specific</option>
                                    </select>
                                    <br>

                                    
                                    <span class ="contact-drop-email">you can drop a mail to</span>
                                    <br>
                                    <input class="input-email input-border" type="email" placeholder="✉" /> 
                                    <br>
                                    <span class="contact-or-and">or/and</span>
                                    <span class="contact-call-on">you can call or message on</span>
                                    <br>
                                     <input  class="input-phone input-border" type="tel" placeholder="☎" />
                                    <p>
                                        <input type="checkbox" class="checkbox-call-me input-border" />
                                        <span class="contact-free-to-call">I'm free to make a call preferably on</span>
                                        <br>
                                        <input type="date" class="input-date input-border" disabled/>
                                        at
                                        <input type="time" class="input-time input-border" disabled/>
                                        <br>
                                    </p>   

                                    <p><span class="contact-until-then">until then &nbsp;</span><input class="input-name input-border" type="text" placeholder="name" /> </p>
                                    
                                    <button type="submit" class="contact-submit-btn">send</button>
                                </form>        

                                <div class="form-submitted hide-me">
                                  <div class="form-submitted-inner">
                                    <span class="form-submitted-text">
                                      
                                    </span>
                                    <br>malin
                                    <div class="go-back-to-form">
                                      
                                    </div>
                                  </div>
                                </div>
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
    this.contactDiv = document.querySelector(".contact");

    this.contactForm = document.querySelector(".contact-form");
    this.formSubmitted = document.querySelector(".form-submitted");
    this.textElements.goBackToForm = document.querySelector(".go-back-to-form");
    this.textElements.formSubmittedText = document.querySelector(
      ".form-submitted-text"
    );

    this.textElements.contactTitle = document.querySelector(".contact-title");
    this.textElements.contactDearMalin = document.querySelector(
      ".contact-dear-malin"
    );
    this.textElements.contactWeNeed = document.querySelector(
      ".contact-we-need-of"
    );
    this.textElements.contactAWebsite = document.querySelector(
      ".contact-a-website"
    );
    this.textElements.contactAnOnlineshop = document.querySelector(
      ".contact-an-onlineshop"
    );
    this.textElements.contactAWebapp = document.querySelector(
      ".contact-a-webapp"
    );
    this.textElements.contactSomethingSpecific = document.querySelector(
      ".contact-something-specific"
    );
    this.textElements.contactDropEmail = document.querySelector(
      ".contact-drop-email"
    );
    this.textElements.contactOrAnd = document.querySelector(".contact-or-and");
    this.textElements.contactCallOn = document.querySelector(
      ".contact-call-on"
    );
    this.textElements.contactFreeToCall = document.querySelector(
      ".contact-free-to-call"
    );
    this.textElements.contactUntilThen = document.querySelector(
      ".contact-until-then"
    );
    this.textElements.contactSubmitBtn = document.querySelector(
      ".contact-submit-btn"
    );
    this.selectJob = document.querySelector(".select-job");
    this.inputEmail = document.querySelector(".input-email");
    this.inputPhone = document.querySelector(".input-phone");
    this.checkBoxCallMe = document.querySelector(".checkbox-call-me");
    this.inputDate = document.querySelector(".input-date");
    this.inputTime = document.querySelector(".input-time");
    this.inputName = document.querySelector(".input-name");
  }

  empty() {
    this.contactDiv.remove();
  }

  checkboxCallClickEvent() {
    this.checkBoxCallMe.addEventListener(
      "change",
      function (e) {
        if (this.checkBoxCallMe.checked) {
          this.inputDate.disabled = false;
          this.inputTime.disabled = false;
        } else {
          this.inputDate.value = "";
          this.inputTime.value = "";
          this.inputDate.disabled = true;
          this.inputTime.disabled = true;
        }
      }.bind(this)
    );
  }

  formSubmitEvent() {
    this.contactForm.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        const jobSelect = this.selectJob;
        const job = jobSelect.options[jobSelect.selectedIndex].text;
        const email = this.inputEmail.value;
        const phone = this.inputPhone.value;
        const callDate = this.inputDate.value;
        const callTime = this.inputTime.value;
        const cusName = this.inputName.value;

        if (!email && !phone) {
          if (this.inputEmail.classList.contains("input-border")) {
            this.inputEmail.classList.remove("input-border");
            this.inputEmail.classList.add("input-red");
          }
          if (this.inputPhone.classList.contains("input-border")) {
            this.inputPhone.classList.remove("input-border");
            this.inputPhone.classList.add("input-red");
          }
        } else {
          if (this.inputEmail.classList.contains("input-red")) {
            this.inputEmail.classList.toggle("input-red");
            this.inputEmail.classList.toggle("input-border");
          }
          if (this.inputPhone.classList.contains("input-red")) {
            this.inputPhone.classList.toggle("input-red");
            this.inputPhone.classList.toggle("input-border");
          }
        }
        if (!cusName) {
          if (this.inputName.classList.contains("input-border")) {
            this.inputName.classList.toggle("input-border");
            this.inputName.classList.toggle("input-red");
          }
        } else {
          if (this.inputName.classList.contains("input-red")) {
            this.inputName.classList.toggle("input-red");
            this.inputName.classList.toggle("input-border");
          }
        }

        if ((email || phone) && cusName) {
          const msg = {
            name: cusName,
            job: job,
            email: email,
            phone: phone,
            date: callDate,
            time: callTime,
          };

          // console.log(msg);
          fetch("https://zeylanic-message-email.herokuapp.com/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(msg),
          });
          // .then((res) => {
          //   return res.json();
          // })
          // .then((data) => console.log(data))
          // .catch((err) => console.log(err));

          this.contactForm.classList.toggle("hide-me");
          this.formSubmitted.classList.toggle("hide-me");
        }
      }.bind(this)
    );
  }

  goBackToFormEvent() {
    this.textElements.goBackToForm.addEventListener(
      "click",
      function (e) {
        this.contactForm.classList.toggle("hide-me");
        this.formSubmitted.classList.toggle("hide-me");
      }.bind(this)
    );
  }
}

export default new ContactView();
