---
title: 'Hosting condiviso: FAQ - Come aggiornare la tua versione di PHP'
excerpt: 'Hosting condiviso: FAQ - Come aggiornare la tua versione di PHP'
id: '1758'
slug: hosting_condiviso_faq_-_come_aggiornare_la_tua_versione_di_php
legacy_guide_number: g1758
section: PHP
hidden: true
---


## Informazioni su PHP
Che cos'è PHP?
PHP è il linguaggio di programmazione open source più utilizzato su Internet per costruire pagine Web dinamiche.
È molto usato dai principali CMS: Wordpress, Joomla, Drupal, ecc...
Perchè OVH smetterà di supportare alcune versioni PHP?
Come tutti i linguaggi di programmazione, PHP si evolve con nuove funzionalità, correzioni di bug... Le versioni precedenti vengono mantenute per un certo periodo di tempo e poi mandate in end of life.
Dismettiamo le vecchie versioni perché possono comportare un rischio per la tua e la nostra sicurezza.
Quali sono i vantaggi utilizzare versioni di PHP aggiornate?
Se decidi di utilizzare le ultime versioni di PHP riduci i rischi di hacking e usufruisci di funzionalità aggiuntive.
Per migliorare le prestazioni del tuo sito, OVH ti offre gratis la versione PHP-FPM 5.3. Per saperne di più, clicca[qui](https://www.ovh.it/hosting-web/ottimizzazione-php-fpm.xml).
Quali sono le versioni che vengono mandate in end of life e quando sono dismesse?

|Versione|Fine ufficiale del supporto|End of life da + di...|
|4.X|7 agosto 2008|6 anni e 8 mesi|
|5.2|6 gennaio 2011|4 anni e 3 mesi|
|5.3|14 agosto 2014|8 mesi|


Fonte: http://php.net/eol.php

Queste versioni verranno dismesse a partire dal 24 settembre 2015. Puoi seguire la pianificazione e i progressi di queste operazioni a questo indirizzo: [http://travaux.ovh.net/?do=details&id=12795](http://travaux.ovh.net/?do=details&id=12795)
Quali piani di hosting a cui vengono apportate modifiche?
Gli hosting condivisi su Linux, tranne 60Free e Demo1G.
Il tuo sito è sviluppato con una versione obsoleta di PHP: cosa devi fare?
Il tuo sito e i task pianificati(CRON) passano automaticamente alla versione PHP 5.6.
Ti consigliamo di eseguire subito dei test sui tuoi siti e task pianificati utilizzando le nuove versioni.
Perché OVH non trasferisce automaticamente i tuoi script?
Tutti i siti sono diversi e OVH non può effettuare la migrazione per tutti: ogni singolo utente, pertanto, deve trasferire i propri script.

Puoi aggiornare la versione di PHP del tuo hosting direttamente dal tuo Spazio Cliente OVH. Per farlo, consulta la guida []({legacy}1999)


## STEP 1: assicurati che il tuo sito supporti la versione PHP
A) Se utilizzi un CMS come Wordpress, Joomla! o Dotclear PHPBB, aggiorna il tuo sito seguendo le guide ufficiali:

- [WordPress](https://codex.wordpress.org/Upgrading_WordPress)
- [Joomla!](https://docs.joomla.org/Portal:Upgrading_Versions/en)
- [Drupal](https://www.drupal.org/upgrade)
- [Prestashop](http://doc.prestashop.com/spacedirectory/view.action)


B) Se il tuo sito si basa su una soluzione personalizzata, consulta le [guide ufficiali PHP](http://php.net/manual/en/appendices.php)
Contatta il tuo webmaster in caso di necessità.


## STEP 2: inserisci i parametri della versione PHP del tuo hosting
Puoi scegliere tra due possibilità
Aggiornare la versione PHP dal tuo Spazio Cliente OVH

Per farlo, consulta la guida: []({legacy}1999)
Aggiornare la versione PHP manualemente, seguendo queste istruzioni:
Accedi alla root del tuo sito via FTP. Se hai bisogno, puoi consulta questa [guida](https://www.ovh.it/g1380.hosting_condiviso_guida_allutilizzo_di_filezilla)


- Se non hai il file .ovhconfig, ne devi creare uno. Con un editor di testo, apri un nuovo file e inserisci queste 4 linee di codice (nell'esempio la versione utilizzata è la 5.6):


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```



Salva questo file con il nome ".ovhconfig" e caricalo nella root del tuo disco.


- Se hai già un file .ovhconfig, puoi modificarlo con un editor di testo e verificarne il contenuto.


Per maggiori informazioni, consulta questa [guida](https://www.ovh.it/g1207.configurare-php-hosting-web)

