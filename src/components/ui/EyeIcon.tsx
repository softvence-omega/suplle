const EyeIcon = ({className}: {className: string}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="url(#paint0_linear_904_407)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="url(#paint1_linear_904_407)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_904_407" x1="12" y1="0.209106" x2="13.1547" y2="22.4486" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#56DAAB" />
                    <stop offset="1" stop-color="#0F9996" />
                </linearGradient>
                <linearGradient id="paint1_linear_904_407" x1="12" y1="0.209106" x2="13.1547" y2="22.4486" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#56DAAB" />
                    <stop offset="1" stop-color="#0F9996" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default EyeIcon;