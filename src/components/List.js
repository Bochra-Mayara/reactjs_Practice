import {useState} from 'react'
import Fruit_  from './Fruit';
import FruitForm from './FruitForm';
function List() {
  ///State (données)
  const [Fruit, setFruit] = useState([
    {id:1 , name:"Apricot"},
    {id:2 , name:"Banana"},
    {id:3 , name:"Cherry"}
  ]);

 


//   const inputRef = useRef()
  
  //////Comportements

  const handleDelete = (id) => {
    console.log(id);
 
 /////Copy State
    const fruitsCopy = [...Fruit]
    //// manipulate the state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id)
 
    ////modifie the state with setter
 
    setFruit(fruitsCopyUpdated)
   }



   const handleAdd = (fruitAAjouter) => {
    ///copier le state
    const fruitCopy = [...Fruit];
     ////manipulation sur la copie du state
    fruitCopy.push(fruitAAjouter);

     ///// modifier le state avec setter
     setFruit(fruitCopy)
   }




   const displayFavoriteFruit = (fruitName) => {
    alert(`I really like this fruit : ${fruitName}`)
   }
 


 

  /////Affichage(Alerting)
  return (
    <div>
        <h1>Fruit list</h1>
        <ul>
            {Fruit.map((fruit) => (
               
                <Fruit_ fruitInfo={fruit} actionClick={() =>  displayFavoriteFruit(fruit.name)}  key={fruit.id}/>
           ))}
        </ul>
        <FruitForm handleAdd={handleAdd}/>
       
    </div>
  );
}

export default List;