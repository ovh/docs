---
title: Re-deploy Operations
slug: development-redeploy
section: Development
order: 5
updated: 2021-03-30
---

## Objective 

In certain conditions, a redeployment of a project could be necessary to apply a modification. It could be either manual or automatic, depending on the triggering event.

## Automatic redeployment 

If the event affects a specific environment (e.g. adding a user/variable at the environment level) then a redeployment will be automatically triggered.

## Manual redeployment 

If it affects multiple environments (e.g. adding an admin user at the project level, or adding a project variable) then a manual redeploy is needed to see the change on each environment.

## Integrations

Integrations only start a deployment if they need to change the environment, and that’s automatic.

## List of events that need a redeploy 

- Pushing code on a branch with an active environment (including merge, sync operations)
- Adding, modifying, or removing a user to an environment
- Adding, modifying, or deleting a domain or a certificate
- Adding, modifying, or deleting a variable

## Impact of a redeployment on the application 

A redeployment will:


- rebuild application if necessary
- verify letsencrypt certificate and renew it if necessary
- restart services and application containers

Incoming requests may take longer to be processed during the redeploy as they are like paused until everything is running again. Nevertheless, a downtime could happen.

Established SSH connections to the project will be reset.
