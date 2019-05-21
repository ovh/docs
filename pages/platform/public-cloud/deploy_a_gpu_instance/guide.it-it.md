---
title: 'Creare un’istanza GPU'
slug: creare-istanza-gpu
excerpt: 'Scopri come creare un’istanza GPU con Linux o Windows'
section: 'Dallo Spazio Cliente OVH'
---

**Ultimo aggiornamento: 27/11/2018**

## Obiettivo

Le istanze GPU sono tecnicamente simili alle istanze della gamma 2017, con la differenza che dispongono di una scheda grafica (_Graphic Processing Unit_ o GPU). La tecnologia utilizzata (pci_passthrough) permette al sistema operativo dell’istanza di controllare la GPU esattamente come su una macchina fisica.

Le GPU proposte da OVH sono NVIDIA GeForce GTX 1060, GTX 1070 e GTX 1080Ti. 

> [!warning]
>
> Per il momento, le istanze GPU sono disponibili soltanto nei datacenter di GRA3, GRA5 e BHS3. Per poter utilizzare queste istanze, probabilmente sarà necessario creare un nuovo progetto selezionando la nuova gamma 2017. Per maggiori informazioni clicca [qui](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/) (documentazione in inglese).
> 

**Questa guida ti mostra come creare un’istanza GPU con Linux o Windows.**


## Prerequisiti

- Aver creato un progetto Public Cloud con accesso alle Region in cui sono disponibili le istanze GPU (GRA3, GRA5 e BHS3)

## Procedura

Di seguito troverai le informazioni necessarie per creare un’istanza GPU utilizzando Linux o Windows.


### Linux

Tutte le immagini proposte da OVH sono compatibili con le istanze GPU.

> [!primary]
>
> Se preferisci non compilare manualmente il modulo del kernel, ti consigliamo di utilizzare una distribuzione ufficialmente supportata da Nvidia e per la quale esistono dei driver *pronti all’uso*: <https://developer.nvidia.com/cuda-downloads>.
> 

Una volta connesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, accedi al tuo progetto Public Cloud, clicca su `Aggiungi un server`{.action} e seleziona un’istanza GPU:

![public-cloud](images/EN-Flavors.png){.thumbnail}

L’istanza si avvierà nel giro di pochi secondi, dopodiché potrai effettuare la connessione e verificare la presenza della scheda grafica: 

```ssh
lspci | grep -i nvidia
00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
```

Poiché la scheda grafica è presente ma non ancora utilizzabile, è necessario installare i driver NVIDIA. Puoi consultare la lista dei pacchetti disponibili cliccando su questo [link](http://developer.download.nvidia.com/compute/cuda/repos/){.external}. 

Successivamente, inserisci i seguenti comandi:

```sh
wget URL_del_pacchetto_da_scaricare
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
Wed Apr 26 13:05:25 2017
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 375.51                 Driver Version: 375.51                    |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 106...  Off  | 0000:00:05.0     Off |                  N/A |
|  0%   22C    P0    26W / 120W |      0MiB /  6072MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID  Type  Process name                               Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

Da questo momento l’istanza GPU è pienamente operativa e pronta per essere utilizzata.


### Windows

A causa di alcune incompatibilità tra il driver Nvidia e la soluzione di virtualizzazione *KVM/pci_passthrough*, **le immagini Windows standard non funzionano**.

OVH fornisce immagini speciali, basate su un BIOS virtuale UEFI, che permettono al driver di funzionare correttamente:

![public-cloud](images/EN-WindowsImages.png){.thumbnail}


> [!warning]
>
> Non siamo in grado di garantire che la soluzione funzionerà con tutte le versioni future del driver INVIDIA. Pertanto, prima di eseguire qualsiasi aggiornamento del driver NVIDIA, è fondamentale effettuare uno snapshot per poter tornare indietro in caso di necessità.
>

Dopo aver avviato l’istanza GPU, è necessario installare il driver NVIDIA dal [sito ufficiale](https://www.nvidia.it/Download/index.aspx?lang=it){.external}.

Avvia un’istanza utilizzando uno dei <i>flavor</i> GPU (win-g1-15, win-g1-30, ecc...).

L’istanza si avvierà nel giro di pochi minuti. Non ti resta che installare il driver necessario, che successivamente comparirà qui:


![public-cloud](images/WindowsDriverVersion.png){.thumbnail}

![public-cloud](images/WindowsDeviceManager.png){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.