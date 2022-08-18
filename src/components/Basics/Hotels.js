import React from 'react'

const Hotels = ({HotelNames}) => {
  return (
    <>
     <nav className="navbar">
        <div className="btn-group">
          {HotelNames.map((curElem) => {
            return (
              <button
                className="btn-group__item"
              >
                {/* {curElem.id} */}
                {curElem.HotelName}
              </button>
            );
          })}
        </div>
      </nav>
   </>
  )
}

export default Hotels