import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import Navbar from "../components/Navbar";

function AddProduct() {
  const [category, setCategory] = useState({
    nom: "",
    prix: "",
    IDcategory: "",
    description: "",
    enabled: false,
    image: "",
  });

  const handleCategory = () => {};

  return (
    <>
      <Navbar />
      <div className="bg-[#F1F4F6] px-10 py-5 ">
        <div className="flex items-center gap-4">
          <FaArrowLeft className="text-slate-950" />
          <h2 className="text-2xl text-pretty text-slate-950">
            Ajouter Produit
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mt-[8rem] add-category ">
        <form
          action=""
          onSubmit={handleCategory}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-950">nom produit</h2>
            <input
              type="text"
              onChange={(e) =>
                setCategory({ ...category, nom: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-950">prix du produit</h2>
            <input
              type="text"
              onChange={(e) =>
                setCategory({ ...category, nom: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-950">Description</h2>
            <div className="textarea-div">
              <textarea
                id=""
                onChange={(e) =>
                  setCategory({ ...category, description: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="flex gap-3 ">
            <h2 className="text-slate-950">Afficher ?</h2>
            <input
              type="checkbox"
              onChange={(e) =>
                setCategory({ ...category, enabled: e.target.checked })
              }
            />
          </div>
          <button type="submit">Créer</button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
