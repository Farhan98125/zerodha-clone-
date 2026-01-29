import React from "react";

function LeftSection({
  imageURL,
  productName,
  prodectDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        {/* left section for img */}
        <div className="col-7 ">
          <img src={imageURL} />
        </div>

        {/* right section for para */}
        <div className="col-4 p-5  ">
          <h1>{productName}</h1>
          <p>{prodectDescription}</p>
          {/* we give div to put it in next line */}
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn more
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              {" "}
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
