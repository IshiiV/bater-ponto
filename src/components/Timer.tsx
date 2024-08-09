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
			'w-96 rounded  text-center items-center px-3 py-1.5 border text-xl',
			{
				'border-blue-500 bg-blue-500 text-white': comeco,
				'border-red-500 bg-red-500 text-white': termino,
			}
	);

  return (
		<div className="flex justify-center">
			<button className={classes} onClick = {handleTimer}>{children}</button>
		</div>
  );
};
