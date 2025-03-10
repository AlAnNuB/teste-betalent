# Teste Betalent - Sistema de Gerenciamento de Funcionários

Projeto desenvolvido como parte do processo seletivo da BeTalent para a posição de Front-end. Consiste em uma tabela responsiva que exibe e filtra informações de funcionários, construída com React e TypeScript, consumindo dados de uma API simulada com json-server.

## 🚀 Funcionalidades

- ✨ Interface moderna e responsiva
- 📊 Tabela de funcionários
- 🔍 Visualização detalhada das informações dos funcionários
- 📅 Formatação automática de datas
- 📞 Formatação automática de números de telefone

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- CSS Modules
- Vite (Build tool)

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- Node.js
- npm 

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AlAnNuB/teste-betalent.git
cd teste-betalent
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Executando o Projeto

### Executando o servidor e o front end juntos:

Para iniciar o servidor e o front end no terminal digite o comando:

```bash
npm run start
```

### Executando o servidor

Para iniciar o servidor no terminal digite o comando:

```bash
npm run start:server
```

O servidor de desenvolvimento iniciará em `http://localhost:3000`

Mantenha o terminal aberto para que o servidor fique em execução.

### Executando o front end

Para iniciar o front end com o vite em outra aba do terminal digite:

```bash
npm run start:front
```

O servidor de desenvolvimento iniciará em `http://localhost:3001`


## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes React reutilizáveis
│   └── table/         # Componente de tabela responsiva
|   └── input/         # Componente de input de texto
|   └── header/         # Componente superior com o logo
├── hooks/             # Custom hooks React
├── main.css/          # Arquivos de estilo globais
└── main.tsx           # Componente principal da aplicação
```


## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

* **Alan Miranda** - [AlAnNuB](https://github.com/AlAnNuB)

## 📞 Suporte

Para suporte, envie um email para alannub6@gmail.com ou abra uma issue no repositório.
