---
deprecated: true
title: Konfigurace e-mailové adresy na Androidu prostřednictvím aplikace Gmail
slug: konfigurace-android
excerpt: Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan na Androidu prostřednictvím aplikace Gmail
section: Android
---

**Poslední aktualizace 22/03/2018**

## Cíl

E-mailové adresy služby MX Plan je možné propojit s kompatibilními e-mailovými klienty. To Vám umožní posílat a přijímat zprávy na zařízení dle Vašeho výběru.

**Zjistěte, jak nakonfigurovat účet služby MX Plan na Androidu prostřednictvím aplikace Gmail.**

## Prerekvizity

- E-mailová adresa služby MX Plan (součást nabídky MX Plan nebo [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}).
- Aplikace Gmail nainstalovaná na Vašem zařízení. Aplikaci můžete nainstalovat prostřednictvím Google Play Store.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

> [!primary]
>
> Tato příručka popisuje konfigurační postup pro zařízení Nexus 6 s operačním systémem Android 7.1.1. Pro účely standardizace používáme aplikaci Gmail, kterou je možné nainstalovat pomocí Google Play Store.  Pokud chcete používat jinou aplikaci, může se postup lišit.
>

## Postup

### Fáze 1: přidání účtu

V hlavním menu svého zařízení klikněte na aplikaci `Gmail`{.action}. Účet můžete přidat dvěma různými způsoby:

- **pokud dosud nemáte nastaven žádný účet**: přeskočte uvítací obrazovku a následně klikněte na možnost `Přidat účet`{.action}. Nakonec zvolte možnost `Jiný`{.action}; 

- **pokud již máte nastaven jiný e-mailový účet**: vlevo nahoře klikněte na ikonku ve tvaru tří čárek a následně na ikonku ve tvaru šipky, kterou najdete napravo od názvu již nastaveného účtu. Nakonec klikněte na `Přidat účet`{.action} a vyberte možnost `Jiný`{.action}. 

![mxplan](images/configuration-gmail-application-android-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a klikněte na `Další`{.action}.

Při výběru typu účtu doporučujeme zvolit protokol **IMAP**. Vybrat můžete i **POP**: tato volba bude nicméně znamenat lokální ukládání e-mailů ve Vaší aplikaci Gmail, a proto ji nedoporučujeme, pokud se chystáte kontrolovat e-mail z několika různých e-mailových klientů.

Zadejte heslo ke své e-mailové adrese a klikněte na tlačítko `Další`{.action}.

![mxplan](images/configuration-gmail-application-android-step2.png){.thumbnail}

Nyní doplňte parametry příchozího serveru:

|Informace|Popis| 
|---|---| 
|Uživatel|Zadejte celou e-mailovou adresu.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Server|Zadejte následující server: „ssl0.ovh.net“.|

Klikněte na `Další`{.action} a doplňte parametry odchozího serveru:

|Informace|Popis| 
|---|---| 
|Vyžadovat spojení|Ujistěte se, že je toto tlačítko vybrané.|
|Uživatel|Zadejte celou e-mailovou adresu.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|SMTP server|Zadejte následující server: „ssl0.ovh.net“.|

Nyní klikněte na tlačítko `Další`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

![mxplan](images/configuration-gmail-application-android-step3.png){.thumbnail}

Až nastavíte možnosti účtu, klikněte na tlačítko `Další`{.action}. Nakonec dostanete možnost svůj účet pojmenovat, abyste jej rozpoznali mezi dalšími účty ve své aplikaci, a také si zvolit jméno, které se bude zobrazovat při odesílání e-mailů. Jakmile změny provedete, klikněte na `Další`{.action}.

Správnost nastavení účtu můžete ověřit odesláním zkušebního e-mailu.

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby MX Plan:

- **pro konfiguraci s protokolem IMAP**

|Typ serveru|Název serveru|Typ zabezpečení|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|SSL / TLS|993|
|Odchozí|ssl0.ovh.net|SSL / TLS|465|

- **pro konfiguraci s protokolem POP**

|Typ serveru|Název serveru|Typ zabezpečení|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|SSL / TLS|995|
|Odchozí|ssl0.ovh.net|SSL / TLS|465|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého Android zařízení.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://www.ovh.cz/mail/>. Přihlásit se sem můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace účtu E-mail Pro na Androidu prostřednictvím aplikace Gmail](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-android/){.external}.

[Konfigurace účtu Exchange na Androidu prostřednictvím aplikace Gmail](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-android/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.