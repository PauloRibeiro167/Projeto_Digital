# app/middleware/error_logger_middleware.rb
class ErrorLoggerMiddleware
  def initialize(app)
    @app = app
    @errors = []
  end

  def call(env)
    status, headers, response = @app.call(env)
    if status >= 400
      @errors << { status: status, headers: headers, response: response }
    end
    [status, headers, response]
  end

  def errors
    @errors
  end

  def success?
    @errors.empty?
  end
end