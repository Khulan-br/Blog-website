
import FB from "../assets/Facebook/Negative.svg"
import Tw from "../assets/Twitter/Negative.svg"
import IG from "../assets/Instagram/Negative.svg"
import In from "../assets/LinkedIn/Negative.svg"
import Logo from "../assets/Logo.svg"

export const Footer = () => {
    
    return (
        <div className="flex h-[495px] w-screen items-center justify-center flex-shrink-0 px-88 flex-col gap-[25px] border-t-[1px] border-t-[#E8E8EA] bg-[#F6F6F7] bg-opacity-50">
            <div className="flex w-[1215px] align-baseline gap-5">
                <div className="flex flex-col flex-shrink-0 gap-6 w-[289px] items-start">
                    <div className="flex flex-col gap-3 items-start">
                        <h5 className="text-[18px] leading-7 text-[#181A2A] font-semi-bold font-sans">About</h5>
                        <p className="text-[16px] font-normal leading-6 text-[#696A75] font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="flex flex-col gap-1 font-normal text-[#181A2A] text-base font-sans">
                        <p>Email : info@jstemplate.net</p>
                        <p>Phone : 880 123 456 789</p>
                    </div>
                </div>
                <div className="flex justify-center mt-0 w-[521px]">
                <div className="flex flex-col gap-5 flex-shrink-0 text-base font-normal text-[#3B3C4A] items-start font-sans">
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                </div>
                <div className="flex gap-5 items-start">
                    <img src={FB} className="w-4 h-4"></img>
                    <img src={Tw} className="w-4 h-4"></img>
                    <img src={IG} className="w-4 h-4"></img>
                    <img src={In} className="w-4 h-4"></img>
                </div>
            </div>
            <div className="flex flex-shrink-0 w-[1216px] h-[95px] py-8 items-center gap-16 border-t-[#DCDDDF] border-t-[1px]">
                <div className="flex items-center gap-[10px]">
                    <img className="w-12 h-12" src={Logo}/>
                    <div className="flex flex-col items-start gap-[2px]">
                        <p className="text-[20px] leading-[28px] text-[#141624]">Meta
                            <span className="text-[20px] font-bold text-[#141624]">Blog</span>
                        </p>
                        <p className="text-[#3B3C4A] font-sans">© All Rights Reserved.</p>
                    </div>
                </div>
                <div className="flex w-[921px] justify-end gap-4 text-[#3B3C4A]">
                    <p className="text-[#3B3C4A] font-sans">Terms of Use</p>
                    <p className="text-[#E8E8EA] text-2xl">|</p>
                    <p className="text-[#3B3C4A] font-sans">Privacy Policy</p>
                    <p className="text-[#E8E8EA] text-2xl">|</p>
                    <p className="text-[#3B3C4A] font-sans">Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};