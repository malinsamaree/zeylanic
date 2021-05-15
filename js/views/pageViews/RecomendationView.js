import * as elements from "../../elements.js";

class RecomendationView {
  recccDiv = null;

  textElements = {
    recTitle: null,
    recText1: null,
    recPersonDesignation1: null,
    recText2: null,
    recPersonDesignation2: null,
  };

  _markup() {
    return `
        <div class="recomendations">
            <div class="recomendations-inner">
                <div class="rec-title">what our customers say 🦾</div>

                <div class="rec-content">

                    <div class="rec-text rec-text-1">
                      Ich bin mit dem Aufbau meiner privaten Homepage und der Umsetzung meiner 
                      individuellen Bedürfnisse sehr zufrieden. Die Betreuung ist schnell und 
                      bedarfsgerecht. Auch die Umsetzung kreativer Ideen begeistert mich. Falls 
                      ich einen professionellen Werbeauftritt plane, wende ich mich wieder an Zeylanic. 
                      Ich kann das Unternehmen sehr empfehlen.
                    </div>
                    <div class="rec-person rec-person-1">
                      <div class="rec-person-name">Irina Rauthmann</div>
                      <div class="rec-person-designation rec-person-designation-1">poet, munich</div>
                    </div>

                    <div class="rec-text rec-text-2">
                      Malin setzte seine soliden Fachkenntnisse mit gutem Erfolg in seinem
                      Arbeitsgebiet ein. Besonders hervorzuheben sind seine ausgezeichneten analytischen
                      Fähigkeiten. Malin stellte sich auf neue Aufgaben gut ein und zeigte stets persönliches
                      Engagement und Verantwortungsbewusstsein.
                    </div>
                    <div class="rec-person rec-person-2">
                      <div class="rec-person-name rec-person-name-2">Oresta Shuster</div>
                      <div class="rec-person-designation rec-person-designation-2">inhaber von 'Gewürzerei auf dem Viktualienmarkt'
                       und 'Teaflower - Viktualienmarkt'</div>
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
    this.recccDiv = document.querySelector(".recomendations");

    this.textElements.recTitle = document.querySelector(".rec-title");
    this.textElements.recText1 = document.querySelector(".rec-text-1");
    this.textElements.recPersonDesignation1 = document.querySelector(
      ".rec-person-designation-1"
    );
    this.textElements.recText2 = document.querySelector(".rec-text-2");
    this.textElements.recPersonDesignation2 = document.querySelector(
      ".rec-person-designation-2"
    );
  }

  empty() {
    this.recccDiv.remove();
  }
}

export default new RecomendationView();
