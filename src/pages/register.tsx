import { useSearchParams } from "react-router-dom"
import { useState } from "react"

export default function RegistrationPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [description, setDescription] = useState("")
  const [password, setPassword] = useState("")

  async function submit() {
    try{
      if(country === "" || city === "" || description ==="" || password ===""){
        alert("Veillez remplir tous les champs")
      }else{
        const body = {
          pays:country,
          ville:city,
          description:description,
          mdp:password
        }

        const response = await fetch(
          "API_URL",
          {
            method:"POST",
            body:JSON.stringify(body)
          }
        )

        switch(response.status){
          case 500:
            console.log("There might be an error")
            return
          case 200:
            console.log("Registration complete")
        }
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#FFFFFF]">
        <div className="flex flex-col gap-[30px] border border-x-neutral-200 shadow  p-[55px] rounded-[8px] w-[500px] h-[550px] items-center">
          <div className="items-center">
            <label className="font-poppins_semiBold text-[24px]">COMPLETER VOS INFOS</label>
          </div>
          <div className="flex flex-col gap-[20px]">
            <input name="countryInput" onChange={(e) => {setCountry(e.target.value)} } type="text" className="border border-secondary outline-secondary shadow h-[42px] w-[420px] rounded-[8px] p-[14px]" placeholder="Indiquez votre pays" />
            <input name="cityInput" onChange={(e) => {setCity(e.target.value)} } type="text" className="border border-secondary outline-secondary shadow h-[42px] w-[420px] rounded-[8px] p-[14px]" placeholder="Indiquez votre ville" />
            <textarea name="descriptionText" onChange={(e) => {setDescription(e.target.value)} } rows={10} className="border border-secondary outline-secondary shadow min-h-[100px] h-[42px] w-[420px] rounded-[8px] p-[14px] resize-none" placeholder="Donnez une brève description de vos produits" />
            <input name="passwordInput" onChange={(e) => {setPassword(e.target.value)} } type="password" className="border border-secondary outline-secondary shadow h-[42px] w-[420px] rounded-[8px] p-[14px]" placeholder="Votre mot de passe" />
            <button type="submit" className="bg-primary shadow h-[42px] w-[420px] rounded-[8px] text-center text-white text-[16px] mt-6">Complèter votre inscription</button>
          </div>
        </div>
      </div>
    </>
  )
}
