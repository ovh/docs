---
title: "Enterprise File Storage - Caratteristiche di alcuni client NFS"
excerpt: "Parametri specifici da verificare e/o implementare relativamente all'offerta Enterprise File Storage"
updated: 2024-10-10
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Obiettivo

**Questa guida ti mostra come abilitare l’accesso in lettura/scrittura a File Storage di un’azienda da alcuni client NFS.**

## Prerequisiti

- Disporre di una soluzione [Enterprise File Storage](/links/storage/enterprise-file-storage)

## In pratica

### Client NFS Microsoft Windows

#### Assicurati che l'utente Windows utilizzato per accedere alla tua Entreprise File Storage disponga dei diritti necessari

La coppia UID/GID deve essere impostata su 0 (diritto unix root).

In caso contrario, si verificheranno errori di accesso all'Enterprise File Storage perché, quando NFS è autorizzato su un computer Windows, viene creato un utente UNIX con UID e GID predefiniti a -2 (o 4294967294).

Come soluzione alternativa, UID e GID possono essere forzati a 0 sulla macchina Windows che accede all'Enterprise File Storage.

- Avviare l'editor del Registro di sistema sul computer client.
- Individuare `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default`.
- Creare due valori DWORD, ovvero AnonymousUid e AnonymousGid.
- Impostare questi valori su UID e GID su 0.
- Riavviare il servizio NFS sul computer client.

> [!primary]
>
> **Documentazione di riferimento:**
>
> - <https://techcommunity.microsoft.com/t5/running-sap-applications-on-the/installation-configuration-of-windows-nfs-client-to-enable/ba-p/367084>
> - <https://learn.microsoft.com/en-gb/archive/blogs/msdn/sfu/can-i-set-up-user-name-mapping-in-windows-vista>
> - <https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753302(v=ws.10)?redirectedfrom=MSDN>
> - <https://kb.netapp.com/on-prem/ontap/da/NAS/NAS-KBs/Unable_to_perform_write_operations_on_an_export_mounted_on_a_Windows_machine>

#### Consenti connessioni guest non protette per i protocolli SMB2 e SMB3

Per accedere all'Enterprise File Storage potrebbe essere necessario attivare le connessioni guest, in quanto l'Enterprise File Storage non fornisce un account utente ma solo un accesso guest.

Per modificare di conseguenza il criterio di protezione, eseguire le operazioni seguenti:

- Eseguire il prompt dei comandi `gpedit.msc` e selezionare `Edit group policy`.
- Nel riquadro sinistro, in `Local Computer Policy`, passare a `Computer Configuration\Administrative Templates\Network\Lanman Workstation`.
- Aprire `Enable insecure guest logons`, selezionare `Enabled`, quindi selezionare `OK`.

> [!primary]
>
> **Documentazione di riferimento:**
>
> - <https://learn.microsoft.com/en-us/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=group-policy>

#### Richiedi l'attivazione della funzionalità "showmount" al supporto OVHcloud

Per motivi di sicurezza, l'opzione "showmount" che permette di visualizzare le condivisioni disponibili su un server NFS è disattivata di default.
Tuttavia, se si verificano errori di tipo "invalid device error" durante alcune operazioni di scrittura o se si utilizza un'applicazione che deve assolutamente utilizzare questa funzionalità, aprire un [ticket al supporto OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help) e richiedere che sia attivata in via eccezionale.

> [!primary]
>
> **Documentazione di riferimento:**
>
> - <https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/showmount>

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).
