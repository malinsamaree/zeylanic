import homeView from "./views/pageViews/HomeView.js";
import mainRefView from "./views/pageViews/MainRefView.js";
import imagineView from "./views/pageViews/ImagineView.js";
import recView from "./views/pageViews/recomendationView.js";
import stepsView from "./views/pageViews/StepsView.js";
import knowhowView from "./views/pageViews/Knowhow.js";
import graficsView from "./views/pageViews/GraficsView.js";
import contactView from "./views/pageViews/ContactView.js";
import footerView from "./views/pageViews/FooterView.js";
import menuView from "./MenuView.js";
import impressumView from "./views/legalTextsViews/ImpressumView.js";
import privacyView from "./views/legalTextsViews/PrivacyView.js";
import uniqueView from "./views/pageViews/UniqueView.js";
import languageView from "./views/pageViews/LanguageView.js";
import cookieView from "./views/pageViews/CookieView.js";
import texts from "./Texts.js";

function renderMenu() {
  menuView.render();
  menuView.selectElements();
  menuView.showMenuBar();
  menuView.gotoDiv(hideLegalText);
}

function renderFooter() {
  footerView.render();
  footerView.selectElements();
  footerView.clickFooter(showLegalText);
}

function renderLanguage() {
  languageView.render();
  languageView.selectElements();
  languageView.selectLanguageEvent(allocateText);
}

function RenderCookies() {
  cookieView.render();
  cookieView.selectElements();
  cookieView.showCookies();
  cookieView.agreeClickEvent();
  cookieView.cookiePolicyClickEvent(showLegalText);
}

function init() {
  homeView.render();
  homeView.selectElements();
  homeView.initMoves();
  homeView.scrollEvent();
  homeView.scrollClick();
  homeView.resizeEvent();
  homeView.autoScroll();
  mainRefView.render();
  mainRefView.selectElements();
  mainRefView.refDivClickEvent();
  imagineView.render();
  imagineView.selectElements();
  recView.render();
  recView.selectElements();
  stepsView.render();
  stepsView.selectElements();
  stepsView.btnClickEvent();
  knowhowView.render();
  knowhowView.selectElements();
  graficsView.render();
  graficsView.assignElements();
  graficsView.thumbClickEvent();
  graficsView.galleryClickEvent();
  graficsView.galleryExitClickEvent();
  contactView.render();
  contactView.selectElements();
  contactView.formSubmitEvent();
  contactView.checkboxCallClickEvent();
  footerView.empty();
  renderFooter();
  homeView.clickBtnEventHandler();
  contactView.goBackToFormEvent();
}

renderMenu();
renderLanguage();
init();
RenderCookies();
languageView.setLanguage(allocateText);
stepsView.clickInitialBtn();

function showLegalText(view) {
  homeView.empty();
  mainRefView.empty();
  imagineView.empty();
  recView.empty();
  stepsView.empty();
  knowhowView.empty();
  graficsView.empty();
  contactView.empty();
  impressumView.empty();
  privacyView.empty();
  if (view === "impressumView") {
    impressumView.render();
  } else if (view === "privacyView") {
    privacyView.render();
  }
  impressumView.gotoHomeClickEvent(hideLegalText);
  privacyView.gotoHomeClickEvent(hideLegalText);
}

function hideLegalText() {
  impressumView.empty();
  privacyView.empty();
  init();
  document.querySelector(".home").scrollIntoView();
  languageView.setLanguage(allocateText);
  stepsView.clickInitialBtn();
}

function allocateText(language) {
  const textElements = {
    ...homeView.textElements,
    ...uniqueView.textElements,
    ...mainRefView.textElements,
    ...imagineView.textElements,
    ...recView.textElements,
    ...stepsView.textElements,
    ...knowhowView.textElements,
    ...graficsView.textElements,
    ...contactView.textElements,
    ...menuView.textElements,
    ...footerView.textElements,
    ...cookieView.textElements,
  };
  for (const [key, val] of Object.entries(
    language === "en" ? texts.textsEn : texts.textsDe
  )) {
    textElements[key].innerHTML = val;
  }
}
