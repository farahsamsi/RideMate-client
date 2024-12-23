import Banner from "../Components/Banner";
import CustomerReviews from "../Components/CustomerReviews";
import RecentCars from "../Components/RecentCars";
import SpecialOffers from "../Components/SpecialOffers";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <RecentCars></RecentCars>

      <CustomerReviews></CustomerReviews>
      <SpecialOffers></SpecialOffers>
    </div>
  );
};

export default Home;
