---
deprecated: true
title: Konfigurace účtů služby MX Plan na iPhonu nebo iPadu
slug: konfigurace-ios
excerpt: Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan na svém iPhonu nebo iPadu
section: Apple
---

**Poslední aktualizace 20/03/2018**

## Cíl

E-mailové účty služby MX Plan je možné propojit s kompatibilními e-mailovými klienty a aplikacemi. To Vám umožní posílat a přijímat zprávy na zařízení dle Vašeho výběru.

**Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan na svém iPhonu nebo iPadu.**

## Prerekvizity

- E-mailová adresa služby MX Plan (součást nabídky MX Plan nebo [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}).
- E-mailový klient na zařízení s operačním systémem macOS (aplikace Mail).
- Přihlašovací údaje k účtu, který si přejete propojit s e-mailovým klientem.

> [!primary]
>
> Tato příručka je určená pro následující verze operačního systému iOS: iOS 7 a novější.
>

## Postup

Konfiguraci lze provést dvěma různými způsoby:

- **Prostřednictvím našeho nástroje Apple Devices**: přejděte na odkaz <https://autodiscover.mail.ovh.net/AppleDevices/> a řiďte se uvedenými pokyny.

- **Prostřednictvím průvodce pro nastavení na Vašem zařízení**.

Tato příručka Vás provede jednotlivými kroky druhého z výše uvedených způsobů konfigurace.

### Fáze 1: přidání účtu

V hlavním menu svého zařízení klikněte na tlačítko `Nastavení`{.action}. Účet je v závislosti na verzi operačního systému iOS možné přidat dvěma různými způsoby:

- **iOS 7, 8, 9 a 10**: klikněte na `Mail, kontakty, kalendář`{.action} a dále na `Přidat účet`{.action}. Nakonec zvolte možnost `Jiný`{.action} a pak `Přidat poštovní účet`{.action}.

- **iOS 11**: klikněte na `Účty a hesla`{.action} a dále na `Přidat účet`{.action}. Nakonec vyberte možnost `Jiný`{.action} a pak `Přidat poštovní účet`{.action}.

![Exchange](images/configuration-mail-ios-step1.png){.thumbnail}

Zadejte informace o svém účtu:

|Informace|Popis|
|---|---|
|Jméno|Zadejte jméno, které bude při odesílání e-mailů z tohoto účtu uvedeno jako odesílatel.|
|E-mailová adresa|Zadejte celou e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Popis|Zadejte název, díky kterému účet rozpoznáte mezi ostatními účty v aplikaci Mail.|

Nyní klikněte na tlačítko `Dále`{.action} a vyplňte následující požadované informace:

|Informace|Popis| 
|---|---| 
|IMAP nebo POP|Doporučujeme použití protokolu **IMAP** (vybrán ve výchozím nastavení). Vybrat si nicméně můžete i protokol **POP** pro ukládání e-mailů z aplikace Mail přímo na lokální disk.|
|Název hostitele (příchozí)|Zadejte následující server: „ssl0.ovh.net“.|
|Uživatelské jméno (příchozí)|Zadejte celou e-mailovou adresu.|
|Heslo (příchozí)|Zadejte heslo ke svému e-mailovému účtu.|  
|Název hostitele (odchozí)|Zadejte následující server: „ssl0.ovh.net“.|
|Uživatelské jméno (odchozí)|Zadejte celou e-mailovou adresu.|
|Heslo (odchozí)|Zadejte heslo ke svému e-mailovému účtu.| 

Nyní klikněte na tlačítko `Dále`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

![Exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Aby aplikace Mail mohla tento účet používat, ponechte při výběru aplikací zaškrtnuté políčko `Mail`{.action} a klikněte na tlačítko `Uložit`{.action}.

Správnost nastavení účtu můžete ověřit odesláním zkušebního e-mailu z aplikace Mail na Vašem zařízení.

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

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého iOS zařízení.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče (Webmail). Aplikace je dostupná na následující adrese: <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace účtu služby E-mail Pro na iPhonu nebo iPadu](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-ios/){.external}.

[Konfigurace účtu služby Exchange na iPhonu nebo iPadu](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-ios-iphone-ipad/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na [https://community.ovh.com](https://community.ovh.com){.external}.