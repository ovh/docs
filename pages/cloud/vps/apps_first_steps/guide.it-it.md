---
title: Iniziare a utilizzare applicazioni preinstallate
slug: applicazioni-preinstallallees
excerpt: Come implementare applicazioni preinstallate sul tuo VPS
section: 'Per iniziare'
order: 8
---

**Ultimo aggiornamento: 25/08/2022**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

OVHcloud offre ai clienti VPS immagini di applicazioni preinstallate per un'implementazione rapida e semplice in pochi click.

**Questa guida ti mostra come configurare applicazioni preinstallate sul tuo VPS.**

## Prerequisiti

- Disporre di un [VPS](https://www.ovhcloud.com/it/vps/) sul proprio account OVHcloud

## Procedura

### Installa l'applicazione preinstallata che preferisci

Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o tramite le API OVHcloud è possibile installare l'applicazione che preferisci. Consulta la guida Iniziare [a utilizzare un VPS](../iniziare-a-utilizzare-vps/).

#### cPanel

Di seguito trovi i primi step per la messa in servizio dell'immagine preinstallata di cPanel. Gli step contrassegnati con "\*" saranno seguiti da FAQ.

1. Apri l'email ricevuta con le credenziali di accesso all'applicazione.
2. Clicca sull'URL di cPanel in questa email.

> [!primary]
>
> Se il link è già scaduto, connettiti al tuo VPS via SSH usando l'utente CentOS ed esegui il comando « sudo whmlogin » per generare un nuovo link.
>

<ol start="3">
  <li>leggi e accetta le condizioni particolari di cPanel.</li>
  <li>Inserisci i tuoi server di posta e server DNS*.</li>
  <li>Definisci la password di root che utilizzerai la prossima volta che ti connetti a WHM*.</li>
</ol>

![horizon](images/change_root.png){.thumbnail}

Per completare la prima configurazione dell'applicazione non sono necessari ulteriori step.

> [!faq]
>
> Puoi utilizzare i tuoi server DNS?
>> Si', puoi. Assicurati di creare record GLUE con il tuo Registrar Ad esempio, se vuoi "ns1.mydomain.com" e "ns2.mydomain.com", devi configurare i record "GLUE" perché entrambi puntino sull'indirizzo IP del tuo server. Se il tuo dominio è registrato con OVHcloud, segui [questa guida](../../domains/glue-registry/#step-1-aggiungi-i-record-glue). Ti ricordiamo che la creazione potrebbe richiedere 24 ore.
> Perché impostare la password di root?
>> WHM utilizza di default l'utente root per l'autenticazione. L'URL monouso permette di accedere alla prima configurazione e di modificare la password di root. La prossima volta che ti connetti a WHM, dovrai utilizzare l'utente root e la password che hai definito.
> Dov'è la mia licenza per cPanel?
>> Puoi ordinare la licenza cPanel per il tuo VPS dallo [Spazio Cliente OVHcloud](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Plesk

Di seguito trovi i primi step per la messa in servizio dell'immagine preinstallata di Plesk. Gli step contrassegnati con "\*" saranno seguiti da FAQ.

1. Apri l'email ricevuta con le credenziali di accesso all'applicazione.
2. Clicca sull'URL di Plesk in questa email.
3. Accedi utilizzando il nome utente e la password presenti nell'email.
4. Una volta connesso, Plesk ti chiederà:
    a) I tuoi dati.  
    b) Una nuova password per l'utente "admin" che utilizzerai per accedere all'interfaccia di Plesk.  
    c) Informazioni sulla licenza.*  
    d) leggere e accettare i contratti di licenza utente.  

Per completare la prima configurazione dell'applicazione non sono necessari ulteriori step.

> [!faq]
>
> Dov'è la mia licenza Plesk?
>> È possibile ordinare la licenza Plesk per il tuo VPS dallo [Spazio Cliente OVHcloud](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Docker

Di seguito trovi i primi step per la messa in servizio dell'immagine preinstallata di Docker.

1. Accedi in SSH al server utilizzando il nome utente e la password presenti nell'email.
2. Verifica che Docker funzioni utilizzando il comando "docker run hello-world".

Per completare la prima configurazione dell'applicazione non sono necessari ulteriori step.

### Let's Encrypt SSL

Questa sezione si applica solo agli impianti di WordPress, Drupal, Joomla! e PrestaShop. Essa non si applica agli altri impianti.

1. Nello Spazio Cliente OVHcloud è necessario creare o modificare due record `A `che puntano verso l'indirizzo IP del server. Ad esempio, se il tuo dominio è "personaldomain.ovh", è necessario creare record `A` per:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Se il tuo dominio è registrato in OVHcloud, consulta [questa guida.](../../domains/web_hosting_modifica_la_tua_zona_dns/)
<br>Se il tuo dominio è registrato presso un'altra società, contatta quest'ultima per ottenere assistenza sulla configurazione dei record `A`.

<ol start="2">
  <li>Forse dovrai aspettare 24 ore prima che le due registrazioni si propaghino completamente. È sempre possibile verificarlo con <a href="https://mxtoolbox.com/DnsLookup.aspx">mxtoolbox</a>. Se l'indirizzo IP del tuo dominio viene visualizzato su mxtoolbox nello stesso modo del tuo server, passa allo step successivo.</li>

  <li>Accedi in SSH al tuo server con l'utente CentOS ed esegui questi comandi per installare Cerbot:</li>
</ol>

> [!warning]
>
> Sostituisci personaldomain.ovh con il tuo dominio con questi comandi.
>

```sh
sudo -i
dnf install -y epel-release
dnf install -y certbot python3-certbot-apache mod_ssl
echo "ServerName personaldomain.ovh;" >> /etc/httpd/conf/httpd.conf
systemctl restart httpd
```

<ol start="4">
  <li> Genera il tuo certificato SSL utilizzando Cerbot (segui le istruzioni sullo schermo).</li>
</ol>

```sh
certbot certonly -d personaldomain.ovh --webroot
```

Quando ti viene chiesto di inserire "Input the webroot", inserisci una variabile del tipo "/var/www/wordpress". Se installa Joomla!, sostituisci "wordpress" con "joomla".

Assicurati che Cerbot inserisca questa variabile nel file ssl.conf. Per farlo, inserisci:

```sh
certbot -d personaldomain.ovh —apache
```

Se vi viene chiesto di rispondere alla prima domanda con "1" e alla seconda anche con "1".

Se il tuo certificato SSL è stato generato, otterrai questo risultato:

```sh
NOTE IMPORTANTI:
 - Congratulazioni! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/privkey.pem
   Your cert will scade il 2020-11-12. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. TB non interactively renew *all* of
   your certificates, run "certbot renew"
```

## Spingiti oltre

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
