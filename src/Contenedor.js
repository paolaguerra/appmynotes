import React, { useState } from "react";
import "./index.css";
import { NoteCard } from "./NoteCard";
import { MyInput } from "./MyInput";
import { Modal } from "./Modal";

export const Contenedor = () => {
  const [myNotes, setMyNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSave = (myText, myTitle) => {
    const newItem = { titulo: myTitle, parrafo: myText };
    const newArray = [...myNotes, newItem];
    setMyNotes(newArray);
  };

  const deleteCard = (titulo) => {
    const newArray = myNotes.filter((note) => {
      return note.titulo !== titulo;
    });
    setMyNotes(newArray);
  };

  const handleOpen = (noteTitle) => {
    const noteFound = myNotes.find((note) => {
      console.log("item", note);
      if (note.titulo === noteTitle) {
        return true;
      }
      return false;
    });

    if (Boolean(noteFound)) {
      setSelectedNote(noteFound);
    } else {
    }
  };

  const handleClose = () => {
    setSelectedNote(null);
  };

  return (
    <>
      <div className="contenedor">
        <h1 className="titulo-principal">Mis Notas</h1>
        <MyInput onSave={handleSave}></MyInput>

        {myNotes.map((note) => {
          return (
            <NoteCard
              onDelete={deleteCard}
              title={note.titulo}
              parrafo={note.parrafo}
              key={note.titulo}
              onOpen={handleOpen}
            />
          );
        })}
      </div>
      {Boolean(selectedNote) && (
        <Modal onClose={handleClose} note={selectedNote} />
      )}
    </>
  );
};
