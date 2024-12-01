"use client";
import React, {useState} from "react";
import Image from "next/image";

import logoBlue from '../../public/images/navbar-logo-blue.svg';
import closeMenuIcon from '../../public/images/closeMenuIcon.svg';
import logoWhite from '../../public/images/navbar-logo-white.svg';


export function Navbar({ data, locale }: { data: any, locale: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
            isOpen
                ? <div className="bg-[#3242C0]/75 w-full h-screen absolute z-20 flex flex-col justify-between items-center">
                    <div className="flex justify-center py-[4px]">
                        <Image className="flex-1" src={logoWhite} alt="Ivona Pleskonja logo" width={105} height={115}/>
                        <div className="w-[40px] flex flex-col p-[5px] gap-[6px] justify-center"></div>
                    </div>
                    <div className="text-[62px] flex flex-col justify-center items-center">
                        <div>O MENI</div>
                        <div>MOJI RADOVI</div>
                        <div>NOVOSTI</div>
                        <div>PRESS</div>
                        <div>KONTAKT</div>
                    </div>
                    <div className="mb-[50px]" onClick={() => setIsOpen(false)}>
                        <Image src={closeMenuIcon} alt="Close Menu" width={28} height={28} />
                    </div>
                </div>
                : (<div className="flex justify-between w-full fixed z-10 align-center px-[20px] bg-transparent">
                    <div className="flex flex-1 justify-center">
                        <Image src={logoBlue} alt="Ivona Pleskonja logo" width={105} height={115} />
                    </div>
                    <div className="w-[40px] flex flex-col p-[5px] gap-[6px] justify-center"
                         onClick={() => setIsOpen(true)}>
                        <span className=" w-[30px] border-b-2 border-white"></span>
                        <span className=" w-[30px] border-b-2 border-white"></span>
                        <span className=" w-[30px] border-b-2 border-white"></span>
                    </div>
                </div>)
    );
}
