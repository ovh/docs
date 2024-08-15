---
title: "Deploy di cPanel su un VPS"
excerpt: "Come installare un VPS con l'applicazione cPanel preinstallata"
updated: 2024-01-31
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

## Obiettivo

cPanel è un pannello di controllo che facilita la gestione degli hosting Web. Rende le operazioni complesse più accessibili, anche per i nuovi utenti. Offre un'ampia gamma di funzionalità, ad esempio per la gestione: 

- delle email
- dei domini
- database
- della sicurezza
- ecc.

Grazie a un’interfaccia grafica che permette di automatizzare i parametri, l’hosting dei siti Web è semplificato.

**Questa guida ti mostra come installare cPanel con le applicazioni preinstallate su un VPS.**

## Prerequisiti

- Disporre di una soluzione [VPS recente](https://www.ovhcloud.com/it/vps/){.external} con un [OS compatibile con cPanel](https://www.ovhcloud.com/it/vps/os/).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

Se hai già un VPS e vuoi installarlo, puoi reinstallarlo dal tuo [Spazio Cliente OVHcloud](/links/manager) tramite un [OS compatibile con cPanel](https://www.ovhcloud.com/it/vps/os/).

> [!warning]
>
> Se riinstalli un VPS, tutti i dati salvati sul VPS verranno persi.
> 

Per installare il tuo server cPanel, ordina un VPS con la distribuzione cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Quando il VPS è pronto, ricevi un’email con le credenziali di accesso al server cPanel:

```
 |    Le tue applicazioni:
 |    Application: cpanel
 |    Puoi accedere a cPanel da https://<ip>:2087/<session_parameters>
```

### Prima connessione

Una volta ricevuta l’email con il link univoco, clicca su questo link per effettuare la configurazione iniziale. Se il link è già scaduto, connettiti in [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) al server ed esegui il comando `sudo whmlogin` per generare un nuovo link.

L’URL generato dal comando `sudo whmlogin` ti permette di accedere senza informazioni di identificazione (utente e password) alla tua interfaccia WHM. WHM è un livello aggiuntivo di cPanel. Dopo aver completato gli step successivi, è possibile accedere a cPanel.

#### Step 1: leggi e accetta le condizioni di utilizzo di cPanel

Leggi e accetta le condizioni di utilizzo di cPanel.

![cPanel](images/license_validation.png){.thumbnail}

#### Step 2: completare i campi richiesti

Indica i server di posta e di nome (nameserver) che vuoi definire sul server VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### Step 3: definire la password di root

![cPanel](images/change_root.png){.thumbnail}

Da questo momento è possibile accedere al server in SSH utilizzando l’utente root con la password definita.

### Creare un account cPanel dall'interfaccia WHM

Una volta connesso all’interfaccia WHM, clicca su `Create a New Account`{.action} per creare un account cPanel.

![cPanel](images/create_new_account.png){.thumbnail}

Compila il form e conferma la creazione dell’account cPanel.

![cPanel](images/create_new_account_form.png){.thumbnail}

Clicca sul pulsante `Go to cPanel`{.action} a destra della nuova schermata.

![cPanel](images/go_to_cpanel.png){.thumbnail}

Verrai reindirizzato alla tua interfaccia cPanel.

![cPanel](images/manager_cpanel.png){.thumbnail}

Ora è possibile utilizzare cPanel. Per ulteriori informazioni su cPanel, consultare la [documentazione ufficiale](https://docs.cpanel.net/).

> [!primary]
>
> Nella barra di navigazione del browser, immettere i seguenti URL per accedere a:
>
> - cPanel: https&#58;//&#60;IP_V4&#62;:2083/ (utilizza le credenziali appena create nell’interfaccia WHM)
> - WHM: https&#58;//&#60;IP_V4&#62;:2087/ (utilizza il nome utente "root" e la password ricevuta nell’email di acquisto del servizio o la password SSH che è stata modificata nell’interfaccia WHM)
>
> Recupera il tuo indirizzo IPv4 nell'email che hai ricevuto in seguito all'ordine del tuo VPS con la distribuzione cPanel.
>

### Protezione del servizio

Ti consigliamo di adottare tutte le misure necessarie per proteggere il tuo WHM e il tuo VPS. Per farlo, ti consigliamo di consultare [le raccomandazioni di cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Per [proteggere un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), utilizzare [le nostre soluzioni di backup](/products/bare-metal-cloud-virtual-private-servers) e configurare il [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network), consulta la nostra guida.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
