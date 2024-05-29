import { FaArrowLeft } from "react-icons/fa6";
function AddCategory() {
  return (
    <>
      <div className="bg-[#F1F4F6] px-10 py-5 ">
        <div className="flex items-center gap-4">
          <FaArrowLeft />
          <h2>Ajouter catégorie</h2>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mt-[8rem] add-category ">
        <div className="flex flex-col gap-2">
          <h2>nom catégorie</h2>
          <input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <h2>Description</h2>
          <div className="textarea-div">
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div className="flex gap-3 ">
          <h2>Afficher ?</h2>
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
}

export default AddCategory;
