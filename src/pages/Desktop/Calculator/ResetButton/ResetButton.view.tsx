interface Props {
    onClearHandler: () => void 
}

export const ResetButton = ({onClearHandler}: Props) => {
    return <button onClick={onClearHandler} className="w-full text-white bg-red-500/80 hover:bg-red-600 rounded-xl p-4 cursor-pointer">Сбросить значения</button>

}