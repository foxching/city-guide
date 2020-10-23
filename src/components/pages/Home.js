import React, { useContext } from "react";
import { InfoContext } from "../context";
import Info from "../Info";

const Home = () => {
  const { infos, handleDetail } = useContext(InfoContext);

  return (
    <div className="container">
      <div className="row mt-5">
        {infos.map((info) => (
          <Info key={info.id} info={info} handleDetail={handleDetail} />
        ))}
      </div>
    </div>
  );
};

export default Home;
