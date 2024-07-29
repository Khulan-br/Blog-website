import {Footer, Header } from "../components"

export const BasicLayout = ({children}) => {
    return <div className="flex max-w-[1216px] min-h-screen mx-auto items-center flex-col gap-25">
        <Header />
        {children}
        <Footer />
    </div>
}