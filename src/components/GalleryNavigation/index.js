import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {

    console.log(galleries);
    return (
        <div>
            <h1>Galleries</h1>
            <nav>
                {galleries.map((el) => (
                    <NavLink key={el.id} to={`/galleries/${el.id}`}
                    activeStyle={{ fontWeight: "bold" }}
                    >{el.name}</NavLink>
                ))}
            </nav>
        </div>
    )
};


export default GalleryNavigation;
