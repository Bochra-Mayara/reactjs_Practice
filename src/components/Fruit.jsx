export default function Fruit({fruitInfo,onFruitDelete}) {
    ///State
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete
    ////Comportement 
    ///Affichage (render)
    return  (
    <li >{fruitInfo.name} <button onClick={() => onFruitDelete(fruitInfo.id)}>x</button></li>
    )
}