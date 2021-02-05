---
deprecated: true
title: První kroky s webhostingem
slug: prvni-kroky-s-webhostingem
excerpt: Naučte se ovládat svůj OVH webhosting
section: První kroky
order: 1
---

**Poslední aktualizace 15/02/2018**

## Cíl

Pořídili jste si webhostingové řešení OVH pro hostování svých webových stránek? Gratulujeme! Toto řešení Vám nabízí snadnou instalaci webových stránek pomocí redakčních systémů na klíč (WordPress, PrestaShop apod.), stejně tak jako plnohodnotný prostor pro vývoj Vaší vlastní platformy na nepřetržitě dostupných serverech. Ještě jednou Vám děkujeme za Vaši důvěru. V následující příručce naleznete základní instrukce pro spuštění Vašich prvních stránek na Vašem novém webhostingu OVH.

**Naučte se ovládat svůj OVH webhosting.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- E-mail s potvrzením o úspěšném dokončení instalace webhostingu.
- Doména, na níž bude váš web dostupný.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

### Fáze 1: vymezení projektu

Chystáte se vytvořit blog či e-shop? Rádi byste se podělili o svou zálibu nebo propagovali své podnikání na internetu? Chtěli byste přenést svůj stávající web k OVH? V zájmu úspěšné realizace projektu je vždy ze všeho nejdůležitější získat jasnou představu o kýženém výsledku.

S webhostingem od OVH můžete své webové stránky vytvářet i migrovat.

- **Vytvoření nových webových stránek**

 Pokud ovládáte programovací jazyky, můžete si své stránky samozřejmě vytvořit a spustit zcela sami. V opačném případě můžete využít některý z našich modulů pro správu obsahu (CMS) na jedno kliknutí. První možnost je technicky náročnější, umožňuje však vytvoření webových stránek zcela na míru Vašim individuálním požadavkům. Druhá možnost celý proces vytváření a správy webu výrazně usnadňuje, a zpřístupňuje tak tuto oblast i technickým laikům.

V Zákaznickém prostoru OVH mají naši zákazníci možnost instalace CMS modulů WordPress, PrestaShop, Drupal či Joomla na jedno kliknutí. Pokud s výběrem toho správného CMS stále ještě váháte, obraťte se na následující  [srovnání](https://www.ovh.cz/webhosting/website/porovnani-cms/){.external}. Pokud si na svůj webhosting přejete nainstalovat redakční systém, který nabídka modulů na jedno kliknutí nezahrnuje, můžete tak kdykoli učinit svépomocí.

- **Migrace existujících webových stránek k OVH**

Migrace webových stránek může být velmi citlivou a komplikovanou záležitostí, zejména pak v případech, kdy je prováděna na službách, jejichž výpadek nepřipadá v úvahu. Z toho důvodu tato příručka uvádí pouze několik kroků, které je v rámci migrace Vašich služeb nutné provést. Detailní informace týkající se migrace webových stránek naleznete v následující příručce: [Migrace webových stránek k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}.

### Fáze 2: instalace webových stránek

Jakmile si o svém projektu a jeho účelu utvoříte jasnou představu, nezbývá než se pustit do práce. Následující text popisuje postup pro spuštění Vašich stránek online.  Za tímto účelem jsou k dispozici tři možnosti různě náročné co do času i technických znalostí v dané oblasti.

#### Expresní instalace jedním kliknutím

Toto řešení využívá moduly OVH na jedno kliknutí, které umožňují snadnou a rychlou instalaci vybraného redakčního systému. Společnost OVH modul nainstaluje a zašle Vám přihlašovací údaje do Vaší e-mailové schránky.

Před instalací modulu OVH na jedno kliknutí se prosím ujistěte, že v adresáři, kam se bude modul instalovat, nejsou uloženy žádné další soubory. Za účelem instalace modulu na jedno kliknutí se přihlaste se do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V levém postranním panelu Zákaznického prostoru OVH klikněte na sekci `Hostingy`{.action} a vyberte webhosting, na nějž si přejete CMS nainstalovat. Přejděte do záložky `Moduly na jedno kliknutí`{.action} a klikněte na tlačítko `Přidat modul`{.action}.

![Přístup do sekce Moduly na jedno kliknutí](images/access_to_the_1_click_modules_section.png){/thumbnail}

Vyberte požadovaný modul, ujistěte se, že jste volbu `Instalace v expertním režimu`{.action} ponechali nezaškrtnutou a klikněte na tlačítko `Instalovat`{.action}.

Nyní stačí jen vyčkat na potvrzovací e-mail s přihlašovacími údaji do administračního rozhraní Vašeho modulu. Následně postupujte podle pokynů uvedených v další části této příručky.

Detailní informace o modulech na jedno kliknutí naleznete v následující příručce:  [Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}.

#### Pokročilá instalace nevyžadující hlubší technické znalosti

Toto řešení využívá moduly OVH, umožňující snadnou instalaci systému CMS. Společnost OVH provede instalaci Vašeho webu na základě Vámi zadaných údajů (příklad: přizpůsobení přihlašovacích údajů k CMS). Pro úspěšné dokončení instalace je zapotřebí disponovat alespoň jednou volnou databází.

Podmínky úspěšné instalace:

- Prázdný instalační adresář
- Databáze (pro vytvoření databáze na webhostingu přejděte do záložky `Databáze`{.action} a klikněte na tlačítko `Vytvoření databáze`{.action})

Detailní postup pro vytvoření databáze: 
ze všeho nejdříve přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V levém postranním panelu klikněte na sekci `Hostingy`{.action} a vyberte webhosting, v jehož rámci si databázi přejete vytvořit. V záložce `Databáze`{.action} klikněte na tlačítko `Vytvoření databáze`{.action}. Vyplňte požadované údaje a vyčkejte na dokončení instalace.

![Přístup do sekce Moduly na jedno kliknutí](images/create_a_database.png){/thumbnail}

Po úspěšném vytvoření databáze přejděte do záložky `Moduly na jedno kliknutí`{.action} a klikněte na tlačítko `Přidat modul`{.action}. Vyberte požadovaný modul, ujistěte se, že jste zaškrtli volbu `Instalace v expertním režimu`{.action} a klikněte na tlačítko `Další`{.action}.

![Přístup do sekce Moduly na jedno kliknutí](images/access_to_the_1_click_modules_section.png){/thumbnail}

Postupujte podle uvedených pokynů. Nyní stačí jen počkat na potvrzovací e-mail s přihlašovacími údaji do administračního rozhraní Vašeho modulu. Následně se řiďte pokyny uvedenými v další části této příručky.

Detailní informace o instalaci modulů na jedno kliknutí v expertním režimu naleznete v následující příručce:  [Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}.

#### Manuální instalace vyžadující technické znalosti

Toto řešení využijte tehdy, chcete-li vytvořit nebo migrovat internetové stránky bez využití předinstalovaných modulů OVH. Rozhodnete-li se vydat touto cestou, ujistěte se prosím, že máte k dispozici příslušné soubory internetových stránek, které chcete nainstalovat. Pro úspěšné dokončení manuální instalace je nutné připojit se k FTP úložišti, nahrát na něj veškeré potřebné soubory a následně stránky pokud možno připojit k dříve vytvořené databázi.

Detailní informace naleznete v následující dokumentaci: [Spuštění stránek online](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external} a [Migrace webových stránek k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}. Po úspěšné instalaci webových stránek se řiďte pokyny uvedenými v dalších částech této příručky.

### Fáze 3: vytvoření e-mailové adresy

Pokud si nepřejete používat e-mailové adresy, které jsou součástí Vašeho [webhostingového balíčku](https://www.ovh.cz/webhosting/){.external}, tuto část přeskočte. Chcete-li vytvořit více či jednu e-mailovou adresu, ujistěte se prosím, že jste přihlášeni k [Zákaznickému prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V levém postranním panelu Zákaznického prostoru OVH klikněte na sekci `E-maily`{.action} a vyberte webhosting, na němž si přejete e-mailovou adresu vytvořit. V záložce `E-maily`{.action} klikněte na tlačítko `Vytvořit e-mailovou adresu`{.action}.

![Vytvořit e-mailovou adresu](images/create_an_email_address.png){/thumbnail}

Postupujte podle jednotlivých pokynů. Chcete-li vytvořit další e-mailovou adresu, akci opakujte. Pokud si přejete migrovat své e-mailové adresy k OVH, doporučujeme využít náš nástroj [OVH Mail Migrator](https://omm.ovh.net/){.external}, který celý proces výrazně usnadňuje. 

Detailní informace týkající se správy e-mailových adres a migrace služeb k OVH naleznete v následující dokumentaci: [Jak vytvořit e-mailovou adresu](https://docs.ovh.com/cz/cs/emails/webhosting_-_e-mail_prirucka_o_vytvareni_e-mailovych_adres/){.external} a [Migrace webových stránek k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}.

### Fáze 4: ověření a úprava nastavení domény

Před pokračováním do této fáze se ujistěte, že je Váš web nainstalovaný a že máte vytvořené e-mailové adresy. V případě chybné konfigurace domény nemusí být Vaše e-mailové adresy v tomto stádiu ještě zcela funkční. To souvisí s DNS záznamy, které zaručují dostupnost Vašich internetových stránek a přijímání zpráv na e-mailové adresy pod příslušnou doménou.

Příklad: návštěvník Vašich stránek zadává do prohlížeče adresu Vašeho webu (doména). V tom momentě je zahájen DNS překlad. Jedná se o proces umožňující překlad názvu domény na IP adresu serveru, na němž je Váš web uložen. Tento proces je možný jen díky informacím obsaženým v DNS zóně, což je jakýsi druh adresáře, v němž je zaneseno nastavení Vaší domény.

Pokud jste si doménu objednali společně s webhostingem OVH a neprovedli jste žádnou změnu v její DNS zóně, můžete přeskočit k další části této příručky. V opačném případě (nebo pokud si nejste jisti) pokračujte podle následujících instrukcí.

#### OVH DNS záznamy 

Existuje několik typů OVH DNS záznamů. Nás budou nyní zajímat dva záznamy, které zaručují dostupnost Vašich internetových stránek a přijímání zpráv na e-mailové adresy pod příslušnou doménou.

- **A záznam (pro internetové stránky)**

Chcete-li znát A záznam, který je zapotřebí nastavit v DNS zóně Vaší domény, přihlaste se do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V levém postranním panelu klikněte na sekci `Hostingy`{.action} a vyberte požadovaný webhosting. V záložce `Základní informace`{.action} si zkopírujte uvedenou IPv4 adresu.

![Úprava A záznamu](images/know_the_OVH_A_records.png){/thumbnail}

- **MX záznam (pro e-maily)**

Chcete-li znát MX záznam, který je zapotřebí nastavit v DNS zóně Vaší domény, přihlaste se do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V levém postranním panelu klikněte na sekci `E-maily`{.action} a vyberte požadovaný webhosting. V záložce `Základní informace`{.action} si zkopírujte informace uvedené pod hlavičkou „MX pole“. MX záznamy se mohou mezi jednotlivými službami lišit podle toho, jaký DNS filtr se rozhodnete použít.

![Úprava MX záznamu](images/know_the_OVH_MX_records.png){/thumbnail}

#### Ověření a/nebo modifikace DNS záznamu

Nyní, když znáte DNS záznamy pro svůj webhosting OVH, je třeba je ověřit a v případě potřeby i upravit. Postupy se liší podle toho, jaký projekt realizujete.

- **Objednávka domény s webhostingem OVH**

V tomto případě je Vaše doména již nakonfigurována správně. Můžete přeskočit k další části této příručky. Pokud jste však v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} provedli změny v DNS zóně své domény, je možné, že doména již není nakonfigurována správně.
    
Pro zobrazení konfiguračního rozhraní DNS zóny své domény přejděte do sekce `Domény`{.action} a vyberte požadovanou doménu. V záložce `DNS zóna`{.action}ověřte a upravte potřebné informace.

- **Doména nepoužívající OVH DNS**
    
Ověřte DNS u poskytovatele domény. Je-li to nutné, údaje upravte.

- **Migrace služeb (webové stránky a e-mailové adresy) k OVH**

V takovémto případě mohou úpravy v DNS zóně zapříčinit nedostupnost Vašich služeb, pokud nejsou provedeny ve správný okamžik. Mějte prosím na paměti, že jako poslední část migračního procesu musíte upravit DNS servery své domény. Detailní informace naleznete v následující příručce: [Migrace webových stránek k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}.

> [!primary]
>
> Propagace změn v DNS zóně může trvat 4 až 24 hodin.
>

### Fáze 5: přizpůsobení webu

Váš web je nyní dostupný. Tuto část přeskočte, pokud jste provedli migraci již existujícího a tedy i přizpůsobeného webu. Pokud jste však právě nainstalovali nové webové stránky (například pomocí našich modulů), můžete je přizpůsobit úpravou motivu a publikací prvního obsahu.

Informace týkající se jednotlivých funkcí svého webu naleznete v oficiální dokumentaci vydavatele Vašeho CMS, kterou naleznete na příslušných webových stránkách.

### Fáze 6: používání e-mailových adres

Nyní již nezbývá než začít naplno využívat své e-mailové adresy. Za tímto účelem můžete vyzkoušet webovou aplikaci OVH (webmail) s názvem RoundCube. OVH webmail je dostupný  na následující adrese: <https://mail.ovh.net/>. Pro přihlášení použijte identifikační údaje e-mailové adresy vytvořené prostřednictvím Zákaznického prostoru OVH.

Detailní informaci o aplikaci RoundCube naleznete v následující příručce: [Použití aplikace RoundCube](https://docs.ovh.com/fr/emails/utilisation-roundcube/){.external}. Pokud si svůj e-mail přejete nakonfigurovat na externím e-mailovém klientu, smartphonu či tabletu, podívejte se do následující dokumentace: <https://docs.ovh.com/fr/emails/>

## Kam dál

[Migrace webových stránek k OVH](https://docs.ovh.com/cz/cs/hosting/migrace-stranek-k-ovh/){.external}

[Spuštění stránek online](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external}

[Moduly na jedno kliknutí](https://docs.ovh.com/cz/cs/hosting/moduly-na-jedno-kliknuti/){.external}

[Jak vytvořit e-mailovou adresu](https://docs.ovh.com/cz/cs/emails/webhosting_-_e-mail_prirucka_o_vytvareni_e-mailovych_adres/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.