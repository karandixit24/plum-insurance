import React from 'react'

function NextFooterSubmit({congratsFinalFunc}) {
  return (
    <div className="next-screen">
      <button
        className="next-footer-btn"
        onClick={
            congratsFinalFunc
        }
      >
        Submit
      </button>
    </div>
  )
}

export default NextFooterSubmit