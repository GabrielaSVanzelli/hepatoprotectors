# hepatoprotectors
Sistema de Gerenciamento de Tarefas Integrado com Google Sheets e Docker

Visão Geral
Este projeto consiste em criar um sistema de gerenciamento de tarefas que utiliza o Google Sheets como backend para armazenar dados e um frontend baseado em uma aplicação web simples para exibir e manipular essas tarefas. Todo o sistema será encapsulado em contêineres Docker para facilitar a implantação e o gerenciamento.

Tecnologias Utilizadas
Google Sheets API: Para integração com o Google Sheets.
Python/Flask: Para criar o backend da aplicação web.
React.js: Para criar o frontend da aplicação web.
Docker: Para containerização da aplicação.
Docker Compose: Para orquestrar os contêineres.

Passo a Passo
1. Configuração do Backend (Python/Flask)

app.py
requirements.txt
Dockerfile


2. Configuração do Frontend(React.js)
src/App.js
Dockerfile


3.Configuração do Docker Compose
docker-compose.yml


4.Instruções de Execução

4.1 Obtenha as credenciais do Google Sheets:

- Crie um projeto no Google Cloud Console.
- Habilite a API do Google Sheets.
- Crie credenciais de conta de serviço e baixe - o arquivo JSON.
- Renomeie o arquivo para credentials.json e - - coloque-o no diretório backend.

4.2 Configuração do Google Sheets:
- Crie uma nova planilha no Google Sheets chamada "task-manager".
- Compartilhe a planilha com o e-mail da conta de serviço encontrado no arquivo JSON.

4.3 Construa e execute os contêineres:

`docker-compose up --build`


4.4 Acesse a aplicação:

Abra seu navegador e vá para http://localhost:3000.


Conclusão
Este projeto demonstra como integrar uma aplicação web com Google Sheets, encapsulando toda a solução em contêineres Docker. Ele pode ser estendido com funcionalidades adicionais, como autenticação de usuários, categorização de tarefas e muito mais.





