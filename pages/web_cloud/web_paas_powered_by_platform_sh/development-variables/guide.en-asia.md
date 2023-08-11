---
title: Variables
updated: 2022-01-13
---

**Last updated 13th January 2022**


## Objective  

Use variables to take control over your project's build process and its runtime environment. They are set independently of the project's code base but are available to your code at build or runtime.

In this way, your app has additional information, such as database credentials, the host or port it can use, and which server to connect to. 

## Setting variables

To set variables, you need to determine which type of variable to use. They all can be strings or base64-encoded JSON-serialized values.

| Type          | Definer     | Scope       | Build | Runtime  | Uses |
| ------------- | ----------- | ----------- |:-----:|:--------:|----------- |
| [Application](#use-application-provided-variables)   | Application | Application | Yes   | Yes      | Non-secret values that are the same across all environments |
| [Project](#create-project-variables)       | User        | Project     |  Yes   | Yes      | Secret values that are the same across all environments, such as database credentials |
| [Environment](#create-environment-variables)   | User        | Environment | Some   | Yes      | Values that vary by environment, such as which database to connect to or which payment API keys to use |
| [Web PaaS](#use-platformsh-provided-variables)   | Pre-defined | Environment     | Some  | Yes      | For information about your Web PaaS project |

If variables have the same names at different levels, the [variables are given precedence](#overrides) from bottom up. So Web PaaS-provided values override environment variables, which override project variables, which override application-provided variables.

### Use application-provided variables

Set variables [in code](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/variables) using the `.platform.app.yaml` file.
These values are the same across all environments and present in the Git repository,
which makes them a poor fit for API keys and other such secrets.

They're better fits for uses such as configuration for consistent builds across every environment,
including setting [PHP configuration values](#php-specific-variables).

Application variables are available at both build time and runtime.

### Create project variables

Add secrets for all environments in project variables using [the management console](/pages/web_cloud/web_paas_powered_by_platform_sh/administration-web/configure-project#variables) or the CLI.

For example, to create the project variable `foo` with the value `bar`, run:

```bash
webpaas variable:create --level project --name foo --value bar
```

When naming variables, be sure to take [variable prefixes](#variable-prefixes) into account.

#### Variable options

Variables have several Boolean options you can set in the console or the CLI:

| Option    | CLI flag            | Default | Description |
| --------- | ------------------- | ------- | ----------- |
| JSON      | `--json`            | `false` | Whether the variable is a JSON-serialized value (`true`) or a string (`false`). |
| Sensitive | `--sensitive`       | `false` | If set to `true`, the variable's value is hidden in the console and in CLI responses for added security. It's still readable within the app container. |
| Runtime   | `--visible-runtime` | `true`  | Whether the variable is available at runtime. |
| Build     | `--visible-build`   | `true`  | Whether the variable is available at build time. |

So if you want the `foo` variable to be visible at build time but hidden during runtime, you can set it like this:

```bash
webpaas variable:create --level project --name foo --value bar --visible-build true --visible-runtime false
```

You can also change the variable options after you create them (except for sensitive values, which can't be set to non-sensitive). For example, to make the `foo` variable visible at runtime and hidden during the build, run this command:

```bash
webpaas variable:update foo --visible-build false --visible-runtime true
```

Note that any changes to project variables require you to deploy your environments to have effect.

### Create environment variables

Set variables for specific environments using [the management console](/pages/web_cloud/web_paas_powered_by_platform_sh/administration-web/configure-environment#variables) or the CLI.

For example, to create the environment variable `foo` with the value `bar` on the current environment, run:

```bash
$ webpaas variable:create --level environment --name foo --value bar  --visible-build true --visible-runtime false
```

To specify the environment for the variable, use the `-e` flag to specify its name.

When naming variables, be sure to take [variable prefixes](#variable-prefixes) into account.

#### Environment variable options

Environment variables share all of the [options available for project variables](#variable-options), with the exception that visibility in the build and runtime can be set only with the CLI (not in the console). Environment variables have one additional option:

| Option      | CLI flag        | Default | Description |
| ----------- | --------------- | ------- | ----------- |
| Inheritable | `--inheritable` | `true`  | Whether the variable is inherited by child environments. |

This option is useful for  setting production-only values such as credentials. For example, to set a PayPal secret value for only the `main` branch and have it not be readable elsewhere, run:

```bash
webpaas variable:create -e main --name paypal_id --inheritable false --sensitive true
```

Other environments don't inherit it and get either a project variable of the same name if it exists or no value at all. 

Note that changing an environment variable causes that environment to be redeployed so the new value is available.
However, child environments are *not* redeployed.
To make the new value accessible to those environments, redeploy them manually.

#### Example environment variable

Environment variables are a good place to store values that apply only on Web PaaS and not on your local development environment. This includes API credentials for third-party services, mode settings, and which server (development vs. production) to use. 

One example would be to define a Node.js application's build on a production branch (`NODE_ENV=production`),
but use development mode (`NODE_ENV=development`) for each of your development environments.
Assuming you have a `main` environment for production and then a `staging` environment with more child environments for development,
run the following commands:

```bash
$ webpaas variable:create -l environment -e main --prefix env: --name NODE_ENV --value production --visible-build true --inheritable false
$ webpaas variable:create -l environment -e staging --prefix env: --name NODE_ENV --value development --visible-build true --inheritable true
```

Now `NODE_ENV` is `production` on the default branch but `development` on `staging` and each of its child environments.
Note that build visible environment variables change the application's build configuration ID:
value updates trigger a rebuild of the application in the same way that a commit would. 

### Use Web PaaS-provided variables

Web PaaS also provides a series of variables by default that inform an application about its runtime configuration.
They're always prefixed with `PLATFORM_*` to differentiate them from user-provided values
and you can't set or update them directly.

The most important of these variables is relationship information,
which tells the application how to connect to databases and other services defined in `services.yaml`. 

The following table presents the available variables 
and whether they're available during builds and at runtime.

| Variable name             | Build | Runtime | Description |
| ------------------------- | ----- | ------- | ----------- |
| PLATFORM_OUTPUT_DIR       | Yes   | No      | The output directory for compiled languages at build time. Equivalent to `PLATFORM_APP_DIR` in most cases. |
| PLATFORM_VARIABLES        | Some  | Some    | A base64-encoded JSON object with all project and environment variables that don't use a [prefix](#variable-prefixes). The keys are the variable names and the values the values. Availability during builds and at runtime depends on the specific variable settings. |
| PLATFORM_PROJECT          | Yes   | Yes     | The project ID |
| PLATFORM_TREE_ID          | Yes   | Yes     | The ID of the tree the application was built from, essentially the SHA hash of the tree in Git. Use when you need a unique ID for each build |
| PLATFORM_PROJECT_ENTROPY  | Yes   | Yes     | A random, 56-character value created when the project is created and then stable throughout the project's life. Can be used for Drupal hash salts, Symfony secrets, and other similar values. |
| PLATFORM_APP_DIR          | Yes   | Yes     | The absolute path to the application directory. |
| PLATFORM_SOURCE_DIR       | No    | No      | Equivalent to `PLATFORM_APP_DIR` in the context of a running source operation. The directory contains a writable copy of your repository that you can commit to during the operation. |
| PLATFORM_APPLICATION_NAME | Yes   | Yes     | The application name as set in the `.platform.app.yaml` file. |
| PLATFORM_APPLICATION      | Yes   | Yes     | A base64-encoded JSON object that describes the application. It maps certain attributes from your `.platform.app.yaml` file, some with more structure. See [notes](#platform_application). |
| PLATFORM_BRANCH           | No    | Yes     | The name of the Git branch. |
| PLATFORM_DOCUMENT_ROOT    | No    | Yes     | The absolute path to the web document root, if applicable. |
| PLATFORM_ENVIRONMENT      | No    | Yes     | The name of the Web PaaS environment. |
| PLATFORM_ENVIRONMENT_TYPE | No    | Yes     | The type of the Web PaaS environment (development, staging or production). |
| PLATFORM_SMTP_HOST        | No    | Yes     | The SMTP host to send email messages through. Is empty when mail is disabled for the current environment. |
| PLATFORM_RELATIONSHIPS    | No    | Yes     | A base64-encoded JSON object of relationships. The keys are the relationship name and the values are arrays of relationship endpoint definitions. The exact format is defined for each [service](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-services). |
| PLATFORM_ROUTES           | No    | Yes     | A base64-encoded JSON object that describes the routes for the environment. It maps the content of the `.platform/routes.yaml` file. |




#### `PLATFORM_APPLICATION`

`PLATFORM_APPLICATION` is a special case to keep in mind in how it differs between the build and runtime. Each environment's build is associated with a configuration ID that uniquely identifies it. This ID enables reusing builds on merges. The ID itself is a product of your application code and some of its configuration for Web PaaS in `.platform.app.yaml`. 

Not every attribute in `.platform.app.yaml` is relevant to builds --
only some of these attributes result in a full app rebuild when they're updated.
So not all of the attributes defined in your `.platform.app.yaml` file are accessible at build time from `PLATFORM_APPLICATION`,
only those actually relevant to builds.

Some attributes that are **not** available in `PLATFORM_APPLICATION` during builds:

- everything under `resources`

- `size`

- `disk`

- everything under `access`

- everything under `relationship`

- everything under `firewall`

- `hooks.deploy` and `hooks.post_deploy`

- everything under `crons`

- everything under  `web`, except `web.mounts`

- everything under `workers`, except `workers.mounts`


The above attributes aren't visible during build
because they aren't included as a part of the configuration component of the build slug.
So modifying any of these values in `.platform.app.yaml` doesn't trigger an app rebuild, only a redeploy.
For more information, read more about [how builds work](/pages/web_cloud/web_paas_powered_by_platform_sh/bestpractices-environment-build#how-build-works).

## Accessing variables

You can get a list of all variables defined on a given environment using either [the management console](/pages/web_cloud/web_paas_powered_by_platform_sh/administration-web/configure-environment#variables) or the CLI:

```bash
$ webpaas var
Variables on the project Example (abcdef123456), environment main:
+------+---------+-------+---------+
| Name | Level   | Value | Enabled |
+------+---------+-------+---------+
| foo  | project | bar   | true    |
+------+---------+-------+---------+
```

### Accessing variables in a shell

Project and environment variables with the [prefix](#top-level-environment-variables) `env:` are available as Unix environment variables in all caps. Access these variables and Web PaaS-provided variables directly like this:

```bash
$ echo $FOO
bar
$ echo $PLATFORM_APPLICATION_NAME
Sample Project
```

Other project and environment variables are listed together in the `$PLATFORM_VARIABLES` variable as a JSON array. Access them like this:

```bash
$ echo $PLATFORM_VARIABLES | base64 --decode
{"theanswer": "42"}
```

You can also get the value for a single variable within the array, such as with this command:

```bash
$ echo $PLATFORM_VARIABLES | base64 --decode | jq '.theanswer'
"42"
```

Variable availability depends on the type and configuration. Variables available during builds can be accessed in `build` hooks and those available at runtime can be accessed in `deploy` hooks.

### In your application

To access environment variables in your app, check the documentation page for your given language.

* [Shell: The `jq` utility](https://stedolan.github.io/jq/)
* [PHP: The `getenv()` function](http://php.net/manual/en/function.getenv.php)
* [Node.js: The `process.env` object](https://nodejs.org/api/process.html#process_process_env)
* [Python: The `os.environ` object](https://docs.python.org/3/library/os.html#os.environ)
* [Ruby: The `ENV` accessor](https://ruby-doc.org/core/ENV.html)
* [Java: The `System.getenv()` method](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#getenv-java.lang.String-)

> [!tabs]      
> Shell     
>> ``` bash     
>> 
>> 
>> export PROJECT_ID = "$PLATFORM_PROJECT"
>> export VARIABLES = "$(echo "$PLATFORM_VARIABLES" | base64 --decode)"
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
>> # A simple variable.
>> project_id = ENV["PLATFORM_PROJECT"] || nil
>> 
>> # A JSON-encoded value.
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

### Accessing complex values

Variable values can have nested structures. 
The following example shows nested structures introduced in an [app configuration](/pages/web_cloud/web_paas_powered_by_platform_sh/configuration-app/variables):

```yaml
variables:
    env:
        BASIC: "a string"
        INGREDIENTS:
            - 'peanut butter'
            - 'jelly'
        QUANTITIES:
            "milk": "1 liter"
            "cookies": "1 kg"
    stuff:
        STEPS: ['un', 'deux', 'trois']
        COLORS:
            red: '#FF0000'
            green: '#00FF00'
            blue: '#0000FF'
```

You could access these nested variables as follows:

> [!tabs]      
> Shell     
>> ``` bash     
>> 
>> 
>> $ echo $BASIC
>> a string
>> $ echo $INGREDIENTS
>> ["peanut butter", "jelly"]
>> $ echo $QUANTITIES
>> {"cookies": "1 kg", "milk": "1 liter"}
>> $ echo "$PLATFORM_VARIABLES" | base64 --decode | jq '."stuff:STEPS"'
>> [
>>   "un",
>>   "deux",
>>   "trois"
>> ]
>> $ echo "$PLATFORM_VARIABLES" | base64 --decode | jq '."stuff:COLORS"'
>> {
>>   "blue": "#0000FF",
>>   "green": "#00FF00",
>>   "red": "#FF0000"
>> }
>> 
>> 
>> ```     
> PHP     
>> ``` php     
>> 
>> <?php
>> var_dump($_ENV['BASIC']);
>> // string(8) "a string"
>> 
>> var_dump($_ENV['INGREDIENTS']);
>> // string(26) "["peanut butter", "jelly"]"
>> 
>> var_dump($_ENV['QUANTITIES']);
>> // string(38) "{"milk": "1 liter", "cookies": "1 kg"}"
>> 
>> $variables = json_decode(base64_decode($_ENV['PLATFORM_VARIABLES']), TRUE);
>> 
>> print_r($variables['stuff:STEPS']);
>> /*
>> array(3) {
>>   [0]=>
>>   string(2) "un"
>>   [1]=>
>>   string(4) "deux"
>>   [2]=>
>>   string(5) "trois"
>> }
>> */
>> 
>> print_r($variables['stuff:COLORS']);
>> /*
>> array(3) {
>>   ["red"]=>
>>   string(7) "#FF0000"
>>   ["green"]=>
>>   string(7) "#00FF00"
>>   ["blue"]=>
>>   string(7) "#0000FF"
>> }
>> */
>> 
>> 
>> ```     
> Python     
>> ``` python     
>> 
>> import os
>> import json
>> import base64
>> 
>> print os.getenv('BASIC')
>> # a string
>> 
>> print os.getenv('INGREDIENTS')
>> # ["peanut butter", "jelly"]
>> 
>> print os.getenv('QUANTITIES')
>> # {"milk": "1 liter", "cookies": "1 kg"}
>> 
>> variables = json.loads(base64.b64decode(os.getenv('PLATFORM_VARIABLES')).decode('utf-8'))
>> 
>> print variables['stuff:STEPS']
>> # [u'un', u'deux', u'trois']
>> print variables['stuff:COLORS']
>> # {u'blue': u'#0000FF', u'green': u'#00FF00', u'red': u'#FF0000'}
>> 
>> 
>> ```     


### Overrides

If the names of variables at different levels match, an environment variable overrides a variable with the same name in a parent environment and both override a project variable.

For example, suppose you have the following variables defined for the `main` environment:

```sh
$ webpaas var -e main
Variables on the project Example (abcdef123456), environment main:
+----------------+-------------+--------+---------+
| Name           | Level       | Value  | Enabled |
+----------------+-------------+--------+---------+
| system_name    | project     | Spiffy |         |
| system_version | project     | 1.5    |         |
| api_key        | environment | abc123 | true    |
+----------------+-------------+--------+---------+
```

And the following variables defined for the `feature-x` environment, a child environment of `main`:

```sh
$ webpaas var -e feature-x
Variables on the project Example (abcdef123456), environment feature-x:
+----------------+-------------+--------+---------+
| Name           | Level       | Value  | Enabled |
+----------------+-------------+--------+---------+
| system_name    | project     | Spiffy |         |
| system_version | project     | 1.5    |         |
| api_key        | environment | def456 | true    |
| system_version | environment | 1.7    | true    |
| debug_mode     | environment | 1      | true    |
+----------------+-------------+--------+---------+
```

In this case, `$PLATFORM_VARIABLES` from the `main` environment looks like this:

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

While in the `feature-x` environment, it looks like this:

```json
{
    "system_name": "Spiffy",
    "system_version": "1.7",
    "api_key": "def456",
    "debug_mode": "1"
}
```

## Variable prefixes

Certain variable name prefixes have special meanings. Some are defined by Web PaaS and apply automatically. Others are simply available as a convention for your application code to follow.

### Top-level environment variables

By default, project and environment variables are only added to the `$PLATFORM_VARIABLES` environment variable. You can also expose a variable as its own environment variable by giving it the prefix `env:`.

For example, the variable `env:foo` creates an environment variable called `FOO`. (Note the automatic upper-casing.)

```bash
webpaas variable:create --name env:foo --value bar
```

You can then access that variable directly:

```bash
$ echo $FOO
bar
```

### PHP-specific variables

Any variable with the prefix `php:` is added to the `php.ini` configuration of all PHP-based application containers.

For example, an environment variable named `php:display_errors` with the value `On` is equivalent to placing the following in `php.ini`:

```ini
display_errors = On
```

This feature is primarily useful to override debug configuration on development environments, such as enabling errors or configuring the XDebug extension. 

To apply a setting to all environments or to vary them between different PHP containers in the same project, specify the variables in the `.platform.app.yaml` file for your application. See the [PHP configuration page](/pages/web_cloud/web_paas_powered_by_platform_sh/languages-php/ini) for more information.

### Framework-specific variables

For specific frameworks, you can implement logic to override global configurations with environment-specific variables. For Drupal, for example, there is logic defined in a file in your Git repository, which you can change as you want. Logic similar to the following could be applied for other frameworks.

As a convention, our provided Drupal template code will automatically map variables to Drupal's configuration system. The logic varies slightly depending on the Drupal version.

On [Drupal 7](https://github.com/platformsh-templates/drupal7/blob/master/settings.platformsh.php), any variable that begins with `drupal:` will be mapped to the global `$conf` array, which overrides Drupal's `variable_get()` system. For instance, to force a site name from the Web PaaS variables, set the `drupal:site_name` variable.

On [Drupal 8](https://github.com/platformsh-templates/drupal8/blob/master/web/sites/default/settings.platformsh.php), any variable that begins with `drupal:` will be mapped to the global `$settings` array. That is intended for very low-level configuration.

Also on Drupal 8, any variable that begins with `d8config:` will be mapped to the global `$config` array, which is useful for overriding drupal's exportable configuration system. The variable name will need to contain two colons, one for `d8config:` and one for the name of the configuration object to override. For example, a variable named `d8config:system.site:name` will override the `name` property of the `system.site` configuration object.

## Shell variables

You can also provide a `.environment` file as part of your application, in your application root (as a sibling of your `.platform.app.yaml` file, or files in the case of a multi-app configuration). That file will be sourced as a bash script when the container starts and on all SSH logins. It can be used to set any environment variables directly, such as the PATH variable. For example, the following `.environment` file will allow any executable installed using Composer as part of a project to be run regardless of the current directory:

```bash
export PATH=/app/vendor/bin:$PATH
```

Note that the file is sourced after all other environment variables above are defined, so they will be available to the script. That also means the `.environment` script has the "last word" on environment variable values and can override anything it wants to.

## Make scripts behave differently on production, staging and development

While both production and staging Dedicated environments have `enterprise` for the `PLATFORM_MODE` variable, you can distinguish them by environment type. Make sure that the environment types are set correctly via the CLI or the Management Console.

```bash
if [ "$PLATFORM_ENVIRONMENT_TYPE" = production ] ; then
    echo "This is live on production"
else if [ "$PLATFORM_ENVIRONMENT_TYPE" = staging ] ; then
    echo "This is on staging"
else
    echo "We're on development"
fi
```
