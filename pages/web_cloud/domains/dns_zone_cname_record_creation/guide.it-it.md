---
title: "Come aggiungere un record DNS di tipo CNAME per un sottodominio"
excerpt: "Questa guida ti mostra come aggiungere un record DNS di tipo CNAME in una zona DNS gestita in OVHcloud per il sottodominio di un dominio"
updated: 2025-06-25
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Un record CNAME permette di associare un sottodominio a un dominio o sottodominio, senza dover specificare un indirizzo IP. Il sottodominio sarà reindirizzato verso l'indirizzo IP del dominio o sottodominio di destinazione, senza necessità di configurazione aggiuntiva.

Ad esempio, se si crea un record CNAME per *www.domain.tld* che punta a *domain.tld*, *www.domain.tld* utilizzerà lo stesso indirizzo IP di *domain.tld*.

I record CNAME sono utili per evitare di modificare gli indirizzi IP dei sottodomini. Possono anche essere utilizzati per configurare servizi come i server di posta.

**Questa guida ti mostra come aggiungere un record CNAME alla zona DNS di OVHcloud.**

> **Hai già un record di tipo CNAME nella tua zona DNS?** Consulta la nostra guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Prerequisiti

- Disporre di un [dominio](/links/web/domains).
- Disporre di una zona DNS associata a questo dominio in OVHcloud.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}.

> [!warning]
>
> **L'aggiunta, la modifica o la cancellazione di record DNS in una zona DNS attiva è un'operazione delicata.**
> In caso di dubbi, contatta un [provider specializzato](/links/partner).

## Procedura

### Aggiungere un record DNS di tipo CNAME per il sottodominio di un dominio

1. Fare clic sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
2. Fare clic sul pulsante `Aggiungi un record`{.action}.
3. Nella finestra che si apre, seleziona il campo di puntamento di tipo `CNAME`{.action}.
4. Inserisci nel campo `Sottodominio` il sottodominio interessato (ad esempio: `www` per il sottodominio `www.domain.tld`) e, nel campo `Destinazione *`, il nome di dominio o sottodominio (ad esempio: `domain.tld`) a cui vuoi associare il nome utilizzando il record di tipo CNAME. Infine clicca su `Continua`{.action}.
5. Verifica il riepilogo e fare clic su `Conferma`{.action}. Attendi fino a **24** ore affinché la propagazione dell'aggiunta sulla rete DNS sia pienamente effettiva.

/// details | Consulta le nostre guide dettagliate:

- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
- [Come creare un sottodominio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Hosting Web - Modificare un dominio già associato a un hosting](/pages/web_cloud/web_hosting/multisites_modify_domain)

///


### Casi particolari

Per ulteriori informazioni, fare clic sui collegamenti seguenti:

/// details | Record CNAME e TXT per lo stesso sottodominio

Non configurare contemporaneamente un record CNAME e un record TXT per lo stesso sottodominio. Questo può generare risultati casuali durante la risoluzione DNS, in quanto solo una risposta può essere restituita da una query DNS.

Ad esempio, se sono presenti i seguenti record per *www.domain.tld*:

- Un record CNAME che punta a *domain.tld*.
- Un record TXT con un valore specifico.

Una richiesta DNS per *www.domain.tld* restituirà la destinazione del record CNAME o il valore del record TXT, in modo casuale.

///

/// details | CNAME su un dominio nella propria zona DNS

Per convenzione, **i record di tipo CNAME non possono essere utilizzati su un dominio nella propria zona DNS**. Il dominio deve puntare direttamente verso un indirizzo IP con un record di tipo [A](/pages/web_cloud/domains/dns_zone_a_record_creation) per un IPv4, o [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) per un IPv6.

Seguendo l’esempio precedente, non è possibile creare un record di tipo CNAME per il dominio *domain.tld* nella zona DNS creata per il dominio.
È possibile creare record di tipo CNAME per tutti i sottodomini (ad esempio: *subdomain.domain.tld* o *www.domain.tld*) del dominio *domain.tld* nella zona DNS creata per *domain.tld*.

///

## Per saperne di più
 
Per prestazioni specializzate (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).