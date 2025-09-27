import { CalcActionButton } from "../../../../components/CalcActionButton"
import type { Sign } from "../Calculator.hooks"

interface Props {
    setSignHandler: (value: Sign) => void
}

export const OperationButtons = ({setSignHandler}: Props) => {
    return (
        <div className="grid grid-cols-4 gap-2">
          <CalcActionButton title="+" onClick={() => setSignHandler("+")}/>
          <CalcActionButton title="-" onClick={() => setSignHandler("-")}/>
          <CalcActionButton title="/" onClick={() => setSignHandler("/")}/>
          <CalcActionButton title="*" onClick={() => setSignHandler("*")}/>
        </div>
    )
}