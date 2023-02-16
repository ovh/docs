---
title: Redirects
slug: redirects
section: Routes
updated: 2021-03-26
---

**Last updated 26th March 2021**


## Objective  

Managing redirection rules is a common requirement for web applications, especially in cases where you do not want to lose incoming links that have changed or been removed over time.

You can manage redirection rules on your Web PaaS projects in two different ways, which we describe here. If neither of these options satisfy your redirection needs, you can still implement redirects directly from within your application, which if implemented with the appropriate caching headers would be almost as efficient as using the configuration options provided by Web PaaS.

## Whole-route redirects

Using whole-route redirects, you can define very basic routes in your [`.platform/routes.yaml`](../) file whose sole purpose is to redirect. A typical use case for this type of route is adding or removing a `www.` prefix to your domain, as the following example shows:

```yaml
https://{default}/:
    type: redirect
    to: https://www.{default}/
```

## Partial redirects

In the [`.platform/routes.yaml`](../) file you can also add partial redirect rules to existing routes:

```yaml
https://{default}/:
  # ...
  redirects:
    expires: 1d
    paths:
      '/from':
        to: 'https://example.com/'
      '^/foo/(.*)/bar':
        to: 'https://example.com/$1'
        regexp: true
```

This format is more rich and works with any type of route, including routes served directly by the application.

Two keys are available under `redirects`:

 * `expires`: optional, the duration the redirect will be cached. Examples of valid values include `3600s`, `1d`, `2w`, `3m`.
 * `paths`: the paths to apply redirections to.

Each rule under `paths` is defined by its key describing the expression to match against the request path and a value object describing both the destination to redirect to with detail on how to handle the redirection. The value object is defined with the following keys:

 * `to`: required, a relative URL - `'/destination'`, or absolute URL - `'https://example.com/'`.
 * `regexp`: optional, defaults to `false`. Specifies whether the path key should be interpreted as a PCRE regular expression. In the following example, a request to `https://example.com/foo/a/b/c/bar` would redirect to `https://example.com/a/b/c`:

```yaml
https://{default}/:
  type: upstream
  # ...
  redirects:
    paths:
      '^/foo/(.*)/bar':
         to: 'https://example.com/$1'
         regexp: true
```
   Note that special arguments in the `to` statement are also valid when `regexp` is set to `true`:
    * `$is_args` will evaluate to `?` or empty string
    * `$args` will evaluate to the full query string if any
    * `$arg_foo` will evaluate to the value of the query parameter `foo`
    * `$uri` will evaluate to the full URI of the request.
 * `prefix`: optional, specifies whether we should redirect both the path and all its children or just the path itself. Defaults to `true`, but not supported if `regexp` is `true`. For example,

```yaml
https://{default}/:
  type: upstream
  # ...
  redirects:
    paths:
      '/from':
         to: 'https://{default}/to'
         prefix: true
```
   with `prefix` set to `true`, `/from` will redirect to `/to` and `/from/another/path` will redirect to `/to/another/path`.
   If `prefix` is set to `false` then `/from` will trigger a redirect, but `/from/another/path` will not.

 * `append_suffix`: optional, determines if the suffix is carried over with the redirect. Defaults to `true`, but not supported if `regexp` is `true` or if `prefix` is `false`.
   If we redirect with `append_suffix` set to `false`, for example, then the following

```yaml
https://{default}/:
  type: upstream
  # ...
  redirects:
    paths:
      '/from':
         to: 'https://{default}/to'
         append_suffix: false
```
   would result in `/from/path/suffix` redirecting to just `/to`. If `append_suffix` was left on its default value of `true`, then `/from/path/suffix` would have redirected to `/to/path/suffix`.

 * `code`: optional, HTTP status code. Valid status codes are `301`, `302`, `307`, and `308`. Defaults to `302`.

```yaml
https://{default}/:
  type: upstream
  # ...
  redirects:
    paths:
      '/from':
        to: 'https://example.com/'
        code: 308
      '/here':
        to: 'https://example.com/there'
```
   In this example, redirects from `/from` would use a `308` HTTP status code, but redirects from `/here` would default to `302`.

 * `expires`: optional, the duration the redirect will be cached for. Defaults to the `expires` value defined directly under the `redirects` key, but at this level we can fine-tune the expiration of individual partial redirects:

```yaml
https://{default}/:
  type: upstream
  # ...
  redirects:
    expires: 1d
    paths:
      '/from':
        to: 'https://example.com/'
      '/here':
        to: 'https://example.com/there'
        expires: 2w
```
   In this example, redirects from `/from` would be set to expire in one day, but redirects from `/here` would expire in two weeks.


## Application-driven redirects

If neither of the above options satisfy your redirection needs, you can still implement redirects directly in your application. If sent with the appropriate caching headers, this is nearly as efficient as implementing the redirect through one of the two configurations described above. Implementing application-driven redirects depends on your own code or framework and is beyond the scope of this documentation.
