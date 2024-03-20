all: html css

html: node_modules _site
	node site

css: node_modules _site
	npx tailwindcss -i ./stylesheets/default.css -o ./_site/assets/stylesheets/default.css

node_modules:
	npm install

_site:
	git worktree add -B gh-pages _site origin/gh-pages
