---
title: Attiva le connessioni SSO con il tuo account OVHcloud
slug: connect-saml-sso
excerpt: "Scopri come associare il tuo servizio ADFS al tuo account OVHcloud tramite SAML 2.0"
section: Utilizzo avanzato
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 13/10/2022**

## Obiettivo

L'autenticazione SSO (*Single Sign-On*) è **unica** per accedere al tuo account OVHcloud. Per attivare queste connessioni, il tuo account e i tuoi servizi ADFS (*Active Directory Federation Services*) devono essere configurati con l'aiuto delle autenticazioni SAML (*Security Assertion Markup Language*).

**Questa guida ti mostra come associare il tuo account OVHcloud a un Active Directory esterno.**

## Prerequisiti

- I servizi ADFS (Active Directory Federation Services) devono essere eseguiti sul tuo server
- Disporre di un [account OVHcloud attivo](https://docs.ovh.com/it/customer/creare-account-ovhcloud/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

> [!primary]
>
> Affinché un provider di servizi (cioè il tuo account OVHcloud) possa stabilire una connessione SSO con un provider di identità (cioè il tuo servizio ADFS), l'essenziale è stabilire un rapporto di fiducia reciproca.
>

### Creare la fiducia nelle ADFS

Il tuo ADFS agisce come provider di identità. Le richieste di autenticazione al tuo account OVHcloud saranno accettate solo se l'hai precedentemente dichiarato come organismo terzo di fiducia.

Nel contesto Active Directory, ciò significa che deve essere aggiunto come `Relying Party Trust`.

Apri il menu `Tools`{.action} e seleziona `AD FS Management`{.action}.

![Menu Strumenti Windows Server](images/windows_server_tools_menu.png){.thumbnail}

Clicca su `Relying Party Trusts`{.action}.

![ADFS Menu](images/adfs_menu.png){.thumbnail}

Clicca su `Add Relying Party Trust`{.action}.

![Menu di approvazione ADFS](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Seleziona `Claims aware`{.action} e conferma cliccando sul pulsante `Start`{.action}.

![ADFS aggiungi un'approvazione - Step 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Inserisci manualmente le informazioni relative all'organismo terzo di fiducia o le importa da un file di metadati.

#### Importare i metadati OVHcloud SP

Puoi ottenere il file di metadati appropriato tramite questi link:

- [Metadati della regione UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadati della regione CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Seleziona `Import data about the relying party from a file`{.action} e seleziona il tuo file di metadati.

Clicca sul pulsante `Next`{.action}.

![ADFS - Aggiungere un'approvazione - Step 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Inserisci il nome visualizzato per l'organismo terzo di fiducia e clicca sul pulsante `Next`{.action}.

![ADFS - Aggiungere un'approvazione - Step 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Clicca su `Next`{.action} nella finestra di controllo degli accessi.

![ADFS - Aggiungere un'approvazione - Step 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Clicca di nuovo su `Next`{.action} per continuare

![ADFS - Aggiungere un'approvazione - Step 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Clicca sul pulsante `Close`{.action} nell'ultima finestra. L'approvazione di OVHcloud come organismo terzo di fiducia è stata aggiunta al tuo ADFS.

![Approvazione ADFS](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Con OVHcloud aggiunto come organismo terzo di fiducia, dovresti già poterti connettere tramite una connessione SSO. Tuttavia, tutte le informazioni relative all'identità dell'utente (in termini di "asserzione" SAML) resteranno indisponibili fino a quando non sarà configurata una strategia per allineare i record LDAP Active Directory agli attributi dell'asserzione SAML.
>

#### Corrispondenza degli attributi LDAP agli attributi SAML

Clicca sul record OVHcloud nella sezione "Relying Party Trusts".

![Passaggio di approvazione ADFS Step 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Clicca su `Edit Claim Issuance Policy...`{.action}.

![Passaggio di approvazione ADFS Step 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Clicca sul pulsante `Add Rule...`{.action}.

![Passaggio di approvazione ADFS 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Clicca su `Next`{.action}.

Inserisci un nome di regola e definisci la tua tavola di concordanza.

Seleziona `Active Directory` come `Attribute store`.

> [!primary]
>
> I seguenti parametri possono essere configurati liberamente affinché il fornitore di servizi possa leggere correttamente i dati LDAP Active Directory. Puoi fare riferimento all'immagine qui sotto come esempio.

Una volta terminato, clicca sul pulsante `Finish`{.action}.

![Passaggio di approvazione ADFS 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![Passaggio di approvazione ADFS 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Clicca sul pulsante `Apply`{.action} e conferma con `OK`{.action}.

![Passaggio di approvazione 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Una volta terminata la tabella di corrispondenza, il servizio ADFS si fida di OVHcloud come provider di servizi. Lo step successivo consiste nell'assicurarsi che l'account OVHcloud confidi nel tuo ADFS in qualità di provider d'identità.

### Affidare la fiducia all'account OVHcloud e configurare la connessione

L'aggiunta del tuo ADFS come affidabilità provider avviene [nello Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), dove è possibile fornire i metadati del provider.

[Accedi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca sul tuo profilo in alto a destra.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Clicca sul tuo nome per accedere alla pagina di gestione del tuo profilo.

![Informazioni utente OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Apri la scheda `Gestione utenti`{.action}.

![Profilo menu OVHcloud](images/ovhcloud_profile_menu.png){.thumbnail}

Clicca sul pulsante `Login SSO`{.action}.

![OVHcloud di connessione SSO Step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Inserisci i metadati XML del tuo servizio ADFS. Il campo `Nome del gruppo` è facoltativo in questo caso. Clicca su `Conferma`{.action}.

![OVHcloud di connessione SSO Step 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

A questo punto è necessario recuperare il tuo ADFS come provider di identità e i gruppi predefiniti.

![OVHcloud di connessione SSO Step 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Per maggiori informazioni, clicca sul link sotto l'`URL del servizio SSO`.

![OVHcloud di connessione SSO Step 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![OVHcloud di connessione SSO step 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Il pulsante `...`{.action} permette di aggiornare o eliminare l'SO e di consultarne i dettagli.

![OVHcloud di connessione SSO Step 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

Il tuo ADFS è considerato un provider affidabile. È comunque necessario aggiungere gruppi al tuo account OVHcloud.

> [!warning]
> Se stai cercando di accedere via SSO, probabilmente comparirà un messaggio di errore `Not in valid groups`.
>
> Infatti, il tuo account OVHcloud verifica se l'utente che si autentica appartiene a un gruppo esistente sull'account.
>

Per risolvere il problema, verifica le informazioni corrispondenti all'attributo "Group" restituito dal tuo servizio ADFS.

Prendete ad esempio quello di un utente "John Doe" del vostro Active Directory, come indicato nell'immagine qui sotto.

![Utente ADFS](images/adfs_user.png){.thumbnail}

Verifica la tabella di corrispondenza in ADFS:

![Mappatura di approvazione della parte di fiducia ADFS](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

In questo esempio, l'attributo "Group" rinviato dall'Active Directory per l'utente "John Doe" è "title". Corrisponde al "job title" che è `manager@<my-domain>.com`.

Puoi verificarlo anche nella dichiarazione SAML:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

Questo significa che è necessario aggiungere il gruppo `manager@<my-domain>.com` al tuo account OVHcloud associandovi un ruolo. In caso contrario, il tuo account OVHcloud non sa cosa l'utente può fare.

Per aggiungerlo, clicca sul pulsante `Dichiarare un gruppo`{.action} e inserisci i campi:

![Gruppi di gestione utenti ADFS](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Gruppi di gestione utenti ADFS](images/ovhcloud_user_management_groups_2.png){.thumbnail}

Verifica che il gruppo sia aggiunto al tuo account OVHcloud nella sezione `Gruppi`:

![Gruppi di gestione utenti ADFS](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Quando ti connetti con l'utente Active Directory "John Doe", il tuo account OVHcloud riconoscerà che l'utente ha il ruolo "REGULAR", specificato dal suo gruppo.

In seguito, potrai disconnetterti dal tuo account e collegarti con il tuo ADFS come provider di identità.

### Connessione via SSO

Nella [pagina di identificazione OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), inserisci il tuo [identificativo cliente](https://docs.ovh.com/it/customer/creare-account-ovhcloud/#qual-e-il-mio-identificativo-cliente) seguito da **/idp** senza password e clicca sul pulsante `Login`{.action}.

![Connessione alla federazione OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

Verrai reindirizzato alla pagina di connessione ADFS. Inserisci un login/password di un utente della tua Active Directory LDAP e clicca sul pulsante `Sign in`{.action}.

![OVHcloud Federation login Reindirizzamenti ADFS](images/ovhcloud_federation_login_2.png){.thumbnail}

Adesso sei connesso con lo stesso identificativo cliente, ma tramite l'utente Active Directory e il tuo SSO ADFS.

![Federazione delle informazioni degli utenti OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Per saperne di più

[Crea un account OVHcloud](https://docs.ovh.com/it/customer/creare-account-ovhcloud/)

[Rendere sicuro il tuo account OVHcloud e gestire le tue informazioni personali](https://docs.ovh.com/it/customer/tutto_sullidentificativo_cliente_ovh/)

[Definizione e gestione della password del tuo account](https://docs.ovh.com/it/customer/gestire-la-password/)

[Rendere sicuro il tuo account OVHcloud con la doppia autenticazione](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
