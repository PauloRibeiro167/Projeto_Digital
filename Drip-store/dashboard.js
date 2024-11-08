// dashboard.js
import inquirer from 'inquirer';
import { exec } from 'child_process';

const services = {
  frontend: 'docker-compose up -d frontend',
  backend: 'docker-compose up -d backend',
  db: 'docker-compose up -d db',
  all: 'docker-compose up -d'
};

const startService = (service) => {
  console.log(`Iniciando o serviço: ${service}`);
  exec(services[service], (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao iniciar o serviço: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro: ${stderr}`);
      return;
    }
    console.log(`Saída: ${stdout}`);
  });
};

const questions = [
  {
    type: 'list',
    name: 'service',
    message: 'Qual serviço você deseja iniciar?',
    choices: [
      { name: 'Frontend', value: 'frontend' },
      { name: 'Backend', value: 'backend' },
      { name: 'Banco de Dados', value: 'db' },
      { name: 'Todos os serviços', value: 'all' }
    ]
  }
];

inquirer.prompt(questions).then((answers) => {
  startService(answers.service);
});