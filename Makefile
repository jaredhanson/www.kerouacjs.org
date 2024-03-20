all: html css

html: _site node_modules
	node site

css: _site node_modules
	npx tailwindcss -i ./stylesheets/default.css -o ./_site/assets/stylesheets/default.css

_site:
	git worktree add -B gh-pages _site origin/gh-pages

node_modules:
	npm install

clean:
	-rm -rf _site
	-git worktree remove _site

distclean: clean
	-rm -rf node_modules

.PHONY: html css clean distclean
