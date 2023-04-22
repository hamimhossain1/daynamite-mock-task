import React, { useEffect, useState } from "react";
import SingleAirline from "./SingleAirline";

const AirlinesCard = () => {
  //   const [airData, setAirData] = useState([]);
  //   console.log(airData);
  const [state, setState] = useState([]);
  const [airlines, setAirlines] = useState("");
  const [filterData, setFilterData] = useState([...state]);

  useEffect(() => {
    fetch("airData.json")
      .then((res) => res.json())
      .then((data) => {
        setFilterData(data);
        setState(data);
      });
  }, []);

  const cardFilter = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    if (checked) {
      setAirlines(value);
    } else {
      setAirlines("");
    }
  };

  useEffect(() => {
    if (airlines) {
      setFilterData(state.filter((item) => item.alliance === airlines));
    } else {
      setFilterData([...state]);
    }
  }, [airlines]);

  return (
    <div className="w-10/12 mx-auto mt-10">
      <h1 className="font-bold">Airlines</h1>
      <h2 className="font-semibold">Filter by Alliances</h2>

      <div className="">
        <div class="flex items-center my-4">
          <input
            type={"checkbox"}
            value={"OW"}
            onChange={cardFilter}
            className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
          />
          <label for="remember-me" className="ml-2 block text-base ">
            One world
          </label>

          <input
            type={"checkbox"}
            value={"ST"}
            onChange={cardFilter}
            className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600 ml-8"
          />
          <label for="remember-me" className="ml-2 block text-base ">
            Sky Team
          </label>

          <input
            type={"checkbox"}
            value={"SA"}
            onChange={cardFilter}
            className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600 ml-8"
          />
          <label for="remember-me" className="ml-2 block text-base r">
            Star Allience
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filterData?.map(({ name, phone, site, logoURL, code, alliance }) => (
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
