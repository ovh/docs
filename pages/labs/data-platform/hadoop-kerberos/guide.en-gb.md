---
title: 'Hadoop and Kerberos'
excerpt: 'Learn how to use Hadoop and Kerberos'
section: 'Users and Security'
order: 4
---

Kerberos is a network security protocol that prevent access to services
without authentication. Basically it works like ssh authentication
against remote server. You can find further documentation about Kerberos on [Wikipedia](https://en.wikipedia.org/wiki/Kerberos_(protocol)) and on [Kerberos project website](http://web.mit.edu/kerberos/)

When trying to access any service, you will first have to request for an
access ticket.

## How to create a Kerberos ticket

A Kerberos ticket is automatically generated on user log in.
You can check for a valid Kerberos ticket by running

````bash
$ klist
Ticket cache: KEYRING:persistent:1963600018:krb_ccache_I2RUOoZ
Default principal: gabriela@00000000-0000-4000-A000-000000000000.DATALAKE.OVH

Valid starting     Expires            Service principal
09/02/18 23:20:44  09/03/18 23:20:44  krbtgt/00000000-0000-4000-A000-000000000000.DATALAKE.OVH@00000000-0000-4000-A000-000000000000.DATALAKE.OVH
````

Should you need to generate a new ticket, run
```bash
$ kinit
```

## Creating services and keytabs

In production clusters you often run scheduled or streaming jobs that need to authenticate against Hadoop services (eg. for ingestion pipelines).
Using standard Kerberos tickets is not viable as tickets are valid for 24 hours and manual password entry is not possible.

To solve this issue, Kerberos provides keytabs which are files containing pairs of Kerberos principals and encrypted keys.
Your jobs use their service principal and keytab to authenticate through Kerberos in a passwordless fashion.

To create a new service user:

1. [Create a new user for your service](../manage-users/guide.en-gb.md)
2. Connect with SSH to the host running your service
3. Log in a your service user
```bash
su myserviceuser
```

4. Retrieve a keytab
```
ipa-getkeytab -p myserviceuser -k ~/myserviceuser.keytab
```

You can now use the generated keytab to authenticate your service. Ensure that your service has the adequate permissions
in Ranger.

> [!info]
>
> Kerberos keytabs are versioned. Each time you run `ipa-getkeytab`, all previously generated keytabs are invalidated.
>


## Kafka with Kerberos

When on a edge node in a shell you can directly use Kafka as usual, provided that your current user is allowed to manipulate topics in Ranger

```bash
$ ./kafka-topics.sh --list --zookeeper \
  ovh-hdp-mnode0.{cluster_id}.datalake.ovh:2181
```


### Flink with Kafka

For flink read and write, you will need to use version 0.9 of kafka client (As explained in this [Stackoverflow thread](_Stackoverflow thread: https://stackoverflow.com/questions/34596165/how-to-do-kerberos-authentication-on-a-flink-standalone-installation)).
In order to read from a kerberised kafka you need to ckeck that kerberos configuration has been set in *flink-conf.yaml*
You should :

- Append *KafkaClient* to security.kerberos.login.contexts
- Set one of the two following options if you plan to use keytab

```
security.kerberos.login.keytab
security.kerberos.login.principal
```


> [!warning]
>
> The ```security.kerberos.login.use-ticket-cache``` setting does not work for yarn and mesos deployment
>

Once Kerberos-based Flink security is enabled, you can authenticate to Kafka in any jobs, for producing or read events. To do so, you have to add following properties to your job Properties :

```
  security.protocol=SASL_PLAINTEXT (or SASL_SSL)
  sasl.kerberos.service.name=kafka (default kafka)
```

> [!warning]
>
> The value for *sasl.kerberos.service.name* should match the *sasl.kerberos.service.name* used for Kafka broker configurations. A mismatch in service name between client and server configuration will cause the authentication to fail.
>

For more information on Flink configuration for Kerberos security, please see [Flink documentation](https://ci.apache.org/projects/flink/flink-docs-release-1.4/dev/connectors/kafka.html#enabling-kerberos-authentication-for-versions-09-and-above-only).

### Spark with Kafka

[Github code sample](https://github.com/markgrover/spark-secure-kafka-app)
