import { useState } from 'react';

function InscriptionForm(){
    const [form, setForm] = useState({
        nom: '',
        email: '',
        password:''
    });

const handleChange = (e) => {
    const { name, value} = e.target;
    setForm({...form, [name]: value}); 
};

const handeSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises :', form);
};

return (
    <form onSubmit={handeSubmit}>
        <input name='nom' placeholder='Nom' onChange={handleChange}></input>
        <input name='email' placeholder='email' onChange={handleChange}></input>
        <input name='password' placeholder='Mot de passe' onChange={handleChange}></input>
        <button type='submit' >  S'inscrire  </button>
    </form>
);
}