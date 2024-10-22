require "active_support/core_ext/integer/time"

Rails.application.configure do
  # Configurações especificadas aqui terão precedência sobre as do config/application.rb.

  # Reloading e Eager Loading
  config.enable_reloading = true
  config.eager_load = false

  # Relatórios de Erro e Depreciação
  config.consider_all_requests_local = true
  config.active_support.deprecation = :log

  # Cache
  if Rails.root.join("tmp/caching-dev.txt").exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true
    config.public_file_server.headers = { "cache-control" => "public, max-age=#{2.days.to_i}" }
  else
    config.action_controller.perform_caching = false
  end
  config.cache_store = :memory_store

  # Armazenamento de Arquivos
  config.active_storage.service = :local

  # Mailer
  config.action_mailer.raise_delivery_errors = false
  config.action_mailer.perform_caching = false
  config.action_mailer.default_url_options = { host: "localhost", port: 3000 }

  # Banco de Dados
  config.active_record.migration_error = :page_load
  config.active_record.verbose_query_logs = true
  config.active_record.query_log_tags_enabled = true

  # Active Job
  config.active_job.verbose_enqueue_logs = true

  # Action View
  config.action_view.annotate_rendered_view_with_filenames = true

  # Action Controller
  config.action_controller.raise_on_missing_callback_actions = true

  # Server Timing
  config.server_timing = true

  # Outras Configurações
  # config.i18n.raise_on_missing_translations = true
  # config.action_cable.disable_request_forgery_protection = true
  # config.generators.apply_rubocop_autocorrect_after_generate!

  config.log_level = :info

  # Configuração do logger para remover timestamps
  config.logger = ActiveSupport::TaggedLogging.new(Logger.new(STDOUT))
  config.logger.formatter = proc do |severity, datetime, progname, msg|
    "#{severity}: #{msg}\n"
  end
end