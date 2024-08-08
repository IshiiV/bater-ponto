import Expediente from "./Expediente";
import Intervalo from "./Intervalo";
import Tela from "./Tela";
import dayjs from 'dayjs';
import { useState } from 'react';

const BaterPonto: React.FC = ()=>{
	const [showInicio, setShowInicio] = useState(true);
	const [showIntervalo, setShowIntervalo] = useState(true);
	const [tempoExpediente, setTempoExpediente] = useState(0);
	const [tempoIntervalo, setTempoIntervalo] = useState(0);
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
		setTempoExpediente((3600 * (parseInt(dayjs().format('H')) - entrada.hora)) +
											(60 * (parseInt(dayjs().format('m')) - entrada.minuto)) +
											(parseInt(dayjs().format('s')) - entrada.segundo));
		setShowInicio(!showInicio);
		console.log(parseInt(dayjs().format('s')) - entrada.segundo);
  };

	const handleIntervaloInicio = () => {
		setShowIntervalo(!showIntervalo);
		setIntervalo({
			...intervalo,
			hora: parseInt(dayjs().format('H')),
			minuto: parseInt(dayjs().format('m')),
			segundo: parseInt(dayjs().format('s')),
		});
  };

	const handleIntervaloTermino = () => {
		setTempoIntervalo((3600 * (parseInt(dayjs().format('H')) - intervalo.hora)) +
											(60 * (parseInt(dayjs().format('m')) - intervalo.minuto)) +
											(parseInt(dayjs().format('s')) - intervalo.segundo));
  };
	
  return (
		<div>
			<Tela showIntervalo = {showIntervalo} entrada = {entrada} intervalo = {intervalo} tempoExpediente = {tempoExpediente} tempoIntervalo = {tempoIntervalo}/>
			<Expediente handleStart = {handleStart} handleFinish = {handleFinish} showInicio = {showInicio} tempoExpediente = {tempoExpediente}/>
			<Intervalo handleIntervaloInicio = {handleIntervaloInicio} handleIntervaloTermino = {handleIntervaloTermino} showInicio = {showInicio} tempoIntervalo={tempoIntervalo} showIntervalo = {showIntervalo}/>
		</div>
  );
};

export default BaterPonto;