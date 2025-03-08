import { useFormateDate } from '@/hooks/useFormateDate';
import './index.css';
import { useFormatePhone } from '@/hooks/useFormatePhone';

interface Employee {
  id: string;
  name: string;
  position: string;
  hireDate: string;
  phone: string;
  image: string;
}

interface TableProps {
  employees: Employee[];
}

export const Table = ({ employees }: TableProps) => {
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr className="table-header">
            <th className="table-cell">FOTO</th>
            <th className="table-cell">NOME</th>
            <th className="table-cell">CARGO</th>
            <th className="table-cell">DATA DE ADMISSÃO</th>
            <th className="table-cell">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="table-row">
              <td className="table-cell">
                <div className="avatar">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="avatar-img"
                  />
                </div>
              </td>
              <td className="table-cell">{employee.name}</td>
              <td className="table-cell">{employee.position}</td>
              <td className="table-cell">{useFormateDate(employee.hireDate)}</td>
              <td className="table-cell">{useFormatePhone(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 