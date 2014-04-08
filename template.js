(function() {
  var Template = function() {
    this.results = {};
  };
  Template.prototype.fill = function(id, templatePath, resultPath, vars) {
    var _  = require('underscore'),
        fs = require('fs'),
        templateStr = fs.readFileSync(templatePath).toString();

    this.results[id] = {
      'result': _.template(templateStr)(vars),
      'path': resultPath
    };
    return this;
  };

  Template.prototype.done = function() {
    return this.results;
  };

  module.exports = Template;
})();
