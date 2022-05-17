---
title: Tutorial - Come creare un server Minecraft su un VPS o un server dedicato
slug: creare-server-minecraft-su-vps
excerpt: Come installare il tuo server Minecraft
section: Tutorial
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 29/06/2021**

## Obiettivo

Minecraft è un videogioco da costruzione di successo globale. Per giocare in modalità multiplayer, il server deve essere ospitato su un server.

È possibile noleggiare un server Minecraft precostruito o configurarlo su un [VPS](https://www.ovhcloud.com/it/vps/) o su un [server dedicato](https://www.ovhcloud.com/it/bare-metal/). per permetterti di risparmiare e avere il controllo completo sull'istanza di gioco.

**Questa guida ti mostra come avviare un server Minecraft Java Edition su un VPS OVHcloud e testarne la connettività.**

> [!warning]
>Questa guida ti mostra come utilizzare una o più soluzioni OVHcloud con strumenti esterni e descrive le azioni da effettuare in un contesto specifico. Potrai adattare le istruzioni in base alla tua situazione.
>
>In caso di difficoltà nell'applicazione di queste istruzioni, ti consigliamo di rivolgerti a un professionista specializzato. Per maggiori informazioni, consulta la sezione [Per saperne di più](#gofurther) di questa guida.
>

## Prerequisiti

- Disporre di un [VPS](https://www.ovhcloud.com/it/vps/) sul proprio account OVHcloud
- Aver installato una distribuzione GNU/Linux sul server
- Avere accesso amministratore (root) via SSH al server
- Comprendere principalmente l'amministrazione GNU/Linux

## Procedura

> [!primary]
> Questa guida si basa sulla versione "1.17" di Minecraft Java Edition e sulla versione "16.0.1" di OpenJDK.
>

### Step 1: preparare il server

Il primo step consiste nella configurazione del tuo VPS per un'installazione di Minecraft.
<br>
Si raccomanda di ordinare un nuovo VPS o di reinstallarne uno esistente dal vostro [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), utilizzando l'ultima versione disponibile di Ubuntu o Debian. Si prega di fare riferimento alla nostra guida "[Iniziare a utilizzare un VPS](../iniziare-a-utilizzare-vps/#reinstallvps)" se necessario.

Una volta installato il sistema operativo, accedi al tuo VPS in SSH come descritto nella guida "[Iniziare a utilizzare un VPS](../iniziare-a-utilizzare-vps/#reinstallvps)".

Per prima cosa, aggiorna i pacchetti con le versioni più recenti:

```sh
~$ sudo apt update
```

```sh
~$ sudo apt full-upgrade
```

Per assicurarti che siano installati tutti i pacchetti necessari, utilizza questo comando:

```sh
~$ sudo apt install screen nano wget git
```

Installa il pacchetto Java:

```sh
~$ sudo apt install openjdk-16-jdk
```

Per evitare di creare vulnerabilità nel tuo sistema, crea un utente chiamato "minecraft" che eseguirà le azioni del server:

```sh
~$ sudo adduser minecraft —disabled-login —disabled-password
```

Ti vengono richieste diverse informazioni è sufficiente premere il tasto `Entrata`{.action} per confermarli.

L'utente è stato creato. Ti ricordiamo che per questo utente non è stata specificata alcuna password. È normale perché l'account è accessibile solo quando è già connesso via SSH con il tuo account utente.

Passa al nuovo utente:

```sh
~$ sudo su - minecraft
```

> [!primary]
>
> I comandi successivi devono essere eseguiti dall'utente "minecraft".
>

Per completare la preparazione dell'installazione, crea una cartella di nome `server`.

```sh
~$ mkdir ~/server & cd ~/server
```

### Step 2: installa il tuo server Vanilla Minecraft

> [!primary]
>
> Un server "Vanilla" è un'istanza senza add-on o plugin. Potrai sperimentare il gioco nel modo in cui è stato creato dagli sviluppatori.
>

Per prima cosa, copia e incolla il link di download del software server.
<br>Sul [sito ufficiale di Minecraft](https://minecraft.net/download/server){.external}, clicca con il tasto destro sul link di download e seleziona `Copia l'indirizzo del link`{.action}.

![Download del server](images/download_jar.png){.thumbnail}

Nel tuo terminale da riga di comando, verifica di essere ancora nella cartella `server` e utilizza `wget` per scaricare il file.
<br>Sostituisci il `link_di_telecaricamento` con l'URL reale che hai copiato in precedenza.

```sh
~/server$ wget link_di_telecaricamento
```

Prima di avviare il server, è necessario accettare la licenza del software (EULA o _End User License Agreement_) per evitarne l'interruzione immediata. Per effettuare questa operazione esegui il comando:

```sh
~/server$ echo "eula=true" > eula.txt
```

A questo punto viene creato un file chiamato `eula.txt` nella root del tuo server, contenente la linea `eula=true`. Questo indica al software che accetta le condizioni di utilizzo di Minecraft.
<br>Per maggiori informazioni, consulta il [sito ufficiale di Minecraft](https://www.minecraft.net/){.external}.

Il server è pronto per il lancio.

Durante lo Step 1, abbiamo installato il pacchetto `screen` che permette di aprire diverse sessioni del terminale (*shell*). Avvieremo Minecraft in una nuova sessione che può essere eseguita sullo sfondo. L'utilizzo di `screen` può essere molto pratico perché permette di avviare contemporaneamente diversi server Minecraft.

Per prima cosa, creeremo una nuova `shell` chiamata `minecraft1`:

```sh
~/server$ screen -S minecraft1
```

La finestra attiva del tuo terminale cambia automaticamente e trasferisci automaticamente su una nuova sessione `shell`. Se necessario, è possibile creare altre `shell` e visualizzarle via questo comando:

```sh
screen -ls
```

Per staccarti dalla `shell` (e mantenerla in corso di esecuzione), clicca su `Ctrl`{.action}, poi su `a`{.action} e poi su `d`{.action} sulla tastiera.

Per passare da un `shell` a un altro, utilizza il seguente comando:

```sh
~/server$ screen -x nome_shell
```

Premi anche `Ctrl`{.action}, poi `a`{.action}, poi `n`{.action} sulla tastiera.

Nella shell `minecraft1` creata precedentemente, avvia il server Minecraft con il comando seguente. (Utilizza `ls` strumenti per verificare il nome del file nel caso in cui fosse diverso).

```sh
~/server$ java -jar server.jar
```

Per arrestare il server, inserisci il comando `stop`.

### Step 3: connettersi al server

L'istanza di server è attiva Per giocare a gioco, scarica il client Minecraft dal [sito web ufficiale](https://www.minecraft.net/){.external}.

Installa e avvia il client per il tuo sistema operativo e collegati.

![Connessione al server](images/login_minecraft.png){.thumbnail}

Nella schermata successiva inserisci il nome del server nel campo `Server Name` e l'indirizzo IP del server nel campo `Server Address`.

![Informazioni sul server](images/minecraft_server_login.png){.thumbnail}

Nessuna porta da inserire di default

### Conclusione

Il tuo server Vanilla Minecraft è installato sul tuo VPS.

Questa guida è valida anche per un [server dedicato OVHcloud](https://www.ovhcloud.com/it/bare-metal/) o un'istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/). Con queste soluzioni, potrai usufruire anche di risorse fisiche garantite e stabili in qualsiasi momento della giornata, dato che l'hardware è dedicato.

## Per saperne di più <a name="gofurther"></a>

Per aggiungere add-ons, mods e configurare più finemente il tuo server Minecraft, consulta la documentazione ufficiale: <https://help.mojang.com/>.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
