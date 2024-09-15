import { Carousel } from "flowbite-react";

function CountryCarusel() {
  const customTheme = {
    carousel: {
      root: {
        base: "relative w-full h-full",
      },
      indicators: {
        active: "bg-blue-600",
        inactive: "bg-gray-200",
      },
      control: {
        base: "hidden", // Hide the control buttons (arrows)
      },
    },
  };

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel theme={customTheme} indicators={false}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CountryCarusel;
