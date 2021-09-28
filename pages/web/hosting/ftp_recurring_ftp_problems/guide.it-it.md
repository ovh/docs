---
title: 'Hosting condiviso: problemi FTP ricorrenti'
slug: hosting_condiviso_problemi_ftp_ricorrenti
excerpt: 'Hosting condiviso: problemi FTP ricorrenti'
id: '1996'
legacy_guide_number: g1996
section: FTP e SSH
---

## Hai trasferito i tuoi file via FTP, ma non riesci a visualizzare il tuo sito

- Verifica di aver salvato i file del tuo sito nella directory /www del tuo hosting.
- Se hai apportato modifiche alla tua zona DNS, la propagazione potrebbe richiedere da 4 a 24 ore.


## Le tue credenziali FTP non funzionano
Verifica di aver copiato correttamenete la tua password e non aver confuso "l" (L) con "1" (uno) e "O" (la lettera) con "0" (zero).
In caso di errore, è possibile che le credenziali inserite non siano corrette. Se necessario consulta [questa guida](https://www.ovh.it/g1374.metti-online-tuo-sito#trasferisci_i_tuoi_file_in_ftp_recupera_le_credenziali_ftp).


## Quanto spazio è ancora disponibile sul tuo sito?
Se lo spazio disponibile sul tuo hosting condiviso non è sifficiente, si potrebbero verificare malfunzionamenti quando tenti di mettere online nuovi contenuti.

- Per verificare lo spazio a tua disposizione, accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona la tua piattaforma di hosting.



![](images/img_3298.jpg){.thumbnail}
Compare un riepilogo con la quota utilizzata dal tuo spazio FTP.

![](images/img_3299.jpg){.thumbnail}


## Non riesci a inviare i tuoi file sul tuo server FTP?
Accedi in modalità passiva (modalità di configurazione che permette al server FTP di definire la porta di accesso) con il tuo client FTP. Ad esempio, con Filezilla clicca su Modifica -> Impostazioni -> Connessione -> FTP -> Modalità passiva.


## A cosa serve la cartella cgi-bin?
La cartella cgi-bin è una directory parallela di "www" non leggibile direttamente dal server Web e che presenta queste caratteristiche:

- i file salvati al suo interno non possono essere letti ma solo eseguiti. Non è quindi possibile salvare immagini gif o jpeg perché la loro lettura provoca errori
- dal momento che nessun file della cartella può essere letto, puoi utilizzarla, ad esempio, per salvare in formato testo i file dei database che vuoi proteggere 
- l'esecuzione degli script cgi direttamente dalla cartella cgi-bin avviene tramite un alias del tuo sito ed è quindi possibile solo dal tuo dominio.



