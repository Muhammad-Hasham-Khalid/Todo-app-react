import React from "react";
import "./App.css";
import logo from "./react-pic.png";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list, newItem];

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list].filter((item) => item.id !== id);

    this.setState({ list });
  }

  updateInput(newItem) {
    this.setState({ newItem });
  }

  updateCheck(id) {
    const list = [...this.state.list];
    list.forEach((item) => {
      if (item.id === id) item.isDone = !item.isDone;
    });

    this.setState({ list });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <img
        src={logo}
        width="300" 
        alt="Logo"
        className="logo"
      /> 
        <div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="Write a Todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => this.updateCheck(item.id)}
                    />
                    <p>{item.isDone ? <del>{item.value}</del> : item.value}</p>
                    {/* {item.value} */}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
