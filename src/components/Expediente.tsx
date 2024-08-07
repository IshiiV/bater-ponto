import dayjs from 'dayjs';
import { useState } from 'react';
import { TimerAsFC } from './Timer';

const Expediente: React.FC = () => {
	const [showInicio, setShowInicio] = useState(true);
	const [showIntervalo, setShowIntervalo] = useState(true);
	const [entrada, setEntrada] = useState({
		hora: 0,
		minuto: 0,
		segundo: 0,
	});
	const [intervalo, setIntervalo] = useState({
		hora: 0,
		minuto: 0,
		segundo: 0,
	});
	let content;
	let content_almoco;

	const resetar = () => {
		setEntrada({
			...entrada,
			hora: 0,
			minuto: 0,
			segundo: 0,
		});
		setIntervalo({
			...entrada,
			hora: 0,
			minuto: 0,
			segundo: 0,
		});
		setShowInicio(true);
		setShowIntervalo(true);
		console.clear() 
	};

	const valores = () => {
		console.log(entrada);
		console.log(intervalo);
	};


	const handleStart = () => {
		setShowInicio(!showInicio);
		setEntrada({
			...entrada,
			hora: parseInt(dayjs().format('H')),
			minuto: parseInt(dayjs().format('m')),
			segundo: parseInt(dayjs().format('s')),
		});
  };

	const handleFinish = () => {
		setShowInicio(!showInicio);
		console.log(parseInt(dayjs().format('s')) - entrada.segundo);
		// console.log(parseInt(dayjs().format('m')) - entrada.minuto);
  };

	const handleIntervalo = () => {
		setShowIntervalo(!showIntervalo);
		setIntervalo({
			...intervalo,
			hora: parseInt(dayjs().format('H')),
			minuto: parseInt(dayjs().format('m')),
			segundo: parseInt(dayjs().format('s')),
		});
  };

	const handleTermino = () => {
		setShowIntervalo(!showIntervalo);
		console.log(parseInt(dayjs().format('s')) - intervalo.segundo);
		// console.log(parseInt(dayjs().format('m')) - intervalo.minuto);
  };

	if (showInicio)
		content = <TimerAsFC handleTimer = {handleStart}>Começar expediente </TimerAsFC>
	else
		content = <TimerAsFC handleTimer = {handleFinish}> Terminar expediente </TimerAsFC>

	if (!showInicio) {
		if (showIntervalo)
			content_almoco = <TimerAsFC handleTimer = {handleIntervalo}> Começar intervalo </TimerAsFC>
		else
			content_almoco = <TimerAsFC handleTimer = {handleTermino}> Terminar intervalo </TimerAsFC>
	}	

  return (
		<div>
			<button onClick={resetar}>Reset</button>
			<button onClick={valores}>Ver valores</button>
			{content}
			{content_almoco}
		</div>
  );
};

export default Expediente;
