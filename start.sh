#!/bin/bash

# Função para centralizar texto
centralizar_texto() {
  local largura_terminal=$(tput cols)
  local texto="$1"
  local comprimento_texto=${#texto}
  local preenchimento=$(( (largura_terminal - comprimento_texto) / 2 ))
  printf "%*s%s%*s\n" $preenchimento "" "$texto" $preenchimento ""
}

# Função para centralizar texto sem quebra de linha
centralizar_texto_unica_linha() {
  local largura_terminal=$(tput cols)
  local texto="$1"
  local comprimento_texto=${#texto}
  local preenchimento=$(( (largura_terminal - comprimento_texto) / 2 ))
  printf "%*s%s" $preenchimento "" "$texto"
}

# Função para formatar texto em negrito e verde
negrito_verde() {
  echo -e "\e[1;32m$1\e[0m"
}
negrito_azul() {
  echo -e "\e[1;36m$1\e[0m"
}
negrito_vermelho() {
  echo -e "\e[1;31m$1\e[0m"
}
negrito_amarelo() {
  echo -e "\e[1;33m$1\e[0m"
}

# Função para exibir a animação de carregamento com mensagem centralizada
barra_de_progresso() {
  local duration=$1  # Duração total do carregamento (em segundos)
  local message="$2" # Mensagem a ser exibida
  local increment=$(echo "scale=2; $duration / 100" | bc)  # Tempo para cada incremento (100 etapas)
  local block="█"  # Bloco verde
  local bar=""  # Barra de progresso

  for i in $(seq 1 100); do
      if (( i % 10 == 0 )); then
          bar+=$block  # Adiciona um bloco verde a cada 10%
      fi
      # Calcula a largura total da mensagem e da barra de progresso
      local total_message="$message [${bar///=} $i%]"
      local largura_terminal=$(tput cols)
      local comprimento_total=${#total_message}
      local preenchimento=$(( (largura_terminal - comprimento_total) / 2 ))
      # Exibe a mensagem e a barra de progresso centralizadas, sem quebrar linha
      printf "\r%*s%s" $preenchimento "" "$total_message"
      sleep $increment
  done
  printf "\n"
}

# Função para matar processos pelo PID
matar_processo() {
  local pid=$1
  if [ -n "$pid" ]; then
    kill -9 $pid
    echo "Processo $pid foi terminado."
  fi
}

# Função para matar processos ativos de Vite
matar_processos_ativos() {
  local vite_pids=$(pgrep -f "vite")

  if [ -z "$vite_pids" ]; then
    centralizar_texto "$(negrito_verde "Nenhum processo PID ativo encontrado.")"
    centralizar_texto "$(negrito_verde "Iniciando sistema...")"
    return
  fi

  centralizar_texto "Checando processos ativos antes de iniciar os servidores:"
  if [ -n "$vite_pids" ]; then
    centralizar_texto "Vite PIDs:"
    for pid in $vite_pids; do
      centralizar_texto "$(printf "%55s %-30s" "$(negrito_amarelo "Vite PID:")" "$(negrito_vermelho "$pid")")"
    done
  else
    centralizar_texto "Fechando processos Vite ativos..."
  fi

  local pids_terminados=0
  local pids_ativos=()
  local pids_fechados=()

  if [ -n "$vite_pids" ]; then
    centralizar_texto "Servidor Vite está rodando (PIDs: $vite_pids). Terminando processos..."
    for pid in $vite_pids; do
      pids_ativos+=("$pid")
      centralizar_texto "Terminando processo Vite (PID: $pid)..."
      matar_processo $pid
      pids_fechados+=("$pid")
      pids_terminados=$((pids_terminados + 1))
    done
  fi

  centralizar_texto "Tabela de Processos Ativos e Fechados:"
  centralizar_texto "--------------------------------------"
  centralizar_texto "Processo Ativo                Processo Fechado"
  centralizar_texto "--------------------------------------"
  for i in "${!pids_ativos[@]}"; do
    local ativo="${pids_ativos[$i]}"
    local fechado="${pids_fechados[$i]}"
    centralizar_texto "$(printf "%55s %-30s" "$(negrito_vermelho "$ativo")" "$(negrito_verde "$fechado")")"
  done
  centralizar_texto "--------------------------------------"
  centralizar_texto "Total de processos fechados: $pids_terminados"
}

iniciar_vite() {
  centralizar_texto "$(negrito_azul "Iniciando servidor Vite...")"
  centralizar_texto "$(negrito_verde "Instalando dependências do Node.js...")"
  barra_de_progresso 5 "$(negrito_azul "Iniciando servidor Vite...")" &
  local vite_progress_pid=$!
  
  if [ -d "FRONTEND" ]; then
    (cd FRONTEND && npm run dev --silent 2>&1 | tee vite.log | sed '/ready in/d;/Local:/d;/Network:/d') &
  else
    centralizar_texto "$(negrito_vermelho "Erro: Diretório 'FRONTEND' não encontrado.")"
    exit 1
  fi
  
  wait $vite_progress_pid

  local vite_pids=$(pgrep -f "vite" | tr '\n' ' ')
  if [ -n "$vite_pids" ]; then
    centralizar_texto "$(negrito_verde "React-Vite iniciado com sucesso $(negrito_azul "(Vite PID: $vite_pids).")")"
  else
    centralizar_texto "Erro ao iniciar o React-Vite. Verificando logs..."
    if [ -f "FRONTEND/vite.log" ]; then
      tail -n 20 FRONTEND/vite.log # Mostra as últimas 20 linhas do log do Vite
    else
      centralizar_texto "$(negrito_vermelho "Erro: Arquivo de log 'FRONTEND/vite.log' não encontrado.")"
    fi
    exit 1
  fi

  # Captura as mensagens de inicialização do Vite
  local vite_ready=$(grep "ready in" FRONTEND/vite.log)
  local vite_local=$(grep "Local:" FRONTEND/vite.log)
  local vite_network=$(grep "Network:" FRONTEND/vite.log)

  # Exibe as mensagens ao final do log
  echo -e "\n"
  centralizar_texto "$vite_ready"
  centralizar_texto "$vite_local"
  centralizar_texto "$vite_network"

  # Remove as mensagens duplicadas do log
  tail -f FRONTEND/vite.log | sed '/ready in/d;/Local:/d;/Network:/d'
}

# Função principal para iniciar servidores e tratar erros
principal() {
  echo -e "\n"
  centralizar_texto "$(negrito_azul "iniciado com pid: $(negrito_vermelho $$)")"
  matar_processos_ativos
  iniciar_vite
}

# Executar a função principal
principal