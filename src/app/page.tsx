import FooterSection from "@/Organisms/FooterSection";
import HomeSection from "@/Organisms/HomeSection";
import NavbarSection from "@/Organisms/NavbarSection";

export default function page() {
  return (
    <div className='bg-white  min-h-screen flex flex-col '>
    <NavbarSection/>
    <HomeSection/>
    <FooterSection/>
    </div>
  );
}
