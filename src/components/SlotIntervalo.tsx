interface ChildProps {
	horario_entrada: any;
	horario_saida: any;
	children?: React.ReactNode;
}

export const SlotIntervalo: React.FC<ChildProps> = ({
	horario_entrada,
	horario_saida,
	children,
}) => {
	let content;

	// if (horario_saida.diff(horario_entrada, 'seconds') >= 3600) 
	if (horario_saida.diff(horario_entrada, 'seconds') >= 5) 
		content = <p className="text-center flex-auto rounded border-red-500 bg-red-500 text-black px-3 py-1.5 border">Excedeu o limite de 1 hora de intervalo</p>
	else
		content = 
		(<>
			<p className="font-semibold">{children}</p>
			{/* <p>{horario_saida.diff(horario_entrada, 'minutes')} min</p> */}
			<p>{horario_saida.diff(horario_entrada, 'seconds')} sec</p>
		</>);
	return (
		<div>
			{content}
		</div>
	);
};

export default SlotIntervalo