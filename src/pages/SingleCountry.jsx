import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function SingleCountry() {
  const { code } = useParams();
  const navigate = useNavigate()
  const [countries, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        if (!response.ok) {
          throw new Error('Countries Fetch Error!');
        }
        const [data] = await response.json(); // Extract the single country object from array
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [code]); 
  console.log(countries)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!countries) return <p>No country found!</p>;

  return (
    
    <div className="max-w-[400px] mr-auto  ">
      <button onClick={() => navigate(-1)} className="flex items-center w-min text-white text-xl rounded px-2 py-2 ml-5 mt-5 mb-6  bg-blue-500 gap-2 gray">
      <FaArrowLeftLong />
        <p className="text-nowrap font-semibold">Back to</p>
      </button>
    <div className="flex items-start flex-col ml-20 shadow-md rounded-tl-lg rounded-tr-lg">
     
        <div className="flex items-center w-full flex-col">
          <img className="w-full h-[200px] rounded-tl-lg rounded-tr-lg" src={countries.flags.png} alt={countries.name.common}/>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {countries.name.common}
        </h5>
        </div>
        <div className="px-3 py-4" >
          <h3><strong>Capital:</strong> {countries.capital ? countries.capital[0] : 'N/A'}</h3>
          <h3><strong>Population:</strong> {countries.population}</h3>
          <h3><strong>Languages:</strong> {countries.languages.eng}</h3>
        </div>
     
    </div>
    </div>
  );
}
