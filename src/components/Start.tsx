import dayjs from 'dayjs';
import { useState } from 'react';

interface ChildProps {
  handleStart: () => void;
	// expediente: {};
}

export const StartAsFC: React.FC<ChildProps> = ({
  handleStart,
}) => {
  return (
		<div>
			<button onClick = {handleStart}>Começar expediente</button>
		</div>
  );
};

