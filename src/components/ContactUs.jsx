import { Tag } from "../components/Tag";

export const ContactUs = () => {

    return (
        <div className="flex flex-col items-center pb-[100px] gap-[100px]">
            <div className="flex w-[895px] h-[895px] flex-col items-center">
                <div className="flex w-[769px] h-[380px] py-[10px] pl-[14px] flex-col items-center gap-5 flex-shrink-0">
                    <div className="fleex flex-col items-start gap-5">
                        <h1 className="font-sans text-[36px] font-semibold leading-10">Contact Us</h1>
                        <p className="font-sans text-[16px] text-[#696A75] leading-[24px] w-[623px] pt-5 h-[103px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="flex pt-5 px-[10px] gap-[50px]">
                        <div className="flex w-[294px] h-[133px] gap-[10px] p-4 flex-col items-start rounded-md border-[1px] border-[#E8E8EA]">
                            <h2 className="text-[24px] font-sans font-semibold leading-10">Address</h2>
                            <p className="text-[#696A75] text-[18px] font-sans leading-[26px]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                        </div>
                        <div className="flex w-[294px] h-[133px] gap-[10px] p-4 flex-col items-start rounded-md border-[1px] border-[#E8E8EA]">
                            <h2 className="text-[24px] font-sans font-semibold leading-10">Contact</h2>
                            <p className="text-[#696A75] text-[18px] leading-[26px] font-sans">313-332-8662</p>
                            <p className="text-[#696A75] text-[18px] leading-[26px] font-sans">info@email.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex pl-[35px] py-[30px] pr-[130px] rounded-md bg-[#F6F6F7]">
                    <div className="flex flex-col items-start gap-6">
                        <h3 className="text-[18px] font-sans font-semibold leading-[26px]">Leave a Message</h3>
                        <div className="flex flex-col gap-6 w-[478px] h-[317px] pb-[18px] justify-center items-center">
                            <div className=" flex w-[478px]  gap-6 flex-shrink-0">
                                <input className="flex w-[225px] h-[38px] py-[14px] pl-[14px] pr-5 rounded-md border-[1px] border-[#DCDDDF]" placeholder="Your Name"></input>
                                <input className="flex w-[225px] h-[38px] py-[14px] pl-[14px] pr-5 rounded-md border-[1px] border-[#DCDDDF]" placeholder="Your Email"></input>
                            </div>

                            <input className="flex w-[478px] h-[35px] py-[14px] pl-[14px] pr-5 flex-shrink-0 rounded-md border-[1px] border-[#DCDDDF]" placeholder="Subject"></input>
                            <input className="flex w-[478px] h-[134px] py-[14px] pl-[14px] pr-5 flex-shrink-0 rounded-md border-[1px] border-[#DCDDDF] gap-3 content-start" placeholder="Write a message"></input>
                        </div>
                        <Tag text="Send Message" isblue={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};