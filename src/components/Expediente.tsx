import { TimerAsFC } from './Timer';

interface ChildProps {
  handleStart: () => void;
	handleFinish: () => void;
	estado: number;
}

export const Expediente: React.FC<ChildProps> = ({
  handleStart,
	handleFinish,
	estado,
}) => {
	let content;


		if (estado === 0)
			content = <TimerAsFC handleTimer = {handleStart}>Começar expediente </TimerAsFC>
		if (estado === 1 || estado === 3)
			content = <TimerAsFC handleTimer = {handleFinish}> Terminar expediente </TimerAsFC>

			
  return (
		<div>
			{content}
		</div>
  );
};

export default Expediente;
