"use client";

import Navbar from "@/app/navbar";
import { useState, useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  // export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  }, [window.innerWidth]);

  const handleIsOpen = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    // <div ref={ref} className="relative">
    //   {isOpen && (
    //     <div className="fixed top-0 bottom-0 right-24 w-60 z-50 py-8 bg-slate-100 border-2 border-primary rounded-md">
    //       <button
    //         className="flex items-end justify-end self-end w-full pe-6"
    //         onClick={() => setIsOpen(false)}
    //       >
    //         <IoIosCloseCircle
    //           size={35}
    //           className="text-primary-2 hover:text-primary-hover"
    //         />
    //       </button>
    //       <Navbar sideBar={true} />
    //     </div>
    //   )}
    //   <Navbar sideBar={false} isOpen={isOpen} handleIsOpen={setIsOpen} />
    // </div>
    <div>
      <div ref={ref} className="relative">
        <div
          className={`fixed top-0 bottom-0 right-0 w-60 z-50 py-8 bg-slate-100 border-4 border-primary rounded-md transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="flex items-end justify-end self-end w-full pe-6"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <IoIosCloseCircle
              size={35}
              className="text-primary-2 hover:text-primary-hover"
            />
          </button>
          <div>
            <Navbar sideBar={true} />
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "blur-lg" : ""}`}>
        <Navbar sideBar={false} isOpen={isOpen} handleIsOpen={handleIsOpen} />
        {children}
      </div>
    </div>
  );
}
