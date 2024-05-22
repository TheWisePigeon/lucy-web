import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function RegistrationPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    try {
      if (
        country === "" ||
        city === "" ||
        description === "" ||
        password === ""
      ) {
        alert("Veillez remplir tous les champs");
      } else {
        const body = {
          pays: country,
          ville: city,
          description: description,
          mdp: password,
        };

        const response = await fetch("API_URL", {
          method: "POST",
          body: JSON.stringify(body),
        });

        switch (response.status) {
          case 500:
            console.log("There might be an error");
            return;
          case 200:
            console.log("Registration complete");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#FFFFFF]">
        <div className="flex flex-col gap-[20px] border border-x-neutral-200 shadow-md p-[55px] rounded-[8px] w-[500px] h-[550px] items-center">
          <div className="items-center">
            <label className="font-poppins_semiBold text-[24px] text-blue-500">
              COMPLETER VOS INFOS
            </label>
          </div>
          <div className="flex flex-col gap-[20px]">
            <input
              name="countryInput"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              type="text"
              className="border-[2px] border-borderColor outline-[#c5cedb] h-[42px] w-[420px] rounded-[9px] p-[14px] placeholder-placeholderColor"
              placeholder="Indiquez votre pays"
            />
            <input
              name="cityInput"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              type="text"
              className="border-[2px] border-borderColor outline-[#c5cedb]  h-[42px] w-[420px] rounded-[9px] p-[14px] placeholder-placeholderColor"
              placeholder="Indiquez votre ville"
            />
            <textarea
              name="descriptionText"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows={10}
              className="border-[2px] border-borderColor outline-[#c5cedb]  min-h-[100px] h-[42px] w-[420px] rounded-[9px] p-[14px] resize-none placeholder-placeholderColor"
              placeholder="Donnez une brève description de vos produits"
            />
            <input
              name="passwordInput"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="border-[2px] border-borderColor outline-[#c5cedb]  h-[42px] w-[420px] rounded-[9px] p-[14px] placeholder-placeholderColor"
              placeholder="Votre mot de passe"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 shadow h-[42px] w-[420px] rounded-[9px] text-center hover:bg-blue-600 text-white text-[16px] mt-6"
            >
              Compléter votre inscription
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
