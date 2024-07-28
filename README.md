# Dark Theme for Jekyll Blogs

Dark theme for [Jekyll](https://jekyllrb.com/) blogs with handwriting fonts and 5 color schemes.
| | |
| ----------------------- | ----------------------- |
| ![GitHub](/etc/ss1.png) | ![GitHub](/etc/ss2.png) |

## Installation

if you are using github pages, the recommended method is following:

- Add following lines to your `Gemfile`:

```ruby
source "https://rubygems.org"

gem "github-pages", "~> 231", group: :jekyll_plugins
gem "jekyll-include-cache", group: :jekyll_plugins
```

- Add jekyll-include-cache to the plugins array of your `_config.yml`

```yaml
plugins:
  - jekyll-include-cache
```

- And then execute this command in shell:

```bash
$ bundle
```

- Add this your `_config.yml` file.

```yml
remote_theme: "gulnoor/jekyll-theme-handwritten"
```

- Remove any other theme: or remote_theme: entry.

## Alternate Method

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-handwritten"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-handwritten
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-handwritten

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

### TODO

- [ ] Add support for comments
- [ ] Search functionality

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/gulnoor/jekyll-theme-handwritten

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
