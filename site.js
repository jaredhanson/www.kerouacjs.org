var kerouac = require('kerouac');
var book = require('kerouac-book');
// TODO: kerouac-cname

var site = kerouac();
site.set('base url', 'https://www.kerouacjs.org');
//site.set('output', 'dist');

//site.engine('ejs', require('ejs'));

site.use('/tutorials/quickstart', book('docs/tutorials/quickstart'));
site.use(kerouac.content('content'));

site.page('/CNAME', require('kerouac-cname')());
//site.plug(require('kerouac-sitemap')());
//site.plug(require('kerouac-robotstxt')());


site.generate(
  {
    '/': [
      kerouac.content.createMapper(),
    ],
    '/tutorials/quickstart': book.createMapper('docs/tutorials/quickstart'),
  },
  function(err) {
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
  });
