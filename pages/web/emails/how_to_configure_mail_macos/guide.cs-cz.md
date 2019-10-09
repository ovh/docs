---
title: 'Konfigurace účtů služby MX Plan na e-mailovém klientu macOS'
slug: konfigurace-mxplan-macos
excerpt: 'Seznamte se s postupem pro konfiguraci účtů služby MX Plan na macOS El Capitan, Sierra a High Sierra'
section: Apple
---

**Poslední aktualizace 19/03/2018**

## Cíl

E-mailové účty služby MX Plan je možné propojit s kompatibilními e-mailovými klienty. To Vám umožní posílat a přijímat zprávy v aplikaci dle Vašeho vlastního výběru.

**Zjistěte, jak nakonfigurovat e-mailové účty služby MX Plan na operačním systému macOS El Capitan, Sierra a High Sierra.**

## Prerekvizity

- E-mailová adresa služby MX Plan (součást nabídky MX Plan nebo [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}).
- E-mailový klient na zařízení s operačním systémem macOS.
- Přihlašovací údaje k účtu, který si přejete propojit s e-mailovým klientem.

> [!primary]
>
> Tato příručka popisuje postup pro konfiguraci účtů služby MX Plan na následujících verzích operačního systému macOS: El Capitan, Sierra a High Sierra.
>

## Postup

Konfiguraci lze provést dvěma různými způsoby:

- **Prostřednictvím našeho nástroje Apple Devices**: přejděte na odkaz <https://autodiscover.mail.ovh.net/AppleDevices/> a řiďte se uvedenými pokyny.

- **Pomocí konfiguračního asistenta v aplikaci Mail**: spusťte aplikaci Mail na svém zařízení.

Tato příručka Vás provede jednotlivými kroky druhého z výše uvedených způsobů konfigurace.

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Mail přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: zobrazí se nabídka poskytovatelů e-mailových účtů. Zaškrtněte možnost `Jiný e-mailový účet`{.action} a klikněte na tlačítko pokračovat.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Mail`{.action} v horní části obrazovky a následně na `Přidat účet`{.action}. Zaškrtněte možnost `Jiný e-mailový účet`{.action} a klikněte na tlačítko pokračovat.

![mxplan](images/configuration-mail-macos-step1.png){.thumbnail}

Zadejte informace o svém e-mailovém účtu:

|Informace|Popis|
|---|---|
|Jméno|Zadejte celou e-mailovou adresu. |
|E-mailová adresa|Zadejte celou e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|

Nyní klikněte na tlačítko `Připojit`{.action}. Následně budete požádáni o zadání dalších informací:

|Informace|Popis|
|---|---|
|Typ účtu|Doporučujeme použití protokolu **IMAP** (vybrán ve výchozím nastavení). V rozbalovacím menu si nicméně můžete vybrat i protokol **POP** pro ukládání e-mailů z aplikace Mail přímo na lokální disk.|
|Server pro příchozí poštu|Zadejte následující server: ssl0.ovh.net.|
|Server pro odchozí poštu|Zadejte následující server: ssl0.ovh.net.|

Znovu klikněte na tlačítko `Připojit`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

![mxplan](images/configuration-mail-macos-step2.png){.thumbnail}

Aby aplikace Mail mohla tento účet používat, ponechte při výběru aplikací zaškrtnuté políčko `Mail`{.action} a klikněte na tlačítko `Dokončit`{.action}.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby MX Plan:

- **pro konfiguraci s protokolem IMAP**

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|Ano|993|
|Odchozí|ssl0.ovh.net|Ano|465| 

- **pro konfiguraci s protokolem POP**

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|Ano|995|
|Odchozí|ssl0.ovh.net|Ano|465|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého e-mailového klienta.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů své e-mailové adresy.

## Více informací

[Konfigurace účtu služby E-mail Pro v e-mailovém klientu macOS](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-email-pro-macos/){.external}.

[Konfigurace účtu služby Exchange v e-mailovém klientu macOS](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-exchange-macos/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com](https://community.ovh.com){.external}.