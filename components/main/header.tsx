import Image from "next/image";

const Header = () => {
    return (
        <div className="w-full h-[64px] py-[12px] px-[32px] border-b border-[#d9d9d9] flex items-center gap-[16px] justify-between">
            <div className="w-[360px] h-[22px] gap-[16px] flex items-center">
                <div className="w-[70px] h-[22px] gap-[16px] text-[15px] leading-[22px] font-normal text-[#1A181E]">
                    Payments
                </div>
                <div className="w-[94px] h-[16px] gap-[6px] text-[15px] leading-[22px] flex items-center">
                    <div className="w-[14px] h-[14px] relative text-black">
                        <Image
                            height={13}
                            width={13}
                            src="/dashboard/help.png"
                            alt="help"
                            className="absolute top-[0.7] left-[0.7] text-black"
                        />
                    </div>
                    <div className="w-[74px] h-[16px] text-[12px] leading-[16px] font-normal text-[#4D4D4D]">
                        How it works
                    </div>
                </div>
            </div>
            <div className="max-w-[400px] min-w-[400px] h-[40px] rounded-[6px] py-[9px] px-[16px] gap-[8px] flex bg-[#f2f2f2]">

                <Image
                    height={15.37}
                    width={15.07}
                    src="/dashboard/search.png"
                    alt="search"
                    className=""
                />
                <input type="text" placeholder="Search features, tutorials, etc." className="w-full bg-[#f2f2f2] placeholder:text-[#f2f2f2f] focus:outline-none" />

            </div>
            <div className="flex w-[360px] h-[40px] gap-[8px] justify-end relative">
                <div className="flex w-[92px] h-[40px] gap-[8px] absolute">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#e6e6e6]">
                        <div className=" w-[20px] h-[20px] group relative">
                            <Image
                                height={20}
                                width={20}
                                src="/dashboard/message.png"
                                alt="notifications"
                                className="absolute top-[10px] left-[10px]"
                            />
                        </div>
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full bg-[#e6e6e6]">
                        <div className=" w-[20px] h-[12.73px] group relative">
                            <Image
                                height={12.73}
                                width={20}
                                src="/dashboard/arrow.png"
                                alt="notifications"
                                className="absolute top-[12.73px] left-[10px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;