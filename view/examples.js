
module['exports'] = function (opts, callback) {
  var hook = require('../lib/resources/hook');
  //return opts.res.end('fml');
  var $ = this.$, req = opts.req, res = opts.res;
  var appName = req.hostname;

  hook.find({ owner: "examples" }, function (err, results){
    if (err) {
      return res.end(err.message);
    }

    var grouped = {};
    results.forEach(function(h) {
      h.language = h.language || "javascript";
      grouped[h.language] = grouped[h.language] || [];
      grouped[h.language].push(h);
    });

    Object.keys(grouped).forEach(function(key){
      // group headers per language
      $('.examples').append('<a name="' + key + '"></a>');
      $('.examples').append('<h3>' + key + '</h3>');

      // update side menu
      $('.langMenu').append('<li><a href="#' + key + '">' + key + '</a> </li>');

      grouped[key].forEach(function(h){
        // TODO: add description of hook with h.description ( data is missing for most examples )
        var serviceLink = '{{appUrl}}/examples/' + h.name + '';
        $('.examples').append('<a href="' + serviceLink + '/_src"><span title="View Source" class="forkBtn octicon octicon-file-code"></span></a>&nbsp;<a href="' + serviceLink + '/fork"><span title="Fork Service" class="forkBtn octicon octicon-repo-forked"></span></a> <a href="' + serviceLink + '">' + h.name + '</a><br/>')
      });
      $('.examples').append('<br/>');
      // TODO: group by language type
      // if (h.name.search(/examples-/) !== -1) {
        // $('.examples').append('<a href="{{appUrl}}/examples/' + h.name + '">' + h.name + '</a><br/>')
      // }
    });

    $ = req.white($);
    return callback(null, $.html());

  });

};