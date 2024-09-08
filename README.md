# Doodle: A [Jekyll](https://jekyllrb.com/) blog theme for a playful and creative aesthetic

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [remote-themes](#remote-themes)
  - [Alternate Method](#alternate-method)
- [Usage](#usage)
  - [Pin a post](#pin-a-post)
  - [Add tagline in header](#add-tagline-in-header)
  - [Google analytics](#google-analytics)
  - [Adding icons to naviagtion links](#adding-icons-to-naviagtion-links)
  - [Setting default color scheme](#set-default-color-scheme)
- [Contributing](#contributing)
- [License](#license)

## Features

- dark mode
- 5 color schemes
- pinned posts
- handwriting fonts
- google analytics support

You can preview the theme [here](https://gulnoor.github.io)
| | |
| ----------------------- | ----------------------- |
| ![GitHub](/etc/ss1.png) | ![GitHub](/etc/ss2.png) |

## Installation

### remote-themes

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

### Alternate Method

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

### Set default color scheme

add the color_scheme property to \_config.yml. in the format `[light/dark]-[color]` e.g.

```yaml
color_scheme: light-green
```

following colors are available: green, blue, pink, yellow, cyan

### Add tagline in header

To add a tagline/description below the site title, add a tagline property to \_config.yml

```yaml
tagline: "Your awesome tagline"
```

### Google analytics

just add your google analytics tracking id to \_config.yml

```yaml
google_analytics: UA-NNNNNNNN-N
```

### Adding icons to naviagtion links

add the icon path to the page front matter e.g

```yaml
---
layout: page
title: "About"
permalink: /about/
icon: "/assets/icons/about.svg"
---
```

## TODO

- [ ] Add support for comments
- [ ] Search functionality
- [ ] automatic table of contents generation (button in mobile view/ sidebar in desktop view)
- [ ] scroll progress indicator

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/gulnoor/jekyll-theme-doodle

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
