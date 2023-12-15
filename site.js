var kerouac = require('kerouac');
// TODO: kerouac-cname

var site = kerouac();
site.set('base url', 'https://www.kerouacjs.org');
site.set('output', 'dist');

//site.engine('ejs', require('ejs'));

site.use(kerouac.content('content'));

//site.plug(require('kerouac-sitemap')());
//site.plug(require('kerouac-robotstxt')());


site.generate(
  {
    '/': [
      kerouac.content.createMapper(),
    ]
  },
  function(err) {
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
  });
