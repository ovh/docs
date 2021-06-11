---
title: Variables
slug: development-variables
section: Development
order: 5
---

**Last updated 26th March 2021**


## Objective  

Web PaaS allows a high degree of control over both the build process and the runtime environment of a project.  Part of that control comes in the form of *variables* that are set independently of the project's code base but available either at build or runtime for your code to leverage.

Web PaaS also exposes additional information to your application that way, including information like database credentials, the host or port it can use, and so forth.


| Type          | Definer     | Scope       | Inheritance | Build | Runtime  |
| ------------- | ----------- | ----------- | ----------- |:-----:|:--------:|
| [Application](../development-variables#application-provided-variables)   | Application | Application | n/a         | Yes   | Yes      |
| [Project](../development-variables#project-variables)       | User        | Project     | n/a         | Yes   | Yes      |
| [Environment](../development-variables#environment-variables)   | User        | Environment | Optional    | No    | Yes      |
| [Web PaaS](../development-variables#platformsh-provided-variables)   | Pre-defined | Environment     | n/a         | Some  | Yes      |

All of those may be simple strings or base64-encoded JSON-serialized values.  In case of name collisions, Web PaaS-provided values override user-provided environment variables, which override user-provided project-level variables, which override application-provided variables.  (That is, lower items in the list above take precedence.)

## Types

### Application-provided variables

Variables may be [set in code](../configuration-app/variables), using the `.platform.app.yaml` file.  These values will be the same across all environments and present in the Git repository, which makes them a poor fit for API keys and such.  This capability is mainly to define values that an application expects via an environment variable that should be consistent across all environments.  For example, some runtimes or frameworks use environment variables to configure their behavior, such as a `dev` vs `production` flag. You might want to set those as application-provided variables to ensure a consistent build across every environment. They may also be used to set [PHP configuration values](#php-specific-variables).

Application-provided variables are available at both build time and runtime.


### Project variables

Project variables are defined by the user and bound to a whole project.  They are available both at build time (and therefore from a build hook) and at runtime, and are the same for all environments in the project.  New project variables can be added using the CLI.  For example, the following command creates a project-level variable "foo" with the value "bar":

```bash
webpaas variable:create --level project --name foo --value bar
```

Project variables are a good place to store secret information that is needed at build time, such as credentials for a private 3rd party code repository.

By default, project variables will be available at both build time and runtime. You can suppress one or the other with the `--visible-build` and `--visible-runtime` flags, such as if you want to hide certain credentials from runtime entirely.  For example, the following (silly) example will define a project variable but hide it from both build and runtime:

```bash
webpaas variable:create --level project --name foo --value bar --visible-build false --visible-runtime false
```

Naturally in practice you'll want to use only one or the other, or allow the variable to be visible in both cases.

Project variables may also be marked `--sensitive true`.  That flag will mark the variable to not be readable through the management console once it is set.  That makes it somewhat more private as requests through the Web PaaS CLI will not be able to view the variable.  However, it will still be readable from within the application container like any other variable.

### Environment variables

Environment-level variables can also be set through the management console, or using the CLI. Environment variables are bound to a specific environment or branch.  An environment will also inherit variables from its parent environment, unless it has a variable defined with the same name.  That allows you to define your development variables only once, and use them on all the child environments.  For instance, to create an environment variable "foo" with the value "bar" on the currently checked out environment/branch, run:

```bash
$ webpaas variable:create --level environment --name foo --value bar
```

That will set a variable on the currently active environment (that is, the branch you have checked out).  To set a variable on a different environment include the `-e` switch to specify the environment name.

There are two additional flags available on environment variables: `--inheritable` and `--sensitive`.

* Setting `--inheritable false` will cause the variable to not be inherited by child environments.  That is useful for setting production-only values on the `master` branch, and allowing all other environments to use a project-level variable of the same name.
* Setting `--sensitive true` flag will mark the variable to not be readable through the management console once it is set.  That makes it somewhat more private as requests through the Web PaaS CLI will not be able to view the variable.  However, it will still be readable from within the application container like any other variable.

For example, the following command will allow you to set a PayPal secret value on the master branch only; other environments will not inherit it and either get a project variable of the same name if it exists or no value at all.  It will also not be readable through the API.

```bash
$ webpaas variable:create --name paypal_id --inheritable false --sensitive true
```

If you omit the variable `--value` from the command line as above, you will be prompted to enter the value interactively.

Changing an environment variable will cause that environment to be redeployed so that it gets the new value.  However, it will *not* redeploy any child environments. If you want those to get the new value you will need to redeploy them yourself.

Environment variables are a good place to store values that apply only on Web PaaS and not on your local development environment. This includes API credentials for 3rd party services, mode settings if your application has a separate "Dev" and "Prod" runtime toggle, etc.

### Web PaaS-provided variables

Web PaaS also provides a series of variables by default.  These inform an application about its runtime configuration.  The most important of these is relationship information, which tells the application how to connect to databases and other services defined in `services.yaml`.  They are always prefixed with `PLATFORM_*` to differentiate them from user-provided values.

The following variables are only available at build time, and may be used in a build hook:

* **PLATFORM_OUTPUT_DIR**: The output directory for compiled languages at build time. Will be equivalent to `PLATFORM_APP_DIR` in most cases.

The following variables are available at both runtime and at build time, and may be used in a build hook:

* **PLATFORM_APP_DIR**: The absolute path to the application directory.
* **PLATFORM_APPLICATION**: A base64-encoded JSON object that describes the application. It maps the content of the `.platform.app.yaml` that you have in Git and it has a few subkeys.
* **PLATFORM_APPLICATION_NAME**: The name of the application, as configured in the `.platform.app.yaml` file.
* **PLATFORM_PROJECT**: The ID of the project.
* **PLATFORM_TREE_ID**: The ID of the tree the application was built from. It's essentially the SHA hash of the tree in Git.  If you need a unique ID for each build for whatever reason this is the value you should use.
* **PLATFORM_VARIABLES**: A base64-encoded JSON object which keys are variables names and values are variable values (see below).  Note that the values available in this structure may vary between build and runtime depending on the variable type as described above.
* **PLATFORM_PROJECT_ENTROPY**: A random, 56-character value created when the project is first created, which is then stable throughout the project's life. This can be used for Drupal hash salt, Symfony secret, or other similar values in other frameworks.

The following variables exist *only* at runtime.  If used in a build hook they will evaluate to an empty string like any other unset variable:

* **PLATFORM_BRANCH**: The name of the Git branch.
* **PLATFORM_DOCUMENT_ROOT**: The absolute path to the web document root, if applicable.
* **PLATFORM_ENVIRONMENT**: The name of the environment generated by the name of the Git branch.
* **PLATFORM_SMTP_HOST**: The SMTP host that email messages should be sent through.  This value will be empty if mail is disabled for the current environment.
* **PLATFORM_RELATIONSHIPS**: A base64-encoded JSON object whose keys are the relationship name and the values are arrays of relationship endpoint definitions. See the documentation for each [Service](../configuration-services) for details on each service type's schema.
* **PLATFORM_ROUTES**: A base64-encoded JSON object that describes the routes that you defined in the environment. It maps the content of the `.platform/routes.yaml` file.



Since values can change over time, the best thing is to inspect the variable at runtime then use it to configure your application. For example:

```bash
echo $PLATFORM_RELATIONSHIPS | base64 --decode | json_pp
```

```json
{
    "database": [
        {
            "host": "database.internal",
            "ip": "246.0.97.91",
            "password": "",
            "path": "main",
            "port": 3306,
            "query": {
                "is_master": true
            },
            "scheme": "mysql",
            "username": "user"
        }
    ],
    "redis": [
        {
            "host": "redis.internal",
            "ip": "246.0.97.88",
            "port": 6379,
            "scheme": "redis"
        }
    ]
}
```

## Accessing variables

You can get a list of all variables defined on a given environment either via the management console or using the CLI:

```bash
$ webpaas variables

+---------+-------+-----------+------+
| ID      | Value | Inherited | JSON |
+---------+-------+-----------+------+
| env:FOO | bar   | No        | No   |
+---------+-------+-----------+------+
```

### At build time

Only Project variables are available at build time.  They will be listed together in a single JSON array and exposed in the `$PLATFORM_VARIABLES` Unix environment variable.

```bash
echo $PLATFORM_VARIABLES | base64 --decode
{"my_var": "this is a value"}
```

They can also be accessed from within a non-shell script via the language's standard way of accessing environment variables.  For instance, in PHP you would use `getenv('PLATFORM_VARIABLES')`. Remember that in some cases they may be base64 JSON strings and will need to be unpacked.  To do so from the shell, for instance, you would do:

```bash
echo $PLATFORM_VARIABLES | base64 --decode
{"myvar": "this is a value"}
```

See [below](#top-level-environment-variables) for how to expose a project variable as its own Unix environment variable.

### At runtime

In a running container, which includes the deploy hook, your Project variables, Environment variables, and Web PaaS-provided variables are all exposed as Unix environment variables and can be accessed by your application through your language's standard way of accessing environment variables.

Web PaaS-defined variables will be exposed directly with the names listed above.  Project and environment variables will be merged together into a single JSON array and exposed in the `$PLATFORM_VARIABLES` environment variable.  In case of a matching name, an environment variable will override a variable of the same name in a parent environment, and both will override a project variable.

For example, suppose we have the following variables defined:

```sh
$ webpaas variables -e master
Variables on the project Example (abcdef123456), environment master:
+----------------+-------------+--------+
| Name           | Level       | Value  |
+----------------+-------------+--------+
| system_name    | project     | Spiffy |
| system_version | project     | 1.5    |
| api_key        | environment | abc123 |
+----------------+-------------+--------+
```

And the following variables defined on the branch `feature-x`, a child environment (and branch of) `master`:

```sh
$ webpaas variables -e master
Variables on the project Example (abcdef123456), environment feature-x:
+----------------+-------------+--------+
| Name           | Level       | Value  |
+----------------+-------------+--------+
| system_name    | project     | Spiffy |
| system_version | project     | 1.5    |
| api_key        | environment | def456 |
| system_version | environment | 1.7    |
| debug_mode     | environment | 1      |
+----------------+-------------+--------+
```

In this case, on the `master` environment `$PLATFORM_VARIABLES` would look like this:

```bash
echo $PLATFORM_VARIABLES | base64 --decode | json_pp
```

```json
{
    "system_name": "Spiffy",
    "system_version": "1.5",
    "api_key": "abc123"
}
```

While the same command on the `feature-x` branch would produce:

```json
{
    "system_name": "Spiffy",
    "system_version": "1.7",
    "api_key": "def456",
    "debug_mode": "1"
}
```

### In your application

Check the individual documentation pages for accessing environment variables for your given application language.

* [Shell: the jq utility](https://stedolan.github.io/jq/)
* [PHP: the getenv() function](http://php.net/manual/en/function.getenv.php)
* [Node.js: the process.env object](https://nodejs.org/api/process.html#process_process_env)
* [Python: the os.environ object](https://docs.python.org/3/library/os.html#os.environ)
* [Ruby: the ENV accessor](https://ruby-doc.org/core-2.1.4/ENV.html)
* [Java: the java.lang.System accessor](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#getenv-java.lang.String-)

> [!tabs]      
> Shell     
>> ``` bash     
>> 
>> 
>> export DB_USER="$(echo "$PLATFORM_RELATIONSHIPS" | base64 --decode | jq -r '.database[0].username')"
>> 
>> 
>> ```     
> PHP     
>> ``` php     
>> 
>> 
>> <?php
>> 
>> // A simple variable.
>> $projectId = getenv('PLATFORM_PROJECT');
>> 
>> // A JSON-encoded value.
>> $variables = json_decode(base64_decode(getenv('PLATFORM_VARIABLES')), TRUE);
>> 
>> 
>> ```     
> Python     
>> ``` python     
>> 
>> 
>> import os
>> import json
>> import base64
>> 
>> # A simple variable.
>> project_id = os.getenv('PLATFORM_PROJECT')
>> 
>> # A JSON-encoded value.
>> variables = json.loads(base64.b64decode(os.getenv('PLATFORM_VARIABLES')).decode('utf-8'))
>> 
>> 
>> ```     
> Ruby     
>> ``` ruby     
>> 
>> 
>> // A simple variable.
>> project_id = ENV["PLATFORM_PROJECT"] || nil
>> 
>> // A JSON-encoded value.
>> variables = JSON.parse(Base64.decode64(ENV["PLATFORM_VARIABLES"]))
>> 
>> 
>> ```     
> Java     
>> ``` java     
>> 
>> 
>> import com.fasterxml.jackson.databind.ObjectMapper;
>> 
>> import java.io.IOException;
>> import java.util.Base64;
>> import java.util.Map;
>> 
>> import static java.lang.System.getenv;
>> import static java.util.Base64.getDecoder;
>> 
>> public class App {
>> 
>>     public static void main(String[] args) throws IOException {
>>         // A simple variable.
>>         final String project = getenv("PLATFORM_PROJECT");
>>         // A JSON-encoded value.
>>         ObjectMapper mapper = new ObjectMapper();
>>         final Map<String, Object> variables = mapper.readValue(
>>                 String.valueOf(getDecoder().decode(getenv("PLATFORM_VARIABLES"))), Map.class);
>>     }
>> }
>> 
>> 
>> ```     

## Variable prefixes

Certain variable name prefixes have special meaning.  A few of these are defined by Web PaaS and are built-in.  Others are simply available as a convention for your own application code to follow.

### Top-level environment variables

By default, project and environment variables are only added as part of the `$PLATFORM_VARIABLES` Unix environment variable.  However, you can also expose a variable as its own Unix environment variable by giving it the prefix `env:`.

For example, the variable `env:foo` will create a Unix environment variable called `FOO`.  (Note the automatic upper-casing.)

```ini
$ webpaas variable:create --name env:foo --value bar
```

With PHP, you can then access that variable with `getenv('FOO')`.

### PHP-specific variables

Any variable with the prefix `php:` will also be added to the `php.ini` configuration of all PHP-based application containers.  For example, an environment variable named `php:display_errors` with value `On` is equivalent to placing the following in `php.ini`:

```ini
display_errors = On
```

This feature is primarily useful to override debug configuration on development environments, such as enabling errors or configuring the XDebug extension.  For applying a configuration setting to all environments, or to vary them between different PHP containers in the same project, specify the variables in the `.platform.app.yaml` file for your application.  See the [PHP configuration page](../languages-php#custom-phpini) for more information.

### Drupal-specific variables

As a convention, our provided Drupal template code will automatically map variables to Drupal's configuration system.  The logic varies slightly depending on the Drupal version.

On [Drupal 7](https://github.com/platformsh-templates/drupal7/blob/master/settings.platformsh.php), any variable that begins with `drupal:` will be mapped to the global `$conf` array, which overrides Drupal's `variable_get()` system.  For instance, to force a site name from the Web PaaS variables (say to set it "This is a Dev site") you would set the `drupal:site_name` variable.

On [Drupal 8](https://github.com/platformsh-templates/drupal8/blob/master/web/sites/default/settings.platformsh.php), any variable that begins with `drupal:` will be mapped to the global `$settings` array. That is intended for very low-level configuration.

Also on Drupal 8, any variable that begins with `d8config:` will be mapped to the global `$config` array, which is useful for overriding drupal's exportable configuration system.  The variable name will need to contain two colons, one for `d8config:` and one for the name of the configuration object to override.  For example, a variable named `d8config:system.site:name` will override the `name` property of the `system.site` configuration object.

As the above logic is defined in a file in your Git repository you are free to change it if desired.  The same behavior can also be easily implemented for any other application or framework.

## Shell variables

You can also provide a `.environment` file as part of your application, in your application root (as a sibling of your `.platform.app.yaml` file, or files in the case of a multi-app configuration).  That file will be sourced as a bash script when the container starts and on all SSH logins.  It can be used to set any environment variables directly, such as the PATH variable.  For example, the following `.environment` file will allow any executable installed using Composer as part of a project to be run regardless of the current directory:

```bash
export PATH=/app/vendor/bin:$PATH
```

Note that the file is sourced after all other environment variables above are defined, so they will be available to the script.  That also means the `.environment` script has the "last word" on environment variable values and can override anything it wants to.


