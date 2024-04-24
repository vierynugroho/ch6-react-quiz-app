import logo_img from '../assets/quiz-logo.png';

const Header = () => {
	return (
		<header className='header'>
			<img
				src={logo_img}
				alt=''
			/>
			<h1>Quiz App</h1>
		</header>
	);
};

export default Header;
