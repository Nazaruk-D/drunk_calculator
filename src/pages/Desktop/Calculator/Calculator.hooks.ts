import { useState } from "react";

export const useCalcActions = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');

    const handleClick = (value: string) => {
        if (value === '=') {
        try {
            setResult(eval(input).toString());
            setInput('');
        } catch {
            setResult('Error');
        }
        } else if (value === 'C') {
        setInput('');
        setResult('0');
        } else if (value === '←') {
        setInput(input.slice(0, -1));
        } else {
        setInput(input + value);
        }
    };

    return {input, result, handleClick} 
  }
  
