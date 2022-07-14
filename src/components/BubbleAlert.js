import { Component } from "react";

const styles = {
  bubblealert: {
    backgroundColor: "#e9725a",
    color: "#fff",
    width: "30px",
    padding: "2px 10px",
    borderRadius: "15px",
    fontSize: "0.9rem",
  },
};

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    } else {
      return n > 9 ? "9+" : n;
    }
  }
  render() {
    const { value } = this.props;

    return <span style={styles.bubblealert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
