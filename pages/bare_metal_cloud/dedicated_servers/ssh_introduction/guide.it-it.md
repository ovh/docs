---
title: Come eseguire le prime operazioni sulle connessioni SSH
excerpt: "Scopri come utilizzare SSH per accedere al tuo server OVHcloud dalla maggior parte delle postazioni di lavoro"
updated: 2024-12-03
---

<style>
details>summary {
	color:rgb(33, 153, 232) !important;
	cursor: pointer;
}
details>summary::before {
	content:'\25B6';
	padding-right:1ch;
}
details[open]>summary::before {
	content:'\25BC';
}
</style>

## Obiettivo

Il protocollo di comunicazione SSH (Secure Shell) è il mezzo preferito per stabilire connessioni host crittografate tramite reti pubbliche. OpenSSH è disponibile su tutti i server OVHcloud (VPS, server dedicati, istanze Public Cloud) per consentire connessioni remote sicure ai server e altre operazioni.

**Questa guida ti mostra come connettersi al server in sicurezza utilizzando il protocollo SSH.**

> [!warning]
> OVHcloud fornisce servizi la cui configurazione e gestione sono di vostra responsabilità. È quindi vostra responsabilità assicurarvi che funzionino correttamente.
>
> Questa guida è concepita per aiutarti con le operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider di servizi specializzato](/links/partner) o la [community OVHcloud](/links/community). Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) di questa guida.
>

## Prerequisiti

- Un [server dedicato](/links/bare-metal/bare-metal) o un [VPS](/links/bare-metal/vps) nel tuo account OVHcloud

> [!primary]
> Questa guida non si applica alle installazioni server Windows standard, in quanto basate sul protocollo RDP (Remote Desktop Protocol) per le connessioni. Le connessioni SSH sono tuttavia rilevanti quando si utilizza il Rescue mode OVHcloud. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) di questa guida.
>

## Procedura

Esistono diversi modi per autenticare una connessione a un host remoto via SSH. Le istruzioni seguenti riguardano il metodo di autenticazione con **nome utente e password**.  
È inoltre possibile configurare l'autenticazione a chiave per attivare connessioni protette senza lo scambio di password. Per maggiori dettagli, consulta le nostre guide:

- [Come creare e utilizzare le chiavi per l’autenticazione SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Come creare e utilizzare chiavi per l’autenticazione SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Le credenziali iniziali (identificativo e password) vengono inviate via email dopo l’installazione o la reinstallazione del server dallo [Spazio Cliente OVHcloud](/links/manager).

Il nome utente corrisponde al sistema operativo, ad esempio `ubuntu` o `debian`. Per accedere è necessario specificare anche l’indirizzo IP o il `hostname` del server. Questi dettagli sono disponibili nell’email di installazione e nello Spazio Cliente.

Per maggiori informazioni, consulta le nostre guide "Primi passi":

- Per un [server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Per un [server dedicato della gamma **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Per un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

### Come connettersi a un server remoto da una distribuzione GNU/Linux o macOS

/// details | Espandi questa sezione

#### Connessione

Un client da riga di comando per SSH (protocollo OpenSSH) è generalmente disponibile di default. Aprire l'applicazione da riga di comando (Terminal) e connettersi al server con il comando seguente:

```bash
ssh username@server_IP
```

Se hai modificato la porta SSH del server, utilizza questo comando:

```bash
ssh username@server_IP -p port_number
```

#### Connessione e fingerprint

Quando richiesto, digita la password dell’utente che si connette (o incollala con un click dal pulsante centrale del mouse) e premi `Invio`{.action}.

Se si tratta di una nuova connessione, il client SSH riceverà un **impronta della chiave** dal server. Digita `yes` per confermare e poi la password dell’utente che si connette per accedere.

Esempio di output:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

L'impronta digitale verrà salvata sul dispositivo e verificata a ogni nuova connessione. Se la chiave è stata modificata nell'host remoto, verrà visualizzato un messaggio di avviso durante il tentativo di connessione.

Esempio di output:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Ciò significa che si è verificato uno dei seguenti eventi:

- Il server è stato reinstallato correttamente.
- Il servizio SSH sul server è stato reinstallato correttamente.
- Ti connetti a un host diverso con lo stesso indirizzo IP.

> [!primary]
> L'avviso non indica necessariamente un problema di protezione. Tuttavia, se non si è la causa di uno di questi incidenti, il server remoto potrebbe essere compromesso.
>

Per risolvere il problema, utilizza il comando seguente con l’indirizzo IP del tuo server:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 203.0.113.100
```

È inoltre possibile modificare il file `known_hosts` nella cartella `home` dell'account utente locale utilizzando un editor di testo.

Esempio:

```bash
nano ~/.ssh/known_hosts
```

Individuare la riga `offending` specificata nell'avviso (in questo esempio, la terza riga). Evidenziare l'intera riga ed eliminarla.

Salvare le modifiche e uscire dall'editor. Sarà necessario confermare la nuova impronta al successivo accesso al server.

///

### Come connettersi a un server remoto da un dispositivo Windows

/// details | Espandi questa sezione

#### Connessione

Le versioni più recenti del sistema operativo Windows includono OpenSSH, che consente di utilizzarlo direttamente dalle applicazioni native della riga di comando (PowerShell o Prompt dei comandi).

Clicca con il tasto destro del mouse sul pulsante `Start`{.action} di Windows e seleziona `Windows PowerShell`{.action}. È inoltre possibile utilizzare il campo di ricerca per avviare una delle applicazioni della riga di comando.

![PowerShell](images/windowsps.png){.thumbnail}

Connettiti al server con questo comando:

```bash
ssh username@server_IP
```

Se hai modificato la porta SSH del server, utilizza questo comando:

```bash
ssh username@server_IP -p port_number
```

#### Connessione e fingerprint

Quando richiesto, digita la password dell’utente che si connette (o incollala cliccando con il tasto destro) e premi `Invio`{.action}.

Se si tratta di una nuova connessione, il client SSH riceverà un **impronta della chiave** dal server. Digita `yes` per confermare e poi la password dell’utente che si connette per accedere.

Esempio di output:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

L'impronta digitale verrà salvata sul dispositivo e verificata a ogni nuova connessione. Se la chiave è stata modificata nell'host remoto, verrà visualizzato un messaggio di avviso durante il tentativo di connessione.

Esempio di output:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Ciò significa che si è verificato uno dei seguenti eventi:

- Il server è stato reinstallato correttamente.
- Il servizio SSH sul server è stato reinstallato correttamente.
- Ti connetti a un host diverso con lo stesso indirizzo IP.

> [!primary]
> L'avviso non indica necessariamente un problema di protezione. Tuttavia, se non si è la causa di uno di questi incidenti, il server remoto potrebbe essere compromesso.
>

Per risolvere il problema, immettere il comando seguente con il nome dell'account utente locale di Windows e l'indirizzo IP del server:

```bash
ssh-keygen -f "C:\Users\Name_Windows_User\.ssh\known_hosts" -R 203.0.113.100
```

È inoltre possibile accedere alla cartella, fare clic con il pulsante destro del mouse sul file e aprirlo con un editor di testo (Notepad, Notepad++ e così via)

![known_hosts](images/windowskh.png){.thumbnail}

Individuare la riga `offending` specificata nell'avviso (in questo esempio, la terza riga). Evidenziare l'intera riga ed eliminarla.

Salvare le modifiche e uscire dall'editor. Sarà necessario confermare la nuova impronta al successivo accesso al server.

///


### Utilizzo di client GUI dedicati o software compatibili SSH

Se si preferisce un'interfaccia utente grafica, è possibile trovare molte applicazioni software per ogni tipo di sistema operativo che consentono di connettersi a host remoti tramite il protocollo SSH.

Ad esempio, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) è un software client SSH open source dotato di numerose funzionalità utili. Scopri come utilizzarlo per le connessioni ai server OVHcloud nella nostra guida:

[Come utilizzare PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

<a name="gofurther"></a>

## Per saperne di più

[Configurazione degli account utente e dell'accesso root su un server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Come creare e utilizzare le chiavi per l’autenticazione SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Come creare e utilizzare le chiavi per l'autenticazione SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Modalità Rescue su un server dedicato](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modalità Rescue su un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).