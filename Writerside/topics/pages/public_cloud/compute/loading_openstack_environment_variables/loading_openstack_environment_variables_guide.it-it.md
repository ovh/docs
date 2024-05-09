---
title: "Impostare le variabili d'ambiente OpenStack"
excerpt: 'Come impostare le variabili d’ambiente per utilizzare l’API  di Openstack'
updated: 2023-11-29
---

## Obiettivo

L’impostazione delle variabili d’ambiente OpenStack ti consente di utilizzare l’API OpenStack e gestire la tua infrastruttura.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Aver creato un utente OpenStack. A questo proposito, consulta [l’apposita guida](create_and_delete_a_user1.)
- Aver preparato l’ambiente di sviluppo per utilizzare l’API OpenStack. A questo proposito, consulta questa guida: [Preparare l’ambiente per utilizzare l’API OpenStack](prepare_the_environment_for_using_the_openstack_api1.)

## Procedura

### Step 1: recupera le variabili

Per recuperare le variabili d’ambiente scarica il file OpenRC dall’utente OpenStack creato in precedenza.

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, accedi alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud in alto a sinistra.
<br> Nella sezione `Project Management`, clicca su `Users & Roles`{.action}, clicca sui `...`{.action} a destra del tuo utente e seleziona `Scarica il file RC di Openstack`{.action}.

![openstack-variables](pciopenstackvariables1e.png){.thumbnail}

Un file OpenRC corrisponde sia un utente che a una zona. Non è possibile gestire più zone in uno stesso file.

### Step 2: impostare le variabili

#### **Con Linux**

* Apri un terminale o connettiti con l’utente che effettuerà le chiamate all’API OpenStack
* Carica il contenuto del file nell’ambiente corrente A questo punto ti verrà chiesto di inserire la password dell’utente Horizon

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

Come indicato in [questa guida](create_and_delete_a_user1.), la password è visibile una sola volta, cioè al momento della sua creazione.

Se l’hai dimenticata, dovrai reimpostarla.

Se le CLI sono già state installate, verifica che funzionino correttamente.

```bash
(env)$ openstack server list
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| ID                                   | Name       | Status | Networks                                      | Image     | Flavor |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| 8d7c67c0-38e1-4091-88d5-c14844c1f455 | b2-7-gra11 | ACTIVE | Ext-Net=2001:xxxx:xxx:xxx::xxxx, xx.xxx.xx.xx | Debian 12 | b2-7   |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
```

È possibile salvare la password utente Horizon sul disco rigido. Per farlo, sostituisci:

```bash
echo "Please enter your OpenStack Password: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
```

Con:

```bash
#echo "Please enter your OpenStack Password: "
#read -sr OS_PASSWORD_INPUT
export OS_PASSWORD="Password dell’utente Horizon"
```

Sarà necessario impostare questo ambiente, di default, all’avvio di ogni sessione nell’ambiente corrente. È possibile renderlo permanente aggiungendo la sorgente openrc.sh al file bashrc. Per effettuare questa operazione, è necessario salvare la password nel file.

#### **Con Windows**

Il file OpenRC non è concepito per essere avviato con Windows.

Per impostare le variabili d’ambiente hai quindi due possibilità:

- Sarà necessario adattare il file modificando alcuni comandi. Infatti **export** può essere sostituito da **set**:

```bash
export OS_PASSWORD="Password dell’utente Horizon"
```

- È possibile impostare le variabili direttamente dalle impostazioni di sistema:  Impostazioni > Sistema > Impostazioni di sistema avanzate> Variabili d’ambiente:

![public-cloud](pciopenstackvariables2.png){.thumbnail}

## Per saperne di più

OpenStack, istruzioni per l'uso: [Documentation OpenStack](https://docs.openstack.org/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.