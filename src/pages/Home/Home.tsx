import { Navbar } from "../../components/Navbar/navbar"
import { ClothingCard } from "../../components/ClothingCard/clothingCard"
import { CarouselComponent } from "../../components/CarouselComponent/carouselComponent"

function Home() {
    return (
        <>
        <Navbar/>
        <CarouselComponent/>
        <ClothingCard/>
        </>
    )
}

export default Home