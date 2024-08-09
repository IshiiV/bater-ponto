import { TimerAsFC } from './Timer';

interface ChildProps {
  handleIntervaloInicio: () => void;
	handleIntervaloTermino: () => void;
	estado: number;
}

export const Intervalo: React.FC<ChildProps> = ({
  handleIntervaloInicio,
	handleIntervaloTermino,
	estado,
}) => {
	let content;


	if (estado === 1)
		content = <TimerAsFC handleTimer = {handleIntervaloInicio}> Começar intervalo </TimerAsFC>
	if (estado === 2)
		content = <TimerAsFC handleTimer = {handleIntervaloTermino}> Terminar intervalo </TimerAsFC>

  return (
		<div>
			{content}
		</div>
  );
};

export default Intervalo;
