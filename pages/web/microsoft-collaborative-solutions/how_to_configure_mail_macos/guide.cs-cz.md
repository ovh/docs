---
deprecated: true
title: Konfigurace účtů služby Exchange na e-mailovém klientu macOS
slug: konfigurace-exchange-macos
excerpt: Seznamte se s postupem pro konfiguraci účtů služby Exchange na macOS El Capitan, Sierra a High Sierra
section: Konfigurace e-mailového klienta Exchange
---

**Poslední aktualizace 19/03/2018**

## Cíl

Účty služby Exchange je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat s aplikací dle vlastního výběru a těžit přitom ze všech výhod funkcí pro týmovou spolupráci, obsažených ve službě Exchange.

**Zjistěte, jak nakonfigurovat účty služby Exchange na e-mailovém klientu macOS El Capitan, Sierra a High Sierra**


## Prerekvizity

- Služba [Exchange](https://www.ovh.cz/emails/){.external}.
- E-mailový klient na zařízení s operačním systémem macOS (aplikace Mail).
- Přihlašovací údaje k účtu, který si přejete propojit s e-mailovým klientem.

> [!primary]
>
> Tato příručka popisuje postup pro konfiguraci účtů služby Exchange na následujících verzích operačního systému macOS: El Capitan, Sierra a High Sierra.
>

## Postup

Konfiguraci lze provést dvěma různými způsoby:

- **Prostřednictvím našeho nástroje Apple Devices**: přejděte na odkaz <https://autodiscover.mail.ovh.net/AppleDevices/> a řiďte se uvedenými pokyny.

- **Pomocí konfiguračního asistenta v aplikaci Mail**: spusťte aplikaci Mail na svém zařízení.

Tato příručka Vás provede jednotlivými kroky druhého z výše uvedených způsobů konfigurace.

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Mail přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: zobrazí se nabídka poskytovatelů e-mailových účtů. Zaškrtněte možnost `Exchange`{.action} a pokračujte dále.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Mail`{.action} v horní části obrazovky a následně na `Přidat účet`{.action}. Zaškrtněte možnost `Exchange`{.action} a pokračujte dále.

![Exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Zadejte informace o svém účtu:

|Informace|Popis| 
|---|---| 
|Jméno|Zadejte jméno, které bude při odesílání e-mailů z tohoto účtu uvedeno jako odesílatel.|
|E-mailová adresa|Zadejte celou e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|  

Nyní klikněte na tlačítko `Připojit`{.action}. Pokud jsou vyplněné údaje správné a máte ve službě Exchange správně nastavenou doménu, bude připojení k účtu úspěšné.

![Exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Při výběru aplikací, které tento e-mailový účet budou moci používat, nezapomeňte zaškrtnout aplikaci `Mail`{.action}. Ostatní aplikace mohou využívat některé funkce pro týmovou spolupráci zahrnuté ve službě Exchange. Jakmile provedete potřebné úpravy, klikněte na tlačítko `Dokončit`{.action}.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

![Exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Pokud se připojení k účtu nezdaří, navrhujeme podniknout následující kroky: 

- Zkontrolujte konfiguraci domény nastavené ve Vaší službě Exchange. Za tímto účelem přejděte do [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (záložka `Asociované domény`{.action}, sloupeček `Diagnostika`{.action}).

- Pokuste se URL pro připojení ke službě Exchange vyplnit manuálně. Pokračujte i přes varování o zabezpečení certifikátu a vyplňte pole `Interní URL`{.action} a `Externí URL`{.action} pomocí údajů o serveru, na němž je Vaše služba Exchange hostována.

Informace o serveru naleznete v svém [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (v administračním rozhraní příslušné služby Exchange). Přejděte do záložky `Obecné informace`{.action} a vyhledejte server uvedený v rámečku `Připojení`{.action}.

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého macOS zařízení.

Vyzkoušejte také webovou aplikaci OVH s [funkcemi pro týmovou spolupráci](https://www.ovh.com/fr/emails/){.external}, která je dostupná na následující adrese: <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů své e-mailové adresy.

## Kam dál

[Konfigurace e-mailové adresy obsažené ve službě MX Plan nebo v nabídce webhostingu v e-mailovém klientu macOS](https://docs.ovh.com/cz/cs/emails/konfigurace-mxplan-macos/){.external}.

[Konfigurace účtu služby E-mail Pro v e-mailovém klientu macOS](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-email-pro-macos/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com](https://community.ovh.com){.external}.