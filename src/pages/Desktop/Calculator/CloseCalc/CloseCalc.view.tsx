interface Props {
    onCloseCalc: () => void
}

export const CloseCalc = ({onCloseCalc}: Props) => {
    return (
        <button onClick={onCloseCalc} className='absolute top-0 left-[-40px] hover:bg-gray-600/20 transition-colors duration-200 w-[36px] h-[36px] cursor-pointer rounded-full'  >
            <span className='text-amber-50 flex justify-center items-center'>x</span>
        </button>
    )
}