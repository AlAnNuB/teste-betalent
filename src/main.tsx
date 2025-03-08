import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import EmployeeDirectory from "./EmployeeDirectory/index.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<EmployeeDirectory />
	</StrictMode>,
);
