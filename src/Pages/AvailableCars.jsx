import { useLoaderData } from "react-router-dom";
import CarCard from "../Components/CarCard";
import { useState } from "react";
import moment from "moment";
import { FaRegListAlt } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import { toast } from "react-toastify";

const AvailableCars = () => {
  const carsLoaded = useLoaderData();

  const [cars, setCars] = useState(carsLoaded);
  const [toggleLayout, setToggleLayout] = useState(true);

  const [dateOrder, setDateOrder] = useState("newest");
  const [priceOrder, setPriceOrder] = useState("lowest");

  // layout toggle
  const handleLayout = () => {
    setToggleLayout(!toggleLayout);
  };

  // Sort by Date Added
  const sortByDate = () => {
    const sortedData = [...carsLoaded].sort((a, b) => {
      const dateA = new Date(a.datePosted);
      const dateB = new Date(b.datePosted);
      return dateOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    setCars(sortedData);
    setDateOrder(dateOrder === "newest" ? "oldest" : "newest");
    toast.success("Cars sorted based on Posted Date");
  };

  // Sort by Price
  const sortByPrice = () => {
    const sortedData = [...carsLoaded].sort((a, b) => {
      return priceOrder === "lowest"
        ? a.dailyPrice - b.dailyPrice
        : b.dailyPrice - a.dailyPrice;
    });
    setCars(sortedData);
    setPriceOrder(priceOrder === "lowest" ? "highest" : "lowest");
    toast.success("Cars sorted based on Price");
  };

  cars.map((car) => console.log(moment(car.datePosted).format("MMM Do YY")));

  return (
    <div className="mb-4 md:mb-6 lg:mb-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>Explore Our Fleet</h1>
        <p className="font-medium  px-4">
          Discover a diverse selection of vehicles ready to match your needs.
          From budget-friendly options to luxurious rides, find your perfect
          match today.
        </p>
      </div>

      <div className="mb-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sort  */}
        <button className="btn btn-outline" onClick={sortByDate}>
          Sort by Date (
          {dateOrder === "newest" ? "Newest First" : "Oldest First"})
        </button>
        <button className="btn btn-outline" onClick={sortByPrice}>
          Sort by Price (
          {priceOrder === "lowest" ? "Lowest First" : "Highest First"})
        </button>
      </div>

      <div className="hidden md:flex justify-end items-center gap-3 w-11/12 mx-auto">
        <p>Click to change view layout</p>
        <button className="btn rounded-full" onClick={handleLayout}>
          {toggleLayout ? <FaRegListAlt /> : <BsGrid3X3Gap />}
        </button>
      </div>

      <div
        className={`${
          toggleLayout ? "grid" : "block"
        }  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4`}
      >
        {cars.map((car, index) => (
          <CarCard key={index} car={car} toggleLayout={toggleLayout} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
