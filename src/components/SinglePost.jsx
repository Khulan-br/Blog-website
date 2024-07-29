import { useEffect, useState } from "react";
import Profile from "../assets/Image.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleImage =
  "https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ql8Xit3eajIljJZlW2rIp1sDUbpnBnYLOW1znIH8GbFKabHZ9IlVOSxuPhttewXH86BEFtadoO~jxSamYEJXDjyyWnprbkOpQ7c3clrEx~BvjVPr-lbLC5RgpOWBKFpUaj~xwN005aFNkVs8MbcLYRr2KJn7qCAXwt8TJhzEEyErWcQhVZys7rNdfQCbTSa5CwjvTTA~w-r7hXL8B4yqPAhHuXoM7FbPg2aJ27wZIZ6Qah3Gg~9i9adBJE8zKMRbDxIGiQZXI1cm14ItIHgOQGZMVPziQLzJKqvBBoW2rqla5V4OW5nIWMD-y1uRJMZ5gfQ1Q-UjFmg9B74hUG7~-w__";

export const SinglePost = () => {
  const { id } = useParams();

  let [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
      });
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-20 pb-[100px]">
      <div className="flex flex-col w-[800px] items-start gap-8">
        <h1 className="text-[#181A2A] font-sans text-[36px] font-semibold leading-10">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex items-center gap-6">
          <img src={article.cover_image} />
          <p className="text-[#696A75] font-sans text-[14px] font-medium leading-5">
            {}
          </p>
          <p className="text-[#696A75] font-sans text-[14px] font-medium leading-5">
            August 20, 2022
          </p>
        </div>
        <img
          className="h-[462px] w-[800px] self-stretch rounded-[12px]"
          src={SingleImage}
        />
        <p className="text-[#3B3C4A] font-serif text-[20px] leading-9">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
          <br />
          <br />
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <h3 className="text-[#181A2A] font-semibold text-[24px] leading-7">
          Research Your Destination
        </h3>
        <p className="text-[#3B3C4A] font-serif text-[20px] leading-9">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <h3 className="text-[#181A2A] font-semibold text-[24px] leading-7">
          Plan Your Itinerary
        </h3>
        <p className="text-[#3B3C4A] font-serif text-[20px] leading-9">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
          <br />
          <br />
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div>
    </div>
  );
};
