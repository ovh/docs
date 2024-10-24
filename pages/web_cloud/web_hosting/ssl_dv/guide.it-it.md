---
title: "Hosting Web - Attivare un certificato SSL Sectigo DV"
excerpt: "Questa guida ti mostra come attivare un certificato SSL Sectigo DV su un hosting Web OVHcloud"
updated: 2024-10-21
---

## Obiettivo

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il sito Web. In questo modo si evita che una persona o un robot malevolo "ascolti" chiaramente le richieste inviate dal sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle offerte di [hosting condiviso OVHcloud](/links/web/hosting). Sono presentati nella nostra guida "[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". I certificati SSL sono indispensabili per la sicurezza del sito Web.

Esistono tre tipi di certificati SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

I livelli di crittografia SSL sono identici tra questi tre tipi di certificati.

La principale differenza risiede nel livello di controlli che saranno effettuati dall'Autorità di Certificazione (CA) che rilascia il certificato SSL e ne attesta l'autenticità.

Per gli hosting condivisi OVHcloud, l'autorità di certificazione che rilascia i certificati SSL DV è [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Una volta che l'ordine del certificato è stato effettuato e trasmesso al nostro fornitore di certificati/autorità di certificazione Sectigo, **non è possibile alcun rimborso dell'ordine**.
>

**Questa guida ti mostra come attivare un certificato SSL Sectigo DV sul tuo hosting Web OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Ordinare o disporre di un [hosting condiviso OVHcloud](/links/web/hosting) sul quale non è già installato un certificato SSL.
- Ordinare o disporre di un [dominio](/links/web/domains) e disporre dei diritti esclusivi sul suo utilizzo. Il dominio non deve essere già associato a un certificato SSL.

## Procedura

> [!warning]
>
> I certificati SSL Sectigo DV offerti da OVHcloud sono validi solo in uno dei due casi seguenti:
>
> - un solo dominio + il suo sottodominio in "www" (esempio: `domain.tld` e `wwww.domain.tld`);
> - un solo sottodominio (esempio: `sub.domain.tld`).
>
> Questo significa che se sul tuo hosting Web sono presenti altri domini/sottodomini dichiarati in multisito, questi ultimi non potranno usufruire di un certificato SSL.
>
> Per ogni hosting Web è possibile installare un solo certificato SSL.
>
> Se hai bisogno di attivare un certificato SSL per più domini/sottodomini dichiarati sul tuo hosting Web, prediligi l’installazione di un [certificato SSL gratuito Let’s Encrypt](/links/web/hosting-options-ssl) o installa il tuo [certificato SSL personalizzato](/pages/web_cloud/web_hosting/ssl_custom).

**Prima di ordinare un certificato SSL Sectigo DV su un hosting Web**, assicurati che **il dominio/sottodominio** interessato dal certificato SSL:

- punti verso l'indirizzo IP del tuo hosting Web;
- è dichiarato multisito sul tuo hosting Web.

> [!primary]
>
> Nel caso in cui desideri sottoscrivere un certificato SSL Sectigo DV per un dominio (esempio: `domain.tld`), verifica che il suo sottodominio in "www" (esempio: `wwww.domain.tld`) punti anche verso l’indirizzo IP del tuo hosting Web ed sia correttamente dichiarato come multisito.
>
> Se ordini il certificato SSL Sectigo DV ma non ne sei sicuro, è necessario apportare le dovute correzioni. In questo caso, è necessario eliminare il certificato SSL Sectigo DV precedentemente sottoscritto **senza ottenere alcun rimborso** e ordinarne uno nuovo. Il nuovo certificato SSL Sectigo DV deve includere sia il dominio `domain.tld` che il sottodominio "www" `www.domain.tld`.
>
> Ti ricordiamo che se sottoscrivi un certificato SSL Sectigo DV direttamente per un sottodominio (esempio: `sub.domain.tld`), la situazione non interessa te.

Verificare inoltre quanto segue:

- La voce `SSL` non deve essere selezionata quando aggiungi in multisito il dominio o sottodominio associato al tuo certificato SSL Sectigo DV.
- Lo stato `Da generare` o `Attivato` non deve essere già presente per il dominio/sottodominio associato al certificato SSL Sectigo DV.

Se necessario, consulta le nostre guide:

- [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite);
- [Lista degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Ordina il certificato SSL Sectigo DV

Per ordinare il certificato SSL Sectigo DV, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Nella nuova pagina, rimani nella scheda `Informazioni generali`{.action}.
6. Posizionati nel riquadro intitolato `Configurazione`.
7. A destra della voce `Certificato SSL`, clicca sul pulsante `...`{.action} e poi su `Ordina un certificato SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Nella nuova finestra, seleziona `Certificato a pagamento`{.action} tra le opzioni disponibili.

Seleziona il dominio o sottodominio dalla lista a tendina e clicca su `Continua`{.action}.

Nella nuova finestra, clicca su `Conferma`{.action} per essere reindirizzato al buono d’ordine del tuo certificato SSL Sectigo DV.

Prosegui con l’ordine fino al saldo dell’ordine per confermare la richiesta di creazione del certificato SSL Sectigo DV per il tuo dominio/sottodominio sull’hosting Web.

> [!alert]
>
> Una volta convalidato l'ordine, la richiesta di certificato SSL Sectigo DV viene inviata all'autorità di certificazione Sectigo.
>
> Da questo momento, SSL Sectigo DV non può essere rimborsato.

L'installazione del certificato SSL Sectigo DV può richiedere fino a **24** ore.

### Verifica l'attivazione del certificato SSL Sectigo DV

Per verificare che l'installazione sia stata completata, eseguire le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Nella nuova pagina, rimani nella scheda `Informazioni generali`{.action}.
6. Posizionati nel riquadro intitolato `Configurazione`.

Se tutto è terminato, sotto la voce `Certificato SSL` è necessario trovare un valore equivalente: `Sì - SECTIGO - DV`.

![SSL Sectigo DV certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-dv-enable.png){.thumbnail}

A questo punto il tuo certificato SSL Sectigo DV è installato e attivo. Da questo momento è possibile utilizzarlo con il proprio sito Web, passando, ad esempio, il [sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Per saperne di più <a name="go-further"></a>

[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting Web - Modificare il proprio sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errori comuni associati alla protezione del sito Web con il certificato SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).