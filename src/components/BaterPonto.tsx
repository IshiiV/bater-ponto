import Expediente from "./Expediente";
import Intervalo from "./Intervalo";
import Tela from "./Tela";
import dayjs from 'dayjs';
import { useState } from 'react';

const BaterPonto: React.FC = ()=>{
	const [expedienteEntrada, setExpedienteEntrada] = useState(dayjs());
	const [expedienteSaida, setExpedienteSaida] = useState(dayjs());
	const [intervaloEntrada, setIntervaloEntrada] = useState(dayjs());
	const [intervaloSaida, setIntervaloSaida] = useState(dayjs());
	const [estado, setEstado] = useState(0);

	const handleStart = () => {
		setEstado(1);
		setExpedienteEntrada(dayjs());
  };

	const handleFinish = () => {
		setExpedienteSaida(dayjs());
		if (estado === 1)
			setEstado(5);
		else 
			setEstado(4);
  };

	const handleIntervaloInicio = () => {
		setIntervaloEntrada(dayjs());
		setEstado(2);
  };

	const handleIntervaloTermino = () => {
		setIntervaloSaida(dayjs());
		setEstado(3);
	//	if (intervaloSaida.diff(intervaloEntrada, 'seconds') !== 0)
	}
  return (
		<div>
			<Tela estado = {estado} expedienteEntrada = {expedienteEntrada} expedienteSaida = {expedienteSaida} intervaloEntrada = {intervaloEntrada} intervaloSaida = {intervaloSaida}/>
			<Expediente handleStart = {handleStart} handleFinish = {handleFinish} estado = {estado}/>
			<Intervalo handleIntervaloInicio = {handleIntervaloInicio} handleIntervaloTermino = {handleIntervaloTermino} estado = {estado}/> 
		</div>
  );
};

export default BaterPonto;