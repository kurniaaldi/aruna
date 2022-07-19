import Input from "./component/input";
import React, { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "component/checkbox";

interface IInputValue {
  id: string;
  input: number | any;
  check: boolean;
}

function App() {
  const [values, setValues] = useState<IInputValue[]>([
    {
      id: "input1",
      input: "",
      check: false,
    },
    {
      id: "input2",
      input: "",
      check: false,
    },
    {
      id: "input3",
      input: "",
      check: false,
    },
  ]);
  const [total, setTotal] = useState<number | any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError("");
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [error]);

  const handleChangeInput = (event: any) => {
    const { name, value } = event.target;

    setValues((prev): any => {
      const newValue = prev.map((item: IInputValue) => {
        if (item.id === name) {
          return {
            ...item,
            input: parseFloat(value),
          };
        } else {
          return item;
        }
      });
      return newValue;
    });
  };

  const handleChangeCheck = (event: any) => {
    const { name, checked } = event.target;

    setValues((prev): any => {
      const newValue = prev.map((item: IInputValue) => {
        if (item.id === name) {
          return {
            ...item,
            check: checked,
          };
        } else {
          return item;
        }
      });
      return newValue;
    });
  };

  const handleCalculation = (operation: string) => {
    const findCheckedValue = values
      .filter((item: IInputValue) => item.check)
      .map((el: IInputValue) => el.input);

    if (findCheckedValue.length >= 2) {
      if (operation === "x") {
        setTotal(findCheckedValue.reduce((total, num) => total * num));
      } else if (operation === "/") {
        setTotal(findCheckedValue.reduce((total, num) => total / num));
      } else if (operation === "-") {
        setTotal(findCheckedValue.reduce((total, num) => total - num));
      } else {
        setTotal(findCheckedValue.reduce((total, num) => total + num));
      }
    } else {
      setError("can only perform calculations of at least 2 values");
    }
  };

  const disabledButton =
    values.filter((item: IInputValue) => item.check).length < 1;

  return (
    <div
      style={{
        textAlign: "start",
        maxWidth: 1060,
        minHeight: "100vh",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "1px solid lightgray",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "30rem",
          minHeight: "30rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
            width: "100%",
            height: "100%",
          }}
        >
          {error && (
            <div
              style={{
                border: "1px solid red",
                background: "red",
                color: "white",
                padding: 10,
                textAlign: "center",
                width: "100%",
                borderRadius: 4,
              }}
            >
              {error}
            </div>
          )}
          {values.map((item: IInputValue, index: number) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                <Input
                  name={item.id}
                  value={item.input}
                  onChange={handleChangeInput}
                />
                <Checkbox
                  disabled={!item.input}
                  name={item.id}
                  onChange={handleChangeCheck}
                  checked={item.check}
                />
              </div>
            );
          })}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <button
              disabled={disabledButton}
              onClick={() => handleCalculation("+")}
            >
              +
            </button>
            <button
              disabled={disabledButton}
              onClick={() => handleCalculation("-")}
            >
              -
            </button>
            <button
              disabled={disabledButton}
              onClick={() => handleCalculation("x")}
            >
              x
            </button>
            <button
              disabled={disabledButton}
              onClick={() => handleCalculation("/")}
            >
              /
            </button>
          </div>
          <hr style={{ width: "100%" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12,1fr)",
              alignSelf: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <h4 style={{ gridColumn: "span 6" }}>Hasil:</h4>
            <h4 style={{ gridColumn: "span 6" }}>{total}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
