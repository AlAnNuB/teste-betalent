import SearchIcon from "@/assets/search-svgrepo-com.svg";
import "./index.css";

interface InputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export const Input = ({
	value,
	onChange,
	placeholder = "Pesquisar",
}: InputProps) => {
	return (
		<div className="search-container">
			<input
				type="text"
				placeholder={placeholder}
				className="search-input"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<span className="search-icon">
				<img src={SearchIcon} alt="Ícone de busca" />
			</span>
		</div>
	);
};
