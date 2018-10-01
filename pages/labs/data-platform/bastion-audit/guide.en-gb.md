---
title: 'Auditing on the bastion'
slug: bastion-auditing
excerpt: 'Auditing on the bastion'
section: 'Users and Security'
order: 6
---

## Analyzing audit logs
Bastion audit logs allow administrators to establish a paper trail of commands ran onto the
platform. It may be useful to understand bugs encountered by your user or may be needed for
security audit.

> [!warning]
>
> As an administrator you get full access to bastion audits. As great power come with great
responsability, ensure that you warn any user before accessing its audit trails.
>

### Visualising logs
All audit logs are stored in `/var/log/bastion`. Each file corresponds to an SSH session for a
given user. A unique *audit key* allow you to retrieve the session of your choice. You may download the
logs are use a pager to skim through them.

### Replaying sessions
It is possible to replay a full SSH session with the same timing as the user typed and
visualized the outputs.
```bash
ssh admin@{cluster_id}
export LOGFILE=/var/log/bastion/[audit key]
scriptreplay --timing=$LOGFILE.time $LOGFILE.data
```
