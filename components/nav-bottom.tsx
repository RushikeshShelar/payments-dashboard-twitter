import Image from 'next/image';

const NavBottom = () => {
    return (
        <div className=" w-[192px] h-[54px] rounded-[4px] py-[6px] px-[12px] gap-[10px] bg-[#353C53] mt-[7.5rem]">
            <div className="w-[149px] h-[42px] flex gap-[12px]">
                <div className="w-[36px] h-[36px] rounded-[4px] gap-[10px] p-[6px] bg-[#ffffff]/10 ">
                    <div className="w-[24px] h-[24px] relative">
                        <div className="absolute w-[23.65px] h-[19.6px] top-[2.2px] left[0.2px]">
                            <Image
                                src="/wallet.png"
                                alt="Marketing"
                                width={24}
                                height={20}
                            />
                        </div>
                    </div>
                </div>

                <div className='w-[101px] h-[42px] gap-2px'>
                    <div className='w-full h-[16px] opacity-80 font-normal text-[13px] leading-[16px] text-white'>
                    Available credits
                    </div>  
                    <div className='w-[51px] h-[4px] font-medium text-[16px] leading-[24px] text-white'>
                    222.10
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default NavBottom;