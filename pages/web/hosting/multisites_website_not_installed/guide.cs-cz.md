---
deprecated: true
title: 'Chyba při načítání stránky „Website not installed“'
slug: webhosting_chyba_pri_nacitani_stranky
excerpt: 'Zjistěte, jak vyřešit chybné nastavení domény'
section: Konfigurace
order: 2
---

**Poslední aktualizace 05/04/2018**

## Cíl

Pokud se po zadání URL adresy do webového prohlížeče objeví chybové hlášení „Website not installed“, znamená to, že DNS konfigurace Vaší domény je nesprávná, nebo že doména používaná Vaší webovou stránkou nebyla správně nakonfigurována na webhostingu OVH.

**Zjistěte, jak vyřešit chybné nastavení domény, indikované chybovou hláškou „Website not installed“.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Administrátorský přístup k [webhostingovému balíčku OVH](https://www.ovh.cz/webhosting/){.external} (k tomu, na němž jsou nedostupné webové stránky hostovány).
- Přístup do konfigurace domény (právo na provádění úprav v DNS zóně).
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

Chybová hláška „Website not installed“ se může zobrazit z následujících důvodů:

- Doména používaná Vašimi webovými stránkami není přidána jako **Multisite** v konfiguraci webhostingu OVH.
- Doména používaná Vašimi webovými stránkami není s Vaším webhostingem OVH správně propojena (nesprávná IP adresa v DNS konfiguraci domény).

Následující části příručky Vás provedou postupem pro ověření výše zmíněných problémů v konfiguraci domény.

![sitenotinstalled](images/site-not-installed-webpage.png){.thumbnail}

### Fáze 1: ověření konfigurace webhostingu (Multisite)

Za účelem ověření, zda je Vaše doména na webhostingu přidána jako Multisite, přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} a v levém postranním panelu klikněte na tlačítko `Hostingy`{.action}. V rozbalovací nabídce vyberte webhosting, jehož se daný problém týká. V základním rozhraní pro správu webhostingu klikněte na záložku `Multisite`{.action}.

Tabulka nabízí přehled všech domén, které jsou k Vašemu webhostingu připojené jako Multisite. Pro snadnější vyhledání požadované domény v seznamu můžete použít vyhledávací lištu.

 V závislosti na výsledcích vyhledávání mohou nastat následující scénáře:

|Možný scénář|Postup|
|---|---|
|Doména se v tabulce zobrazuje|To znamená, že doména je k danému webhostingu správně přidána jako Multisite. Pokud jste doménu přidali před méně než 15 minutami, jednoduše vyčkejte, až chybová hláška „Website not installed“ zmizí. Pokud se chybová hláška i nadále zobrazuje, přejděte k další části této příručky: „[Ověření DNS konfigurace domény](https://docs.ovh.com/cz/cs/hosting/webhosting_chyba_pri_nacitani_stranky/#faze-2-overeni-dns-konfigurace-domeny){.external}“.|
|Doména se v tabulce již nezobrazuje|Pokud se doména nezobrazuje i přesto, že jste ji přidali, je možné, že došlo k chybné konfiguraci či nechtěnému smazání. V takovém případě se obraťte na příručku „[Hosting několika stránek na jednom webhostingovém řešení](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}“, která Vás do detailu provede jednotlivými kroky pro přidání nové domény.|
|Doména se v tabulce nezobrazuje|Doména ještě nebyla k webhostingu OVH přidána jako Multisite. Pro přidání domény postupujte podle pokynů uvedených v následující příručce: „[Hosting několika stránek na jednom webhostingovém řešení](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}“.|

Pokud Vám informace uvedené v této části příručky nepomohly chybovou hlášku „Website not installed“ odstranit, postupujte podle následujících instrukcí.

### Fáze 2: ověření DNS konfigurace domény

Ze všeho nejdříve musíte získat informace o správné konfiguraci DNS. Za tímto účelem přejděte do záložky `Základní informace`{.action} v administračním rozhraní webhostingu a poznamenejte si adresy v kolonkách **IPv4** a **IPv6**.

![sitenotinstalled](images/site-not-installed-know-a-records.png){.thumbnail}

Nyní můžete ověřit DNS konfiguraci své domény. Ověření musí být provedeno prostřednictvím rozhraní pro správu domény, poskytovaného registrátorem příslušné domény.

> [!primary]
>
> Pokud je Vaše doména registrována u společnosti OVH,  můžete ověřit, zda používá naší konfiguraci prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} (sekce `Domény`{.action} v levém postranním panelu, záložka `DNS servery`{.action}). 
>

Proces ověření DNS konfigurace domény se liší v závislosti na tom, jakou konfiguraci používá:

- **Pokud Vaše doména nepoužívá konfiguraci OVH**, musíte její nastavení ověřit pomocí rozhraní pro správu domény u svého současného poskytovatele.

- **Pokud Vaše doména používá konfiguraci OVH**, můžete její nastavení ověřit prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Vyberte příslušnou doménu a přejděte do záložky `DNS zóna`{.action}. Zobrazí se tabulka obsahující DNS konfiguraci domény (každý řádek představuje jeden DNS záznam). Obsah tabulky lze filtrovat v závislosti na druhu DNS záznamu či názvu domény.

![sitenotinstalled](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

Pomocí filtru ověřte, zda níže uvedené DNS záznamy Vaší domény odpovídají údajům uvedeným v základním rozhraní pro správu webhostingu, které jste si poznamenali v úvodní části „Fáze 2: ověření DNS konfigurace domény“.

|Záznam|Cíl|
|---|---|
|A|Cíl musí odpovídat **IPv4** adrese, která je uvedena v základním rozhraní pro správu webhostingu.|
|AAAA|Cíl musí odpovídat **IPv6** adrese, která je uvedena v základním rozhraní pro správu webhostingu.|

Po ověření DNS záznamů mohou nastat následující scénáře:

|Možný scénář|Postup|
|---|---|
|Cílové hodnoty jsou správné|Vaše doména je nakonfigurována správně.  Pokud jste prováděli změny v DNS konfiguraci, může trvat až 24 hodin, než se tyto změny projeví.|
|Cílové hodnoty jsou nesprávné|Konfigurace Vaší domény musí být upravena. Pokud doména používá konfiguraci OVH, postupujte podle instrukcí obsažených v následující příručce: [Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}. V opačném případě postupujte podle instrukcí svého současného poskytovatele. Mějte prosím na paměti, že propagace změn v DNS zóně může trvat až 24 hodin.|

## Kam dál 

[Hosting několika webových stránek na jednom webhostingovém řešení](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}

[Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.