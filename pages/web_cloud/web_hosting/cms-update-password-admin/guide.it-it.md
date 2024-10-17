---
title: "Come cambiare la password amministratore di un CMS"
excerpt: "Questa guida ti mostra come modificare la password amministratore del tuo CMS direttamente tramite l'interfaccia di amministrazione del CMS o utilizzando phpMyAdmin dallo Spazio Cliente OVHcloud"
updated: 2024-10-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Hai perso l'accesso all'interfaccia di gestione di WordPress, PrestaShop, Joomla! o Drupal? O semplicemente vuoi aumentare la sicurezza del tuo sito Web modificando la password amministratore? Questa guida ti mostra come effettuare questa operazione, sia direttamente tramite l’interfaccia di amministrazione del CMS, sia utilizzando phpMyAdmin dallo Spazio Cliente OVHcloud.

**Questa guida ti mostra come modificare la password amministratore per i CMS WordPress, PrestaShop, Joomla! e Drupal per garantire la massima sicurezza del tuo sito Web.**

## Prerequisiti

- Disporre di una [offerta di hosting Web](/links/web/hosting) che permette l'installazione di un modulo in 1 click.
- Aver creato un modulo in 1 click sul tuo hosting Web (se non l’hai ancora installato, segui le istruzioni di questa [guida](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager) (solo per la parte relativa a phpMyAdmin).

## Procedura

Esistono diversi metodi per modificare la password amministratore del CMS in base alla situazione:

- [via email automatica (password dimenticata)](#via-email)
- [tramite l'interfaccia di amministrazione del CMS](#via-cms)
- [via phpMyAdmin dal tuo Spazio Cliente OVHcloud](#via-phpmyadmin)

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner) o all'amministratore del CMS che hai scelto di installare. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
>
> Per contattare gli editori dei CMS di cui sopra, clicca qui di seguito sui link alle rispettive pagine ufficiali:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}

### Modificare la password amministratore tramite l'email automatica (password dimenticata) <a name="via-email"></a>

Hai ancora accesso alle tue email e all'interfaccia di connessione? Questo metodo è il più rapido ed evita di accedere alle impostazioni del CMS o di utilizzare phpMyAdmin.

> [!tabs]
> WordPress
>>
>> Per modificare la password amministratore di WordPress con l'opzione "Password dimenticata", segui gli step della sezione "[Through the automatic emailer](https://wordpress.org/documentation/article/reset-your-password/#through-the-automatic-emailer)" della documentazione ufficiale di WordPress.
>>
> PrestaShop
>>
>> Accedi all’interfaccia di connessione PrestaShop del tuo sito Web (ad esempio, `https://your-domain.com/admin/`) e clicca su "Password dimenticata" per ricevere un’email che ti invita a reimpostare la password.
>>
> Joomla!
>>
>> Per modificare la password amministratore Joomla! tramite l'opzione "Password dimenticata", segui gli step della sezione "[Frontend](https://docs.joomla.org/Resetting_a_user_password/en)" della documentazione ufficiale di Joomla!.
>>
> Drupal
>>
>> Per modificare la password amministratore Drupal utilizzando l'opzione "Password dimenticata", segui questi passaggi:
>>
>> - Accedere all'interfaccia di accesso amministratore.
>> - Clicca sul link "Richiedi una nuova password".
>> - Nella finestra di dialogo che appare, inserisci il nome utente o l'indirizzo email associato all'account amministratore.
>> - Fare clic su "Invia nuova password" o "E-mail nuova password".
>> - Apri l'email ricevuta e clicca sul link fornito.
>> - Inserisci la nuova password e conferma.
>> - Torna alla pagina di login di Drupal e accedi con la nuova password che hai appena impostato.

### Modificare la password amministratore tramite il CMS <a name="via-cms"></a>

Hai accesso all’interfaccia di gestione del CMS e conosci la tua password attuale? Modificare la password direttamente dalle impostazioni dell’account amministratore.

> [!tabs]
> WordPress
>> Per modificare la password amministratore di WordPress tramite l'interfaccia di gestione del CMS, segui la procedura descritta nella sezione "[To Change Your Password](https://wordpress.org/documentation/article/reset-your-password/#to-change-your-password)" della documentazione ufficiale di WordPress.
>>
> PrestaShop
>>
>> La documentazione ufficiale di PrestaShop non spiega come modificare la password amministratore tramite l'interfaccia di connessione. Consulta la [documentazione ufficiale di PrestaShop](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password) per trovare un altro metodo per aggiornare la password.
>>
> Joomla!
>>
>> Per modificare la password amministratore Joomla! tramite l'interfaccia di amministrazione, segui gli step della sezione "[Backend](https://docs.joomla.org/Resetting_a_user_password/en)" della documentazione ufficiale di Joomla!.
>>
> Drupal
>>
>> La documentazione ufficiale di Drupal non spiega come modificare la password amministratore tramite l'interfaccia di accesso. Consulta la [documentazione ufficiale di Drupal](https://www.drupal.org/node/44164) per trovare un altro metodo per aggiornare la password.

### Modificare la password amministratore tramite phpMyAdmin dallo Spazio Cliente OVHcloud <a name="via-phpMyAdmin"></a>

Non hai più accesso all'interfaccia di gestione del CMS o non puoi utilizzare la funzionalità "Password dimenticata" perché l'indirizzo email associato non è raggiungibile? Utilizza phpMyAdmin dal tuo [Spazio Cliente OVHcloud](/links/manager) per reimpostare la password direttamente dal database.

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e seleziona `Web Cloud`{.action}. Clicca su `Hosting`{.action} e seleziona il servizio interessato. Nella scheda `Database`{.action}, identifica il database utilizzato dal tuo CMS, clicca sul pulsante `...`{.action} e poi su `Accedi a phpMyAdmin`{.action}.

Inserire gli identificativi del database (nome utente e password) definiti durante la creazione del database. Una volta connesso a phpMyAdmin, clicca sulla scheda interessata qui sotto.

> [!tabs]
> WordPress
>>
>> Segui gli step della sezione "[Through phpMyAdmin](https://wordpress.org/documentation/article/reset-your-password/#through-phpmyadmin)" della documentazione ufficiale di WordPress.
>>
> PrestaShop
>>
>> Segui gli step della sezione "[You do not have access to your e-mail address](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password)" della documentazione ufficiale di PrestaShop.
>>
> Joomla!
>>
>> Segui gli step della sezione "[Resetting in phpMyAdmin](https://docs.joomla.org/Resetting_a_user_password/en)" della documentazione ufficiale di Joomla!.
>>
> Drupal
>>
>> Una volta connesso a phpMyAdmin, segui questi step:
>>
>> - Seleziona il database che Drupal utilizza per il tuo sito Web.
>> - Individuare la tabella `users_field_data` (per Drupal 8 e versioni successive) o users (per Drupal 7 e versioni precedenti).
>> - Trova l'utente amministratore con `uid = 1`.
>> - Clicca su `Modify`.
>> - Nel campo `pass`, seleziona `MD5` nella colonna `Function` a destra del campo.
>> - Immettere una nuova password nella colonna del valore.
>> - Convalidare e salvare le modifiche.

## Per saperne di più <a name="go-further"></a>

[Come gestire il tuo modulo in 1 click](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Tutorial - Installare manualmente WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Installare manualmente Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Installare manualmente Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Installare manualmente PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).