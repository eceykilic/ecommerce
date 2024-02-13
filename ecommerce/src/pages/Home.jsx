import Header from "../components/Header";
import NavBar from '../components/NavBar';
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/ProductCard";
import Carousel2 from "../components/Carousel2";
import ContainerFluid from "../components/ContainerFluid"
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
    return(
        <>
    <NavBar />
    <Header />
    <ShopCard />
    <ProductCard />
    <Carousel2 />
    <ContainerFluid />
    <Blog />
    <Footer />
    </>
    )
}