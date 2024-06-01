// Calculator.js
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("1000");
  const [num2, setNum2] = useState("100");
  const [num1Digits, setNum1Digits] = useState([]);
  const [num2Digits, setNum2Digits] = useState([]);
  const [multiCalculation, setMultiCalculation] = useState([]);
  const [answerDigits, setAnswerDigits] = useState([]);
  const [op, setOp] = useState("+");

  const calculate = (operator) => {
    setNum1Digits(num1.toString().split(""));
    setNum2Digits(num2.toString().split(""));

    if (operator == "+") {
      const result = parseInt(num1) + parseInt(num2);
      const answersArr = result.toString().split("");
      setAnswerDigits(answersArr);
    }

    if (operator == "-") {
      const result = parseInt(num1) - parseInt(num2);
      const answersArr = result.toString().split("");
      setAnswerDigits(answersArr);
    }

    if (operator == "x") {
      const result = [];
      num2Digits.reverse().forEach((element, index) => {
        const row = num1Digits?.map((item) => item * element);

        // ADDING "X" AT THE END OF ROW BASED ON INDEX
        const xElements = Array(index)
          .fill()
          .map((_) => "X");
        result.push([...row, ...xElements]);
      });

      const reversedResult = [...result]; // Create a new array with the spread operator and reverse it

      setMultiCalculation(reversedResult);
      const result2 = parseInt(num1) * parseInt(num2);
      const answersArr = result2.toString().split("");
      setAnswerDigits(answersArr);
    }

    if (operator == "/") {
      const result = parseInt(num1) / parseInt(num2);
      const answersArr = result.toString().split("");
      setAnswerDigits(answersArr);
    }
  };

  useEffect(() => calculate(op), []);

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
          answerDigits?.length > 0 &&
          op !== "x" && (
            <div className="w-full">
              <div className="flex gap-2 items-center justify-end">
                {num1Digits?.map((num, index) => (
                  <div className="font-bold text-xl" key={index}>
                    {num}
                  </div>
                ))}
              </div>
              <div
                className={`flex gap-2 items-center justify-end border-b ${
                  op == "-"
                    ? "text-red-600"
                    : op == "/"
                    ? "text-orange-400"
                    : "text-green-400"
                }`}
              >
                <div className={`font-bold text-xl`}>{op}</div>
                {num2Digits?.map((num, index) => (
                  <div className="font-bold text-xl" key={index}>
                    {num}
                  </div>
                ))}
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

        {num1Digits?.length > 0 &&
          num2Digits?.length > 0 &&
          answerDigits?.length > 0 &&
          op == "x" && (
            <div className="w-full">
              <div className="flex gap-2 items-center justify-end">
                {num1Digits?.map((num, index) => (
                  <div className="font-bold text-xl" key={index}>
                    {num}
                  </div>
                ))}
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
                <div className={`font-bold text-xl`}>{op}</div>
                {num2Digits?.map((num, index) => (
                  <div className="font-bold text-xl" key={index}>
                    {num}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-end border-b text-slate-400">
                {multiCalculation?.map((row, index) => (
                  <div
                    className="flex gap-2 items-center justify-end"
                    key={index}
                  >
                    {row?.map((num, rowIndex) =>
                      num == "X" ? (
                        <div
                          className="font-bold text-xl text-red-950"
                          key={rowIndex}
                        >
                          {num}
                        </div>
                      ) : (
                        <div className="font-bold text-xl" key={rowIndex}>
                          {num}
                        </div>
                      )
                    )}
                  </div>
                ))}
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
