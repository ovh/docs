---
title: 'Exchange 2016: attiva un reindirizzamento email da OWA'
excerpt: Attiva un reindirizzamento email da OWA
slug: exchange_2016_attiva_un_reindirizzamento_email_da_owa
legacy_guide_number: g1920
hidden: true
---


## Step 1
Aggiungi un reindirizzamento email dall'interfaccia della tua [Webmail Exchange](https://ex.mail.ovh.net/owa/).

Accedi utilizzando il tuo indirizzo email completo e la password del tuo account.

Una volta connesso, seleziona l'icona a forma di ingranaggio e seleziona "Opzioni".

![](images/img_2936.jpg){.thumbnail}


## Step 2
Seleziona "Regole posta in arrivo e organizzazione" e poi clicca sull'icona "+".

![](images/img_2939.jpg){.thumbnail}


## Step 3
Compare una nuova interfaccia.

Inserisci le informazioni richieste:

Nome: il nome visualizzato della tua regola.

Quando il messaggio arriva: filtro per il messaggio da reindirizzare.

Esegui queste operazioni: scegli l'operazione da effettuare (reindirizzamento, eliminazione, spostamento, ecc...).

![](images/img_2940.jpg){.thumbnail}
Si apre una nuova finestra, dove puoi selezionare o inserire l'indirizzo verso cui verranno reindirizzate le email.

Puoi scegliere tra 2 possibilità:


- Inserire manualmente un indirizzo email

- Cercare un contatto nella tua lista


Clicca su "Ok" per confermare la tua scelta.

![](images/img_2942.jpg){.thumbnail}


## Step 4
Puoi aggiungere delle eccezioni, ad esempio se non vuoi reindirizzare i messaggi ricevuti da un indirizzo in particolare.

Completa la tua regola cliccando su "OK"


## Step 5
A questo punto la tua regola è impostata correttamente.

Sulla destra, puoi visualizzare la sintesi delle opzioni scelte.

Puoi eliminare la regola in qualsiasi momento.

![](images/img_2944.jpg){.thumbnail}


## Attiva una regola contro Spam e Virus
Ti mostriamo un esempio di regola che puoi impostare per filtrare i messaggi Spam nella cartella "Posta indesiderata".

Per evitare falsi positivi, la politica OVH è di non cancellare mai i tuoi messaggi Spam, ma di catalogarli come tali se hai attivato l'Antispam durante la configurazione del servizio Exchange dal tuo Spazio Cliente OVH.

Ecco un esempio di regola che puoi impostare:

Nome: il nome visualizzato della tua regola.

Quando il messaggio arriva: "Include queste parole nell'oggetto..." aggiungi il termine "[spam]" ou "[virus]"

Esegui queste operazioni: "Sposta il messaggio nella cartella..." seleziona la cartella "Posta indesiderata".

![](images/img_2945.jpg){.thumbnail}

