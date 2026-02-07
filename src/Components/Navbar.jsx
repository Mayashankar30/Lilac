import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const openMenu = () => {
  setOpen(true);
  setTimeout(() => setAnimate(true), 10);
};

const closeMenu = () => {
  setAnimate(false);
  setTimeout(() => setOpen(false), 300);
};

  return (
    <>
      <nav className="bg-[#FBF6EF] px-4 sm:px-16 py-3 relative z-40">
        <div className="flex items-center justify-between">

          <button
            onClick={openMenu}
            className="sm:hidden mt-5 pl-4"
            aria-label="Open Menu"
          >
            <svg width="45" height="20" viewBox="0 0 21 15" fill="none">
              <rect width="45" height="2" rx=".75" fill="#223614" />
              <rect y="10" width="45" height="2" rx=".75" fill="#223614" />
            </svg>
          </button>

          <a href="/">
          <h1 className="font-semibold italic pr-2 text-[17px] py-6 lg:text-[40px] text-[#223614]">
            Lilac Template
          </h1></a>

          <div className="hidden sm:flex items-center gap-10 text-[#223614] text-[20px]">
            <a href="#">Blog</a>
            <a href="#">Contact</a> 
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */} 
    {open && (
  <div className="fixed inset-0 bg-[#FBF6EF] z-50 sm:hidden">

    <div className="relative z-50 flex items-center justify-between px-4 py-3">
      <div>
      <button
        onClick={closeMenu}
        className="text-[40px] pl-4 py-3 text-[#223614]"
      >
        ✕
      </button></div>
       <h1 className="font-semibold italic pr-2 text-[17px] lg:text-[40px] text-[#223614]">
            Lilac Template
          </h1>
    </div>

    <div
      className={`
        absolute inset-0 flex flex-col items-center justify-center gap-3
        text-[#223614] text-[40px]
        transform transition-all duration-1000 ease-out
        ${animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
    >
      <a href="#" onClick={closeMenu}>Blog</a>
      <a href="#" onClick={closeMenu}>Contact</a>
    </div>

  </div>
)}
    </>
  );
}

export default Navbar;