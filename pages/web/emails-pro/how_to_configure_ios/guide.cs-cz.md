---
deprecated: true
title: Konfigurace účtů služby E-mail Pro na iPhonu nebo iPadu
slug: konfigurace-ios
excerpt: Zjistěte, jak nakonfigurovat účet E-mail Pro v aplikaci Mail na svém iPhonu či iPadu
section: Konfigurace e-mailového klienta
order: 3
---

**Poslední aktualizace 20/03/2018**

## Cíl

Účty služby E-mail Pro je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat na zařízení podle své volby.

**Zjistěte, jak nakonfigurovat účet služby E-mail Pro na iPhonu nebo iPadu prostřednictvím aplikace Mail**.

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- Aplikace Mail nainstalovaná na Vašem zařízení.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

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

- **iOS 7, 8, 9 a 10**: klikněte na `Mail, kontakty, kalendář`{.action} a dále na `Přidat účet`{.action}. Nakonec vyberte možnost `Jiný`{.action} a pak `Přidat poštovní účet`{.action}.

- **iOS 11**: klikněte na `Účty a hesla`{.action} a dále na `Přidat účet`{.action}. Nakonec zvolte možnost `Jiný`{.action} a pak `Přidat poštovní účet`{.action}.

![emailpro](images/configuration-mail-ios-step1.png){.thumbnail}

Zadejte informace o svém e-mailovém účtu:

|Informace|Popis|
|---|---|
|Jméno|Zadejte jméno, které bude při odesílání e-mailů z tohoto účtu uvedeno jako odesílatel.|
|E-mailová adresa|Zadejte celou e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Popis|Zadejte název, díky kterému účet rozpoznáte mezi ostatními účty v aplikaci Mail.|

Nyní klikněte na tlačítko `Dále`{.action} a vyplňte následující požadované informace:

|Informace|Popis|
|---|---|
|IMAP nebo POP|Ponechte výchozí hodnotu (**IMAP**).|
|Název hostitele (příchozí)|Zadejte následující server: „pro1.mail.ovh.net“.|
|Uživatelské jméno (příchozí)|Zadejte celou e-mailovou adresu.|
|Heslo (příchozí)|Zadejte heslo ke svému e-mailovému účtu.|  
|Název hostitele (odchozí)|Zadejte následující server: „pro1.mail.ovh.net“.|
|Uživatelské jméno (odchozí)|Zadejte celou e-mailovou adresu.|
|Heslo (odchozí)|Zadejte heslo ke svému e-mailovému účtu.|

Nyní klikněte na tlačítko `Dále`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

![emailpro](images/configuration-mail-ios-step2.png){.thumbnail}

Aby aplikace Mail mohla tento účet používat, ponechte při výběru aplikací zaškrtnuté políčko `Mail`{.action} a klikněte na tlačítko `Dokončit`{.action}.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby E-mail Pro:

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|pro1.mail.ovh.net|Ano|993|
|Odchozí|pro1.mail.ovh.net|Ano|587|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého iOS zařízení.

Vyzkoušejte také webovou aplikaci OVH s [funkcemi pro týmovou spolupráci](https://www.ovh.cz/emails/){.external}, která je dostupná na následující adrese: <https://pro1.mail.ovh.net>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace účtu služby MX Plan na iPhonu nebo iPadu](https://docs.ovh.com/cz/cs/emails/konfigurace-ios/){.external}.

[Konfigurace účtu služby Exchange na iPhonu nebo iPadu](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-ios-iphone-ipad/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.