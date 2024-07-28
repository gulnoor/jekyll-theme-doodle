# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "dark-blog-theme"
  spec.version       = "4.0.0"
  spec.authors       = ["Gul Noor"]
  spec.email         = ["gulnoor5233@gmail.com"]

  spec.summary       = "Modern Dark theme for blogs"
  spec.homepage      = "https://github.com/gulnoor/jekyll-blog-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  # spec.add_runtime_dependency "jekyll", "~> 4.3"
end
