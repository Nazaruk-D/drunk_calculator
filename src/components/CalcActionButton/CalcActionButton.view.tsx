interface Props {
	title: string;
	onClick: () => void;
}

export const CalcActionButton = ({ title, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className="bg-black/20 hover:bg-black/30 text-white p-3 rounded-lg transition-colors active:scale-95 cursor-pointer"
		>
			{title}
		</button>
	);
};
