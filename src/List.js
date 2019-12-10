import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default class List extends Component {
  renderItem = (item, i) => {
    const { onToggleTodo, onDeleteTodo } = this.props;

    return (
      <div style={styles.item} key={item.id}>
        <Checkbox
          checked={item.completed}
          onChange={() => onToggleTodo(item.id)}
        />
        <DeleteForeverIcon
          style={styles.delete}
          onClick={() => onDeleteTodo(item.id)}
        />
        {item.text}
      </div>
    );
  };

  render() {
    const { list } = this.props;

    return <div style={styles.container}>{list.map(this.renderItem)}</div>;
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15
  },
  delete: {
    verticalAlign: -7,
    paddingRight: 15
  }
};
