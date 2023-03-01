import {useState} from 'react'

export default function FruitForm({handleAdd}) {


    //state
    const [nouveauFruit, setNouveauFruit] = useState("");
    ///comportements
    
  
 
 
 
  const  handleSubmit = (event) => {
     event.preventDefault();
     // console.log(inputRef.current.value);
     
 
     ////manipulation sur la copie du state
     const id = new Date().getTime();
     const name = nouveauFruit;
     const fruitAAjouter = {id , name};
    //  fruitCopy.push(fruitAAjouter);
     handleAdd(fruitAAjouter)
    
 
 ///// modifier le state avec setter

 
     setNouveauFruit("")
   }
 
 
   const handleChange = (event) => {
 
      setNouveauFruit(event.target.value)
 
   }
    ////render
    return(
        <form action='submit' onSubmit={handleSubmit}>
        <input
         value={nouveauFruit} 
         type="text"
          placeholder='add fruit'
          onChange={handleChange}/>
        <button>Add</button>

    </form>
    )
}