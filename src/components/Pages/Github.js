import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/imprathameshh")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setdata(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <>
      <h2 className="text-center m-4 bg-orange-500 text-white p-4 text-3xl">
        Github Followers : {data.followers}
      </h2>
      <img
        className="text-center"
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/imprathameshh");
  const data = await response.json();
  return data;
};
