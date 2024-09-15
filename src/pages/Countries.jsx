import { useEffect, useState } from "react";

import HeroSection from "../components/HeroSection";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  Drawer,
  Button,
  Flowbite
} from "flowbite-react";

export default function Countries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    setError(null)
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        if(!response.ok){
          throw new Error ('Error Fetched Countries!')
        }
        const fetchedCountries = await response.json()
        setCountries(fetchedCountries)
      } catch (error) {
        console.log(error.message)
      }finally {
        setLoading(false)
      }
    }

    fetchCountries();
  }, []);
  console.log(countries)
  const customTheme = {
    table: {
      row: {
        base: "group/row",
        hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
        striped: "odd:bg-blue-50 even:bg-blue-200 odd:dark:bg-gray-800 even:dark:bg-gray-700",
      },
    },
  };

  return (
    <div>
      <Drawer open={false}>
        <Drawer.Items>Drawer item</Drawer.Items>
      </Drawer>

      <HeroSection />

      <Flowbite theme={{ theme: customTheme }}>
      <div className='max-w-[1140px] mx-auto mt-4'>
        <Table striped>
          <TableHead>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Population</TableHeadCell>
            <TableHeadCell>Capital</TableHeadCell>
          </TableHead>
          <TableBody className='divide-y'>
            {countries.map((country) =>
                <Table.Row key={country.cca2} className="bg-white dark:border-gray-700 border-blue-500 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                    {country.name.common}
                  </Table.Cell>
                  <Table.Cell>{country.population}</Table.Cell>
                  <Table.Cell>{country.capital} </Table.Cell>
                  <Table.Cell>
                    <Button color={"gray"}>Select</Button>
                  </Table.Cell>
                </Table.Row>
            )}
         
          </TableBody>
        </Table>
      </div>
      </Flowbite>
    </div>
  );
}
