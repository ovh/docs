---
title: Activity reference
slug: reference
section: Activity
updated: 2021-06-02
---

**Last updated 2nd June 2021**


## Objective  

This hook allows you to capture any push events on webpaas and POST a JSON message describing the activity to the url of your choice. You can use this to further automate your Web PaaS workflow.

## Activity schema

### `id`

A unique opaque value to identify the activity.

### `project`

The Project ID for which the activity was triggered.  Use this value if you want to have multiple projects POST to the same URL.

### `type`

The `type` property specifies the event that happened.  Its value is one of:

* `project.modify.title`: The human-friendly title of the project has been changed.
* `project.create`: A project has been created.  Although it will appear in the activity feed exactly once, it will not be sent via a webhook as it will always happen before a webhook can be configured.
* `project.domain.create`: A new domain has been added to the project.
* `project.domain.delete`: A domain associated with the project has been removed.
* `project.domain.update`: A domain associated with the project has been updated, including modifying it's SSL certificate.
* `project.variable.create`: A new project variable has been created.
* `project.variable.delete`: A project variable has been deleted.
* `project.variable.update`: A project variable has been modified.
---
* `environment.access.add`: A new user has been given access to the environment.
* `environment.access.remove`: A user has been removed from the environment.
---
* `environment.backup`: A user triggered a backup.
* `environment.restore`: A user restored a backup.
* `environment.backup.delete`: A user deleted a backup
---
* `environment.push`: A user has pushed code to a branch, either existing or new.
* `environment.branch`: A new branch has been created via the management console. (A branch created via a push will show up only as an `environment.push`.)
* `environment.activate`: A branch has been "activated", and an environment created for it.
* `environment.initialize`: The master branch of the project has just been initialized with its first commit.
* `environment.deactivate`: A branch has been "deactivated". The code is still there, but the environment was destroyed.
* `environment.synchronize`: An environment has had its data and/or code re-copied from its parent environment.
* `environment.merge`: A branch was merged through the management console or Web PaaS API. A basic Git merge will not trigger this event.
* `environment.redeploy`: An environment was redeployed.
* `environment.delete`: A branch was deleted.
---
* `environment.route.create`: A new route has been created through the management console. This will not fire for route edits made to the `routes.yaml` file directly.
* `environment.route.delete`: A route has been deleted through the management console. This will not fire for route edits made to the `routes.yaml` file directly.
* `environment.route.update`: A route has been modified through the management console. This will not fire for route edits made to the `routes.yaml` file directly.
---
* `environment.variable.create`: A new variable has been created.
* `environment.variable.delete`: A variable has been deleted.
* `environment.variable.update`: A variable has been modified.
---
* `environment.update.http_access`: HTTP access rules for an environment have been modified.
* `environment.update.smtp`: Sending of emails has been enabled/disabled for an environment.
* `environment.update.restrict_robots`: The block-all-robots feature has been enabled/disabled.
* `environment.subscription.update`: The master environment has been resized because the subscription has changed.  There are no content changes.
---
* `environment.cron`: A cron task just completed.
* `environment.source-operation`: A source operation triggered and has completed.
---
* `integration.bitbucket.fetch`: Changes in BitBucket repository have been pulled.
* `integration.bitbucket.register_hooks`: Integration hook have been registered on BitBucket.
* `integration.bitbucket_server.fetch`: Changes in BitBucket repository have been pulled.
* `integration.bitbucket_server.register_hooks`: Integration hook have been registered on BitBucket.
* `integration.github.fetch`: Changes in GitHub repository have been pulled.
* `integration.gitlab.fetch`: Changes in GitLab repository have been pulled.
* `integration.health.email`: Health event sent by email.
* `integration.health.pagerduty`: Health event sent to pagerduty.
* `integration.health.slack`: Health event sent to slack.
* `integration.webhook`: Webhook triggered.
* `integration.hipchat`: Event sent to hipchat.
* `integration.script`: An activity script has run.

### `environments`

An array listing the environments that were involved in the activity. This is usually single-value.

### `result`

Whether the activity was completed successfully or not. It should be `success` if all went as planned.

### `created_at`, `started_at`, `completed_at`

These values are all timestamps in UTC.  If you need only a point in time when the action happened, use `completed_at`.  You can also combine it with `started_at` to see how long the activity took.

### `log`

A text description of the action that happened.  This is a human-friendly string that may be displayed to a user but should not be parsed for data as its structure is not guaranteed.

### `payload.environment`

This block contains information about the environment itself, after the action has taken place.  The most notable properties of this key are

* `name` (the name of the branch)
* `machine_name` (the name of the environment)
* `head_commit` (the Git commit ID that triggered the event)

### `payload.user`

The Web PaaS user that triggered the activity.

### `deployment`

This large block details all information about all services in the environment.  That includes the resulting configuration objects derived from [`routes.yaml`](../../configuration-routes), [`services.yaml`](../../configuration-services), and [`.platform.app.yaml`](../../configuration-app).

Most notably, the `deployment.routes` object's keys are all of the URLs made available by the environment.  Note that some will be redirects.  To find those that are live URLs filter to those objects whose `type` property is `upstream`.

## Maximum activities and parallelism

Project activities are distributed across separate queues, which enables **two** simultaneous activities to occur in parallel across your environments. For a given environment, only one activity can run at a time. Those queues include:

* `default`: these include the most common activities on repositories (pushes, merges) and environments (syncs, redeployments).
* `integrations`: source and webhook integration activities.
* `backup`: backup activities.
* `cron`: cron activities.

Production activities are prioritized across all queues. While it is still possible for a non-production environment activity to block production activities, it is temporary and unlikely, since the moment that production activity is triggered it will jump to the top of the queue automatically.

## Example activity

The following is an example of a webhook message.  Specifically, this one was created by a "push" event.

```json
{
  "id": "774-this-is-an-example-valuexzs4no",
  "_links": {
    "self": {
      "href": "https://eu.platform.sh/api/projects/sx-this-is-an-example-value-hu/activities/774-this-is-an-example-valuexzs4no",
      "meta": {
        "get": {
          "responses": {
            "default": {
              "schema": {
                "properties": {
                  "created_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "updated_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "type": {
                    "type": "string"
                  },
                  "parameters": {
                    "properties": {
                    },
                    "required": [

                    ]
                  },
                  "project": {
                    "type": "string"
                  },
                  "environments": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "state": {
                    "type": "string"
                  },
                  "result": {
                    "type": "string"
                  },
                  "started_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "completed_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "completion_percent": {
                    "type": "integer"
                  },
                  "log": {
                    "type": "string"
                  },
                  "payload": {
                    "properties": {
                    },
                    "required": [

                    ]
                  }
                },
                "required": [
                  "created_at",
                  "updated_at",
                  "type",
                  "parameters",
                  "project",
                  "environments",
                  "state",
                  "result",
                  "started_at",
                  "completed_at",
                  "completion_percent",
                  "log",
                  "payload"
                ]
              }
            }
          },
          "parameters": [

          ]
        }
      }
    }
  },
  "created_at": "2017-12-07T10:45:30.870660+00:00",
  "updated_at": "2017-12-07T10:47:39.369761+00:00",
  "type": "environment.push",
  "parameters": {
    "environment": "master",
    "old_commit": "34be31cbabcc0f65d7fd8ec29769947396d0cabd",
    "new_commit": "8d2e6003d50136c750fb8b65ec506ee3aa4a5b15",
    "user": "384491da-031e-4c23-b264-9f96040a6e36"
  },
  "project": "sx-this-is-an-example-value-hu",
  "environments": [
    "master"
  ],
  "state": "complete",
  "result": "success",
  "started_at": "2017-12-07T10:45:30.996898+00:00",
  "completed_at": "2017-12-07T10:47:39.369741+00:00",
  "completion_percent": 100,
  "log": "Found 1 new commit.\n\nBuilding application 'myrubyapp' (runtime type: ruby:2.4-rc, tree: 2d24228)\n  Generating runtime configuration.\n  \n  Executing build hook...\n    2.4.2\n    Fetching gem metadata from https://rubygems.org/..........\n    Resolving dependencies...\n    Installing concurrent-ruby 1.0.5\n    Installing i18n 0.9.1\n    Installing minitest 5.10.3\n    Installing thread_safe 0.3.6\n   ...more lines...\n   Installing unicorn 5.3.1\n    Using bundler 1.7.4\n    Your bundle is complete!\n    Use `bundle show [gemname]` to see where a bundled gem is installed.\n  \n  Executing pre-flight checks...\n\n  Compressing application.\n  Beaming package to its final destination.\n\nProvisioning certificates:\n  Reusing existing certificates.\n\n\nRe-deploying environment sx-this-is-an-example-value-hu-master-7rqtwti.\n  Environment configuration:\n    myrubyapp (type: ruby:2.4-rc, size: S, disk: 2048)\n    postgresql (type: postgresql:9.3, size: S, disk: 256)\n    mongodb (type: mongodb:3.0, size: S, disk: 500)\n    redis (type: redis:3.2-rc, size: S)\n    influxdb (type: influxdb:1.2, size: S, disk: 256)\n    elasticsearch (type: elasticsearch, size: S, disk: 256)\n    rabbitmq (type: rabbitmq:3.5, size: S, disk: 256)\n    mysql (type: mysql:10.0, size: S, disk: 256)\n    solr (type: solr:4.10, size: S, disk: 256)\n\n  Environment routes:\n    http://master-7rqtwti-sx-this-is-an-example-value-hu.eu.platform.sh/ redirects to https://master-7rqtwti-sx-this-is-an-example-value-hu.eu.platform.sh/\n    https://master-7rqtwti-sx-this-is-an-example-value-hu.eu.platform.sh/ is served by application `myrubyapp`\n\n",
  "payload": {
    "environment": {
      "status": "active",
      "head_commit": "8d2e6003d50136c750fb8b65ec506ee3aa4a5b15",
      "machine_name": "master-7rqtwti",
      "name": "master",
      "parent": null,
      "title": "Master",
      "created_at": "2017-11-22T14:43:17.154870+00:00",
      "updated_at": "2017-11-22T14:43:17.155103+00:00",
      "clone_parent_on_create": true,
      "project": "sx-this-is-an-example-value-hu",
      "is_dirty": false,
      "restrict_robots": true,
      "has_code": true,
      "enable_smtp": true,
      "id": "master",
      "deployment_target": "local",
      "http_access": {
        "is_enabled": true,
        "addresses": [

        ],
        "basic_auth": {
        }
      },
      "is_main": true
    },
    "commits": [
      {
        "sha": "8d2e6003d50136c750fb8b65ec506ee3aa4a5b15",
        "message": "deploy with release candidates",
        "parents": [
          "34be31cbabcc0f65d7fd8ec29769947396d0cabd"
        ],
        "author": {
          "email": "ori@example.com",
          "name": "Ori Pekelman"
        }
      }
    ],
    "commits_count": 1,
    "user": {
      "created_at": "2017-12-07T10:45:13.491553+00:00",
      "display_name": "Ori Pekelman",
      "id": "384491da-031e-4c23-b264-9f96040a6e36",
      "updated_at": null
    },
    "deployment": {
      "id": "current",
      "services": {
        "mongodb": {
          "type": "mongodb:3.0",
          "size": "AUTO",
          "disk": 500,
          "access": {
          },
          "configuration": {
          },
          "relationships": {
          }
        },
        "redis": {
          "type": "redis:3.2-rc",
          "size": "AUTO",
          "disk": null,
          "access": {
          },
          "configuration": {
          },
          "relationships": {
          }
        },
        "solr": {
          "type": "solr:4.10",
          "size": "AUTO",
          "disk": 256,
          "access": {
          },
          "configuration": {
          },
          "relationships": {
          }
        }
      },
      "routes": {
        "https://master-7rqtwti-sx-this-is-an-example-value-hu.eu.platform.sh/": {
          "type": "upstream",
          "redirects": {
            "expires": "-1s",
            "paths": {
            }
          },
          "original_url": "https://{default}/",
          "cache": {
            "enabled": true,
            "default_ttl": 0,
            "cookies": [
              "*"
            ],
            "headers": [
              "Accept",
              "Accept-Language"
            ]
          },
          "ssi": {
            "enabled": false
          },
          "upstream": "myrubyapp"
        },
        "http://master-7rqtwti-sx-this-is-an-example-value-hu.eu.platform.sh/": {
          "type": "redirect",
          "redirects": {
            "expires": "-1s",
            "paths": {
            }
          },
          "original_url": "http://{default}/",
          "to": "https://master-7rqtwti-sx-this-is-an-example-value-hu.eu.platform.sh/"
        }
      },
      "webapps": {
        "myrubyapp": {
          "size": "AUTO",
          "disk": 2048,
          "access": {
            "ssh": "contributor"
          },
          "relationships": {
            "mongodb": "mongodb:mongodb",
            "redis": "redis:redis",
            "solr": "solr:solr"
          },
          "mounts": {
            "/public": "shared:files/files"
          },
          "timezone": null,
          "variables": {
          },
          "name": "myrubyapp",
          "type": "ruby:2.4-rc",
          "runtime": {
          },
          "preflight": {
            "enabled": true,
            "ignored_rules": [

            ]
          },
          "web": {
            "locations": {
              "/": {
                "root": "public",
                "expires": "1h",
                "passthru": true,
                "scripts": true,
                "allow": true,
                "headers": {
                },
                "rules": {
                }
              }
            },
            "commands": {
              "start": "unicorn -l $SOCKET -E production config.ru",
              "stop": null
            },
            "upstream": {
              "socket_family": "unix",
              "protocol": null
            },
            "move_to_root": false
          },
          "hooks": {
            "build": "ruby -e 'bundle install\n",
            "deploy": null
          }
        }
      },
      "workers": {
      }
    }
  }
}
```
