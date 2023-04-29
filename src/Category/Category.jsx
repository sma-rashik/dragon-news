import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h1>This is Category:{categoryNews.length} </h1>}

      {categoryNews.map((news) => (
        <NewsCard news={news} key={news._id}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
