---
title: Symfony Frequently Asked Questions (FAQ)
slug: faq
section: Symfony
---

**Last updated 26th March 2021**


## How do I store my session files?

If you get the following error:

```bash
failed: Read-only file system (30) in /app/app/cache/dev/classes.php line 420
```

that's because Symfony is trying to write into: `/var/lib/php5/` which
is read-only.

The solution is to mount a sessions folder into Web PaaS and write
sessions in that folder.

Simply edit your `.platform.app.yaml` and add a mounts there:

```yaml
mounts:
...
    "app/sessions":
        source: local
        source_path: sessions
...
```

Then, add this line at the top of your `app_dev.php`:

```bash
ini_set('session.save_path', __DIR__.'/../app/sessions' );
```

## Why does my newly cloned Symfony install throw errors?

You may encounter the WSOD (white screen of death) when you first clone
a new Symfony project from your platform. This is likely because of
missing dependencies.

You will need to install composer first and then run the following
command:

```bash
cd my_project_name/
composer install
```

## Why do I get 'Permission denied' in a deploy hook?

If you get the following error during a deploy hook:
```bash
Launching hook 'app/console cache:clear'.
/bin/dash: 1: app/console: Permission denied
```

This means that you might have committed the executable file (in this case ``app/console``) without the execute bit set.

Run this to fix the problem:
```bash
chmod a+x app/console
git add app/console
git commit -m "Fix the console script execute permission."
```
