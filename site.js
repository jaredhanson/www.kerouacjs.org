var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://kerouacjs.org/');
site.set('output', 'dist');

site.engine('ejs', require('ejs'));

site.content('content');

//site.plug(require('kerouac-sitemap')());
//site.plug(require('kerouac-robotstxt')());


site.generate(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});
