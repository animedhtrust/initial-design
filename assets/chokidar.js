var childProcess = require('child_process');
var chokidar = require('chokidar');

function runScript(scriptPath, callback) {
  var invoked = false;
  var process = childProcess.fork(scriptPath);
  process.on('error', function (err) {
    if (invoked) return;
    invoked = true;
    callback(err);
  });
  process.on('exit', function (code) {
    if (invoked) return;
    invoked = true;
    var err = code === 0 ? null : new Error('exit code ' + code);
    callback(err);
  });
}

var watcher = chokidar.watch(['js/custom.js','css/style.css'], {
  ignored: /[\/\\]\./, persistent: true
});

watcher.on('change', function(path, stats) {
  console.log("\nFile", path, 'changed');
  runScript('./index.js', function (err) {
    if (err) throw err;
    console.log('finished running animedh@1.0.0');
  });
});

