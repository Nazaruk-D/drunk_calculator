import { useState } from "react";

export type Sign = "+" | "-" | "*" | "/";

export const useCalcActions = () => {
	const [choseNumber, setChoseNumber] = useState("0");
	const [showCountdown, setShowCountdown] = useState(false);
	const [input, setInput] = useState("0");
	const [input2, setInput2] = useState<string | null>(null);
	const [sign, setSign] = useState<Sign | null>(null);
	const [result, setResult] = useState("0");

	const setValueHandler = (value: "+" | "-") => {
		if (value === "+") {
			setChoseNumber((prev) => String(Number(prev) + 1));
			return;
		}

		setChoseNumber((prev) => String(Number(prev) - 1));
	};

	const onSetResultHandler = () => {
		if (sign && choseNumber) {
			setInput2(choseNumber);
			setChoseNumber("0");

			return;
		}
		setInput(choseNumber);
		setChoseNumber("0");
	};

	const setSignHandler = (value: Sign) => {
		setSign(value);
	};

	const onClearHandler = () => {
		setInput("0");
		setInput2(null);
		setChoseNumber("0");
		setSign(null);
		setResult("0");
	};

	const resultHandler = () => {
		if (!sign || !input2) {
			setResult(choseNumber !== "0" ? choseNumber : input);
			return;
		}

		const num1 = parseFloat(input);
		const num2 = parseFloat(input2);
		let calculationResult: number;

		switch (sign) {
			case "+":
				calculationResult = num1 + num2;
				break;
			case "-":
				calculationResult = num1 - num2;
				break;
			case "*":
				calculationResult = num1 * num2;
				break;
			case "/":
				if (num2 === 0) {
					setResult("Error");
					return;
				}
				calculationResult = num1 / num2;
				break;
			default:
				calculationResult = num1;
		}

		// Округляем результат до 10 знаков после запятой, чтобы избежать бесконечных дробей
		const roundedResult =
			Math.round(calculationResult * 10000000000) / 10000000000;

		// Преобразуем в строку и убираем лишние нули после запятой
		const resultString = roundedResult.toString();
		setResult(
			resultString.includes(".")
				? resultString.replace(/\.?0+$/, "")
				: resultString,
		);

		// Сбрасываем состояние
		setInput(resultString);
		setInput2(null);
		setSign(null);
		setChoseNumber("0");
		setShowCountdown(true);
		setInput("0");
	};

	const timeIsOver = () => {
		setResult("0");
		setShowCountdown(false);
	};

	return {
		display: { sign, input, input2, result },
		valueSetter: { choseNumber, setValueHandler },
		timeIsOver,
		showCountdown,
		choseNumber,
		onSetResultHandler,
		setSignHandler,
		onClearHandler,
		resultHandler,
	};
};
