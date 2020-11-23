---
deprecated: true
title: 'Hosting několika webových stránek na jednom webhostingovém řešení'
slug: konfigurace-multisite-webhosting
excerpt: 'Zjistěte, jak svůj webhosting rozdělit mezi vícero webových stránek'
section: Konfigurace
order: 1
---

**Poslední aktualizace 03/09/2018**

## Cíl

Na svém webhostingu můžete hostovat několik webových stránek. Rozdělení webhostingu je možné jak pro domény registrované u společnosti OVH, tak pro externí domény.

**Zjistěte, jak svůj webhosting rozdělit mezi vícero webových stránek.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Alespoň jedna [doména](https://www.ovh.cz/domeny/){.external}.
- Dostatečná práva pro provádění úprav v konfiguraci domény (resp. v její DNS zóně).
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Postup

### Fáze 1: přístup do rozhraní pro správu Multisite

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu webhostingu klikněte na záložku `Multisite`{.action}.

Tabulka nabízí přehled všech domén připojených k Vašemu webhostingu. Některé z těchto domén byly při instalaci webhostingu vytvořeny automaticky.

> [!primary]
>
> Pokud provádíte migraci webových stránek a chcete předejít případné nedostupnosti své služby, pokračujte rovnou k [Fázi 4: spuštění stránek online](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/#faze-4-spusteni-stranek-online){.external}.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Fáze 2: přidání domény či subdomény

Pro přidání nové domény k webhostingovému řešení klikněte na tlačítko `Přidat doménu či subdoménu`{.action} a postupujte podle uvedených pokynů.

- **Přidání domény registrované u společnosti OVH**:

Zvolte doménu ze seznamu: vybírat můžete pouze z domén, které jsou asociovány s Vaším zákaznickým identifikátorem a které používají konfiguraci OVH. Vyberte doménu ze seznamu a klikněte na tlačítko `Další`{.action}. Pokud jste zvolili tento postup, řiďte se pokyny uvedenými ve fázi [3.1: přidání domény registrované u společnosti OVH](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/#faze-31-pridani-domeny-registrovane-u-spolecnosti-ovh){.external}.

- **Přidání externí domény**:

Zadejte externí doménu, kterou si na svůj webhosting přejete přidat. Mějte prosím na paměti, že pro úspěšné přidání externí domény musíte disponovat dostatečnými právy pro provádění úprav v její DNS konfiguraci. Pokud jste zvolili tento postup, řiďte se pokyny uvedenými ve fázi [3.2: přidání externí domény](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/#faze-32-pridani-externi-domeny){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Fáze 3.1: přidání domény registrované u společnosti OVH:

> [!primary]
>
> Tato fáze popisuje postup pro „přidání domény registrované u společnosti OVH“. Pro přidání externí domény postupujte podle pokynů uvedených ve fázi [3.2: přidání externí domény](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/#faze-32-pridani-externi-domeny){.external}.
>

 V závislosti na Vašem [webhostingovém balíčku OVH](https://www.ovh.cz/webhosting/){.external} nemusí být některé možnosti nastavení dostupné.

|Informace|Popis|
|---|---|
|Doména|Automaticky se vyplní doména, kterou jste vybrali v předchozím kroku. Můžete specifikovat subdoménu (např. blog.madomena.ovh) a zároveň vytvořit www subdoménu (např. www.madomena.ovh). |
|Kořenový adresář|Adresář, který bude použit pro ukládání dat dané domény na Vašem hostingu.  Příklad: pro adresu blog.mypersonaldomain.com může být kořenový adresář „blog“. Pokud adresář neexistuje, bude automaticky vytvořen.|
|Aktivace IPv6|Aktivuje protokol IPv6 na vybrané doméně. Detailní informace o této problematice naleznete na následující stránce: [IP](https://www.ovh.cz/webhosting/ip.xml){.external}.|
|SSL|Aktivuje bezpečnostní protokol (HTTPS://) na vybrané doméně. Detailní informace o této problematice naleznete na následující stránce: [SSL](https://www.ovh.cz/ssl/){.external}. Aktivací SSL a CDN (Content Delivery Network) můžete zároveň získat protokol **HTTP2**.|
|CDN|Aktivuje CDN (replikace a cashování statických prvků Vašich stránek) na vybrané doméně. Detailní informace o této problematice naleznete na následující stránce: [CDN](https://www.ovh.cz/webhosting/cdn.xml){.external}. Aktivací SSL a CDN (Content Delivery Network) můžete zároveň získat protokol **HTTP2**.|
|IP země|Umožňuje získat geolokalizovanou IP adresu (vyberte ze seznamu) pro vybranou doménu.  Detailní informace o této problematice naleznete na následující stránce: [IP](https://www.ovh.cz/webhosting/ip.xml){.external}.|
|Aktivovat firewall|Aktivuje firewall (analýza příchozích požadavků) na vybrané doméně. Detailní informace o této problematice naleznete na následující stránce: [ModSecurity](https://www.ovh.cz/webhosting/mod_security.xml){.external}.|
|Oddělené logy|Aktivuje nový prostor pro ukládání logů vybrané domény. Je zapotřebí vybrat doménu ze seznamu. Vybraná doména určí přístupový název k novému prostoru. Detailní informace o této problematice naleznete na následující stránce: [Webové statistiky](https://www.ovh.cz/webhosting/statistiky_webovych_stranek.xml){.external}.|

Po vyplnění údajů klikněte na tlačítko `Další`{.action}. Ověřte správnost zadaných údajů.

![multisite](images/add-multisite-step2.png){.thumbnail}

Při výběru domény registrované u společnosti OVH můžete v poslední fázi požádat o **automatickou konfiguraci DNS** (zaškrtnutím políčka `Automatické nastavení (doporučeno)`{.action}).

Pokud upřednostňujete **manuální konfiguraci DNS**, nechte políčko nezaškrtnuté. V takovém případě se zobrazí dodatečné informace o úpravách, které bude na doméně zapotřebí provést. Detailní informace o manuální konfiguraci naleznete v následující dokumentaci: [Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}.

Nakonec klikněte na tlačítko `Schválit`{.action}. Celý proces by neměl trvat déle než hodinu. Propagace změn v DNS zóně však může trvat 4 až 24 hodin.

Po úspěšném přidání domény pokračujte k [Fázi 4: spuštění stránek online](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/#faze-4-spusteni-stranek-online){.external}.

### Fáze 3.2: přidání externí domény

> [!primary]
>
> Tato fáze popisuje postup pro „přidání externí domény“ (tzn. takové domény, která není registrována u společnosti OVH, nebo k níž nemáte přístup v rámci svého Zákaznického prostoru OVH). Pro přidání domény registrované u společnosti OVH postupujte podle pokynů uvedených ve fázi [3.1: přidání domény registrované u společnosti OVH](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/#faze-31-pridani-domeny-registrovane-u-spolecnosti-ovh){.external}. 
>

Nejdříve je zapotřebí provést konfiguraci přidání domény. Některé funkce zahrnuté ve Vašem webhostingovém balíčku OVH nemohou být aktivovány ihned po přidání domény. Za účelem jejich aktivace budete nejdříve muset dokončit tuto fázi upravením nastavení domény.

|Informace|Popis|
|---|---|
|Doména|Zadejte doménu, kterou si přejete připojit. Můžete specifikovat subdoménu (např. blog.madomena.ovh) a zároveň vytvořit www subdoménu (např. www.madomena.ovh). Nezapomeňte, že pro úspěšné přidání externí domény musíte disponovat dostatečnými právy pro provádění úprav v její DNS konfiguraci.|
|Kořenový adresář|Adresář, který bude použit pro ukládání dat dané domény na Vašem hostingu. Příklad: pro adresu blog.mypersonaldomain.com může být kořenový adresář „blog“. Pokud adresář neexistuje, bude automaticky vytvořen.|
|Aktivace IPv6|Aktivuje protokol IPv6 na vybrané doméně. Detailní informace o této problematice naleznete na následující stránce: [IP](https://www.ovh.cz/webhosting/ip.xml){.external}.|

Po vyplnění údajů klikněte na tlačítko `Další`{.action}. Ověřte správnost zadaných údajů.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Jelikož jste vybrali doménu, které není registrována u společnosti OVH, budete požádáni o provedení určitých úprav v nastavení DNS.  

Zkontrolujte zobrazené informace a klikněte na tlačítko `Schválit`{.action}. Jakmile kliknete na tlačítko Schválit, doména bude dočasně přidána.

> [!warning]
>
> Provedení těchto úprav je nezbytnou podmínkou úspěšného přidání externí domény. Pokud požadované úpravy nebudou provedeny, dojde ke zrušení celého procesu.
>

Úpravy v DNS konfiguraci externí domény je zapotřebí provést prostřednictvím rozhraní poskytovatele, u nějž je doména registrována. Detailní informace na toto téma naleznete v následující dokumentaci: [Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}. Propagace změn v DNS zóně může trvat 4 až 24 hodin.

Požadované změny v konfiguraci domény:

|Záznam|Kde požadované informace naleznete|Popis|
|---|---|---|
|TXT|Přejděte do záložky `Multisite`{.action} a klikněte na tlačítko **Konfigurace tokenu ovhcontrol**|Umožňuje společnosti OVH ověřit legitimitu požadavků na přidání externích domén. Vytvořte TXT záznam se subdoménou **ovhcontrol** (např. ovhcontrol.madomena.ovh).|
|A a AAA|Záložka `Základní informace`{.action}, hned vedle **IPv4** a **IPv6**|Umožňuje zobrazení obsahu uloženého na webhostingu OVH.|

### Fáze 4: spuštění stránek online

Po úspěšném přidání domény nezbývá než uveřejnit Vaše webové stránky online. 

V případě zájmu o integraci ready-to-use řešení vyzkoušejte naše Moduly na jedno kliknutí. Detailní informace o instalaci webových stránek za použití Modulů na jedno kliknutí naleznete v následující dokumentaci: [Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}. 

> [!primary]
>
> Pokud si přejete přidat další webové stránky, výše popsaný proces opakujte pro každou z nich.
>
> Při rozdělování webhostingu mezi vícero webových stránek mějte prosím na paměti, že čím více stránek na daném webhostingu běží, tím větší nároky jsou na alokované zdroje kladeny. Detailní informace o kapacitách jednotlivých webhostingových balíčků naleznete na následující stránce: [OVH Webhosting](https://www.ovh.cz/webhosting/){.external}.
>

## Kam dál

[Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}.

[Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}.

[Spuštění webových stránek online](https://docs.ovh.com/cz/cs/hosting/spusteni-stranek-online/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.