import harvardArt  from "./data/harvardArt.js";
import GalleryNavigation from './components/GalleryNavigation/index.js'
// console.log(harvardArt);

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records}/>
    </div>

  );
}

export default App;
