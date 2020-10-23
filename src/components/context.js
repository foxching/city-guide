import React, { useState, createContext } from "react";
import { placeInfos, reviews, detailInfo, news } from "../data";

export const InfoContext = createContext();

const InfoContextProvider = (props) => {
  const [values, setValues] = useState({
    infos: placeInfos,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news
  });

  const getItem = (id) => {
    const item = values.infos.find((item) => item.id === id);
    return item;
  };

  const handleDetail = (id) => {
    const item = getItem(id);
    setValues({
      ...values,
      detailInfo: item
    });
  };

  return (
    <InfoContext.Provider
      value={{
        infos: values.infos,
        reviews: values.reviews,
        detailInfo: values.detailInfo,
        news: values.news,
        handleDetail: handleDetail
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContextProvider;
