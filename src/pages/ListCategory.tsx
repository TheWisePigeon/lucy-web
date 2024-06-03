import { FaArrowLeft } from "react-icons/fa6";
import Navbar from "../components/Navbar";
function ListCategory() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F1F4F6] px-10 py-5">
        <div className="flex items-center gap-4">
          <FaArrowLeft className="text-slate-950" />
          <h2 className="text-2xl text-pretty text-slate-950">
            Liste catégorie
          </h2>
        </div>
      </div>
    </>
  );
}

export default ListCategory;
