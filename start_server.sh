#!/bin/bash

# Função para exibir a barra de carregamento colorida em verde
show_progress() {
  local duration=$1
  local increment=$((duration / 100))
  local progress=0
  local bar=""

  while [ $progress -le 100 ]; do
    bar=$(printf "%-${progress}s" "=")
    echo -ne "\e[32m[${bar// /=}>] $progress%\e[0m\r"
    sleep $increment
    progress=$((progress + 1))
  done
  echo -ne "\n\n"
}

# Função para matar processos pelo PID
kill_process() {
  local pid=$1
  if [ -n "$pid" ]; then
    kill -9 $pid
    echo "Process $pid has been killed."
  fi
}

# Função para matar processos ativos de Rails e Vite
kill_active_processes() {
  local rails_pid=$(pgrep -f "rails server")
  local vite_pids=$(pgrep -f "vite")

  if [ -z "$rails_pid" ] && [ -z "$vite_pids" ]; then
    center_text "Nenhum processo ativo encontrado. Iniciando sistema..."
    return
  fi

  echo "PIDs ativos antes de iniciar os servidores:"
  if [ -n "$rails_pid" ]; then
    echo " Rails PID: $rails_pid"
  else
    echo "Fechando processos Rails ativos..."
  fi
  if [ -n "$vite_pids" ]; then
    echo " Vite PIDs:"
    printf "%-10s\n" $vite_pids
  else
    echo -e "Fechando processos Vite ativos...\n"
  fi

  local killed_pids=0

  if [ -n "$rails_pid" ]; then
    echo "Rails server is running (PID: $rails_pid). Killing process..."
    kill_process $rails_pid
    killed_pids=$((killed_pids + 1))
  fi
  if [ -n "$vite_pids" ]; then
    echo "Vite server is running (PIDs: $vite_pids). Killing processes..."
    for pid in $vite_pids; do
      kill_process $pid
      killed_pids=$((killed_pids + 1))
    done
  fi

  if [ -f /workspaces/Rails-React/tmp/pids/server.pid ]; then
    rm /workspaces/Rails-React/tmp/pids/server.pid
    echo "Arquivo server.pid removido."
  fi

  echo -e "\nTabela de Processos Ativos e Fechados:"
  echo -e "--------------------------------------"
  printf "%-20s %-20s\n" "Processo" "Status"
  echo -e "--------------------------------------"
  if [ -n "$rails_pid" ]; then
    printf "%-20s %-20s\n" "Rails PID: $rails_pid" "Fechado"
  fi
  if [ -n "$vite_pids" ]; then
    for pid in $vite_pids; do
      printf "%-20s %-20s\n" "Vite PID: $pid" "Fechado"
    done
  fi
  echo -e "--------------------------------------"
  echo -e "Total de processos fechados: $killed_pids\n"
}

# Função para centralizar texto
center_text() {
  local term_width=$(tput cols)
  local text="$1"
  local text_length=${#text}
  local padding=$(( (term_width - text_length) / 2 ))
  printf "%*s%s%*s\n" $padding "" "$text" $padding ""
}

# Função para formatar texto em negrito e verde
bold_green() {
  echo -e "\e[1;32m$1\e[0m"
}

# Função para iniciar o servidor Rails e verificar erros
start_rails() {
  echo -e "Starting Rails server..."
  show_progress 5 &
  local rails_progress_pid=$!
  # Inicia o servidor Rails
  bin/rails server -d -p 3000 2>&1 > rails.log &
  wait $rails_progress_pid

  local rails_pid=$(pgrep -f "rails server")
  if [ -n "$rails_pid" ]; then
    center_text "$(bold_green "Backend startado com sucesso (Rails PID: $rails_pid).")"
    echo -e "\nRails server is running at: \e[1;31mhttp://localhost:3000\e[0m"
  else
    echo "Erro ao startar o backend (Rails). Verificando logs..."
    tail -n 20 rails.log # Mostra as últimas 20 linhas do log do Rails
    exit 1
  fi
}

# Função para iniciar o servidor Vite e verificar erros
start_vite() {
  echo -e "Instalando dependências do Node.js..."
  (cd frontend/web && npm install --silent 2>&1 | tee vite_install.log)

  echo -e "Starting React-Vite server..."
  show_progress 5 &
  local vite_progress_pid=$!
  (cd frontend/web && npm run dev --silent 2>&1 | tee vite.log) &
  wait $vite_progress_pid

  local vite_pids=$(pgrep -f "vite" | tr '\n' ' ')
  if [ -n "$vite_pids" ]; then
    center_text "$(bold_green "React-Vite startado com sucesso (Vite PID: $vite_pids).")"
    echo -e "\nVite server is running at: \e[1;31mhttp://localhost:5173\e[0m"
  else
    echo "Erro ao startar o React-Vite. Verificando logs..."
    tail -n 20 frontend/web/vite.log # Mostra as últimas 20 linhas do log do Vite
    exit 1
  fi

  tail -f frontend/web/vite.log | sed '/ready in/d;/Local:/d;/Network:/d'
}

# Função principal para iniciar servidores e tratar erros
main() {
  center_text "started with pid $$"
  kill_active_processes
  start_rails
  start_vite
}

# Executar a função principal
main