---
title: "Configurazione degli account utente e dell'accesso root su un server"
excerpt: "Scopri come eseguire le prime operazioni sulla gestione degli account utente di un sistema operativo GNU/Linux"
updated: 2024-02-19
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I server dedicati o i VPS OVHcloud consentono di usufruire di un "**accesso root**" al servizio. In parole povere, l'utente è l'amministratore del sistema e dispone del livello di autorizzazione più elevato.

Anche se il server non viene utilizzato per scopi che richiedono l'amministrazione di utenti reali, la gestione degli **account utente** è un argomento legato alla sicurezza che non deve essere sottovalutato. Questa guida fornisce alcuni suggerimenti di base per iniziare a occuparsi di:

- Come configurare gli account utente di sistema con diversi livelli di autorizzazione
- Best practice per gestire l'accesso al server ed eseguire comandi con privilegi elevati

## Prerequisiti

- Un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) o un [VPS](https://www.ovhcloud.com/it/vps/) con un sistema operativo Linux nel tuo account OVHcloud
- Disporre delle credenziali di accesso ricevute via email in seguito all’installazione

## Procedura

Gli esempi seguenti presuppongono che l'utente sia connesso al server in SSH.<br>
Per maggiori informazioni su questo argomento, consulta la nostra guida "[Iniziare a utilizzare SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)".

Non dimenticare di consultare anche le nostre guide di primo passo:

- Per un [server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Per un [server dedicato della gamma **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Per un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente all’amministrazione, all’utilizzo o all’implementazione dei servizi di un server, ti consigliamo di contattare un [provider specializzato](/links/partner) o [la nostra Community](https://community.ovh.com/en/).
>

> [!primary]
>
> Le istruzioni contenute in questa guida sono basate su un sistema operativo server Debian/Ubuntu e non sono esaustive. Gli esempi riportati di seguito sono pensati per fornire un punto di partenza e aiutare a prevenire falle di sicurezza facilmente sfruttabili. Con conoscenze di base sulla gestione degli account utente e le best practice associate, è possibile andare oltre con gli argomenti più pertinenti per il proprio caso d’uso.
>
> Si consiglia di consultare le **pagine del manuale di sistema** per ogni ordine utilizzato. È possibile farlo dalla riga di comando immettendo `man` seguito da un nome di comando, funzione o file di sistema.
>

### Sommario

- [Gestione degli account utente](#accounts)
    - [Creazione di un account utente non privilegiato](#unprivileged)
    - [Creare un account utente con i privilegi di root](#privileged)
    - [Esecuzione di comandi come amministratore ("sudo")](#sudo)
    - [Disattivazione dell'account utente](#disable)
    - [Attivazione dell'account utente](#enable)
    - [Eliminazione di un account utente](#delete)
    - [Cambio account utente](#switch)
    - [Passa all'account "root" ("root shell")](#rootshell)
- [Attivazione della connessione dell'utente "root"](#enableroot)
    - [Attiva l'account "root"](#rootstep1)
    - [Modifica il file "sshd_config"](#rootstep2)
    - [Restarting the SSH service](#rootstep3)


<a name="accounts"></a>

### Gestione degli account utente

Ti ricordiamo che le policy di sicurezza dei server possono essere adattate a diversi casi d’uso e ambienti utente. I passaggi descritti di seguito forniscono una spiegazione di base sulla gestione degli account utente, con particolare attenzione alla convenienza e alla sicurezza, e non sono universalmente validi.

Dopo aver reinstallato il server (con un template OVHcloud), inizi con queste condizioni:

- Un account utente con autorizzazioni elevate viene creato e denominato in base al sistema operativo, ad esempio "ubuntu", "rocky", ecc.
- Hai ricevuto la password iniziale di questo account con l’email di installazione.
- Per connettersi al server con queste credenziali è possibile utilizzare un client SSH.

Il prompt dei comandi dopo la connessione varia in base al tipo di servizio e alla distribuzione installata. Ad esempio: 

```text
ubuntu@ns9356771:~$
```

Ti ricordiamo che negli esempi di riga di comando seguenti continueremo a utilizzare "ubuntu" per fare riferimento al `user account` preconfigurato.

Verifica che questo account sia già stato aggiunto al `sudo group` nell’output di questo comando:

```bash
id
```

```text
27(sudo)
```

È inoltre possibile immettere `groups` per visualizzare solo i gruppi di cui è membro l'account utente corrente.

Ciò significa che l’utente al quale si è attualmente connessi può eseguire tutti i comandi anteponendo il comando `sudo` (`root privileges`). Per maggiori informazioni, consulta la [sottosezione della guida corrispondente, qui di seguito](#sudo).

> [!primary]
> 
> **Definizione dei termini**
> 
> Ai fini di questa guida, valgono le seguenti definizioni:
> 
> - `administrator`: persona autorizzata ad eseguire tutti i comandi su un server (amministratore del server).
> - `sudo user` : account utente utilizzato da un amministratore. Questo account è membro del `sudo group`. Altre risorse di conoscenza e tutorial possono assegnare un’etichetta diversa a un utente del genere, ad esempio `sudoer`, `superuser`, `root user`, `admin`, ecc.
> - `sudo group`: il `user group` con le autorizzazioni necessarie per eseguire tutti i comandi su un server (`root privileges`, i cui dettagli sono definiti dalla politica di sicurezza del sistema operativo).
> - `user group` / `group`: entità tecnica che raggruppa gli `user account` per la gestione della sicurezza.
> - `root` / `root user` / `root account`: account utente con `root privileges` esistente di default sui sistemi GNU/Linux e utilizzato per scopi specifici.
>
> Per conoscere i dettagli e le impostazioni che si applicano al vostro sistema, potete iniziare dalle pagine `man` per `sudo` e `sudoers`.
>

<a name="unprivileged"></a>

#### Creazione di un account utente non privilegiato

Anche se non è necessario concedere l’accesso al server ad altre persone, la creazione di un account utente senza autorizzazioni speciali (chiamato anche `normal user` o `regular user`) può essere utile per motivi di sicurezza. Ad esempio, non si corre il rischio di danneggiare accidentalmente il sistema eliminando o modificando i file di configurazione del server durante l'esecuzione di comandi o processi da un account utente senza autorizzazioni elevate.

Un altro esempio di best practice consiste nel creare un account utente dedicato a un’applicazione ospitata sul server. Anche se l'account utente è compromesso da questa applicazione, l'assenza di autorizzazioni elevate impedirà danni maggiori.

Creare un nuovo account utente (sostituire `username` con il nome effettivo dell’account utente, ad esempio il nome di un’applicazione):

```bash
sudo adduser username
```

È necessario fornire una password per il nuovo account. Verrà quindi richiesto di immettere i dettagli relativi al nuovo utente, che è facoltativo.

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Nota: in una distribuzione GNU/Linux, **il prompt della password non visualizza le voci della tastiera**.

- Pagine `man` pertinenti: `adduser`, `useradd`

<a name="privileged"></a>

#### Creazione di un account utente con i privilegi di root

In questa sezione viene creato un nuovo account utente per un `administrator` e vengono concesse autorizzazioni elevate sul server (`root privileges`).

Creare un nuovo account utente (sostituire `username` con il nome effettivo dell’account utente):

```bash
sudo adduser username
```

Aggiungi il nuovo account utente al `sudo group`:

```bash
sudo usermod -aG sudo username
```

Per verificare l’appartenenza al `group`, esegui questo comando: 

```bash
groups username
```

Esempio:

```bash
groups ubuntu
```

```text
ubuntu sudo users
```

Il nuovo account utente è ora un `sudo user` e può eseguire tutti i comandi.

Questo è configurato di default per il `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

Queste configurazioni sono disponibili rispettivamente in `/etc/sudoers` e nella directory `/etc/sudoers.d`.


> [!primary]
>
> La corretta gestione degli utenti, inclusi i metodi di autenticazione, dipende dall'ambiente di lavoro e da altri fattori. Per gestire gli account utente e di gruppo su un server, consultare la documentazione ufficiale del sistema operativo e le Knowledge Base appropriate.
>

<a name="sudo"></a>

#### Esecuzione dei comandi come amministratore ("sudo")

Qualsiasi azione che richieda autorizzazioni elevate verrà rifiutata a meno che non venga utilizzato il comando `sudo`.

Ad esempio, per modificare una password per **qualsiasi account utente**, digitare `sudo passwd` seguito da `username`:

```bash
sudo passwd ubuntu
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Il sistema ti chiederà frequentemente la password di `sudo user` a cui sei connesso durante l’esecuzione di `sudo`.

- Pagine `man` pertinenti: `sudo_root`, `sudo`, `sudoers`

<a name="disable"></a>

#### Disattivazione account utente

Per disattivare un `user account`, inserisci:

```bash
sudo passwd -dl username
```

L’account verrà bloccato (impedendo l’accesso tramite password) e impostato su "*passwordless*", disattivando in questo modo l’account.

<a name="enable"></a>

#### Attivazione account utente

Per riattivare un `user account` bloccato senza password, utilizza questi comandi (sostituisci `initialpassword` con una password temporanea):

```bash
sudo usermod username -p initialpassword
```

```bash
sudo passwd -u username
```

Per motivi di sicurezza, modifica nuovamente la password iniziale dell’utente:

```bash
sudo passwd username
```

- Pagine `man` pertinenti: `passwd`, `usermod`

<a name="delete"></a>

#### Eliminazione di un account utente

Un metodo semplice per eliminare un account e i suoi file è il seguente:

```bash
sudo userdel -r -f username
```

- Pagine `man` pertinenti: `userdel`, `deluser`

<a name="switch"></a>

#### Modifica account utente

In quanto `sudo user`, è possibile migrare verso qualsiasi altro account utente (senza dover conoscere la password):

```bash
sudo su username
```

Il prompt dei comandi verrà modificato di conseguenza:

```text
ubuntu@ns9356771:~$ sudo su username
username@ns9356771:/home/ubuntu$
```

Per tornare all’account utente precedente, passa di nuovo o utilizza `exit`.

<a name="rootshell"></a>

#### Passa all'account "root" ("root shell")

Dopo una nuova installazione del tuo server (con un template OVHcloud), il `root account` (account utente chiamato `root`) può essere utilizzato ma non ha una password.

Per motivi di sicurezza, il `root account` deve essere utilizzato solo quando necessario e **è accessibile solo dal sistema stesso**.

Per passare al `root account`, esegui questo comando:

```bash
sudo -s
```

Il prompt dei comandi verrà modificato di conseguenza:

```text
ubuntu@ns9356771:~$ sudo -s
root@ns9356771:/home/ubuntu#
```

Il carattere `#` alla fine del prompt dei comandi indica una `root shell`, a differenza di un prompt che termina per `$`.

Utilizzare il comando seguente per tornare all'account utente precedente:

```bash
exit
```

**L’esecuzione di comandi come `root user` non è in genere necessaria e può essere addirittura controproducente.**

Un’idea falsamente diffusa è l’ipotesi che è necessario utilizzare il vero `root account` per eseguire comandi che richiedono autorizzazioni elevate (`root privileges`) su un sistema.

Tuttavia, come configurato di default nella politica `/etc/sudoers`, il livello di autorizzazione di `root` è identico a quello del `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

> [!primary]
>
> Tenere presente che i tutorial e la documentazione utente potrebbero non essere sempre conformi a una terminologia coerente. A meno che non sia stato verificato che l’utilizzo del `root account` reale è necessario per l’azione prevista, la migliore pratica è di eseguire comandi `sudo`. La modifica di file e impostazioni come `root` può avere conseguenze impreviste per il sistema.
>

<a name="enableroot"></a>

### Attivazione della connessione dell'utente "root"

> [!warning]
>
> Permettere al `root account` di connettersi in SSH è considerato una falla di sicurezza e non è quindi consigliabile.
>
> Per prima cosa, utilizza le nostre guide per proteggere il sistema: 
>
> - [Mettere in sicurezza un server dedicato](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
> - [Mettere in sicurezza un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
> 

<a name="rootstep1"></a>

#### Step 1: attiva l'account "root"

Digitare il comando seguente e fornire una password al prompt dei comandi:

```bash
sudo passwd root
```

Per annullare l’operazione, inserisci:

```bash
sudo passwd -d root
```

<a name="rootstep3"></a>

#### Step 2: modifica il file "sshd_config"

Utilizza un editor di testo come `vim` o `nano` per modificare questo file di configurazione:

```bash
sudo nano /etc/ssh/sshd_config
```

Ecco la riga:

```text
#PermitRootLogin prohibit-password
```

Il carattere iniziale `#` trasforma l'intera riga in una stringa di commento e viene quindi ignorato da qualsiasi applicazione che legge il file.

In caso contrario, la connessione con l’account utente `root` sarà **non abilitata**.

Aggiungi questa riga:

```text
PermitRootLogin yes
```

Per connettersi al server con `root` e la password corrispondente.

Salvare il file e uscire dall'editor. Per revocare questo tipo di accesso, ripetere i passaggi ed eliminare la riga.

<a name="rootstep2"></a>

#### Step 3: riavvia il servizio SSH

Riavvia il servizio SSH con uno dei comandi seguenti:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Ciò dovrebbe essere sufficiente per applicare le modifiche. In caso contrario, riavviare il server dalla riga di comando (`sudo reboot`).

## Per saperne di più

[Mettere in sicurezza un server dedicato](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Mettere in sicurezza un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.