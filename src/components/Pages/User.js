import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <h1 className="bg-orange-500 text-white text-3xl p-4 text-center">
        User: {userid}
      </h1>
    </>
  );
};

export default User;
