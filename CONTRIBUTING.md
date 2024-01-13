# Contributing to www.kerouacjs.org

## Development

### Getting Started

This site is statically generated using [Kerouac.js](https://github.com/jaredhanson/kerouac).

To build this site, you'll need a working development environment with [Node.js](https://nodejs.org/)
and [Git](https://git-scm.com/).  Once these tools are set up, you can build
this site by executing the following commands:

```sh
git clone https://github.com/jaredhanson/www.kerouacjs.org
cd www.kerouacjs.org
make
```

### Architecture

The architecture of this site is simple: it is a static site consisting of HTML,
CSS, and (minimal) JavaScript.  Toolchain choices tend to favor staying as close
to web standards and Node.js conventions as possible, minimizing the need for
frameworks and dependencies.

HTML is generated using [Kerouac.js](https://github.com/jaredhanson/kerouac).
The development workflow for this site is optimized for writing documentation,
articles, and other content.  Content is authored in [Markdown](https://daringfireball.net/projects/markdown/),
an easy-to-read, easy-to-write plain text format.  It is converted to HTML with
layouts using [EJS](https://ejs.co/) as a template language.  EJS allows
templates to be developed directly using HTML.

CSS is generated using [Tailwind CSS](https://tailwindcss.com/).  Tailwind was
chosen primarily due to the well-designed templates and components available
from [Tailwind UI](https://tailwindui.com/).  The templates provide a starting
point for a complete website, while also being easy to customize without needing
to tinker with perplexing CSS rules.

