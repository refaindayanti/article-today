import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';
import '../styles/_slider.scss';
import iconBookmark from '../assets/img/bookmark.png';

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const addBookmarks = (item) => {
    props.onBookmark(item);
  }

  const slides = props.items.map((item, index) => {
    if(item.title) {
      const url = item.url ? item.url.url : "/";
      const publisher = item.publisher ? item.publisher : "";
      var img_url = "https://via.placeholder.com/300x150";
      if(item.thumbnail) {
        img_url = "https://obs.line-scdn.net/" + item.thumbnail.hash;
      }
      return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
          >
            <a href={url} target="_blank" rel="noreferrer">
                <div>
                  <img width="100%" height="500" className="img-fluid" src={img_url} alt={item.title} />
                </div>
                <CarouselCaption className="custom-slider" captionText={publisher} captionHeader={item.title} />
            </a>
            <Button className="btn-bookmark" onClick={() => addBookmarks(item)}>
              <img src={iconBookmark} width="20" alt="bookmarks" />
            </Button>
          </CarouselItem>
      );
    }
    return <div key={index}></div>
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={props.items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;