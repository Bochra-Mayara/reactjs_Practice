export default function Fruit({fruitInfo,actionClick}) {
    ///State
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete
    ////Comportement 
    ///Affichage (render)
    return  (
    <li >{fruitInfo.name} <button onClick={actionClick}>x</button></li>
    )
}