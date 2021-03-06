// TODO: refactor out / remove this entire file

var config = require('../../../config');

module['exports'] = function attemptToRequireUntrustedHook (opts, cb) {

  var username = opts.owner || opts.req.hook.owner,
      userHome = config.tempDirectory +  username + "/" + opts.req.hook.name + "/",
      script = opts.script;

  var req = opts.req, res = opts.res;

  var h = req.hook;
  var code = h.source;
  if (typeof h.language !== "undefined" && h.language !== "javascript") {
    // do not attempt to require non-js functions ( for now )
    return cb(null, {
      exports: code,
      schema: {}
    });
  }

  if (typeof code === "undefined") {
    return res.end('Error: Unable to load undefined hook source. We made a mistake. Please contact support.');
  }

  // As per https://github.com/bigcompany/hook.io/issues/136, as FS access is removed from worker
  // Instead of loading the code from an additional async source, we now assume that the
  // source has already been loaded on the couchdb document

  // TODO: for cached hook, see if the hook exists in the module cache already,
  // we might be able to shave a millisecond or two off here.
  //var id = new Date().getTime();
  var m;
  // console.log('about to compile', code)
  try {
    var Module = module.constructor;
    m = new Module();
    var name = 'hook-service-' + h.owner + "-" + h.name;
    m.id = name;
    delete require.cache[name];
    m.paths = module.paths;
    m._compile(code, name);
    // Note: new Function () could also work, but it wraps source in a "function anonymous()" scope, which is not ideal
    //m = new Function(code);
  } catch (err) {
    // console.log('err', err)
    return cb(err);
  }
  m.originalSource = code;
  return cb(null, m);

};