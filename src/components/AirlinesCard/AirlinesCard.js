import React, { useEffect, useState } from "react";
import SingleAirline from "./SingleAirline";

const AirlinesCard = () => {
  const [airData, setAirData] = useState([]);
  console.log(airData);

  useEffect(() => {
    fetch("airData.json")
      .then((res) => res.json())
      .then((data) => setAirData(data));
  }, []);

  return (
    <div className="w-10/12 mx-auto mt-10">
      <h1 className="font-bold">Airlines</h1>
      <h2 className="font-semibold">Filter by Alliances</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {airData?.map(({ name, phone, site, logoURL, code, alliance }) => (
          <SingleAirline
          key={code}
          name={name}
          phone={phone}
          site={site}
          logoURL={`https://www.kayak.com/${logoURL}`}
          code={code}
          alliance={alliance}
          ></SingleAirline>
        ))}
      </div>
    </div>
  );
};

export default AirlinesCard;
