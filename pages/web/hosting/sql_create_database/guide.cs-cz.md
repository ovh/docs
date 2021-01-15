---
deprecated: true
title: 'Vytvoření databáze na webhostingu OVH'
slug: vytvoreni-databaze
excerpt: 'Zjistěte, jak vytvořit databázi na svém OVH webhostingu'
section: Databáze
order: 1
---

**Poslední aktualizace 06/06/2018**

## Cíl

Databáze umožňuje ukládání tzv. dynamických prvků (uživatelé, komentáře, příspěvky, články apod.). Databáze jsou </br>v současné době využívány drtivou většinou systémů pro správu obsahu neboli CMS (WordPress, Joomla! apod.).

**Zjistěte, jak vytvořit databázi na svém OVH webhostingu.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Možnost v rámci dané služby vytvářet nové databáze (nebyl překročen limit aktivních databází).
- Dostatečná oprávnění k provádění úprav v konfiguraci služby prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Postup

### Fáze 1: Přístup do rozhraní pro správu databází

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. Poté přejděte do záložky `Databáze`{.action}.

Tabulka obsahuje přehled všech databází vytvořených na příslušném webhostingu.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Fáze 2: Vytvoření databáze

Databázi je možné vytvořit dvěma způsoby:

- **Pokud doposud na webhostingu nebyla žádná databáze vytvořena:** klikněte na tlačítko `Vytvoření databáze.`{.action}

- **Pokud již na webhostingu databáze existují:** klikněte na tlačítko `Akce`{.action} a následně na `Vytvoření databáze.`{.action}

V dialogovém okně vyplňte požadované informace a klikněte na tlačítko `Další`{.action}.

|Informace|Popis|  
|---|---|  
|Databázový engine|Vyberte engine, který má být databází používán. Pro databáze zahrnuté v rámci [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external} je k dispozici pouze databázový engine MySQL.|  
|Verze databáze|Vyberte verzi databáze, kterou chcete přidat. Ujistěte se prosím, zda jsou Vaše webové stránky s touto verzí kompatibilní. |  
|Typ databáze|Vyberte kapacitu databáze. Jedná se o celkový prostor vyhrazený pro danou databázi.|   

Po vyplnění požadovaných údajů klikněte na tlačítko `Další`{.action}.

|Informace|Popis|   
|---|---|   
|Uživatelské jméno|Vytvořte uživatelské jméno|   
|Heslo|Vytvořte uživatelské heslo|   

Zkontrolujte zadané informace a klikněte na tlačítko `Schválit`{.action}. Pokud si přejete vytvořit další databáze, celý postup opakujte.

> [!primary]
>
> Heslo musí splňovat předem daná formální kritéria. Při vytváření hesla se proto řiďte uvedenými pokyny. Zároveň doporučujeme dbát následujících bezpečnostních opatření:
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

![databasecreation](images/database-creation-step2.png){.thumbnail}

### Fáze 3: Použití databáze

Nyní již nezbývá než začít svou databázi naplno využívat. Za tímto účelem budete potřebovat následující informace: uživatelské jméno a heslo, název databáze a adresa serveru.

Tyto informace jsou nezbytné k propojení Vašich webových stránek s databází. V závislosti na typu webových stránek je toto propojení zapotřebí realizovat manuálně nebo prostřednictvím předpřipraveného rozhraní. Jelikož se tento proces týká konfigurace Vašich stránek a nikoli samotného řešení OVH, doporučujeme v případě problémů zkontaktovat profesionálního webového administrátora, popřípadě se obrátit na oficiální dokumentaci vydavatele platformy, na níž jsou Vaše stránky vytvořeny.

Za účelem snadné správy databáze Vám společnost OVH dává k dispozici online aplikaci phpMyAdmin. Přístupový odkaz naleznete v rozhraní pro správu webhostingu (`záložka Databáze`{.action}). U příslušné databáze klikněte na tři tečky v pravé části tabulky a vyberte možnost `Jít do phpMyAdmin`{.action}. Pro přihlášení zadejte uživatelské jméno a heslo, nastavené v rámci procesu vytváření databáze.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.