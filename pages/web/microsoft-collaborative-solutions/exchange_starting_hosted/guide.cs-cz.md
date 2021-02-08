---
deprecated: true
title: První kroky se službou Hosted Exchange
slug: prvotni-konfigurace-hosted-exchange
excerpt: Naučte se ovládat svou službu Hosted Exchange
section: Konfigurace služby Exchange
order: 1
---

**Poslední aktualizace 21/03/2018**

## Cíl

Služba Hosted Exchange nabízí profesionální e-mailové účty a široké spektrum funkcí pro týmovou spolupráci, jako např. synchronizovaný kalendář či adresář.

**Naučte se ovládat svou službu Hosted Exchange.**

## Prerekvizity

- Předplatné služby [Hosted Exchange](https://www.ovh.cz/emails/hosted-exchange/){.external}.
- E-mail s potvrzením o úspěšném dokončení instalace služby Hosted Exchange.
- Doména.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

### Fáze 1: přístup do rozhraní pro správu služby

Jakmile je služba Hosted Exchange vytvořena a dostupná, můžete ji začít spravovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

Připojte se do Zákaznického prostoru, v levém postranním panelu klikněte na sekci `Microsoft`{.action} a následně vyberte `Exchange`{.action}. Ze seznamu vyberte požadovanou službu Hosted Exchange.

> [!primary]
>
> Název služby Hosted Exchange v Zákaznickém prostoru OVH vždy začíná předponou **hosted-**, obsahuje část Vašeho zákaznického identifikátoru (NIC-handle) a končí číslicí (1 pro první nainstalovanou službu Hosted Exchange, 2 pro druhou atd.).
>

### Fáze 2: prvotní konfigurace služby

Než budete službu Hosted Exchange moci začít naplno využívat, budete muset provést prvotní konfiguraci. Jakmile tak učiníte, budete moci začít používat své nové e-mailové adresy Exchange.

Jakmile poprvé vstoupíte do základního rozhraní pro administraci služby Hosted Exchange, spustí se Průvodce nastavením služby. Pokračujte kliknutím na tlačítko `Začít`{.action}.

Průvodce nastavením služby Vám umožní provést několik úprav. V závislosti na Vašich individuálních požadavcích může následující tabulka učinit některé fáze této příručky volitelnými.

|Nastavení|Popis|
|---|---|
|Výběr domény|Vyberte doménu, kterou si přejete se svými e-mailovými adresami Exchange používat. Jedná se o jeden z hlavních prvků zakládajících konečnou podobu Vaší e-mailové adresy (jako např. kontakt@mojedomena.ovh).|
|Konfigurace domény|Pokud je doména spravována společností OVH a je vedena pod stejným zákaznickým identifikátorem, jako služba Exchange, bude její konfigurace provedena automaticky. V opačném případě je nutné doménu nakonfigurovat manuálně.|
|Konfigurace účtů Exchange|Určete název svých e-mailových adres Exchange a vložte dodatečné informace.|
|Migrace dat (volitelné)|Pokud si přejete migrovat e-mailové adresy z jiného e-mailového řešení OVH (MX Plan nebo E-mail Pro), můžete migraci spustit pomocí průvodce nastavením služby. Pokud používáte e-mailového klienta, budete zde muset své účty opětovně nakonfigurovat.|

### Fáze 3: přidání dalších domén (volitelné)

Pokud si budete po dokončení prvotní konfigurace své domény prostřednictvím Průvodce nastavení služby přát přidat další domény, řiďte se následujícími pokyny:

> [!warning]
>
> Všechny adresy vytvořené na službě Exchange mohou zobrazit ostatní asociované adresy, a to včetně těch, které mají jinou doménu. Pokud si pro některé domény přejete toto zobrazování deaktivovat, musíte si pro ně objednat novou službu Hosted Exchange.
>

Za účelem přidání nové domény přejděte do sekce `Asociované domény`{.action} v základním rozhraní pro správu služby Hosted Exchange.  Zobrazí se tabulka obsahující přehled domén, které jsou k Vaší službě aktuálně připojeny.  Pro přidání nové domény klikněte na tlačítko `Přidat doménu`{.action} a postupujte podle uvedených instrukcí.

Detailní informace naleznete v následující příručce: [Přidání domény ke službě Exchange](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/pridani-domeny-exchange/){.external}.

> [!primary]
>
> Pokud doména pro správnou funkčnost se službou Exchange vyžaduje úpravu konfigurace, zobrazí se v kolonce `Diagnostika`{.action} červené políčko. Kliknutím na toto políčko získáte informace o úpravách, které je v konfiguraci dané domény potřeba provést. Pokud Vaše doména není nakonfigurována na DNS servery OVH, musíte změny provést pomocí rozhraní pro správu domény u Vašeho současného poskytovatele. 
>

![Přidání domény](images/first-steps-hosted-exchange-add-domain.png){.external}

### Fáze 4: konfigurace dalších účtů Exchange (volitelné)

Pokud si ke službě přejete přidat další účty, řiďte se následujícími pokyny:

V základním administračním rozhraní služby Hosted Exchange přejděte do záložky `E-mailové účty`{.action}. Zobrazí se tabulka obsahující přehled účtů, které jsou na Vaší službě aktuálně nakonfigurovány, a účtů, které na konfiguraci teprve čekají.

Účty čekající na konfiguraci jsou v tabulce uvedeny ve formě “*@configureme.me*”. Za účelem konfigurace účtu klikněte na logo tužky v příslušném řádku tabulky.

> [!primary]
>
> V závislosti na počtu Vašich účtů tuto fázi opakujte tolikrát, kolikrát je zapotřebí. Nové účty je možné objednat kliknutím na tlačítko `Objednávka účtů`{.action}.
>

![Přidání účtu](images/first-steps-hosted-exchange-add-account.png){.external}

### Fáze 5: používání e-mailových adres

Jakmile jsou Vaše účty nakonfigurovány, nezbývá než začít je naplno využívat! Za tímto účelem můžete vyzkoušet webovou aplikaci OVH Webmail **Outlook Web Application** (OWA), která je dostupná na následující adrese: <https://www.ovh.cz/mail/>. Pro přihlášení jednoduše zadejte přístupové údaje ke své e-mailové adrese. Detailní informace o nástroji OWA naleznete v následující dokumentaci: <https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/>.

Pokud si svůj e-mail přejete nakonfigurovat na externím e-mailovém klientu, smartphonu či tabletu, podívejte se do následující dokumentace: <https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/>. Pro optimální výkon vždy prosím ověřte kompatibilitu používaného softwaru se službou Exchange.

Licence Outlook si můžete objednat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Licence Office 365 si můžete objednat na webových stránkách <https://www.ovh.cz/office-365/>. 

> [!primary]
>
> Exchange umožňuje kompletní synchronizaci nastavení (filtry, podpisy, složky apod.), nezávisle na tom, zda se přihlašujete pomocí webového rozhraní či kompatibilního softwaru.
> Pokud se tedy ke službě Exchange přihlásíte ze tří různých zařízení pomocí tří různých rozhraní (webmail, kompatibilní software či e-mailový klient), budete mít všechna svá nastavení vždy neustále k dispozici. 
>

### Fáze 6: konfigurace funkcí pro týmovou spolupráci (volitelné)

Jakmile je Vaše služba Hosted Exchange nakonfigurována a plně funkční, můžete v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} začít spravovat funkce pro týmovou spolupráci. Díky těmto funkcím budete moci vytvářet nové zdroje (konferenční místnosti, vybavení apod.), skupiny a další.

Pro jejich aktivaci přejděte do základního rozhraní pro správu služby Hosted Exchange a klikněte na příslušnou záložku.

Detailní informace o jednotlivých funkcích naleznete v následující dokumentaci: <https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/>.

![Funkce pro týmovou spolupráci](images/first-steps-hosted-exchange-intro-to-functions.png){.external}


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.