import React from "react";
import PropTypes from "prop-types";

const size = {
  small: "small",
  medium: "medium",
  large: "large"
};

const status = {
  aguardandoAprovacao: "Aguardando Aprovação",
  aprovado: "Aprovado",
  embalando: "Embalando",
  transporte: "Transporte",
  entregue: "Entregue"
};

const Situation = props => (
  <span className={`situation situation-${props.size}`}>{props.status}</span>
);

Situation.propTypes = {
  size: PropTypes.oneOf(Object.keys(size)),
  status: PropTypes.oneOf(Object.keys(status))
};

// Este trecho permite que uma variável chamada "size" (externa) ao componente tenha as
// características do objeto interno "size" do próprio componente.
Situation.size = size;
Situation.status = status;

export default Situation;
