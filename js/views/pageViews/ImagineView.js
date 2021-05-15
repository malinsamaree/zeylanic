import * as elements from "../../elements.js";

class ImagineView {
  imagineDiv = null;

  textElements = {
    justImagin: null,
    imagineTextSpan1: null,
    imagineTextDiv1: null,
    imagineTextSpan2: null,
    imagineTextDiv2: null,
    imagineCircle1: null,
    imagineCircle2: null,
    imagineCircle3: null,
    imagineDesignsTitle: null,
    imaginAttractivTitle: null,
    imaginAttractivContent: null,
    imaginResponsiveTitle: null,
    imaginResponsiveContent: null,
    imaginScalableTitle: null,
    imaginScalableContent: null,
    imaginTestedTitle: null,
    imaginTestedContent: null,
    imaginSeoTitle: null,
    imaginSeoContent: null,
  };

  _markup() {
    return `
            <div class="imagine">
                <div class="imagine-inner">
                    <div class="just-imagine">
                        just imagine
                    </div>
                    <div class="just-imagine-text">
                        <span class="just-imagine-text-span-1"> that your </span>
                        
                        <div class="just-imagine-text-div-1">&middot; homepage &middot; online shop &middot; web app &middot; </div>
                        
                        <span class="just-imagine-text-span-2">
                            resonates well with your branding strategy 
                        </span>

                        <div class="just-imagine-text-div-2">
                            that's why we put lots of efforts to make your online portal STAND OUT from the rest
                            <br />
                            &
                            <br />
                            seamlessly integrated with your BRANDING STRATEGY
                        </div>

                        <div class="just-imagine-text-div-3">
                            <div class="just-imagine-circle-1 just-imagine-circle">
                                <div class="just-imagine-circle-1-inner just-imagine-circle-inner"></div>
                                <div class="just-imagine-circle-1-inner-2 just-imagine-circle-inner-2">
                                    UNIQuE design
                                </div>
                            </div>
                            <div class="just-imagine-circle-2 just-imagine-circle">
                                <div class="just-imagine-circle-2-inner just-imagine-circle-inner"></div>
                                <div class="just-imagine-circle-2-inner-2 just-imagine-circle-inner-2">
                                    OPTImIZED digital brand
                                </div>
                            </div>
                            <div class="just-imagine-circle-3 just-imagine-circle">
                                <div class="just-imagine-circle-3-inner just-imagine-circle-inner"></div>
                                <div class="just-imagine-circle-3-inner-2 just-imagine-circle-inner-2">
                                    EnHANCED brand value
                                </div>
                            </div>
                            

                        </div>


                        <div class="just-imagine-text-div-4"> 
                            <div class="our-designs-are-title">
                                and of course they are 
                            </div>
                            <div class="our-designs-are-content">
                                <div class="our-designs-are-block our-designs-are-attractive">
                                    <span class="our-designs-are-block-title imagin-attractiv-title">attractive</span><br>
                                    <span class="imagin-attractiv-content">
                                        our main focus in designing the front-end is to maximize the user experience.
                                        homepage is obviously the first impression about the company for many potential customers.
                                        the success is when we can enhance and express the company and brand image through creative, 
                                        apealing and seamless design.
                                    </span>
                                </div>
                                <div class="our-designs-are-block our-designs-are-responsive">
                                    <span class="our-designs-are-block-title imagin-responsive-title">responsive</span><br>
                                    <span class="imagin-responsive-content">
                                        by the end of 2019, the mobile devices website traffic has increased up to approximately 53%.
                                        so, it’s quite apparent, that the websites should be optimized to be viewed by any device including desktops, 
                                        tablets and smart phones. This is where the term 'responsive' comes in to play.
                                        all our web sites and web applications are streamlined for all the devices
                                    </span>
                                    <div class="responsive-icon"></div>
                                </div> 
                                <div class="our-designs-are-block our-designs-are-scalable">
                                    <span class="our-designs-are-block-title imagin-scalable-title">scalable</span><br>
                                    <span class="imagin-scalable-content">
                                        there are times your website or web-app gets influx of visitors. This may be a particular time of the day
                                        or a particular time of the year. this can also be during a marketing campaign. 
                                        it's quite usual that the visitors experience substatial page loading times due to high traffic 
                                        resulting in losing lots of potential customers. 
                                        our web applications are scallable and optimized to handle high traffic gracefully offering visitors 
                                        a joyful ride 
                                    </span>
                                </div> 
                                <div class="our-designs-are-block our-designs-are-tested">
                                    <span class="our-designs-are-block-title imagin-tested-title">well tested</span><br>
                                    <span class=" imagin-tested-content">
                                        our web-apps and homepages are well tested on all the popular browsers and devices.
                                        we make sure everyone will have a euqally pleasant experience.     
                                    </span>
                                </div> 
                                <div class="our-designs-are-block our-designs-are-seo">
                                    <span class="our-designs-are-block-title imagin-seo-title">seo optimized</span><br>
                                    <span class=" imagin-seo-content">
                                        It’s equally important that your website is promptly visible to your audience in search engines.
                                        we utilize all the techniques to organically list your website in all the major search engines
                                        including google, bing, etc... 
                                    </span>
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
    this.imagineDiv = document.querySelector(".imagine");

    this.textElements.justImagin = document.querySelector(".just-imagine");
    this.textElements.imagineTextSpan1 = document.querySelector(
      ".just-imagine-text-span-1"
    );
    this.textElements.imagineTextDiv1 = document.querySelector(
      ".just-imagine-text-div-1"
    );
    this.textElements.imagineTextSpan2 = document.querySelector(
      ".just-imagine-text-span-2"
    );
    this.textElements.imagineTextDiv2 = document.querySelector(
      ".just-imagine-text-div-2"
    );
    this.textElements.imagineCircle1 = document.querySelector(
      ".just-imagine-circle-1-inner-2"
    );
    this.textElements.imagineCircle2 = document.querySelector(
      ".just-imagine-circle-2-inner-2"
    );
    this.textElements.imagineCircle3 = document.querySelector(
      ".just-imagine-circle-3-inner-2"
    );
    this.textElements.imagineDesignsTitle = document.querySelector(
      ".our-designs-are-title"
    );
    this.textElements.imaginAttractivTitle = document.querySelector(
      ".imagin-attractiv-title"
    );
    this.textElements.imaginAttractivContent = document.querySelector(
      ".imagin-attractiv-content"
    );
    (this.textElements.imaginResponsiveTitle = document.querySelector(
      ".imagin-responsive-title"
    )),
      (this.textElements.imaginResponsiveContent = document.querySelector(
        ".imagin-responsive-content"
      ));
    this.textElements.imaginScalableTitle = document.querySelector(
      ".imagin-scalable-title"
    );
    this.textElements.imaginScalableContent = document.querySelector(
      ".imagin-scalable-content"
    );
    this.textElements.imaginTestedTitle = document.querySelector(
      ".imagin-tested-title"
    );
    this.textElements.imaginTestedContent = document.querySelector(
      ".imagin-tested-content"
    );
    this.textElements.imaginSeoTitle = document.querySelector(
      ".imagin-seo-title"
    );
    this.textElements.imaginSeoContent = document.querySelector(
      ".imagin-seo-content"
    );
  }

  empty() {
    this.imagineDiv.remove();
  }
}

export default new ImagineView();
