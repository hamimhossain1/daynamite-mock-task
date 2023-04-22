import React, { useEffect, useState } from "react";
import SingleAirline from "./SingleAirline";

const AirlinesCard = () => {
  const [state, setState] = useState([]);
  const [airData, setAirData] = useState("");
  const [data, setData] = useState([...state]);

  useEffect(() => {
    fetch("airData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setState(data);
      });
  }, []);

  const cardFilter = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    if (checked) {
      setAirData(value);
    } else {
      setAirData("");
    }
  };

  useEffect(() => {
    if (airData) {
      setData(state.filter((item) => item.alliance === airData));
    } else {
      setData([...state]);
    }
  }, [airData, state]);

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
        {data?.map(({ name, phone, site, logoURL, code, alliance }) => (
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
