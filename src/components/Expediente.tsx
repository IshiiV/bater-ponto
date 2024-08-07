import { TimerAsFC } from './Timer';

interface ChildProps {
  handleStart: () => void;
	handleFinish: () => void;
	showInicio: boolean;
	tempoExpediente: number;
}

export const Expediente: React.FC<ChildProps> = ({
  handleStart,
	handleFinish,
	showInicio,
	tempoExpediente
}) => {
	let content;
	let texto_expediente;

	if (tempoExpediente === 0)
		if (showInicio)
			content = <TimerAsFC handleTimer = {handleStart}>Começar expediente </TimerAsFC>
		else
			content = <TimerAsFC handleTimer = {handleFinish}> Terminar expediente </TimerAsFC>
	else
		texto_expediente = <div>Tempo do expediente foi {Math.floor(tempoExpediente/3600)} horas, {Math.floor(tempoExpediente/60)} minutos e {tempoExpediente%60} segundos</div>

  return (
		<div>
			{content}
			{texto_expediente}
		</div>
  );
};

export default Expediente;
