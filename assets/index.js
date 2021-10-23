const minify = require('@node-minify/core');
const uglifyjs = require('@node-minify/uglify-js');
const cleanCSS = require('@node-minify/clean-css');
const noCompress = require('@node-minify/no-compress');

minify({
  compressor: uglifyjs,
  input: 'js/custom.js',
  output: 'js/custom.min.js',
  callback: function(err, min) {
    if(err === null) {
      console.log('Custom JS minification completed.');
    } else {
      console.log('Custom JS Minify Error: ' + err);
    }
  }
});

minify({
  compressor: cleanCSS,
  input: 'css/style.css',
  output: 'css/style.min.css',
  callback: function(err, min) {
    if(err === null) {
      console.log('CSS minification completed.');
    } else {
      console.log('CSS Minify Error: ' + err);
    }
  }
});

minify({
  compressor: noCompress,
  input: ['js/jquery.min.js', 'js/popper.min.js', 'js/bootstrap.min.js', 'js/mdb.min.js', 'js/owl.carousel.min.js', 'js/custom.min.js'],
  output: 'js/animedh.min.js',
  callback: function(err, min) {
    if(err === null) {
      console.log('animedh noCompress js concat completed.');
    } else {
      console.log('animedh noCompress js concat Error: ' + err);
    }
  }
});

minify({
  compressor: noCompress,
  input: ['css/bootstrap.min.css', 'css/mdb.min.css', 'css/owl.carousel.min.css', 'css/style.min.css'],
  output: 'css/animedh.min.css',
  callback: function(err, min) {
    if(err === null) {
      console.log('animedh noCompress css concat completed.');
    } else {
      console.log('animedh noCompress css concat Error: ' + err);
    }
  }
});