import { HtmlHTMLAttributes } from "react";

interface IProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: string;
}

const Button = ({ children, color, ...props }: IProps) => {
    return (
        <button
            className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
            {...props}
        >
            {children}
        </button>
    );
};
export default Button;
