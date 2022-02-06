import React, { useRef, useContext, useState } from "react";
import { myContext } from "../context";
const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(myContext);
  const [error, setError] = useState([false, ""]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const isValid = validateTheInput(value);
    if (isValid) {
      setError([false, ""]);
      context.addPlayers(value);
      // console.log(context.state)
      textInput.current.value = "";
    }
  };

  const validateTheInput = (value) => {
    if (value === "") {
      setError([true, "Sorry, you need to add Something."]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Sorry, you need to add atleast 3 character."]);
      return false;
    }

    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={textInput} placeholder="Add Players" />
        <h4>{error[0] ? error[1] : null}</h4>
        <button className="btn" type="submit">
          Add Players
        </button>
        {context.state.players && context.state.players.length > 0 ? (
          <>
            <div className="main-list">
              <ul className="list-group">
                {context.state.players.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                    <span
                      className="removeBtn"
                      onClick={() => context.removePlayer(index)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
              <div className="next btn" onClick={() => context.next()}>
                NEXT
              </div>
            </div>
          </>
        ) : null}
      </form>
    </>
  );
};

export default Stage1;
