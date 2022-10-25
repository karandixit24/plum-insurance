import React, { useEffect, useState } from "react";
import "../style/App.css";

//Arrow Icons
import Arrowup from "../images/Vectorarrow-up.svg";
import ArrowDown from "../images/Vectorarrow-down.svg";

//back button icon
import BackBtn from "../images/BackButton-Chevron.svg";

// Dropdown icons
import Self from "../images/user.svg";
import Pro from "../images/Parentsparents.svg";
import Plus from "../images/Group.png";
import Max from "../images/Groupultra.png";

//components
import BasicDetails from "./BasicDetails";
import PlanDetails from "./PlanDetails";
import TimelineElement from "./TimelineElement";
import FormPreview from "./FormPreview";
import NextFooter from "./NextFooter";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";
import NextFooterSubmit from "./NextFooterSubmit";
function App() {
  const [viewPlan, setViewPlan] = useState(false);
  const [selectPlan, setSelectPlan] = useState("Select your plan");
  const [choosePlan, setChoosePlan] = useState(0);
  const [planSliderType, setPlanSliderType] = useState("");
  const [secondScreenCheckbox, setSecondScreenCheckbox] = useState(false);
  const [secondVal, setSecondVal] = useState(false);
  const [thirdVal, setThirdVal] = useState(false);
  const [emailInput, setEmailInput] = useState('')
  const [mobileInput, setMobileInput] = useState();
  const [addInput, setAddInput] = useState();
  const [pincodeInput, setPincodeInput] = useState();
  const [stateInput, setStateInput] = useState();
  const [congratsFinal, setCongratsFinal] = useState("Review and confirm payment")


  const [formPreviewSide, setFormPreviewSide] = useState(true);

  const timelineActivesecond = ()=> {
    const timeEle = document.getElementsByClassName("timeline-element");
    // console.log(timeEle);
    timeEle[1].classList.add("timeline-active-element")
  }

 const mobileInputFunc = (e)=> {
  setMobileInput(e.target.value);
  console.log(e.target.value);

 }

 const congratsFinalFunc = ()=> {
  setCongratsFinal("Congratulations!")
  const removeSubmit = document.getElementsByClassName("next-screen");
  removeSubmit[0].style.display = "none";

  const removeBack = document.getElementsByClassName("deductible-back-arrow-4");
  removeBack[0].style.display = "none";
 }

 const addInputFunc = (e)=> {
  setAddInput(e.target.value);
  console.log(e.target.value);
 }

 const pincodeInputFunc = (e)=> {
  setPincodeInput(e.target.value);
  console.log(e.target.value);

 }

 const stateInputFunc = (e)=> {
  setStateInput(e.target.value);
  console.log(e.target.value);

 }

  const secondCheckVal = () => {
    
      setSecondVal(true)

    
  };

  const thirdCheckVal = ()=> {
    setThirdVal(true);
   
  }

  const secondCheckValTwo = () => {
    
      setSecondVal(false)

    
  };

  const thirdCheckValTwo = () => {
    setThirdVal(false);
  }

  const openPlanOptions = () => {
    setViewPlan(!viewPlan);
  };

  console.log(choosePlan);

  const onSelectHandler = (e) => {
    console.log(e, "event");
    const clickTarget = e.target;
    console.log(clickTarget);
    const selectLabel = clickTarget.closest(".plan-dropdown-option-container");
    console.log(selectLabel);
    const labelTxt = selectLabel.firstChild.innerText;
    console.log(labelTxt);
    setSelectPlan(labelTxt);
    setPlanSliderType(labelTxt);
    setViewPlan(false);
  };

  const nextClickHandler = () => {
    setChoosePlan(1);
    timelineActivesecond()

  };

  const nextClickHandlerTwo = () => {
    secondVal ? setChoosePlan(2) : setChoosePlan(1);
    const timeEleB = document.getElementsByClassName("timeline-element");
    // console.log(timeEle);
    timeEleB[2].classList.add("timeline-active-element");
  };

  const fourthScreenBack = ()=> {
    setChoosePlan(2)
    const timeEleRv = document.getElementsByClassName("timeline-element");
    // console.log(timeEle);
    timeEleRv[3].classList.remove("timeline-active-element");
  }

  const thirdFuncMol = ()=> {
    setChoosePlan(3)
    setFormPreviewSide(false)
  }

  const nextClickHandlerThird = ()=> {
    thirdVal === true ?  thirdFuncMol()  : setChoosePlan(2);
    const timeEleRz = document.getElementsByClassName("timeline-element");
    // console.log(timeEle);
    timeEleRz[3].classList.add("timeline-active-element");
  }

  const backArrowHandle = () => {
    setChoosePlan(choosePlan - 1);
    const timeEleR = document.getElementsByClassName("timeline-element");
    // console.log(timeEle);
    timeEleR[1].classList.remove("timeline-active-element");
  };

  const thirdBackArrow = ()=> {
    setChoosePlan(1)

    const timeEleRx = document.getElementsByClassName("timeline-element");
    // console.log(timeEle);
    timeEleRx[2].classList.remove("timeline-active-element");
  }

  const emailInputFunc = (e)=>{
      setEmailInput(e.target.value)
  }

  const planTypeData = [
    {
      id: 1,
      type: "One",
      typePlan: "Individual",
      nameOfPlan: "Self",
      icon: Self,
      price: "₹600",
    },

    {
      id: 2,
      type: "Pro",
      typePlan: "Individual",
      nameOfPlan: "Parents",
      icon: Pro,
      price: "₹0",
    },

    {
      id: 3,
      type: "Plus",
      typePlan: "Individual + Individual",
      nameOfPlan: "Self + Parents",
      icon: Plus,
      price: "₹600",
    },

    {
      id: 4,
      type: "Max",
      typePlan: "Floater",
      nameOfPlan: "Self + Spouse + Kids",
      icon: Max,
      price: "₹1800",
    },
  ];


  return (
    <div className="app">
      <TimelineElement />

      <div className="atom-wrapper">
        {choosePlan === 0 ? (
          <FirstScreen
          stateInputFunc={stateInputFunc}
          pincodeInputFunc={pincodeInputFunc}
          addInputFunc={addInputFunc}
          stateInput={stateInput}
          addInput={addInput}
          pincodeInput={pincodeInput}
          emailInput={emailInput}
          emailInputFunc={emailInputFunc}
            Arrowup={Arrowup}
            ArrowDown={ArrowDown}
            openPlanOptions={openPlanOptions}
            viewPlan={viewPlan}
            onSelectHandler={onSelectHandler}
            planTypeData={planTypeData}
            selectPlan={selectPlan}
            mobileInput={mobileInput}
            mobileInputFunc={mobileInputFunc}
          />
        ) : choosePlan === 1 ? (
          <SecondScreen
            secondCheckVal={secondCheckVal}
            backArrowHandle={backArrowHandle}
            BackBtn={BackBtn}
            planSliderType={planSliderType}
            nextClickHandler={nextClickHandler}
            secondCheckValTwo={secondCheckValTwo}
          />
        ) : choosePlan === 2 ? (
          <ThirdScreen 
          BackBtn={BackBtn} 
          thirdCheckVal={thirdCheckVal}
          // thirdVal={thirdVal}
          thirdBackArrow={thirdBackArrow}
          thirdCheckValTwo={thirdCheckValTwo}
          secondCheckVal={secondCheckVal}
          secondCheckValTwo={secondCheckValTwo}
          backArrowHandle={backArrowHandle} />
        ) : choosePlan === 3 ? (
          <FourthScreen
          BackBtn={BackBtn}
          planSliderType={planSliderType}
          emailInput={emailInput}
          mobileInput={mobileInput}
          congratsFinal={congratsFinal}
          fourthScreenBack={ fourthScreenBack}
          // stateInputFunc={stateInputFunc}
          // pincodeInputFunc={pincodeInputFunc}
          // addInputFunc={addInputFunc}
          stateInput={stateInput}
          addInput={addInput}
          pincodeInput={pincodeInput}
          // emailInputFunc={emailInputFunc}
          />
        ): (<></>) 
        
        }
       {formPreviewSide ?
        <FormPreview /> : (<></>)

       }
      </div>

       {
        choosePlan === 3 ? (
          <NextFooterSubmit
          congratsFinalFunc={congratsFinalFunc}
          />
        ) : (
        <NextFooter
        nextClickHandler={nextClickHandler}
        choosePlan={choosePlan}
        nextClickHandlerTwo={nextClickHandlerTwo}
        nextClickHandlerThird={nextClickHandlerThird}
      />
        )
       }
      
    </div>
  );
}

export default App;
