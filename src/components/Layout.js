import { Component } from "react";

const styles = {
    layout : {
        backgroundColor: '#FFF',
        color: '#0a283e',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    container: {
        maxWidth: '1200px'
    }
}

class Layout extends Component {
    render () {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;