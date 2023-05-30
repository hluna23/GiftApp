import { useState } from "react"
import { Addcategory } from "./components/Addcategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertapp = () => {


  const [ categories, setCategories ] = useState(['one punch']);

  

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory)) return;
    //categories.push('newCategory');
    //console.log(newCategory)
    //setCategories([ ...categories, 'valarant']);
    //setcategories(cat => [ cat, 'valorant']);
    setCategories([ newCategory, ...categories ]);
  }

  return (
   <div>

      <h1>GiftExpertapp</h1>

        <Addcategory 
        //setCategories={ setCategories}
        onNewCategory={event => onAddCategory(event)}
        //currentCategory={categories}
        />
    
          { categories.map( category => (
                   
              <GiftGrid key={category} 
              category={ category }/>

                  
            ))
        }


   
   
   </div>
  )
}
