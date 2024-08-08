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

	if (tempoExpediente === 0)
		if (showInicio)
			content = <TimerAsFC handleTimer = {handleStart}>Começar expediente </TimerAsFC>
		else
			content = <TimerAsFC handleTimer = {handleFinish}> Terminar expediente </TimerAsFC>
			
  return (
		<div>
			{content}
		</div>
  );
};

export default Expediente;
