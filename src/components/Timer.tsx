interface ChildProps {
  handleTimer: () => void;
	children?: React.ReactNode;
}

export const TimerAsFC: React.FC<ChildProps> = ({
  handleTimer,
	children,
}) => {
  return (
		<div>
			<button onClick = {handleTimer}>{children}</button>
		</div>
  );
};
