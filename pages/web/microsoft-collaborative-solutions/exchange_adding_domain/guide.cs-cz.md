---
deprecated: true
title: Přidání domény ke službě Exchange
slug: pridani-domeny-exchange
excerpt: Zjistěte, jak přidat doménu ke službě Exchange
section: Konfigurace služby Exchange
---

**Poslední aktualizace 21/03/2018**

## Cíl

Abyste mohli účty své služby Exchange naplno využívat, je zapotřebí k ní nejdříve přidat doménu. Ke službě Exchange je možné připojit více než jednu doménu. 

**Zjistěte, jak přidat doménu ke službě Exchange.**

## Prerekvizity

- Služba [Exchange](https://www.ovh.cz/emails/){.external}.
- Alespoň jedna doména.
- Dostatečná práva pro provádění úprav v DNS zóně domény.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

### Fáze 1: přístup do rozhraní pro správu služby

Jakmile je služba Exchange vytvořena a dostupná, můžete ji začít spravovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

Připojte se do Zákaznického prostoru, v levém postranním panelu klikněte na sekci `Microsoft`{.action} a následně vyberte `Exchange`{.action}. Ze seznamu vyberte požadovanou službu Exchange.

> [!primary]
>
> Název služby Exchange v Zákaznickém prostoru OVH vždy začíná předponou **hosted-** nebo **private-**, obsahuje část Vašeho zákaznického identifikátoru (NIC-handle) a končí číslicí (1 pro první nainstalovanou službu Hosted nebo Private Exchange, 2 pro druhou atd.).
>

### Fáze 2: přidání domény

Za účelem přidání domény přejděte do sekce `Asociované domény`{.action}. Zobrazí se tabulka obsahující přehled domén, které jsou k Vaší službě Exchange aktuálně připojeny. Pro přidání nové domény klikněte na tlačítko `Přidat doménu`{.action}.

> [!warning]
>
> Všechny adresy vytvořené na službě Exchange mohou zobrazit ostatní asociované adresy, a to včetně těch, které mají jinou doménu. Pokud si pro některé domény přejete toto zobrazování deaktivovat, musíte si pro ně objednat novou službu [Exchange](https://www.ovh.cz/emails/){.external}.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

Budete požádáni o volbu mezi následujícími možnostmi:

- **Zvolte doménu ze seznamu**: vybírat můžete pouze z domén, které jsou asociovány s Vaším zákaznickým identifikátorem a které používají konfiguraci OVH.

- **Přidat externí doménu**: pro správnou funkčnost služby musíte být schopni provádět úpravy v nastavení externí domény (DNS zóna).

Vyberte jednu z možností a klikněte na tlačítko `Další`{.action}.

![Exchange](images/add_domain_exchange_step2.png){.thumbnail}

V následujícím kroku se zobrazí informace týkající se konfigurace režimu domény.

- **Pokud jste zadali doménu, která není spravována společností OVH**: doména bude  nakonfigurována v neautoritativním režimu.

- **Pokud jste vybrali doménu OVH ze seznamu**: je zapotřebí vybrat mezi autoritativním a neautoritativním režimem.

|Režim|Popis|
|---|---|
|Autoritativní|Vyberte, pokud na dané doméně budete používat výhradně řešení Exchange. Autoritativní režim nedovoluje použití jiného e-mailového řešení společně se službou Exchange.|
|Neautoritativní|Vyberte, pokud na dané doméně budete společně se službou Exchange používat i další e-mailová řešení. Budete muset zadat informace o serveru, na němž je toto řešení hostováno.|

> [!primary]
>
> Zvolený režim můžete prostřednictvím Zákaznickém prostoru OVH kdykoli změnit.
>

Pokračujte kliknutím na tlačítko `Další`{.action}.

![Exchange](images/add_domain_exchange_step3.png){.thumbnail}

**Pokud jste zadali doménu spravovanou společností OVH**, její konfigurace bude moci být provedena automaticky. Za tímto účelem zaškrtněte příslušná políčka a klikněte na tlačítko `Další`{.action}.

**Pokud jste zadali externí doménu**, budete její konfiguraci muset provést manuálně.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

V poslední části konfiguračního procesu ověřte zadané informace a klikněte na tlačítko `Schválit`{.action}. Následně bude zahájen proces přidání domény. Pokud si přejete přidat více než jednu doménu, proces opakujte pro každou doménu zvlášť.

### Fáze 3: konfigurace domény (DNS)

Po připojení domény se pomocí tabulky v administračním rozhraní služby (záložka asociované domény) ujistěte, zda je doména nakonfigurována správně. Zelené políčko indikuje správnou konfiguraci. Pokud vidíte červené políčko:

- **Pokud jste při přidávání domény zvolili automatickou konfiguraci**: zobrazení v Zákaznickém prostoru OVH může trvat několik hodin. 

- **Pokud jste přidali externí doménu**: pro zobrazení úprav, které je zapotřebí provést, klikněte na červené políčko. Pokud Vaše doména není nakonfigurována na DNS servery OVH, musíte změny provést pomocí rozhraní pro správu domény u Vašeho současného poskytovatele. Pokud potřebujete provést úpravy v záznamu CNAME, podívejte se do následující dokumentace: [Vytvoření záznamu CNAME a přidání asociované domény](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/exchange_20132016_pridani_zaznamu_cname/){.external}.

> [!primary]
>
> Propagace všech změn v nastavení DNS může trvat 4 až 24 hodin.
>

Správnost konfigurace můžete ověřit v rozhraní pro správu služby Exchange (záložka `Asociované domény`{.action}. Pokud zde nyní vidíte pouze zelená políčka, Vaše doména je nakonfigurována správně. V opačném případě je možné, že prozatím nedošlo k úplné propagaci provedených změn.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Fáze 4: nastavení a používání účtů služby Exchange

Jakmile ke službě Exchange úspěšně přidáte domény, můžete k nim připojit své Exchange účty. Za tímto účelem přejděte do záložky `E-mailové účty`{.action}. V případě potřeby si můžete prostřednictvím tlačítka `Objednávka účtů`{.action} nebo `Přidat účet`{.action} objednat další účty.

Mějte prosím na paměti, že všechny adresy vytvořené na službě Exchange mohou zobrazit ostatní asociované adresy, a to včetně těch, které mají jinou doménu.

Jakmile jsou Vaše účty nakonfigurovány, nezbývá než začít je naplno využívat! Za tímto účelem můžete vyzkoušet webovou aplikaci *OVH Webmail* **Outlook Web Application** (OWA), která je dostupná na následující adrese: <https://www.ovh.cz/mail/>. Pokud si svou e-mailovou adresu přejete používat na externím e-mailovém klientu, ověřte prosím kompatibilitu softwaru se službou Exchange. Detailní informace týkající se konfigurace služby Exchange na softwaru třetích stran a mobilních zařízeních naleznete v následující dokumentaci: <https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/>.

Licence Outlook si můžete objednat prostřednictvím Zákaznického prostoru OVH. Licence Office 365 si můžete objednat na webových stránkách <https://www.ovh.cz/office-365/>. 

## Více informací

[Vytvoření záznamu CNAME a přidání asociované domény](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/exchange_20132016_pridani_zaznamu_cname/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.