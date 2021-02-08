---
title: 'Risolvere l’errore «Sito non installato»'
slug: errore-sito-non-installato
excerpt: 'Scopri come risolvere il caso della pagina «Sito non installato»'
section: 'Configurazione dell’hosting'
order: 2
---

**Ultimo aggiornamento: 08/08/2018**

## Obiettivo

La pagina di avviso "Sito non installato" indica che la configurazione DNS del tuo dominio non è corretta o che il dominio utilizzato dal tuo sito non è stato configurato correttamente sul tuo hosting Web OVH.

**Questa guida ti mostra come risolvere il problema del «Sito non installato».**


## Prerequisiti

- Disporre di un piano di [hosting Web](https://www.ovh.it/hosting-web/){.external} attivo
- Essere in grado di gestire l'[hosting Web](https://www.ovh.it/hosting-web/){.external} su cui è ospitato il tuo sito Web
- Essere in grado di gestire la configurazione del dominio pertinente, ovvero la sua zona DNS
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.


## Procedura

La pagina "Sito non installato" si visualizza solo in due casi specifici:

- quando il dominio del tuo sito Web non è aggiunto correttamente come **Multisito** alla configurazione del tuo hosting Web
- quando il dominio del tuo sito Web non è collegato correttamente al tuo hosting Web perché non utilizza l'indirizzo IP corretto nella sua configurazione DNS

Per evitare questo tipo di problema, grazie ai due seguenti passaggi puoi controllare entrambe le configurazioni.

![site not installed](images/site-not-installed-webpage.png){.thumbnail}

### Step 1: verifica della configurazione dell’hosting Web (Multisito)

Per verificare che il dominio sia stato aggiunto correttamente come Multisito al tuo hosting Web, accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, e clicca su `Hosting`{.action} nel menu di sinistra. Nell'elenco dei tuoi hosting, seleziona quello che ospita il sito Web per il quale viene visualizzata la pagina "Sito non installato". Infine, vai alla scheda `Multisito`{.action}.

La tabella che appare contiene tutti i domini che sono stati aggiunti al tuo hosting come Multisito. La barra di ricerca può aiutarti a trovare il dominio.

Successivamente, cerca il dominio pertinente nella tabella. Sono possibili diversi scenari:

|Possibili scenari|Azione da eseguire|
|---|---|
|Il nome del dominio appare nella tabella|Ciò indica che è stato aggiunto come Multisito al tuo hosting Web. Se lo hai aggiunto meno di 15 minuti fa, attendi qualche istante affinché la pagina "Sito non installato" scompaia. Se la visualizzazione della pagina persiste, passa allo Step 2.|
|Il dominio non appare più nella tabella|Se hai aggiunto il nome di dominio e questo non compare più nella tabella, potresti non aver completato tutti i passaggi per aggiungerlo al tuo hosting Web, oppure potresti averlo rimosso involontariamente. Per aggiungere di nuovo il dominio, ti invitiamo pertanto a seguire i passaggi descritti nella nostra documentazione [“Condivisione dell’hosting tra più siti” - EN](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/){.external}.|
|Il dominio non è presente nella tabella|Non hai ancora aggiunto questo dominio come Multisito al tuo hosting Web. Per effettuare questa operazione, ti invitiamo a seguire i passaggi descritti nella nostra documentazione [“Condivisione dell’hosting tra più siti” - EN](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/){.external}.|

Se nonostante le azioni eseguite visualizzi ancora la pagina "Sito non installato" al posto del tuo sito Web, passa allo step successivo "Verifica della configurazione DNS del dominio".

### Step 2: verifica della configurazione DNS del dominio

È necessario prima recuperare la configurazione OVH da utilizzare. Per fare ciò, sempre nell’hosting Web interessato, vai alla scheda `Informazioni generali`{.action}, quindi recupera gli indirizzi che appaiono accanto a **IPv4** e **IPv6**.

![sitenotinstalled](images/site-not-installed-know-a-records.png){.thumbnail}

Ora puoi verificare la configurazione del servizio DNS del tuo dominio. Tale verifica deve essere eseguita dall'interfaccia del fornitore che gestisce questo servizio.

> [!primary]
>
> Se il tuo dominio è registrato presso OVH, puoi verificare se utilizza la nostra configurazione. Per fare ciò, sempre nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, fai clicca su `Domini`{.action} nel menu di sinistra, dopodiché sul dominio interessato. Infine, vai alla scheda `Server DNS`{.action}.
>

La verifica può essere effettuata in due punti diversi, a seconda della configurazione utilizzata dal tuo dominio:

- **il tuo dominio non usa la configurazione di OVH**\: in tal caso, è necessario eseguire la verifica (descritta di seguito) dall'interfaccia del fornitore che gestisce il servizio DNS del tuo dominio;

- **il tuo dominio utilizza la configurazione di OVH**\: la verifica viene eseguita dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Vai alla scheda `Zona DNS`{.action}, una volta che ti sei posizionato sul dominio interessato. La configurazione DNS viene visualizzata in una tabella, con ogni riga che rappresenta un record DNS specifico. Puoi filtrare il contenuto per tipo di record o per sottodominio.

![sitenotinstalled](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

Dall'interfaccia che gestisce la configurazione del tuo dominio per il quale viene visualizzata la pagina "Sito non installato", assicurati che i record DNS riportati di seguito siano configurati correttamente.

|Record|Destinazione|
|---|---|
|A|La destinazione deve corrispondere all'indirizzo **IPv4** recuperato in precedenza.|
|AAAA|La destinazione deve corrispondere all'indirizzo **IPv6** recuperato in precedenza.|

Pertanto, sono possibili due scenari:

|Possibili scenari|Azione da eseguire|
|---|---|
|Le destinazioni sono corrette|Ciò indica che la configurazione del tuo dominio è corretta. Se hai modificato la configurazione DNS meno di 24 ore fa, attendi che questo lasso di tempo termini affinché la modifica sia effettiva.|
|Le destinazioni sono errate|È necessario modificare la configurazione del tuo dominio. Se il dominio utilizza la configurazione di OVH, ti invitiamo a seguire i passaggi descritti nella nostra documentazione ["Modifica di una zona DNS OVH"](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}. Altrimenti, segui le istruzioni descritte nell'interfaccia del tuo fornitore di servizi. Una volta apportata la modifica, è necessario un tempo di propagazione massimo di fino a 24 ore affinché la modifica abbia effetto.|

A seconda delle azioni eseguite nei passaggi 1 e 2 e tenendo conto dei tempi indicati, la pagina di avviso "Sito non installato" non dovrebbe più essere visualizzata.

## Per saperne di più 

[Ospitare più siti su uno stesso hosting - EN](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/){.external}.

[Modifica di una zona DNS OVH](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}.

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.