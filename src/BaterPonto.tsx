import dayjs from "dayjs";
import Expediente from "./components/Expediente";
import { useState } from 'react';

const BaterPonto: React.FC = ()=>{
	const [intervalo, setIntervalo] = useState({});

	// // const fromtime = '11:20'
	// const totime = '12:30'
	// const teste = dayjs();
	
	// const ft = dayjs(`2000-01-01 11:20`);
	// const tt = dayjs(`2000-01-01 ${totime}`);
	// const mins = tt.diff(ft, "minutes", true);
	// // const totalHours = parseInt(mins / 60);
	// // const totalMins = dayjs().minute(mins).$m
	// console.log(mins);
	// console.log(teste);
	// // console.log(totalMins);
	return(
		<div>
			<Expediente/>
			
		</div>
	);
};

export default BaterPonto;