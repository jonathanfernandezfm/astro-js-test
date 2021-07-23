import React from 'react';
import classes from '../utils/classes';
import ThemeSwitcher from '../components/ThemeSwitcher';

interface HeaderProps {
	activeLabel: string;
}

interface NavBarValues {
	label: string;
	link: string;
}

const navBarData: NavBarValues[] = [
	{
		label: 'Home',
		link: '/',
	},
	{
		label: 'About',
		link: '/about',
	},
	{
		label: 'Projects',
		link: '/projects',
	},
	{
		label: 'Blog',
		link: '/blog',
	},
	{
		label: 'Contact',
		link: '/contact',
	},
];

const Header = ({ activeLabel }: HeaderProps) => {
	const styles = {
		header: '2xl:flex text-center items-center 2xl:justify-evenly justify-around gap-10',
		logo: 'text-2xl font-bold',
		navbar: 'flex justify-around gap-4 px-3 py-2 bg-blue-200 rounded-full mt-4 xl:mt-0',
		link: 'font-medium px-8 py-2 hover:bg-blue-100 hover:rounded-full',
		link_active: 'bg-white rounded-full hover:bg-white',
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo}>&gt;jfm</div>
			<nav className={styles.navbar}>
				{navBarData.map((value) => (
					<a
						key={value.label}
						href={value.link}
						className={classes([styles.link, activeLabel === value.label ? styles.link_active : ''])}
					>
						{value.label}
					</a>
				))}
			</nav>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
