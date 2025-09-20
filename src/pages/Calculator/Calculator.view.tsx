import { useCalcActions } from './Calculator.hooks';
import { buttons } from './Calculator.helpers';
import { useState } from 'react';
import CalcIcon from '../../assets/calculator.svg?react'

export const Calculator = () => {
    const {input, result, handleClick} = useCalcActions()
    const [isOpenCalc, setIsOpenCalc] = useState(true)
    const [isSelected, setIsSelected] = useState(false)
    
    const onClickCalcIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (!isSelected) {
        return setIsSelected(true)
      }
      setIsOpenCalc(true) 
    }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" onClick={() => setIsSelected(false)}>
      {/* Ярлык для открытия калькулятора */}
      {
        !isOpenCalc && (
          <button 
            className={`flex flex-col items-center space-y-2 cursor-pointer calc-icon-container p-2 rounded-lg transition-colors duration-200 ${
              isSelected ? 'bg-gray-400/30 backdrop-blur-sm' : 'bg-transparent'
            }`}
            onClick={onClickCalcIcon}
          >
            <CalcIcon className="w-6 h-6 text-gray-200" />
            <span className="text-sm text-gray-200">Калькулятор</span>
          </button>
        )
      }

      {/* OpenCalc */}
      { isOpenCalc && (
        // Крестик закрытия приложения
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/30 relative">
      <button className='absolute top-0 left-[-40px] hover:bg-gray-600/20 transition-colors duration-200 w-[36px] h-[36px] cursor-pointer rounded-full' onClick={() => setIsOpenCalc(false)} >
        <span className='text-amber-50 flex justify-center items-center'>x</span>
      </button>

        <div className="bg-black/20 rounded-xl p-4 mb-4 text-right space-y-2">
          <div className="text-white/70 text-sm min-h-[20px]">{input}</div>
          <div className="text-white text-3xl font-semibold truncate">{result}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`p-4 rounded-xl text-lg font-semibold transition-all duration-200 active:scale-95
                ${btn === '=' ? 'col-span-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white' :
                  btn === 'C' || btn === '←' || btn === '%' ? 'bg-rose-100 text-rose-600' :
                  isNaN(+btn) ? 'bg-blue-100 text-blue-600' :
                  'bg-white/90 text-gray-800 hover:bg-white'
                } shadow-md hover:shadow-lg backdrop-blur-sm`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
        )
      }
     
    </div>
  );
};
