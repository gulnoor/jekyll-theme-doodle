# Jekyll Theme Doodle: for a playful and creative aesthetic

Dark theme for [Jekyll](https://jekyllrb.com/) blogs with handwriting fonts and 5 color schemes.

You can preview the theme [here](https://gulnoor.github.io)
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
remote_theme: "gulnoor/jekyll-theme-doodle"
```

- Remove any other theme: or remote_theme: entry.

## Alternate Method

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-doodle"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-doodle
```

And then execute:

```bash
$ bundle
```

Or install it yourself as:

```bash
$ gem install jekyll-theme-doodle
```

## Usage

### Pin a post

To pin a post add `status: pinned` to the front matter of the post markdown file e.g

```yaml
---
layout: post
title: "Welcome to Jekyll!"
status: pinned
---
<!-- post content -->
```

### Add tagline in header

To add a tagline/description below the site title, add a tagline property to \_config.yml

```yaml
tagline: "Your awesome tagline"
```

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

### TODO

- [ ] Analytics support
- [ ] Add support for comments
- [ ] Search functionality

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/gulnoor/jekyll-theme-doodle

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
