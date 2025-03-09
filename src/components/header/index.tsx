import './index.css';

interface HeaderProps {
	logo: string;
	alt: string;
}

export const Header = ({ logo, alt }: HeaderProps) => {
	return (
		<header className="header">
			<img src={logo} alt={alt} />
		</header>
	);
};
