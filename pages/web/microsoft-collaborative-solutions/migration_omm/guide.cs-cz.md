---
deprecated: true
title: 'Migrace e-mailových účtů prostřednictvím nástroje OVH Mail Migrator'
slug: migrace-emailovych-uctu-prostrednictvim-ovh-mail-migrator
excerpt: 'Seznámení s nástrojem OVH Mail Migrator'
section: 'Migrace účtů'
---

**Poslední aktualizace 05/04/2018**

## Cíl

[OVH Mail Migrator](https://omm.ovh.net/){.external} je nástroj vyvinutý společností OVH,  který umožňuje rychlou a snadnou migraci e-mailových účtů na e-mailové adresy OVH. Migrační proces zahrnuje nejrůznější položky, jako např. e-maily, kontakty, kalendáře a úkoly (za předpokladu, že jsou kompatibilní s Vašimi e-mailovými adresami).

**Zjistěte, jak migrovat své e-mailové účty k OVH prostřednictvím nástroje OVH Mail Migrator.**

## Prerekvizity

- E-mailové řešení OVH, jako např. [Exchange](https://www.ovh.cz/emails/){.external}, [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external} nebo MX Plan (jako samostatné řešení nebo jako součást [webhostingového balíčku OVH](https://www.ovh.cz/webhosting/){.external}).
- Přihlašovací údaje k e-mailovým účtům, které si přejete migrovat (dále jako „zdrojové účty“).
- Přihlašovací údaje k e-mailovým účtům OVH, na něž si přejete migrovat data ze zdrojových účtů (dále jako „cílové účty“).

## Postup

Nástroj [OVH Mail Migrator](https://omm.ovh.net/){.external} je dostupný na následující adrese: <https://omm.ovh.net/>. OMM provádí tři typy migrací a umožňuje sledovat jejich postup.

|Typ migrace|Popis|
|---|---|
|Jednoduchá migrace|Migruje obsah e-mailové adresy na jinou e-mailovou adresu.  Toto řešení je doporučováno v případě migrace jedné či více e-mailových adres (jednotlivé kroky je zapotřebí opakovat pro každou migraci zvlášť).|
|Migrace souboru|Migruje obsah e-mailové adresy, jenž byl extrahován do souboru, na jinou e-mailovou adresu. Tento proces je kompatibilní s následujícími formáty: PST, ICS a VCF.|
|Hromadná migrace|Umožňuje provádět správu většího počtu migrací v rámci jednoho projektu. Toto řešení je ideální pro migraci velkého počtu e-mailových adres.|

V návaznosti na předcházející tabulku pokračujte do té části příručky, která odpovídá Vašim požadavkům na migraci e-mailových účtů.

### Jednoduchá migrace

Přejděte na <https://omm.ovh.net/>, přesuňte kurzor myši na záložku `Migrace`{.action} (lišta v horní části stránky) a klikněte na tlačítko `Nová migrace`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Vyplňte požadované informace pro jednotlivé sekce.

- **Účet**: zadejte informace o **zdrojovém** a **cílovém účtu**. Mějte na paměti, že obsah **zdrojového účtu** bude migrován na **cílový účet**.

|Informace|Popis|
|---|---|
|Typ serveru|V závislosti na svých účtech vyberte typ serveru. Pokud je jeden z nich účet OVH, můžete vybrat možnost automatického vyplnění informací „**Hosted by OVH (Autodetect)**“.|
|URL serveru|Zadejte URL adresy serverů, na nichž jsou Vaše účty hostovány. Po výběru typu serveru může dojít k automatickému vyplnění tohoto pole.|
|Login|Zadejte celé e-mailové adresy svých účtů.|
|Administrátorský účet s delegací|Toto pole se zobrazuje pouze u určitých typů serverů.|
|Heslo|Zadejte heslo ke svým e-mailovým účtům.|

- **Možnosti**: vyberte položky, které si přejete migrovat. Určitý obsah může být v závislosti na vybraném typu serveru nedostupný.

- **Informace**: zadejte e-mailovou adresu, na níž budou zasílány informace o průběhu migračního procesu.

Po vyplnění požadovaných údajů klikněte na tlačítko `Spustit migraci`{.action}. Pokud jste zadali správné údaje, dojde k zahájení migrace.

Na stránce pro sledování migrace můžete sledovat průběh migračního procesu. Nezapomeňte si poznamenat číslo migračního příkazu neboli `ID migrace`{.action} a vyčkejte na dokončení procesu. Celková doba procesu je závislá na objemu migrovaných dat.  Do tohoto rozhraní se můžete kdykoli vrátit. Přesný postup naleznete v následující sekci „Sledování jednoduché migrace“.

### Sledování jednoduché migrace

Existují dva způsoby, jak přejít do rozhraní pro sledování jednoduché migrace:

- Prostřednictvím odkazu v e-mailu s informacemi o zahájení migrace
- Prostřednictvím záložky `Migrace`{.action} v horní části stránek OMM <https://omm.ovh.net/>, kliknutím na tlačítko `Sledovat/Synchronizovat`{.action}. Abyste mohli postup migrace sledovat, budete muset vyplnit číslo migračního příkazu (`ID migrace`{.action}) a `zdrojový účet`{.action} migrace.

![omm](images/omm-migration-track.png){.thumbnail}

Po zadání požadovaných údajů dojde k zobrazení stránky s informacemi o probíhající migraci. Dozvíte se zde, zda proces čeká na zahájení, probíhá nebo byl již ukončen. V závislosti na aktuálním stavu migračního procesu je možné provést několik akcí:

|action|Popis|
|---|---|
|Zastavit proces|Umožňuje zastavit probíhající migraci. Všechny migrované položky zůstávají na cílovém účtu.|
|Odstranit migrované položky|Umožňuje odstranit již migrované položky z cílového účtu. Položky lze odstranit od předem specifikovaného synchronizačního bodu.|
|Synchronizovat|Umožňuje obnovení nových položek, které nebyly zahrnuty v předcházející synchronizaci mezi zdrojovým a cílovým účtem. Tuto akci lze vnímat jako migraci chybějících položek ze zdrojového účtu na cílový účet.|

### Migrace souboru

Přejděte na <https://omm.ovh.net/>, přesuňte kurzor myši na záložku `PST / ICS / VCF`{.action} (lišta v horní části stránky) a v závislosti na požadovaném typu migrace klikněte na jedno z následujících tlačítek: `Nová migrace PST`{.action}, `Nová migrace ICS`{.action} nebo `Nová migrace VCF`{.action}.

Pro úspěšné dokončení tohoto druhu migrace budete potřebovat soubor s položkami, které si přejete migrovat.

![omm](images/omm-migration-files.png){.thumbnail}

Vyplňte požadované údaje o **cílovém účtu** a klikněte na tlačítko `Spustit migraci`{.action}. Mějte na paměti, že obsah souboru PST, ICS nebo VCF bude migrován na **cílový účet**.

Pokud jste zadali správné údaje, budete vyzváni k nahrání souboru ze svého počítače. Vyberte příslušný soubor, klikněte na tlačítko `Nahrát`{.action} a vyčkejte, dokud se soubor nenahraje. Celková doba nahrávání závisí na velikosti souboru. Stav nahrávání souboru můžete sledovat na této stránce.

Jakmile dojde k nahrání souboru, zadejte heslo k **cílovému účtu** a klikněte na tlačítko `Spustit migraci`{.action}. Pokud jsou zadané údaje správné, budete moci migraci zahájit opětovným kliknutím na tlačítko `Spustit migraci`{.action}.

Na stránce pro sledování migrace můžete sledovat průběh migračního procesu. Nezapomeňte si poznamenat číslo migračního příkazu neboli `ID migrace`{.action} a vyčkejte na dokončení procesu. Celková doba procesu je závislá na objemu migrovaných dat.  Do tohoto rozhraní se můžete kdykoli vrátit. Přesný postup naleznete v následující sekci „Sledování migrace souboru“.

### Sledování migrace souboru

Existují dva způsoby, jak přejít do rozhraní pro sledování migrace souboru PST, ICS nebo VCF:

- Prostřednictvím odkazu v e-mailu s informacemi o zahájení migrace

- Prostřednictvím záložky `Migrace`{.action} v horní části stránek OMM <https://omm.ovh.net/>, kliknutím na tlačítko `Sledovat/Synchronizovat`{.action}. Abyste mohli postup migrace sledovat, budete muset vyplnit číslo migračního příkazu (`ID migrace`{.action}) a `zdrojový účet`{.action} migrace.

![omm](images/omm-migration-track.png){.thumbnail}

Po zadání požadovaných údajů dojde k zobrazení stránky s informacemi o probíhající migraci. Dozvíte se zde, zda proces čeká na zahájení, probíhá nebo byl již ukončen. V závislosti na aktuálním stavu migračního procesu je možné provést několik akcí:

|action|Popis|
|---|---|
|Zastavit proces|Umožňuje zastavit probíhající migraci. Všechny migrované položky zůstávají na cílovém účtu.|
|Odstranit migrované položky|Umožňuje odstranit již migrované položky z cílového účtu.|

### Hromadná migrace

Přejděte na <https://omm.ovh.net/>, přesuňte kurzor myši na záložku `Projekt`{.action} (lišta v horní části stránky) a klikněte na tlačítko `Nový projekt hromadné migrace`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Vyplňte informace o **novém projektu**:

|Informace|Popis|
|---|---|
|Název|Zadejte název projektu.|
|Heslo|Zadejte přístupové heslo pro správu projektu.|
|E-mail|Zadejte e-mailovou adresu, na níž budou zasílány informace o průběhu migračního procesu.|

Následně klikněte na tlačítko `Vytvořit projekt`{.action}. Následující stránka slouží jako rozhraní pro správu a sledování migračního projektu. Nezapomeňte si poznamenat **ID projektu**.

Nyní můžete začít s migrací svých účtů. Za tímto účelem je k dispozici několik záložek:

|Záložka|Popis|
|---|---|
|Pokračovat|Umožňuje sledovat stav jednotlivých migrací Vašeho projektu. K dispozici je i tlačítko pro pozastavení a restart Vašich migrací.|
|Multiple creation|Umožňuje přidat několik migrací do fronty prostřednictvím souboru CSV nebo Excel. Tento soubor musí mít specifický formát. Doporučujeme proto použít některou z dostupných šablon.|
|Přidat|Umožňuje přidat migrace do fronty. Zdrojové a cílové servery mohou zůstat ve výchozím nastavení.|
|Možnosti|Umožňuje nastavit, které položky mají být prostřednictvím nástroje OMM migrovány, a nastavit počet simultánních požadavků, které nástroj může v průběhu provádění migrací zpracovávat.|
|Odhlášení|Odhlášení z rozhraní pro správu a sledování migračního projektu. Po odhlášení se můžete kdykoli opětovně přihlásit a sledovat ostatní migrační procesy.|

Pokud se chcete vrátit do rozhraní pro sledování migračního projektu, přejděte na <https://omm.ovh.net/>, přesuňte kurzor myši na záložku `Projekt`{.action} (lišta v horní části stránky) a klikněte na tlačítko `Sledovat projekt`{.action}. Následně budete muset zadat `ID projektu`{.action} a `přístupové heslo`{.action}.

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.