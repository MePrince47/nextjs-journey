import { useState } from "react";

export default function CarreVal(){
    const [count , setcount] = useState(2)

    return(
        <div style={{textAlign: 'center',marginTop: '50px'}}>
            <h1>Compteur : {count} </h1>
            <button onClick={()=> setcount(count * count)}>⬛Obtenir le Carré </button>       
            <button onClick={()=> setcount(Math.sqrt(count))}>📐Obtenir la racine Carré </button>       
            <button onClick={() => setcount(2)}>🔄 Reset</button>    
            </div>
    );
}