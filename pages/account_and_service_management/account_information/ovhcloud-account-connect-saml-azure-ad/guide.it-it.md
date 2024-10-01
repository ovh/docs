---
title: Attiva le connessioni SSO di Entra ID con il tuo account OVHcloud
excerpt: "Scopri come associare il tuo Entra ID (precedentemente Azure Active Directory) al tuo account OVHcloud utilizzando SAML 2.0"
updated: 2024-07-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L'autenticazione **SSO** (*Single Sign-On*) è disponibile per accedere al tuo account OVHcloud. Per attivare queste connessioni, l'account e l'Entra ID (in precedenza Azure Active Directory) devono essere configurati utilizzando SAML (*Security Assertion Markup Language*)..

**Questa guida ti mostra come associare il tuo account OVHcloud a un Entra ID esterno.**

## Prerequisiti

- Avere accesso ai ruoli **Amministratore applicazioni** e **Amministratore utenti** di Entra ID
- Disporre di un [account OVHcloud attivo](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

> [!primary]
>
> Affinché un provider di servizi (ad esempio, l'account OVHcloud) stabilisca una connessione SSO con un provider (ad esempio, Entra ID), è necessario stabilire un rapporto di fiducia reciproca registrando la connessione SSO in entrambi i servizi.
>

### Utenti e gruppi Entra ID

Il vostro Entra ID agisce come fornitore di identità. Le richieste di autenticazione per il tuo account OVHcloud saranno accettate solo se l'hai precedentemente dichiarato come terza parte di fiducia.

Concentriamoci per un attimo sulle identità dal lato del provider.

#### Utenti Entra ID

Per iniziare, accedi alla dashboard Entra ID.

![Dashboard Entra ID](images/azure_ad_dashboard.png){.thumbnail}

Clicca su `Users`{.action} nel menu a sinistra.

![Utenti del menu Entra ID](images/azure_ad_menu_user.png){.thumbnail}

Crea tutti gli utenti che vuoi e/o verifica i tuoi utenti cliccando su di essi.

Per questo esempio, verrà utilizzato l'utente **John Smith**.

![Utenti Entra ID](images/azure_ad_user.png){.thumbnail}

Quando viene effettuata un'autenticazione SSO, l'identità di **John Smith** è fornita da Entra ID sull'account OVHcloud. È tuttavia necessario che tale identità contenga almeno un gruppo. Se nessun gruppo esiste, ecco come crearne uno per aggiungervi **John Smith**.

#### Gruppi Entra ID

Clicca su `Groups`{.action} nel menu a sinistra.

![Gruppi di menu Entra ID](images/azure_ad_menu_groups.png){.thumbnail}

Clicca su `New group`{.action} nel menu in alto e inserisci tutte le informazioni necessarie.

Per questo esempio, verrà utilizzato il gruppo **manager@ovhcloudsaml**.

![Entra ID Group Step 1](images/azure_ad_group_1.png){.thumbnail}

Clicca sul pulsante `Create`{.action} per visualizzare tutte le informazioni su questo gruppo.

![Entra ID Group Step 2](images/azure_ad_group_2.png){.thumbnail}

Ora, gli utenti che saranno utilizzati per l'autenticazione SSO devono essere aggiunti a un gruppo.

In questo esempio, associamo l'utente **John Smith** al gruppo **manager@ovhcloudsaml**.

Nell'interfaccia del gruppo selezionato, clicca sugli `Members`{.action} nel menu a sinistra e poi su `Add members`{.action} nel menu in alto.

![Entra ID Group User Assignment Step 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Seleziona l'utente da aggiungere a questo gruppo e clicca sul pulsante `Select`{.action}.

![Entra ID Group User Assignment Step 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Ora, l'utente è assegnato al gruppo.

Per effettuare le credenziali SSO, è necessario creare un'applicazione Entra ID.

L'autenticazione unica deve essere configurata su questa applicazione.

### Applicazioni Entra ID

Per prima cosa, crea un'applicazione se non esiste ancora.

#### Crea un'applicazione Entra ID

Clicca su `Enterprise applications`{.action} nel menu a sinistra.

![Applicazioni del menu Entra ID](images/azure_ad_menu_applications.png){.thumbnail}

Clicca su `New application`{.action} nel menu in alto.

![Applicazioni Entra ID step 1](images/azure_ad_applications_1.png){.thumbnail}

Clicca su `Create your own application`{.action} nel menu in alto.

![Applicazioni Entra ID step 2](images/azure_ad_applications_2.png){.thumbnail}

Seleziona `Non-gallery`{.action} nel menu a sinistra e clicca sul pulsante `Create`{.action}.

![Applicazioni Entra ID step 3](images/azure_ad_applications_3.png){.thumbnail}

I dettagli dell'applicazione verranno mostrati

![Applicazioni Entra ID step 4](images/azure_ad_applications_4.png){.thumbnail}

L'applicazione Entra ID è stata creata. Gli utenti che intendono effettuare le credenziali di sicurezza tramite questa applicazione devono essere aggiunti.

#### Applicazione Entra ID - Destinazione degli utenti

> [!primary]
>
> Affinché un utente effettui un'autenticazione SSO a partire da un'applicazione Entra ID, deve essere aggiunta a questa applicazione. Di seguito trovi come aggiungere un utente a un'applicazione Entra ID.
>
> Tuttavia, se disponi di **Entra ID Premium**, è preferibile aggiungere un gruppo di utenti piuttosto che utenti.
>

Clicca su `Users and groups`{.action} nel menu a sinistra e poi clicca su `Add user/group`{.action} nel menu in alto.

Clicca sulla sezione `Users`{.action}, seleziona l'utente da aggiungere all'applicazione e poi clicca sul pulsante `Select`{.action}.

![Entra ID Application User Assignment Step 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Entra ID Application User Assignment Step 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

L'applicazione è creata, l'utente è assegnato, non ti resta che installare il SSO via SAML.

#### Entra ID app SSO

Per visualizzare l'immagine, clicca sul pulsante `Overview`{.action} nel menu a sinistra e poi su `Set up single sign on`{.action}.

![Entra ID SSO Step 1](images/azure_ad_sso_1.png){.thumbnail}

Clicca sulla sezione `SAML`{.action}.

![Entra ID SSO Step 2](images/azure_ad_sso_2.png){.thumbnail}

Clicca su `Upload metadata`{.action} nel menu in alto.

![Entra ID SSO Step 3](images/azure_ad_sso_3.png){.thumbnail}

Clicca sull'icona del pulsante `Select a file`{.action}, seleziona il file di metadati OVH Service Provider e clicca sul pulsante `Add`{.action}.

Puoi ottenere il file di metadati appropriato tramite questi link:

- [Metadati della regione UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadati della regione CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Scarica il file di metadati, ne avrai bisogno più tardi.

![Entra ID SSO Step 5](images/azure_ad_sso_5.png){.thumbnail}

Si apre la configurazione SAML.

![Entra ID SSO Step 6](images/azure_ad_sso_6.png){.thumbnail}

Nella sezione `Attributes & Claims`{.action}, clicca sul pulsante `Edit`{.action}.

![Entra ID SSO Step 9](images/azure_ad_sso_9.png){.thumbnail}

Aggiungere l'attributo UPN (User Principal Name) alle informazioni SAML per notificare a OVHcloud l'indirizzo e-mail dell'utente. Questo step è indispensabile.

Clicca su `Add a new claim`{.action} nel menu in alto.

Nel campo `Name`{.action}, inserisci il valore `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`.

Nel campo `Source attribute`{.action}, inserisci `user.mail`{.action}.

L'interfaccia dovrebbe quindi essere abbastanza simile al seguente screenshot:

![Entra ID SSO immissione UPN](images/azure_ad_sso_9bis.png){.thumbnail}

Clicca su `Save`{.action}

Dichiarare l'attributo utilizzato per il gruppo dell'utente.

Clicca su `Add a group claim`{.action} nel menu in alto.

![Entra ID SSO step 10](images/azure_ad_sso_10.png){.thumbnail}

Seleziona `Security groups`{.action} e **Group ID** nella `Source attribute`{.action} e clicca sul pulsante `Save`{.action}.

![Entra ID SSO Step 11](images/azure_ad_sso_11.png){.thumbnail}

La richiesta dei **groups** deve ora essere inclusa nella lista.

Copia e registra il valore del **Claim name** da qualche parte (ad esempio un blocco note), ne avrai bisogno in un secondo momento.

![Entra ID SSO Step 12](images/azure_ad_sso_12.png){.thumbnail}

Nella sezione `SAML certificates`{.action}, copia il valore del campo `App Federation Metadata Url`{.action}.

Utilizza questo link per scaricare il file di metadati dell'applicazione Entra ID per utilizzarlo in seguito nell'account OVHcloud.

![Entra ID SSO Step 8](images/azure_ad_sso_8.png){.thumbnail}

### Creare la fiducia di un account OVHcloud e configurare la connessione

L'applicazione Entra ID viene aggiunta come provider di identità approvato tramite [lo Spazio Cliente OVHcloud](/links/manager), dove è possibile fornire i metadati del provider.

#### Creare la fiducia di OVHcloud

Clicca sul nome del tuo account in alto a destra e poi di nuovo sul tuo nome nella barra laterale.

![Accesso al menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Accedi al menu IAM tramite la voce dedicata dello Spazio Cliente.

![Accesso al menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Clicca sulla scheda `Identità`{.action} per accedere alla gestione degli utenti locali.

![Accesso al menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Clicca sul pulsante `Connessione SSO`{.action}.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Completa il campo **Group Attribute Name** con il valore di **Claim name** dei gruppi di applicazioni Entra ID precedentemente registrato.

Compila i metadati XML della tua applicazione Entra ID a partire dal file registrato precedentemente.

Per conservare gli utenti locali, spunta la casella `Conservare gli utenti OVHcloud attivi`.

Clicca sul pulsante `Conferma`{.action}.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

È quindi possibile aggiungere Entra ID come provider, ma è necessario aggiungere gruppi al tuo account OVHcloud.

> [!warning]
> Se stai cercando di connetterti via SSO, probabilmente comparirà un messaggio di errore "`Not in valid groups`".
>
> Infatti, il tuo account OVHcloud verifica se l'utente autenticato appartiene a un gruppo esistente sull'account.
>

Per risolvere il problema, verifica l'attributo "Group" restituito dalla tua applicazione Entra ID: il campo **Object Id**.

#### Dichiarazione dei gruppi OVHcloud

![Entra ID Group Step 2](images/azure_ad_group_2.png){.thumbnail}

Per aggiungerlo, clicca sul pulsante `Declarer un gruppo`{.action}.

![Gruppi di gestione utenti Ovhcloud step 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Completa i campi e clicca su `Conferma`{.action}.

![Gruppi di gestione utenti Ovhcloud Step 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

Il gruppo creato deve figurare sull'elenco.

![Gruppi di gestione utenti Ovhcloud step 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

Attenzione: se concedi il privilegio `Nessuno`, sarà necessario assegnare i diritti a questo gruppo tramite le [politiche IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

### Connexion via SSO

Nella [pagina di identificazione OVHcloud](/links/manager), inserisci il tuo [identificativo cliente](/pages/account_and_service_management/account_information/ovhcloud-account-creation#qual-e-il-mio-identificativo-cliente) seguito da **/idp** senza password e clicca sul pulsante `Login`{.action}.

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

Verrai reindirizzato alla pagina di connessione dell'applicazione Entra ID. Seleziona `Use another account`{.action}.

![Entra ID Login tappa 1](images/azure_ad_login_1.png){.thumbnail}

Inserisci l'email dell'utente dell'applicazione Entra ID e poi clicca sul pulsante `Next`{.action}.

![Entra ID Login tappa 2](images/azure_ad_login_2.png){.thumbnail}

Inserisci la password dell'utente Entra ID e clicca sul pulsante `Sign In`{.action}.

![Entra ID Login step 3](images/azure_ad_login_3.png){.thumbnail}

Adesso sei connesso con lo stesso NIC handle, ma tramite il tuo utente Active Directory e utilizzando il tuo SSO di applicazione Entra ID.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}

Se la tua email non compare sotto `Connected via SSO`, significa che non hai configurato correttamente l’attributo **UPN** e quindi alcune delle funzionalità non potranno funzionare.

## Per saperne di più

[Crea un account OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Rendere sicuro il tuo account OVHcloud e gestire le tue informazioni personali](/pages/account_and_service_management/account_information/all_about_username)

[Definizione e gestione della password del tuo account](/pages/account_and_service_management/account_information/manage-ovh-password)

[Rendere sicuro il tuo account OVHcloud con la doppia autenticazione](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Come utilizzare le politiche IAM dallo Spazio Cliente](/pages/account_and_service_management/account_information/iam-policy-ui).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
