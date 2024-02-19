all: html css

html: node_modules
	node site

css: node_modules
	npx tailwindcss -i ./stylesheets/default.css -o ./_site/assets/stylesheets/default.css

node_modules:
	npm install
