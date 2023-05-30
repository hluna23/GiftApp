import { useEffect, useState } from "react";
import { getGift } from "../Helper/GetGifs";



export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true);
  
  const getImages = async() => {
    const newImages = await getGift( category );
    setImages(newImages);
    setIsloading(false);
  }
  useEffect( () => {
    getImages();
    }, [] );
  

  return{

    images,
    isloading
  }
}
