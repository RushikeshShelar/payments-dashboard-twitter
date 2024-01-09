import NavBottom from "@/components/nav-bottom";
import NavTop from "@/components/nav-top";

const RootLayout = ({
    children
}: { children: React.ReactNode
}) => {
    return (
        <div className="h-full relative flex"> 
            <div className="h-screen w-[224px] py-[16px] px-[10px] gap-[16px] bg-[#1e2640]">
                <NavTop />
                <NavBottom  />
            </div>
            <main className="w-full h-screen overflow-scroll">
                {children}
            </main>
        </div>
    )
}
   

export default RootLayout;