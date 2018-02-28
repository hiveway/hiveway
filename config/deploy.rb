# frozen_string_literal: true

lock '3.10.0'

set :repo_url, ENV.fetch('REPO', 'https://github.com/hiveway/hiveway.git')
set :branch, ENV.fetch('BRANCH', 'master')

set :application, 'hiveway'
set :rbenv_type, :user
set :rbenv_ruby, File.read('.ruby-version').strip
set :migration_role, :app

append :linked_files, '.env.production', 'public/robots.txt'
append :linked_dirs, 'vendor/bundle', 'node_modules', 'public/system'
