import React from 'react';

const styles = {
	container: 'flex flex-col items-center 2xl:px-80',
};

const Container = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
