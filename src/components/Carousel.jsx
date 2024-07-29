import { useState } from "react";
import { Tag } from "./Tag";
import backIcon from "../assets/sum.svg";
import forwardIcon from "../assets/sum2.svg";
import { Link } from "react-router-dom";

const defaultImage =
  "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCLy5GghCAPtYF~~U28~GaAdAp88xIeWT8FSkxHLq4JKnZuK1Ax07wga4n6pArK3wCb0p3KuijpLEmUvLcVvF5JxOkJWk9AU1rXxAtZd4woX~Gpb6eSSvDZZqMcP8h-3zhg9ut2mf4VzWiIiDHKoa9NFXk8w0G04hXxZ2xt~73IMrGSXvFTz~kv0Vk4MPJFtZHNiElyvYHEdlUlU9HVpQZdHPzvhc2XEN6DiTGUzQFh~QgwOE1h-gKcycyMG3CwVSq-PGcJpBzOKf20idyHPjhXZtUuuqxXW56q6b~~6JJETVtLbxz~ERtCcjXI3euAOxRmG8ebg83eq01thZq~zEg__";

const secondImage =
  "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGaAS6boAe1jt7IE16J3AhBdS4oh-R64BcF71O~vpOVG45MXQ7Mz7kbSES0YcMtROk1bQJg5lD7Pey3sJaXn5N0QP0fleDa~h1h-~K0XVSFWWPSjIBV6GKQSbgDnVSDkPYjP3Gr4aInjtgZDc2KCGSP2L2kBUlsGQC9pz1eGLEsP821zltTv3G2QLm-qzI6oY7Uq8qKIoCDXS7UJnDSqSXSNEH2ssjK0TKRWbHpUkzG5fHO8-EUqCqIPZkyRpsDVVKkCLUWMk8rwjpCpqsqity7ufQz2SmZUDB-69xb44sZWpSjPIySFeYq8VZPpMlUj6tLEvHw7PEsv71o5OCRp6Q__";

const thirdImage = "https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4ZOPPxqp9QsBC3L4FpckBb8lZYKobziHH1tKq6zayFcGG3-LsgXuREWBLK06pyu9YUp9nFukgKIlb9VM16fGZa8XjMcvCKUSMkL1C3Um3r9q63LepyHlN~tiFZ~XFdAiicoyVBQgKHHo~P3D4W14kjhsbPHkHz5jBFm~CrF71lccblbT4cel4dIRR0xDNppveFAyVIFnR6yDrDi0zHFhsQpNiIjwB54qGYjSkdaHeqhA6KSr5rH2ZsYe-~gwlif5xT0NzLBqSb2Ydc3ifCSW~mJ7IeT~2aTVbmjQ0EmFKpqJ9msBfukqFME~~HVAZPLLzPRVs9X4GNHBz4gGIsxjg__";

const fourthImage = "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7AMmxIgtUH4BYgItpH1tVb1TXBNNupwZ87M-tz3VZOKm0pA5sbflyoq6ugbWOJ~LIbhaePqQw6pedVx4e5oNVGmtmQviVOIz6OplELy4YxX9MfLb5a8KY2LHwJeWN5wqpG3Io2UWL6-w3hq9JlMh8yq9PZfqbzuRPAr~bZa2LkO8ROh0ObE7lRJmprGogpptEJ5~jWSg7e-zyEeA4pCJdP89Do1vX5VYo5ysLH5jH2U4ub9lOHGVKbV5mLWcrsbCzf~Dyx6Gtf4QrcqkQRx6xVTDj4PMnTPz3X~WFCClbOh5i8qJzYNDH3Hxw4gHHYCunwho8loQD2FhxeTQ~EqxQ__";

const data = [
  {
    background: defaultImage,
    text: "Technology",
    title: "Grid system for better Design User Interface",
    date: "August 20, 2022",
  },
  {
    background: secondImage,
    text: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "October 20, 2021",
  },
  {
    background: thirdImage,
    text: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "September 21, 2023",
  },
  {
    background: fourthImage,
    text: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "September 21, 2023",
  },
]

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const leftClick = () => {
    setCurrent(current == 0 ? data.length - 1 : current - 1);
  };

  const rightClick = () => {
    setCurrent(current == data.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="flex w-screen justify-center">
        <div className="max-w-[1216px] overflow-hidden">
          <div
            className="flex relative transition-transform"
            style={{ transform: `translateX(-${100 * current}%)` }}>
          
            {data.map((data) => {
              return (
                <div className="min-h-[600px] min-w-[1216px] rounded-xl flex bg-[#141624] bg-opacity-40">
                  <img
                    src={data.background}
                    className="object-cover absolute w-[1216px] h-[600px] rounded-xl first-line:flex -z-10"/>
                  <div className="bg-white rounded-xl w-[598px] h-[252px] mt-80 ml-6 top-335px p-10 gap-6">
                    <div className="flex flex-col gap-6">
                      <Tag isblue={true} text={data.text} />
                      <div className="text-[36px] font-sans font-bold leading-10 text-[#181A2A]">{data.title}</div>
                      <p className="font-sans text-[#97989F] leading-5 text-[16px]">{data.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex space-x-2 justify-end mt-2">
            <button onClick={leftClick}>
              <img src={backIcon} /></button>
            <button onClick={rightClick}>
              <img src={forwardIcon} /></button>
          </div>
        </div>
    </div>
  );
};
