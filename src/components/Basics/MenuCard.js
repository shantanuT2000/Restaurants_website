import React from 'react'
//using prop sent from the Restaurant.js component
const MenuCard = ({menuData}) => {
    console.log(menuData);
    // craeting an object for css styling
    const MyStyle = { color: "grey" };
  return (
     <>   
     <section className="main-card--cointainer">  
     {menuData.map((curElem)=>{
      //destructuring object menu 
      const{id,name,category,image,description} = curElem;
        return(
            <>
            
            <div className="card-container"key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category} </span>
                    {/* above is inline css */}
                  <span className="card-author subtle" style={{ color: "red" }}>
                  {name}
                  </span>
                  {/* creating object before return and using as style inline css */}
                  <span className="card-description subtle"style={MyStyle}>
                   {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images"className="card-media" />
                <span className="card-author subtle"style={{color:"orange"}}>At just {curElem.price}</span>
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
        </>
        );
     })} 
     </section>  
     
        </>
  );
}

export default MenuCard