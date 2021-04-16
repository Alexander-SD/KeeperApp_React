import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import InputArea from "./InputArea";


function App() {
  const [newNotes, setNewNotes] = useState([]);
  
  function addNewNote (input) {
    setNewNotes(prevNotes => {
      return [...prevNotes, input];
    });
  }
  
  function deleteNote (id) {
    setNewNotes(prevValue => {
      return (prevValue.filter((noteItem, index) => {
        return index !== id;
      }));
    });
  }
  

return  <div>
        <Header />
          <InputArea addNewNote={addNewNote} />
        {newNotes.map( (note, index) => (
        <Note 
         key={index}
         id={index} 
         title={note.title} 
         content={note.content}
         deleteNote={deleteNote} 
        />
        ))}
        <Footer />
    </div>
}

export default App;