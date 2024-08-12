interface ChildProps {
	horario: any;
	children?: React.ReactNode;
}

export const SlotTime: React.FC<ChildProps> = ({
	horario,
	children,
}) => {
	return (
		<div>
			<p className="font-semibold">{children}</p>
			<p>{horario.format('HH:mm:ss')}</p>
		</div>
	);
};

export default SlotTime