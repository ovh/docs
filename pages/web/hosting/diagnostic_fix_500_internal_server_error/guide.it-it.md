---
title: 'Hosting condiviso: errore 500 (Internal Server Error)'
excerpt: Errore errore 500 (Internal Server Error)
id: '1987'
slug: hosting_condiviso_errore_500_internal_server_error
legacy_guide_number: g1987
---


## .htaccess
Se la sintassi del file .htaccess non è corretta, il server Web restituisce un errore 500. Se rinominando il file (ad esempio ".htaccess_bak") il tuo sito torna raggiungibile, l'errore dipende dal file .htaccess.

Per maggiori informazioni, consulta la guida []({legacy}1967)


## Permessi/diritti
I permessi assegnati ai tuoi script devono rispettare alcune regole di sicurezza:

- la cartella di root del tuo sito deve avere necessariamente i permessi 705 (assegnati di default da OVH): è la directory / o . del tuo server FTP e non può essere modificata.
- le altre directory devono avere al massimo i permessi 755
- gli script PHP/CGI devono avere al massimo i permessi 755




## Script
Se utilizzi linguaggi di programmazione, un errore nel tuo script si traduce in errore 500 ma, per ragioni di sicurezza, nella pagina non vengono mostrati maggiori dettagli. Per eseguire il debug dei tuoi script utilizza l'accesso telnet/SSH disponibile con l'offerta Pro.

Per maggiori informazioni, consulta la guida []({legacy}1962)

