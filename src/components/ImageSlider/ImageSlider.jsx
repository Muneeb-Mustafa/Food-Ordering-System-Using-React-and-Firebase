import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import imgslider1 from '../../../src/Images/imgslider1.jpg';
import imgslider2 from '../../../src/Images/imgslider2.jpg';
import imgslider3 from '../../../src/Images/imgslider3.jpg';
import imgslider4 from '../../../src/Images/imgslider4.jpg';
import imgslider5 from '../../../src/Images/imgslider5.jpg';
import imgslider6 from '../../../src/Images/imgslider6.jpg';
import imgslider7 from '../../../src/Images/imgslider7.jpg';
import imgslider8 from '../../../src/Images/imgslider8.jpg';

const CardImageSlider = () => {
  const images = [
    { src: imgslider1 },
    { src: imgslider2 },
    { src: imgslider3 },
    { src: imgslider4 },
    { src: imgslider5 },
    { src: imgslider6 },
    { src: imgslider7 },
    { src: imgslider8 },
  ];

  const [items, setItems] = useState([]);

  const updateItems = () => {
    const isSmallScreen = window.innerWidth <= 576; 
    const imagesPerSlide = isSmallScreen ? 3 : 4; 

    const newItems = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
      newItems.push(images.slice(i, i + imagesPerSlide));
    }
    setItems(newItems);
  };

  useEffect(() => {
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => {
      window.removeEventListener('resize', updateItems);
    };
  }, []);

  return (
    <div className="container mt-5 mb-5 imgSlider">
      <h1 className="mb-3">@gomeal.shop</h1>
      <p className='mb-5'>Follow us on Instagram</p>
      <Carousel controls={false} indicators={false}>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {item.map((image, imgIndex) => (
                <div className="col-4 col-md-3 col-sm-4" key={imgIndex}>  
                  <img
                    className="img-fluid mb-4"
                    src={image.src}
                    alt={`Slide ${index * 4 + imgIndex + 1}`}
                    style={{ height: '180px', objectFit: 'cover' }} // Set height and maintain aspect ratio
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardImageSlider;
