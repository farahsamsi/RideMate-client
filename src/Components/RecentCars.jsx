import { useEffect, useState } from "react";
import RecentCarCard from "./RecentCarCard";
import { useLoaderData } from "react-router-dom";

const RecentCars = () => {
  const carsLoaded = useLoaderData();
  const [cars, setCars] = useState(carsLoaded);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_url}/cars`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCars(data);
  //     });
  // }, []);

  // Sort by Date Added
  useEffect(() => {
    const sortByDate = () => {
      const sortedData = [...carsLoaded].sort((a, b) => {
        const dateA = new Date(a.datePosted);
        const dateB = new Date(b.datePosted);
        return dateB - dateA;
      });
      setCars(sortedData);
    };
    sortByDate();
  }, [carsLoaded]);

  return (
    <div className="my-4 md:my-6 lg:my-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>Recent Cars</h1>
        <p className="font-medium  px-4">
          Explore Our Newest Additions – The Latest Cars, Tailored for Your
          Comfort and Style!
        </p>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4`}
      >
        {cars.slice(0, 6).map((car, index) => (
          <RecentCarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default RecentCars;
