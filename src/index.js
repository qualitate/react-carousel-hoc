import React from 'react';

function carouselHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    constructor(props) {
      super(props);
      this.state = {
        slideCount: 2, // # take this from config
        currentSlide: 0 
      };
    }

    onClick(){
      this.setState(prevState => (
        { currentSlide: prevState.currentSlide + prevState.slideCount }
      ))
    }

    render() {
      const { currentSlide, slideCount } = this.state;
      const dom = super.render();

      const slides = dom.props.children.filter((child, counter) => {
        if(currentSlide <= counter && counter < currentSlide + slideCount ) {
          return true;
        } else {
          return false;
        }
      })

      return (
        <div onClick={_ => this.onClick()} >
          {slides}
        </div>
      )
    }
  }
}

export default carouselHOC;