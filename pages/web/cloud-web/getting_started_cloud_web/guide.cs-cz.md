---
deprecated: true
title: První kroky s webhostingem Cloud Web
slug: prvni-kroky-cloud-web
excerpt: Zjistěte, jak na webhosting Cloud Web
section: První kroky
---

**Poslední aktualizace 11/07/2018**

## Cíl

Nabídka Cloud Web představuje unikátní kombinaci více než dvaceti let zkušeností na poli poskytování webhostingových služeb a výkonu řešení Public Cloud. Stejně jako v případě klasického webhostingu jsou Vaše webové stránky hostovány na nepřetržitě spravované službě, k tomu však navíc získáváte další funkce a výhody, jako například vysoký výkon SSD disku.

**Zjistěte, jak na webhosting Cloud Web.**

## Prerekvizity

- Některý z webhostingových balíčků [Cloud Web](https://www.ovh.cz/webhosting/cloud-web.xml).
- E-mail s potvrzením o úspěšném dokončení instalace služby.
- [Doména](https://www.ovh.cz/domeny/), na níž bude váš web dostupný.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager).

## Postup

### Fáze 1: vymezení projektu

Řešení Cloud Web nabízí mnohem větší flexibilitu a konfigurační svobodu než klasický webhosting. V zájmu úspěšné realizace projektu je vždy ze všeho nejdůležitější získat jasnou představu o výsledku, kterého si přejeme dosáhnout. Za tímto účelem doporučujeme:

- **Definovat instalaci**: chcete vytvořit blog nebo provozovat e-shop? Rádi byste se podělili o svou zálibu nebo propagovali své podnikání na internetu? V každém případě si ujasněte, co je obsahem Vašeho projektu.

- **Informovat se o technických požadavcích projektu**: každý projekt má své specifické požadavky, a proto je zapotřebí vybrat takové řešení, v jehož rámci bude projekt možné po technické stránce realizovat. 

- **Ujistit se o kompatibilitě projektu s vybraným řešením**: přejete si používat specifický Runtime engine nebo SQL databázi? Nejdříve se přesvědčte, zda vybrané řešení takovou možnost nabízí. Detailní srovnání jednotlivých balíčků Cloud Web naleznete [zde](https://www.ovh.cz/webhosting/cloud-web.xml).

Po zhodnocení výše uvedených kritérií se můžete pustit do práce.

### Fáze 2: volba Runtime enginu

Řešení Cloud Web nabízí několik programovacích jazyků pro vybudování Vašeho projektu. Pokud si přejete používat jiný jazyk než PHP (výchozí), budete muset použít takový Runtime engine, který odpovídá Vámi zvolenému jazyku.

Aktuálně dostupné programovací jazyky: php a Node.js.

Pro přístup k nabídce Runtime enginů řešení Cloud Web přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu domény klikněte na záložku `Runtime Engines`{.action}.

Při instalaci webhostingu je automaticky vytvořen jeden Runtime engine. Tento engine je v tabulce uveden jako `výchozí`. Pro konfiguraci již vytvořeného enginu klikněte na ikonu tří teček v pravé části řádku a vyberte možnost `Upravit`{.action}. 

Po kliknutí na tlačítko `Akce`{.action} > `Přidat Runtime engine`{.action} můžete přidávat další enginy. Počet enginů, které je možné přidat, se liší v závislosti na úrovni zakoupeného balíčku řešení Cloud Web.

Před pokračováním se ujistěte, že máte pro svůj projekt vytvořen příslušný Runtime engine.

![cloudweb](images/cloud-web-first-steps-step1.png){.thumbnail}

### Fáze 3: vytvoření proměnných prostředí (volitelné)

Pokud si svůj projekt přejete nasadit v několika různých prostředích (např. vývoj, test a produkce), budete muset vytvořit proměnné, aby Váš kód reagoval odpovídajícím způsobem. Za tímto účelem nabízí řešení Cloud Web definici proměnných prostředí, dostupných z kódu Vašich stránek či webové aplikace.

Díky tomu například nemusíte upravovat soubor „.env“ ve Runtime enginu PHP Laravel, jak je to uvedeno v oficiální dokumentaci: <https://laravel.com/docs/5.6/configuration>.

Pro přidání proměnné prostředí klikněte na záložku `Proměnné prostředí`{.action}. Tabulka obsahuje aktuálně vytvořené proměnné prostředí. Pro přidání nové proměnné klikněte na tlačítko `Akce`{.action} a následně vyberte možnost `Přidat novou proměnnou prostředí`{.action}. Následně se řiďte uvedenými pokyny.

![cloudweb](images/cloud-web-first-steps-step2.png){.thumbnail}

Pokud nepoužíváte Runtime engine obsahující proměnné prostředí nebo pokud si jednoduše přejete ověřit správnou funkčnost svých proměnných, můžete vytvořit skript pro provedení tohoto ověření. Níže naleznete dva názorné příklady. Mějte prosím na paměti, že tyto příklady nenahrazují pomoc profesionálního webmastera.

- **PHP**:

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **Node.js**:

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

Generické informace obsažené ve skriptech "DB_DATABASE" nahraďte příslušnou proměnnou prostředí.

### Fáze 4: konfigurace dalších domén v režimu Multisite (volitelné)

Nyní, když je technické prostředí Vašeho webhostingu Cloud Web připraveno, můžete nakonfigurovat další domény v režimu Multisite. Díky tomu například můžete prostor svého webhostingu rozdělit mezi několik domén a hostovat zde několik webových stránek. Za tímto účelem přejděte do záložky `Multisite`{.action}.

Tabulka nabízí přehled všech domén připojených k Vašemu webhostingu. Některé z těchto domén byly při instalaci webhostingu vytvořeny automaticky. Pro přidání nové domény klikněte na tlačítko `Přidat doménu či subdoménu`{.action} a řiďte se uvedenými pokyny. Proces přidání domény se může lišit, a to v závislosti na tom, zda je doména registrována u společnosti OVH či externího poskytovatele. 

Následujícím údajům prosím věnujte zvýšenou pozornost:

- **Root adresář**: adresář na úložišti Vašeho webhostingu Cloud Web, do nějž by měly být ukládány soubory příslušné domény. 

- **Runtime engine**: engine, který bude příslušná Multisite doména používat.

> [!warning]
>
> Pokud si přejete přiat doménu registrovanou u externího poskytovatele, budete v její DNS konfiguraci muset upravit TXT záznam s názvem **ovhcontrol**. Tento záznam slouží k ověření legitimity procesu přidání domény. Jedná se tedy o nezbytný krok, který, pokud nebude proveden, znemožní přidání domény. 
>

Pokud si ke svému webhostingu Cloud Web přejete přidat další domény, celý postup opakujte. Detailní informace o přidání domény v režimu Multisite naleznete v následující dokumentaci: [Hosting několika webových stránek na jednom webhostingovém řešení](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}.

![cloudweb](images/cloud-web-first-steps-step3.png){.thumbnail}

### Fáze 5: instalace projektu na webhostingu Cloud Web

Instalaci projektu lze provést dvěma různými způsoby: 

#### 1. Použití modulů na jedno kliknutí

Díky tomuto řešení získáte správně strukturovaný web, připravený k okamžitému použití a otevřený případným úpravám dle Vašich individuálních potřeb (šablony, texty atd.). Společnost OVH v současné době nabízí čtyři moduly na jedno kliknutí. Detailní informace o jednotlivých modulech a postup pro jejich instalaci naleznete [zde](https://www.ovh.cz/webhosting/website/){.external}.

Pokud jste se rozhodli pro instalaci některého z našich modulů na jedno kliknutí, přejděte v rozhraní pro správu svého webhostingu do záložky `Moduly na 1 klinutí`{.action} a klikněte na tlačítko `Přidat modul`{.action}. Instalaci můžete provést v expertním či zjednodušeném režimu.

Detailní informace týkající se instalace modulů na jedno kliknutí naleznete v následující příručce: [Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}.

> [!primary]
>
> Moduly na jedno kliknutí fungují pouze s PHP enginem.
>

![cloudweb](images/cloud-web-first-steps-step4.png){.thumbnail}

#### 2. Manuální instalace projektu

Ať se jedná o instalaci nových stránek či migraci již existujícího webu, manuální instalace vždy vyžaduje vyšší úroveň technických znalostí a její úspěch se odvíjí od Vašich vlastních dovedností. Z toho důvodu se v případě jakýchkoli nejasností doporučujeme obrátit na profesionálního webmastera. 

Pokud se rozhodnete pro manuální instalaci, budete potřebovat přístup k veškerým souborům webových stránek či aplikací, které si přejete nainstalovat. Pokud je ke správnému fungování Vašeho projektu zároveň zapotřebí i databáze, budete potřebovat přístupové údaje k databázi vytvořené na Vašem webhostingu Cloud Web. V případě migrace webových stránek budete potřebovat jejich kompletní kopii.

Detailní postup pro instalaci a migraci webových stránek naleznete v následující dokumentaci: [Zveřejnění webových stránek online](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external} a [Migrace stránek a e-mailových účtů k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}.

### Fáze 6: vytvoření e-mailové adresy

Nyní, když je Váš projekt na webhostingu Cloud Web úspěšně nainstalován, můžete si vytvořit e-mailové adresy. Pokud si e-mailové adresy nepřejete vytvořit, tuto část přeskočte.

Pro vytvoření e-mailových adres přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `E-maily`{.action} a vyberte doménu, na níž byl Váš webhosting Cloud Web vytvořen.

Pro vytvoření nové e-mailové adresy klikněte na tlačítko `Vytvořit e-mailovou adresu`{.action} a řiďte se uvedenými pokyny. V případě potíží se obraťte na následující dokumentaci: [Vytvoření e-mailové adresy v rámci služby MX Plan](https://docs.ovh.com/cz/cs/emails/webhosting_-_e-mail_prirucka_o_vytvareni_e-mailovych_adres/){.external}.

![cloudweb](images/cloud-web-first-steps-step5.png){.thumbnail}

### Fáze 7: úprava konfigurace domény

Před pokračováním do této fáze se ujistěte, že je Váš web nainstalovaný a že máte vytvořené e-mailové adresy. Pokud narazíte na problémy s fungováním svých služeb, může tomu tak být z důvodu nesprávné konfigurace domény. V takovém případě se řiďte následujícími instrukcemi. 

Mějte prosím na paměti, že pokud se právě nacházíte uprostřed migrace svých služeb ke společnosti OVH, nevhodně provedené zásahy do DNS zóny mohou mít za následek znepřístupnění Vašich služeb. Jako poslední část migračního procesu je v souladu s následující dokumentací nutné upravit DNS servery domény: [Migrace webových stránek k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}.

#### 1. DNS záznamy OVH 

Existuje několik typů OVH DNS záznamů. Nás budou nyní zajímat dva záznamy, které zaručují dostupnost Vašich internetových stránek a přijímání zpráv na e-mailové adresy pod příslušnou doménou. 

|DNS záznam|Služba|Umístění|
|---|---|---|
|A|Webové stránky|[Zákaznický prostor OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sekce `Hostingy`{.action}, příslušný webhosting Cloud Web. Ze záložky `Základní informace`{.action} si zkopírujte IPv4 adresu.|
|MX|E-maily|[Zákaznický prostor OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sekce `E-maily`{.action}, příslušný webhosting Cloud Web. Ze záložky `Základní informace`{.action} si zkopírujte informace uvedené pod hlavičkou „MX pole“.|

#### 2. Ověření a/nebo modifikace DNS záznamu

Nyní, když znáte DNS záznamy svého webhostingu a e-mailového řešení OVH, nezbývá než ověřit, zda jsou správně nakonfigurovány a v případě potřeby je upravit. Tyto úpravy je nutné provést u správce DNS zóny Vaší domény.

> [!warning]
>
> - Pokud Vaše doména není nakonfigurována na DNS servery OVH, musíte úpravy provést pomocí příslušného rozhraní pro správu domény u Vašeho poskytovatele.
> 
> - Pokud je Vaše doména registrována u OVH, můžete snadno ověřit, zda používá naši konfiguraci. Za tímto účelem přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, vyberte příslušnou doménu a přejděte do záložky `DNS servery`{.action}.
>

Detailní informace týkající se úprav v DNS zóně naleznete v následující tabulce:

|DNS konfigurace|Kde provést potřebné úpravy?|
|---|---|
|OVH|V [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sekce `Domény`{.action}, rozhraní pro správu příslušné domény. V záložce `DNS zóna`{.action} ověřte a v případě potřeby upravte potřebné informace. Detailní informace o postupu naleznete v následující dokumentaci: [Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}.|
|Externí poskytovatel|Rozhraní pro správu služby příslušného správce DNS konfigurace Vaší domény. V případě problémů se obraťte na zákaznickou podporu externího poskytovatele.|

Propagace změn v DNS zóně domény může trvat až 24 hodin. Pokud jste ke svému webhostingu Cloud Web přidali vícero domén v režimu Multisite, budete tyto úpravy muset provést pro každou z nich zvlášť. 

### Fáze 8: přizpůsobení webových stránek

Tuto část přeskočte, pokud jste provedli migraci již existujícího a tedy i přizpůsobeného webu. Pokud jste však právě nainstalovali nové webové stránky (například pomocí našich modulů), můžete je přizpůsobit úpravou motivu a publikací prvního obsahu.

Informace týkající se jednotlivých funkcí svého webu naleznete v oficiální dokumentaci vydavatele Vašeho CMS, kterou naleznete na příslušných webových stránkách.

### Fáze 9: používání e-mailových adres

Nyní můžete své e-mailové adresy začít naplno využívat. Za tímto účelem můžete vyzkoušet webovou aplikaci OVH (webmail) s názvem RoundCube. OVH webmail je dostupný  na následující adrese: <https://www.ovh.cz/mail/>. Pro přihlášení použijte identifikační údaje e-mailové adresy vytvořené prostřednictvím Zákaznického prostoru OVH.

Pokud si svůj e-mail přejete nakonfigurovat na externím e-mailovém klientu, smartphonu či tabletu, podívejte se do následující dokumentace: <https://docs.ovh.com/cz/cs/emails/>.

## Kam dál

[Migrace webových stránek k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}

[Spuštění stránek online (EN)](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external}

[Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}

[Hosting několika webových stránek na jednom webhostingovém řešení](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}

[Jak vytvořit e-mailovou adresu](https://docs.ovh.com/cz/cs/emails/webhosting_-_e-mail_prirucka_o_vytvareni_e-mailovych_adres/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.