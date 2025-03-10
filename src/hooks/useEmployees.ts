import { useState, useEffect } from "react";

interface Employee {
	id: string;
	name: string;
	position: string;
	hireDate: string;
	phone: string;
	image: string;
}

interface DbResponse {
	id: string;
	name: string;
	job: string;
	admission_date: string;
	phone: string;
	image: string;
}

export const useEmployees = () => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchEmployees = async () => {
		try {
			const response = await fetch("http://localhost:3000/employees");

			if (!response.ok) {
				throw new Error(
					"Falha ao carregar funcionários, tente novamente mais tarde",
				);
			}

			const data: DbResponse[] = await response.json();

			const formattedData: Employee[] = data.map(
				(employee: DbResponse): Employee => {
					return {
						id: employee.id,
						name: employee.name,
						position: employee.job,
						hireDate: employee.admission_date,
						phone: employee.phone,
						image: employee.image,
					};
				},
			);

			setEmployees(formattedData);
		} catch (err: unknown) {
			setError((err as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchEmployees();
	}, []);

	return { employees, isLoading, error };
};
