import className from "classnames";

interface ChildProps {
  handleTimer: () => void;
	children?: React.ReactNode;
	comeco?: boolean;
	termino?: boolean;
}

export const TimerAsFC: React.FC<ChildProps> = ({
  handleTimer,
	children,
	comeco,
	termino,
}) => {
	const classes =
		className(
			' items-center px-3 py-1.5 border',
			{
				'text-center flex-auto rounded border-blue-500 bg-blue-500 text-white': comeco,
				'text-center flex-auto rounded border-red-500 bg-red-500 text-white': termino,
			}
	);


  return (
		<div className="flex">
			<button className={classes} onClick = {handleTimer}>{children}</button>
		</div>
  );
};
