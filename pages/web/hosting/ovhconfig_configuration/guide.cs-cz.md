---
deprecated: true
title: 'Konfigurace souboru .ovhconfig'
slug: konfigurace-souboru-ovhconfig
excerpt: 'Seznamte se s postupem pro modifikaci konfiguračního souboru .ovhconfig'
section: Konfigurace
order: 4
---

**Poslední aktualizace 03/01/2019**

## Cíl

Za určitých okolností může být zapotřebí provést specifické úpravy v nastavení webhostingového řešení. Za tímto účelem Vám společnost OVH dává k dispozici konfigurační soubor **.ovhconfig**.

**Seznamte se s postupem pro modifikaci konfiguračního souboru .ovhconfig.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external} (kromě řešení Cloud Web).
- Přístupové údaje k FTP prostoru. 

## Postup

Při úpravách konfiguračního souboru .ovhconfig dochází k úpravám v konfiguraci, která je používána Vašimi webovými stránkami. Neodborný zásah do konfigurace může mít za následek znepřístupnění webových stránek na Internetu. Ujistěte se proto prosím, že konfigurační parametry obsažené v souboru .ovhconfig jsou s Vašimi webovými stránkami po technické stránce kompatibilní.

Úpravy v konfiguračním souboru .ovhconfig lze realizovat dvěma způsoby:

- **Manuální úprava souboru .ovhconfig**: toto řešení předpokládá vyšší míru technických dovedností a vyžaduje připojení k FTP úložišti. V rámci následující dokumentace bude rozebrána právě tato metoda.

- **Konfigurační asistent v Zákaznickém prostoru OVH**: konfigurační asistent Vás provede procesem úpravy konfigurace. Toto řešení předpokládá nižší míru technických dovedností. Detailní informace na toto téma naleznete v následující dokumentaci: [Úprava konfigurace webhostingu](https://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/){.external}.

V následujícím textu bude do detailu rozebrána první z výše uvedených metod: 

### Manuální úprava konfiguračního souboru .ovhconfig

#### Fáze 1: připojení k FTP prostoru

Přichystejte si přístupové údaje k FTP prostoru svého webhostingu (uživatelské jméno, heslo a adresa serveru). Jakmile máte výše uvedené údaje k dispozici, připojte se ke svému FTP prostoru. V případě potíží se obraťte na následující dokumentaci: [ Připojení k webhostingovému úložišti](https://docs.ovh.com/cz/cs/hosting/spusteni-stranek-online/#2-pripojeni-k-webhostingovemu-ulozisti){.external}.

**Pokud přístupové údaje nemáte k dispozici**, přihlaste se do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} a v levém postranním panelu klikněte na položku `Hostingy`{.action}. Vyberte příslušné webhostingové řešení a přejděte do záložky `FTP-SSH`{.action}. Zde naleznete veškeré údaje potřebné pro připojení ke svému FTP prostoru. Pokud si nepamatujete své přístupové heslo, postupujte podle následujících instrukcí: [Změna FTP hesla](https://docs.ovh.com/cz/cs/hosting/zmena-hesla-ftp/){.external}.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### Fáze 2: stažení či vytvoření konfiguračního souboru .ovhconfig

Po připojení k FTP prostoru máte k dispozici přehled všech souborů, které jsou na Vašem webhostingu aktuálně přítomny. Zůstaňte v kořenovém adresáři svého webhostingu (tento adresář lze také značit jako „/“) a vyhledejte soubor .ovhconfig.

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

Nyní mohou nastat dva scénáře:

- **Konfigurační soubor .ovhconfig je přítomen**: v takovém případě si soubor jednoduše stáhněte do svého počítače. Před provedením jakýchkoli úprav doporučujeme vytvořit kopii souboru. 
- **Konfigurační soubor .ovhconfig není na úložišti přítomen**: pokud soubor neexistuje, vytvořte ho ve svém počítači a pojmenujte jako „.ovhconfig“.

#### Fáze 3: úprava konfiguračního souboru .ovhconfig.

Jakmile máte konfigurační soubor stažený ve svém počítači, můžete se pustit do jeho úprav. Za tímto účelem použijte některý z dostupných textových editorů. Konfigurační soubor musí obsahovat kód podobající se následujícímu:

```php
app.engine=php
app.engine.version=7.3

http.firewall=none
environment=production

container.image=stable
```

Výše uvedené proměnné nahraďte hodnotami požadované konfigurace. 

|Proměnná|Informace|
|---|---|
|app.engine|Konfigurace PHP enginu používaného webhostingovým řešením. Pro aktivaci PHP-FPM akcelerátoru zadejte hodnotu „php“. Pro jeho deaktivaci zadejte hodnotu „phpcgi“.|
|app.engine.version|Volba verze PHP používané webhostingovým řešením. Seznam dostupných verzí naleznete [zde](https://www.ovh.cz/webhosting/php.xml){.external}. |
|http.firewall|Aktivace či deaktivace [firewallu OVH](https://www.ovh.cz/webhosting/mod_security.xml){.external}. Pro aktivaci firewallu zadejte hodnotu „security“. Pro jeho deaktivaci zadejte hodnotu „none“.|
|environment|Správa chování cahce statických souborů webových stránek a chyb v PHP. Pro maximalizaci ukládání statických souborů do paměti cache a maskování chyb v PHP zadejte hodnotu „production“. Pro dosažení opačného efektu zadejte hodnotu „development“.|
|container.image|Volba operačního systému. Vyberte si operační systém dle svých individuálních potřeb. Detailní informace o jednotlivých operačních systémech naleznete v následující dokumentaci: [Dostupné konfigurace](https://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#dostupne-konfigurace){.external}.|

Níže naleznete detailní rozbor parametrů konfiguračního souboru .ovhconfig:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 7.3
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=7.3

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | jessie.i386 | testing
;
container.image=stable
```

#### Fáze 4: upload konfiguračního souboru .ovhconfig zpět na FTP úložiště

Jakmile je soubor .ovhconfig upraven, nezbývá než ho nahrát zpět na FTP úložiště hostingu. Konfigurační soubor je opět zapotřebí nahrát do domovského adresáře („/“). Pokud soubor na úložišti existuje, nahraďte jej.

### Pokročilá manipulace s konfiguračním souborem

Pokud v rámci svého webhostingového řešení hostujete vícero webových stránek, zcela jistě používáte funkci Multisite. Za určitých okolností může být zapotřebí pro každou z hostovaných stránek používat jinou verzi PHP.

Za tímto účelem je pak zapotřebí vytvořit konfigurační soubor .ovhconfig pro každou stránku zvlášť (každý z těchto souborů s jiným PHP nastavením). Postup pro vytvoření a úpravu konfiguračního souboru naleznete v kapitole [Úprava konfiguračního souboru ovhconfig](https://docs.ovh.com/cz/cs/hosting/konfigurace-souboru-ovhconfig/#manualni-uprava-konfiguracniho-souboru-ovhconfig){.external} této příručky. Při nahrávání konfiguračního souboru zpět na FTP úložiště dejte pozor, abyste daný soubor nahráli do příslušného multisite adresáře. Informace o multisite adresářích naleznete v administračním rozhraní svého webhostingu (záložka `Multisite`{.action}).

> [!warning]
>
> V rámci jednoho webhostingu nelze používat více než jeden operační systém. Operační systém webhostingu se odvíjí od obsahu konfiguračního souboru .ovhconfig, který se nalézá v domovském FTP adresáři.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.