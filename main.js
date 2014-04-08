(function() {
  var path = require('path'),
      fs   = require('fs'),
      Template = require(__dirname + path.sep + 'template.js');

  var _basepath_ = 'dummy-base-path',
      _tests_ = 'dummy-tests-path';

  var configs = (new Template())
    .fill('profile-debug/webapps/webapps.json',
          [__dirname, 'templates', 'profile-debug', 'webapps', 'webapps.json']
            .join(path.sep),
          [__dirname, 'configs', 'profile-debug', 'webapps', 'webapps.json']
            .join(path.sep),
          {'_basepath_': _basepath_}
          )
    .fill('test-agent/config.json',
          [__dirname, 'templates', 'test-agent', 'config.json']
            .join(path.sep),
          [__dirname, 'configs', 'test-agent', 'config.json']
            .join(path.sep),
          {'_tests_': _tests_}
          )
    .done();

    Object.keys(configs).forEach(function(id) {
      fs.writeFileSync(configs[id].path, configs[id].result);
    });
})();
