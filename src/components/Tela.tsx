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
	let aviso;

	switch(estado) {
		case 1:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.format('HH:mm:ss')}</div>
		break;
		case 2:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.format('HH:mm:ss')}</div>
			content_intervalo_inicio = <div>Início do Intervalo: {intervaloEntrada.format('HH:mm:ss')}</div>
		break;
		case 3:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.format('HH:mm:ss')}</div>
			content_intervalo_inicio = <div>Início do Intervalo: {intervaloEntrada.format('HH:mm:ss')}</div>
			content_intervalo_final = <div>Fim do Intervalo: {intervaloSaida.format('HH:mm:ss')}</div>
		break;
		case 4:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.format('HH:mm:ss')}</div>
			content_expediente_final = <div>Fim do Expediente: {expedienteSaida.format('HH:mm:ss')}</div>
			content_intervalo_inicio = <div>Início do Intervalo: {intervaloEntrada.format('HH:mm:ss')}</div>
			content_intervalo_final = <div>Fim do Intervalo: {intervaloSaida.format('HH:mm:ss')}</div>
		break;
		case 5:
			content_expediente_inicio = <div>Início do Expediente: {expedienteEntrada.format('HH:mm:ss')}</div>
			content_expediente_final = <div>Fim do Expediente: {expedienteSaida.format('HH:mm:ss')}</div>
		break;
		default:
	}

	//if (intervaloSaida.diff(intervaloEntrada, 'seconds') > 3600 && (estado === 3 || estado === 4))
	if (intervaloSaida.diff(intervaloEntrada, 'seconds') >= 5 && (estado === 3 || estado === 4))
		aviso = <div className="text-center flex-auto rounded border-red-500 bg-red-500 text-black px-3 py-1.5 border">Excedeu o limite do tempo do intervalo</div>

  return (
		<div className="container mx-auto py-5 by-5">
			<h1 className="font-bold text-center text-5xl	pb-5 bb-5">Bater Ponto</h1>
			<div className="text-4xl text-center  my-5">
				{content_expediente_inicio}
				{content_expediente_final}
			</div>
			<div className="text-4xl text-center  my-5">
				{content_intervalo_inicio}
				{content_intervalo_final}
				{aviso}
			</div>
		</div>
  );
};

export default Tela;
