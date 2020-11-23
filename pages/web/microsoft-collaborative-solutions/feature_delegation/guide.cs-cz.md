---
deprecated: true
title: 'Delegace přístupových práv na účtu služby Exchange'
slug: exchange-ucet-pristupova-prava
excerpt: 'Zjistěte, jak delegovat oprávnění na exchangovému účtu'
section: 'Funkce a sdílení Exchange'
---

**Poslední aktualizace 29/08/2018**

## Cíl

Služba Exchange nabízí profesionální e-mailové adresy s širokým spektrem funkcí pro týmovou spolupráci. Jednu z těchto funkcí představuje možnost delegovat specifická oprávnění (jako např. přístup či odesílání) napříč jednotlivými uživatelskými účty Exchange.

**Zjistěte, jak přidělit oprávnění k exchangovému účtu.**

## Prerekvizity

- Služba [Exchange](https://www.ovh.cz/emails/){.external}.
- Minimálně dva aktivní Exchange účty nakonfigurované na platformě OVH Exchange.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager).
- Přístupové údaje k účtu, kterému mají být nová práva přidělena.

## Postup

Ze všeho nejdříve si ujasněte, jaká oprávnění si pro daný účet přejete delegovat. Připomínáme, že nastavením delegace přidělíte jednomu nebo několika Exchangem účtům dodatečná práva na delegovaném účtu.

|Oprávnění|Popis|
|---|---|
|Odeslat jako|Umožní odesílat e-maily „jako“ daný účet. Jakožto odesílatel nebude uveden účet, ze kterého byl e-mail odeslán, nýbrž účet, pro nějž má odesílatel delegováno právo na odesílání v režimu „odeslat jako“. Původní odesílatel je v tomto případě nezjistitelný.|
|Odeslat z|Umožní odesílat e-maily „z“ daného účtu. Jakožto odesílatel nebude uveden účet, ze kterého byl e-mail odeslán, nýbrž účet, pro nějž má odesílatel delegováno právo na odesílání v režimu „odeslat jako“. E-mail je však opatřen poznámkou, indikující, že původní odesílatel se liší.|
|Přístupové oprávnění|Přidělí příslušnému účtu přístup k delegovanému účtu v režimu „read-only“. Uživatel s tímto oprávněním má přístup k obsahu, ale nemůže provádět žádné změny či odesílat e-maily.|

> [!warning]
>
> Oprávnění „odeslat jako“ a „odeslat z“ nelze kombinovat. Všechny ostatní kombinace jsou však dostupné.
> 

 

### Fáze 1: ustavení delegace

Přihlaste se do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. V levém postranním panelu otevřete nabídku `Microsoft`{.action} a klikněte na tlačítko `Exchange`{.action}. Ze seznamu dostupných služeb zvolte tu, na níž je vytvořen účet, pro který si přejete zřídit delegaci. V základním rozhraní pro správu služby Exchange přejděte do záložky E-mailové účty.

Tabulka obsahuje přehled e-mailových účtů vytvořených v rámci příslušné služby Exchange. U e-mailového účtu, pro nějž si přejete zřídit delegaci, klikněte na ikonku tří teček `(...)`{.action} a z nabídky vyberte možnost `Spravovat delegace`{.action}.

![delegation](images/delegation-step1.png){.thumbnail}

V dialogovém okně vyberte práva, která si přejete delegovat. Klikněte na tlačítko `Další`{.action}.

![delegation](images/delegation-step2.png){.thumbnail}

Ověřte zadané údaje a klikněte na tlačítko `Schválit`{.action}. Delegace na našich serverech se vytvoří v rámci několika minut.

Jakmile je delegace vytvořena, účet *test1@mojedomena.ovh* může provádět příslušné akce na účtu *test2@mojedomena.ovh*.

### Fáze 2: používání delegovaných oprávnění

Ze všeho nejdříve se ujistěte, že disponujete přístupovými údaji k účtu Exchange, pro nějž byla nová delegace vytvořena.

Použití delegovaných oprávnění se liší v závislosti na typu delegovaných práv a e-mailovém klientovi, kterého používáte pro přístup ke svému účtu Exchange. Detailní informace o použití jednotlivých typů delegovaných oprávnění nelzenete v následujících částech této příručky:

- [2.1 Přístupové oprávnění](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/exchange-ucet-pristupova-prava/#21-pristupove-opravneni){.external}

- [2.2 "Odeslat jako"](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/exchange-ucet-pristupova-prava/#22-odeslat-jako){.external}

- [2.3 "Odeslat z"](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/exchange-ucet-pristupova-prava/#23-odeslat-z){.external}

> [!warning]
>
> Toto řešení vyžaduje znalost softwaru či webového rozhraní, které používáte pro přístup ke svému Exchange účtu. Níže naleznete pouze obecné informace týkající se zacházení s danými rozhraními. Z toho důvodu se v případě jakýchkoli nejasností doporučujeme obrátit na profesionálního webmastera. Společnost OVH v tomto ohledu neposkytuje přímou podporu.
>

#### 2.1 Přístupové oprávnění

- **Outlook Web Application (OWA)**

Přejděte na stránku <https://www.ovh.cz/mail/> a přihlaste se k účtu disponujícímu delegovanými oprávněními. V levém postranním panelu klikněte pravým tlačítkem myši na název účtu a vyberte možnost `Přidat sdílenou složku`{.action}.

Zadejte název delegovaného účtu a klikněte na tlačítko `Přidat`{.action}. Přidaný účet se zobrazí v levém postranním panelu, kde si následně budete moci prohlížet jeho obsah.

![delegation](images/delegation-step3.png){.thumbnail}

- **Outlook pro Windows**

V aplikaci Outlook 2016 přejděte do záložky `Soubor`{.action} v levém horním rohu obrazovky a klikněte na tlačítko `Nastavení účtu`{.action}. Z rozbalovací nabídky vyberte možnost `Nastavení účtu`{.action}. V dialogovém okně vyberte účet s delegovanými oprávněními a klikněte na tlačítko `Změnit`{.action}. 

![delegation](images/delegation-step4.png){.thumbnail}

Nyní klikněte na tlačítko `Další nastavení...`{.action}. V novém dialogovém okně přejděte do záložky `Pokročilé nastavení`{.action} a klikněte na tlačítko `Přidat`{.action}. Zadejte název e-mailového účtu, pro nějž máte delegovaná oprávnění a pokračujte. Přidaný účet se zobrazí v levém postranním panelu, kde si následně budete moci prohlížet jeho obsah.

![delegation](images/delegation-step5.png){.thumbnail}

#### 2.2 „Odeslat jako“

- **Outlook Web Application (OWA)**

Přejděte na stránku <https://www.ovh.cz/mail/> a přihlaste se k účtu disponujícímu delegovanými oprávněními. Začněte psát nový e-mail kliknutím na tlačítko `+Nový`{.action}.

Klikněte na ikonku tří teček (...) v horní nabídkové liště a vyberte možnost `Zobrazit odesílatele`{.action}. Nyní klikněte na tlačítko `Od`{.action} a v rozbalovací nabídce zvolte účet, který má být zobrazen jako odesílatel příslušného e-mailu.  

 

![delegation](images/delegation-step6.png){.thumbnail}

- **Outlook pro Windows**

Začněte psát nový e-mail. Ujistěte se, že redakční okno obsahuje kolonku `Od`{.action}. Pokud se kolonka nezobrazuje, přejděte do záložky `Možnosti`{.action} a klikněte na tlačítko `Od`{.action}.

Nyní klikněte na tlačítko `Od`{.action} a v rozbalovací nabídce zvolte účet, který má být zobrazen jako odesílatel příslušného e-mailu.  

 

![delegation](images/delegation-step7.png){.thumbnail}

#### 2.3 „Odeslat z“

- **Outlook Web Application (OWA)**

Přejděte na stránku <https://www.ovh.cz/mail/> a přihlaste se k účtu disponujícímu delegovanými oprávněními. Začněte psát nový e-mail kliknutím na tlačítko `+Nový`{.action}.

Klikněte na ikonku tří teček `(...)`{.action} v horní nabídkové liště a vyberte možnost `Zobrazit odesílatele`{.action}. Nyní klikněte na tlačítko `Od`{.action} a v rozbalovací nabídce zvolte účet, který má být zobrazen jako odesílatel příslušného e-mailu.  

 

![delegation](images/delegation-step6.png){.thumbnail}

- **Outlook pro Windows**

Začněte psát nový e-mail. Ujistěte se, že redakční okno obsahuje kolonku `Od`{.action}. Pokud se kolonka nezobrazuje, přejděte do záložky `Možnosti`{.action} a klikněte na tlačítko `Od`{.action}.

Nyní klikněte na tlačítko `Od`{.action} a v rozbalovací nabídce zvolte účet, který má být zobrazen jako odesílatel příslušného e-mailu.  

 

![delegation](images/delegation-step7.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.