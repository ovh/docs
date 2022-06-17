---
title: Gestione delle regole di firewall e sicurezza delle porte sulle reti private
slug: firewall_security_pci
excerpt: Scopri come funzionano i gruppi di sicurezza Public Cloud
section: Gestione via OpenStack
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 16/06/2022**

## Obiettivo

La piattaforma OpenStack gestisce la sicurezza dei firewall combinando le regole di connessione con i **gruppi di sicurezza**. Le regole vengono poi applicate assegnando gruppi di sicurezza alle porte di rete.

Una **porta** nell'ambito di [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} è un punto di connessione tra le sottoreti e gli elementi di rete (come istanze, load balancer, router, ecc...).

**Questa guida ti mostra come gestire i gruppi di sicurezza per le reti private Public Cloud.**

> [!primary]
>
> Questa guida riguarda esclusivamente le configurazioni di reti private. Per quanto riguarda le reti pubbliche, le regole del firewall sono globali.
>
> Ti invitiamo a conoscere i [dettagli della migrazione](#migration) qui sotto relativi alle modifiche apportate alle [Region](#regions) Public Cloud OpenStack.
>

## Prerequisiti

- [Preparare l’ambiente per utilizzare l’API OpenStack](https://docs.ovh.com/it/public-cloud/prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack/)
- [Impostare le variabili d'ambiente OpenStack](https://docs.ovh.com/it/public-cloud/impostare-le-variabili-dambiente-openstack/)

## Procedura

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

Per configurare regole specifiche, modifica il gruppo di sicurezza di default. È inoltre possibile creare un nuovo gruppo di sicurezza associandolo alla porta di rete.

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

#### Differenze di comportamento a seconda delle regioni <a name="regions"></a>

La configurazione di default della rete privata può essere diversa a seconda della regione utilizzata.

> [!primary]
> In alcune regioni, la proprietà "port security" è considerata *enabled* anche se non applica alcuna regola sulla rete privata. In alcune altre Region (in base alla versione utilizzata), la proprietà "port security" è considerata come *enabled* e le regole sono correttamente applicate sulla rete privata.
> 


In sintesi, eseguono Newton OpenStack release e **nessuna regola di firewall funzionerà** per le tue reti private, anche se la sicurezza delle porte è attiva:

- Singapore: SGP1
- Sydney: SYD1
- Hillsboro: US-WEST-OR-1
- Vint Hill: US-EAST-VA-1

Nelle seguenti regioni (che eseguono la versione Stein OpenStack), le regole di firewall per le reti private **funzioneranno** come previsto:

- Beauharnois: BHS1, BHS3, BHS5
- Francoforte: DE1
- Gravelines: GRA1, GRA3, GRA5, GRA7, GRA9, GRA11
- Strasburgo: SBG5, SBG7
- Londra: UK1
- Varsavia: WAW1

OVHcloud aggiorna gradualmente tutte le Region da Newton a Stein, in modo che la funzionalità "porta security" sia disponibile.

Per evitare interruzioni di servizio durante l'aggiornamento, il valore *False* sarà attribuito alla proprietà "port security" su tutte le reti già create. Una volta che una Region sarà aggiornata nella versione Stein OpenStack, per utilizzare regole di firewall su reti private, dovrai definire la proprietà "porta security" su *True*.

Per verificare che la proprietà "porta security" sia attiva sulla tua porta di rete privata, esegui questo comando:

```bash
openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
```

### Processo di migrazione <a name="migration"></a>

La migrazione seguirà il seguente processo:

- Le regole del firewall per le nuove porte non saranno applicate fino a quando non avrai attivato la proprietà "port security" sulla nuova porta. Non cambia nulla per i porti esistenti.
- OpenStack passerà alla versione Stein.
- Le Region OpenStack in versione Stein saranno riviste su OpenVSwitch.

> [!primary]
> A partire da questo step, per gli utenti di Terraform è necessario forzare le impostazioni di [port security a "false"](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_network_v2#port_security_enabled){.external} affinché i playbooks possano funzionare.
>

- È possibile attivare "porta security" sulle Region Stein.
- La "porta security" di default verrà modificata e **attivata** (una comunicazione globale verrà inviata a tempo debito).
- Le regole del firewall funzioneranno per i nuovi porti. Non cambia nulla per i porti esistenti.
- L'opzione che permette di attivare la proprietà "porta security" sulle porte esistenti verrà attivata.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
