import { useEffect, useState } from "react";
import { Tag } from "./Tag";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Post } from "./Post";

export const AllBlogPost = () => {
  const navigate = useNavigate();
  let [articles, setArticles] = useState([]);

  const handleClick = () => navigate("/AllBlogPost");

  const handleClickCategory = (index) => setArticles(index);

  const handleClickPost = (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    console.log(process.env);
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/articles`)
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <div className="mt-[100px] flex flex-col items-center gap-8 pb-[100px] max-w-[1216px] mx-auto">
      <div className="flex w-[100%] self-start gap-3 justify-around flex-col">
        <div className="text-2xl font-bold font-sans">All Blog Post</div>
      </div>
      <Post articles={articles} />
      <button className="mt-20 py-4 px-5 bg-[#FF336605] w-fit border-[#696A75] border-[1px] border-opacity-30 font-medium rounded-md text-[#696A75] text-[16px] font-sans">
        Load More
      </button>
    </div>
  );
};

// <div className="justify-end rounded-md flex border-[#E8E8EA] border-[1px]">
// <Link to="/SinglePost">
//   <div className="p-4 gap-5 flex w-[392px] flex-col">
//     <img
//       src={data.cover_image}
//       className="object-cover rounded-md h-[240px] w-[360px] flex"
//     />
//     <div className="flex flex-col gap-[16px]">
//       <Tag isblue={false} text={data.tag_list[0]}/>
//       <div className="w-[100%] font-bold text-2xl font-sans">{data.title}</div>
//       <p className="font-sans">{data.readable_publish_date}</p>
//     </div>
//   </div>
// </Link>
// </div>
