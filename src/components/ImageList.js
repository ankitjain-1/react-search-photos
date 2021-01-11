import React from "react";
import ImageCard from "./ImageCard";
// import "./../styles/ImageList.css";
class ImageList extends React.Component {
  state = {};
  images = this.props.images.map((image) => {
    return <ImageCard image={image} key={image.id}></ImageCard>;
  });

  render() {
    return <div>{this.images}</div>;
  }
}

export default ImageList;
