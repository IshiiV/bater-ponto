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
	let content_intervalo_inicio;
	let content_intervalo_final;

	switch(estado) {
		case 1:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.hour()}:{expedienteEntrada.minute()}:{expedienteEntrada.second()}</div>
		break;
		case 2:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.hour()}:{expedienteEntrada.minute()}:{expedienteEntrada.second()}</div>
			content_intervalo_inicio = <div>Início do Intervalo: {intervaloEntrada.hour()}:{intervaloEntrada.minute()}:{intervaloEntrada.second()}</div>
		break;
		case 3:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.hour()}:{expedienteEntrada.minute()}:{expedienteEntrada.second()}</div>
			content_intervalo_inicio = <div>Início do Intervalo: {intervaloEntrada.hour()}:{intervaloEntrada.minute()}:{intervaloEntrada.second()}</div>
			content_intervalo_final = <div>Início do Intervalo: {intervaloSaida.hour()}:{intervaloSaida.minute()}:{intervaloEntrada.second()}</div>
		break;
		case 4:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.hour()}:{expedienteEntrada.minute()}:{expedienteEntrada.second()}</div>
			content_expediente_final = <div>Fim do Expediente: {expedienteSaida.hour()}:{expedienteSaida.minute()}:{expedienteSaida.second()}</div>
			content_intervalo_inicio = <div>Início do Intervalo: {intervaloEntrada.hour()}:{intervaloEntrada.minute()}:{intervaloEntrada.second()}</div>
			content_intervalo_final = <div>Início do Intervalo: {intervaloSaida.hour()}:{intervaloSaida.minute()}:{intervaloEntrada.second()}</div>
		break;
		case 5:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.hour()}:{expedienteEntrada.minute()}:{expedienteEntrada.second()}</div>
			content_expediente_final = <div>Fim do Expediente: {expedienteSaida.hour()}:{expedienteSaida.minute()}:{expedienteSaida.second()}</div>
		break;
		default:
	}

  return (
		<div>
			<h1>Bater Ponto</h1>		
			{content_expediente_inicio}
			{content_expediente_final}
			{content_intervalo_inicio}
			{content_intervalo_final}
		</div>
  );
};

export default Tela;
