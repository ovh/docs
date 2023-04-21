---
title: Attiva le connessioni SSO di Azure AD con il tuo account OVHcloud
slug: connect-saml-sso-azure-ad
excerpt: "Questa guida ti mostra come associare il tuo servizio Azure Active Directory al tuo account OVHcloud tramite SAML 2.0"
section: Utilizzo avanzato
order: 02
updated: 2023-04-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 05/04/2023**

## Obiettivo

L'autenticazione **SSO** (*Single Sign-On*) è disponibile per accedere al tuo account OVHcloud. Per attivare queste connessioni, il tuo account e il tuo Azure AD (Active Directory) devono essere configurati con l'aiuto di SAML (*Security Assertion Markup Language*).

**Questa guida ti mostra come associare il tuo account OVHcloud a un Azure AD esterno.**

## Prerequisiti

- Avere accesso ai ruoli **Amministratore applicazioni** e **Amministratore utenti** di Azure AD
- Disporre di un [account OVHcloud attivo](https://docs.ovh.com/it/customer/creare-account-ovhcloud/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

> [!primary]
>
> Affinché un provider di servizi (ad esempio, l'account OVHcloud) stabilisca una connessione SSO con un provider (ad esempio, Azure AD), è necessario stabilire un rapporto di fiducia reciproca registrando la connessione SSO in entrambi i servizi.
>

### Utenti e gruppi Azure AD

Il vostro Azure AD agisce come fornitore di identità. Le richieste di autenticazione per il tuo account OVHcloud saranno accettate solo se l'hai precedentemente dichiarato come terza parte di fiducia.

Concentriamoci per un attimo sulle identità dal lato del provider.

#### Utenti Azure AD

Per iniziare, accedi alla dashboard Azure AD.

![Dashboard Azure AD](images/azure_ad_dashboard.png){.thumbnail}

Clicca su `Users`{.action} nel menu a sinistra.

![Utenti del menu Azure AD](images/azure_ad_menu_user.png){.thumbnail}

Crea tutti gli utenti che vuoi e/o verifica i tuoi utenti cliccando su di essi.

Per questo esempio, verrà utilizzato l'utente **John Smith**.

![Utenti Azure AD](images/azure_ad_user.png){.thumbnail}

Quando viene effettuata un'autenticazione SSO, l'identità di **John Smith** è fornita da Azure AD sull'account OVHcloud. È tuttavia necessario che tale identità contenga almeno un gruppo. Se nessun gruppo esiste, ecco come crearne uno per aggiungervi **John Smith**.

#### Gruppi Azure AD

Clicca su `Groups`{.action} nel menu a sinistra.

![Gruppi di menu Azure AD](images/azure_ad_menu_groups.png){.thumbnail}

Clicca su `New group`{.action} nel menu in alto e inserisci tutte le informazioni necessarie.

Per questo esempio, verrà utilizzato il gruppo **manager@ovhcloudsaml**.

![Azure AD Group Step 1](images/azure_ad_group_1.png){.thumbnail}

Clicca sul pulsante `Create`{.action} per visualizzare tutte le informazioni su questo gruppo.

![Azure AD Group Step 2](images/azure_ad_group_2.png){.thumbnail}

Ora, gli utenti che saranno utilizzati per l'autenticazione SSO devono essere aggiunti a un gruppo.

In questo esempio, associamo l'utente **John Smith** al gruppo **manager@ovhcloudsaml**.

Nell'interfaccia del gruppo selezionato, clicca sugli `Members`{.action} nel menu a sinistra e poi su `Add members`{.action} nel menu in alto.

![Azure AD Group User Assignment Step 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Seleziona l'utente da aggiungere a questo gruppo e clicca sul pulsante `Select`{.action}.

![Azure AD Group User Assignment Step 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Ora, l'utente è assegnato al gruppo.

Per effettuare le credenziali SSO, è necessario creare un'applicazione Azure AD.

L'autenticazione unica deve essere configurata su questa applicazione.

### Applicazioni Azure AD

Per prima cosa, crea un'applicazione se non esiste ancora.

#### Crea un'applicazione Azure AD

Clicca su `Enterprise applications`{.action} nel menu a sinistra.

![Applicazioni del menu Azure AD](images/azure_ad_menu_applications.png){.thumbnail}

Clicca su `New application`{.action} nel menu in alto.

![Applicazioni Azure AD step 1](images/azure_ad_applications_1.png){.thumbnail}

Clicca su `Create your own application`{.action} nel menu in alto.

![Applicazioni Azure AD step 2](images/azure_ad_applications_2.png){.thumbnail}

Seleziona `Non-gallery`{.action} nel menu a sinistra e clicca sul pulsante `Create`{.action}.

![Applicazioni Azure AD step 3](images/azure_ad_applications_3.png){.thumbnail}

I dettagli dell'applicazione verranno mostrati

![Applicazioni Azure AD step 4](images/azure_ad_applications_4.png){.thumbnail}

L'applicazione Azure AD è stata creata. Gli utenti che intendono effettuare le credenziali di sicurezza tramite questa applicazione devono essere aggiunti.

#### Applicazione Azure AD - Destinazione degli utenti

> [!primary]
>
> Affinché un utente effettui un'autenticazione SSO a partire da un'applicazione Azure AD, deve essere aggiunta a questa applicazione. Di seguito trovi come aggiungere un utente a un'applicazione Azure AD.
>
> Tuttavia, se disponi di **Azure AD Premium**, è preferibile aggiungere un gruppo di utenti piuttosto che utenti.
>

Clicca su `Users and groups`{.action} nel menu a sinistra e poi clicca su `Add user/group`{.action} nel menu in alto.

Clicca sulla sezione `Users`{.action}, seleziona l'utente da aggiungere all'applicazione e poi clicca sul pulsante `Select`{.action}.

![Azure AD Application User Assignment Step 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Azure AD Application User Assignment Step 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

L'applicazione è creata, l'utente è assegnato, non ti resta che installare il SSO via SAML.

#### Azure AD app SSO

Per visualizzare l'immagine, clicca sul pulsante `Overview`{.action} nel menu a sinistra e poi su `Set up single sign on`{.action}.

![Azure AD SSO Step 1](images/azure_ad_sso_1.png){.thumbnail}

Clicca sulla sezione `SAML`{.action}.

![Azure AD SSO Step 2](images/azure_ad_sso_2.png){.thumbnail}

Clicca su `Upload metadata`{.action} nel menu in alto.

![Azure AD SSO Step 3](images/azure_ad_sso_3.png){.thumbnail}

Clicca sull'icona del pulsante `Select a file`{.action}, seleziona il file di metadati OVH Service Provider e clicca sul pulsante `Add`{.action}.

Puoi ottenere il file di metadati appropriato tramite questi link:

- [Metadati della regione UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadati della regione CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Scarica il file di metadati, ne avrai bisogno più tardi.

![Azure AD SSO Step 5](images/azure_ad_sso_5.png){.thumbnail}

Si apre la configurazione SAML.

![Azure AD SSO Step 6](images/azure_ad_sso_6.png){.thumbnail}

Nella sezione `Attributes & Claims`{.action}, clicca sul pulsante `Edit`{.action}.

![Azure AD SSO Step 9](images/azure_ad_sso_9.png){.thumbnail}

Clicca su `Add a group claim`{.action} nel menu in alto.

![Azure AD SSO step 10](images/azure_ad_sso_10.png){.thumbnail}

Seleziona `Security groups`{.action} e **Group ID** nella `Source attribute`{.action} e clicca sul pulsante `Save`{.action}.

![Azure AD SSO Step 11](images/azure_ad_sso_11.png){.thumbnail}

La richiesta dei **groups** deve ora essere inclusa nella lista.

Copia e registra il valore del **Claim name** da qualche parte (ad esempio un blocco note), ne avrai bisogno in un secondo momento.

![Azure AD SSO Step 12](images/azure_ad_sso_12.png){.thumbnail}

Nella sezione `SAML certificates`{.action}, copia il valore del campo `App Federation Metadata Url`{.action}.

Utilizza questo link per scaricare il file di metadati dell'applicazione Azure AD per utilizzarlo in seguito nell'account OVHcloud.

![Azure AD SSO Step 8](images/azure_ad_sso_8.png){.thumbnail}

### Creare la fiducia di un account OVHcloud e configurare la connessione

L'applicazione Azure AD viene aggiunta come provider di identità approvato tramite [lo Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), dove è possibile fornire i metadati del provider.

#### Creare la fiducia di OVHcloud

[Accedi allo Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca sul tuo profilo in alto a destra.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Clicca sul tuo nome per accedere alla pagina di gestione del tuo profilo.

![Informazioni utente OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Apri la scheda `Gestione utenti`{.action}.

![Profilo menu OVHcloud](images/ovhcloud_profile_menu.png){.thumbnail}

Clicca sul pulsante `Connessione SSO`{.action}.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Completa il campo **Group Attribute Name** con il valore di **Claim name** dei gruppi di applicazioni Azure AD precedentemente registrato.

Compila i metadati XML della tua applicazione Azure AD a partire dal file registrato precedentemente.

Clicca sul pulsante `Conferma`{.action}.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

È quindi possibile aggiungere Azure AD come provider, ma è necessario aggiungere gruppi al tuo account OVHcloud.

> [!warning]
> Se stai cercando di connetterti via SSO, probabilmente comparirà un messaggio di errore "`Not in valid groups`".
>
> Infatti, il tuo account OVHcloud verifica se l'utente autenticato appartiene a un gruppo esistente sull'account.
>

Per risolvere il problema, verifica l'attributo "Group" restituito dalla tua applicazione Azure AD: il campo **Object Id**.

#### Dichiarazione dei gruppi OVHcloud

![Azure AD Group Step 2](images/azure_ad_group_2.png){.thumbnail}

Per aggiungerlo, clicca sul pulsante `Declarer un gruppo`{.action}.

![Gruppi di gestione utenti Ovhcloud step 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Completa i campi e clicca su `Conferma`{.action}.

![Gruppi di gestione utenti Ovhcloud Step 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

Il gruppo creato deve figurare sull'elenco.

![Gruppi di gestione utenti Ovhcloud step 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

### Connexion via SSO

Nella [pagina di identificazione OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), inserisci il tuo [identificativo cliente](https://docs.ovh.com/it/customer/creare-account-ovhcloud/#qual-e-il-mio-identificativo-cliente) seguito da **/idp** senza password e clicca sul pulsante `Login`{.action}.

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

Verrai reindirizzato alla pagina di connessione dell'applicazione Azure AD. Seleziona `Use another account`{.action}.

![Azure AD Login tappa 1](images/azure_ad_login_1.png){.thumbnail}

Inserisci l'email dell'utente dell'applicazione Azure AD e poi clicca sul pulsante `Next`{.action}.

![Azure AD Login tappa 2](images/azure_ad_login_2.png){.thumbnail}

Inserisci la password dell'utente Azure AD e clicca sul pulsante `Sign In`{.action}.

![Azure AD Login step 3](images/azure_ad_login_3.png){.thumbnail}

Adesso sei connesso con lo stesso NIC handle, ma tramite il tuo utente Active Directory e utilizzando il tuo SSO di applicazione Azure AD.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}


## Per saperne di più

[Crea un account OVHcloud](https://docs.ovh.com/it/customer/creare-account-ovhcloud/)

[Rendere sicuro il tuo account OVHcloud e gestire le tue informazioni personali](https://docs.ovh.com/it/customer/tutto_sullidentificativo_cliente_ovh/)

[Definizione e gestione della password del tuo account](https://docs.ovh.com/it/customer/gestire-la-password/)

[Rendere sicuro il tuo account OVHcloud con la doppia autenticazione](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.

