

import {useState} from 'react'
function IncrementChallenge() {
  ///State (données)
  const [compteur, setCompteur] = useState(1)
  //////Comportements
  const handleClick = () => {
    alert("handleClick")
   setCompteur(compteur + 1);
    
  }

  /////Affichage(Alerting)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Increment</button>
      
    </div>
  );
}

export default IncrementChallenge;