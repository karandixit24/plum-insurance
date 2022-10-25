import React from "react";

function NextFooter({ nextClickHandler, choosePlan, nextClickHandlerTwo, nextClickHandlerThird }) {
  return (
    <div className="next-screen">
      <button
        className="next-footer-btn"
        onClick={
          choosePlan === 0
            ? nextClickHandler
            : choosePlan === 1
            ? nextClickHandlerTwo
            : choosePlan === 2
            ? nextClickHandlerThird
            : nextClickHandler
        }
      >
        Next
      </button>
    </div>
  );
}

export default NextFooter;
