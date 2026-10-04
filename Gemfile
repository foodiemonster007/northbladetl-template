source "https://rubygems.org"

# Core Jekyll engine
gem "jekyll"
gem "webrick", "~> 1.8"
gem "logger"

# Your site's plugins
group :jekyll_plugins do
  gem "jekyll-sitemap"
end

# Windows-specific gems
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "wdm"
end
