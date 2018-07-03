---
title: Guida all’utilizzo di IMAP Copy
excerpt: ''
slug: guida_allutilizzo_di_imap_copy
legacy_guide_number: g1310
---


## A cosa serve?
IMAPCopy è molto utile per copiare le email da un account A (sorgente) a un account B (destinazione).

Hai a disposizione diverse opzioni:
1. Inserire le informazioni richieste relative al tuo account da trasferire
2. Inserire le informazioni richieste relative al tuo nuovo account
3. Dopo aver confermato la sincronizzazione, chiudi la pagina. Le tue email saranno copiate nella cartella di destinazione. Questa operazione potrebbe richiedere diverse ore.


Accedi direttamente da questo indirizzo: [http://www.ovh.it/mail/imapcopy/](http://www.ovh.it/mail/imapcopy/)

![](images/img_1423.jpg){.thumbnail}


## Dove trovare IMAP Copy sul sito OVH?
In due sezioni diverse del [sito OVH](http://www.ovh.it).

Clicca su Software OVH) nella sezione Tool & Community (in basso nella home page).
Visualizzi la lista dei software OVH disponibili. Clicca in corrispondenza di IMAPCopy per essere reindirizzato alla pagina corrispondente.

![](images/img_2846.jpg){.thumbnail}
Per la seconda soluzione, clicca su Webmail in alto a destra del sito [OVH](http://www.ovh.it) e accedi alla Webmail.

Nel nuovo menù, in alto a destra, clicca su (Webmail in blu) e poi su Accedi alle opzioni email. Verrai reindirizzato all'interfaccia degli strumenti IMAPCopy.
A quel punto, clicca su IMAPCopy.

![](images/img_2411.jpg){.thumbnail}


## Scegli i servizi
IMAPCopy ti permette di trasferire account email esterni verso un accoun email OVH.

Questi sono i provider che proponiamo di default:

- AOL
- Free
- Gmail
- La Poste
- Orange
- SFR
- Yahoo
- Email condivisa OVH
- Altro


Se il tuo provider non compare nella lista, seleziona Altro.
Nel nostro esempio, copieremo un account email OVH condiviso verso un account Exchange 2013.

Selezioniamo "Hosting Condiviso OVH" come Indirizzo mail sorgente.

![](images/img_1426.jpg){.thumbnail}


## Impostazioni
Per impostare l'indirizzo email sorgente, inserisci queste informazioni:
1. Servizio: cfr. qui sopra (Hosting Condiviso OVH nel nostro caso) 
2. Login: il tuo indirizzo email sorgente completo (support@ovh.net nel nostro caso, indirizzo condiviso) e il tuo username di accesso (ciò che si trova prima della "@")
3. Password: la password associata al tuo account email sorgente (solo tu la conosci)
4. Server IMAP: server di posta al quale accedere per verificare l'account sorgente (ssl0.ovh.net nel nostro caso, server che utilizza una connessione SSL)
5. SSL: selezionalo se il tuo server utilizza una connessione cifrata di tipo SSL (Secured Socket Layer) (selezionato nel nostro caso)

Dopo aver inserito tutti i dati, clicca su Convalidare.

![](images/img_1427.jpg){.thumbnail}


## Connessione all'account sorgente
Dopo aver confermato le informazioni di connessione all'indirizzo email sorgente, vengono visualizzati 2 step:

1. Test di connessione al tuo account in corso
2. Connessione al tuo account stabilita correttamente

![](images/img_1428.jpg){.thumbnail}


## Scegli i servizi
IMAPCopy è stato progettato per trasferire account email OVH o esterni su un account OVH (Exchange o condiviso).
Con la nuova offerta Exchange 2013, la copia di destinazione è possibile anche su server esterni a OVH.

Questi sono i principali provider di posta che proponiamo di default:

- Exchange 25 GB
- Exchange Corporate
- Exchange Reseller
- Condiviso OVH
- Altro


Se il tuo provider non compare nella lista, seleziona Altro.

Nel nostro esempio faremo una copia del nostro account condiviso OVH su un account Exchange 2013.

Selezioniamo Altro come indirizzo email di destinazione.

![](images/img_1429.jpg){.thumbnail}


## Impostazioni
Per impostare l'indirizzo email di destinazione, inserisci queste informazioni nel form:
1. Servizio: cfr qui sopra, nel nostro caso Altro
2. Login: il tuo indirizzo email di destinazione completo (exchange@ovh.net nel nostro caso, l'indirizzo email Exchange)
3. Password: la password assiciata al tuo account email di destinazione (solo tu la conosci)
4. Server IMAP: il server di posta al quale connettersi per verificare l'account di destinazione (ex.mail.ovh.net nel nostro caso, il server utilizza una connessione SSL)
5. SSL: da selezionare se il tuo server utilizza una connessione SSL (Secured Socket Layer) (selezionato nel nostro caso) 


Dopo aver inserito tutti i dati, clicca su Convalidare.

![](images/img_1430.jpg){.thumbnail}


## Connessione all'account di destinazione
Dopo aver confermato le informazioni di connessione all'indirizzo email di destinazione, vengono visualizzati 2 step:

1. Test di connessione al tuo account in corso
2. Connessione al tuo account stabilita correttamente

![](images/img_1431.jpg){.thumbnail}


## Sincronizzazione
Dopo aver effettuato l'accesso all'indirizzo email di destinazione, viene visualizzato il pulsante Sincronizza.

Cliccaci per avviare la copia dell'account A (sorgente) verso l'account B (destinazione).

Nel nostro caso, copiamo tutte le email dell'account supporto@ovh.net verso l'account Exchange 2013 exchange@ovh.net.

Viene visualizzato questo messaggio:
la sincronizzazione dei tuoi account è in corso. Verifica lo stato di avanzamento quando vuoi compilando il form qui sotto.

![](images/img_1432.jpg){.thumbnail}
La sincronizzazione di tipo IMAP comporta che le cartelle dell'indirizzo email sorgente che non esistono sull'indirizzo email di destinazione vengano create, sia che siano vuote che piene.


## Sincronizzazione - Errori
Dopo aver avviato la sincronizzazione, nel caso in cui venga visualizzato un messaggio di errore, avrà questo formato:

Si è verificato un errore nella sincronizzazione. Todo for sync this account exists.

È un messaggio generale di errore, seguito dall'errore preciso in inglese.

Nel nostro esempio, abbiamo cliccato una seconda volta su Sincronizza e abbiamo visualizzato: Un task di sincronizzazione è già in corso. Non ne viene creato quindi un secondo.

![](images/img_1433.jpg){.thumbnail}


## Sincronizzazione - Fine
Dopo aver completato la sincronizzazione,ti inviamo un'email con l'operazione all'Indirizzo email di destinazione come vedi in figura

![](images/img_1435.jpg){.thumbnail}


## Conoscere lo stato della sincronizzazione
Per conoscere lo stato della sincronizzazione dei tuoi account, inserisci l'indirizzo email nell'apposito campo e clicca su Invia.

Nel nostro caso, la sincronizzazione risulta terminata.

![](images/img_1434.jpg){.thumbnail}

