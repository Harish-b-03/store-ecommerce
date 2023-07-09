const Modal = ({ children, open = false }: any) => {
	return (
		<div
			className={`${
				open ? "opacity-100" : "opacity-0 pointer-events-none delay-300"
			} fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-50 transition-all`}
		>
			<div className="relative w-full h-full flex justify-center items-center">
				{children}
			</div>
		</div>
	);
};

export default Modal;
