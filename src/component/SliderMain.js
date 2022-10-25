import React, { useState } from "react";

function SliderMain({iconSlider, planSliderType}) {
  const [deductibleAmount, setDeductibleAmount] = useState(1);
  const inputHandler = (event) => {
    console.log("eventt");
    // (event.target.value);
    setDeductibleAmount(event.target.value);
  };

  return (
    <div className="slider-main-container">
      <div className="slider-main-head">
      <div className='slider-label' >
          <div className='slider-label-plan' >{planSliderType}</div>
          <div className='icon-username' >
            <img src={iconSlider}></img>
            <div className='john-doe' >John Doe</div>
          </div>
         </div>
      </div>
      <div className="slider-main-range">
        <div className="slider-main-inner-container" >
          Sum insured of  20,00,000 with
          a deductible of <div className="slider-main-ruppees-c">{deductibleAmount},00,000</div>
          
        </div>
        <div class="slidecontainer">
          

          <input
            type="range"
            min="1"
            max="5"
            value={deductibleAmount}
            onChange={inputHandler}
            class="slider"
            id="myRange"
          />
        </div>
        {/* <input
          type="range"
          min="1"
          max="5"
          value={deductibleAmount}
          className="slider-main-range"
          id="myRange"
          onChange={inputHandler}
        /> */}
        <ul className="slider-main-range-label">
          <li>₹1L</li>
          <li>₹2L</li>
          <li>₹3L</li>
          <li>₹4L</li>
          <li>₹5L</li>
        </ul>
      </div>
    </div>
  );
}

export default SliderMain;
