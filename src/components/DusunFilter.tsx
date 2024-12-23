import { useEffect, useRef, useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";

const dusun = ["Ketileng", "Ganggeng", "Gebyog", "Tinesek"];

const DusunFilter = ({ checkedDusun, setCheckedDusun }: {
  checkedDusun: string[];
  setCheckedDusun: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [pilihDusun, setPilihDusun] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setPilihDusun(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setPilihDusun(!pilihDusun)}
        className={`flex border-2 border-primary hover:bg-primary-hover text-white ps-5 pe-2 py-2 rounded-md justify-between gap-8 items-center hover:border-primary-hover ${pilihDusun ? "bg-primary border-primary-dark border-2" : "bg-primary-2"}`}
      >
        <p>Pilih Dusun</p>
        <div onClick={(e) => { 
          e.stopPropagation();
          setCheckedDusun([]);
          setPilihDusun(true);
        }} className="hover:text-primary-hover">
          <FaXmark />
        </div>
      </button>
      {pilihDusun && (
        <ul
          ref={dropdownRef}
          style={ {zIndex: 100}}
          className={`absolute block left-0 right-0 border border-primary p-3 rounded-md bg-primary-bg transition-all duration-500`}
        >
          {dusun.map((e) => (
            <li key={e} className="hover:text-primary-hover py-2">
              <button
                onClick={() => {
                  if (checkedDusun.includes(e)) {
                    setCheckedDusun(checkedDusun.filter((curr) => curr !== e));
                  } else {
                    setCheckedDusun([...checkedDusun, e]);
                  }
                }}
                className="flex items-center w-full gap-2 px-3"
              >
                {checkedDusun.includes(e) ? (
                  <ImCheckboxChecked className="text-primary" size={20} />
                ) : (
                  <ImCheckboxUnchecked className="text-primary" size={20} />
                )}
                <p className="hover:text-primary-hover">{e}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DusunFilter;
