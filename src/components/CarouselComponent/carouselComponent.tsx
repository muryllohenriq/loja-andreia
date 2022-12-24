import Carousel from 'react-bootstrap/Carousel';

export function CarouselComponent() {
  return (
    <Carousel className='-z-10 h-96 bg-black' controls={false}>
      <Carousel.Item>
        <div></div>
      </Carousel.Item>
      <Carousel.Item>
        <div></div>
      </Carousel.Item>
      <Carousel.Item>
        <div></div>
      </Carousel.Item>
    </Carousel>
  );
}