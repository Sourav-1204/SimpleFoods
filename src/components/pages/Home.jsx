import Hero from "../home/Hero";
import HomeAbout from "../home/homeAbout";
import HomeBlog from "../home/homeBlog";
import HomeContent from "../home/homeContent";
import HomeMenu from "../home/homeMenu";
import HomeService from "../home/homeService";
import HomeTestimonial from "../home/homeTestimonial";


function Home() {
  return (
    <div className="h-full w-full">
      <Hero />
      <HomeMenu />
      <HomeAbout />
      <HomeService />
      <HomeContent />
      <HomeTestimonial />
      <HomeBlog />
    </div>
  );
}

export default Home;
