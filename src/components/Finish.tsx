import dayjs from 'dayjs';
import { useState } from 'react';

interface ChildProps {
  handleFinish: () => void;
}

export const FinishAsFC: React.FC<ChildProps> = ({
  handleFinish,
}) => {
  return (
		<div>
			<button onClick = {handleFinish}>Terminar expediente</button>
		</div>
  );
};

