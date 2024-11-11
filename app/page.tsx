import HeroSection from "@/ClientComponents/HeroSection";
import RecommendedCourses  from "@/ClientComponents/RecommendedCourses"
import Testnomials from "@/ClientComponents/Testonomials";

export default function Home() {
  return (
      <>

      <div className="min-h-screen">
      <HeroSection/>
      <RecommendedCourses/>
      <Testnomials/>
      </div>
      

      </>
  );
}
