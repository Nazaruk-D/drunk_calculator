import type { Sign } from "../Calculator.hooks";

interface Props {
    input: string;
    input2: string | null;
    sign: Sign | null;
    result: string;
}

export const Display = ({input, input2, result, sign}: Props) => {    
    return (
        <div className="bg-black/30 rounded-xl p-4 text-right space-y-2">
          <div className="text-white/70 text-sm min-h-[20px]">{input} {sign} {input2}</div>
          <div className="text-white text-3xl font-semibold truncate">{result}</div>
        </div>
    )
}