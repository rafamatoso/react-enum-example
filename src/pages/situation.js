import React from "react";
import PropTypes from "prop-types";

export const size = {
  small: "small",
  medium: "medium",
  large: "large"
};

export const status = {
  aguardandoAprovacao: "Aguardando Aprovação",
  aprovado: "Aprovado",
  embalando: "Embalando",
  transporte: "Transporte",
  entregue: "Entregue"
};

export const Situation = props => (
  <span className={`situation situation-${props.size}`}>{props.status}</span>
);

Situation.propTypes = {
  size: PropTypes.oneOf(Object.keys(size)),
  status: PropTypes.oneOf(Object.keys(status))
};

// Situation.size = size;
// Situation.status = status;

//export default Situation;
