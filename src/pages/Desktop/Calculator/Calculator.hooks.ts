import { useState } from "react";

export const useCalcActions = () => {
    const [choseNumber, setChoseNumber] = useState('0');
    const [input, setInput] = useState('0');
    const [input2, setInput2] = useState<string | null>(null);
    const [sign, setSign] = useState<'+' | '-' | '*' | '/' | null>(null);
    const [result, setResult] = useState('0');

    const setValueHandler = (value: "+" | "-") => {
        if (value === "+") {
            setChoseNumber(prev => String(Number(prev) + 1))
            return
        }

         setChoseNumber(prev => String(Number(prev) - 1))
    };

    const onSetResultHandler = () => {
        if (sign && choseNumber) {
            setInput2(choseNumber)
            setChoseNumber('0')

            return
        }
        setInput(choseNumber)
        setChoseNumber('0')
    }

    const setSignHandler = (value: '+' | '-' | '*' | '/') => {
       setSign(value)
    };

    const onClearHandler = () => {
        setInput('0')
        setInput2(null)
        setChoseNumber('0')
        setSign(null)
        setResult('0')
    }

    return {sign, input2, input, result, choseNumber, onSetResultHandler, setValueHandler, setSignHandler, setResult, onClearHandler} 
  }
  
