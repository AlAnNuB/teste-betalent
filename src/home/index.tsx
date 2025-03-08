import { useState } from 'react';
import './index.css';
import Logo from '@/assets/Logo.svg';
import { Input } from '@/components/input';
import { Table } from '@/components/table';
import { useEmployees } from '@/hooks/useEmployees';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { employees, isLoading, error } = useEmployees();

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="app-container">
        <header className="header">
          <img src={Logo} alt="BeTalent Logo" />
        </header>
        <div className="content">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <header className="header">
          <img src={Logo} alt="BeTalent Logo" />
        </header>
        <div className="content">
          <p>Erro: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <img src={Logo} alt="BeTalent Logo" />
      </header>

      <div className="content">
        <div className="title-search">
          <h1 className="title">Funcionários</h1>
          <Input
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
        <Table employees={filteredEmployees} />
      </div>
    </div>
  );
};
