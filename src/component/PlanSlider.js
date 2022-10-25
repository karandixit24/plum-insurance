import React, { useEffect, useState } from "react";
import iconSlider from "../images/Husband-Filled.png";
import SliderMain from "./SliderMain";

function PlanSlider({ planSliderType, secondCheckVal, secondCheckValTwo }) {
    const [isSecondChecked, setIsSecondChecked] = useState(false);

  
   
    
    
    const handleSecondChecked = ()=> {
      setIsSecondChecked(!isSecondChecked);
      const inputChecked = document.getElementsByClassName("scales-checked");
      console.log(inputChecked[0].checked, 'ffff');
    //   console.log(isSecondChecked);
      inputChecked[0].checked === true ? secondCheckVal() : secondCheckValTwo();
   
       

    }

   

  return (
    <div>
      <div className="slider-parent-container">
        <SliderMain planSliderType={planSliderType} iconSlider={iconSlider} />
      </div>

      <div className="confirm-plan-slider">
        <div>
          <input type="checkbox" id="scales"  className="scales-checked"  name="scales" checked={isSecondChecked} onChange={handleSecondChecked} />
        </div>
        <div className="second-dec-txt" >
          I understand that this insurance will not be utilized until ₹3,00,000
          (deductible) is exhausted.
        </div>
      </div>
    </div>
  );
}

export default PlanSlider;
