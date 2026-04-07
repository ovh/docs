---
title: 'Creare un’istanza GPU'
excerpt: 'Scopri come creare un’istanza GPU con Linux o Windows'
updated: 2026-04-07
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Le istanze GPU sono tecnicamente simili alle istanze della gamma 2017 ma dispongono anche di una scheda grafica (Graphic Processing Unit o GPU). La tecnologia utilizzata (*pci_passthrough*) permette al sistema operativo dell’istanza di controllare la GPU esattamente come su una macchina fisica.

> [!warning]
>
> Per il momento, la maggior parte delle nostre istanze GPU precedenti (Tesla V100 and V100s) sono disponibili solo nelle Region GRA7, GRA9, GRA11 e BHS5. I modelli più recenti (A100, H100, L4 and L40s) sono attualmente disponibili solo nell'area GRA11.
> 

**Questa guida ti mostra come creare un’istanza GPU con Linux o Windows.**

## Prerequisiti

- Un progetto Public Cloud con accesso alle Region in cui è disponibile la maggior parte delle GPU (GRA7, GRA9, GRA11 e BHS5).
- [Una chiave SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) creata per implementare un’istanza GPU Linux.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo progetto

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedura

Di seguito troverai le informazioni necessarie per creare un’istanza GPU utilizzando Linux o Windows.

Nella pagina `Accesso rapido`{.action}, clicca su `Creare un’istanza`{.action}. Scegli un modello di istanza GPU compatibile corrispondente alle istanze di tipo **Cloud GPU**, per beneficiare di risorse adatte ai carichi di lavoro grafici o di calcolo intensivo.

Segui gli step rimanenti, come descritto in [questa guida](/pages/public_cloud/compute/public-cloud-first-steps#create-instance). Questo processo potrebbe richiedere alcuni minuti.

> [!tabs]
> Linux
>> Tutte le immagini proposte da OVHcloud sono compatibili con le istanze GPU.
>>
>> Allo step di selezione dell’immagine, apri la scheda `Distribuzioni Unix`{.action} e scegli un’immagine UNIX adatta alle tue esigenze.
>>
>> > [!primary]
>> >
>> > Se preferisci non compilare manualmente il modulo del kernel, ti consigliamo di utilizzare una distribuzione ufficialmente supportata da Nvidia e per la quale esistono dei driver *pronti all’uso*: <https://developer.nvidia.com/cuda-downloads>.
>> >
>>
>> Una volta consegnata l’istanza, è possibile collegarsi ad essa e verificare la presenza della scheda grafica:
>>
>> ```bash
>> lspci | grep -i nvidia
>> 00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
>> 00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
>> ```
>>
>> La scheda grafica è presente ma non ancora utilizzabile. A questo punto, è necessario installare i driver NVIDIA. La lista dei pacchetti è disponibile al seguente indirizzo: [Lista dei pacchetti Linux disponibili](https://developer.download.nvidia.com/compute/cuda/repos/).
>>
>> Successivamente, inserisci i seguenti comandi:
>>
>> ```sh
>> wget URL_of_packet_to_download
>> sudo dpkg -i cuda-repo-XXXX-XXXXXX
>> sudo apt-get update
>> sudo apt-get upgrade
>> sudo apt-get install cuda
>> sudo apt-get install -y cuda-drivers
>> sudo apt-get install linux-headers-$(uname -r)
>> sudo reboot
>> ```
>>
>> > [!primary]
>> >
>> > Il comando Linux può variare in base alla distribuzione utilizzata. In caso di dubbi, consulta la documentazione ufficiale della tua versione Linux.
>> >
>>
>> Una volta riavviata l’istanza, la scheda grafica compare all’interno del programma NVIDIA:
>>
>> ```sh
>> nvidia-smi
>> Wed Apr 26 13:05:25 2017
>> +-----------------------------------------------------------------------------+
>> | NVIDIA-SMI 375.51                 Driver Version: 375.51                    |
>> |-------------------------------+----------------------+----------------------+
>> | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
>> | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
>> |===============================+======================+======================|
>> |   0  GeForce GTX 106...  Off  | 0000:00:05.0     Off |                  N/A |
>> |  0%   22C    P0    26W / 120W |      0MiB /  6072MiB |      0%      Default |
>> +-------------------------------+----------------------+----------------------+
>>
>> +-----------------------------------------------------------------------------+
>> | Processes:                                                       GPU Memory |
>> |  GPU       PID  Type  Process name                               Usage      |
>> |=============================================================================|
>> |  No running processes found                                                 |
>> +-----------------------------------------------------------------------------+
>> ```
>>
>> Da questo momento l’istanza GPU è pienamente operativa e pronta per essere utilizzata.
>>
> Windows
>> A causa di alcune incompatibilità tra il driver NVIDIA e la soluzione di virtualizzazione *KVM/pci_passthrough*, **le immagini Windows standard non funzionano.**
>>
>> OVHcloud fornisce immagini speciali, basate su un BIOS virtuale **UEFI**, che permettono al driver di funzionare correttamente.
>>
>> > [!warning]
>> >
>> > Offriamo la possibilità di installare le immagini speciali su alcuni modelli selezionati (T1-45, T1-90, T1-180, T2-45, T2-90, T2-180). Inoltre, a seconda della regione selezionata, queste immagini speciali potrebbero non essere disponibili.
>> >
>>
>> Allo step di selezione dell’immagine, apri la scheda `Distribuzioni Windows`{.action} e seleziona un’immagine Windows compatibile con il modello di istanza scelto.
>>
>> > [!warning]
>> >
>> > Non siamo in grado di garantire che la soluzione funzionerà con tutte le versioni future del driver NVIDIA.
>> >
>> > Prima di effettuare qualsiasi aggiornamento del driver NVIDIA, ti consigliamo di effettuare uno snapshot della tua istanza per ripristinarla all’occorrenza.
>> >
>>
>> **Connessione a un’istanza Windows**
>>
>> Una volta creata l’istanza, è necessario completare l’installazione di Windows (_sysprep_). Per farlo, clicca sul pulsante con i tre puntini `...`{.action} e quindi su `Dettagli dell’istanza`{.action}. Clicca sulla scheda `Console VNC`{.action}. La console dovrebbe già mostrare l’interfaccia di installazione.
>>
>> Nel primo step, scegli i parametri di localizzazione, selezionando la regione, la lingua e il layout della tastiera. Clicca su `Avanti`{.action} per continuare.
>>
>> Il secondo step richiede la configurazione dell’account predefinito “Administrator”. Inserisci la tua passphrase per due volte e clicca su `Termina`{.action} per completare il processo di installazione. Clicca sul simbolo dell’occhio per controllare se tutti i caratteri inseriti nei campi corrispondono alla configurazione effettiva della tua tastiera.
>>
>> L’istanza si riavvierà e sarà possibile accedere con queste credenziali tramite un client Desktop remoto.
>>
>> **Da Windows**
>>
>> Se necessario, utilizza Windows Search e apri l’applicazione client “Remote Desktop Connection”.
>>
>> Inserisci l’indirizzo IPv4 della tua istanza e seleziona l’utente “Administrator”. A questo punto, inserisci la tua passphrase. Trattandosi di un certificato sconosciuto, potresti visualizzare un messaggio di avviso per confermare la connessione. Clicca su `Sì`{.action} per accedere all’istanza.
>>
>> > [!primary]
>> >
>> > In caso di difficoltà, verifica che il tuo dispositivo autorizzi la connessione RDP. Per farlo, controlla le impostazioni di sistema, le regole del firewall e le eventuali limitazioni della rete.
>> >
>>
>> Una volta connesso all’istanza, è necessario installare il driver NVIDIA dal [sito ufficiale](https://www.nvidia.com/Download/index.aspx).
>>
>> Dopo l’installazione, il driver comparirà in **Gestione dispositivi > Schede video**, permettendoti di verificare che la scheda GPU sia correttamente riconosciuta e operativa. Potrai quindi iniziare a utilizzare la tua istanza per le applicazioni che richiedono l’accelerazione GPU.
>>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
