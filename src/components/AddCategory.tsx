function AddCategory() {
  return (
    <>
      <div className="bg-[#F1F4F6] px-10 py-5">
        <h2 className="flex">Ajouter catégorie</h2>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-1">
          <h2>nom catégorie</h2>
          <input type="text" />
        </div>
        <div className="flex flex-col gap-1">
          <h2>Description</h2>
          <input type="text" />
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
