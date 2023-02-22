---
title: Variables
slug: variables
section: App
updated: 2021-03-26
---

**Last updated 26th March 2021**



## Objective  

Web PaaS provides a number of ways to set [variables](../../development-variables), either globally or specific to a single environment.  For values that should be consistent between different environments (because they're configuring the application or runtime itself, generally) the easiest way to control them is to set them in the `.platform.app.yaml` file.

Only prefixed variables may be set from the `.platform.app.yaml` file.  Some prefixes have specific meaning while others are only significant to a particular application.  Nested variables will be automatically converted into a nested array or list structure as appropriate to the language.

For example, the following section in `.platform.app.yaml` will set a single variable named `env:AUTHOR` to the value `Juan`.

```yaml
variables:
    env:
        AUTHOR: 'Juan'
```

That will have the exact same runtime effect as setting a project variable via the CLI as follows, except it will be versioned along with the code:

```bash
$ webpaas variable:create env:AUTHOR --level project --value Juan
```

The variable name may itself have punctuation in it.  For example, to set a Drupal 8 configuration override (assuming you're using the recommended `settings.platformsh.php` file) you can do the following:

```yaml
variables:
    d8config:
        "system.site:name": 'My site rocks'
```

This will create a Web PaaS variable, that is, an item in the `$PLATFORM_VARIABLES` environment variable, named `d8config:system.site:name` with value "My site rocks".

## Complex values

The value for a variable may be more than just a string; it may also be a nested structure.  If the variable is in the `env` namespace, it will be mapped to a Unix environment variable as a JSON string.  If not, it will be included in the `PLATFORM_VARIABLES` environment variable.

For example, the following variable definitions:

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

Would appear this way in various languages:

> [!tabs]      
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
