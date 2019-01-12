import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    id: 1,
    altText: '- Pele',
    caption: '"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning"'
  },
  {
    id: 2,
    altText: '- William Pollard',
    caption: '"Learning and innovation go hand in hand. The arrogance of success is to think that what you did yesterday will be sufficient for tomorrow"'
  },
  {
    id: 3,
    altText: '- Friedrich Nietzsche',
    caption: '"He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying"'
  },
  {
    id: 4,
    altText: '- Louisa May Alcott',
    caption: '"I am not afraid of storms for I am learning how to sail my ship - Louisa May Alcott"'
  },
  {
    id: 5,
    altText: '- W. Clement Stone',
    caption: '"Like success, failure is many things to many people. With Positive Mental Attitude, failure is a learning experience, a rung on the ladder, a plateau at which to get your thoughts in order and prepare to try again"'
  },
  {
    id: 6,
    altText: '- Asa Hutchinson',
    caption: '"You are never too old to start learning, and you are never too young to aim high and achieve great things"'
  },
  {
    id: 7,
    altText: '- Colin Powell',
    caption: '"There are no secrets to success. It is the result of preparation, hard work, and learning from failure"'
  },
  {
    id: 8,
    altText: "- Anthony J. D'Angelo",
    caption: '"Develop a passion for learning. If you do, you will never cease to grow"'
  },
  {
    id: 9,
    altText: '- Margaret Mead',
    caption: '"I learned the value of hard work by working hard"'
  },
  {
    id: 10,
    altText: '- Richard Branson',
    caption: '"You do not learn to walk by following rules. You learn by doing, and by falling over"'
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
     

        <CarouselCaption className="text-height" captionText={item.altText} captionHeader={item.caption}/>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 95%;
                height: 80vh;
                background: #2086D3;
                transform: translateX(2.5%);
                border: double 10px white;
                font-family: Lato;
                font-size: 25px;
                
              }`
          }
        </style>
        <style>
          {
            `.text-height {
                top: 30vh
              }`
          }
        </style>


        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}


export default Home;