import { useState } from 'react';


export default function Compteur(){
    const [count, setCount] = useState(0);
    return(
        <div style={{ textAlign: 'center',
            marginTop: '50px'
        }}>
        <h1>Compteur : {{count}} </h1>
        <button onClick={()=> setCount(count + 1 )}> ➕ Incrémenter </button>
        <button onClick={()=> setCount(count - 1 )}> ➖ Décrémenter </button>
        <button onClick={()=> setCount(0)}>🔄 Reset</button>
        </div>
    )
}