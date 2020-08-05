import React from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import BodyPortal from "./BodyPortal";
import "./Lightbox.css";

const isPDFHandle = (text) => /^https?.*(pdf|PDF)$/.test(text);

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLightbox = this.toggleLightbox.bind(this);
    this.state = {
      showLightbox: false,
      selectedImage: 0,
    };
  }

  toggleLightbox(idx) {
    this.setState({
      showLightbox: !this.state.showLightbox,
      selectedImage: idx,
    });
  }

  render() {
    let props = this.props;
    const cls = props.className
      ? `lightbox-container ${props.className}`
      : "lightbox-container";
    let images = props.images.map((image, idx) => {
      return props.renderImageFunc.call(
        this,
        idx,
        image,
        this.toggleLightbox,
        props.thumbnailWidth,
        props.thumbnailHeight
      );
    });
    let container;
    if (this.state.showLightbox)
      container = (
        <BodyPortal>
          <Container
            {...this.props}
            toggleLightbox={this.toggleLightbox}
            selectedImage={this.state.selectedImage}
          />
        </BodyPortal>
      );

    return (
      <div className={cls} style={props.style ? props.style : undefined}>
        {images}
        {container}
      </div>
    );
  }
}

Lightbox.defaultProps = {
  showImageModifiers: true,
  thumbnailWidth: "80px",
  thumbnailHeight: "80px",
  renderImageFunc: (idx, image, toggleLightbox, width, height) => {
    const isPdf = isPDFHandle(image.src);
    if (isPdf) {
      return (
        <div
          key={idx}
          className="lightbox-img-thumbnail"
          style={{
            width: width,
            height: height,
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "middle",
          }}
          alt={image.title}
          onClick={toggleLightbox.bind(null, idx)}
        >
          <svg
            t="1596591844492"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1519"
          >
            <path
              d="M901.850593 926.476283a48.761858 48.761858 0 0 1-48.761859 48.761859H170.422718a48.761858 48.761858 0 0 1-48.761858-48.761859V48.762834a48.761858 48.761858 0 0 1 48.761858-48.761859h418.864363a48.761858 48.761858 0 0 1 34.620919 14.140939l263.801654 263.801654a48.761858 48.761858 0 0 1 14.140939 34.620919V926.476283z"
              fill="#EBECF0"
              p-id="1520"
            ></path>
            <path
              d="M901.850593 926.476283v48.761859a48.761858 48.761858 0 0 1-48.761859 48.761858H170.422718a48.761858 48.761858 0 0 1-48.761858-48.761858v-48.761859a48.761858 48.761858 0 0 0 48.761858 48.761859h682.666016a48.761858 48.761858 0 0 0 48.761859-48.761859z"
              fill="#C1C7D0"
              p-id="1521"
            ></path>
            <path
              d="M24.137143 536.381417h975.237166v243.809291a48.761858 48.761858 0 0 1-48.761858 48.761859H72.899001a48.761858 48.761858 0 0 1-48.761858-48.761859v-243.809291z"
              fill="#FF5630"
              p-id="1522"
            ></path>
            <path
              d="M121.66086 536.381417V438.8577l-97.523717 97.523717h97.523717zM901.850593 536.381417l0.975237-97.523717 97.036098 97.523717H901.850593z"
              fill="#DE350B"
              p-id="1523"
            ></path>
            <path
              d="M267.946434 585.143275h84.845634a57.051374 57.051374 0 0 1 41.935198 15.603795 55.1009 55.1009 0 0 1 16.091413 40.959961 55.588518 55.588518 0 0 1-16.091413 40.959961 59.001849 59.001849 0 0 1-43.398054 16.091413h-48.761858v76.556118H267.946434z m32.670446 81.919922h43.885672a42.422817 42.422817 0 0 0 25.843785-6.339041 23.893311 23.893311 0 0 0 7.801897-19.992362q0-24.868548-32.670445-24.868548h-44.860909zM434.71199 588.068987H511.755726a73.142787 73.142787 0 0 1 58.51423 25.356166 100.937047 100.937047 0 0 1 21.942836 68.266602 110.689418 110.689418 0 0 1-20.967599 69.729457A71.679932 71.679932 0 0 1 511.755726 780.190708H434.71199z m32.670445 158.963658H511.755726a43.398054 43.398054 0 0 0 36.083775-17.066651A75.093262 75.093262 0 0 0 560.517584 682.666992a70.704695 70.704695 0 0 0-13.65332-48.761859 48.761858 48.761858 0 0 0-37.546631-16.579031h-41.935198zM755.565018 618.788957h-100.937047v45.348529H755.565018v31.207589h-100.937047v81.919922h-32.670445v-190.171248H755.565018z"
              fill="#FFFFFF"
              p-id="1524"
            ></path>
            <path
              d="M901.850593 312.564487v6.82666h-263.801654a48.761858 48.761858 0 0 1-48.761858-48.761858V0.000975a48.761858 48.761858 0 0 1 34.620919 14.140939l264.289272 263.801654a48.761858 48.761858 0 0 1 13.653321 34.620919z"
              fill="#C1C7D0"
              p-id="1525"
            ></path>
          </svg>
        </div>
      );
    }
    return (
      <img
        key={idx}
        src={!!image.thumbnail ? image.thumbnail : image.src}
        className="lightbox-img-thumbnail"
        style={{ width: width, height: height }}
        alt={image.title}
        onClick={toggleLightbox.bind(null, idx)}
      />
    );
  },
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      thumbnail: PropTypes.string,
    })
  ).isRequired,
  showImageModifiers: PropTypes.bool,
  thumbnailWidth: PropTypes.string,
  thumbnailHeight: PropTypes.string,
  renderImageFunc: PropTypes.func,
  renderDescriptionFunc: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  modalStyle: PropTypes.object,
  modalClassName: PropTypes.string,
};
