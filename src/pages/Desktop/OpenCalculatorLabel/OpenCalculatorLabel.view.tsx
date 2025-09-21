import CalcIcon from '../../../assets/calculator.svg?react'

interface Props {
    isSelected: boolean;
    onClickCalcIcon: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const OpenCalculatorLabel = ({isSelected, onClickCalcIcon}: Props) => {
    return (
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