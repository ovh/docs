---
title: "Come installare Plesk su un’istanza Public Cloud"
excerpt: "Come installare Plesk su un’istanza Public Cloud"
updated: 2025-04-08
---

## Obiettivo

Plesk è un’interfaccia di gestione server di semplice utilizzo, disponibile all’installazione su tutte le istanze Public Cloud OVHcloud.

**Questa guida ti mostra come installare e configurare l’interfaccia Plesk sulla tua istanza Public Cloud.** 

> [!warning]
> 
> OVHcloud mette a disposizione i server, ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente ad amministrazione e sicurezza, ti consigliamo di contattare un [provider specializzato](/links/partner). Non esitate a collegarvi alla nostra [community forum](/links/community) per comunicare con altri utenti.
>


## Prerequisiti

- [Aver creato un’istanza dallo Spazio Cliente OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)
- [Avere accesso amministratore](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance)

## Procedura

### Step 1: installa Plesk

Accedi all’istanza via SSH, scarica e poi esegui lo script di installazione di Plesk utilizzando uno di questi comandi:

> [!primary]
>
> In base al sistema operativo della tua istanza, il solo ordine sudo potrebbe non essere sufficiente. In caso di errore, attiva la modalità super-utente prima di avviare l’installazione:
>
> <pre class="highlight language-console"><code class="language-console">sudo su</code></pre>
>

- **Installazione predefinita non personalizzata**

```bash
sudo sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Installazione personalizzata**

```bash
sudo sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Attendi il completamento dell’operazione. 

### Step 2: completa la configurazione e aggiungi una licenza

Una volta completata l’installazione, l’interfaccia da riga di comando (CLI) visualizzerà le seguenti informazioni:

- Vengono generati due URL:
    - una con l'indirizzo IP del server (in HTTPS con un certificato SSL autofirmato, che può attivare un alert di sicurezza in alcuni browser).
    - L'altra con dominio Plesk (in HTTPS con certificato SSL firmato, senza alert di sicurezza).
    - Entrambi sono sicuri, ma si consiglia di utilizzare il secondo.
- Un messaggio recita: "Puoi accedere come ‘root’ con la tua password ‘root’." Tuttavia, per impostazione predefinita, non viene generata alcuna password di root. Se necessario, i clienti possono seguire [questa guida](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) per attivare l'utente root e impostare una password.

Segui le istruzioni visualizzate per completare l'installazione nella pagina Plesk.

![plesk configuration](images/plesk_configuration.png){.thumbnail}

Per aggiungere la licenza Plesk, assicurati di avere a disposizione la chiave ricevuta dal provider.

> [!primary]
>
> OVHcloud non fornisce licenze Plesk per le soluzioni Public Cloud. È possibile ottenerne una dal sito di [Plesk](https://www.plesk.com/).
>

Vuoi modificare la tua licenza, ad esempio per sostituire una chiave di test o cambiare offerta? Accedi all’interfaccia Plesk e, nella sezione `Tools & Settings`{.action}. Nella sezione **Plesk**, seleziona `License information`{.action}.

## Per saperne di più

[Documentazione ufficiale Plesk](https://docs.plesk.com/it-IT/obsidian/)

Contatta la nostra [Community di utenti](/links/community).