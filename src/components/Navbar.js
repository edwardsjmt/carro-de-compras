import { Component } from "react";
import Logo from "./Logo"
import Carro from "./Carro"

const styles = {
    navegacion : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100px',
        padding: '0 50px',
        position: 'relative',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class Navbar extends Component {
    render () {
        const { carro, esCarroVisible, mostrarCarro } = this.props;

        return (
            <nav style={styles.navegacion}>
                <Logo/>
                <Carro 
                    carro = {carro}
                    esCarroVisible = {esCarroVisible}
                    mostrarCarro = {mostrarCarro}
                />
            </nav>
        )
    }
}

export default Navbar;