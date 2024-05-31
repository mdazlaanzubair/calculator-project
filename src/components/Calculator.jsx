// Calculator.js
import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("1000");
  const [num2, setNum2] = useState("100");
  const [num1Digits, setNum1Digits] = useState([]);
  const [num2Digits, setNum2Digits] = useState([]);
  const [answerDigits, setAnswerDigits] = useState([]);
  const [op, setOp] = useState("+");

  const equalizeArrays = (arr1, arr2, placeholder = "x") => {
    const maxLength = Math.max(arr1.length, arr2.length);

    while (arr1.length < maxLength) {
      arr1.unshift(placeholder);
    }

    while (arr2.length < maxLength) {
      arr2.unshift(placeholder);
    }

    return [arr1, arr2];
  };

  const calculate = (operator) => {
    // making array size equal
    const [arr1, arr2] = equalizeArrays(
      num1.toString().split(""),
      num2.toString().split("")
    );

    if (operator == "+") {
      setNum1Digits(arr1);
      setNum2Digits(arr2);

      const result = parseInt(num1) + parseInt(num2);
      const answersArr = result.toString().split("");
      setAnswerDigits(answersArr);
    }

    if (operator == "-") {
      setNum1Digits(arr1);
      setNum2Digits(arr2);

      const result = parseInt(num1) - parseInt(num2);
      const answersArr = result.toString().split("");
      setAnswerDigits(answersArr);
    }

    if (operator == "x") {
      setNum1Digits(arr1);
      setNum2Digits(arr2);

      const result = parseInt(num1) * parseInt(num2);
      const answersArr = result.toString().split("");
      setAnswerDigits(answersArr);
    }

    if (operator == "/") {
      setNum1Digits(arr1);
      setNum2Digits(arr2);

      const result = parseInt(num1) / parseInt(num2);
      const answersArr = result.toString().split("");
      setAnswerDigits(answersArr);
    }
  };

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">Simple Calculator</h1>
      <p className="text-lg font-semibold mb-4 text-center">
        {num1 + ` ${op} ` + num2 + " = " + ` ?`}
      </p>
      <div className="w-full flex justify-evenly gap-2">
        <input
          className="w-full border rounded p-3"
          min={1}
          type="number"
          value={num1}
          onChange={(e) => {
            setNum1(e.target.value);
            calculate(op);
          }}
        />
        <select
          value={op}
          className="w-full border rounded p-3"
          onChange={(e) => {
            setOp(e.target.value);
            calculate(e.target.value);
          }}
        >
          {["+", "-", "x", "/"]?.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <input
          className="w-full border rounded p-3"
          type="number"
          value={num2}
          min={1}
          onChange={(e) => {
            setNum2(e.target.value);
            calculate(op);
          }}
        />
        <button
          type="button"
          className="w-full border rounder p-3"
          onClick={() => calculate(op)}
        >
          Calculate
        </button>
      </div>
      <hr className="my-3" />
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Solution</h1>

        {num1Digits?.length > 0 &&
          num2Digits?.length > 0 &&
          answerDigits?.length > 0 && (
            <div className="w-full lg:w-1/2">
              <div className="flex gap-2 items-center justify-end">
                {num1Digits?.map((num, index) =>
                  isNaN(num) ? (
                    <div className="font-bold text-xl" key={index}></div>
                  ) : (
                    <div className="font-bold text-xl" key={index}>
                      {num}
                    </div>
                  )
                )}
              </div>
              <div
                className={`flex gap-2 items-center justify-end border-b ${
                  op == "-"
                    ? "text-red-600"
                    : op == "/"
                    ? "text-blue-600"
                    : op == "x"
                    ? "text-green-400"
                    : "text-green-800"
                }`}
              >
                {num2Digits?.map((num, index) =>
                  isNaN(num) ? (
                    <div className={`font-bold text-xl`} key={index}>
                      {op}
                    </div>
                  ) : (
                    <div className="font-bold text-xl" key={index}>
                      {num}
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-2 items-center justify-end border-b">
                {answerDigits?.map((num, index) => (
                  <div className="font-bold text-xl" key={index}>
                    {num}
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Calculator;
