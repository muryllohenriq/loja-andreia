import { Navbar } from "../../components/Navbar/navbar"
import { ClothingCard } from "../../components/ClothingCard/clothingCard"
import { Carousel } from "../../components/Carousel/carousel"
import { Footer } from "../../components/Footer/footer"

function Home() {
    return (
        <>
        <Navbar/>
        <Carousel/>
        <ClothingCard/>
        <Footer/>
        </>
    )
}

export default Home