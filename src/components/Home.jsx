import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { Post } from "./Post";
import { Trending } from "./Trending";
import axios from "axios";

export const Home = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(process.env);
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/articles`)
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <>
      <Carousel />
      <Trending />
      <Post articles={articles} />
    </>
  );
};
