all: html css

html:
	node site

css:
	npx tailwindcss -i ./stylesheets/default.css -o ./dist/assets/stylesheets/default.css
