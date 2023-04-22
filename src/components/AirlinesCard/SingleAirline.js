import React, { useState } from "react";

const SingleAirline = ({name, phone, site, logoURL, code, alliance} ) => {

  const [otherInformation, setOtherInformation] = useState(false);

  return (
    <>
     

    <div
      className="card w-full bg-base-100 shadow-xl"
      onMouseEnter={() => setOtherInformation(!otherInformation)}
      onMouseLeave={() => setOtherInformation(!otherInformation)}
      >
      <figure className="px-10 pt-10">
        <img src={logoURL} alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div
          className={`text-black-600 ${
              otherInformation ? "" : "hidden"
            } transition-all duration-300 ease-in`}
            >
          <p>{alliance}</p>
          <p>{phone}</p>

          <a href={site}>{site}</a>
        </div>
      </div>
            
    </div>
    </>
  );
};

export default SingleAirline;
