import { TimerAsFC } from './Timer';

interface ChildProps {
  handleIntervaloInicio: () => void;
	handleIntervaloTermino: () => void;
	showInicio: boolean;
	showIntervalo: boolean;
	tempoIntervalo: number;
	
}

export const Intervalo: React.FC<ChildProps> = ({
  handleIntervaloInicio,
	handleIntervaloTermino,
	showInicio,
	showIntervalo,
	tempoIntervalo
}) => {
	let content;

	if (!showInicio) {
		if(tempoIntervalo === 0){
			if (showIntervalo )
				content = <TimerAsFC handleTimer = {handleIntervaloInicio}> Começar intervalo </TimerAsFC>
			else
				content = <TimerAsFC handleTimer = {handleIntervaloTermino}> Terminar intervalo </TimerAsFC>}
	}	


  return (
		<div>
			{content}
		</div>
  );
};

export default Intervalo;
