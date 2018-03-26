---
title: Konfigurace služby E-mail Pro
slug: prvotni-nastaveni
excerpt: Zjistěte, jak nastavit svou službu E-mail Pro
section: Obecné
---

**Poslední aktualizace 19/03/2018**

## Cíl

Právě jste si zakoupili službu E-mail Pro, v jejímž rámci získáváte přístup k profesionálním e-mailovým adresám za ty nejlepší ceny na trhu.

**Zjistěte, jak na správnou konfiguraci služby E-mail Pro.**

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- E-mail s potvrzením o úspěšném dokončení instalace Vaší služby.
- Doména.
- Přístup do [Zákaznického prostoru OVH](https://ovh.com/auth/?action=gotomanager){.external}.

## Postup

### Fáze 1: přístup do rozhraní pro správu služby

Jakmile je služba E-mail Pro vytvořena a dostupná, můžete ji začít spravovat prostřednictvím [Zákaznického prostoru OVH](https://ovh.com/auth/?action=gotomanager){.external}.

V levém postranním panelu vyberte sekci `E-mail Pro`{.action} a následně klikněte na požadovanou službu.

> [!primary]
>
> Název služby E-mail Pro v Zákaznickém prostoru OVH vždy začíná předponou *emailpro-*, obsahuje část Vašeho zákaznického identifikátoru (NIC-handle) a končí číslicí (1 pro první nainstalovanou službu E-mail Pro, 2 pro druhou atd.).
>

### Fáze 2: přidání domény

Po objednání služby E-mail Pro se automaticky otevře okno s výzvou pro `Přidání domény`{.action}. Pokud se tak nestane, přejděte do záložky `Asociované domény`{.action} a klikněte na tlačítko `Přidat doménu`{.action}.

Budete požádáni o volbu mezi následujícími možnostmi:

- **Zvolte doménu ze seznamu**: vybírat můžete pouze z domén, které jsou asociovány s Vaším zákaznickým identifikátorem a které používají konfiguraci OVH.
- **Přidat externí doménu**: pro správnou funkčnost služby E-mail Pro musíte být schopni provádět úpravy v nastavení externí domény (DNS zóna).

Vyberte jednu z možností a klikněte na tlačítko `Další`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

V následujícím kroku se zobrazí informace týkající se konfigurace režimu domény.

- **Pokud jste zadali doménu, která není spravována společností OVH**: doména bude  nakonfigurována v neautoritativním režimu.
- **Pokud jste vybrali doménu OVH ze seznamu**: je zapotřebí vybrat mezi autoritativním a neautoritativním režimem.

|Režim|Popis|
|---|---|
|Autoritativní|Vyberte, pokud na dané doméně budete používat výhradně řešení E-mail Pro. Autoritativní režim nedovoluje použití jiného e-mailového řešení společně se službou E-mail Pro.|
|Neautoritativní|Vyberte, pokud na dané doméně budete společně se službou E-mail Pro používat i další e-mailová řešení.| 

> [!primary]
>
> Zvolený režim můžete prostřednictvím Zákaznickém prostoru OVH kdykoli změnit.
>

Pokračujte kliknutím na tlačítko `Další`{.action}.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Pokud jste zadali doménu spravovanou společností OVH**, její konfigurace bude moci být provedena automaticky. Za tímto účelem zaškrtněte příslušná políčka a klikněte na tlačítko Další.

**Pokud jste zadali externí doménu**, budete její konfiguraci muset provést manuálně.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

V poslední části konfiguračního procesu ověřte zadané informace a klikněte na tlačítko `Schválit`{.action}. Následně bude zahájen proces přidání domény.

### Fáze 3: konfigurace domény

Po připojení domény k řešení E-mail Pro (záložka asociované domény) se pomocí tabulky v administračním rozhraní služby ujistěte, zda je doména nakonfigurována správně.

Kolonka `Diagnostika`{.action} indikuje správnost konfigurace. Je-li zapotřebí konfiguraci upravit, objeví se červené políčko.

- **Pokud jste při přidávání domény zvolili automatickou konfiguraci**: zobrazení v Zákaznickém prostoru OVH může trvat několik hodin. 
- **Pokud jste přidali externí doménu**: pro zobrazení úprav, které je zapotřebí provést, klikněte na červené políčko. Pokud jste požadované úpravy právě provedli, jejich zobrazení v Zákaznickém prostoru OVH může trvat několik hodin.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### Fáze 4: nastavení účtů služby E-mail Pro

Pro konfiguraci svých e-mailových adres přejděte do záložky `E-mailové účty`{.action}.
 Tabulka nabízí přehled objednaných účtů. Všechny účty jsou ve výchozím nastavení uvedeny ve tvaru „@configureme.me“.

Za účelem konfigurace jednotlivých účtů klikněte na logo tužky v příslušném řádku.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Vyplňte požadované informace.

|Název|Popis|
|---|---|
|E-mailový účet|Zadejte požadovaný tvar e-mailové adresy (např. Vaše jméno.příjmení) a vyberte příslušnou doménu ze seznamu. |
|Jméno|Vyplňte křestní jméno.|
|Příjmení|Vyplňte příjmení.|
|Zobrazované jméno|Zadejte jméno, které bude při odesílání e-mailů z tohoto účtu uvedeno jako odesílatel. |
|Heslo a potvrzení|Zadejte heslo a potvrďte jej.| 

Jakmile jsou informace kompletní, klikněte na tlačítko `Další`{.action}, ověřte zobrazené informace a klikněte na tlačítko `Schválit`{.action}. Následně započne proces konfigurace účtu.

> [!primary]
>
> V závislosti na počtu Vašich účtů tuto fázi opakujte tolikrát, kolikrát je zapotřebí,  Účty si můžete kdykoli doobjednat kliknutím na tlačítko `Objednávka účtů`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Fáze 5: používání e-mailových adres

Jakmile jsou Vaše účty nakonfigurovány, nezbývá než začít je naplno využívat! Za tímto účelem můžete vyzkoušet webovou aplikaci OVH (*Webmail*). OVH Webmail je dostupný na následující adrese: [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. Pro přihlášení použijte identifikační údaje e-mailové adresy vytvořené prostřednictvím Zákaznického prostoru OVH.

Pokud si svůj e-mail přejete nakonfigurovat na externím e-mailovém klientu, smartphonu či tabletu, podívejte se do následující dokumentace: [https://docs.ovh.com/cz/cs/emails-pro/](https://docs.ovh.com/cz/cs/emails-pro/){.external}.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com](https://community.ovh.com){.external}.