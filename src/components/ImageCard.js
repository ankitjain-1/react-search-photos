import React, { createRef } from "react";

import "./../styles/ImageCard.css";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = createRef();

    this.state = {
      spans: 0,
    };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const imgHeight = this.imageRef.current.clientHeight;
    console.log(imgHeight);
    const spans = Math.ceil(imgHeight / 10) + 7;
    this.setState({ spans });
  };

  render() {
    const { urls, alt_description } = this.props.image;
    return (
      <div
        className="imageCard"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>
          {alt_description}
        </p>
        <img ref={this.imageRef} src={urls.thumb} alt={alt_description}></img>
      </div>
    );
  }
}

export default ImageCard;
