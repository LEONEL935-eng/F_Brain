import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("")
  };

  const handleDelete = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      // Evaluer expression pour +, -, *, /, %
      const res = eval(expression);
      setResult(res);
      setExpression(res.toString()); // mettre le résultat dans l'expression pour enchaîner
    } catch (err) {
      setResult("Erreur");
    }
  };

  const handleScientific = (func) => {
    try {
      // Evaluer l'expression d'abord
      const val = eval(expression);
      let res = "";
      switch (func) {
        case "sin":
          res = Math.sin(val);
          break;
        case "cos":
          res = Math.cos(val);
          break;
        default:
          res = "Erreur";
      }
      setResult(res);
      setExpression(res.toString());
    } catch (err) {
      setResult("Erreur");
    }
  };

  return (
    <div className="App">
      <h1>Calculatrice Scientifique</h1>
      <div className="calculator">
        <input type="text" value={expression} readOnly />
        <div className="result">Résultat: {result}</div>
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={handleDelete}>⌫</button>
          <button onClick={() => handleClick("(")}>(</button>
          <button onClick={() => handleClick(")")}>)</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("%")}>%</button>

          <button onClick={() => handleScientific("sin")}>sin</button>
          <button onClick={() => handleScientific("cos")}>cos</button>
        </div>
      </div>
    </div>
  );
}

export default App;
