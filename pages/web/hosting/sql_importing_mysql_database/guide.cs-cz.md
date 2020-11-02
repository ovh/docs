---
deprecated: true
title: 'Import zálohy do webhostingové databáze'
slug: import-databaze-mysql
excerpt: 'Zjistěte, jak importovat datovou zálohu do databáze na webhostingu OVH'
section: Databáze
order: 4
---

**Poslední aktualizace 27/06/2018**

## Cíl

Databáze umožňují ukládání tzv. dynamických prvků (uživatelé, komentáře, příspěvky, články apod.). Databáze jsou v současné době využívány většinou systémů pro správu obsahu neboli CMS (WordPress, Joomla! apod.). Za určitých okolností může nastat situace, v níž budete do některé ze svých databází za účelem modifikace či nahrazení jejího obsahu potřebovat importovat datovou zálohu.

**Zjistěte, jak provést import datové zálohy do databáze na webhostingu OVH.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Databáze vytvořená v rámci [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}.
- Datová záloha, kterou si do databáze přejete importovat.
- V závislosti na metodě, kterou se pro import datové rozhodnete využít, budete potřebovat přístup do administračního rozhraní příslušného webhostingu prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, nebo alespoň přihlašovací údaje pro připojení k databázi.

## Postup

Než začnete, rozhodněte se, kterou metodu pro import datové zálohy do databáze použijete. Za tímto účelem je k dispozici několik možností, které se vzájemně liší co do času i požadavků na technické znalosti v dané oblasti.

- **Obnovení dřívější verze databáze prostřednictvím Zákaznického prostoru:** toto řešení umožňuje obnovit obsah Vašich databází pomocí záloh uložených v nástroji pro správu záloh od společnosti OVH. Tato metoda nevyžaduje žádné specifické technické znalosti a lze je iniciovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

- **Import vlastní zálohy prostřednictvím Zákaznického prostoru:** toto řešení umožňuje provést import dat z Vaší vlastní zálohy. Tuto metodu lze iniciovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

- **Import prostřednictvím webového rozhraní phpMyAdmin:** toto řešení vyžaduje znalost rozhraní phpMyAdmin. Velikost importovaného souboru nesmí přesáhnout stanovenou velikost. 

- **Import prostřednictvím skriptu:** toto řešení vyžaduje vytvoření skriptu na webhostingu OVH a předpokládá vyšší úroveň technických znalostí.

- **Import prostřednictvím SSH:** toto řešení vyžaduje připojení prostřednictvím protokolu SSH a znalost jednotlivých příkazů. Je předpokládána vysoká úroveň technických znalostí a specifický [webhostingový balíček OVH](https://www.ovh.cz/webhosting/){.external}. 

Některé z výše uvedených metod nejsou zahrnuty v administračním rozhraní služeb OVH. Pokud se některou z těchto metod rozhodnete použít, bude úspěšné dokončení procesu záviset pouze na Vašich vlastních technických dovednostech. V další části této příručky naleznete základní instrukce pro použití těchto metod. Tyto informace však nelze chápat jako náhradu za asistenci profesionálního webmastera.

V závislosti na zvolené metodě pokračujte do příslušné části této příručky.

> [!warning]
>
> Společnost OVH Vám dává k dispozici služby, za jejichž správu a konfiguraci nesete plnou odpovědnost. 
>
> Tato příručka slouží jako úvod do obecné problematiky vážící se ke správě Vaší služby. V případě jakýchkoli nejasností doporučujeme kontaktovat profesionálního webmastera. Další informace naleznete v poslední sekci této příručky.
>

### Obnovení zálohy prostřednictvím Zákaznického prostoru

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu webhostingu klikněte na záložku `Databáze`{.action}.

Tabulka obsahuje přehled všech databází vytvořených na příslušném webhostingu. Pro obnovení dřívější verze databáze klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Obnovení zálohy`{.action}. Mějte prosím na paměti, že tato akce bude mít za následek nahrazení aktuálního obsahu databáze obsahem zvolené zálohy.

![databaseimport](images/database-import-step5.png){.thumbnail}

Zobrazí se přehled všech dostupných záloh příslušné databáze. Tabulka obsahuje informace o datu vytvoření zálohy a dni, kdy dojde k jejímu automatickému odstranění z nástroje OVH.

Pro obnovení vybrané zálohy klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Obnovit zálohu`{.action}. Zkontrolujte správnost zobrazených údajů a klikněte na tlačítko `Schválit`{.action}. Vyčkejte na dokončení procesu.

![databaseimport](images/database-import-step6.png){.thumbnail}

### Import vlastní zálohy prostřednictvím Zákaznického prostoru

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu webhostingu klikněte na záložku `Databáze`{.action}.

Tabulka obsahuje přehled všech databází vytvořených na příslušném webhostingu. Pro import vlastní zálohy klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Nahrát soubor`{.action}.

![databaseimport](images/database-import-step1.png){.thumbnail}

V dialogovém okně zaškrtněte políčko `Importovat nový soubor`{.action} a klikněte na tlačítko `Další`{.action}.

> [!primary]
>
> Prostřednictvím volby `Použít existující soubor`{.action} můžete provést opětovný import dat ze souboru, který již byl do nástroje OVH nahrán.
>

![databaseimport](images/database-import-step2.png){.thumbnail}

Zadejte název souboru pro snadnější vyhledání v budoucnosti, klikněte na tlačítko `Procházet` a nahrajte soubor ze svého počítače. Následně klikněte na tlačítko `Odeslat`{.action}.

Vyčkejte, dokud se nezobrazí hlášení o úspěšném nahrání souboru. Poté klikněte na tlačítko `Další`{.action}.

![databaseimport](images/database-import-step3.png){.thumbnail}

V poslední fázi procesu se můžete rozhodnout, zda aplikovat přídavné možnosti:

- **Vyprázdnit aktuální databázi**: po zaškrtnutí tohoto políčka bude obsah databáze kompletně vymazán a nahrazen obsahem zálohy. Tuto možnost vyberte pouze v případě, že si přejete stávající obsah databáze nahradit obsahem zálohy.

- **Po ukončení importu odeslat e-mail**: o dokončení importu databáze budete informování prostřednictvím e-mailu.

Nakonec klikněte na tlačítko `Schválit`{.action} a vyčkejte na dokončení procesu.

![databaseimport](images/database-import-step4.png){.thumbnail}

### Import prostřednictvím webového rozhraní phpMyAdmin

Připojte se k rozhraní phpMyAdmin. Odkaz pro přístup k rozhraní phpMyAdmin naleznete v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. V levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu webhostingu klikněte na záložku `Databáze`{.action}.

Tabulka obsahuje přehled všech databází vytvořených na příslušném webhostingu. Klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Jít do phpMyAdmin`{.action}.

![databaseimport](images/database-import-step7.png){.thumbnail}

V nově otevřené záložce vyplňte informace o databázi a v rozbalovací nabídce vyberte aktuální verzi (**Current**). Následně klikněte na tlačítko `Proveď`{.action}. Po přihlášení do rozhraní phpMyAdmin přejděte do záložky `Import`{.action} a vyplňte požadované údaje. Mějte na paměti, že velikost importovaného souboru je omezena.

> [!warning]
>
> Jelikož rozhraní phpMyAdmin není produktem společnosti OVH, budete se při provádění úprav muset spolehnout na své vlastní znalosti a zkušenosti. V případě jakýchkoli nejasností se prosím obraťte na profesionálního webmastera. 
>

### Import prostřednictvím skriptu

Proces je rozdělen do několika fází. Nejprve se ujistěte, že máte k dispozici zálohu, kterou si do své databáze přejete importovat, stejně tak jako přihlašovací údaje pro připojení k databázi: uživatelské jméno, heslo, název databáze a adresa serveru.

> [!warning]
>
> Toto řešení vyžaduje vyšší míru technických znalostí a programátorských dovedností. Níže naleznete pouze obecné informace týkající se postupu pro import zálohy prostřednictvím skriptu. V případě jakýchkoli nejasností se prosím obraťte na profesionálního webmastera.
>

#### Fáze 1: vytvoření skriptu pro import

První krok sestává z vytvoření samotného skriptu, který lze použít pro import zálohy do Vaší databáze. Následuje příklad takového skriptu, který však nelze substituovat za pomoc profesionálního webmastera:

```php
<?php
system("cat backup_filename.sql | mysql --host=server_address --user=user_name --password=user_password database_name");
?>
```

Generické proměnné ve výše uvedeném příkladu je zapotřebí nahradit informacemi o příslušné databázi. Jakmile skript dokončíte, doporučujeme ho pojmenovat například jako „import.php“.

|Generická proměnná|Informace, kterou je zapotřebí dosadit|
|---|---|
|backup_file_name|Název zálohy, kterou si přejete importovat|
|server_address|Adresa databázového serveru|
|user_name|Uživatel s přístupovými právy k databázi|
|user_password|Uživatelské heslo|
|database_name|Název databáze|

#### Fáze 2: upload skriptu a zálohy na hostingové úložiště

Jakmile je skript vytvořen, je zapotřebí ho společně se zálohou, kterou si do své databáze přejete importovat, nahrát na webhostingové úložiště. Za tímto účelem se k úložišti musíte připojit. Detailní informace o připojení k webhostingovému úložišti naleznete ve druhém kroku následující příručky: [Zveřejnění webových stránek online](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external}.

Skript i zálohu je zapotřebí nahrát do adresáře „www“. **Při pojmenovávání skriptu buďte opatrní.** Ujistěte se, že při nahrávání skriptu na úložiště nepřepíšete soubor se stejným názvem. Pokud se při nahrávání souboru zobrazí varování týkající se možného přepsání souborů, skript přejmenujte a celou akci opakujte.

#### Fáze 3: spuštění skriptu

Po uploadu skriptu a zálohy na webhostingové úložiště nezbývá než skript spustit. 

Za tímto účelem do adresního řádku svého prohlížeče zadejte úplnou URL adresu příslušného skriptu (např.: madomena.ovh/import.php). Pokud jsou informace obsažené ve skriptu správné, dojde k zahájení importu. Celý proces může trvat několik minut. Pokud se nic nestane, ověřte informace obsažené ve skriptu a celý proces opakujte.

Po úspěšném dokončení importu doporučujeme skript i zálohu z adresáře „www“ odstranit.

### Import prostřednictvím SSH

Pro komunikaci s webhostingovým úložištěm prostřednictvím SSH je nutné použít příkazy v terminálu.

> [!warning]
>
> Tento typ připojení vyžaduje pokročilé technické znalosti. Níže naleznete pouze obecné informace týkající se postupu pro import zálohy prostřednictvím SSH. V případě jakýchkoli nejasností se prosím obraťte na profesionálního webmastera. 
>

Po připojení k úložišti prostřednictvím SSH je zapotřebí spustit příkaz pro import zálohy do databáze. Níže naleznete názorný příklad. Mějte prosím na paměti, že před spuštěním samotného příkazu je na webhostingové úložiště nutné nahrát soubor se zálohou, kterou si do databáze přejete importovat.

```sh
cat backup_filename.sql | mysql --host=server_address --user=user_name --password=user_password database_name
```

Generické proměnné ve výše uvedeném příkazu je zapotřebí nahradit informacemi o příslušné databázi. Po úspěšném dokončení importu doporučujeme zálohu z příslušného adresáře úložiště odstranit.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.