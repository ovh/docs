---
deprecated: true
title: 'Spuštění webových stránek online'
slug: spusteni-stranek-online
excerpt: 'Zjistěte, jak zveřejnit své webové stránky online s webhostingem OVH'
section: 'První kroky'
order: 2
---

**Poslední aktualizace 29/06/2018**

## Cíl

Na Internetu existuje nepřeberné množství stránek. Ať již chcete zveřejnit blog nebo online obchod, sdílet své koníčky či propagovat své podnikání, [webhostingové balíčky OVH](https://www.ovh.cz/webhosting/){.external} zajistí dostupnost Vašich stránek pro miliony uživatelů online (za předpokladu kompatibility stránek s [konfigurací našich infrastruktur](https://webhosting-infos.hosting.ovh.net){.external}).

**Zjistěte, jak zveřejnit své webové stránky online s webhostingem OVH.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- E-mail s potvrzením o úspěšném dokončení instalace webhostingu.
- Doména, na níž bude váš web dostupný.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

### Fáze 1: vymezení projektu

V zájmu úspěšné realizace projektu je vždy ze všeho nejdůležitější získat jasnou představu o výsledku, kterého si přejeme dosáhnout. K jakému účelu mají Vaše stránky sloužit? Jakým způsobem si je přejete zveřejnit? Existuje několik způsobů, jakými lze Váš projekt na webhostingu OVH zrealizovat.

- **Webové stránky na klíč (moduly OVH na jedno kliknutí)**: díky tomuto řešení získáte správně strukturovaný web, připravený k okamžitému použití a otevřený případným úpravám dle Vašich individuálních potřeb (šablony, texty atd.). Společnost OVH v současné době nabízí čtyři moduly na jedno kliknutí. Detailní informace o jednotlivých modulech a postup pro jejich instalaci naleznete [zde](https://www.ovh.cz/webhosting/website/){.external}.

- **Webové stránky na klíč (manuální instalace)**: díky tomuto řešení rovněž získáte správně strukturovaný web, připravený k okamžitému použití. Instalaci redakčního systému na webhostingové řešení OVH je v tomto případě nutné provést manuálně.

- **Vytvoření vlastních webových stránek**: toto řešení nabízí mnohem větší prostor pro individualizaci Vašeho projektu, zároveň však předpokládá pokročilé dovednosti na poli programování.

- **Migrace existujících webových stránek na webhosting OVH**: v průběhu migrace stránek může dojít k dočasnému přerušení dostupnosti. Detailní informace na toto téma naleznete v následující dokumentaci: [Migrace stránek a e-mailových účtů k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}.


V závislosti na tom, jaké řešení se pro zveřejnění svých webových stránek rozhodnete použít, mohou nastat dva scénáře:

- **Rozhodnete se pro instalaci některého z našich modulů na jedno kliknutí**: v takovém případě postupujte podle instrukcí uvedených v příručce [Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}.

- **Rozhodnete se pro alternativní řešení**: bude zapotřebí provést manuální instalaci webových stránek na webhostingu OVH. V další části této příručky naleznete základní instrukce pro použití alternativních metod. Tyto informace však nelze chápat jako náhradu za asistenci profesionálního webmastera.
 
> [!warning]
>
> Společnost OVH Vám dává k dispozici služby, za jejichž správu a konfiguraci nesete plnou odpovědnost. 
> 
> Tato příručka slouží jako úvod do obecné problematiky vážící se ke správě Vaší služby. V případě jakýchkoli nejasností doporučujeme kontaktovat profesionálního webmastera.  Další informace naleznete v poslední sekci této příručky.
>

### Fáze 2: upload souborů webových stránek na webhostingové úložiště

Postup pro manuální instalaci stránek je rozdělen do několika kroků.  Některé z těchto kroků mohou být v závislosti na typu stránek, které se rozhodnete instalovat, nepovinné a lze je tedy přeskočit Ve většině případů lze postup pro instalaci webových stránek rozdělit do dvou hlavních částí, z nichž první představuje nahrání souborů webových stránek na příslušné webhostingové úložiště.

Postup pro upload souborů je rozdělen do několika pod-fází:

#### 1. Získání souborů webových stránek

Ujistěte se, že máte k dispozici kompletní balíček souborů webových stránek, jejichž instalaci se chystáte provést. Pokud provádíte migraci stránek, tyto soubory můžete získat od svého dosavadního poskytovatele.

#### 2. Připojení k webhostingovému úložišti

Pro úspěšné připojení k úložišti budete potřebovat FTP uživatelské jméno, heslo a adresu serveru. Tyto informace naleznete v e-mailu, který Vám byl zaslán společně s potvrzením o úspěšné instalaci Vašeho webhostingového řešení. Pokud jste heslo ztratili, postupujte podle následující dokumentace: [Změna FTP hesla](https://docs.ovh.com/cz/cs/hosting/zmena-hesla-ftp/){.external}.

Adresu serveru naleznete v `základním administračním rozhraní svého webhostingu`{.action} v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} (záložka `FTP-SSH`{.action}). 

![siteinstallation](images/get-website-online-step1.png){.thumbnail}

Jakmile máte veškeré potřebné informace k dispozici, můžete se ke svému úložišti připojit některým z následujících způsobů:

- **FTP Explorer**: připojení k FTP úložišti prostřednictvím webového prohlížeče. V záložce `FTP-SSH`{.action} jednoduše klikněte na tlačítko `FTP Explorer`{.action}.

- **Externí FTP klient**: k FTP úložišti se můžete připojit také prostřednictvím externího FTP klienta, jako např. FileZilla. V případě potíží s externím FTP klientem se obraťte na oficiální dokumentaci vydavatele příslušného softwaru.

- **SSH přístup**: komunikace s úložištěm prostřednictvím SSH probíhá na bázi zadávání příkazů do terminálu. Je předpokládána vysoká úroveň technických znalostí a specifický [webhostingový balíček OVH](https://www.ovh.cz/webhosting/){.external}. 

#### 3. Nahrání souborů na webhostingové úložiště

Jakmile jste připojeni ke svému FTP úložišti, nezbývá než provést upload souborů. **Věnujte prosím zvýšenou pozornost adresáři, do kterého soubory svých stránek nahráváte.** V případě většiny webových stránek je soubory zapotřebí nahrát do adresáře „www“. Pokud však na jednom webhostingu provozujete vícero webových stránek, zcela jistě využíváte funkci **Multisite**.

Pro ověření adresáře, do nějž mají být soubory webových stránek v režimu Multisite nahrány, přejděte v základním rozhraní pro správu webhostingu do záložky `Multisite`{.action}.  V tabulce zkontrolujte kolonku `Root adresář`{.action} příslušné domény.  Jedná se o adresář, do nějž je zapotřebí nahrát soubory webových stránek, které mají být pod touto doménou dostupné.

Je možné, že při provádění úprav na svém webhostingovém úložišti narazíte na soubor „index.html“. Tento soubor mohl být na úložišti v průběhu instalace služby automaticky vytvořen společností OVH za účelem zobrazení defaultní úvodní stránky na Vaší doméně. Pokud se jedná o tento případ, nezapomeňte tento soubor ze svého úložiště odstranit.

![siteinstallation](images/get-website-online-step2.png){.thumbnail}

### Fáze 3: připojení stránek k databázi

> [!primary]
>
> Tento krok je relevantní pouze v případě, že Vaše webové stránky vyžadují spojení s databází.
>

Databáze jsou v současné době využívány většinou systémů pro správu obsahu neboli CMS (WordPress, Joomla! apod.). Pro správnou funkčnost těchto stránek je tedy připojení k databázi nezbytné. Připojení webových stránek k databázi je realizováno prostřednictvím konfiguračního souboru.

V závislosti na typu webových stránek je toto propojení zapotřebí realizovat manuálně nebo prostřednictvím předpřipraveného rozhraní. Celý proces je rozdělen do několika pod-fází, z nichž některé nemusí být povinné.

#### 1. Export existující databáze (volitelný krok)

Pokud provádíte migraci webových stránek, můžete od svého předchozího poskytovatele získat databázi, kterou lze následně nahrát na webhosting OVH. Pokud vytváříte nové webové stránky, přejděte k dalšímu kroku.

#### 2. Vytvoření databáze u OVH (volitelný krok)

Pokud již v rámci služeb společnosti OVH disponujete databází, kterou si ke svým stránkám přejete připojit ([webhostingová databáze](https://www.ovh.cz/webhosting/){.external}, řešení [Private SQL](https://www.ovh.cz/webhosting/moznosti-sql.xml){.external} nebo [Cloud DB](https://www.ovh.cz/cloud/cloud-databases/){.external}), budete potřebovat své uživatelské jméno a heslo, název databáze a adresu serveru. V takovém případě přejděte k další části této příručky.

Pokud si přejete vytvořit novou OVH databázi, přihlaste se do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} a v levém postranním panelu klikněte na sekci `Hostingy`{.action}. Vyberte příslušné webhostingové řešení a přejděte do záložky `Databáze`{.action}.

Klikněte na tlačítko `Vytvořit databázi`{.action}. Pokud se tlačítko nezobrazuje, klikněte na `Akce`{.action} a následně vyberte možnost `Vytvoření databáze`{.action}. Vyplňte požadované informace.

![siteinstallation](images/get-website-online-step3.png){.thumbnail}


#### 3. Import existující databáze (volitelný krok)

Pokud provádíte migraci webových stránek, můžete společně s nimi importovat i existující databázi. Pokud vytváříte nové webové stránky, přejděte k dalšímu kroku.

Existuje několik způsobů, jak provést import databáze. Jednou z možností je využít zabudovaný nástroj v Zákaznickém prostoru OVH. V záložce `Databáze` klikněte u ikonku tří teček v pravé části tabulky a vyberte možnost `Nahrát soubor`{.action}. Vyplňte požadované informace.

![siteinstallation](images/get-website-online-step4.png){.thumbnail}

#### 4. Připojení stránek k databázi

Jakmile je Vaše databáze připravena a stránky nahrány na webhostingové úložiště, nezbývá než je navzájem propojit. Za tímto účelem budete potřebovat následující informace: uživatelské jméno, heslo, název databáze a adresu serveru.

Následný postup se odvíjí od typu webových stránek, které k databázi připojujete.  Jelikož se tento proces týká konfigurace Vašich stránek a nikoli samotného řešení OVH, doporučujeme v případě problémů zkontaktovat profesionálního webového administrátora, popřípadě se obrátit na oficiální dokumentaci vydavatele platformy, na níž jsou Vaše stránky vytvořeny.

### Fáze 4: přístup k webovým stránkám

Po úspěšném nahrání souborů webových stránek a jejich případném propojení s databází můžete své stránky zobrazit online pomocí webového prohlížeče. 

V případě potíží se zobrazením stránek doporučujeme:

- **Ověřit konfiguraci domény**: může se stát, že aktuální DNS konfigurace domény znemožňuje zobrazení nově nahraných webových stránek. Ujistěte se, že A záznam v DNS zóně domény odpovídá IP adrese Vašeho webhostingového řešení.

- **Zkontrolujte, zda nedošlo ke smazání některého ze souborů Vašich stránek (kontrola integrity)**. 

- **Proveďte kontrolu zdrojového kódu stránek**: zdrojový kód může obsahovat závažné chyby, které brání v zobrazení Vašich stránek online.

V případě potíží se zveřejněním Vašich webových stránek se doporučujeme obrátit na profesionálního webmastera či oficiální dokumentaci vydavatele používané platformy (např. CMS).

## Kam dál

[Migrace stránek a e-mailových účtů k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}

[Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}

[Změna FTP hesla](https://docs.ovh.com/cz/cs/hosting/zmena-hesla-ftp/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.