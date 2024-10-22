# config/puma.rb
threads_count = ENV.fetch("RAILS_MAX_THREADS", 3)
threads threads_count, threads_count

port ENV.fetch("PORT", 3000)

plugin :tmp_restart
plugin :solid_queue if ENV["SOLID_QUEUE_IN_PUMA"]

pidfile ENV["PIDFILE"] if ENV["PIDFILE"]

# Configuração de logging do Puma para remover timestamps
stdout_redirect 'log/puma.stdout.log', 'log/puma.stderr.log', true

# Configuração do logger para remover timestamps
require 'logger'
logger = Logger.new(STDOUT)
logger.formatter = proc do |severity, datetime, progname, msg|
  "#{severity}: #{msg}\n"
end