#!/bin/bash

# Função para exibir a barra de carregamento colorida para Rails
show_progress_rails() {
  local duration=$1
  local increment=$((duration / 100))
  local progress=0
  local bar=""

  while [ $progress -le 100 ]; do
    bar=$(printf "%-${progress}s" "=")
    echo -ne "\e[31m[${bar// /=}>] $progress%\e[0m\r"
    sleep $increment
    progress=$((progress + 1))
  done
  echo -ne "\n"
}

# Função para exibir a barra de carregamento colorida para Vite
show_progress_vite() {
  local duration=$1
  local increment=$((duration / 100))
  local progress=0
  local bar=""

  while [ $progress -le 100 ]; do
    bar=$(printf "%-${progress}s" "=")
    echo -ne "\e[36m[${bar// /=}>] $progress%\e[0m\r"
    sleep $increment
    progress=$((progress + 1))
  done
  echo -ne "\n"
}

# Função para matar processos pelo PID
kill_process() {
  local pid=$1
  if [ -n "$pid" ]; then
    kill -9 $pid
    echo "Process $pid has been killed."
  fi
}

# Listar PIDs ativos de Rails e Vite
rails_pid=$(pgrep -f "rails server")
vite_pid=$(pgrep -f "vite")

echo "PIDs ativos antes de iniciar os servidores:"
if [ -n "$rails_pid" ]; then
  echo " Rails PID: $rails_pid"
else
  echo "Fechando processos Rails ativos..."
fi
if [ -n "$vite_pid" ]; then
  echo " Vite PID: $vite_pid"
else
  echo -e "Fechando processos Vite ativos...\n"
fi

# Forçar fechamento de processos ativos
if [ -n "$rails_pid" ]; then
  echo "Rails server is running (PID: $rails_pid). Killing process..."
  kill_process $rails_pid
fi
if [ -n "$vite_pid" ]; then
  echo "Vite server is running (PID: $vite_pid). Killing process..."
  kill_process $vite_pid
fi

# Remover arquivo server.pid se existir
if [ -f /workspaces/Rails-React/tmp/pids/server.pid ]; then
  rm /workspaces/Rails-React/tmp/pids/server.pid
  echo "Arquivo server.pid removido."
fi

# Iniciar servidor Rails e capturar erros
echo -e "Starting Rails server..."
show_progress_rails 5 &
rails_progress_pid=$!
bin/rails server -d -p 3000 > rails.log 2>&1
wait $rails_progress_pid

# Verificar se o Rails iniciou corretamente, checar o log
rails_pid=$(pgrep -f "rails server")
if [ -n "$rails_pid" ]; then
  echo "Backend startado com sucesso (Rails PID: $rails_pid)."
else
  echo "Erro ao startar o backend (Rails). Verificando logs..."
  tail -n 20 rails.log # Mostra as últimas 20 linhas do log do Rails
  exit 1
fi

# Instalar dependências do Node.js (sem exibir os detalhes desnecessários)
echo -e "Instalando dependências do Node.js..."
(cd frontend/web && npm install --silent)

# Iniciar servidor React (Vite) e capturar erros
echo -e "Starting React-Vite server..."
show_progress_vite 5 &
vite_progress_pid=$!
(cd frontend/web && npm run dev --silent > vite.log 2>&1) &
wait $vite_progress_pid

# Verificar se o Vite iniciou corretamente, checar o log
vite_pid=$(pgrep -f "vite")
if [ -n "$vite_pid" ]; then
  echo "React-Vite startado com sucesso (Vite PID: $vite_pid)."
else
  echo "Erro ao startar o React-Vite. Verificando logs..."
  tail -n 20 frontend/web/vite.log # Mostra as últimas 20 linhas do log do Vite
  exit 1
fi

# Exibir console do React (Vite)
tail -f frontend/web/vite.log
