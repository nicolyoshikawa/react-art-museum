import harvardArt  from "./data/harvardArt.js";
import GalleryNavigation from './components/GalleryNavigation/index.js'
import GalleryView from './components/GalleryView/index.js'
import Home from "./components/Home/index.js";
import { Route, Switch, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/galleries/:galleryId">
          <GalleryView gallery={harvardArt.records}/>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
