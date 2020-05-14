---
title: 'Creare un’istanza GPU'
slug: creare-istanza-gpu
excerpt: 'Scopri come creare un’istanza GPU con Linux o Windows'
section: 'Dallo Spazio Cliente OVH'
---

**Ultimo aggiornamento 06/12/2019**

## Obiettivo

Le istanze GPU sono tecnicamente simili alle istanze della gamma 2017, con la differenza che dispongono di una scheda grafica (_Graphic Processing Unit_ o GPU). La tecnologia utilizzata (pci_passthrough) permette al sistema operativo dell’istanza di controllare la GPU esattamente come su una macchina fisica.

Le GPU proposte da OVH sono NVIDIA GeForce GTX 1060, GTX 1070 e GTX 1080Ti. 

> [!warning]
>
> Per il momento, le istanze GPU sono disponibili soltanto nei datacenter di GRA3, GRA5, GRA7 e BHS3. Per poter utilizzare queste istanze, probabilmente sarà necessario creare un nuovo progetto selezionando la nuova gamma 2017. Per maggiori informazioni clicca [qui](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/) (documentazione in inglese).
> 

**Questa guida ti mostra come creare un’istanza GPU con Linux o Windows.**


## Prerequisiti

- Aver creato un progetto Public Cloud con accesso alle Region in cui sono disponibili le istanze GPU (GRA3, GRA5, GRA7 e BHS3).

## Procedura

Di seguito troverai le informazioni necessarie per creare un’istanza GPU utilizzando Linux o Windows.
Ricordati che non è possibile modificare il sistema operativo dell’istanza da Linux a Windows o viceversa. Pertanto, assicurati di creare l’istanza con il sistema operativo corretto, di default.


### Linux

Tutte le immagini proposte da OVH sono compatibili con le istanze GPU.

> [!primary]
>
> Se preferisci non compilare manualmente il modulo del kernel, ti consigliamo di utilizzare una distribuzione ufficialmente supportata da Nvidia e per la quale esistono dei driver *pronti all’uso*: <https://developer.nvidia.com/cuda-downloads>
> 

Una volta connesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, accedi al tuo progetto Public Cloud, clicca su `Crea un’istanza`{.action} e seleziona un’istanza GPU:

![/public-cloud](images/gpu.png){.thumbnail}

Quindi, seleziona il sistema operativo Linux da utilizzare:

![/public-cloud](images/linuxchoice.png){.thumbnail}

L’istanza si avvierà nel giro di pochi secondi,  dopodiché potrai effettuare la connessione e verificare la presenza della scheda grafica:  

```ssh
lspci | grep -i nvidia
00:05.0 3D controller: NVIDIA Corporation GV100GL [Tesla V100 PCIe 16GB] (rev a1)
```

Poiché la scheda grafica è presente ma non ancora utilizzabile è necessario installare il driver NVIDIA. Puoi consultare la lista dei pacchetti disponibili cliccando su questo[link](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Successivamente, inserisci i seguenti comandi:

```sh
wget URL_of_packet_to_download
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> Il comando Linux può variare in base alla distribuzione utilizzata. In caso di dubbi, consulta la documentazione ufficiale della tua versione Linux. 
> 


Una volta riavviata l’istanza, la scheda grafica compare all’interno del programma NVIDIA:

```sh
nvidia-smi
Fri Dec  6 12:32:25 2019       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.67       Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Tesla V100-PCIE...  On   | 00000000:00:05.0 Off |                    0 |
| N/A   26C    P0    35W / 250W |      0MiB / 16130MiB |      5%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

Da questo momento l’istanza GPU è pienamente operativa e pronta per essere utilizzata.


### Windows

A causa di alcune incompatibilità tra il driver Nvidia e la soluzione di virtualizzazione *KVM/pci_passthrough*, **le immagini Windows standard non funzionano.**
OVH fornisce immagini speciali, basate su un BIOS virtuale UEFI, che permettono al driver di funzionare correttamente (valide solo per le istanze G1, G2 e G3 - gamma 2017 e meno recenti)

Una volta connesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, accedi al tuo progetto Public Cloud, clicca su `Crea un’istanza`{.action} e seleziona un’istanza GPU:

![/public-cloud](images/gpu.png){.thumbnail}

Quindi seleziona il sistema operativo Windows da utilizzare: 

![/public-cloud](images/oschoice.png){.thumbnail}

Dopo aver avviato l’istanza GPU, è necessario installare il driver NVIDIA dal [sito ufficiale](https://www.nvidia.com/Download/index.aspx){.external}.

Avvia un’istanza utilizzando uno dei flavor GPU (t1-45, t1-90, t1-180...). L’istanza si avvierà nel giro di pochi minuti.

Non ti resta che installare il driver necessario, che successivamente comparirà qui:

![/public-cloud](images/driverson.png){.thumbnail}

![/public-cloud](images/devicemanager.png){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.