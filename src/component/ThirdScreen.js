import React, { useState } from "react";

function ThirdScreen({ BackBtn, backArrowHandle, thirdBackArrow, secondCheckVal, secondCheckValTwo, thirdVal, thirdCheckVal, thirdCheckValTwo }) {
  

  const [isThirdCheckedOne, setIsThirdCheckedOne] = useState(false);
  const [isThirdCheckedTwo, setIsThirdCheckedTwo] = useState(false);
  const [isThirdCheckedThird, setIsThirdCheckedThird] = useState(false);
  const [isThirdCheckedFour, setIsThirdCheckedFour] = useState(false);

  const [oneDec, setOneDec] = useState(0);
  const [twoDec, setTwoDec] = useState(0);
  const [threeDec, setThreeDec] = useState(0);
  const [fourDec, setFourDec] = useState(0);

  const [allCheckThree, setAllCheckThree] = useState(0)

  const inputCheckedthree = document.getElementsByClassName("declaration-checked");
    // console.log(inputCheckedthree);

    // let inputCheckArr = Array.from(inputCheckedthree);
    // console.log(inputCheckArr);
    // inputCheckArr.map((atom)=> {
    //     console.log(atom);
    //     atom.checked === true ? thirdCheckVal() : thirdCheckValTwo()
    // })

    console.log(oneDec + twoDec + threeDec + fourDec);
    oneDec + twoDec + threeDec + fourDec === 4 ? thirdCheckVal() : thirdCheckValTwo();

  const handleThirdCheckedOne = () => {
   
    setIsThirdCheckedOne(!isThirdCheckedOne);
    inputCheckedthree[0].checked === true ? setOneDec(1) : setOneDec(0)

    
  };

  const handleThirdCheckedTwo = () => {
    setIsThirdCheckedTwo(!isThirdCheckedTwo);
    inputCheckedthree[1].checked === true ? setTwoDec(1) : setTwoDec(0)


    
  };

  const handleThirdCheckedThird = () => {
   
    setIsThirdCheckedThird(!isThirdCheckedThird);
    inputCheckedthree[2].checked === true ?  setThreeDec(1) : setThreeDec(0)


  };

  const handleThirdCheckedFour = () => {
   
    setIsThirdCheckedFour(!isThirdCheckedFour);
    inputCheckedthree[3].checked === true ? setFourDec(1) : setFourDec(0)
    


  };

  return (
    <div className="third-screen-container">
      <div className="third-screen-head">
        <div className="deductible-back-arrow" >
          <img onClick={thirdBackArrow} src={BackBtn}></img>
        </div>

        <div className="third-screen-head-txt">Declaration</div>
      </div>

      <div className="declaration-body">
        <div className="declaration-box">
              <input
                type="checkbox"
                id="box-d"
                className="declaration-checked"
                name="box-d"
                checked={isThirdCheckedOne}
                onChange={handleThirdCheckedOne}
              />
              <div className="dec-box-txt"> I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs. </div>
            </div>

            <div className="declaration-box">
              <input
                type="checkbox"
                id="box-d"
                className="declaration-checked"
                name="box-d"
                checked={isThirdCheckedTwo}
                onChange={handleThirdCheckedTwo}
              />
              <div className="dec-box-txt"> I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition. </div>
            </div>

            <div className="declaration-box">
              <input
                type="checkbox"
                id="box-d"
                className="declaration-checked"
                name="box-d"
                checked={isThirdCheckedThird}
                onChange={handleThirdCheckedThird}
              />
              <div className="dec-box-txt"> I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements) </div>
            </div>

            <div className="declaration-box">
              <input
                type="checkbox"
                id="box-d"
                className="declaration-checked"
                name="box-d"
                checked={isThirdCheckedFour}
                onChange={handleThirdCheckedFour}
              />
              <div className="dec-box-txt"> I understand that this policy doesn't cover Pre-existing diseases. </div>
            </div>
      </div>
    </div>
  );
}

export default ThirdScreen;
