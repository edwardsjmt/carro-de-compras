import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from './DetallesCarro'

const styles = {
  btn: {
    backgroundColor: "#359a2c",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "15px 20px",
    borderRadius: "15px",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad != 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.btn}>Carro</button>
        {esCarroVisible ? <DetallesCarro carro = {carro} /> : null}
      </div>
    );
  }
}

//Lin 23 eso es un condicional
export default Carro;
