---
title: Gestione delle regole di firewall e port security sulle reti che utilizzano OpenStack CLI
slug: firewall_security_pci
excerpt: Scopri come funzionano i gruppi di sicurezza Public Cloud
section: Gestione via OpenStack
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 26/08/2022**

## Obiettivo

La piattaforma OpenStack gestisce la sicurezza dei firewall combinando le regole di connessione con i **gruppi di sicurezza**. Le regole vengono poi applicate assegnando gruppi di sicurezza alle porte di rete.

Una **porta** nell'ambito di [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} è un punto di connessione tra le sottoreti e gli elementi di rete (come istanze, load balancer, router, ecc...).

**Scopri come sono gestiti i gruppi di sicurezza per le reti pubbliche e private su Public Cloud.**

## Prerequisiti

- [Preparare l’ambiente per utilizzare l’API OpenStack](https://docs.ovh.com/it/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [Impostare le variabili d'ambiente OpenStack](https://docs.ovh.com/it/public-cloud/set-openstack-environment-variables/)

## Procedura

### Procedura di attivazione <a name="activation"></a>

> [!primary]
>
> Questa sezione della guida riguarda solo le configurazioni di rete private.

#### Per una rete privata già creata

Per evitare interruzioni di configurazione durante l'upgrade di versione di OpenStack Stein e Open vSwitch, il parametro "port security" è stato definito su "False" nelle reti esistenti.

Utilizza la CLI `openstack` per attivare la "port security" sulle tue porte e sulla tua rete esistente.

Per utilizzare regole di firewall su reti private, è necessario definire la proprietà "port security" a "True":

```bash
openstack network set --enable-port-security <network_ID>
```

In seguito, sarà necessario attivare la "port security" sulla porta del servizio in questa rete. 

> [!primary]
> Ti ricordiamo che per recuperare la porta è possibile utilizzare la CLI OpenStack. Esegui il comando `openstack port list --server <server_ID>` per recuperare le porte su un server specifico.
>

Per tutti i servizi con una porta attiva in questa rete, attiva la "port security":

```bash
openstack port set --enable-port-security <port_ID>
```

Verifica che la "port security" sia attiva su una determinata porta:

```bash
openstack port show <port-ID> -f value -c port_security_enabled
```

Il risultato dovrebbe essere simile:

<pre class="console"><code>$ openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
</code></pre>

#### Per una nuova rete privata:

Con l'aggiornamento verso la versione Stein sulle Region OpenStack e la nuova versione di Open vSwitch dal 06/09/2022 ([Private network port default configuration change](https://public-cloud.status-ovhcloud.com/incidents/z6qq4bcvsn11)), il parametro "port security" viene definito su "True" di default su qualsiasi nuova rete privata creata.

In questo modo saremo in grado di essere coerenti con la politica "True" di default, come con i deploy di vanilla OpenStack.

### Impostazioni predefinite

Ciascuna porta di rete è associata a un gruppo di sicurezza che contiene norme specifiche.

Il gruppo di sicurezza "default" contiene le seguenti regole:

```bash
openstack security group rule list default

+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| 3a5564b7-5b68-4923-b796-26eb623c5b53 | None        | IPv6      | ::/0      |            | None                  |
| 43f2b673-9cbc-4bac-ad66-22ef4789d0fc | None        | IPv6      | ::/0      |            | None                  |
| a6a1ecfd-4713-4316-a020-74eccd49fd6c | None        | IPv4      | 0.0.0.0/0 |            | None                  |
| cd66a601-de94-4dbe-ae21-44792229d351 | None        | IPv4      | 0.0.0.0/0 |            | None                  |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
```

Il ritorno ottenuto dimostra che tutte le connessioni sono autorizzate per ogni protocollo e in entrambe le direzioni.

A seconda della regione, l'implementazione può essere diversa ma il risultato è identico: tutte le connessioni sono autorizzate.

Di conseguenza, tutte le porte di rete (pubbliche e private) permettono ogni connessione all'avvio di un'istanza.

### Gestisci le regole del tuo firewall privato

#### Aggiungi regole

Per configurare regole specifiche, crei un nuovo gruppo di sicurezza e associalo alla tua porta di rete.

Utilizza questo comando per creare il gruppo:

```bash
openstack security group create private

+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field           | Value                                                                                                                                                                      |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
| description     | private                                                                                                                                                                    |
| id              | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                       |
| location        | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone=    |
| name            | private                                                                                                                                                                    |
| project_id      | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                           |
| revision_number | 1                                                                                                                                                                          |
| rules           | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv4', id='54fae025-3439-4e45-8745-2ffe5b261f72', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
|                 | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv6', id='ad1aa507-79bd-434f-b674-221ef41d9ba6', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
| stateful        | None                                                                                                                                                                       |
| tags            | []                                                                                                                                                                         |
| updated_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Questo esempio di gruppo di sicurezza ha solo regole di uscita, il che significa che non sarà autorizzata alcuna comunicazione di entrata.

Per aggiungere una regola, ad esempio per le connessioni SSH, utilizza il comando:

```bash
openstack security group rule create --protocol tcp --dst-port 22 private

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field             | Value                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
| description       |                                                                                                                                                                         |
| direction         | ingress                                                                                                                                                                 |
| ether_type        | IPv4                                                                                                                                                                    |
| id                | 8f026e18-1c8b-4042-8655-10c9a773d131                                                                                                                                    |
| location          | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone= |
| name              | None                                                                                                                                                                    |
| port_range_max    | 22                                                                                                                                                                      |
| port_range_min    | 22                                                                                                                                                                      |
| project_id        | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                        |
| protocol          | tcp                                                                                                                                                                     |
| remote_group_id   | None                                                                                                                                                                    |
| remote_ip_prefix  | 0.0.0.0/0                                                                                                                                                               |
| revision_number   | 1                                                                                                                                                                       |
| security_group_id | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                    |
| tags              | []                                                                                                                                                                      |
| updated_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```


Inserisci questo comando per associare il tuo gruppo di sicurezza alla tua porta:

```bash
openstack port set --security-group private 5be009d9-fc2e-4bf5-a152-dab52614b02d
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
