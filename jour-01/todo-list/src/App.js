import React, {useState} from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
    // ici on va créer des etats pour stocker toutes les tâches
    const [todos, seTodos]= useState([]);
    
    // ici on stocker les utilisateurs 
    const [newTodo, setNewTodos] = useState('');
    
    //fonction qui ajoute une nouvelle tâche à la liste
    const handlerAddTodo = () => {

      // si entrée vide - on ne fait rien 

      if (newTodo.trim() === '')return;

      // ajoute la nouvelle tâche à la liste existante 
      seTodos([...todos, newTodo]);

      // Reinitialisation du champs de texte 
      setNewTodos('');
      
    }

    // Suppression de la tâche via son index 
    const handlerDeleteTodo =(indexToDelete) =>{
      const updateTodos = todos.filter((_, index) => index !== indexToDelete);
      seTodos(updateTodos);
    };

  return (
    <div className="App">
      <h1> Ma To-do List </h1>
      {/*  Champ de saisie pour écrire une tâche */}
      <input type='text'
      placeholder='Ajouter une tâche...'
      value={newTodo}
      onChange={(e)=> setNewTodos(e.target.value)} //met à jour l'état 
      />

        {/* Bouton poue ajouter une tâche   */}
        <button onClick={handlerAddTodo}>Ajouter</button>
        {/* Affichage de toutes les tâches  */}
        <ul>
          {todos.map((todo,index) => (
            <TodoItem 
              key = {index}
              task = {todo}
              onDelete={()=> handlerDeleteTodo(index)}
            />
          ))}
        </ul>
    </div>
  );
}

export default App;
