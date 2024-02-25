import { useContext } from "react";
import { FotosContext } from "../context/ContextProvider";

const Favorites = () => {
  const { fotos, setFotos } = useContext(FotosContext);

  const eliminarFavorito = (id) => {
    const fotosLiked = fotos.map((foto) => {
      if (foto.id === id) {
        return {
          ...foto,
          liked: false,
        };
      }
      return foto;
    });
    setFotos(fotosLiked);
  };

  return (
    <div>
      <h1 className="App">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {fotos
          .filter((foto) => foto.liked)
          .map((foto, i) => (
            <img
              src={foto.src.tiny}
              onClick={() => eliminarFavorito(foto.id)}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};
export default Favorites;
