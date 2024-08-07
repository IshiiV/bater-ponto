import dayjs from 'dayjs';
import { useState } from 'react';
import { StartAsFC } from './Start';
import { FinishAsFC } from './Finish';

const Expediente: React.FC = () => {
	const [expediente, setExpediente] = useState([]);
	const [showInicio, setShowInicio] = useState(true);
	const entrada = {};
	let content;


	const handleStart = () => {
		setShowInicio(!showInicio);
		setExpediente({...expediente, dayjs()});
		console.log(expediente);
  };

	const handleFinish = () => {
		setShowInicio(!showInicio);
		console.log(dayjs().diff(expediente));
  };

  const handleClick = () => {
		setShowInicio(!showInicio);
  };

	if (showInicio)
		content = <StartAsFC handleStart = {handleStart}/>
	else
		content = <FinishAsFC handleFinish = {handleFinish}/>
  return (
		<div>
			{content}
		</div>
  );
};

export default Expediente;
