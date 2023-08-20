const Message = ({ close = () => {} }: any) => {
    const stroke = "#8B5CF6";

    return (
        <div className="p-5 flex items-center justify-center bg-transparent">
            <div className="bg-white border border-slate-300 w-full md:w-max h-fit shadow-lg rounded-md gap-2 md:gap-4 p-4 flex flex-row items-start justify-center">
                <section className="w-28 md:w-6 h-full flex flex-col items-center justify-start">
                    <svg
                        width="100%"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 13.25C10.9518 13.25 13.75 10.4518 13.75 7C13.75 3.54822 10.9518 0.75 7.5 0.75C4.04822 0.75 1.25 3.54822 1.25 7C1.25 10.4518 4.04822 13.25 7.5 13.25Z"
                            stroke={stroke}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.3269 7.96143C4.80767 9.69219 6.73075 10.7499 8.46152 10.2691C9.51921 9.8845 10.3846 9.01912 10.6731 7.96143"
                            stroke={stroke}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.0481 5.55767C9.91536 5.55767 9.80774 5.45005 9.80774 5.31729C9.80774 5.18453 9.91536 5.0769 10.0481 5.0769"
                            stroke={stroke}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.0481 5.5577C10.1809 5.5577 10.2885 5.45008 10.2885 5.31732C10.2885 5.18456 10.1809 5.07693 10.0481 5.07693"
                            stroke={stroke}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.95193 5.55767C4.81917 5.55767 4.71155 5.45005 4.71155 5.31729C4.71155 5.18453 4.81917 5.0769 4.95193 5.0769"
                            stroke={stroke}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.95197 5.5577C5.08473 5.5577 5.19235 5.45008 5.19235 5.31732C5.19235 5.18456 5.08473 5.07693 4.95197 5.07693"
                            stroke={stroke}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </section>
                <section className="max-w-md h-full flex flex-col items-start justify-end gap-1">
                    <h1 className="text-base font-semibold text-zinc-800 antialiased">
                        Order Placed!
                    </h1>
                    <p className="text-sm font-medium text-zinc-400 antialiased">
                        Please note that this{" "}
                        <span className="text-gray-500 font-semibold">
                            order is not an actual purchase
                        </span>
                        . This project serves as a personal demonstration and is{" "}
                        <span className="text-gray-500 font-semibold">
                            {" "}
                            not associated with real transactions
                        </span>
                        . Thank you for your interest and understanding!
                    </p>
                </section>
                <section className="w-28 md:w-5 h-full flex flex-col items-center justify-start">
                    <svg
                        width="100%"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                        onClick={() => close()}
                    >
                        <path
                            d="M4.06585 3.00507C3.77296 2.71218 3.29809 2.71218 3.00519 3.00507C2.7123 3.29796 2.7123 3.77284 3.00519 4.06573L4.06585 3.00507ZM10.0763 11.1368C10.3692 11.4297 10.844 11.4297 11.1369 11.1368C11.4298 10.8439 11.4298 10.369 11.1369 10.0761L10.0763 11.1368ZM3.00519 4.06573L10.0763 11.1368L11.1369 10.0761L4.06585 3.00507L3.00519 4.06573Z"
                            fill="#989fac"
                        />
                        <path
                            d="M11.1369 4.06573C11.4298 3.77284 11.4298 3.29796 11.1369 3.00507C10.844 2.71218 10.3691 2.71218 10.0762 3.00507L11.1369 4.06573ZM3.00517 10.0761C2.71228 10.369 2.71228 10.8439 3.00517 11.1368C3.29806 11.4297 3.77294 11.4297 4.06583 11.1368L3.00517 10.0761ZM10.0762 3.00507L3.00517 10.0761L4.06583 11.1368L11.1369 4.06573L10.0762 3.00507Z"
                            fill="#989fac"
                        />
                    </svg>
                </section>
            </div>
        </div>
    );
};

export default Message;
