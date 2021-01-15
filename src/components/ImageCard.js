import React, { createRef } from "react";

import "./../styles/ImageCard.css";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = createRef();

    this.state = {
      spans: 20,
      isImageLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isImageLoading: true });
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    this.setState({ isImageLoading: false });
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
        {this.state.isImageLoading ? (
          <div ref={this.imageRef} class="ui placeholder imagePlaceholder">
            <div class="image header">
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="paragraph">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        ) : (
          <div>
            <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>
              {alt_description}
            </p>
            <img
              ref={this.imageRef}
              src={urls.small}
              alt={alt_description}
            ></img>
          </div>
        )}
      </div>
    );
  }
}

export default ImageCard;
