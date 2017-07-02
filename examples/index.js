import React from 'react';
import ReactDOM from 'react-dom';
import CarouselHOC from './../src'

class WannaBeCarousel extends React.Component {
  render() {
    return (
      <div>
        <div>div1</div>
        <div>div2</div>
        <div>div3</div>
        <div>div4</div>
        <div>div5</div>
        <div>div6</div>
        <div>div7</div>
        <div>div8</div>
      </div>
    )
  }
}

WannaBeCarousel = CarouselHOC(WannaBeCarousel);

ReactDOM.render(
  <WannaBeCarousel />,
  document.getElementById('root')
)