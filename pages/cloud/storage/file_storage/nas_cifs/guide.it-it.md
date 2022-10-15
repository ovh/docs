---
title: Configura il tuo NAS-HA su Windows Server tramite CIFS
slug: nas/cifs
excerpt: Questa guida ti mostra come configurare un NAS-HA su Windows Server tramite CIFS.
section: NAS
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 08/12/2021**

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

[Domande frequenti sul NAS](https://docs.ovh.com/it/storage/faq-nas/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.