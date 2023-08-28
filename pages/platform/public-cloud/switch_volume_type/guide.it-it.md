---
title: Modificare un Volume Block Storage
excerpt: "Scopri come modificare il tipo di un volume block storage utilizzando Openstack"
updated: 2023-08-08
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L’obiettivo di questa guida è mostrarti come modificare un tipo di volume Block Storage da Classic o High Speed a High Speed gen2.

## Prerequisiti

- [Accedere all'interfaccia Horizon](/pages/platform/public-cloud/introducing_horizon)
- Un volume [Block Storage](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) creato nel tuo progetto [Public Cloud](https://www.ovhcloud.com/it/public-cloud/)

## In pratica

Quando si modifica un tipo di volume Block Storage in un volume "High speed gen2", la politica di migrazione deve essere modificata da `Never` a `On Demand`.

Per impostazione predefinita, la politica di migrazione è impostata su `Never` perché il volume rimane sullo stesso cluster CEPH. Per "High speed gen2", invece, il volume dovrà essere migrato verso un nuovo cluster.

La modifica può essere effettuata via Horizon o tramite l’interfaccia da riga di comando OpenStack.

### Dall'interfaccia Horizon

Accedi all’[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/) e assicurati di trovarti nella localizzazione giusta. È possibile verificarlo nell'angolo in alto a sinistra.

![Selezione della regione](images/region2021.png){.thumbnail}

Clicca sul menu `Volumes`{.action} a sinistra e poi su `Volumes`{.action}.

Clicca sulla freccia a tendina accanto a `Edit Volume`{.action} e seleziona `Change Volume Type`{.action}.

![Scelta dell'opzione](images/selectoption.png){.thumbnail}

Nella nuova finestra, clicca sul menu a tendina in `Type` e seleziona `high-speed-gen-2`{.action}. Clicca sulla freccia sotto `Migration Policy` e seleziona `On Demand`{.action}.

Una volta effettuate queste operazioni, clicca su `Change Volume Type`{.action} per confermare la modifica.

![Scelta dell'opzione](images/changevolume.png){.thumbnail}

### Dalla CLI OpenStack

Prima di continuare, si raccomanda di consultare le seguenti guide:

- [Preparare l’ambiente per utilizzare l’API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- [Impostare le variabili d’ambiente OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables)

Per prima cosa, elenca i tipi di volumi disponibili nella tua Region utilizzando il seguente comando:

```bash
#~$ openstack image list
+--------------------------------------+-----------------------------------------------+----------+
| ID                                   | Name                                          | Is Public |
+--------------------------------------+-----------------------------------------------+----------+
| 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True |
| 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True |
| 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True |
----------------------------------------------------------------------------------------------------
```

> [!warning]
> Si noti che se il tipo di volume "high-speed-gen2" non è presente nell'elenco, significa che non è disponibile in questa Region.
>

A questo punto, modifica il tipo di volume eseguendo il comando:

```bash
$ openstack volume set --type high-speed-gen2 --retype-policy on-demand VOLUME_NAME_OR_ID
```

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.