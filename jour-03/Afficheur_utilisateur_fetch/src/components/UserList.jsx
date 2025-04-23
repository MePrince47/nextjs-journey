import { useEffect, useState} from 'react';

export default function UserList(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

// Composant créé 
useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users') //Mon API
    .then(res => {
        if(!res.ok) throw new Error('Erreur de chargement');
        return res.json();
    })
    .then(data => {
        setUsers(data);
        setLoading(false);
    })
    .catch(err => {
        setError(err.message);
        setLoading(false);
    });
}, []);

if (loading) return <p>Chargement ...</p>;
if (error) return <p>Erreur: {error} </p>;

return (
    <div style={{textAlign: 'center'}} >
        <h2>Liste des utilisateurs</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}> {user.name} - {user.email} </li>
            ))}
        </ul>

    </div>
);


}