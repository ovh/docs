---
deprecated: true
title: 'Úprava konfigurace webhostingu'
slug: modifikace-os-webhosting
excerpt: 'Zjistěte, jak změnit konfiguraci svého webhostingového řešení OVH'
section: Konfigurace
order: 3
---

**Poslední aktualizace 25/09/2018**

## Cíl

Na Internetu existuje nepřeberné množství stránek. Ať již chcete zveřejnit blog nebo online obchod, sdílet své koníčky či propagovat své podnikání, [webhostingové balíčky OVH](https://www.ovh.cz/webhosting/){.external} zajistí dostupnost Vašich stránek pro miliony uživatelů po celém světě (za předpokladu kompatibility stránek s [konfigurací našich infrastruktur](https://webhosting-infos.hosting.ovh.net){.external}).

**Zjistěte, jak změnit konfiguraci svého webhostingového řešení pomocí Zákaznického prostoru OVH.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

## Postup

**Při úpravách v konfiguraci webhostingového řešení může docházet k citlivým změnám**: neodborný zásah do konfigurace může mít za následek znepřístupnění webových stránek na Internetu. Porozumění možným následkům vyvolaným úpravami v konfiguraci umožňuje lepší pochopení prováděných změn.

Při úpravách konfigurace webhostingu dochází k úpravám v konfiguraci, která je používána Vašimi webovými stránkami. I když je v rámci našich infrastruktur k dispozici několik typů konfigurace, mějte na paměti, že je vždy zapotřebí ověřit, zda jsou Vaše stránky se zvolenou konfigurací kompatibilní.

> [!warning]
>
> Předtím než se pustíte do provádění jakýchkoli úprav, ujistěte se, že tyto úpravy nebudou mít za následek znepřístupnění Vašich webových stránek. V případě jakýchkoli nejasností se prosím obraťte na profesionálního webmastera. Společnost OVH v tomto ohledu neposkytuje přímou podporu. Další informace naleznete v poslední sekci této příručky. 
> 

### Úprava konfigurace webhostingu prostřednictvím Zákaznického prostoru OVH

#### Fáze 1: přístup do administračního rozhraní webhostingu

Přihlaste se do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V záložce `Základní informace`{.action} přejděte do karty Konfigurace. V řádku `Verze globálního PHP`{.action} klikněte na ikonku tří teček `(...)`{.action} a vyberte možnost `Upravit konfiguraci`{.action}.

![hostingconfiguration](images/change-hosting-configuration-step1.png){.thumbnail}

Pokud na tlačítko `Upravit konfiguraci`{.action} nelze kliknout, nejspíše probíhá ověření **globální verze PHP**. V takovém případě se v tabulce objeví modré kolečko, značící průběh ověřovacího procesu. Vyčkejte, dokud nedojde k ověření aktuální verze, a poté klikněte na tlačítko `Upravit konfiguraci`{.action}.

![hostingconfiguration](images/change-hosting-configuration-step2.png){.thumbnail}

#### Fáze 2: úprava konfigurace webhostingu

Po kliknutí na tlačítko dostanete na výběr ze dvou možností. Vyberte jednu z nabízených možností a pokračujte kliknutím na tlačítko `Další`{.action}.

|Volba|Popis|
|---|---|
|Návrat k předchozí konfiguraci|Po zaškrtnutí této volby budete požádáni o výběr konfigurace, kterou si přejete obnovit (kolonka `Původní volba`). Pokud jste v minulosti neprováděli žádné změny v konfiguraci, nebude tato volba dostupná.|
|Změna stávající konfigurace|Po zaškrtnutí této volby budete požádáni o výběr konfigurace, která má být na webhostingu aplikována. Seznam a popis jednotlivých konfigurací naleznete v sekci ["Dostupné konfigurace"](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#dostupne-konfigurace){.external} této příručky.|

> [!primary]
>
> Změna operačního systému bude mít za následek automatický restart PHP relací.
> 

Změny v nastavení potvrďte kliknutím na tlačítko `Schválit`{.action}. Aplikace nové konfigurace může trvat několik minut.

![hostingconfiguration](images/change-hosting-configuration-step3.png){.thumbnail}

### Dostupné konfigurace

Při provádění úprav v konfiguraci webhostingu se lze zaměřit na několik hlavních oblastí. V závislosti na svých individuálních potřebách pokračujte k příslušné části této dokumentace.

- [Operační systém](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#operacni-system){.external}.
- [PHP verze](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#php-verze){.external}.
- [PHP engine](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#php-engine){.external}.
- [Režim](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#rezim){.external}.

#### Operační systém

Změna operačního systému umožňuje upravit určité technické hodnoty v konfiguraci webhostingu. **Před provedením jakýchkoli změn se ujistěte, že jsou Vaše webové stránky se zvoleným operačním systémem kompatibilní.** 

|Operační systém|Legacy|stable|testing|jessie.i386|
|---|---|---|---|---|
|Image liée|Legacy|jessie.i386|jessie.i386|jessie.i386|
|Minimální PHP verze|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 kompatibilní)|1.0.1k (TLS1.2 kompatibilní)|1.0.1k (TLS1.2 kompatibilní)|
|Extension php imagick| - | Ano | Ano | Ano |
|Rozšíření php memcache (PHP 5.6)| Ano | Ano | Ano | Ano |
|Rozšíření php memcached (PHP 5.6)| - | Ano | Ano | Ano |
|Rozšíření php mongo (PHP 5.4, 5.5, 5.6)| - | Ano | Ano | Ano |
|Rozšíření mysqlnd (en utf-8 uniquement)| - | Ano | Ano | Ano |
|Rozšíření redis| - | Ano | Ano | Ano |
|Opcache| Ano | Ano | Ano | Ano |
|Python|2.6|2.7 a 3.4.|2.7 a 3.4.|2.7 a 3.4.|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|

> [!primary]
>
> Operační systém „Legacy“ je vhodný pro starší verze internetových stránek, založené na starších verzích PHP. Důrazně však doporučujeme použití operačního systému „stable“, který disponuje posledními aktualizacemi. **Před provedením změny operačního systému ověřte jeho kompatibilitu se svými webovými stránkami.**
> 

Změnu operačního systému lze provést dvěma způsoby:

- **Prostřednictvím Zákaznického prostoru OVH**: postupujte podle instrukcí uvedených v první části této příručky (["Úprava konfigurace webhostingu prostřednictvím Zákaznického prostoru OVH"](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#uprava-konfigurace-webhostinguprostrednictvim-zakaznickeho-prostoru-ovh){.external}).
- **Manuální úprava konfiguračního souboru .ovhconfig**: toto řešení předpokládá vyšší míru technických dovedností a vyžaduje připojení k webhostingovému úložišti. Detailní instrukce naleznete v následující dokumentaci: [Konfigurace souboru .ovhconfig](http://docs.ovh.com/cz/cs/hosting/konfigurace-souboru-ovhconfig/){.external}.

#### PHP verze

V současné době existuje několik verzí programovacího jazyka PHP.  Nabídka společnosti OVH zahrnuje všechny hlavní verze, jejichž kompletní seznam naleznete na následujícím odkazu: <https://www.ovh.cz/webhosting/php.xml>.

**Před provedením jakýchkoli změn ověřte kompatibilitu vybrané verze PHP se svými webovými stránkami.**

Přechod na jinou verzi PHP lze realizovat dvěma způsoby:

- **Prostřednictvím Zákaznického prostoru OVH**: postupujte podle instrukcí uvedených v první části této příručky (["Úprava konfigurace webhostingu prostřednictvím Zákaznického prostoru OVH"](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#uprava-konfigurace-webhostinguprostrednictvim-zakaznickeho-prostoru-ovh){.external}).
- **Manuální úprava konfiguračního souboru na webhostingovém úložišti**: toto řešení předpokládá vyšší míru technických dovedností a vyžaduje připojení k úložišti. 

Detailní instrukce naleznete v následující dokumentaci:[Změna PHP verze na webhostingu OVH](http://docs.ovh.com/cz/cs/hosting/konfigurace-php-webhosting/){.external}.

#### PHP engine

Změna konfigurace PHP enginu umožňuje aktivovat či naopak deaktivovat PHP akcelerátor (PHP-FPM). PHP akcelerátor byl za účelem urychlení spuštění PHP skriptů adaptován na naší infrastrukturu. PHP akcelerátor (PHP-FPM) nabízí až 7x vyšší výkon v porovnání s enginem phpcgi. 

Modifikaci PHP enginu lze provést dvěma způsoby:

- **Prostřednictvím Zákaznického prostoru OVH**: postupujte podle instrukcí uvedených v první části této příručky (["Úprava konfigurace webhostingu prostřednictvím Zákaznického prostoru OVH"](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#uprava-konfigurace-webhostinguprostrednictvim-zakaznickeho-prostoru-ovh){.external}). PHP akcelerátor aktivujete tak, že v kolonce „Engine“ vyberete možnost „php“. Pokud si akcelerátor přejete deaktivovat, vyberte možnost „phpcgi“. 
- **Manuální úprava konfiguračního souboru .ovhconfig**: toto řešení předpokládá vyšší míru technických dovedností a vyžaduje připojení k webhostingovému úložišti. Detailní instrukce naleznete v následující dokumentaci: [Konfigurace souboru .ovhconfig](http://docs.ovh.com/cz/cs/hosting/konfigurace-souboru-ovhconfig/){.external}.

#### Režim

Na základě volby režimu lze spravovat chování cahce statických souborů webových stránek (např. obrázků) a chyb v PHP (užitečné zejména pokud dochází k chybovému zobrazení stránek). Na webhostingu lze aktivovat dva režimy:

|Režim|Cache statických souborů|Chyby v PHP|
|---|---|---|
|*Produkce*|Maximalizace ukládání statických souborů do paměti cache webových prohlížečů.|PHP chyby se na stránkách nezobrazí.|
|*Vývoj*|Statické soubory se do paměti cache neukládají.|PHP chyby se na stránkách zobrazí.|

Existují dva způsoby, jak provést změnu režimu webhostingového řešení:

- **Prostřednictvím Zákaznického prostoru OVH**: postupujte podle instrukcí uvedených v první části této příručky (["Úprava konfigurace webhostingu prostřednictvím Zákaznického prostoru OVH"](http://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/#uprava-konfigurace-webhostinguprostrednictvim-zakaznickeho-prostoru-ovh){.external}).
- **Manuální úprava konfiguračního souboru .ovhconfig**: toto řešení předpokládá vyšší míru technických dovedností a vyžaduje připojení k webhostingovému úložišti. Detailní instrukce naleznete v následující dokumentaci: [Konfigurace souboru .ovhconfig](http://docs.ovh.com/cz/cs/hosting/konfigurace-souboru-ovhconfig/){.external}.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.