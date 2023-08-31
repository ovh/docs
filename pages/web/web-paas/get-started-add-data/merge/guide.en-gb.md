---
title: Git merge
slug: merge
section: Add-Data
---

**Last updated 31st August 2023**



## Objective  

You have a separate environment with separate data.
Next, add a service to your development environment.

## Add a service

{{< vendor/name >}} includes many services such as databases, cache, and search engines.
These are included in your project, so you can manage them with Git and back them up with your project.

Add a database service (or choose [another service](../../add-services/_index.md)) by following these steps:

1\. Create a services configuration file.


```bash
touch {{< vendor/configfile "services" >}}
```

   This file holds the configuration for all services your app needs.

2\. Add a database in that file.

   (If you need a different database service, you can choose from the [available services](../../add-services/_index.md#available-services).
   Then change the `type` to fit your choice.)

```yaml {configFile="services"}
db:
    type: mariadb:10.5
    disk: 1024
```

   Note that `db` is the name of the service.
   You can give it any name you want with lowercase alphanumeric characters, hyphens, and underscores.

3\. Add a relationship between the database and your app in your app configuration:


```yaml {configFile="app"}
relationships:
    database: "db:mysql"
```

   This relationship is where connections are made.
   The `database` is the name of the relationship, which you can change if you want.
   The `db` has to be the same as the service name from step 2.

4\. Commit your changes and push:


```bash
git add .
git commit -m "Add database and connect to app"
platform push
```

Now you have a database you can connect to your app.

{{% get-started/connect-service %}}

This example creates a table in your database, adds some data, prints the data as an HTML table,
and deletes the database table.
If you commit your changes and push, you see the HTML table in your built app.

## Merge your changes

You added the database to the `dev` environment.
To have a database in your production environment, merge your changes.

```bash
webpaas merge dev
```

Now your production branch has its own database.

## Data inheritance

Data is inherited from parent environments, but not from child environments.
So when you branch an environment (or later sync it), it copies data from its parent.
But when you merge an environment, its data isn't automatically copied into its parent.

This allows you to test your setup with production data so you can be sure changes work in production.
At the same time, your testing has no effect on the production data so you don't have to worry about issues there.

### Data in child environments

To see how the data in child environments is separate, follow these steps:

1\. Add a table to your `dev` database:


```bash
platform sql --environment dev 'CREATE TABLE child_data (a int); INSERT INTO child_data(a) VALUES (1), (2), (3);'
```

2\. See the data in the `dev` database:


```bash
platform sql --environment dev 'SELECT * FROM child_data'
```

   You get a table with a single column and 3 numbers.

3\. Merge the environment:


```bash
platform merge
```

4\. Check the data in the production environment:


```bash
platform sql --environment main 'SELECT * FROM child_data'
```

You get an error message that the table doesn't exist.

### Data in parent environments

To see how the data in parent environments can be inherited, follow these steps:

1\. Add a table to your production database:


```bash
platform sql --environment main 'CREATE TABLE parent_data (a int); INSERT INTO parent_data(a) VALUES (1), (2), (3);'
```

2\. See the data in the production database:


```bash
platform sql --environment main 'SELECT * FROM parent_data'
```

   You get a table with a single column and 3 numbers.

3\. Sync the data from your `dev` environment (this means copy the data from production):


```bash
platform sync data --environment dev
```

4\. Check the data in the development environment


```bash
platform sql --environment dev 'SELECT * FROM parent_data'
```

   You see the same table as in step 2.

So you can test your changes with confidence in your development environments, knowing they work in production.
But you don't have to worry about your tests affecting your production data.

## What's next

You've got your app up and running and connected it to a service with data.
Great job!

You can end there if you want or continue to monitor your app.

{{< get-started/next-button next="/get-started/monitor-and-troubleshoot/log.html" nextText="I want to monitor" >}}
