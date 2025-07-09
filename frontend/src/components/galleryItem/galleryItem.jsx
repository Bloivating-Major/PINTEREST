import "./galleryItem.css";
import { Link } from 'react-router';
import CustomImage from "../image/custom_image";

const GalleryItem = ({item}) => {  

  const optimizedHeight = (372 * item.height) / item.width

  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <CustomImage path={item.media} alt="" w={372} h={optimizedHeight}/>
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <CustomImage path="/general/share.svg" alt="" />
        </button>
        <button>
          <CustomImage path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
