import './gallery.css';
import { items } from '../../constants/items';
import GalleryItem from '../galleryItem/GalleryItem';

const Gallery = () => {
  return (
    <div className='gallery'>
      {items.map(item => (
        <GalleryItem key={item.id} item={item} />
      ))
      }
    </div>
  )
}

export default Gallery