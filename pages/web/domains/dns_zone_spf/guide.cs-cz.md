---
deprecated: true
title: Přidání záznamu SPF v DNS zóně domény
slug: spf-zaznam
excerpt: Zjistěte, jak přidat SPF záznam v DNS zóně své domény
section: Pokročilé použití
order: 5
---

**Poslední aktualizace 21/03/2018**

## Cíl

SPF záznam (Sender Policy Framework) umožňuje serveru, který obdrží e-mail, ověřit, zda byl tento e-mail odeslán z autorizovaného zdroje. SPF záznam se vkládá do DNS zóny a určujte, které servery či IP adresy mohou z dané domény odesílat e-maily.

**Zjistěte, jak přidat SPF záznam v DNS zóně své domény.**

## Prerekvizity

- Dostatečná oprávnění k provádění úprav v  DNS zóně domény prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Doména musí být nakonfigurována na DNS servery OVH.

> [!warning]
>
> Pokud Vaše doména není nakonfigurována na DNS servery OVH, budete muset úpravu SPF záznamu provést pomocí rozhraní pro správu domény u Vašeho současného poskytovatele.
> Pokud je Vaše doména registrována u OVH, můžete její konfiguraci ověřit pomocí [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Za tímto účelem přejděte do základního rozhraní pro správu domény a vyberte záložku `DNS servery`{.action}.
>

## Postup

### Fáze 1: seznámení s SPF záznamem

Předtím než se pustíme do jakýchkoli úprav záznamu SPF, je důležité porozumět tomu, co to SPF záznam vlastně je a k čemu slouží. SPF záznam zabraňuje odcizení identity e-mailovými adresami, které se jménem Vaší domény pokoušejí rozesílat spam a podvodné e-maily.

To je možné díky informacím, které jsou zanesené v samotném SPF záznamu. Jedná se zejména o:

- **Servery nebo IP adresy** oprávněné odesílat poštu z dané domény.
- **Kvalifikátor**, udávající instrukce pro nakládání s nelegitimní poštou (tzn. s e-maily, které pocházejí s potenciálně nebezpečného zdroje).

Z toho důvodu je do SPF záznamu zapotřebí zahrnout veškeré legitimní zdroje pro odesílání e-mailů z Vaší domény. Tyto zdroje mohou zahrnovat Váš vlastní server, server Vašeho poskytovatele, nebo mailový server OVH.

> [!primary]
>
> SPF záznam slouží pouze jako doporučení pro servery, které poštu přijímají (včetně těch Vašich). Záleží však pouze na těchto serverech, zda se budou obsahem SPF záznamů domén, jejichž elektronickou poštu přijímají, řídit, či nikoliv.
>

### Fáze 2: seznámení s konfigurací OVH

Konfigurace OVH je aplikována pro následující řešení:

- MX Plan (jako samostatné řešení i jako součást [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}).
- [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- [Hosted Exchange](https://www.ovh.cz/emails/hosted-exchange/){.external}.

Pokud si objednáte některé z těchto řešení, doporučujeme do konfigurace domény přidat SPF záznam s informacemi společnosti OVH. Záznam by měl vypadat následovně:

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Pokud Vaše doména používá konfiguraci OVH, můžete snadno ověřit, zda DNS zóna domény již SPF záznam neobsahuje. Za tímto účelem přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} a v levém postranním panelu klikněte na sekci `Domény`{.action}. Vyberte požadovanou doménu a přejděte do záložky `DNS zóna`{.action}.

Zobrazí se tabulka obsahující přehled aktuálně nakonfigurovaných vstupů domény (každý řádek obsahuje informace o jednom DNS záznamu).  

> [!primary]
>
> Pokud je Vaše doména registrována u společnosti OVH, můžete v záložce `DNS servery`{.action} ověřit, zda používá konfiguraci OVH.
>

Pro snadnější nalezení řádku s OVH SPF záznamem můžete v tabulce aplikovat vyhledávací filtr. SPF záznam může být obsažen ve dvou různých kategoriích: `TXT`{.action} nebo `SPF`{.action}. V případě potřeby prosím změňte nastavení vyhledávacího filtru. Mějte přitom na paměti, že vzhled tabulky se může v závislosti na aktuálním nastavení filtru lišit. Měli byste dostat jeden z následujících výsledků:

- **V cílové kolonce se zobrazuje "v=spf1 include:mx.ovh.com ~all"**: Vaše doména používá konfiguraci OVH. Pokud si nepřejete tuto konfiguraci nadále používat, musíte ji v následující fázi upravit.

- **V cílové kolonce se zobrazuje SPF záznam, který neodpovídá informacím společnosti OVH**: Vaše doména používá personalizovaný SPF záznam. V následující fázi budete tento záznam moci upravit nebo zvolit výchozí konfiguraci OVH.

- **V cílové kolonce se nezobrazuje žádný SPF záznam**: nejprve se záznam pokuste vyhledat pomocí filtru SPF a TXT. Pokud se žádný SPF záznam nezobrazí, Vaše doména ho nepoužívá. V následující fázi budete tento záznam moci přidat.

> [!primary]
>
> SPF záznam je vždy uveden v následujícím formátu: "v=spf1 sources qualifieur". Příklad OVH SPF záznamu: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Fáze 3: modifikace SPF záznamu

Za účelem úpravy SPF záznamu v OVH konfiguraci své domény se přihlaste do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. V levém postranním panelu vyberte sekci `Domény`{.action}, klikněte na požadovanou doménu a přejděte do záložky `DNS zóna`{.action}.

Zobrazí se tabulka s aktuální OVH konfigurací domény. Každý řádek obsahuje jeden DNS záznam.

Pro úpravu či přidání SPF je zapotřebí přidat nový záznam do DNS zóny Vaší domény. Klikněte na tlačítko `Přidat záznam`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

Zobrazí se nabídka DNS záznamů. V případě SPF existují dva způsoby přidání nového záznamu:

- **Manuální přidání SPF záznamu**: tuto možnost zvolte v případě, že disponujete potřebnými technickými znalostmi a nezbytnými informacemi (pokud jste je například již získali od správce svého e-mailového řešení apod.).
- **Průvodce nastavením SPF**: touto cestou se vydejte, pokud nedisponujete potřebným know-how a nezbytnými informacemi.

Následující postup se liší v závislosti na Vámi zvoleném způsobu přidání nového záznamu.

![domain](images/spf_records_add_entry.png){.thumbnail}

#### Manuální přidání SPF záznamu

Z tabulky nabízených typů záznamů vyberte políčko `TXT`{.action} a vyplňte požadované informace. Do řádku `Hodnota`{.action} vložte SPF záznam, který si přejete používat.

Pro dokončení operace klikněte na tlačítko `Další`{.action}. Zkontrolujte správnost zadaných údajů a klikněte na tlačítko `Schválit`{.action}.

> [!primary]
>
> Propagace změn v DNS zóně může trvat 4 až 24 hodin.
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

#### Průvodce nastavením SPF

Z tabulky nabízených typů záznamů vyberte políčko `SPF`{.action}. Následně budete mít na výběr ze dvou možností:

- Použít SPF záznam pro OVH řešení (MX Plan, E-mail Pro a Hosted Exchange).
- Přizpůsobit si SPF záznam pomocí průvodce nastavením.

##### Použití OVH SPF záznamu

Klikněte na tlačítko `Použijte SPF pro webhosting OVH`{.action}. Zobrazí se souhrnný přehled informací o OVH SPF záznamu. Pro provedení úprav klikněte na tlačítko `Schválit`{.action}.

> [!primary]
>
> Propagace změn v DNS zóně může trvat 4 až 24 hodin.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}

##### Přizpůsobení SPF záznamu

Průvodce nastavením Vám umožňuje přizpůsobit SPF záznam na míru Vašim individuálním potřebám. Za tímto účelem bude zapotřebí odpověď na několik otázek a doplnit určité technické informace. Některá pole mohou vyžadovat vyšší úroveň technických znalostí.

Projděme si nastavení krok za krokem.

|Pole/otázka|Popis|
|---|---|
|Sub-doména|Vyplňte, pokud má být SPF záznam aplikován na subdoméně (pokud například ze subdomény odesíláte e-maily).|
|TTL|Čas propagace (aplikace) změn v DNS záznamu.|
|Autorizovat IP adresu k posílání e-mailů?|Pokud jsou Vaše webové stránky a e-mailové adresy hostované na serveru s identickou IP adresou (např. dedikovaný server), odpovězte kladně.|
|Autorizovat MX servery k posílání e-mailů?|Pokud servery, které přijímají e-maily, mohou e-maily zároveň i odesílat, odpovězte kladně.|
|Autorizovat všechny servery, jejichž název končí Vaší doménou, pro posílání e-mailů?|Tato možnost není doporučena, jelikož by mohla mít za následek legitimizaci příliš velkého množství zdrojů v SPF záznamu.|

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

Na otázku "**Odesílají ostatní servery e-maily z Vaší domény?**" lze odpovědět pomocí indikace argumentů v následujících polích:

|Pole/otázka|Popis|
|---|---|
|a|Zadejte domény. Tento krok autorizuje servery, hostující stránky provozované pod uvedenými doménami, pro odesílání e-mailů s Vašimi adresami.|
|mx|Zadejte servery pro příjem pošty (MX servery), pokud tyto servery mohou poštu zároveň odesílat. Tyto servery budou následně identifikovány jako legitimní zdroje odesílání.|
|ptr|Zadejte názvy hostitelů s *reverzním DNS* (prostřednictvím pole PTR v DNS zóně). Tyto servery budou následně identifikovány jako legitimní zdroje odesílání.|
|ip4|Zadejte IP adresy či bloky IP adres (IPv4), autorizovaných pro odesílání e-mailů z Vaší domény.|
|ip6|Zadejte IP adresy či bloky IP adres (IPv6), autorizovaných pro odesílání e-mailů z Vaší domény.|
|include|Zadejte domény. Toto umožní použití jejich SPF záznamu pro Vaší vlastní doménu. OVH například používá tuto metodu ve své SPF konfiguraci: "v=spf1 include:mx.ovh.com ~all". To nám dovoluje spravovat SPF záznam domény mx.ovh.com a zároveň našim zákazníkům umožňuje tento záznam používat.|

A konečně, na otázku  "**Popisují vložená data všechny hostitele, kteří posílají e-maily z Vaší domény?**" existují tři možné druhy odpovědi:

|Pole/otázka|Popis|
|---|---|
|Ano, jsem si jist.|Pokud server obdrží e-mail z Vaší domény, pocházející z nelegitimního zdroje (tzn. takového, který není specifikován v SPF záznamu), automaticky ho zamítne.|
|Ano, přesto ale použít bezpečnostní režim.|Pokud server obdrží e-mail z Vaší domény, pocházející z nelegitimního zdroje (tzn. takového, který není specifikován v SPF záznamu), přijme ho, zároveň ho však označí jako potenciálně nelegitimní (např. jako spam).|
|Ne|Pokud server obdrží e-mail z Vaší domény, pocházející z nelegitimního zdroje (tzn. takového, který není specifikován v SPF záznamu), přijme ho bez jakýchkoli dalších opatření. V podobných případech však dojde ke zvětšení hlavičky e.mailu.|

Mějte prosím na paměti, že SPF záznam slouží pouze jako doporučení pro servery, které e-maily přijímají (včetně těch Vašich). Záleží však pouze na těchto serverech, zda se budou obsahem SPF záznamů domén, jejichž elektronickou poštu přijímají, řídit, či nikoli.

Jakmile vyplníte veškeré potřebné údaje, klikněte na tlačítko `Další`{.action}, ověřte zobrazené informace a poté klikněte na tlačítko `Schválit`{.action}.

> [!primary]
>
> Propagace změn v DNS zóně může trvat 4 až 24 hodin.
>

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.