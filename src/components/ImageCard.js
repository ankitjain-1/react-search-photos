import React from "react";

class ImageCard extends React.Component {
  state = {};

  render() {
    console.log(this.props.image);
    const { urls, alt_description } = this.props.image;
    return <img src={urls.thumb} alt={alt_description}></img>;
  }
}

export default ImageCard;
