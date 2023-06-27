---
title: Activity scripts
updated: 2021-06-03
---

**Last updated 3rd June 2021**


## Objective  

Web PaaS supports custom scripts that can fire in response to any activity.  These scripts allow you to take arbitrary actions in response to actions in your project, such as when it deploys, when a new branch is created, etc. 

Check out examples from other users on our [Community site.](https://community.platform.sh/c/activity-scripts)

A legacy integration is also available for [HipChat](/pages/web/web-paas/integrations-activity/hipchat).

## Installing

Activity scripts are configured as integrations.  That means they are at the *project level*, not at the level of an individual environment.  While you can store the scripts in your Git repository for easy access, they will have no effect there.

To install a new activity script, use the [Web PaaS CLI](/pages/web/web-paas/development-cli).

```bash
webpaas integration:add --type script --file ./my_script.js
```

That will install and enable the `my_script.js` file as an activity script on the current project.  You can get its ID by listing the integrations on the current project:

```bash
webpaas integrations

+---------------+--------------+--------------+
| ID            | Type         | Summary      |
+---------------+--------------+--------------+
| nadbowmhd67do | script       | ...          |
| rcqf6b69jdcx6 | health.email | From:        |
|               |              | To: #admins  |
+---------------+--------------+--------------+
```

The just-installed script's ID in this example is `nadbowmhd67do`.

Do not run the `integration:add` command a second time, or it will install a second integration that happens to have the same code.

## Updating

To update an existing activity script, use the `integration:update` command.  You will need the ID of the integration to update (as above).

```bash
webpaas integration:update --file ./my_script.js nadbowmhd67do
```

That will update the integration in place, permanently overwriting the previous version.

> [!primary]  
> To test an Activity Script update, a redeployment can be triggered using the CLI:
> ```bash
> webpaas redeploy
> ```
> 

## Removing

To disable an activity script, use the `integration:delete` command:

```bash
webpaas integration:delete nadbowmhd67do
```

## Debugging

Activity logs are available through their own CLI command, `webpaas integration:activities`.  Every time your activity script runs it will generate a new log entry, including the output from the script.  Any output produced by `console.log` will be available in the activity log, and that is the recommended way to debug scripts.

See the [activity log](/pages/web/web-paas/integrations-overview#debugging-integrations) documentation for further details.

To get a more readable output of a variable you're trying to debug, you can make `JSON.stringify` use human-friendly formatting.

```javascript
console.log(JSON.stringify(project, null, 2));
```

## Configuring scripts

There are many types of activity to which a script could respond.  By default, it will activate only after a successful `git push` operation.  That trigger is configurable via command line switches when adding or updating a script.

For example, to have a script trigger any time an environment is activated or deactivated, you would run:

```bash
webpaas integration:update --events='environment.activate, environment.deactivate' nadbowmhd67do
```

A complete list of possible events is available in the [webhook documentation](/pages/web/web-paas/integrations-activity/reference).

Scripts can also trigger only when an action reaches a given state, such as "pending", "in_progress", or "complete".  The default is only when they reach "complete".  To have a script execute when a synchronize action first starts, for example, you would run:

```bash
webpaas integration:update --events=environment.synchronize --states=in_progress nadbowmhd67do
```

It is also possible to restrict scripts to certain environments by name.  Most commonly that is used to have them execute only for the `master` environment, or for all environments except `master`.

The following example executes only for backup actions on the `master` environment:

```bash
webpaas integration:update --events=environment.backup --environments=master nadbowmhd67do
```

There is also an `--exclude-environments` switch to excluded environments by name rather than allow.

As a general rule, it is better to have an activity script only execute on the specific events and branches you're interested in rather than firing on all activities and then filtering out undesired use cases in the script itself.

## Available APIs

Activity scripts can be written in ES2021 and do not support installing additional packages. We provide a series of [utility functions you can reuse](/pages/web/web-paas/integrations-activity/utility) as well as the following libraries, APIs, and global variables to facilitate building out custom functionality.

### `underscore.js`

Underscore.js 1.9.2 is available out-of-the-box to make writing Activity scripts more pleasant.  See [Underscore's documentation](https://cdn.rawgit.com/jashkenas/underscore/1.9.2/index.html) for available functions and utilities.

### `activity`

Every activity script has a global variable `activity` that contains detailed information about the activity, including embedded, JSON-ified versions of the routes configuration and relevant `.platform.app.yaml` files.  The `activity` variable is the same as the [webhook payload](/pages/web/web-paas/integrations-activity/webhooks).  See the documentation there for details and a complete example.

Several of the utility functions below work by pulling out common portions of the `activity` object.  Most notably, scripts can be configured via [Project-level variables](/pages/web/web-paas/development-variables#project-variables) that can be accessed from the `activity` object.

### `project`

The `project` global variable includes information about the project subscription itself.  That includes its ID and name, how many users are associated with the project, it's SSH public key and various other values.  An example of this object is below:

```json
{
  "attributes": {},
  "created_at": "2020-04-15T19:50:09.514267+00:00",
  "default_domain": null,
  "description": "",
  "id": "kpyhl5f8nuzef",
  "owner": "...",
  "region": "eu-3.platform.sh",
  "repository": {
    "client_ssh_key": "ssh-rsa ...",
    "url": "kqyhl5f5nuzky@git.eu-3.platform.sh:kqyhl5f5nuzky.git"
  },
  "status": {
    "code": "provisioned",
    "message": "ok"
  },
  "subscription": {
    "environments": 3,
    "included_users": 1,
    "license_uri": "...",
    "plan": "development",
    "restricted": false,
    "storage": 5120,
    "subscription_management_uri": "...",
    "suspended": false,
    "user_licenses": 1
  },
  "timezone": "Europe/Dublin",
  "title": "Activity script examples",
  "updated_at": "2020-04-21T17:15:35.526498+00:00"
}
```

### Storage API

Activity scripts have access to a limited key/value storage API to persist values from one execution to another.  The API is similar to the Javascript `LocalStorage` API.

```javascript
// Access the storage API.  It is not pre-required.
var storage = require("storage");

// Retrieve a stored value. If the value is not set it will return null.
var counter = storage.get('counter') || 0;

if (counter) {
    // Generate debug output.
    console.log("Counter is: " + counter);
}

// Write a value into the storage. Only string-safe values are supported.
// To save an object or array, run JSON.stringify() on it first.
storage.set('counter', counter + 1);

// Remove a value completely.
storage.remove('counter');

// Remove all values in storage, unconditionally.
storage.clear();
```

### Fetch API

Activity scripts support a modified version of the browser "Fetch API" for issuing HTTP requests.  Unlike the typical browser version, however, they only support synchronous requests.  That means the return value of `fetch()` is a `Response`, not a `Promise` for one. The returned `Response` is also a bit different: only the `ok`, `status` and `statusText` properties, as well as the `text` and `json` methods are available. Note that because of the synchronous nature of our `fetch` implementation, the `Response.text` and `Response.json` methods are also synchronous, so they will directly return a `string` and an `object`, respectively. The API is otherwise essentially the same as that [documented by Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

For instance, this example sends a GET request every time it executes:

```javascript
var resp = fetch("http://example.com/site-deployed");

// The fetch call above being synchronous, we can directly access resp properties.
// resp.ok is true if the response was a 2xx, false otherwise.
if (!resp.ok) {
    console.log("Well that didn't work.");
}
```

While this example sends a POST request with a JSON string as the body:

```javascript
var body = JSON.stringify({
  "some": "value",
});

var resp = fetch("http://example.com/", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: body,
  }
)
if (!resp.ok) {
    console.log("Couldn't POST.");
} else {
  // resp.json() is synchronous so this will log an object, not `Promise { <pending> }`
  console.log(resp.json());
}
```

See the Mozilla Dev Network link above for more `fetch()` options.

### Cryptographic API

A minimalist cryptographic API is also available to activity scripts.  Its main use is for signing requests to 3rd party APIs.

The `crypto.createHmac()` function allows you to create a secure HMAC hash and digest.

```javascript
var h = crypto.createHmac("sha256", "foo");
h.update("bar");
h.digest("hex")
```

* The available hashing functions are `'sha256'`, `'sha1'` and `'md5'` as hashing functions.
* The available digest formats are `'base64'`, `'hex'` or `''` (empty).  An empty digest will yield a byte string.


