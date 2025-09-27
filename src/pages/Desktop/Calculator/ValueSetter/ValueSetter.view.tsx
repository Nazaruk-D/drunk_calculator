interface Props {
	setValueHandler: (value: "+" | "-") => void;
	choseNumber: string;
}

export const ValueSetter = ({ choseNumber, setValueHandler }: Props) => {
	return (
		<div className="flex items-center justify-between bg-black/20 rounded-xl p-3 border border-white/20">
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
	);
};
