---
deprecated: true
title: Začínáme s Private SQL
slug: zaciname-s-private-sql
excerpt: Zjistěte, jak používat službu Private SQL
section: Private SQL
---

**Poslední aktualizace 16/03/2018**

## Cíl

Se službou Private SQL získáte SQL instanci s dedikovanými zdroji, fungující společně s webhostingovým řešením OVH. Díky tomu získáte ještě větší výkon a flexibilitu na dostupných databázových systémech. Tato služba je primárně určena pro zákazníky s náročnějšími požadavky.

**Zjistěte, jak používat službu Private SQL**

## Prerekvizity

- Private SQL instance (k dispozici jako součást vybraných [webhostingových balíčků](https://www.ovh.cz/webhosting/){.external} nebo jako [volitelné rozšíření](https://www.ovh.cz/webhosting/moznosti-sql.xml){.external}).
- [Webhostingové řešení](https://www.ovh.cz/webhosting/){.external} a instance Private SQL musejí být hostovány ve stejném datacentru OVH (tato informace je k dispozici také v Zákaznickém prostoru OVH).
- Přístup do [Zákaznického prostoru OVH](https://ovh.com/auth/?action=gotomanager){.external}.

## Postup

### Obecné informace o instanci

V levém postranním panelu [Zákaznického prostoru OVH](https://ovh.com/auth/?action=gotomanager){.external} klikněte na sekci `Databáze`{.action} a vyberte svou Private SQL instanci. Přejděte do záložky `Obecné informace`{.action}.

> [!primary]
>
> Název služby Private SQL může být v Zákaznickém prostoru OVH zobrazen dvěma různými způsoby.
>
> - buďto obsahuje část Vašeho zákaznického identifikátoru (NIC-handle) a končí třemi číslicemi (001 pro první nainstalovanou službu Private SQL, 002 pro druhou atd.),
> - nebo začíná předponou *sqlprive-*, obsahuje část Vašeho zákaznického identifikátoru (NIC-handle) a končí třemi číslicemi (001 pro první nainstalovanou službu Private SQL, 002 pro druhou atd.).
>

V této záložce naleznete přehled těch nejdůležitějších informací týkajících se Vaší Private SQL instance. Věnujte prosím chvíli svého času kontrole správnosti zobrazovaných údajů a ověřte, zda odpovídají níže uvedeným instrukcím.

|Základní informace|Popis|
|---|---|
|Stav služby|Zobrazuje aktuální stav instance (restart, spuštěno, suspendováno). Instance musí být před provedením jakýchkoli zásahů nejdříve restartována.|
|Typ|Zobrazuje typ databázového systému, který je na serveru nainstalován. Pokud si nejste jisti správností zobrazovaného typu databázového systému, mějte na paměti, že nejnovější verze je „MySQL“. Existují však ale i další verze, jako například PostgreSQL či MariaDB. MySQL se například skvěle hodí k použití s redakčním systémem WordPress.|
|Verze|Udává verzi databázového systému, který je na serveru nainstalován. Ujistěte se prosím, zda jsou Vaše webové stránky s touto verzí kompatibilní.|
|RAM|Uvádí informace o dostupné operační paměti a jejích případných přetečeních. Vaše Private SQL instance disponuje dedikovanou RAM. V případě potřeby můžete paměť RAM kdykoli škálovat. Zároveň si můžete nastavit upozornění na její nadměrné využití.|
|Infrastruktura|Zobrazuje typ infrastruktury, na níž Vaše instance běží. Jedná se o interní označení pro OVH infrastrukturu.|
|Datacentrum|Zobrazuje informace o datacentru, v němž je daná instance vytvořena.  Ujistěte se prosím, že Vaše webhostingové řešení je hostováno ve stejném datacentru, jako Vaše Private SQL instance.|
|Host|Udává informace o serveru, na němž instance běží. Jedná se o interní označení společnosti OVH, které se může objevit v oficiální komunikaci týkající se případných [incidentů](http://travaux.ovh.net/){.external}.|

![Základní informace](images/privatesql01-General-information.png){.thumbnail}

### Vytvoření databáze

Do databáze se ukládají veškerá data Vašich webových stránek (například komentáře na blogu).

Chcete-li vytvořit novou databázi, přejděte do záložky `Databáze`{.action} a klikněte na tlačítko `Přidání databáze`{.action}.

![Vytvoření databáze](images/privatesql02-Adding-a-database.png){.thumbnail}

Zobrazí se dialogové okno, v jehož rámci můžete společně s novou databází vytvořit i nového uživatele. Uživatel je pro správu databáze nezbytný -  může se totiž připojit k instanci a na základě přidělených oprávnění provádět požadavky související se správou databáze (např. čtení, zápis nebo mazání dat).

Uživatele můžete vytvořit zaškrtnutím políčka `Vytvořit uživatele`{.action}. Pokud si uživatele přejete vytvořit později, ponechte uvedené políčko nezaškrtnuté. Políčko zaškrtněte, pokud si přejete provést expresní instalaci databáze.

Vyplňte požadované informace a klikněte na tlačítko `Schválit`{.action} (při zadávání informací se prosím řiďte pokyny v informačních tabulkách).

- **Název databáze** (povinné): zadejte název nové databáze.
- **Uživatelské jméno** (nepovinné, není-li zaškrtnuto políčko "Vytvořit uživatele"): zadejte jméno uživatele, který se bude moci k Vaší databázi připojit a provádět na ní příslušné operace.
- **Práva** (nepovinné, není-li zaškrtnuto políčko "Vytvořit uživatele"): vyberte oprávnění, která budou novému uživateli přidělena. Pro standardní použití vyberte možnost `Administrátor`{.action}. Přidělená oprávnění lze kdykoli modifikovat.
- **Heslo**/**Potvrzení hesla** (nepovinné, není-li zaškrtnuto políčko "Vytvořit uživatele"): zadejte uživatelské heslo a potvrďte jej.

> [!warning]
>
> Z bezpečnostních důvodů se prosím při vyplňování formuláře řiďte uvedenými pokyny.
>

![Vytvoření databáze](images/privatesql03-Adding-a-database-part2.png){.thumbnail}

### Vytvoření uživatele (volitelné)

Pokud jste uživatele vytvořili společně s databází, můžete tento krok přeskočit. Pro standardní používání databáze zcela dostačuje jeden uživatel. Specifičtější projekty však mohou vyžadovat vícero uživatelů s přístupem k databázi. Jeden z uživatelů přiřazených k databázi může mít například oprávnění pro čtení a zápis, zatímco jiný pouze pro čtení.

Pokud jste již jednoho uživatele vytvořili a Váš projekt další uživatele nevyžaduje, přejděte k další části příručky. Chcete-li vytvořit nového uživatele, přejděte do záložky `Uživatelé a oprávnění`{.action} a klikněte na tlačítko `Přidat uživatele`{.action}.

![Přidání uživatele](images/privatesql04-Adding-a-user.png){.thumbnail}

Vyplňte požadované informace a klikněte na tlačítko `Schválit`{.action} (při zadávání informací se prosím řiďte pokyny v informačních tabulkách).

- **Uživatelské jméno**: zadejte jméno uživatele, který se bude moci k Vaší databázi připojit a provádět na ní příslušné operace. Příslušná oprávnění pro práci s databází budete moci novému uživateli přidělit v následující fázi.
- **Heslo**/**Potvrzení hesla**: zadejte heslo a potvrďte jej.

> [!warning]
>
> Z bezpečnostních důvodů se prosím při vyplňování formuláře řiďte uvedenými pokyny.
>

![Přidání uživatele](images/privatesql05-Adding-a-user-part2.png){.thumbnail}

Jakmile je uživatel vytvořen, je nutné mu přidělit oprávnění pro práci s databází (např. čtení, zápis nebo mazání dat). Za tímto účelem rozklikněte v tabulce uživatelů ikonku s třemi tečkami a vyberte možnost `Správa oprávnění`{.action}.

![Správa oprávnění](images/privatesql06-Adding-a-right.png){.thumbnail}

Vyberte požadovaná oprávnění. Pro standardní použití vyberte možnost `Administrátor`{.action}.

![Správa oprávnění](images/privatesql07-Adding-a-right-part2.png){.thumbnail}

### Import databáze (volitelné)

Tento krok je relevantní pouze v případě, že si přejete importovat zálohu již existující databáze (nezbytné, pokud migrujete své webové stránky na OVH webhosting, nebo pokud migrujete databázi na Private SQL instanci). Pokud nepotřebujete provést migraci databáze, můžete tento krok přeskočit. V opačném případě postupujte podle následujících instrukcí:

Existuje několik způsobů, jak databázi importovat. Společnost OVH nabízí v rámci Zákaznického prostoru speciální migrační nástroj. V následujícím textu se proto zaměříme na použití tohoto nástroje. Chcete-li použít jinou metodu importu, prostudujte si prosím příslušnou dokumentaci.

#### Fáze 1: přístup do rozhraní pro import databáze

Přejděte do záložky `Databáze`{.action}, klikněte na ikonu ozubeného kolečka a vyberte možnost `Nahrát soubor`{.action}.

![Nahrání souboru](images/privatesql08-import-a-file.png){.thumbnail}

V dialogovém okně zaškrtněte políčko `Importovat nový soubor`{.action} a klikněte na tlačítko `Další`{.action}.

![Nahrání souboru](images/privatesql09-import-a-file-part2.png){.thumbnail}

#### Fáze 2: výběr a odeslání souboru

Zadejte název souboru pro snadnější vyhledání v budoucnosti, klikněte na tlačítko **Procházet** a nahrajte soubor ze svého počítače. Následně klikněte na tlačítko `Odeslat`{.action}.

Vyčkejte, dokud se nezobrazí hlášení o úspěšném nahrání souboru a klikněte na tlačítko `Další`{.action}.

![Nahrání souboru](images/privatesql10-import-a-file-part3.png){.thumbnail}

#### Fáze 3: import databáze

V poslední fázi procesu zvolte, zda aplikovat přídavné možnosti:

- **Vyprázdnit aktuální databázi**: po zaškrtnutí tohoto políčka bude obsah databáze kompletně vymazán a nahrazen obsahem zálohy. V našem případě a v logické posloupnosti našich operací je databáze prázdná, takže toto políčko můžete ponechat nezaškrtnuté.
- **Po ukončení importu odeslat e-mail**: o dokončení importu databáze budete informování prostřednictvím e-mailu.

![Nahrání souboru](images/privatesql11-import-a-file-part4.png){.thumbnail}

### Připojení webu k databázi

Nyní, když je databáze vytvořená a alespoň jeden uživatel k ní má oprávnění, nezbývá než ji propojit s webovými stránkami. Tento krok lze v závislosti na tom, jaký web či CMS používáte (WordPress, Joomla! apod.) nebo v jaké fázi vytváření webových stránek se zrovna nacházíte, realizovat několika způsoby.

V zájmu úspěšného provedení této operace musíte mít k dispozici následujících pět údajů:

- **Název databáze**: název, který jste zadali při vytváření databáze.
- **Uživatelské jméno**: uživatelské jméno, které jste zadali při vytváření databáze nebo při vytváření samostatného uživatele.
- **Heslo**: heslo, které jste zadali při vytváření uživatele.
- **Název hostitele**: server pro připojení Vašich webových stránek k databázi. Tato informace je k dispozici v záložce `Obecné informace`{.action}, v rámečku **Přístupové údaje**.
- **Port**: port pro připojení k Vaší Private SQL instanci. Tato informace je k dispozici v záložce `Obecné informace`{.action}, v rámečku **Přístupové údaje**.

> [!warning]
>
> V ojedinělých případech může dojít k tomu, že se políčko `port`{.action} v konfiguraci Vašich webových stránek nezobrazí. Pokud taková situace nastane, je toto pole zapotřebí přidat za název hostitele. Tyto údaje je nutné oddělit dvojtečkou *:* (příklad: nazevhostitele:port).
>

![Připojení SQL](images/privatesql12-sql_connection.png){.thumbnail}

Nyní můžete dokončit nastavení svých webových stránek nebo migraci databáze na novou Private SQL instanci.

## Kam dál

Přidejte se k naší uživatelské komunitě na [https://community.ovh.com/en/](https://community.ovh.com/en/).