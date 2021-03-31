---
deprecated: true
title: Moduly na jedno kliknutí
slug: moduly-na-jedno-kliknuti
excerpt: Zjistěte, jak spustit svůj web s našimi moduly na jedno kliknutí
section: CMS
---

**Poslední aktualizace 14/02/2018**

## Cíl

Moduly na jedno kliknutí umožňují snadné a rychlé spuštění webových stránek (bez nutnosti hlubších technických znalostí). Tyto moduly využívají ty nejrozšířenější redakční systémy (CMS): WordPress, PrestaShop, Drupal a Joomla.

**Zjistěte, jak nainstalovat svůj web s našimi moduly na jedno kliknutí.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Prázdný instalační adresář (ujistěte se prosím, že v adresáři, kam se bude modul instalovat, nejsou uloženy žádné další soubory).
- Doména (s případnou subdoménou), která se použije pro vaše webové stránky, musí být vedena jako „multisite“.

## Postup

### Výběr správného redakčního systému

Redakční systém neboli CMS (Content Management System) je nástroj umožňující vytvářet a spravovat webové stránky prostřednictvím přehledného uživatelského rozhraní. V závislosti na typu využití existuje hned několik redakčních systémů. Díky tomu můžete ihned začít využívat správně strukturovaný web, připravený k okamžitému použití a případným úpravám dle Vašich individuálních představ (šablony, texty atd.).

Nabídka modulů na jedno kliknutí od společnosti OVH zahrnuje 4 různé redakční systémy. Pokud se rozhodnete pro toto řešení, je nutné vybírat z tohoto seznamu. Pokud jste se již pro některý redakční systém rozhodli, řiďte se jednotlivými kroky této příručky. Pokud s výběrem stále ještě váháte, obraťte se na následující [srovnání CMS](https://www.ovh.cz/webhosting/website/porovnani-cms/){.external}.

Pokud si na svůj webhosting přejete nainstalovat redakční systém, který nabídka modulů na jedno kliknutí nezahrnuje, můžete tak kdykoli učinit svépomocí. Jedninou podmínkou je kompatibilita daného CMS s Vaším webhostingovým řešením (detailní informace o našich nabídkách naleznete [zde](https://www.ovh.cz/webhosting/){.external}).

![CMS logo](images/CMS_logo.png){.thumbnail}


### Správa modulů na jedno kliknutí

V levém postranním panelu Zákaznického prostoru OVH klikněte na sekci `Hostingy`{.action} a vyberte webhosting, na nějž si přejete CMS nainstalovat. Přejděte do záložky `Moduly na jedno kliknutí`{.action}.

Zde naleznete přehled již nainstalovaných modulů, nástroje pro jejich správu a tlačítko pro instalaci nových modulů.

![Přístup do sekce Moduly na jedno kliknutí](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Instalace modulu

Instalaci nového modulu na jedno kliknutí zahájíte kliknutím na tlačítko `Přidat modul`{.action}.

Otevře se nové okno, v jehož rámci budete požádáni o výběr požadovaného modulu a domény, na níž má být Vaše stránka nainstalována.

![Výběr modulu](images/add_a_module.png){.thumbnail}

Pokud požadovanou doménu na seznamu nenajdete, přejděte do záložky `Multisite`{.action}, přidejte doménu a zopakujte předchozí kroky.

V případě potíží se obraťte na následující příručku: [Jak rozdělit webhosting mezi několik webových stránek](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}.

Po specifikaci domény je zapotřebí vybrat mezi expresní a pokročilou instalací:

- Expresní instalace (výchozí volba): modul bude nainstalován zcela automaticky. Přihlašovací údaje Vám budou zaslány do e-mailové schránky. Jedná se o nejjednodušší a nejrychlejší způsob instalace modulu.
- Instalace v expertním režimu: pokročilá instalace nabízí možnost přizpůsobení konfigurace CMS. Pokud se vydáte touto cestou, budete muset za účelem správného fungování daného CMS s Vaší databází vyplnit následující údaje: detaily připojení, instalační adresář, jazyk, login a heslo administrátora.

#### Expresní instalace

Rozhodnete-li se pro expresní instalaci, ujistěte se, že jste volbu `Instalace v expertním režimu`{.action} ponechali nezaškrtnutou. Následně klikněte na tlačítko `Instalovat`{.action}.

> [!warning]
>
> Instalační adresář modulu musí být prázdný a je zapotřebí mít k dispozici volnou databázi. V opačném případě se instalace nezdaří.
> 

![Expresní instalace](images/choose_installation.png){.thumbnail}

Po úspěšném dokončení instalace od nás obdržíte e-mail s údaji potřebnými pro přihlášení do administračního rozhraní Vašeho CMS. Nyní se můžete přihlásit a začít spravovat své webové stránky.

#### Instalace v expertním režimu

Rozhodnete-li se pro instalaci v expertním režimu, ujistěte se, že jste zaškrtli volbu `Instalace v expertním režimu`{.action}. Následně klikněte na tlačítko `Další`{.action}.

![Instalace v expertním režimu](images/advanced_installation.png){.thumbnail}

##### Volba databáze

Ze všeho nejdříve vyplňte údaje pro připojení k Vaší databázi. Existuje zde několik scénářů:

- Databáze je již vytvořena v rámci stejného webhostingu: vyberte databázi ze seznamu a vyplňte požadované údaje.
- Databáze doposud na webhostingu neexistuje: vytvořte databázi a zopakujte instalační proces.
- Databáze se nachází na instanci Private SQL nebo CloudDB: ze seznamu vyberte možnost `Databáze mimo Váš webhosting`{.action} a vyplňte požadované údaje. Databázová instance a webhosting musejí být hostovány ve stejném datacentru.
- Databáze je vytvořena na jiném webhostingu OVH: ze seznamu vyberte možnost `Databáze mimo Váš webhosting`{.action} a vyplňte požadované údaje. Databáze a webhosting musejí být hostovány ve stejném datacentru.

Po vyplnění údajů klikněte na tlačítko `Další`{.action}.

> [!warning]
>
> Zadáte-li neplatné údaje, nebude instalaci možné dokončit. Chcete-li tomu předejít, nejprve otestujte připojení k databázi.
> 

![Nastavení databáze při instalaci v expertním režimu](images/advanced_installation_database.png){.thumbnail}

##### Nastavení modulu

Nyní je potřeba vyplnit následující údaje pro účely konfigurace modulu:

- *Jméno nebo e-mail administrátora:* používá se pro přihlášení k CMS.
- *Heslo:* používá se pro přihlášení k CMS.
- *Doména:* doména, na níž má být modul nainstalován.
V případě potíží se obraťte na následující příručku: [Jak rozdělit webhosting mezi několik webových stránek](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}.
- *Jazyk:* jazyk modulu.
- *Umístění instalace:* toto pole se vyplní automaticky při výběru domény. Instalační adresář lze upřesnit pomocí podadresářů.

Po vyplnění údajů klikněte na tlačítko `Další`{.action}:

> [!warning]
>
> Instalační adresář nesmí obsahovat žádné další soubory.
> 

![Nastavení modulu při instalaci v expertním režimu](images/advanced_installation_configuration.png){.thumbnail}

##### Potvrzení instalace

V poslední fázi instalace v expertním režimu zkontrolujte zadané údaje a klikněte na tlačítko `Schválit`{.action}:

![Potvrzení instalace v expertním režimu](images/advanced_installation_summary.png){.thumbnail}

### Přizpůsobení webových stránek

Po dokončení instalace od nás obdržíte e-mail s přihlašovacími údaji k Vašemu modulu. Nyní se můžete přihlásit a začít s úpravami na svých webových stránkách.

V případě jakýchkoli nejasností je Vám k dispozici oficiální dokumentace vydavatele Vašeho CMS, kterou naleznete na jeho webových stránkách.

|CMS|Dokumentace|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](http://doc.prestashop.com/display/PS17/Getting+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Kam dál

[Výběr toho správného CMS pro vytvoření webových stránek](https://www.ovh.cz/webhosting/website/porovnani-cms/){.external}

[Jak rozdělit webhosting mezi několik webových stránek](https://docs.ovh.com/cz/cs/hosting/konfigurace-multisite-webhosting/){.external}

Seznamte se s naší [nabídkou Private SQL](https://www.ovh.cz/webhosting/moznosti-sql.xml){.external}

Seznamte se s naší [nabídkou CloudDB](https://www.ovh.cz/cloud/cloud-databases/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>
