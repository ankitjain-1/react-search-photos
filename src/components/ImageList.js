import React from "react";
import ImageCard from "./ImageCard";
import "./../styles/ImageList.css";
class ImageList extends React.Component {
  render() {
    const images = this.props.images.map((image) => {
      return <ImageCard image={image} key={image.id} />;
    });
    return <div className="imagelist">{images}</div>;
  }
}

export default ImageList;
