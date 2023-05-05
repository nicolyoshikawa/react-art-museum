import { NavLink, useParams } from "react-router-dom";

const GalleryView = ({gallery}) => {
    const { galleryId } = useParams();
    const galleryOne = gallery.find((el) => +galleryId === el.id);

    if(!galleryOne) {
        return (
            <h2>Page Not Found</h2>
        )
    }

    return (
      <div >
        <h2>{galleryOne.name}</h2>
      </div>
    );
};


export default GalleryView;
