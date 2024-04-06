import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
    <div className='vh-100 w-100 mt-5 d-flex flex-column align-items-center justify-content-center gap-4'style={{background: '#BFC9D1', width: "100%"}}>
      <h3 className='subtitle'>What Our Users Say</h3>
      <Carousel className='bg-dark rounded-5 w-75 h-75 d-flex align-items-center'>
        <Carousel.Item interval={3000}  >
          <Carousel.Caption className=' w-75 position-static d-flex  align-items-center mx-auto '>
            <div className='d-flex p-5 flex-column gap-5 align-items-center justify-content-center' style={{height: "fit-content"}}>
              <img src={process.env.PUBLIC_URL + '/images/bus1.jpeg'} alt='Testimony' height="90px" width="90px" className='rounded-circle'></img>
              <div>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. la vitae elit libero, a pharetra auguela vitae elit libero, a pharetra auguela vitae elit libero, a pharetra augue</p>
                <h3>Maria</h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}  >
          <Carousel.Caption className=' w-75 position-static d-flex p-5 align-items-center mx-auto '>
            <div className='d-flex p-5 flex-column gap-5 align-items-center justify-content-center' style={{height: "fit-content"}}>
              <img src={process.env.PUBLIC_URL + '/images/bus1.jpeg'} alt='Testimony' height="90px" width="90px" className='rounded-circle'></img>
              <div>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. la vitae elit libero, a pharetra auguela vitae elit libero, a pharetra auguela vitae elit libero, a pharetra augue</p>
                <h3>Maria</h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}  >
          <Carousel.Caption className=' w-75 position-static d-flex p-5 align-items-center mx-auto '>
            <div className='d-flex p-5 flex-column gap-5 align-items-center justify-content-center' style={{height: "fit-content"}}>
              <img src={process.env.PUBLIC_URL + '/images/bus1.jpeg'} alt='Testimony' height="90px" width="90px" className='rounded-circle'></img>
              <div>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. la vitae elit libero, a pharetra auguela vitae elit libero, a pharetra auguela vitae elit libero, a pharetra augue</p>
                <h3>Maria</h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
  );
}

export default CarouselComp;