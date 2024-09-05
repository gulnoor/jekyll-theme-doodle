# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-doodle"
  spec.version       = "5.1.0"
  spec.authors       = ["Gul Noor"]
  spec.email         = ["gulnoor5233@gmail.com"]

  spec.summary       = "Dark theme for a playful and creative aesthetic"
  spec.homepage      = "https://github.com/gulnoor/jekyll-theme-handwritten"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.required_ruby_version = ">= 2.4.0"

  spec.add_dependency "jekyll", "> 3.5", "< 5.0"
  # spec.add_runtime_dependency "jekyll-github-metadata", "~> 2.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
end
