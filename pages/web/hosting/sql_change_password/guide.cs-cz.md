---
deprecated: true
title: 'Webhosting: změna hesla databáze'
slug: zmena-hesla-databaze
excerpt: 'Zjistěte, jak změnit přístupové heslo k databázi vytvořené v rámci webhostingového řešení OVH'
section: Databáze
order: 2
---

**Poslední aktualizace 13/06/2018**

## Cíl

Databáze umožňuje ukládání tzv. dynamických prvků (uživatelé, komentáře, příspěvky, články apod.). Databáze jsou v současné době využívány většinou systémů pro správu obsahu neboli *CMS* (WordPress, Joomla! apod.).

**Zjistěte, jak změnit přístupové heslo k databázi vytvořené v rámci webhostingového řešení.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting){.external}.
- Dostatečná oprávnění k provádění úprav v konfiguraci služby prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Mějte na paměti, že heslo je zapotřebí změnit i v konfiguračním souboru, který Vaši databázi propojuje s webovými stránkami.
>

## Postup

### Fáze 1: vyhodnocení situace

**Při změně databázového hesla buďte nanejvýš opatrní.** Při nesprávné manipulaci může dojít k znepřístupnění všech webových stránek, které danou databázi využívají. Porozumění možným následkům vyvolaných změnou databázového hesla umožňuje lepší pochopení prováděných změn.

Databáze jsou v současné době využívány většinou systémů pro správu obsahu neboli CMS (WordPress, Joomla! apod.). Funkční propojení s databází je pro bezproblémový chod těchto systémů zcela nezbytné. Toto propojení je zajišťováno prostřednictvím konfiguračního souboru. Z toho důvodu je v případě změny přístupového hesla k databázi hostované u společnosti OVH zároveň zapotřebí provést úpravu konfiguračního souboru Vašich webových stránek.

> [!primary]
>
> Před provedením jakýchkoli úprav ověřte, zda jsou Vaše webové stránky připojené k databázi. Pokud tomu tak je, ujistěte se prosím, že jste důkladně obeznámeni s postupem pro aplikaci provedených úprav v konfiguračním souboru Vašich webových stránek.
>
> Jelikož se tento proces týká konfigurace Vašich stránek a nikoli samotného řešení OVH, doporučujeme v případě problémů zkontaktovat profesionálního webového administrátora, popřípadě se obrátit na oficiální dokumentaci vydavatele platformy, na níž jsou Vaše stránky vytvořeny.
>

### Fáze 2: Přístup do rozhraní pro správu databází

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. Poté přejděte do záložky `Databáze`{.action}.

Tabulka obsahuje přehled všech databází vytvořených na příslušném webhostingu.

![databasepassword](images/database-password-step1.png){.thumbnail}

### Fáze 3: změna hesla databáze

Pro změnu hesla klikněte na ikonku tří teček u příslušné databáze a vyberte možnost `Změna hesla`{.action}.

![databasepassword](images/database-password-step2.png){.thumbnail}

Zadejte nové heslo. Změnu potvrďte kliknutím na tlačítko Schválit.

**Změna hesla může trvat několik minut.**

> [!primary]
>
> Heslo musí splňovat předem daná formální kritéria. Při změně hesla se řiďte pokyny uvedenými v Zákaznickém prostoru OVH. Zároveň doporučujeme dbát následujících bezpečnostních opatření:
>
> - Nikdy nepoužívejte stejné heslo dvakrát.
>
> - Používejte hesla, která neobsahují Vaše osobní údaje (jméno, příjmení, datum narození apod.).
>
> - Heslo pravidelně aktualizujte.
>
> - Heslo si nikam nezapisujte a nesdílejte jej s ostatními lidmi prostřednictvím e-mailu.
>
> - Nedávejte svému webovému prohlížeči svolení k zapamatování hesla.
>

![databasepassword](images/database-password-step3.png){.thumbnail}

### Fáze 4: obnovení spojení mezi webovými stránkami a databází

> [!primary]
>
> Tento krok je relevantní pouze v případě, že je databáze připojená k webovým stránkám.
>

Pokud Vaše webové stránky zobrazují hlášení o nemožnosti připojení k databázi, znamená to, že konfigurační soubor stránek nebyl aktualizován o nové databázové heslo.

Aby se webové stránky mohly k databázi připojit, musí na Vašem úložišti existovat konfigurační soubor obsahující přístupové údaje k databázi: uživatelské jméno a heslo, název databáze a adresu databázového serveru. Jelikož došlo ke změně databázového hesla na straně OVH, Vaše webové stránky se k databázi nemohou připojit.

Za účelem obnovení spojení je tedy do konfiguračního souboru stránek nutné přidat nové databázové heslo. Jelikož se tento proces týká konfigurace Vašich stránek a nikoli samotného řešení OVH, doporučujeme v případě problémů zkontaktovat profesionálního webového administrátora, popřípadě se obrátit na oficiální dokumentaci vydavatele platformy, na níž jsou Vaše stránky vytvořeny.

## Kam dál

[Více o bezpečnosti hesel (EN)](https://www.getsafeonline.org/protecting-yourself/passwords/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.