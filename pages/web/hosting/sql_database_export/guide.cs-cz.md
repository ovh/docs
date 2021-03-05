---
deprecated: true
title: 'Vytvoření a export zálohy webhostingové databáze'
slug: export-databaze
excerpt: 'Zjistěte, jak vytvořit a exportovat databázovou zálohu na webhostingu OVH'
section: Databáze
order: 3
---

**Poslední aktualizace 29/06/2018**

## Cíl

Databáze umožňují ukládání tzv. dynamických prvků (uživatelé, komentáře, příspěvky, články apod.). Databáze jsou v současné době využívány většinou systémů pro správu obsahu neboli CMS (WordPress, Joomla! apod.). Za určitých okolností může nastat situace, v níž budete pro případ pozdějšího obnovení své databáze potřebovat vytvořit její zálohu.

**Zjistěte, jak vytvořit a exportovat databázovou zálohu na webhostingu OVH.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Databáze vytvořená v rámci [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}.
- V závislosti na zvolené zálohovací metodě budete potřebovat přístup do administračního rozhraní příslušného webhostingu prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, nebo alespoň přihlašovací údaje pro připojení k příslušné databázi.

## Postup

Než začnete, rozhodněte se, kterou metodu pro export databázové zálohy použijete. Za tímto účelem je k dispozici několik možností, které se vzájemně liší co do časové náročnosti a technických znalostí v dané oblasti.

- **Export zálohy prostřednictvím Zákaznického prostoru**: toto řešení umožňuje stažení záloh Vašich databází pomocí [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Tato metoda nevyžaduje žádné specifické technické znalosti a lze je iniciovat prostřednictvím Zákaznického prostoru OVH.

- **Export zálohy prostřednictvím webového rozhraní phpMyAdmin**: toto řešení vyžaduje znalost rozhraní phpMyAdmin. 

- **Export zálohy prostřednictvím skriptu**: toto řešení vyžaduje vytvoření skriptu na webhostingu OVH a předpokládá vyšší úroveň technických znalostí. 

- **Export zálohy prostřednictvím SSH:** toto řešení vyžaduje připojení prostřednictvím protokolu SSH a znalost jednotlivých příkazů. Je předpokládána vysoká úroveň technických znalostí a specifický [webhostingový balíček OVH](https://www.ovh.cz/webhosting/){.external}. 

Některé z výše uvedených metod nejsou zahrnuty v administračním rozhraní služeb OVH. Pokud se některou z nich rozhodnete použít, bude úspěšné dokončení procesu záviset pouze na Vašich technických dovednostech. V další části této příručky naleznete základní instrukce pro použití těchto metod. Tyto informace však nelze chápat jako náhradu za asistenci profesionálního webmastera. 

V závislosti na zvolené metodě přejděte do příslušné části této příručky.

> [!warning]
>
> Společnost OVH Vám dává k dispozici služby, za jejichž správu a konfiguraci nesete plnou odpovědnost.  
>
> Tato příručka slouží jako úvod do obecné problematiky vážící se ke správě Vaší služby. V případě jakýchkoli nejasností doporučujeme kontaktovat profesionálního webmastera. Další informace naleznete v poslední sekci této příručky.
>

### Export zálohy prostřednictvím Zákaznického prostoru

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu webhostingu klikněte na záložku `Databáze`{.action}.

Tabulka obsahuje přehled všech databází vytvořených na příslušném webhostingu. V závislosti na tom, zda si přejete vytvořit novou zálohu nebo exportovat již existující zálohu, postupujte podle následujících instrukcí:

#### Fáze 1: vytvoření nové zálohy

V záložce `Databáze`{.action} klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Vytvořit zálohu`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

V dialogovém okně zvolte datum pro požadovanou zálohu a klikněte na tlačítko `Další`{.action}.
Ověřte správnost zadaných parametrů a klikněte na tlačítko `Schválit`{.action}.

Vyčkejte na dokončení procesu. Záloha je k dispozici ke stažení ihned po jejím vytvoření.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Fáze 2: export databázové zálohy

V záložce databáze klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Obnovení zálohy`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

Zobrazí se přehled všech dostupných záloh příslušné databáze. Tabulka obsahuje informace o datu vytvoření zálohy a dni, kdy dojde k jejímu automatickému odstranění z nástroje OVH.

Pro stažení zálohy klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Stáhnout zálohu`{.action}. Potvrďte a vyčkejte na stažení souboru. 

![databasedump](images/database-dump-step5.png){.thumbnail}

### Export zálohy prostřednictvím webového rozhraní phpMyAdmin

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu webhostingu klikněte na záložku `Databáze`{.action}.

Tabulka obsahuje přehled všech databází vytvořených na příslušném webhostingu. Klikněte na ikonku tří teček v pravé části tabulky a vyberte možnost `Jít do phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

V nově otevřené záložce vyplňte informace o databázi a v rozbalovací nabídce vyberte, zda si přejete zobrazit data z aktuální verze databáze (Current) nebo z předešlé zálohy. Následně klikněte na tlačítko `Proveď`. Po přihlášení do rozhraní přejděte do záložky `Export`{.action}. Na výběr máte ze dvou metod exportu:

- **Rychlá metoda:** můžete zvolit formát exportované zálohy. Nejčastěji používaným formátem je SQL. V závislosti na svých individuálních potřebách však můžete zvolit i jiný formát.

- **Pokročilá metoda:** můžete definovat detailní parametry exportu.

> [!warning]
>
> Jelikož rozhraní phpMyAdmin není produktem společnosti OVH, budete se při provádění úprav muset spolehnout na své vlastní znalosti a zkušenosti. Z toho důvodu se v případě jakýchkoli nejasností doporučujeme obrátit na profesionálního webmastera. 
>

### Export prostřednictvím skriptu

Proces je rozdělen do několika fází. Ujistěte se, že máte k dispozici přihlašovací údaje,jejichž prostřednictvím se lze k databázi připojit: uživatelské jméno, heslo, název databáze a adresa serveru.

> [!warning]
>
> Toto řešení vyžaduje vyšší míru technických znalostí a programátorských dovedností. Níže naleznete pouze obecné informace týkající se postupu pro import zálohy prostřednictvím skriptu. V případě jakýchkoli nejasností se prosím obraťte na profesionálního webmastera. 
>

#### Fáze 1: vytvoření zálohovacího skriptu

První krok sestává z napsání samotného skriptu, který lze použít pro vytvoření zálohy Vaší databáze. Následuje příklad takového skriptu, který však nelze substituovat za pomoc profesionálního webmastera:

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password database_name > backup_filename.sql");
?>
```

Generické proměnné ve výše uvedeném příkladu je zapotřebí nahradit informacemi o příslušné databázi. Jakmile skript dokončíte, doporučujeme ho pojmenovat například jako „backup.php“.

|Informace|Informace, kterou je zapotřebí dosadit|
|---|---|
|server_address|Adresa databázového serveru|
|user_name|Uživatel s přístupovými právy k databázi|
|user_password|Uživatelské heslo|
|database_name|Název databáze|
|backup_file_name|Název zálohy|

> [!primary]
>
> Zpětnou zálohu je možné vytvořit přidáním portu. Pro vytvoření zálohy z předešlého dne použijte port „3307“. Pro vytvoření zálohy z předešlého týdne použijte port „3317“. 
> 
> Použitím portu „3306“ vytvoříte zálohu aktuální verze databáze.
>

#### Fáze 2: upload skriptu na webhostingové úložiště

Jakmile je skript vytvořen, je zapotřebí ho nahrát na webhostingové úložiště. Za tímto účelem se k úložišti musíte připojit. Detailní informace o připojení k webhostingovému úložišti naleznete ve druhém kroku následující příručky: [Zveřejnění webových stránek online](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external}.

Skript je zapotřebí nahrát do adresáře „www“. **Při pojmenovávání skriptu buďte opatrní.** Ujistěte se, že při nahrávání skriptu na úložiště nepřepíšete soubor se stejným názvem. Pokud se při nahrávání souboru zobrazí varování týkající se možného přepsání, skript přejmenujte a celou akci zopakujte.

#### Fáze 3: spuštění skriptu

Po uploadu skriptu na webhostingové úložiště nezbývá než skript spustit. 

Za tímto účelem zadejte do adresního řádku svého prohlížeče úplnou URL adresu příslušného skriptu (např.: madomena.ovh/backup.php). Pokud jsou informace obsažené ve skriptu správné, dojde k vytvoření zálohy. Celý proces může trvat několik minut. Pokud se nic nestane, ověřte informace obsažené ve skriptu a celý proces opakujte.

#### Fáze 4: stažení zálohy z webhostingového úložiště

Záloha je k dispozici ke stažení v adresáři, do nějž byl v předcházející fázi nahrán skript. Zálohu si jednoduše stáhněte do svého počítače. 

Po úspěšném exportu doporučujeme skript i zálohu z adresáře „www“ odstranit.

> [!primary]
>
> Použití zálohovacího skriptu a funkce pro plánování úloh (CRON) představuje jeden ze způsobů pro automatizaci vytváření záloh na Vaší databázi. Detailní informace o plánování úloh naleznete v následující dokumentaci: [Webhosting: naplánované úlohy (CRON)](https://docs.ovh.com/gb/en/hosting/hosting_automated_taskscron/){.external}.
>

### Export prostřednictvím SSH

Pro komunikaci s webhostingovým úložištěm prostřednictvím SSH je nutné použít příkazy v terminálu.

> [!warning]
>
> Tento typ připojení vyžaduje pokročilé technické dovednosti. Níže naleznete pouze obecné informace týkající se postupu pro vytvoření a export zálohy prostřednictvím SSH. V případě jakýchkoli nejasností se prosím obraťte na profesionálního webmastera. 
>

Po připojení k úložišti prostřednictvím SSH je zapotřebí spustit příkaz pro vytvoření databázové zálohy. Níže naleznete názorný příklad. Mějte prosím na paměti, že záloha bude vytvořena v adresáři, který je při zadávání příkazu aktivní.

```sh
mysqldump --host=server_address -- user=user_name --password=user_password database_name > backup_filename.sql
```

Generické proměnné ve výše uvedeném příkazu je zapotřebí nahradit informacemi o příslušné databázi. Po dokončení procesu je záloha k dispozici ke stažení do Vašeho počítače.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.