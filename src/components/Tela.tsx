import SlotTime from "./SlotTime";
import SlotIntervalo from "./SlotIntervalo";

interface ChildProps {
	estado: number;
	expedienteEntrada: any;
	expedienteSaida: any;
	intervaloEntrada: any;
	intervaloSaida: any;
}

export const Tela: React.FC<ChildProps> = ({
	estado,
	expedienteEntrada,
	expedienteSaida,
	intervaloEntrada,
	intervaloSaida,
}) => {
	let content_expediente_inicio;
	let content_expediente_final;
	let content_intervalo;

	switch(estado) {
		case 1:
			content_expediente_inicio =	<SlotTime horario = {expedienteEntrada}>Entrada</SlotTime>;
		break;
		case 2:
			content_expediente_inicio =	<SlotTime horario = {expedienteEntrada}>Entrada</SlotTime>;
			content_intervalo = <SlotTime horario = {intervaloEntrada}>Início do intervalo</SlotTime>;
		break;
		case 3:
			content_expediente_inicio =	<SlotTime horario = {expedienteEntrada}>Entrada</SlotTime>;
			content_intervalo = <SlotIntervalo horario_entrada = {intervaloEntrada} horario_saida = {intervaloSaida}>Intervalo</SlotIntervalo>;
		break;
		case 4:
			content_expediente_inicio =	<SlotTime horario = {expedienteEntrada}>Entrada</SlotTime>;
			content_expediente_final = <SlotTime horario = {expedienteSaida}>Saída</SlotTime>;
			content_intervalo = <SlotIntervalo horario_entrada = {intervaloEntrada} horario_saida = {intervaloSaida}>Intervalo</SlotIntervalo>;
		break;
		case 5:
			content_expediente_inicio =	<SlotTime horario = {expedienteEntrada}>Entrada</SlotTime>;
			content_expediente_final = <SlotTime horario = {expedienteSaida}>Saída</SlotTime>;
		break;
		default:
	}

  return (
		<div className="container mx-auto py-5 by-5">
			<h1 className="font-bold text-center text-5xl	pb-5 bb-5">Bater Ponto</h1>
			<div className="text-4xl text-center  my-5">
				{content_expediente_inicio}
				{content_intervalo}
				{content_expediente_final}
			</div>
		</div>
  );
};

export default Tela;
