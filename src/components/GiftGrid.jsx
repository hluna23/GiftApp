import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifItem } from './GifItem';




export const GiftGrid = ({category}) => {

  const {images,isloading } = useFetchGifs(category);


  

  return (

    <div>
       <h3>{category}</h3>
       {
        isloading && (<h2>Cargando...</h2>)
       }

          <div className="card-grid">
             {
              images.map((image) => (

                    <GifItem 
                      key={image.id}
                      {...image }
                    />
                      ))
             }
           </div>
      
    </div>
  )
};


