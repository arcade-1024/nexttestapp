import Image from "next/image";

interface PropTypes {
	children: any;
	heading: string;
}

const CenteredContainer = (props: PropTypes) => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<div className="mb-4"></div>
			<div className="flex flex-col w-full max-w-xl px-10 py-10 bg-white rounded-lg shadow-2xl">
				<div className="mb-4 text-2xl font-semibold text-center text-gray-700">
					{props.heading}
				</div>
				{props.children}
			</div>
		</div>
	);
};

export default CenteredContainer;
