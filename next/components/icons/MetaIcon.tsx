export function MetaIcon({color = 'white', className = ''}: {color?: string, className?: string}) {
    return (
        <svg className={className} width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 11.6667H17.5L16.6667 15H10V30H6.66667V15H0V11.6667H6.66667V8.54667C6.66667 5.575 6.97667 4.49667 7.55667 3.41C8.12502 2.33634 9.00301 1.45835 10.0767 0.89C11.1633 0.31 12.2417 0 15.2133 0C16.0833 0 16.8467 0.0833335 17.5 0.25V3.33333H15.2133C13.0067 3.33333 12.335 3.46333 11.6483 3.83C11.1554 4.08751 10.7535 4.49008 10.4967 4.98333C10.13 5.66833 10 6.34 10 8.54667V11.6667Z"
                fill={color} />
        </svg>
    );
}
