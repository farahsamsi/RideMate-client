import { useLoaderData } from "react-router-dom";
import CarCard from "../Components/CarCard";
import { useEffect, useState } from "react";
// import moment from "moment";
import { FaRegListAlt } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import { toast } from "react-toastify";

const AvailableCars = () => {
  const carsLoaded = useLoaderData();

  const [cars, setCars] = useState(carsLoaded);
  const [toggleLayout, setToggleLayout] = useState(true);

  const [dateOrder, setDateOrder] = useState("newest");
  const [priceOrder, setPriceOrder] = useState("lowest");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the cars based on the search term
  const handleFilter = (e) => {
    setSearchTerm(e);
    // console.log(searchTerm);
    // const filteredCars = carsLoaded.filter((car) =>
    //   `${car?.carModel} ${car?.location}`
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase())
    // );
    // setCars(filteredCars);
  };

  useEffect(() => {
    if (cars.length === 0) {
      console.log("empty");
    }
  }, [searchTerm, cars.length]);

  // handleSearchBtn
  const handleSearchBtn = () => {
    console.log(searchTerm);
    const filteredCars = carsLoaded.filter((car) =>
      `${car?.carModel} ${car?.location}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
  };

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

  // cars.map((car) => console.log(moment(car.datePosted).format("MMM Do YY")));

  return (
    <div className="mb-4 md:mb-6 lg:mb-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>Explore Our Fleet</h1>
        <p className="font-medium px-4">
          Discover a diverse selection of vehicles ready to match your needs.
          From budget-friendly options to luxurious rides, find your perfect
          match today.
        </p>
      </div>

      <div className="mb-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sort  */}
        <div className="flex flex-col justify-center items-center">
          <label className="label">
            <span className="label-text font-normal ">Sort Cars by Date</span>
          </label>
          <button className="btn btn-outline" onClick={sortByDate}>
            Sort by Date (
            {dateOrder === "newest" ? "Newest First" : "Oldest First"})
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="label">
            <span className="label-text font-normal ">Sort Cars by Price</span>
          </label>
          <button className="btn btn-outline" onClick={sortByPrice}>
            Sort by Price (
            {priceOrder === "lowest" ? "Lowest First" : "Highest First"})
          </button>
        </div>
        {/* search */}
        <div className="flex flex-col justify-center items-center">
          <label className="label">
            <span className="label-text font-normal ">
              Search Car by model or location
            </span>
          </label>
          <label className="input input-bordered w-full flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search Car by model or location"
              value={searchTerm}
              onChange={(e) => handleFilter(e.target.value)}
            />
            <svg
              onClick={handleSearchBtn}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70 hover:cursor-pointer hover:scale-110 text-primary font-bold"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Layout toggle */}
      <div className="hidden md:flex justify-end items-center gap-3 w-11/12 mx-auto">
        <p>Click to change view layout</p>
        <button className="btn rounded-full" onClick={handleLayout}>
          {toggleLayout ? <FaRegListAlt /> : <BsGrid3X3Gap />}
        </button>
      </div>

      {cars.length !== 0 ? (
        <div
          className={`${
            toggleLayout ? "grid" : "block"
          }  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4`}
        >
          {cars.map((car, index) => (
            <CarCard key={index} car={car} toggleLayout={toggleLayout} />
          ))}
        </div>
      ) : (
        <div className="font-medium py-4 text-center text-red-800 text-2xl">
          No cars found
        </div>
      )}
    </div>
  );
};

export default AvailableCars;
