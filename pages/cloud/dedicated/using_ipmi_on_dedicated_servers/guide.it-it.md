---
title: 'Utilizzare l’IPMI sui server dedicati'
slug: utilizzo-ipmi-server-dedicati
excerpt: 'Come connettersi al proprio server tramite IPMI senza utilizzare software esterni'
section: 'Per iniziare'
---

**Ultimo aggiornamento: 13/12/2018**

## Obiettivo

La console IPMI (Intelligent Platform Management Interface) consente di stabilire una connessione diretta al tuo server dedicato senza utilizzare client esterni come Terminal o Putty. Questa guida ti mostra come avviare la console.

Attenzione: incontrerai spesso anche il termine KVM (Keyboard Video and Mouse), che viene utilizzato dai VPS per questa soluzione.

## Prerequisiti

- Essere connesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), sezione `Dedicato`{.action} > `Server Dedicati`{.action}


## Procedura

La connessione all’IPMI può essere stabilita in due modi: da applet Java (consigliato) o tramite browser (Serial Over LAN).

### Da applet Java

Per il corretto funzionamento dell'applet, è necessario che Java sia installato sul computer. Per scaricare il software, accedi al [sito ufficiale](https://www.java.com/it/download/){.external}.

Nello Spazio Cliente OVH, seleziona la scheda `IPMI`{.action} e clicca su `Da un'applet Java (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Scarica il file `kvm.jnlp` ed eseguilo:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

Si apre la pagina di accesso dove sono richieste le credenziali `root`, analogamente a una connessione da terminale o software esterno:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

A questo punto è possibile gestire il server.

### Da browser in modalità Serial Over LAN (SOL)

Anche se è consigliato utilizzare l’applet Java, l’IPMI è disponibile anche in modalità Serial Over LAN. Nello Spazio Cliente OVH, seleziona la scheda `IPMI`{.action} e clicca su `Dal tuo browser (SOL)`{.action}:

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> La connessione tramite SOL può richiedere diversi minuti, motivo per cui è preferibile utilizzare l'applet.
>

### Testa e riavvia l'IPMI

È possibile che l’IPMI smetta di rispondere. Se non riesci a effettuare l’accesso, per prima cosa esegui un test cliccando su `Testa IPMI`{.action}:

![IPMI test](images/ipmi_test.png){.thumbnail}

Se, come nel nostro esempio, tutto è normale, probabilmente è in corso un problema locale (connessione Internet, dispositivo utilizzato). Se, invece, il risultato del test restituisce degli errori, riavvia l'IPMI cliccando sul pulsante `Riavvia IPMI`{.action}.

![IPMI test](images/ipmi_reboot.png){.thumbnail}

L’operazione di riavvio potrebbe richiedere alcuni minuti.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.