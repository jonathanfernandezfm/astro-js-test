import React, { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	type: string;
	placeholder: string;
	className: string;
}

const Button = ({ children, type, placeholder, className }: ButtonProps) => {
	return <button className={className}>{children}</button>;
};

export default Button;
