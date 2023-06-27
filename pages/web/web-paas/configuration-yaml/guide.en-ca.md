---
title: YAML
updated: 2021-03-31
---

**Last updated 31st March 2021**


## Objective  

[YAML](https://en.wikipedia.org/wiki/YAML) ("YAML Ain't Markup Language") is a human-readable data file format, well suited to human-edited configuration files. Nearly all aspects of your project's build and deploy pipeline are controlled via YAML files.

YAML is a whitespace-sensitive format that is especially good at key/value type configuration, such as that used by Web PaaS. There are many good YAML tutorials online, and the format is reasonably self-documenting.  We especially recommend:

* [GravCMS's YAML tutorial](https://learn.getgrav.org/advanced/yaml)
* [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/)

The following is only a cursory look at YAML itself.  The tutorials above will provide a more in-depth introduction.

## Basic YAML

A YAML file is a text file that ends in `.yaml`.  (Some systems use an alternative `.yml` extension, but Web PaaS uses the four-letter extension.)  It consists primarily of key value pairs, and supports nesting.  For example:

```yaml
name: 'app'
type: 'php:7.4'
build:
    flavor: 'composer'

disk: 1024
```

This example defines a key `name` with value `app`, a key `type` with value `php:7.4`, a key `disk` with a value of `1024`, and a key `build` that is itself a nested set of key/value pairs, of which there is only one: `flavor`, whose value is `composer`.  Informally, nested values are often referenced using a dotted syntax, such as `build.flavor`, and that format is used in this documentation in various places.

Keys are always strings, and may be quoted or not.  Values may be strings, numbers, booleans, or further nested key/value pairs.  Alphanumeric strings may be quoted or not.  More complex strings (with punctuation, etc.) must be quoted.  Numbers should not be quoted.  The boolean values `true` and `false` should never be quoted.

For quoted values, both single quotes (`'`) and double quotes (`"`) are valid.  Double quotes, however, will interpolate common escape characters such as `\n` and so forth.  For that reason using single quotes is generally recommended unless you want escape characters to be processed rather than taken literally.

In general the order of keys in a YAML file does not matter.  Neither do blank lines.  Indentation may be with any number of spaces, as long as it is consistent throughout the file.  Web PaaS examples by convention use four-space indentation.

## Multi-line strings

In case of long, multi-line strings, the `|` character tells the YAML parser that the following, indented lines are all part of the same string.  That is, this:

```yaml
hooks:
    build: |
        set -e
        cp a.txt b.txt
```

creates a nested property `hooks.build`, which has the value `set -e\ncp a.txt b.txt`.  (That is, a string with a line break in it.)  That is useful primarily for hooks, which allow the user to enter small shell scripts within the YAML file.

## Includes

YAML allows for special "tags" on values that change their meaning.  These tags may be customized for individual applications so may vary from one system to another.  The main Web PaaS "local tag" is `!include`, which allows for external files to be logically embedded within the YAML file.  The referenced file is always relative to the YAML file's directory.

### `string`

The `string` type allows an external file to be inlined in the YAML file as though it had been entered as a multi-line string.  For example, given this file on disk named `build.sh`:

```text
set -e
cp a.txt b.txt
```

Then the following two YAML fragments are exactly equivalent:

```yaml
hooks:
    build: |
        set -e
        cp a.txt b.txt
```

```yaml
hooks:
    build: !include
      type: string
      path: build.sh
```

That is primarily useful for breaking longer build scripts or inlined configuration files out to a separate file for easier maintenance.

### `binary`

The `binary` type allows an external binary file to be inlined in the YAML file.  The file will be base64 encoded.  For example:

```yaml
properties:
    favicon: !include
        type: binary
        path: favicon.ico
```

will reference the `favicon.ico` file, which will be provided to Web PaaS's management system.

### `yaml`

Finally, the `yaml` type allows an external YAML file to be inlined into the file as though it had been typed in directly.  That can help simplify more complex files, such a `.platform.app.yaml` file with many highly-customized `web.locations` blocks.

The `yaml` type is the default, meaning it may reference a file inline without specifying a type.

For example, given this file on disk named `main.yaml`:

```yaml
root: 'web'
expires: 5m
passthru: '/index.php'
allow: false
rules:
    '\.(jpe?g|png|gif|svgz?|css|js|map|ico|bmp|eot|woff2?|otf|ttf)$':
        allow: true
    '^/robots\.txt$':
        allow: true
    '^/sitemap\.xml$':
        allow: true
```

Then the following three `location` definitions are exactly equivalent:

```yaml
web:
    locations:
        '/': !include "main.yaml"
```

```yaml
web:
    locations:
        '/': !include
            type: yaml
            path: 'main.yaml'
```

```yaml
web:
    locations:
        '/':
            root: 'web'
            expires: 5m
            passthru: '/index.php'
            allow: false
            rules:
                '\.(jpe?g|png|gif|svgz?|css|js|map|ico|bmp|eot|woff2?|otf|ttf)$':
                    allow: true
                '^/robots\.txt$':
                    allow: true
                '^/sitemap\.xml$':
                    allow: true
```


### `!archive`

Another custom tag available is `!archive`, which specifies a value is a reference to a directory on disk, relative to the location of the YAML file.  Essentially it defines the value of key as "this entire directory".  Consider this `services.yaml` fragment:

```yaml
mysearch:
    type: solr:8.0
    disk: 1024
    configuration:
        conf_dir: !archive "solr/conf"
```

In this case, the `mysearch.configuration.conf_dir` value is not the string "solr/conf", but the contents of the `solr/conf` directory (relative to the `services.yaml` file).  On Web PaaS, that is used primarily for service definitions in [`services.yaml`](/pages/web/web-paas/configuration-services) to provide a directory of configuration files for the service (such as Solr in this case).  Web PaaS will use that directive to copy the entire specified directory into our management system so that it can be deployed with the specified service.

## Anchors

YAML supports internal named references, known as "anchors."  They can be referenced using an "alias."  That allows you to have a large block of YAML that gets repeated multiple times in different places within a single file without having to copy-paste the whole block.

An anchor is defined by appending `&name` to a segment, where "name" is some unique identifier.  For example:

```yaml
relationships: &rels
    database: 'mysqldb:db1'
    cache: 'rediscache:redis'
    search: 'searchserver:elasticsearch'
```

This block defines an anchor called `rels`, the contents of which is the 3 key/value pairs for `database`, `cache`, and `search`.

An anchor can be referenced using an alias like `*name`, which will inject the anchored value into the file at that point.  That is, the following two snippets are logically equivalent:

```yaml
foo: &foo
    thing: stuff
    many: {'stuff', 'here'}
bar: *foo
```

```yaml
foo:
    thing: stuff
    many: {'stuff', 'here'}
bar:
    thing: stuff
    many: {'stuff', 'here'}
```

By default, aliases will inject their child contents entirely.  If you want to overwrite a specific child key of an anchor there is a different alias syntax you must use:

```yaml
foo: &foo
    thing: stuff
    many: {'stuff', 'here'}
bar:
    <<: *foo
    thing: other
```

Which is equivalent to:

```yaml
foo:
    thing: stuff
    many: {'stuff', 'here'}
bar:
    thing: other
    many: {'stuff', 'here'}
```

Be aware that aliases have sometimes non-obvious requirements around their whitespace formatting.  In particular, when aliasing a anchor into a YAML array the alias reference must be at the same indentation level as any overrides.  That is:

```yaml
- &mylist

    list: of
    values: here

-
    <<: *mylist    # These two lines must start at the same indentation.
    values: there
```

### Anchor example

Anchors and aliases are mainly useful when you want to repeat a given block of configuration.  For example, the following snippet will define three identical worker instances within a `.platform.app.yaml` file:

```yaml
workers:
    queue1: &runner
        size: 'S'
        commands:
            start: python queue-worker.py
        variables:
            env:
                type: 'worker'
    queue2: *runner
    queue3: *runner
```
