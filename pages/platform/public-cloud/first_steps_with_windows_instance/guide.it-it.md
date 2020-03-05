---
title: 'Iniziare a utilizzare un’istanza Windows'
excerpt: 'Come eseguire le prime operazioni su un’istanza Windows'
slug: come_utilizzare_unistanza_windows
legacy_guide_number: g1995
---

**Ultimo aggiornamento: 11/07/2019**

## Obiettivo

ll Public Cloud OVH ti permette di ospitare siti Web con IIS o le tue applicazioni compatibili solo con Windows. Le nostre istanze possono essere installate su [Windows Desktop](https://www.ovhcloud.com/it/public-cloud/prices/){.external}.

Una volta creata l’istanza, sarà necessario completarne l’installazione mediante la console VNC.

**Questa guida ti mostra come utilizzare un’istanza Windows.**

## Prerequisiti

- Aver creato un progetto Public Cloud.
- Aver creato [un’istanza dallo Spazio Cliente](https://docs.ovh.com/it/public-cloud/crea_unistanza_dallo_spazio_cliente_ovh/) con Windows Desktop.

## Procedura

### Step 1: configura la tua password

Ricordati che, a differenza di un’istanza Linux, le chiavi SSH non possono essere configurate sulla tua istanza Windows.  

Quindi, prima di tutto, è necessario completare l’installazione mediante la console VNC:

- Clicca sui `...`{.action} a destra dell’istanza e poi su`Dettagli dell’istanza`{.action}:

![windowsinstance](images/firststepswindows1.png){.thumbnail}

- Accedi alla sezione`Console VNC`{.action}

![windowsinstance](images/firststepswindows2.png){.thumbnail}

- Scegli la lingua della tastiera e inserisci la password.

![windowsinstance](images/firststepswindows3.png){.thumbnail}

> [!primary]
>
> Alcuni tasti della console VNC potrebbero non corrispondere alla tastiera AZERTY.  Ricordati di verificare più volte la password prima di confermarla.
>

![windowsinstance](images/firststepswindows4.png){.thumbnail}

### Step 2: accedi al Remote Desktop

Una volta configurata la password, puoi accedere alla tua istanza via remote desktop.

Ad esempio, da una macchina Windows:

![windowsinstance](images/firststepswindows5.png){.thumbnail}

Per accedere da una macchina Linux esegui il comando seguente:

```
rdesktop 12.34.56.789 -u administrator
```
 
### Step 3: migliora la navigazione su Internet

Le impostazioni di sicurezza di Internet Explorer sono attive di default. Durante la navigazione, visualizzerai più volte un alert per metterti in guardia e bloccare i download.

![windowsinstance](images/firststepswindows6.png){.thumbnail}

Puoi disattivare le impostazioni di sicurezza dal pannello di controllo.

- Apri il **Pannello di controllo** e accedi alla sezione `Local Server`{.action}(1).

![windowsinstance](images/firststepswindows7.png){.thumbnail}

- Clicca su`On`{.action}accanto a **IE Enhanced Security Configuration** e disattiva l’opzione.

![windowsinstance](images/firststepswindows8.png){.thumbnail}

## Per saperne di più

[Accesso e sicurezza con Horizon](https://docs.ovh.com/it/public-cloud/accesso_e_sicurezza_con_horizon/){.external}

[Accedi al pannello di gestione di un’istanza con Horizon](https://docs.ovh.com/it/public-cloud/accedi_al_pannello_di_gestione_di_unistanza_con_horizon/){.external}

[Aggiungi credito Cloud](https://docs.ovh.com/it/public-cloud/aggiungi_credito_cloud_al_tuo_progetto/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>