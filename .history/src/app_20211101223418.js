import {DldBtn} from '@ist402/dld-btn-1';
import { LearningCard } from './LearningCard.js';


customElements.define('dld-btn-1', DldBtn );
customElements.define(LearningCard.tag, LearningCard);

function toggle() {
    var x = document.getElementById("mathDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }