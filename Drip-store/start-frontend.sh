#!/bin/bash

# Iniciar o container do frontend
docker-compose up -d frontend

# Exibir logs do frontend
docker-compose logs -f frontend
