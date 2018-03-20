# 0.9.5

Fixed Meteor 1.6.1 test dependencies.
Fix infinite expiration, cache replacement policy, debug messages [#46](https://github.com/ccorcos/meteor-subs-cache/pull/46)

# 0.9.4

Added missing test dependencies.  
Allow multiple subscription with same name [#44](https://github.com/ccorcos/meteor-subs-cache/issues/44)

# 0.1.0

Using onInvalidate instead of onStop because it makes much more sense. Suppose you have a global subscription like this:

```coffee
Tracker.autorun ->
  subsCache.subscribe('post', Session.get('postId'))
```

We want the `delayedStop` to start whenever this computation is rerun, not when its stopped because it will never be stopped during the lifetime of the app.

# 0.0.3

Error if you didnt pass an object!

# 0.0.2

Added onReady callbacks. Also forgot the reactive-var dependency