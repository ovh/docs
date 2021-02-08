---
deprecated: true
title: 'Začínáme s CloudDB'
slug: zaciname-s-clouddb
excerpt: 'Zjistěte, jak používat službu CloudDB'
section: 'První kroky'
---

**Poslední aktualizace 11/05/2018**

## Cíl

Řešení CloudDB nabízí přístup k databázové instanci s garantovanými a dedikovanými zdroji. Jedná se o vysoce výkonou a flexibilní službu, určenou zejména pro zákazníky se specifickými požadavky na správu a provoz databáze.

**Zjistěte, jak používat službu CloudDB.**

## Prerekvizity

- [CloudDB instance](https://www.ovh.cz/cloud/cloud-databases/){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

### Přístup do administračního rozhraní instance

V levém postranním panelu [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} klikněte na sekci `Databáze`{.action} a vyberte svou databázovou instanci. Přejděte do záložky `Obecné informace`{.action}.

> [!primary]
>
> Název služby CloudDB v Zákaznickém prostoru OVH obsahuje část Vašeho zákaznického identifikátoru (NIC-handle) a končí třemi číslicemi (001 pro první nainstalovanou službu CloudDB, 002 pro druhou atd.).
>

V této záložce naleznete přehled těch nejdůležitějších informací týkajících se Vaší instance. Věnujte prosím chvíli svého času kontrole správnosti zobrazovaných údajů a ověřte, zda odpovídají níže uvedeným instrukcím.

|Informace|Popis|
|---|---|
|Stav služby|Zobrazuje aktuální stav instance (restart, spuštěno, suspendováno). Instance musí být před provedením jakýchkoli zásahů nejdříve restartována.|
|Typ|Zobrazuje typ databázového systému, který je na serveru nainstalován.|
|Verze|Udává verzi databázového systému, který je na serveru nainstalován. Ujistěte se prosím, zda jsou Vaše webové stránky s touto verzí kompatibilní.|
|RAM|Uvádí informace o dostupné operační paměti a jejích případných přetečeních. Vaše CloudDB instance disponuje dedikovanou a garantovanou RAM. V případě potřeby můžete paměť RAM škálovat. Zároveň si můžete nastavit upozornění na její nadměrné využití.|
|Infrastruktura|Zobrazuje typ infrastruktury, na níž Vaše instance běží. Jedná se o interní označení pro OVH infrastrukturu.|
|Datacentrum|Zobrazuje informace o datacentru, v němž je daná instance vytvořena.|
|Host|Udává informace o serveru, na němž instance běží. Jedná se o interní označení společnosti OVH, které se může objevit v oficiální komunikaci týkající se případných [incidentů](http://travaux.ovh.net/){.external}.|

![clouddb](images/clouddb-general-information.png){.thumbnail}

### Vytvoření databáze

> [!primary]
>
> Tato část se nevztahuje na databázový systém Redis.
>

Chcete-li vytvořit novou databázi, přejděte do záložky `Databáze`{.action} a klikněte na tlačítko `Přidání databáze`{.action}.


![clouddb](images/clouddb-add-database.png){.thumbnail}

V dialogovém okně sloužícím pro vytvoření nové databáze zároveň můžete:

-  **Vytvořit uživatele**: uživatel bude na dané databázi moci provádět úkony ve stanoveném rozsahu (čtení, zápis apod.).

- **Přidat autorizovanou IP adresu**: požadavky pocházející z této adresy budou automaticky autorizovány pro přístup k Vaší databázi.

V závislosti na zvolených parametrech vyplňte požadované informace a klikněte na tlačítko `Schválit`{.action}.

|Informace|Popis|
|---|---|
|Název databáze|Pojmenujte svou databázi.|
|Uživatelské jméno|Zadejte jméno uživatele, který se bude moci k Vaší databázi připojit a provádět na ní příslušné operace (pouze pokud je zaškrtnuté políčko „*Vytvořit uživatele*“).|
|Práva|Určete rozsah práv asociovaných s daným uživatelem. Pro standardní použití vyberte `Administrativní kontakt`{.action} (pouze pokud je zaškrtnuté políčko „*Vytvořit uživatele*“).|
|Heslo|Zadejte uživatelské heslo a potvrďte jej (pouze pokud je zaškrtnuté políčko „*Vytvořit uživatele*“).|
|IP/maska|Zadejte IP adresu či masku IP adresy, z níž pocházející požadavky budou automaticky autorizovány pro přístup k Vaší databázi (pouze pokud je zaškrtnuté políčko „*Přidat autorizovanou IP adresu*“).|

> [!warning]
>
> Z bezpečnostních důvodů se prosím při vyplňování formuláře řiďte uvedenými pokyny.
>

![clouddb](images/clouddb-add-database-step2.png){.thumbnail}

### Vytvoření uživatele (volitelné)

> [!primary]
>
> Tato část se nevztahuje na databázový systém Redis.
>

Pokud jste uživatele vytvořili společně s databází, můžete tento krok přeskočit. Náročnější projekty však mohou vyžadovat vícero uživatelů s přístupem k databázi. Jeden z uživatelů přiřazených k databázi může mít například oprávnění pro čtení a zápis, zatímco jiný pouze pro čtení.

 Chcete-li vytvořit nového uživatele, přejděte do záložky `Uživatelé a oprávnění`{.action} a klikněte na tlačítko `Přidat uživatele`{.action}.

![clouddb](images/clouddb-add-user.png){.thumbnail}

Vyplňte požadované informace a klikněte na tlačítko `Schválit`{.action}.

|Informace|Popis|
|---|---|
|Uživatelské jméno|Uživatelské jméno: zadejte jméno uživatele, který se bude moci k Vaší databázi připojit a provádět na ní příslušné operace. Příslušná oprávnění pro práci s databází budete moci novému uživateli přidělit v následující fázi.|
|Heslo|Zadejte uživatelské heslo a potvrďte jej.|

> [!warning]
>
> Z bezpečnostních důvodů se prosím při vyplňování formuláře řiďte uvedenými pokyny.
>

![clouddb](images/clouddb-add-user-step2.png){.thumbnail}

Jakmile je uživatel vytvořen, je nutné mu přidělit oprávnění pro práci s databází (např. čtení, zápis nebo mazání dat). Za tímto účelem rozklikněte v tabulce uživatelů ikonku s třemi tečkami a vyberte možnost `Správa oprávnění`{.action}. Vyberte požadovaná oprávnění. Pro standardní použití vyberte možnost Administrativní kontakt.

![clouddb](images/clouddb-add-rights.png){.thumbnail}

### Import databáze

> [!primary]
>
> Tato část je relevantní pouze v případě, že si přejete provést import již existující databáze. V opačném případě přejděte k následující části.
>

Existuje několik způsobů, jak databázi importovat. V zákaznickém prostoru OVH je za tímto účelem k dispozici speciálně navržený nástroj. V závislosti na svých individuálních potřebách a znalostech můžete samozřejmě využít i jiná dostupná řešení.

V následujících krocích se dozvíte, jak provést import databáze pomocí Zákaznického prostoru OVH.

- **Fáze 1: přístup do rozhraní pro import**

Přejděte záložky `Databáze`{.action}, klikněte na ikonu ozubeného kolečka u příslušné databáze a následně vyberte možnost `Nahrát soubor`{.action}. V dialogovém okně zaškrtněte políčko `Importovat nový soubor`{.action} a klikněte na tlačítko `Další`{.action}.

![clouddb](images/clouddb-add-import-step1.png){.thumbnail}

- **Fáze 2: výběr a odeslání souboru**

Pro snadnější vyhledání soubor pojmenujte. Pomocí tlačítka **Procházet...** nahrajte soubor ze svého počítače. Následně klikněte na tlačítko `Odeslat`{.action}. Vyčkejte, dokud se nezobrazí hlášení o úspěšném nahrání souboru. Poté klikněte na tlačítko `Další`{.action}.

![clouddb](images/clouddb-add-import-step2.png){.thumbnail}

- **Fáze 3: import databáze**

V poslední fázi navolte přídavné možnosti a následně klikněte na tlačítko `Schválit`{.action}.

|Přídavné možnosti|Popis|
|---|---|
|Vyprázdnit aktuální databázi|Obsah databáze bude kompletně vymazán a nahrazen obsahem importované zálohy.|
|Po ukončení importu odeslat e-mail|O dokončení importu databáze budete informováni prostřednictvím e-mailu.|

![clouddb](images/clouddb-add-import-step3.png){.thumbnail} 

### Autorizace IP adresy

Pro zprovoznění přístupu k Vaší CloudDB instanci je zapotřebí specifikovat jednotlivé IP adresy či rozsahy IP adres, které se k Vašim databázím smějí připojit. Za tímto účelem přejděte do záložky `Autorizované IP adresy`{.action} a klikněte na tlačítko `Přidat IP adresu/masku`{.action}.

![clouddb](images/clouddb-add-ip.png){.thumbnail}

Do pole `IP/maska`{.action} zadejte požadovanou IP adresu či masku. V případě zájmu vyplňte krátký popis. V závislosti na tom, zda si danou IP adresu či masku přejete autorizovat pouze pro přístup k databázím či SFTP (nebo obojímu), zaškrtněte příslušná pole. Nakonec klikněte na tlačítko `Schválit`{.action}.

![clouddb](images/clouddb-add-ip-step2.png){.thumbnail}

### Připojení webu k databázi

Nyní, když je databáze vytvořena, alespoň jeden uživatel k ní má oprávnění a existuje zde alespoň jedna autorizovaná IP adresa pro přístup ke CloudDB instanci, nezbývá než databázi propojit s webovými stránkami. Tento krok lze v závislosti na tom, jaký web či CMS používáte (WordPress, Joomla! apod.) nebo v jaké fázi vytváření webových stránek se zrovna nacházíte, realizovat několika způsoby.

V zájmu úspěšného provedení této operace musíte mít k dispozici následující údaje:

|Informace|Popis|
|---|---|
|Název databáze|Název, který jste zadali při vytváření databáze. Přehled všech databází, které jsou aktuálně vytvořeny na CloudDB instanci, naleznete v záložce `Databáze`{.action}.|
|Uživatelské jméno|Uživatelské jméno, které jste zadali při vytváření databáze nebo při vytváření samostatného uživatele. Přehled všech uživatelů, kteří jsou aktuálně vytvořeni na CloudDB instanci, naleznete v záložce `Uživatelé a oprávnění`{.action}.|
|Uživatelské heslo|Heslo, které jste zadali při vytváření uživatele.|
|Název hostitelského serveru|Server pro připojení Vašich webových stránek k databázi. Tato informace je k dispozici v záložce `Obecné informace`{.action}, v rámečku **Přístupové údaje**.|
|Port serveru|Port pro připojení k Vaší CloudDB instanci. Tato informace je k dispozici v záložce `Obecné informace`{.action}, v rámečku **Přístupové údaje**.|

> [!warning]
>
> V ojedinělých případech může dojít k tomu, že se políčko `port`{.action} v konfiguraci Vašich webových stránek nezobrazí. Pokud taková situace nastane, je toto pole zapotřebí přidat za název hostitele. Tyto údaje je nutné oddělit dvojtečkou *:* (příklad: nazevhostitele:port).
>

![clouddb](images/clouddb-login-information.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.