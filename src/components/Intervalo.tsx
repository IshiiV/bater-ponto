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
	let texto_intervalo;
	let content;

	if (!showInicio) {
		if(tempoIntervalo === 0){
			texto_intervalo = <div>Intervalo</div>
			if (showIntervalo )
				content = <TimerAsFC handleTimer = {handleIntervaloInicio}> Começar intervalo </TimerAsFC>
			else
				content = <TimerAsFC handleTimer = {handleIntervaloTermino}> Terminar intervalo </TimerAsFC>}
		else
			if(tempoIntervalo <= 3600)
				texto_intervalo = <div>Tempo do intervalo foi {Math.floor(tempoIntervalo/60)} minutos e {tempoIntervalo%60} segundos</div>
			else
				texto_intervalo = <div>Excedeu o tempo permitido de intervalo</div>
	}	


  return (
		<div>
			{texto_intervalo}
			{content}
		</div>
  );
};

export default Intervalo;
