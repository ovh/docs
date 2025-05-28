---
title: "Aggiungere un record DNS di tipo AAAA per un dominio"
excerpt: "Scopri come aggiungere un record DNS di tipo AAAA a una zona DNS gestita in OVHcloud per il tuo dominio"
updated: 2025-05-15
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

Vuoi che il tuo sito sia accessibile tramite il tuo dominio? Per fare ciò, il dominio deve puntare verso l’indirizzo IP del servizio su cui è situato il sito Web (hosting Web, server dedicato, VPS, ecc.). A questo punto, è necessario configurare la zona DNS attiva del dominio con un record DNS di tipo AAAA.

**Questa guida ti mostra come aggiungere un record DNS di tipo AAAA a una zona DNS gestita in OVHcloud per il tuo dominio.**

> [!primary]
>
> Per modificare o eliminare un record DNS di tipo AAAA da una zona DNS di OVHcloud, segui [questa guida](/pages/web_cloud/domains/dns_zone_edit).

## Prerequisiti

- Disporre di un [dominio](/links/web/domains).
- Disporre di una zona DNS associata a questo dominio in OVHcloud.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}.

## Procedura

> [!warning]
>
> L'aggiunta, la modifica o la cancellazione di record DNS in una zona DNS attiva è un'operazione delicata. In caso di dubbi, contatta un [provider specializzato](/links/partner).

### Aggiungere un record DNS di tipo AAAA per un dominio

1. Fare clic sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
2. Fare clic sul pulsante `Aggiungi un record`{.action}.
3. Nella finestra che si apre, seleziona il campo di puntamento di tipo `AAAA`{.action}.
4. Inserisci l’indirizzo IP (ad esempio, `2001:db8:1:1b00:203:0:113:0`) del servizio su cui è situato il tuo sito Web (hosting Web, server dedicato, VPS, ecc.) nel campo `Destinazione *` e fare clic su `Continua`{.action}.
5. Verifica il riepilogo e fare clic su `Conferma`{.action}. Attendi fino a **24** ore affinché la propagazione dell'aggiunta sulla rete DNS sia pienamente effettiva.

/// details | Per ulteriori informazioni, fare clic qui.

Consulta le nostre guide dettagliate:

- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records).
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting Web - Modificare un dominio già associato a un hosting](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

### Aggiungere un record DNS di tipo AAAA per il sottodominio di un dominio

1. Fare clic sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
2. Fare clic sul pulsante `Aggiungi un record`{.action}.
3. Nella finestra che si apre, seleziona il campo di puntamento di tipo `AAAA`{.action}.
4. Successivamente, inserisci nel campo `Sottodominio` il sottodominio interessato (ad esempio: `www` per il sottodominio `www.domain.tld`) e, nel campo `Destinazione *`, l’indirizzo IP (ad esempio: `2001:db8:1:1b00:203:0:113:0`) del servizio sul quale è situato il tuo sito Web (hosting Web, server dedicato, VPS, ecc.). Infine fare clic su `Continua`{.action}.
5. Verifica il riepilogo e fare clic su `Conferma`{.action}. Attendi fino a **24** ore affinché la propagazione dell'aggiunta sulla rete DNS sia pienamente effettiva.

/// details | Per ulteriori informazioni, fare clic qui.

Consulta le nostre guide dettagliate:

- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records).
- [Come creare un sottodominio?](/pages/web_cloud/domains/domain_create_subdomains).
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting Web - Modificare un dominio già associato a un hosting](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

## Per saperne di più

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information).

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records).
 
Per prestazioni specializzate (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).