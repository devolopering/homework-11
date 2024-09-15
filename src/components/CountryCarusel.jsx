import { Carousel, Flowbite } from "flowbite-react";
import { getFromLocalStorage } from "../utils";


const NumArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function CountryCarusel() {
  const countries = getFromLocalStorage('selectedCountries') || [];
  const countriesNum = NumArray(countries, 4);

  const customTheme = {
      control: {
        base: " hidden",
      }
  };

  return (
    <div>
        <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel indicators={false} theme={customTheme} >
            {countriesNum.map((countrNum, index) => (
              <div key={index} className="flex justify-around space-x-4">
                {countrNum.map((country) => (
                  <div key={country.cca2} className="flex flex-col items-center w-1/4 p-2">
                    <img
                      src={country.flags.svg}
                      alt={`${country.name.common} flag`}
                      className="w-28 h-16 object-cover"
                    />
                    <p className="mt-2 text-lg font-semibold">{country.name.common}</p>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
   
    </div>
  );
}

export default CountryCarusel;
