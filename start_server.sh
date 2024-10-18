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

# Verificar se o servidor Rails já está rodando
rails_pid=$(pgrep -f "rails server")
if [ -n "$rails_pid" ]; then
  echo "Rails server is already running (PID: $rails_pid). Killing process..." >> server.log
  kill_process $rails_pid
fi

# Verificar se o servidor Vite já está rodando
vite_pid=$(pgrep -f "vite")
if [ -n "$vite_pid" ]; then
  echo "Vite server is already running (PID: $vite_pid). Killing process..." >> server.log
  kill_process $vite_pid
fi

echo -e "\e[31mStarting Rails server...\e[0m" >> server.log
show_progress_rails 10 &
rails_progress_pid=$!
bin/rails server -d -p 3000 > rails.log 1>&1
wait $rails_progress_pid
rails_pid=$(pgrep -f "rails server")

echo -e "\e[36mStarting Vite server...\e[0m" >> server.log
show_progress_vite 10 &
vite_progress_pid=$!
(cd frontend/web && npm run dev > vite.log 2>&1) &
wait $vite_progress_pid
vite_pid=$(pgrep -f "vite")

# Esperar os servidores iniciarem
wait

# Verificar se os servidores estão rodando e capturar os PIDs
rails_pid=$(pgrep -f "rails server")
vite_pid=$(pgrep -f "vite")

# Verificar se os PIDs foram capturados corretamente
if [ -z "$rails_pid" ]; then
  echo "Error: Rails server failed to start." >> server.log
  exit 1
fi

if [ -z "$vite_pid" ]; then
  echo "Error: Vite server failed to start." >> server.log
  exit 1
fi

# Armazenar informações em um hash
declare -A server_info
server_info=(
  ["rails_pid"]=$rails_pid
  ["vite_pid"]=$vite_pid
  ["rails_url"]="http://127.0.0.1:3000"
  ["vite_url"]="http://localhost:5173"
)

# Exibir mensagem de sucesso
echo -e "\e[37mStart to success!\e[0m" >> server.log
echo -e "\e[34mRails server PID: ${server_info[rails_pid]}\e[0m" >> server.log
echo -e "\e[34mRails server running on ${server_info[rails_url]}\e[0m" >> server.log
echo -e "\e[34mVite server PID: ${server_info[vite_pid]}\e[0m" >> server.log
echo -e "\e[34mVite server running on ${server_info[vite_url]}\e[0m" >> server.log

