require 'confidante'
require 'rake_fly'
require 'rake_terraform'
require 'ruby_terraform/output'
require 'aws-sdk'
require 'securerandom'
require 'mime/types'

require_relative 'lib/s3_website'

configuration = Confidante.configuration

configuration.non_standard_mime_types.each do |mime_type, extensions|
  MIME::Types.add(MIME::Type.new(mime_type.to_s) { |m|
    m.extensions = extensions
  })
end

RakeFly.define_installation_tasks(version: '6.7.2')
RakeTerraform.define_installation_tasks(
  path: File.join(Dir.pwd, 'vendor', 'terraform'),
  version: '0.15.4')

task :default => [
  :build_fix
]

task :build => [
  :"content:docs:format",
  :"content:docs:lint",
  :"content:build"
]

task :build_fix => [
  :"content:docs:format_fix",
  :"content:docs:lint_fix",
  :"content:build"
]

namespace :secrets do
  desc 'Check if secrets are readable'
  task :check do
    if File.exist?('config/secrets')
      puts 'Checking if secrets are accessible.'
      unless File.read('config/secrets/.unlocked').strip == "true"
        raise RuntimeError, Paint['Cannot access secrets.', :red]
      end
      puts 'Secrets accessible. Continuing.'
    end
  end

  desc 'Unlock secrets'
  task :unlock do
    if File.exist?('config/secrets')
      puts 'Unlocking secrets.'
      sh('git crypt unlock')
    end
  end
end

namespace :bootstrap do
  RakeTerraform.define_command_tasks(
    configuration_name: 'bootstrap',
    argument_names: [
      :deployment_type,
      :deployment_label
    ]
  ) do |t, args|
    configuration = configuration
      .for_scope(args.to_h.merge(role: 'bootstrap'))

    vars = configuration.vars
    deployment_identifier = configuration.deployment_identifier

    t.source_directory = 'infra/bootstrap'
    t.work_directory = 'build'

    t.state_file = File.join(
      Dir.pwd, "state/bootstrap/#{deployment_identifier}.tfstate")
    t.vars = vars
  end
end

namespace :website do
  RakeTerraform.define_command_tasks(
    configuration_name: 'website',
    argument_names: [
      :deployment_type,
      :deployment_label
    ]
  ) do |t, args|
    configuration = configuration
      .for_scope(args.to_h.merge(role: 'website'))

    t.source_directory = 'infra/website'
    t.work_directory = 'build'

    t.backend_config = configuration.backend_config
    t.vars = configuration.vars
  end
end

namespace :dependencies do
  desc 'Fetch dependencies'
  task :install do
    sh('npm', 'install')
  end
end

namespace :content do
  desc 'Clean built content'
  task :clean do
    rm_rf 'src/dist'
    rm_rf 'src/_data/manifest.yml'
    rm_rf 'build/content'
  end

  namespace :docs do
    desc "Lint all documentation"
    task :lint => [:'dependencies:install'] do
      sh('npm', 'run', 'docs:lint')
    end

    desc "Lint & fix all documentation"
    task :lint_fix => [:'dependencies:install'] do
      sh('npm', 'run', 'docs:lint-fix')
    end

    desc "Format all documentation"
    task :format => [:'dependencies:install'] do
      sh('npm', 'run', 'docs:format')
    end

    desc "Format & fix all documentation"
    task :format_fix => [:'dependencies:install'] do
      sh('npm', 'run', 'docs:format-fix')
    end
  end

  namespace :webpack do
    desc 'Build webpack content for deployment identifier, by default ' +
           'bsn-local-default'
    task :build, [
      :deployment_type,
      :deployment_label
    ] => [:'dependencies:install'] do |_, args|
      default_deployment_identifier(args)

      configuration = configuration.for_scope(args.to_h)

      environment = configuration.environment
      content_work_directory = configuration.content_work_directory

      sh({
           "NODE_ENV" => environment
         }, "npx", "webpack",
         "--config", "config/webpack/webpack.#{environment}.js",
         "--env", environment,
         "--env", "CONTENT_WORK_DIRECTORY=#{content_work_directory}",
         "--progress",
         "--color")
    end

    desc 'Run webpack on change for deployment identifier, by default ' +
           'bsn-local-default'
    task :serve, [
      :deployment_type,
      :deployment_label
    ] => [:'dependencies:install'] do |_, args|
      default_deployment_identifier(args)

      configuration = configuration.for_scope(args.to_h)

      environment = configuration.environment
      content_work_directory = configuration.content_work_directory

      sh({
           "NODE_ENV" => environment
         }, "npx", "webpack",
         "--config", "config/webpack/webpack.#{environment}.js",
         "--env", environment,
         "--env", "CONTENT_WORK_DIRECTORY=#{content_work_directory}",
         "--progress",
         "--color",
         "--watch")
    end
  end

  namespace :jekyll do
    desc 'Build jekyll content for deployment identifier, by default ' +
           'bsn-local-default'
    task :build, [
      :deployment_type,
      :deployment_label
    ] => [:'dependencies:install'] do |_, args|
      default_deployment_identifier(args)

      configuration = configuration.for_scope(args.to_h)

      environment = configuration.environment
      deployment_identifier = configuration.deployment_identifier
      content_work_directory = configuration.content_work_directory

      sh({
           "JEKYLL_ENV" => environment
         }, "jekyll", "build",
         "-s", "src",
         "-c", "config/jekyll/defaults.yaml,config/jekyll/#{deployment_identifier}.yaml",
         "-d", content_work_directory)
    end

    desc 'Serve jekyll website on localhost:4000 for deployment identifier, ' +
           'by default bsn-local-default'
    task :serve, [
      :deployment_type,
      :deployment_label
    ] => [:'dependencies:install'] do |_, args|
      default_deployment_identifier(args)

      configuration = configuration.for_scope(args.to_h)

      environment = configuration.environment
      deployment_identifier = configuration.deployment_identifier
      content_work_directory = configuration.content_work_directory

      sh({
           "JEKYLL_ENV" => environment
         }, "jekyll", "serve",
         "-s", "src",
         "-c", "config/jekyll/defaults.yaml,config/jekyll/#{deployment_identifier}.yaml",
         "-d", content_work_directory,
         "-l")
    end
  end

  desc 'Build content for deployment identifier, by default ' +
         'bsn-local-default'
  task :build, [
    :deployment_type,
    :deployment_label
  ] => [:clean] do |_, args|
    default_deployment_identifier(args)

    Rake::Task[:'content:webpack:build'].invoke(*args)
    Rake::Task[:'content:jekyll:build'].invoke(*args)
  end

  desc 'Publish content for deployment identifier'
  task :publish, [
    :deployment_type,
    :deployment_label
  ] do |_, args|
    configuration = configuration
      .for_scope(args.to_h.merge(role: 'website'))

    region = configuration.region
    max_ages = configuration.max_ages
    content_work_directory = configuration.content_work_directory
    bucket = configuration.website_bucket_name

    s3sync = S3Website.new(
      region: region,
      bucket: bucket,
      max_ages: max_ages)

    s3sync.publish_from(content_work_directory)
  end

  desc 'Invalidate content caches for deployment identifier'
  task :invalidate, [
    :deployment_type,
    :deployment_label
  ] => [:'terraform:ensure'] do |_, args|
    configuration = configuration
      .for_scope(args.to_h.merge(role: 'website'))

    region = configuration.region
    backend_config = configuration.backend_config

    distribution_id = JSON.parse(
      RubyTerraform::Output.for(
        name: 'cdn_id',
        source_directory: 'infra/website',
        work_directory: 'build',
        backend_config: backend_config))

    cloudfront = Aws::CloudFront::Client.new(region: region)

    cloudfront.create_invalidation(
      distribution_id: distribution_id,
      invalidation_batch: {
        caller_reference: SecureRandom.uuid,
        paths: {
          quantity: 1,
          items: ['/*'],
        }
      })
  end

  task :deploy, [
    :deployment_type,
    :deployment_label
  ] => [:'terraform:ensure'] do |_, args|
    Rake::Task['content:build'].invoke(*args)
    Rake::Task['content:publish'].invoke(*args)
    Rake::Task['content:invalidate'].invoke(*args)
  end
end

namespace :ci do
  RakeFly.define_authentication_tasks(
    namespace: :authentication,
    argument_names: [
      :ci_deployment_type,
      :ci_deployment_label
    ]) do |t, args|
    configuration = configuration
      .for_scope(args.to_h)

    t.target = configuration.concourse_team
    t.concourse_url = configuration.concourse_url
    t.team = configuration.concourse_team
    t.username = configuration.concourse_username
    t.password = configuration.concourse_password

    t.home_directory = 'build/fly'
  end

  namespace :pipeline do
    RakeFly.define_pipeline_tasks(
      namespace: :main,
      argument_names: [
        :ci_deployment_type,
        :ci_deployment_label
      ]
    ) do |t, args|
      configuration = configuration
        .for_scope(args.to_h.merge(role: 'main-pipeline'))
      ci_deployment_type = configuration.ci_deployment_identifier

      t.target = configuration.concourse_team
      t.team = configuration.concourse_team
      t.pipeline = "docs-website-main"

      t.config = 'pipelines/main/pipeline.yaml'

      t.vars = configuration.vars
      t.var_files = [
        'config/secrets/pipeline/constants.yaml',
        "config/secrets/pipeline/#{ci_deployment_type}.yaml"
      ]

      t.non_interactive = true
      t.home_directory = 'build/fly'
    end

    RakeFly.define_pipeline_tasks(
      namespace: :builder,
      argument_names: [
        :ci_deployment_type,
        :ci_deployment_label]
    ) do |t, args|
      configuration = configuration
        .for_scope(args.to_h.merge(role: 'builder-pipeline'))
      ci_deployment_type = configuration.ci_deployment_identifier

      t.target = configuration.concourse_team
      t.team = configuration.concourse_team
      t.pipeline = "docs-website-builder"

      t.config = 'pipelines/builder/pipeline.yaml'

      t.vars = configuration.vars
      t.var_files = [
        'config/secrets/pipeline/constants.yaml',
        "config/secrets/pipeline/#{ci_deployment_type}.yaml"
      ]

      t.non_interactive = true
      t.home_directory = 'build/fly'
    end

    namespace :pr do
      RakeFly.define_pipeline_tasks(
        argument_names: [
          :ci_deployment_type,
          :ci_deployment_label,
          :branch
        ]
      ) do |t, args|
        branch = args.branch || pr_metadata_branch

        configuration = configuration
          .for_scope(args.to_h.merge(role: 'pr-pipeline'))
          .for_overrides(source_repository_branch: branch)

        ci_deployment_type = configuration.ci_deployment_identifier

        t.target = configuration.concourse_team
        t.team = configuration.concourse_team
        t.pipeline = "docs-website-pr-#{to_pipeline_name(branch)}"

        t.config = 'pipelines/pr/pipeline.yaml'

        t.vars = configuration.vars
        t.var_files = [
          'config/secrets/pipeline/constants.yaml',
          "config/secrets/pipeline/#{ci_deployment_type}.yaml"
        ]

        t.non_interactive = true
        t.home_directory = 'build/fly'
      end

      task :handle, [
        :ci_deployment_type,
        :ci_deployment_label,
        :branch,
        :state
      ] do |_, args|
        branch = args.branch || pr_metadata_branch
        state = args.state || pr_metadata_state

        if state == "OPEN"
          Rake::Task[:"ci:pipeline:pr:push"].invoke(
            args.ci_deployment_type,
            args.ci_deployment_label,
            branch)
        else
          Rake::Task[:"ci:pipeline:pr:destroy"].invoke(
            args.ci_deployment_type,
            args.ci_deployment_label,
            branch)
        end
      end
    end
  end

  namespace :pipelines do
    desc "Push all pipelines"
    task :push, [:ci_deployment_type, :ci_deployment_label] do |_, args|
      Rake::Task[:"ci:pipeline:main:push"].invoke(*args)
      Rake::Task[:"ci:pipeline:builder:push"].invoke(*args)
    end
  end
end

def pr_metadata_value(key)
  File.exist?(".git/resource/#{key}") ?
    File.read(".git/resource/#{key}") :
    nil
end

def pr_metadata_branch
  pr_metadata_value("head_name")
end

def pr_metadata_state
  pr_metadata_value("state")
end

def to_pipeline_name(string)
  string.gsub(/[^a-zA-Z0-9_-]/, "_")
end

def default_deployment_identifier(args)
  args.with_defaults(
    deployment_type: "bsn-local",
    deployment_label: "default")
end