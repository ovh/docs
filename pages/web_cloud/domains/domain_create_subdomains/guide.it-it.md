---
title: "Come creare un sottodominio?"
excerpt: "Questa guida ti mostra la definizione di un sottodominio e come crearlo in OVHcloud"
updated: 2023-11-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo <a name="goal"></a>

Internet è composto da *server* e da *dispositivi* che interagiscono tra loro attraverso una rete globale. Quando questi *server* e i relativi *dispositivi* sono connessi alla rete Internet, viene loro assegnato un *indirizzo IP pubblico* (equivalente a un indirizzo postale). Questo *indirizzo IP* permette di raggiungere in remoto un server o un dispositivo. In questo modo, un utente è in grado di consultare un sito Web digitando questo *indirizzo IP* grazie al browser Internet installato sul suo computer.

I **domini** sono stati introdotti per facilitare l'accesso a un sito Web per gli utenti della rete Internet. In effetti, è più facile ricordare un nome composto da una stringa di caratteri scelti (esempio: ovhcloud.com), piuttosto che da una serie di cifre che compone un *indirizzo IP* (esempio: 54.39.46.56).

Un **dominio** è composto da diversi livelli. Questi livelli sono generalmente separati da un `.` (ad eccezione di alcune **estensioni** del *primo livello* come *.co.uk*, *.gouv.fr* e *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): rappresenta i domini di *primo livello*. Le chiamiamo più comunemente **estensioni**. Al momento sono disponibili 4 tipi di dominio di primo livello: 

    - I **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): composti da due caratteri, corrispondono ai diversi paesi del mondo. ad esempio, le estensioni *.fr*, *.es*, *.it* o *.pl* sono ccTLDs;
    - I **g**eneric **T**op **L**evel **D**omains (**gTLDs**): composti da almeno tre caratteri, rappresentano temi o settori di attività più generali. Ad esempio, le estensioni *.com*, *.net*, *.org* o *.info* sono gTLDs;
    - I **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    nuove estensioni create a partire dal 2012 dall'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) per rispondere al forte aumento delle richieste di creazione di domini. Possono corrispondere a temi generici, marchi, regioni o città. ad esempio, le estensioni *.love*, *.ovh* o *.paris* sono new gTLDs;
    - I **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): si tratta in realtà di una sottocategoria delle new GTLDs. Su richiesta presso l'**ICANN**, le imprese o le organizzazioni possono richiedere la creazione del proprio TLD. L'estensione *.ovh*, ad esempio, è un CorpTLD creato da OVHcloud alcuni anni fa.

- **S**econd **L**evel **D**omain (**SLD**): rappresenta i domini di *secondo livello*. Le chiamiamo più comunemente **label**. Al momento dell'ordine di un dominio, è possibile definire liberamente il **label** (a condizione che non sia già stato registrato da un altro utente sulla stessa estensione e nel limite di 63 caratteri). *ovhcloud*, ad esempio, corrisponde al label del dominio *ovhcloud.com*.

- Third Level Domain (**subdomain**): è a partire da questo terzo livello che si parla di *sottodominio*. Descriveremo in dettaglio la definizione di servizio e ti spiegheremo come utilizzarlo con i tuoi diversi servizi.

![URL content](images/url-composition.png){.thumbnail}
  
**Questa guida ti mostra i sottodomini e come crearli in OVHcloud.**