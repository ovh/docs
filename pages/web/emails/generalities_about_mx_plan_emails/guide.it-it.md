---
title: 'Hosting condiviso: come gestire il servizio email OVH'
excerpt: Le soluzioni email OVH
slug: hosting_condiviso_come_gestire_il_servizio_email_ovh
legacy_guide_number: g1474
---


## Windows

- [Windows 10](https://www.ovh.it/g2284.servizio_email_guida_alla_configurazione_app_posta_di_windows_10)

- [Windows 8](https://www.ovh.it/g1281.servizio_email_guida_alla_configurazione_di_windows_8)

- [Windows Phone](https://www.ovh.it/g1346.servizio_email_guida_alla_configurazione_di_windows_phone)

- [Windows Mail](https://www.ovh.it/g1300.servizio_email_guida_alla_configurazione_di_windows_mail)




## Apple

- [Mail di Mac](https://www.ovh.it/g1287.configurazione-mail-macos)

- [Mavericks & Yosemite](https://www.ovh.it/g1599.email_condivisa_guida_alla_configurazione_email_per_mac-_mavericks_e_yosemite)

- [El Capitan](https://www.ovh.it/hosting/guides/g1965.servizio_email_guida_alla_configurazione_su_mail_di_mac_-_el_capitan)

- [Thunderbird sur Mac](https://www.ovh.it/g1911.servizio_email_guida_alla_configurazione_di_thunderbird_su_mac)

- [iPad iOS 7](https://www.ovh.it/g1348.configurazione-ipad)

- [iPhone iOS 3](https://www.ovh.it/g1296.configurazione-iphone)

- [iPhone iOS 9.1](https://www.ovh.it/g2004.servizio_email_guida_configurazione_iphone_ios_91)




## Outlook

- [Outlook 2007](https://www.ovh.it/g1298.servizio_email_guida_alla_configurazione_di_outlook_2007)

- [Outlook 2010](https://www.ovh.it/g1299.servizio_email_guida_alla_configurazione_di_outlook_2010)

- [Outlook 2013](https://www.ovh.it/hosting/guides/g1286.servizio_email_guida_alla_configurazione_di_outlook_2013)

- [Outlook 2011 su Mac](https://www.ovh.it/g1345.servizio_email_guida_alla_configurazione_di_outlook_2011_su_mac)




## Altro

- [Thunderbird su Windows](https://www.ovh.it/g1297.email_condivisa_guida_alla_configurazione_di_thunderbird)

- [Tablet con Android 4.1.2](https://www.ovh.it/g1283.servizio_email_guida_alla_configurazione_su_tablet_android)

- [Smartphone con Android 4.4](https://www.ovh.it/g1347.servizio_email_guida_alla_configurazione_di_uno_smartphone_con_android_44)

- [Smartphone con Android 5.1](https://www.ovh.it/g1912.servizio_email_guida_alla_configurazione_di_uno_smartphone_con_51)

- [BlackBerry](https://www.ovh.it/g1381.servizio_email_guida_alla_configurazione_del_blackberry)

- [Gmail](https://www.ovh.it/g1408.servizio_email_guida_alla_configurazione_di_unemail_condivisa_ovh_su_gmail)




## Accesso
Per inviare e ricevere le tue email dalla nostra Webmail, [clicca qui](http://webmail.ovh.net/).

Se hai bisogno di aiuto per utilizzare la tua Webmail, consulta [questa guida](https://www.ovh.it/g1302.webmail-roundcube).

![](images/img_2007.jpg){.thumbnail}


## Configurazione IMAP (consigliata)
Ecco le informazioni necessarie alla configurazione di un account email IMAP.

Configurazione IMAP con protocollo SSL attivato o disattivato:

Indirizzo email: il tuo indirizzo email completo.
blue]Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web/login/).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di posta in arrivo, SSL0.OVH.NET.
Porta del server in entrata:993 o 143.
Server in uscita: il server di posta in uscita, SSL0.OVH.NET.
Porta del server in uscita:465 o 587.

Se utilizzi le porte 143 e 587, il protocollo SSL è disattivato.
Se utilizzi le porte 993 e 465, il protocollo SSL è attivato.


- Ricordati che è necessario attivare [l'autenticazione](#informazioni_sulla_configurazione_del_server_smtp_parametri_smtp) del server di posta in uscita SMTP.


|Porte|SSLattivato|SSLdisattivato|
|In entrata|993|143|
|In uscita|465|587|




## Configurazione POP
Ecco le informazioni necessarie alla configurazione di un account email POP.

Configurazione POP con protocollo SSL attivato o disattivato:

Indirizzo email: il tuo indirizzo email completo.
Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web/login/).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di posta in arrivo, SSL0.OVH.NET.
Porta del server in entrata: 995 o 110
Server in uscita: il server di posta in uscita, SSL0.OVH.NET.
Porta del server in uscita:465 o 587.

Se utilizzi le porte 110 e 587, il protocollo SSL è disattivato.
Se utilizzi le porte 995 e 465, il protocollo SSL è attivato.


- Ricordati che è necessario attivare [l'autenticazione](#informazioni_sulla_configurazione_del_server_smtp_parametri_smtp) del server di posta in uscita SMTP.




## Autenticazione
Per inviare correttamente le tue email, assicurati che il server in uscita sia autenticato.

In caso contrario, potresti visualizzare questo errore:


```
"553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)"
```



- Verifica che nel tuo client di posta sia attivata l'autenticazione SMTP per i messaggi in uscita.



