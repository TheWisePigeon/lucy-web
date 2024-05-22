function Navbar() {
  return (
    <div className="bg-slate-50 top-0 h-[4.5rem] max-h-[5rem] resize-none border-b border-neutral-700/80">
      <div className="max-width-container">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center px-4 py-4">
            <span>Dashboard</span>
            <span>Catégories</span>
            <span>Utilisateurs</span>
            <span>Utilisateurs</span>
          </div>
          <div className="flex gap-5 items-center px-4 py-4">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
