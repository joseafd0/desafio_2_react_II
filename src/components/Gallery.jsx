import { useContext } from "react";
import { FotosContext } from "../context/ContextProvider";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { fotos, setFotos } = useContext(FotosContext);

  const fotosFavoritas = (id) => {
    const fotosLiked = fotos.map((foto) => {
      if (foto.id === id) {
        return {
          ...foto,
          liked: !foto.liked,
        };
      }
      return foto;
    });
    setFotos(fotosLiked);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {fotos.length ? (
        fotos.map((foto, i) => (
          <div
            className="photo"
            style={{ backgroundImage: `url(${foto.src.tiny})` }}
            onClick={() => fotosFavoritas(foto.id)}
            key={i}
          >
            <IconHeart filled={foto.liked} />
            <p>{foto.alt}</p>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Gallery;
