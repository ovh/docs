---
title: 'Aumentare la velocità di un sito Web con la CDN'
excerpt: 'Come ottimizzare il tuo sito accelerando la velocità di caricamento dell’hosting Web con la CDN'
slug: guida_allutilizzo_dellacceleratore_geocache_su_un_hosting_web
ection: 'Ottimizza il tuo sito'
legacy_guide_number: g1290
---

**Ultimo aggiornamento: 19/03/2020**

## Obiettivo

Per accelerare la velocità di caricamento del tuo sito Web e migliorare così l’esperienza utente, la tecnica più efficace consiste nell’attivare la CDN (Content Delivery Network), che consente di conservare in cache i file che non richiedono un continuo aggiornamento (cosiddetti “statici”), come le immagini, i css e i javascript nei server più vicini ai tuoi utenti.

**Questa guida ti mostra come gestire l’opzione CDN del tuo hosting Web.**

## Definizione

**Come funziona una CDN?**

La CDN (Content Delivery Network) è letteralmente una rete dedicata alla consegna dei contenuti  e per visualizzare il contenuto del tuo sito Web utilizza vari server sparsi in tutto il mondo.  Più i server vicini ai tuoi utenti, maggiore sarà la velocità di caricamento del tuo sito Web sui loro dispositivi.

Per funzionare correttamente, ciascun server salva nella memoria cache una parte del tuo sito Web. In generale, ti consigliamo di includere i file cosiddetti “statici”: le immagini, i file javascript e css che garantiscono il buon funzionamento del tuo server, ma che vengono modificati molto raramente.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
- Disporre di un piano di [hosting Web OVHcloud](https://www.ovh.it/hosting-web/){.external} attivo

## Procedura

###  Attiva l'opzione CDN

> [!primary]
> 
> L’opzione CDN è già inclusa nei piani di hosting Web Performance.

####  Se il tuo hosting Web non dispone di una CDN

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona `Web` e seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra. Clicca sui tre puntini `...`{.action} in corrispondenza dell’ “Opzione CDN” e poi su `Ordina una CDN`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Sarai reindirizzato verso una pagina in cui è possibile generare un buono d’ordine. Una volta effettuato il pagamento, il tuo servizio sarà disponibile in pochi minuti.

#### Se la CDN è già attiva sul tuo hosting Web

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca su `Web` e seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra. Nella scheda `Multisito`{.action}, clicca sull’icona a forma di ingranaggio e poi clicca su `Modifica`{.action}. 

A questo punto, seleziona la voce “Attiva la CDN”, clicca su `Seguente`{.action} e infine su`Conferma`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> Sa hai aggiunto un dominio esterno (non OVHcloud) al multisito dell’hosting Web, è necessario indicare l’indirizzo IP della CDN del tuo hosting nella zona DNS del dominio.<br>
> Consulta la [lista degli indirizzi IP di cluster e hosting Web](https://docs.ovh.com/it/hosting/lista-indirizzi-ip-di-cluster-e-hosting-web/){.external} per recuperare l’indirizzo IP specifico per la CDN del tuo cluster.

 
**Perché non posso usufruire dell’IP geolocalizzato con l’opzione CDN?** <br>
<br>
La CDN utilizza il principio degli indirizzi IP Anycast. A seconda della tua geolocalizzazione, verranno interrogati diversi server, il che ridurrà il tempo di caricamento dei tuoi file statici. Pertanto la geolocalizzazione degli indirizzi IP è praticamente inutile. <br>
In termini di SEO (ottimizzazione per i motori di ricerca), la velocità di visualizzazione del tuo sito Web è più importante della geolocalizzazione dell’indirizzo IP del tuo hosting.


### In che modo è possibile conservare in cache i file nella CDN?

**Tramite l’utilizzo di un CMS**

I principali CMS distribuiscono numerosi plugin che consentono di configurare la memorizzazione in cache dei file statici in modo da essere presi automaticamente in considerazione dalla CDN. Altri permettono di configurare automaticamente i file statici tramite l’attivazione di una cache integrata nel CMS. Per maggiori informazioni, consulta la documentazione ufficiale del CMS o dell’editor dei plugin che utilizzi.

**Senza l’utilizzo di CMS**

Se non utilizzi un CMS, puoi usufruire della cache della CDN. Per farlo, è necessario aggiungere header alle richieste HTTP. Esistono diversi metodi per aggiungere gli header. Uno dei più semplici consiste nel definire alcune regole all’interno di un file .htaccess in base alle estensioni dei documenti.

```htaccess
1.#Cache delle immagini per 1 settimana
2. <<FilesMatch "\.(jpg|jpeg|png|gif)$">
3. Header set Cache-Control "max-age=604800, public"
4. </FilesMatch>
5. 
6. # Cache dei javascript e CSS per 1 mese
7. <FilesMatch "\.(js|css)$">
8. Header set Cache-Control "max-age=2592000"
9. </FilesMatch>
```
> [!warning]
>
> La memorizzazione in cache tramite gli header HTTP consente di salvare in cache i file sia nella CDN che nel browser degli utenti. Quindi per evitare che i tuoi visitatori visualizzino una versione in cache troppo vecchia, ti consigliamo di modificare i nomi dei file ad ogni nuova versione.
> 



### Svuota la cache della CDN

Ogni tanto è utile cancellare la cache della CDN, specialmente quando effettui l’aggiornamento dei tuoi file statici: ad esempio, durante la pubblicazione online di una nuova versione del tuo sito. In questo caso, è possibile svuotare completamente la cache della CDN.

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca su `Web` e seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra. Clicca sui tre puntini `...`{.action} in corrispondenza di “Opzione CDN” e poi su `Ordina una CDN`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Disattiva l'opzione CDN

Questa operazione permette di disattivare la CDN per uno o più ingressi multisito senza rimuovere l’opzione CDN del tuo hosting Web.

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca su `Web`{.action}. e seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra. Nella scheda `Multisito`{.action}, clicca sull’icona a forma di ingranaggio e poi clicca su `Modifica`{.action}. 

A questo punto, deseleziona la voce “Attiva la CDN”, clicca su `Seguente`{.action} e infine su`Conferma`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Elimina l'opzione CDN

Questa operazione consente di eliminare l’opzione CDN per l’intero hosting Web.

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca su `Web`{.action}. e seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra. Clicca sui tre puntini `...`{.action} in corrispondenza di “Opzione CDN” e poi su `Disattiva la CDN`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Clicca su `Conferma`{.action} per completare l’operazione.

> [!warning]
>
> Ricevi una email contenente la procedura di disattivazione della CDN. Segui le istruzioni fornite nel messaggio per confermare o annullare la richiesta. 
> 


### Verifica che la CDN sia attiva

Per assicurarti che la CDN sia attiva sul tuo dominio, è possibile effettuare una verifica tramite un terminale con il seguente comando:

```
curl -i http://yourpersonnaldomain.ovh/
```

Se il tuo dominio è correttamente associato alla CDN, otterrai questo risultato:

```
HTTP/1.1.200 OK
Date: Tue, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
x-IPLB-Instance/: 12345
```
Le intestazioni “*X-CDN*” confermano che il traffico del tuo sito Web passa attraverso la CDN.

Nel caso in cui il dominio non passi attraverso la CDN, ottieni in questo risultato:

```
HTTP/1.1.200 OK
Date: Tue, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
x-IPLB-Instance/: 12345
```

L’assenza dell’intestazione « *X-CDN* » indica che il traffico del tuo sito Web non passa attraverso la CDN.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.