import React, { useContext } from "react";
import { myContext } from "../context";

const Stage2 = () => {
  const context = useContext(myContext);

  return (
    <>
      <div className="looser-wrapper">
        <h2>
          The looser is : <span>{context.state.result}</span>
        </h2>
      </div>
      <div className="button-wrapper">
        <button className="btn looserBtn" onClick={() => context.getlooser()}>
          Get Looser
        </button>
        <button className="btn" onClick={() => context.reset()}>
          Start Over
        </button>
      </div>
    </>
  );
};

export default Stage2;
