import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import HelpLine from "../HelpLine/HelpLine";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <HelpLine></HelpLine>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;