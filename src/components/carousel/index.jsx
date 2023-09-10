import { useRef, useEffect, useState } from "react";
import "../../assets/Styles/sass/components/_carousel.scss";

const Carousel = (props) => {
  const { images } = props;
  const imageScrollref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [carouselEl, setCarouselEl] = useState(null);
  const not_show_arrow = images.length === 1;

  const next = () => {
    setCurrentImage((currentImage) => {
      const newCurrentImage = currentImage + 1;
      if (newCurrentImage > images.length - 1) {
        return 0;
      } else {
        return newCurrentImage;
      }
    });
  };
  const back = () => {
    setCurrentImage((currentImage) => {
      const newCurrentImage = currentImage - 1;
      if (newCurrentImage < 0) {
        return images.length - 1;
      } else {
        return newCurrentImage;
      }
    });
  };
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    imageScrollref.current?.scroll({
      behavior: "smooth",
      top: 0,
      left: imageScrollref.current.clientWidth * currentImage,
    });
  }, [currentImage, width]);
  return (
    <div className="carousel" ref={(div) => setCarouselEl(div)}>
      {!not_show_arrow ? (
        <div className="next" onClick={next}>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </div>
      ) : null}
      <div className="images" ref={imageScrollref}>
        {images.map((image, index) => (
          <div
            style={{
              width: `${carouselEl?.clientWidth}px`,
              minWidth: `${carouselEl?.clientWidth}px`,
            }}
            key={index}
          >
            <img src={image} alt="" key={index} />
          </div>
        ))}
      </div>

      {!not_show_arrow ? (
        <>
          <div className="image-number">
            <span>
              {currentImage + 1}/{images.length}
            </span>
          </div>
          <div className="back" onClick={back}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
