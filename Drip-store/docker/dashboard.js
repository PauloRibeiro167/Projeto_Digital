// docker/dashboard.js
import inquirer from 'inquirer';
import { exec } from 'child_process';

const services = {
  frontend: 'docker-compose -f docker-compose.dev.yml up -d frontend',
  backend: 'docker-compose -f docker-compose.dev.yml up -d backend',
  db: 'docker-compose -f docker-compose.dev.yml up -d database',
  all: 'docker-compose -f docker-compose.dev.yml up -d'
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