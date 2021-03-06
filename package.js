Package.describe({
  name: 'lmachens:subs-cache',
  summary: 'A package for caching Meteor subscriptions.',
  version: '0.9.7',
  git: 'https://github.com/ccorcos/meteor-subs-cache'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6.1');

  api.use([
    'ecmascript@0.8.3',
    'underscore',
    'ejson',
    'tracker',
    'reactive-var'
  ], ['client', 'server']);

  api.addFiles([
    'src/SubsCache.js',
  ], ['client','server']);

  api.export("SubsCache", ['client','server']);
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'ecmascript',
    'ejson',
    'tracker',
    'reactive-var',
    'practicalmeteor:chai',
    'cultofcoders:mocha',
    'lmachens:subs-cache'
	], ['client', 'server']);
  api.mainModule('src/SubsCache.tests.js');
});
