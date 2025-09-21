import { useCalcActions } from "./Calculator.hooks"

interface Props {
    onCloseCalc: () => void;
}

export const Calculator = ({onCloseCalc}: Props) => {
    const {sign, input, input2, choseNumber, result, onSetResultHandler, setSignHandler, setValueHandler, onClearHandler} = useCalcActions()
    // const sign = input2 < 0 ? '-' : '+'
    return (
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/30 relative w-[300px] h-[500px]">
        <button onClick={onCloseCalc} className='absolute top-0 left-[-40px] hover:bg-gray-600/20 transition-colors duration-200 w-[36px] h-[36px] cursor-pointer rounded-full'  >
          <span className='text-amber-50 flex justify-center items-center'>x</span>
        </button>

        <div className="bg-black/20 rounded-xl p-4 mb-4 text-right space-y-2">
          <div className="text-white/70 text-sm min-h-[20px]">{input} {sign} {input2}</div>
          <div className="text-white text-3xl font-semibold truncate">{result}</div>
        </div>

        <div>
        <div className="mb-6">
          <div className="flex items-center justify-between bg-black/30 rounded-xl p-3 border border-white/20">
            <button 
              onMouseDown={() => setValueHandler("-")}
              className="w-10 h-10 cursor-pointer bg-red-500/80 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-lg font-bold active:scale-95"
            >
              -
            </button>
            
            <div className="flex-1 mx-4">
              <input 
                type="text"
                value={choseNumber}
                readOnly
                className="w-full text-3xl font-mono text-center bg-transparent border-none outline-none text-white placeholder-white/50 [appearance:textfield] cursor-default"
                onFocus={(e) => e.target.blur()}
                placeholder="0"
              />
              <div className="text-xs text-white/50 text-center mt-1">
                Используйте кнопки ± для изменения
              </div>
            </div>
            
            <button 
              onMouseDown={() => setValueHandler("+")}
              className="w-10 h-10 cursor-pointer bg-green-500/80 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors text-lg font-bold active:scale-95"
            >
              +
            </button>
          </div>
        </div>
        </div>
        
        <button onClick={onSetResultHandler} className="w-full text-white bg-black/20 hover:bg-black/30 rounded-xl p-4 mb-4 cursor-pointer">Установить значение</button>
        <button onClick={onClearHandler} className="w-full text-white bg-black/20 hover:bg-black/30 rounded-xl p-4 mb-4 cursor-pointer">Сбросить значения</button>
      
            {/* Ряд кнопок с операциями + - / * */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button 
            onClick={() => setSignHandler("+")}
            className="bg-black/20 hover:bg-black/30 text-white p-3 rounded-lg font-bold transition-colors active:scale-95 cursor-pointer"
          >
            +
          </button>
          <button 
            onClick={() => setSignHandler("-")}
            className="bg-black/20 hover:bg-black/30 text-white p-3 rounded-lg font-bold transition-colors active:scale-95 cursor-pointer"
          >
            -
          </button>
          <button 
            onClick={() => setSignHandler("/")}
            className="bg-black/20 hover:bg-black/30 text-white p-3 rounded-lg font-bold transition-colors active:scale-95 cursor-pointer"
          >
            /
          </button>
          <button 
            onClick={() => setSignHandler("*")}
            className="bg-black/20 hover:bg-black/30 text-white p-3 rounded-lg font-bold transition-colors active:scale-95 cursor-pointer"
          >
            ×
          </button>
        </div>
      </div>
    )
}