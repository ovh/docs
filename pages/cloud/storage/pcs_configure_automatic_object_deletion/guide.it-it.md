---
title: Configura la cancellazione automatica dei tuoi oggetti
excerpt: Configura la cancellazione automatica dei tuoi oggetti
slug: configura_la_cancellazione_automatica_dei_tuoi_oggetti
legacy_guide_number: g1950
section: Object Storage Standard (Swift)
---


## Obiettivo
Per gestire più facilmente il tuo Object Storage, potrebbe essere necessario definire la durata di vita di alcuni dei tuoi file. Questo ti permette, ad esempio, di conservare alcuni backup solo per un determinato periodo.

Questa guida ti mostra come impostare la cancellazione automatica dei tuoi file, dopo un periodo stabilito o in una data specifica.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851)
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




## Procedura
Puoi eliminare i tuoi file:

- dopo un certo numero di secondi
- in una data specifica




### Dopo un certo numero di secondi
Per eseguire questa operazione, configura l'header X-Delete-After della tua richiesta:


```bash
root@server:~$ swift copy --header "X-Delete-After: 3600" container test.txt
```


Nel nostro esempio, il file test.txt sarà eliminato dopo 1 ora.


### In una data specifica
Innanzitutto, è necessario conoscere la data di eliminazione in formato epoch.
Per trovare più facilmente il valore da inserire, utilizza un [convertitore](http://www.epochconverter.com/).

Una volta eseguita questa operazione, inserisci la data nell'header X-Delete-At:


```bash
root@server:~$ swift copy --header "X-Delete-At: 1448928000000" container test.txt
```


Nel nostro esempio, il file test.txt sarà eliminato il 1° dicembre 2015.


## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
