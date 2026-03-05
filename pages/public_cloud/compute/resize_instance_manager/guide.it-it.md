---
title: Ridimensionare un'istanza dallo Spazio Cliente OVHcloud
excerpt: "Scopri come ridimensionare un'istanza Public Cloud dallo Spazio Cliente OVHcloud"
updated: 2026-03-04
---

## Obiettivo

Se la tua istanza non dispone di risorse sufficienti a causa di un aumento dell'attività o di nuove esigenze, puoi aumentare le sue risorse in pochi clic grazie al Public Cloud.

**Questa guida ti mostra come ridimensionare la tua istanza dallo Spazio Cliente OVHcloud.**

> [!warning]
>
> Per i modelli classici è possibile solo il ridimensionamento verso un modello superiore.
> Questa operazione comporta l'interruzione dell'istanza durante l'operazione.
>

> [!success]
>
> Le istanze di tipo *flex* permettono il ridimensionamento verso modelli superiori o inferiori grazie a una dimensione di disco unica.
>

## Prerequisiti

- Disporre di un'[istanza Public Cloud](/links/public-cloud/public-cloud) sul proprio account OVHcloud

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedura

Nel menu di sinistra, clicca su `Istanze`{.action}.

Clicca su `...`{.action} a destra dell'istanza e seleziona `Modificare`{.action}. Puoi anche accedere a questa azione dai dettagli dell'istanza, cliccando sul nome e poi su `Modifica il modello`{.action}.

Nella nuova scheda, scorri la pagina fino alla sezione **Modello** per selezionare il modello desiderato.

> [!primary]
>
> Per i modelli classici, puoi passare a qualsiasi modello con un disco simile o più grande. Non puoi passare a un modello con un disco più piccolo.<br/>
>
> Solo **le istanze flessibili** possono essere aggiornate o retrogradate, mantenendo una dimensione di disco fissa di 50 GB.
>

Se il tuo disco è uguale o inferiore a 50 GB, puoi passare a un'`Istanza flessibile`{.action} se lo desideri.

> [!warning]
> Se modifichi un'istanza di tipo *flex*, non è possibile tornare a un'istanza classica tramite lo Spazio Cliente. Per maggiori informazioni, consulta la nostra guida su [Tornare da un'istanza flex a un'istanza classica](/pages/public_cloud/compute/revert_a_flex_instance).
>

Una volta effettuata la selezione, clicca su `Modifica il modello`{.action} per confermare la tua scelta.

### Ridimensionamento del disco in Windows

Durante il ridimensionamento di un'istanza Windows, la dimensione della partizione non viene aggiornata automaticamente. È necessario estenderla utilizzando il **gestore disco**:

- Clicca con il tasto destro sul menu `Start`{.action} e avvia il gestore disco cliccando su `Disk Management`{.action}:

![Menu contestuale del menu Start con l'opzione Gestione disco](images/2980.png){.thumbnail}

- Clicca con il tasto destro sulla partizione principale e poi su `Extend Volume`{.action}.

![Clic destro sulla partizione principale per estendere il volume](images/2981a.png){.thumbnail}

- Nel menu `Extend Volume Wizard`, clicca su `Next`{.action}. Scegli le risorse del disco da estendere e clicca su `Next`{.action}.

![Procedura guidata per l'estensione del volume con selezione delle risorse](images/2978a.png){.thumbnail}

Clicca su `Finish`{.action} per confermare la tua scelta.

![Passaggio finale della procedura guidata per l'estensione del volume](images/wizard2021.png){.thumbnail}

- La nuova dimensione del disco verrà visualizzata nel gestore disco.

![Gestore disco che mostra la nuova dimensione](images/2979.png){.thumbnail}

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).