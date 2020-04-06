import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  //using an arrow function means you dont have to worry about
  //the execution context for "this"
  //arrow functions do not create a new execution context
  //if normal function used
  //this.handleIndexClick = this.handleIndexClick.bind(this)
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  //takes in a set of props, does some filtering on them
  //passes them on to children
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    console.log("Hi");
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              alt="animal thumbnail"
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
