import React, { ReactNode } from 'react';

interface TextProps {
	children: ReactNode;
	className: string;
}

const Text = ({ children, className }: TextProps) => {
	return <div className={className}>{children}</div>;
};

export default Text;
