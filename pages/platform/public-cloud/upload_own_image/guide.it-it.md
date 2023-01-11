---
title: Importa la tua immagine
slug: importare-la-tua-immagine
excerpt: Come importare la tua immagine su Public Cloud
section: Gestione via OpenStack
order: 10
---

**Ultimo aggiornamento: 27/10/2020**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

OVHcloud offre ai clienti Public Cloud immagini pronte all'uso, ma anche la possibilità di utilizzare le proprie immagini.

**Questa guida ti mostra come importare le tue immagini nel tuo progetto Public Cloud.**

## Prerequisiti

- un'[istanza Public Cloud](../crea_unistanza_dallo_spazio_cliente_ovh/) sul tuo Spazio Cliente OVHcloud
- la tua immagine RAW/QCOW2 (formati raccomandati) 
- un utente [OpenStack](../creation-and-deletion-of-openstack-user/) 
- ambiente [OpenStack CLI ready](../prepare_the_environment_for_using_the_openstack_api/) (se utilizzi CLI)

## Procedura

### Prima di iniziare

Ti consigliamo di utilizzare immagini Cloud compatibili fornite dal distributore o creare la tua immagine utilizzando soluzioni come [Packer OpenStack builder](https://docs.ovh.com/gb/en/public-cloud/packer-openstack-builder/).

Le immagini Cloud compatibili sono disponibili qui:

- https://cloud.centos.org/centos/
- https://cloud.debian.org/images/cloud/
- https://cloud-images.ubuntu.com/releases/
- https://alt.fedoraproject.org/cloud/

Altri sistemi operativi offrono anche immagini ISO applicabili anche durante la [creazione di immagini con Packer](https://www.packer.io/docs/builders) come QEMU e VirtualBox.

Assicurati che le tue immagini siano integrate nel Cloud con i seguenti elementi:

- *QEMU Guest Agent*: questa operazione permette di usufruire di una migliore esperienza di backup, in quanto consente all'host di comunicare con l'istanza per i backup in tempo reale. Tutti i sistemi operativi non sono compatibili con questo package.
- *cloud-init*: per avviare l'istanza al primo avvio, aggiungendo chiavi SSH e configurando la rete. La maggior parte dei sistemi operativi sono compatibili con questa funzionalità.

Consigliamo di utilizzare immagini in formato RAW o QCOW2. Ottimizza la dimensione dell'immagine in modo che sia la più piccola possibile per minimizzare il costo mensile di fatturazione e ridurre il tempo di generazione delle tue istanze.

### Importa la tua immagine

OpenStack ci sono due modi per importare la tua immagine. Puoi farlo tramite l'interfaccia da riga di comando OpenStack o con [l'interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/).

#### Da riga di comando OpenStack

Una volta completata l'importazione, segui gli step qui sotto utilizzando la CLI OpenStack:

1\. Scarica il tuo file openrc.sh per il tuo utente OpenStack dal tuo Spazio Cliente OVHcloud (seleziona la Region verso cui effettuare il download).

![openrc](images/openrc_file.png){.thumbnail}

2\. Carica il file openrc:

```sh
source openrc.sh
```

3\. Una volta caricato il file, ti verrà chiesto di inserire la password dell'utente OpenStack.

4\. Ora puoi importare la tua immagine. L'esempio di comando qui sotto esegue queste operazioni:

- Il formato del disco è "RAW"
- Scarica un'immagine dal percorso attuale chiamato "debian9.raw"
- Chiama l'immagine "Debian 9 - La mia immagine"
- Definisce l'immagine allo stato privato
- Definisce le proprietà raccomandate. Una configurazione ottimale consente l'utilizzo di funzionalità come *live-snapshot* e *cloud-init* (utilizza il nome utente)

```sh
openstack image create —disk-format raw —container-format bare —file debian9.raw "Debian 9 - La mia immagine" —private —property distribution=debian —property hw_disk_bus=scsi —property hw_scsi_model=virtio-scsi —property hw_qemu_guest_agent=yes perty image_originale_user=debian
```

#### Dall’interfaccia Horizon

Una volta che l'immagine è pronta, segui gli step qui sotto per importarla dall'interfaccia Web OpenStack Horizon:

1\. Accedi all'[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/).

2\. Seleziona in alto a sinistra la Region verso cui vuoi scaricare la tua immagine.

![horizon_1](images/horizon_1.png){.thumbnail}

3\. Clicca sulla sezione `Immagini` e poi su `Create Image`{.action}.

![horizon_2](images/horizon_2.png){.thumbnail}

4\. Inserisci i dettagli della tua immagine e seleziona il file dal tuo computer.

![horizon_3](images/horizon_3.png){.thumbnail}

5\. Inserisci i metadati dell'istanza (inserisci anche i metadati personalizzati di tua scelta) e clicca su `Create Image`{.action}.

![horizon_4](images/horizon_4.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
