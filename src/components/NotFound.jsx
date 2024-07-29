import { Tag } from "../components/Tag";

export const NotFound = () => {
  
    return (
        <div className="flex h-[208px] w-[642px] items-center justify-center px-88 gap-10">
            <p className="text-[72px] font-normal ">404</p>
            <p className="w-[1px] h-[156px] bg-[#E8E8EA]"/>
            <div className="flex px-[8px] flex-col items-start gap-5">
                <h1 className="text-[24px] font-semibold leading-10">Page Not Found</h1>
                <p>We're sorry, This page is unknown or does not exist the page you are looking for.</p>
                <Tag isblue={true} text="Back To Home"/>
            </div>
        </div>
    );
};