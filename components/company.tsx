import Image from "next/image";

const Company = () => {
    return ( 
        <div className="w-[192px] h-[42px] gap-[12px] flex mb-4">
            <div className="h-[40px] w-[40px] rounded-[4px] bg-[#ffffff]">
                <Image 
                    src="/logo.png"
                    alt="Logo"
                    width={39}
                    height={39}
                    className="rounded-[4px]"
                />
            </div>
            <div className="min-w-[108px] h-[42px] gap-[4px] flex-col">
                <span className="w-full h-[22px] font-medium text-[15px] leading-[22px] text-[#ffffff] ">Nishyan</span>
                <span className="w-full h-[16px] font-normal text-[13px] leading-[16px] text-[#ffffff] opacity-80 underline block">Visit Store</span>
            </div>
            <div className="h-[20] w-[20] relative">
                <div className="absolute w-[15px] h-[8.68px] top-[6.88px] left-[2.5px]">
                    <Image
                    fill
                    src="/arrow.png"
                    alt="Arrow"
                    className="relative top-[6.88px] left[2.5px]"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Company;

// // width: 15px
// height: 8.68px
// top: 6.88px
// left: 2.5px
// angle: -0 deg
