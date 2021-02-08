---
deprecated: true
title: Migrace stránek a e-mailových účtů k OVH
slug: migrace-stranek-k-ovh
excerpt: Zjistěte, jak migrovat své webové stránky a e-mailové účty k OVH bez přerušení dostupnosti služby
section: První kroky
---

**Poslední aktualizace 16/02/2018**

## Cíl

Následující příručka popisuje jednotlivé fáze migračního procesu webových stránek, databází a e-mailových účtů z jakékoli platformy k OVH. Podoba migračního procesu se může lišit v závislosti na tom, zda si své služby přejete migrovat bez přerušení jejich dostupnosti a naopak.

**Zjistěte, jak migrovat své webové stránky a e-mailové účty k OVH bez přerušení dostupnosti služby.**

## Prerekvizity

- Administrátorská práva k doméně.
- Přístup k souborům webových stránek.
- Přístup k databázi webových stránek (pokud existuje).
- Přístupové údaje k příslušným e-mailovým účtům (uživatelské jméno, heslo, servery).
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

Aby se migrace webových stránek a e-mailových účtů ke společnosti OVH obešla bez nepříjemných komplikací, je třeba postupovat podle následujících instrukcí. Migrační proces lze rozdělit do několika fází:

|Fáze|Popis| 
|---|---| 
|Objednání webhostingu|Pořízení webhostingu OVH, v jehož rámci budete hostovat své webové stránky a e-mailové adresy.| 
|Převod webových stránek|Přenesení kopie webových stránek od starého poskytovatele na webhosting OVH.| 
|Převod e-mailových adres|Vytvoření identických e-mailových adres u OVH a přenesení jejich obsahu od starého poskytovatele k OVH.| 
|Změna nastavení DNS|Na základě úprav v konfiguraci DNS bude Vaše doména přesměrována z webhostingu starého poskytovatele na webhosting OVH (pro Vaše webové stránky a e-mailové adresy).| 
|Převod domény|Změna registrátora domény ze starého poskytovatele na OVH.| 

Pořadí výše uvedených fází se může v závislosti na registrátorovi Vaší domény lišit.

> [!warning]
>
> Někteří doménoví registrátoři mají ve zvyku suspendovat DNS servery domény (pokud jsou nakonfigurovány u nich) ihned po obdržení požadavku na převod domény k jinému poskytovateli.
> V důsledku toho se Vaše doména - a společně s ní i další asociované služby, jako např. webové stránky nebo e-mailové adresy - může stát nedostupnou. Z toho důvodu Vám před podáním požadavku na převod domény doporučujeme spojit se s Vaším současným registrátorem a seznámit se jeho politikou převodů.
>

Z výše uvedených důvodů nabízíme dva odlišné migrační postupy:

- Migrace bez přerušení dostupnosti služby
- Migrace s pravděpodobným přerušením dostupnosti služby

### Migrace bez přerušení dostupnosti služby

#### Fáze 1: objednání webhostingu OVH

Na [webových stránkách OVH](https://ovh.cz/){.external} vytvořte objednávku preferovaného webhostingového řešení. Nežádejte o převedení domény. Tento krok bude realizován až v pozdější fázi procesu. Instalace webhostingového řešení započne ihned po obdržení platby za Vaši objednávku. O dokončení instalace budete informováni prostřednictvím e-mailu.

#### Fáze 2: převod webových stránek

Tato fáze je rozdělena do několika dalších pod-fází.

|Pod-fáze|Popis|Informace|
|---|---|---|
|1|Vytvoření kopie webových stránek|Vytvořte kompletní zálohu svých stránek, obsahující jak veškeré soubory, tak i databázi (pokud je vyžadováno). Kompletní záloha je nezbytným předpokladem úspěšné migrace stránek.|
|2|Spuštění stránek na webhostingu OVH online|Importujte veškerá data svých stránek na FTP úložiště. Nezapomeňte, že data, která mají být přístupná online, je zapotřebí importovat do adresáře **"www"**. Přihlašovací údaje k FTP Vám budou zaslány do Vaší e-mailové schránky.|
|3|Vytvoření databáze OVH|Pokud Vaše stránky komunikují s databází, je zapotřebí [vytvořit novou databázi OVH](https://docs.ovh.com/gb/en/hosting/managing-a-database-on-a-web-hosting-package/){.external} pomocí [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.|
|4|Import databázových dat|Importujte data ze staré databáze do nové [prostřednictvím nástrojů, které jsou Vám k dispozici v Zákaznickém prostoru OVH](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/){.external}.|
|5|Propojení stránek s novou databází|Informace o databázi jsou uloženy v konfiguračním souboru Vašich webových stránek. Přejděte do FTP úložiště svého webhostingového řešení OVH a v konfiguračním souboru svých stránek nahraďte informace o staré databázi informacemi o nové databázi OVH.|

Konfigurace Vaší domény prozatím zůstává nezměněna a Vaše stránky stále ještě běží na webhostingu Vašeho starého poskytovatele.

#### Fáze 3: znovuvytvoření e-mailových adres u OVH

Jakmile jsou Vaše webové stránky přeneseny, je zapotřebí znovuvytvořit stejné e-mailové adresy, jako ty, které stále ještě používáte u svého dosavadního poskytovatele. Tyto adresy musejí být identické. V levém postranním panelu [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} klikněte na sekci `E-maily`{.action} a vyberte Váš nový webhosting. V záložce „E-maily“ klikněte na tlačítko `Vytvořit e-mailovou adresu`{.action} a postupujte podle instrukcí.

Konfigurace domény prozatím zůstává nezměněna a Vaše e-mailové adresy stále ještě fungují na webhostingu Vašeho starého poskytovatele. Pro správu své elektronické pošty v této fázi musíte stále ještě využívat služeb svého starého poskytovatele.

#### Fáze 4: změna konfigurace domény

Jakmile jsou Vaše webové stránky přeneseny a Vaše e-mailové adresy znovuvytvořeny u OVH, je zapotřebí provést nezbytné úpravy v konfiguraci Vaší domény. Tyto úpravy spočívají v nahrazení dosavadních DNS serverů domény DNS servery OVH (veškeré informace týkající se našich DNS serverů naleznete ve své e-mailové schránce a v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}). Změny v konfiguraci domény budou mít tyto následky:

- **Technické propojení domény s řešeními OVH**: Váš OVH webhosting bude používán pro zobrazování Vašich stránek online, stejně tak jako pro přijímání a odesílání Vaší elektronické pošty.
- **Prevence přerušení dostupnosti služby**: pokud se Váš doménový registrátor rozhodne suspendovat DNS servery okamžitě po obdržení požadavku na převod domény, nebude to mít žádný vliv na dostupnost Vaší služby, jelikož tou dobou již budete používat konfiguraci OVH.

> [!warning]
>
> Propagace všech změn v nastavení DNS může trvat 24 až 48 hodin.
>

#### Fáze 5: převod obsahu e-mailových adres

Tato fáze je rozdělena do několika dalších pod-fází.

|Pod-fáze|Popis|Informace|
|---|---|---|
|1|Migrace obsahu e-mailových adres k OVH|Pro zkopírování obsahu e-mailových adres registrovaných u Vašeho starého poskytovatele k OVH použijte nástroj [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external}.|
|2|Používání e-mailových adres|Vaše e-mailové adresy OVH jsou dostupné prostřednictvím online aplikace [OVH webmail](https://mail.ovh.net/){.external}. Pokud některou ze svých e-mailových adres používáte v rámci externího e-mailového klienta (jako např. Outlook), bude třeba provést změny v nastavení mail serverů (nahrazení dosavadních serverů [novými servery OVH](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/)).|

#### Fáze 6: převod domény k OVH

Nyní již nezbývá než převést doménu k OVH! Tato fáze je rozdělena do několika dalších pod-fází.

|Pod-fáze|Popis|Informace|
|---|---|---|
|1|Odemčení domény|Pokud je doména zamčená, nelze ji převést k jinému registrátorovi. Z toho důvodu je ji nejprve zapotřebí u současného registrátora odemknout.|
|2|Získání kódu pro převod domény|Současný registrátor domény je Vám tento kód po odemčení domény povinen poskytnout .|
|3|Vytvoření požadavku na převod domény k OVH|Přejděte na stránky [OVH](https://ovh.cz/){.external} a požádejte o převedení domény. V rámci tohoto procesu budete požádáni o zadání kódu pro převod.|
|4|Uhrazení objednávky|Jakmile obdržíme platbu za Vaši objednávku, započneme s přenosem domény od současného poskytovatele k OVH.|
|5|Ověření převodu domény| Tato fáze se může lišit v závislosti na typu doménové koncovky. Pokud je pro převod vyžadováno ověření, obdržíte e-mail s příslušnými informacemi. E-mail obsahuje podrobný popis jednotlivých kroků. Za účelem úspěšného ověření převodu své domény postupujte podle instrukcí.| 

Po dokončení poslední fáze budou Vaše webové stránky, e-mailové adresy a doména úspěšně převedeny k OVH, a to bez jakéhokoli přerušení dostupnosti služby!

### Migrace s pravděpodobným přerušením dostupnosti služby

#### Fáze 1: objednání převodu a webhostingových služeb OVH

Tato fáze je rozdělena do několika dalších pod-fází.

|Pod-fáze|Popis|Informace|
|---|---|---|
|1|Odemčení domény|Pokud je doména zamčená, nelze ji převést k jinému registrátorovi. Z toho důvodu je ji nejprve zapotřebí u současného registrátora odemknout.|
|2|Získání kódu pro převod domény|Současný registrátor domény je Vám tento kód po odemčení domény povinen poskytnout .|
|3|Vytvoření objednávky u OVH|Přejděte na stránky [OVH](https://ovh.cz/){.external}, požádejte o převod domény a vytvořte objednávku webhostingu. V rámci tohoto procesu budete požádáni o zadání kódu pro převod. Nastavte DNS servery svého současného poskytovatele.|
|4|Uhrazení objednávky|Jakmile obdržíme platbu za Vaši objednávku, započneme s instalací webhostingu a převodem domény k OVH. V závislosti na interní politice registrátora domény může dojít k tomu, že jakmile obdrží požadavek na převod domény, okamžitě suspenduje její DNS servery, v důsledku čehož dojde k přerušení dostupnosti Vaší služby.|
|5|Ověření převodu domény|Tato fáze se může lišit v závislosti na typu doménové koncovky. Pokud je vyžadováno ověření, obdržíte e-mail s příslušnými informacemi. E-mail obsahuje podrobný popis jednotlivých kroků. Za účelem úspěšného ověření převodu své domény postupujte podle instrukcí.|

#### Fáze 2: převod webových stránek

Tato fáze je rozdělena do několika dalších pod-fází.

|Pod-fáze|Popis|Informace|
|---|---|---|
|1|Vytvoření kopie webových stránek|Vytvořte kompletní zálohu svých stránek, obsahující jak veškeré soubory, tak i databázi (pokud je vyžadováno). Kompletní záloha je nezbytným předpokladem úspěšné migrace stránek.|
|2|Spuštění stránek na webhostingu OVH online|Importujte veškerá data svých stránek na FTP úložiště. Nezapomeňte, že data, která mají být přístupná online, je zapotřebí importovat do adresáře **"www"**. Přihlašovací údaje k FTP Vám budou zaslány do Vaší e-mailové schránky.|
|3|Vytvoření databáze OVH|Pokud Vaše stránky komunikují s databází, je zapotřebí [vytvořit novou databázi OVH](https://docs.ovh.com/gb/en/hosting/managing-a-database-on-a-web-hosting-package/){.external} pomocí [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.|
|4|Import databázových dat|Importujte data ze staré databáze do nové [prostřednictvím nástrojů, které jsou Vám k dispozici v Zákaznickém prostoru OVH](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/){.external}.|
|5|Propojení stránek s novou databází|Informace o databázi jsou uloženy v konfiguračním souboru Vašich webových stránek. Přejděte do FTP úložiště svého webhostingového řešení OVH a v konfiguračním souboru svých stránek nahraďte informace o staré databázi informacemi o nové databázi OVH.|

Konfigurace Vaší domény prozatím zůstává nezměněna a Vaše stránky stále ještě běží na webhostingu Vašeho starého poskytovatele (pokud nedošlo k suspendování DNS serverů).

#### Fáze 3: znovuvytvoření e-mailových adres u OVH

**Po dokončení převodu domény** obdržíte e-mail s informacemi o tom, že e-mailová služba asociovaná s Vaším webhostingem byla nainstalována. Nyní je zapotřebí [znovuvytvořit stejné e-mailové adresy](https://docs.ovh.com/cz/cs/emails/webhosting_-_e-mail_prirucka_o_vytvareni_e-mailovych_adres/){.external}, jako ty, které stále používáte u svého dosavadního poskytovatele (adresy musí mít stejný název). V levém postranním panelu [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} klikněte na sekci `E-maily`{.action} a vyberte Váš nový webhosting. V záložce „E-maily“ klikněte na tlačítko `Vytvořit e-mailovou adresu`{.action} a postupujte podle instrukcí.

Konfigurace Vaší domény prozatím zůstává nezměněna a Vaše e-mailové adresy stále ještě fungují na webhostingu Vašeho starého poskytovatele (pokud nedošlo k suspendování DNS serverů). Pro správu své elektronické pošty v této fázi musíte stále ještě využívat služeb svého starého poskytovatele.

#### Fáze 4: změna konfigurace domény

Jakmile jsou Vaše webové stránky naimportovány, e-mailové adresy znovuvytvořeny a doména přenesena k OVH, nezbývá než upravit samotné nastavení domény. Tyto úpravy spočívají v nahrazení dosavadních DNS serverů domény DNS servery OVH.

Změnu nastavení lze provést prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Detailní informace týkající se úprav nastavení DNS naleznete v následující příručce: *[Obecné informace o DNS serverech](https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/){.external}*.

Změny v konfiguraci domény budou mít následující následky:

- **Technické propojení domény s řešeními OVH**: Váš OVH webhosting bude používán pro zobrazování Vašich stránek online, stejně tak jako pro přijímání a odesílání Vaší elektronické pošty.
- **Vyřešení případného přerušení dostupnosti služby**: pokud původní registrátor domény suspendoval pod obdržení požadavku na převod domény své DNS servery, změna v konfiguraci DNS tento problém vyřeší. V důsledku toho budou Vaše služby opětovně dostupné.

> [!warning]
>
> Propagace všech změn v nastavení DNS může trvat 24 až 48 hodin.
>

#### Fáze 5: převod obsahu e-mailových adres

Tato fáze je rozdělena do několika dalších pod-fází.

|Pod-fáze|Popis|Informace|
|---|---|---|
|1|Migrace obsahu e-mailových adres k OVH|Pro zkopírování obsahu e-mailových adres registrovaných u Vašeho starého poskytovatele k OVH použijte nástroj [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external}.|
|2|Používání e-mailových adres|Vaše e-mailové adresy OVH jsou dostupné prostřednictvím online aplikace [OVH webmail](https://mail.ovh.net/){.external}. Pokud některou ze svých e-mailových adres používáte v rámci externího e-mailového klienta (jako např. Outlook), bude třeba provést změny v nastavení mail serverů (nahrazení dosavadních serverů novými [servery OVH](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/)).|

Gratulujeme, Vaše webové stránky, e-mailové adresy i doména byli úspěšně migrovány ke společnosti OVH!

## Kam dál

[Obecné informace o e-mailových řešeních OVH](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/){.external}

[Obecné informace o DNS serverech](https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/){.external}

[Příručka o vytváření e-mailových adres](https://docs.ovh.com/cz/cs/emails/webhosting_-_e-mail_prirucka_o_vytvareni_e-mailovych_adres/){.external}

[Import MySQL databáze](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/){.external}

[Správa databáze na webhostingu OVH](https://docs.ovh.com/gb/en/hosting/managing-a-database-on-a-web-hosting-package/){.external}

Přidejte se k naší uživatelské komunitě na [https://community.ovh.com](https://community.ovh.com).