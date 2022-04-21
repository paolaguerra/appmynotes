import React from "react";
import PropTypes from "prop-types";

export const Modal = (props) => {
  return (
    <div 
    className="modal-background"
    onClick={props.onClose}
    >
      <div className="modal">
        <h1 className="titulo-modal">{props.note.titulo}</h1>
        <p className="parrafo-modal">{props.note.parrafo}</p>
        <button className="boton-NoteCard-cerrar"
        onClick={props.onClose}>
        Cerrar
      </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  note: PropTypes.shape({
    titulo: PropTypes.string,
    parrafo: PropTypes.string,
  }),
  onClose: PropTypes.func,
};
