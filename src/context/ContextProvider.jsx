import { createContext, useEffect, useState } from "react";
export const FotosContext = createContext();

export const ContextProvider = ({ children }) => {
  const [fotos, setFotos] = useState([]);
  const FetchFotos = async () => {
    const fotosJson = await fetch("/photos.json");
    const { photos } = await fotosJson.json();
    const fotosLiked = photos.map((foto) => {
      return {
        ...foto,
        liked: false,
      };
    });

    setFotos(fotosLiked);
  };
  useEffect(() => {
    FetchFotos();
  }, []);

  return (
    <FotosContext.Provider value={{ fotos, setFotos }}>
      {children}
    </FotosContext.Provider>
  );
};
