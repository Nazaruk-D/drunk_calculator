import { buttons } from "./Calculator.helpers";
import { useCalcActions } from "./Calculator.hooks"

interface Props {
    onCloseCalc: () => void;
}

export const Calculator = ({onCloseCalc}: Props) => {
    const {input, result, handleClick} = useCalcActions()
    
    return (
    // Крестик закрытия приложения
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/30 relative">
        <button onClick={onCloseCalc} className='absolute top-0 left-[-40px] hover:bg-gray-600/20 transition-colors duration-200 w-[36px] h-[36px] cursor-pointer rounded-full'  >
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