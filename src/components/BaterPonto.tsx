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
	const [intervalo, setIntervalo] = useState(false);

	const handleStart = () => {
		setEstado(1);
		setExpedienteEntrada(dayjs());
  };

	const handleFinish = () => {
		setExpedienteSaida(dayjs());
		setEstado(4);
		if (!intervalo)
			setEstado(5);
  };

	const handleIntervaloInicio = () => {
		setIntervaloEntrada(dayjs());
		setEstado(2);
		setIntervalo(true);
  };

	const handleIntervaloTermino = () => {
		setIntervaloSaida(dayjs());
		setEstado(3);
  };

  return (
		<div>
			<Tela estado = {estado} expedienteEntrada = {expedienteEntrada} expedienteSaida = {expedienteSaida} intervaloEntrada = {intervaloEntrada} intervaloSaida = {intervaloSaida}/>
			<Expediente handleStart = {handleStart} handleFinish = {handleFinish} estado = {estado}/>
			<Intervalo handleIntervaloInicio = {handleIntervaloInicio} handleIntervaloTermino = {handleIntervaloTermino} estado = {estado}/> 
		</div>
  );
};

export default BaterPonto;