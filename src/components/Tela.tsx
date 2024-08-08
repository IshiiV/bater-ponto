interface ChildProps {
	showIntervalo: boolean;
	entrada: {
		hora: number,
		minuto: number,
		segundo: number,
	};
	intervalo: {
		hora: number,
		minuto: number,
		segundo: number,
	};
	tempoExpediente: number;
	tempoIntervalo: number;
}

export const Tela: React.FC<ChildProps> = ({
	showIntervalo,
	entrada,
	intervalo,
	tempoExpediente,
	tempoIntervalo
}) => {
	let content;
	let content_intervalo;
	let content_intervalo_resultado;


	if (tempoExpediente !== 0)
		content = <div>Tempo do expediente foi {Math.floor(tempoExpediente/3600)} horas, {Math.floor(tempoExpediente/60)} minutos e {tempoExpediente%60} segundos</div>;
		if(!showIntervalo){
			content_intervalo = <div>Início do intervalo: {intervalo.hora}:{intervalo.minuto}:{intervalo.segundo}</div>
			if(tempoIntervalo !== 0)
				if(tempoIntervalo <= 3600)
					content_intervalo_resultado = <div>Tempo do intervalo foi {Math.floor(tempoIntervalo/3600)} horas, {Math.floor(tempoIntervalo/60)} minutos e {tempoIntervalo%60} segundos</div>;
				else
					content_intervalo_resultado = <div>Tempo de intervalo superior do limite de 1 hora</div>
		}
	
  return (
		<div>
			<h1>Bater Ponto</h1>
			
			<div>Início do expediente: {entrada.hora}:{entrada.minuto}:{entrada.segundo}</div>
			{content}
			{content_intervalo}
			{content_intervalo_resultado}

		</div>
  );
};

export default Tela;
