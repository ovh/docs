---
deprecated: true
title: Konfigurace účtu E-mail Pro na Androidu prostřednictvím aplikace Gmail
slug: konfigurace-android
excerpt: Zjistěte, jak nakonfigurovat účet E-mail Pro na Androidu prostřednictvím aplikace Gmail
section: Konfigurace e-mailového klienta
order: 5
---

**Poslední aktualizace 22/03/2018**

## Cíl

Účty služby E-mail Pro je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat na zařízení podle své volby.

**Zjistěte, jak nakonfigurovat účet E-mail Pro na Androidu prostřednictvím aplikace Gmail.**

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- Aplikace Gmail nainstalovaná na Vašem zařízení. Aplikaci můžete nainstalovat prostřednictvím Google Play Store.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

> [!primary]
>
> Tato příručka byla vytvořena podle zařízení Nexus 6 se systémem Android ve verzi 7.1.1. Pro účely standardizace používáme aplikaci Gmail, kterou je možné nainstalovat pomocí Google Play Store. Pokud chcete používat jinou aplikaci, může se postup lišit.
>

## Postup

### Fáze 1: přidání účtu

V hlavním menu svého zařízení klikněte na aplikaci `Gmail`{.action}. S přidáním účtu můžete začít dvěma různými způsoby:

- **pokud dosud nemáte nastaven žádný účet**: přeskočte uvítací obrazovku a následně klikněte na možnost `Přidat účet`{.action}. Nakonec zvolte možnost `Jiný`{.action}. 

- **pokud již máte nastaven jiný e-mailový účet**: vlevo nahoře klikněte na ikonku ve tvaru tří čárek a následně na ikonku ve tvaru šipky, kterou najdete napravo od názvu již nastaveného účtu. Nakonec klikněte na `Přidat účet`{.action} a vyberte možnost `Jiný`{.action}. 

![emailpro](images/configuration-email-pro-gmail-application-android-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a klikněte na `Další`{.action}.

Při výběru typu účtu zvolte **IMAP** a následně vyplňte heslo ke své e-mailové adrese. Pro pokračování v konfiguraci klikněte na `Další`{.action}.

![emailpro](images/configuration-email-pro-gmail-application-android-step2.png){.thumbnail}

Nyní doplňte parametry příchozího serveru:

|Informace|Popis| 
|---|---| 
|Uživatel|Zadejte celou e-mailovou adresu.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Server|Zadejte následující server: „pro1.mail.ovh.net“.|

Klikněte na `Další`{.action} a doplňte parametry odchozího serveru:

|Informace|Popis| 
|---|---| 
|Vyžadovat spojení|Ujistěte se, že je toto tlačítko vybrané.|
|Uživatel|Zadejte celou e-mailovou adresu.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Server SMTP|Zadejte následující server: „pro1.mail.ovh.net“.|

Nyní klikněte na tlačítko `Další`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

![emailpro](images/configuration-email-pro-gmail-application-android-step3.png){.thumbnail}

Až nastavíte možnosti účtu, klikněte na `Další`{.action}. Nakonec dostanete možnost svůj účet pojmenovat, abyste jej rozpoznali mezi dalšími účty ve své aplikaci. Tento název se bude zobrazovat pokaždé, když odešlete e-mail. Jakmile změny provedete, klikněte na `Další`{.action}.

Správnost nastavení účtu můžete ověřit odesláním zkušebního e-mailu.

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby E-mail Pro:

|Typ serveru|Název serveru|Typ zabezpečení|Port|
|---|---|---|---|
|Příchozí|pro1.mail.ovh.net|SSL / TLS|993|
|Odchozí|pro1.mail.ovh.net|STARTTLS|587|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého Android zařízení.

Vyzkoušejte také webovou aplikaci OVH s [funkcemi pro týmovou spolupráci](https://www.ovh.cz/emails/){.external}, která je dostupná na následující adrese: <https://pro1.mail.ovh.net>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace e-mailové adresy zahrnuté v nabídce MX Plan nebo v nabídce webhostingu  na Androidu prostřednictvím aplikace Gmail](https://docs.ovh.com/cz/cs/emails/konfigurace-android/){.external}.

[Konfigurace účtu Exchange na Androidu prostřednictvím aplikace Gmail](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-android/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.