import "../Styles/Gallery.css"; 
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
const images = [img1, img2, img3, img4];

export default function Gallery() {
    return(
        <>
        <div className="Gallery">
        <div className="Gallery-heading font-['Tomorrow','swap'] ">
            A Peek through IEEE Stories
        </div>
        <div className="Gallery-container">
            <div className="Gallery-wrapper">
            {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
            ))}
            </div>
        </div>
      </div>  
      </>
    );
  }; 
