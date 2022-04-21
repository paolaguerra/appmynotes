import React from "react";
import PropTypes from "prop-types";

export const NoteCard = (props) => {

  /**
   * Esta funcion me limita el texto
   * @param {String} texto 
   * @returns 
   */

   const limitarTexto = (texto) => {
    if (texto.length <= 200) {
      return texto;
    } else {
      return texto.substring(0, 200) ;
    }
  };

  const borrar = (event) => {
    props.onDelete(props.title);
  };

  const abrir = (event) => {
    props.onOpen(props.title);
  };

  return (
    <div className="NoteCard">
      <h1>{props.title}</h1>
      <p>{limitarTexto(props.parrafo)}</p>
      <div className="botones-NoteCard">
      <button className="boton-NoteCard-borrar" onClick={borrar}>
        Borrar
      </button>
      {Boolean(props.onOpen) && (
        <button className="boton-NoteCard-abrir" onClick={abrir}>
          Abrir
        </button>
      )}
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  title: PropTypes.string,
  parrafo: PropTypes.string,
};
