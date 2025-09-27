import { CalcActionButton } from "../../../components/CalcActionButton";
import { useCalcActions } from "./Calculator.hooks"
import { CloseCalc } from "./CloseCalc";
import { Countdown } from "./Countdown/Countdown.view";
import { Display } from "./Display";
import { OperationButtons } from "./OperationButtons";
import { ResetButton } from "./ResetButton";
import { ValueSetter } from "./ValueSetter";

interface Props {
    onCloseCalc: () => void;
}

export const Calculator = ({onCloseCalc}: Props) => {
    const {display, valueSetter, showCountdown, timeIsOver, onSetResultHandler, setSignHandler, onClearHandler, resultHandler} = useCalcActions()
    return (
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/30 relative w-[300px] h-[500px] flex flex-col gap-2">
        <CloseCalc onCloseCalc={onCloseCalc} />
        <Countdown trigger={showCountdown} setShowCountdown={timeIsOver} />
        <Display {...display}/>
        <ValueSetter {...valueSetter} />
        <CalcActionButton title="Установить значение" onClick={onSetResultHandler} />
        <OperationButtons setSignHandler={setSignHandler}/>
        <CalcActionButton title="=" onClick={resultHandler} />
        <ResetButton onClearHandler={onClearHandler} />
      </div>
    )
}