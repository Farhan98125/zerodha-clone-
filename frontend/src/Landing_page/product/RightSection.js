import React from "react";
function RightSection({
  imageURL,
  productName,
  prodectDescription,
  learnMore,
  
}) {
  return (
    <div className="container  ">
      <div className="row" style={{alignItems:"center",justifyContent:"center"}}>
        {/* left section for img */}
        <div className="col-4 p-5 ">
            <h1>{productName}</h1>
          <p>{prodectDescription}</p>
          {/* we give div to put it in next line */}
          <div>
            <a
              href={learnMore}
              style={{  textDecoration: "none" }}
            >
              Learn more
            </a>
          </div>
          
        </div>
        <div className="col-1"></div>
        

        {/* right section for para */}
        <div className="col-6  ">
          <img src={imageURL} />
         
         
        </div>
      </div>
    </div>
  );
}

export default RightSection;
