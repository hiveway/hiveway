# frozen_string_literal: true

task stats: 'etherhive:stats'

namespace :etherhive do
  desc 'Report code statistics (KLOCs, etc)'
  task :stats do
    require 'rails/code_statistics'
    [
      %w(App\ Libraries app/lib),
      %w(Presenters app/presenters),
      %w(Services app/services),
      %w(Validators app/validators),
      %w(Workers app/workers),
    ].each do |name, dir|
      ::STATS_DIRECTORIES << [name, Rails.root.join(dir)]
    end
  end
end
