import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const myContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };

  addPlayerHandler = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name],
    }));
    // console.log(this.state.players)
  };

  removePlayerHandler = (index) => {
    let newArray = this.state.players;
    newArray.splice(index, 1);
    this.setState({
      players: newArray,
    });
  };

  nextHandler = () => {
    const { players } = this.state;
    if (players.length < 2)
      toast.error("You need to add more than one players", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    else {
      this.setState({
        stage: 2,
      });
      this.getLooserHandler();
    }
  };

  getLooserHandler = () => {
    const { players } = this.state;

    let resultIndex = Math.floor(Math.random() * players.length);
    this.setState({
      result: "Loading...",
    });
    setTimeout(() => {
      this.setState({
        result: players[resultIndex],
      });
    }, 2000);
  };

  resetHandler = () => {
    this.setState({
      stage: 1,
      players: [],
      result: "",
    });
  };
  render() {
    return (
      <>
        <myContext.Provider
          value={{
            state: this.state,
            addPlayers: this.addPlayerHandler,
            removePlayer: this.removePlayerHandler,
            next: this.nextHandler,
            getlooser: this.getLooserHandler,
            reset: this.resetHandler,
          }}
        >
          {this.props.children}
        </myContext.Provider>
        <ToastContainer />
      </>
    );
  }
}

export { myContext, MyProvider };
