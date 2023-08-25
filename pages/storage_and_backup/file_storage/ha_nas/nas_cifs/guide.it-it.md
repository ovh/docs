---
title: Configura il tuo NAS-HA su Windows Server tramite CIFS
excerpt: Questa guida ti mostra come configurare un NAS-HA su Windows Server tramite CIFS.
updated: 2021-11-22
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>


## Obiettivo

Configura e monta il tuo spazio di storage NAS-HA OVHcloud su Windows Server tramite CIFS.

## Prerequisiti

- Un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) **o** un [VPS](https://www.ovhcloud.com/it/vps/) **o** un'[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/) con distribuzione Windows.
- Un'offerta [NAS-HA](https://www.ovh.it/nas/).

### Configurazione

- **Windows Server 2008** : clicca sul menu `Start`{.action} > `All the programs`{.action} > `Accessories`{.action} > `Command prompt`{.action}.
- **Windows Server 2012** : clicca sull'icona `Windows PowerShell`{.action} nella barra dei task.
- **Windows Server 2016** : clicca sul menu `Start`{.action} e poi sull'icona del `Windows PowerShell`{.action}.
- **Windows Server 2019** : clicca sul menu `Start`{.action} e poi sull'icona del `Windows PowerShell`{.action}.

Esegui questo comando:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

### Esempi

- Montaggio CIFS per un NAS-HA:

```bash
net use z: \\10.16.101.8\zpool-000206_PARTITION_NAME_1
```

> [!alert]
>
> L'utente SMB/CIFS è `nobody`, qualsiasi modifica dei diritti effettuata da questo utente può generare conflitti con i diritti NFS esistenti.
> 

## Per saperne di più

[Domande frequenti sul NAS](/pages/storage_and_backup/file_storage/ha_nas/nas_faq)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.