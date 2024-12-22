import Banner from "../Components/Banner";
import CustomerReviews from "../Components/CustomerReviews";
import RecentCars from "../Components/RecentCars";
// import Testimonials from "../Components/Testimonials/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <RecentCars></RecentCars>
      {/* <Testimonials></Testimonials> */}
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
