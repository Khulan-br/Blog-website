

const TagStyle = {

    blue: "px-[10px] py-1 bg-[#4B6BFB] w-fit font-medium rounded-md text-white font-sans",
    gray: "px-[10px] py-1 bg-[#FF336605] w-fit font-medium rounded-md text-[#4B6BFB] font-sans"
}

export const Tag = ({text, isblue}) => {
    console.log(isblue)
    return (<p className={isblue ? TagStyle.blue : TagStyle.gray}>{text}</p>)

}