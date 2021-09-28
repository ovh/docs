---
title: 'Web hosting: configura la tua versione di PHP dal tuo Spazio Cliente OVH'
excerpt: Configura la tua versione di PHP dal tuo Spazio Cliente OVH
id: '1999'
slug: web_hosting_configura_la_tua_versione_di_php_dal_tuo_spazio_cliente_ovh
legacy_guide_number: g1999
section: PHP
---


## Informazioni su PHP

## Che cos'è PHP?
PHP è il linguaggio di programmazione open source più utilizzato su Internet per costruire pagine Web dinamiche.
È molto usato dai principali CMS: Wordpress, Joomla!, Drupal, ecc...

## A cosa serve PHP FPM?
PHP FPM permette di accelerare le risposte PHP, ridurre le sollecitazioni al disco e il processing del tuo codice PHP.
I test che abbiamo effettuato dimostrano che, in questo modo, puoi ottenere performance fino a 7 volte più rapide di prima.

## Quali sono i vantaggi di utilizzare le nuove versioni di PHP?
Se utilizzi le ultime versioni di PHP per il tuo sito, riduci i rischi causati dalle falle di sicurezza (hacking) e usufruisci delle nuove funzionalità disponibili.
Per migliorare le performance del tuo sito, OVH ti offre gratis l'ottimizzazione PHP-FPM, a partire dalla versione 5.3.

## Il tuo sito è sviluppato con una versione obsoleta di PHP: cosa devi fare?
Ti consigliamo di eseguire subito dei test sui tuoi siti e task pianificati utilizzando le nuove versioni. Leggi questa guida per scoprire come fare.

## Perché OVH non esegue automaticamente gli aggiornamenti?
Tutti i siti sono diversi e non possiamo eseguire aggiornamenti personalizzati. Ogni singolo utente deve quindi provvedere a effettuare questa operazione.

## Sei uno sviluppatore e vuoi eseguire questa operazione manualmente?
Consulta questa [guida]({legacy}1207), che ti spiega come configurare il file .ovhconfig.


## Conoscere la versione utilizzata
Accedi alla sezione "Hosting" del tuo Spazio Cliente OVH e clicca sull'hosting in questione.
La versione utilizzata per il tuo sito è indicata in "Versione PHP"(n.1).

![](images/img_3314.jpg){.thumbnail}
Per modificarla, clicca sul link "Modifica la configurazione" (n. 2 nell'image sopra).


## Modifica la versione
Puoi scegliere questi elementi:

Ambiente di esecuzione:
Gli hosting Web OVH ti permettono di modificare l'ambiente di esecuzione del tuo sito Web, per utilizzare una configurazione stabile nel lungo periodo e usufruire degli ultimi aggiornamenti dei software proposti da OVH.

Per modificare l'ambiente di esecuzione, consulta questa guida:
[]({legacy}2149)

Versione di PHP:

- 5.4
- 5.5
- 5.6
- 7.0

(di default, puoi scegliere l'ultima versione stabile 5.6)

Motore:

- php (attiva PHP FPM)
- phpcgi (disattiva PHP FPM)

(il motore php viene scelto di default ed è consigliato per utilizzare PHP FPM).

Ambiente:

- sviluppo: non viene applicata nessuna regola di cache e i log PHP vwngono visualizzati sul tuo sito (display_errors=On).
- produzione: i file statici come immagini, video, audio, HTML e CSS hanno una durata superiore a quella dei file in cache sui browser Internet.e i log PHP non vengono visualizzati sul tuo sito (display_errors=Off).

Modalità di sicurezza:
- none
- security: permette di attivare un firewall applicativo di tipo mod_security.



![](images/img_4130.jpg){.thumbnail}
Per impostare una configurazione predefinita ti consigliamo di scegliere le opzioni indicate nello screenshot.
Potrebbero essere necessari alcuni minuti perché questa modifica diventi effettiva.

![](images/img_3316.jpg){.thumbnail}
Per modificare di nuovo la versione PHP, clicca su "Modifica la configurazione" e poi su "Modifica la configurazione attuale".

![](images/img_3317.jpg){.thumbnail}


## Ritorna alla versione precedente
Se la nuova versione di PHP crea problemi sul tuo sito, puoi tornare alla configurazione precedente. Per farlo, clicca di nuovo su "Modifica la configurazione".

![](images/img_3318.jpg){.thumbnail}
Poi clicca su "Ritorna a una configurazione precedente".

![](images/img_3319.jpg){.thumbnail}
Se hai modificato la versione PHP solo una volta, visualizzerai questo riquadro. In caso contrario, clicca su "Seleziona storico" e scegli la versione.

![](images/img_3320.jpg){.thumbnail}
Potrebbero essere necessari alcuni minuti perché questa modifica diventi effettiva.

![](images/img_3316.jpg){.thumbnail}
Per ritornare a una versione PHP precedente, ti consigliamo di leggere il paragrafo "Come verificare che il tuo sito sia compatibile con una nuova versione di PHP?".


## Come verificare che il tuo sito sia compatibile con una nuova versione di PHP?
1. Se utilizzi un CMS come Wordpress, Joomla! o Dotclear PHPBB, aggiorna il tuo sito seguendo le guide ufficiali:

- [Wordress](https://codex.wordpress.org/Upgrading_WordPress)
- [Joomla!](https://docs.joomla.org/Portal:Upgrading_Versions/en)
- [Drupal](https://www.drupal.org/upgrade)
- [Prestashop](http://doc.prestashop.com/spacedirectory/view.action)


2. Se il tuo sito si basa su una soluzione personalizzata, consulta le [guide ufficiali PHP](http://php.net/manual/en/appendices.php).
Contatta il tuo webmaster in caso di necessità.

## Come fai a sapere quale versione PHP è presente in una directory specifica?
Nel tuo Spazio Cliente OVH visualizzi la versione PHP "principale", cioè quella definita nella root del tuo hosting. Se hai salvato una configurazione specifica in una sotto-directory, puoi visualizzare la versione PHP utilizzata creando un file di testo che contiene:


```
<?php phpinfo(); ?>
```


Salvalo in formato .php e rinominalo "info.php".

Pubblica via FTP ([]({legacy}1380)) il file nella cartella desiderata, ad esempio /www/monwordpress/
Apri il tuo browser e accedi a info.php. Ad esempio, www.tuo-sito.com/miowordpress/info.php

![](images/img_3321.jpg){.thumbnail}


## Hai configurato un file .htaccess per forzare una versione PHP: che cosa succederà?
La versione PHP definita in questo file non verrà più applicata perché quella definita nel tuo Spazio Cliente OVH è prioritaria. Tutte le altre direttive contenute nel tuo file .htaccess (URL rewriting, reindirizzamento, ecc...) resteranno attive.


## Quali sono le restrizioni PHP FPM?
Per motivi di sicurezza, queste opzioni sono disattivate (sconsigliate da PHP):

```
register_globals
magic_quotes_gpc
```




## Hai problemi durante il trasferimento: cosa devi fare?
OVH non può occuparsi per te del trasferimento del tuo sito ma, se ne hai bisogno, puoi richiedere l'aiuto del nostro supporto per aggiornare la versione di PHP (tramite il tuo Spazio Cliente OVH o il file .ovhconfig). Il supporto OVH non può essere ritenuto responsabile di eventuali malfunzionamenti.

## Hai bisogno di aiuto?
Rivolgiti agli [OVH Partners](http://partners.ovh.com/)!

