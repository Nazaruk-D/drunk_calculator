import { useState } from 'react';
import { OpenCalculatorLabel } from './OpenCalculatorLabel';
import { Calculator } from './Calculator';

export const Desktop = () => {
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
      {!isOpenCalc && <OpenCalculatorLabel isSelected={isSelected} onClickCalcIcon={onClickCalcIcon} />}
      {isOpenCalc && <Calculator onCloseCalc={() => setIsOpenCalc(false)} /> }
     
    </div>
  );
};
