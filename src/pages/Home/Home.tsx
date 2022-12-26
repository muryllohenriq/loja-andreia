import { Navbar } from "../../components/Navbar/navbar"
import { ClothingCard } from "../../components/ClothingCard/clothingCard"
import { Carousel } from "../../components/Carousel/carousel"

function Home() {
    return (
        <>
        <Navbar/>
        <Carousel/>
        <ClothingCard/>
        </>
    )
}

export default Home