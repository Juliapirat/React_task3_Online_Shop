import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop";

function App() {
  const [log, setLog] = useState(true);
  function HandleOnLogin() {
    setLog(!log);
  }
  const login = (
    <div className="ui-container">
      <h2 className="ui-title">Нужно залогиниться!</h2>
      <button className="ui-button" onClick={HandleOnLogin}>
        Войти
      </button>
    </div>
  );
  const logout = (
    <div className="ui-container">
      <Shop />
      <button className="ui-button" onClick={HandleOnLogin}>
        Выйти
      </button>
    </div>
  );
  return log ? login : logout;
}

render(<App />, document.querySelector("#root"));
