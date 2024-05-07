import { useState } from "react";
import { Link } from "react-router-dom";


export default function LoginPage() {

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-[#FFFFFF]">
                <div className="flex flex-col gap-[15px] border border-x-neutral-200 shadow-md p-[55px] rounded-[8px] w-[500px] h-[450px]">
                    <div className="flex flex-col">
                        <label className="font-poppins_semiBold text-[35px] text-blue-500">Bienvenue !</label>
                        <label className="font-poppins_regular">Connectez-vous</label>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div>
                            <label className="font-poppins_medium text-[12px] text-[#344054]">Numero de téléphone</label>
                            <div className="relative top-1">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-500">
                                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input name="phoneInput" type="tel" className="border-[2px] border-borderColor focus:outline-none focus:border-[#c5cedb] focus:ring-1 focus:ring-[#c5cedb] h-[42px] w-full rounded-[9px] ps-10 p-[14px]  placeholder-placeholderColor invalid:border-red-500 invalid:text-red-500  focus:invalid:border-red-500 focus:invalid:ring-red-500" placeholder="99999999" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" maxLength={8}/>
                            </div>
                        </div>
                        <div>
                            <label className="font-poppins_medium text-[12px] text-[#344054]">Mot de passe</label>
                            <input name="password" type="password" className="border-[2px] border-borderColor focus:outline-none focus:border-[#c5cedb] focus:ring-1 focus:ring-[#c5cedb] h-[42px] w-full rounded-[9px] p-[14px]  placeholder-placeholderColor invalid:border-red-500 invalid:text-red-500  focus:invalid:border-red-500 focus:invalid:ring-red-500" placeholder="votre mot de passe" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <div>
                            <button type="submit" className="bg-blue-500 shadow h-[42px] w-full rounded-[9px] text-center hover:bg-blue-600 text-white text-[16px] mt-4">Se connecter</button>
                        </div>
                        <div className="flex flex-row gap-1 font-poppins_medium text-[12px]">
                            <label>Vous n'avez pas de compte?</label>
                            <Link to="/register" className="text-blue-700 hover:text-sky-400"> 
                           Créer un compte</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}