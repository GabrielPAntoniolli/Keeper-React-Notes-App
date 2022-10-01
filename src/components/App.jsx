import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function removeItem(id) {
    setNotes((notes) => {
      return notes.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index + 1}
            title={note.title}
            content={note.content}
            onRemove={removeItem}
          />
        );
      })}
      ;
      <Footer />
    </div>
  );
}

export default App;
