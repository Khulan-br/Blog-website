import { Tag } from "./Tag";
import { Link, useNavigate } from "react-router-dom";

export const Post = ({ articles }) => {
  const navigate = useNavigate();

  const handlerClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="mt-[100px] flex flex-col items-center gap-8 pb-[100px] max-w-[1216px] mx-auto">
      <div className="flex w-[100%] self-start gap-8 justify-around flex-col">
        <div className="text-[24px] font-bold font-sans text-[#181A2A] leading-[28px]">
          All Blog Post
        </div>
        <div className="flex justify-between">
          <div className="flex gap-8 font-sans">
            <p className="text-[#D4A373] text-[12px] font-sans font-bold leading-[25px]">
              All
            </p>
            <p className="text-[#495057] text-[12px] font-sans font-bold leading-[25px]">
              Design
            </p>
            <p className="text-[#495057] text-[12px] font-sans font-bold leading-[25px]">
              Travel
            </p>
            <p className="text-[#495057] text-[12px] font-sans font-bold leading-[25px]">
              Fashion
            </p>
            <p className="text-[#495057] text-[12px] font-sans font-bold leading-[25px]">
              Technology
            </p>
            <p className="text-[#495057] text-[12px] font-sans font-bold leading-[25px]">
              Branding
            </p>
          </div>
          <div className="text-[#495057] text-[12px] font-sans font-bold leading-[25px]">
            View All
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-4 items-center justify-center ">
        {articles.map((data) => {
          return (
            <div
              onClick={() => handlerClick(data.id)}
              className="rounded-md flex border-[#E8E8EA] border-[1px]"
            >
              <div className="p-4 gap-[16px] items-center flex w-[392px] h-[488px] flex-col">
                <img
                  src={data.cover_image}
                  className="object-cover rounded-md h-[240px] w-[360px] flex"
                />
                <div className="flex flex-col w-[360px] gap-[16px]">
                  <Tag isblue={false} text={data.tag_list[0]} />
                  <div className="w-[100%] font-bold text-2xl font-sans">
                    {data.title}
                  </div>
                  <p className="font-sans text-[#97989F]">
                    {data.readable_publish_date}
                  </p>
                </div>
              </div>
            </div>
          );
        
        })}
      </div>
      <button className="mt-20 py-4 px-5 bg-[#FF336605] w-fit border-[#696A75] border-[1px] border-opacity-30 font-medium rounded-md text-[#696A75] text-[16px] font-sans">
        Load More
      </button>
    </div>
  );
};
