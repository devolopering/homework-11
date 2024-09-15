import { Button, Drawer, Flowbite } from "flowbite-react";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getFromLocalStorage } from "../utils";

 function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const countries = getFromLocalStorage('selectedCountries') || [];

  const customTheme = {
    drawer: {
      root: {
        position: {
          right: {
            on: "right-0 top-0 h-screen w-[400px] transform-none", // Kenglikni 400px qilib belgiladik
            off: "right-0 top-0 h-screen w-[400px] translate-x-full",
          },
        },
      },
    },
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Tanlanganlar</Button>
      </div>

      {isOpen && (
        <Flowbite theme={{theme:customTheme}}>
        <Drawer open={isOpen} onClose={handleClose} position="right">
          <div className="p-4">
            <div className="flex items-center gap-5 mb-5">
             <FaArrowLeftLong className="text-3xl text-blue-500 cursor-pointer hover:translate-x-[-10px] duration-200"  onClick={() => setIsOpen(false)} />
              <h2 className="text-2xl font-semibold">Tanlangan Davlatlar</h2>
            </div>
            <ul className="flex flex-wrap gap-4">
              {countries.length ? (
                countries.map((country) => (
                  <li key={country.cca2} className="mb-2">
                    <h3 className="text-lg font-semibold mb-1">{country.name.common}</h3>
                    <img className="w-36 h-20" src={country.flags.png} alt={country.name.common} />
                  </li>
                ))
              ) : (
                <p className="text-xl font-semibold text-blue-600 mt-10">Hech qanday davlat tanlanmadi!</p>
              )}
            </ul>
          </div>
        </Drawer>
        </Flowbite>
      )}
    </>
  );
}
export default Component
