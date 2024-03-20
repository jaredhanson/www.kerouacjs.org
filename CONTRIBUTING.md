# Contributing to www.kerouacjs.org

## Getting Started

This site is statically generated using [Kerouac.js](https://github.com/jaredhanson/kerouac).

To build this site, you'll need a working development environment with [Node.js](https://nodejs.org/)
and [Git](https://git-scm.com/).  Once these tools are set up, you can build
this site by executing the following commands:

```sh
git clone https://github.com/jaredhanson/www.kerouacjs.org
cd www.kerouacjs.org
make
```

## Development

#### Source Control

This repository has two independent commit histories.  The first, on the
`master` branch, contains the source code used to generate the site.  The
second, on the `gh-pages` branch, contains the generated site.  The `gh-pages`
branch is configured as the [publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

To track these two histories from within the same repository, a working tree
that tracks the `gh-pages` branch is added at path `_site`.

```sh
$ git worktree add -B gh-pages _site origin/gh-pages
```

> [!NOTE]  
> It is not necessary to manually add a working tree at `_site`.  The worktree
> is added automatically by `make` targets.

This path is where he generated site will be written.  Changes to the site can
be inspected within its working tree.

```sh
cd _site
git diff
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

Once generated, this site is hosted by [GitHub Pages](https://pages.github.com).

## Operations

This site is hosted by [GitHub Pages](https://pages.github.com/).  GitHub Pages
is a static site hosting service that serves files from a repository on [GitHub](https://github.com/).

### Domain

GitHub Pages is configured to serve this site at the custom domain
`www.kerouacjs.org`.

To use `www` as the subdomain, a [CNAME record has been configured](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)
at [Porkbun](https://porkbun.com/), the DNS host for `kerouacjs.org`.
The [apex domain has also been configured](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
with `A` and `AAAA` records.  GitHub Pages [automatically redirects](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain-and-the-www-subdomain-variant)
requests sent to `kerouacjs.org` to `www.kerouacjs.org`.

### Deploy

This site is deployed using GitHub Pages.  The `gh-pages` branch is [configured
as the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
for the site.  Whenever changes are pushed to that source branch, they will be
published to the site.

#### Initialization

The `gh-pages` branch was initialized using the following commands:

```sh
$ git checkout --orphan gh-pages
$ git reset --hard
$ git commit --allow-empty -m "Initializing gh-pages branch"
$ git push origin gh-pages
```

The first command, `git checkout --orphan gh-pages`, creates a new branch with a
new history.  The working directory still contains the source files used to build
the site, however.  The second command, `git reset --hard`, resets the working
tree, removing the source files from the directory.  At this point, an empty
commit is recorded to initialize the branch, and the branch is pushed to GitHub.

Once the publishing source branch has been pushed to GitHub, switch back to the
main development branch.

```sh
$ git checkout master
```

#### Publish

Push changes from the `gh-pages` branch of the local repository to the remote
repository at GitHub.

```sh
git push origin gh-pages
```

Once pushed, the site will be published to GitHub Pages.
