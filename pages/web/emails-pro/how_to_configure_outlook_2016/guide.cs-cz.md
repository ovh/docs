---
deprecated: true
title: 'Konfigurace účtů E-mail Pro v aplikaci Outlook 2016 pro Windows'
slug: konfigurace-outlook-2016
excerpt: 'Zjistěte, jak nakonfigurovat účet E-mail Pro v aplikaci Outlook 2016 pro operační systém Windows'
section: 'Konfigurace e-mailového klienta'
order: 1
---

**Poslední aktualizace 11/04/2018**

## Cíl

Účty služby E-mail Pro je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat na zařízení podle své volby.

**Zjistěte, jak nakonfigurovat účet E-mail Pro v aplikaci Outlook 2016 pro operační systém Windows.**

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- Aplikace Outlook 2016 nainstalovaná na Vašem zařízení s operačním systémem Windows.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

> [!primary]
>
> Používáte Outlook 2016 pro Mac? V takovém případě postupujte podle následující dokumentace: [Konfigurace účtu služby E-mail Pro v aplikaci Outlook 2016 pro Mac](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-outlook-2016-mac/){.external}.
>

## Postup

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Outlook přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: průvodce nastavením Vás vyzve k vyplnění informací o Vaší e-mailové adrese.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Soubor`{.action} v horní části obrazovky a následně na tlačítko `Přidat účet`{.action}.

![emailpro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a rozklikněte tlačítko `Upřesnit možnosti`{.action}. Zaškrtněte políčko `Umožnit mi ručně si nastavit účet`{.action} a klikněte na tlačítko `Připojit`{.action}. Při volbě typu účtu vyberte IMAP.

![emailpro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Následně vyplňte požadované informace.

- **Sekce příchozí pošta:**

|Informace|Popis|
|---|---|
|Server|Zadejte následující server: pro1.mail.ovh.net.|
|Port|Zadejte následující port: 993|
|Metoda šifrování|Vyberte SSL / TLS|
|Požadovat přihlášení|Nezaškrtávejte políčko „Požadovat přihlášení pomocí zabezpečeného ověřovacího hesla (SPA)“.|

- **Sekce odchozí pošta:**

|Informace|Popis|
|---|---|
|Server|Zadejte následující server: pro1.mail.ovh.net.|
|Port|Zadejte následující port: 587|
|Metoda šifrování|Vyberte SSL / TLS|
|Požadovat přihlášení|Nezaškrtávejte políčko „Požadovat přihlášení pomocí zabezpečeného ověřovacího hesla (SPA)“.|

Po vyplnění požadovaných informací klikněte na tlačítko `Připojit`{.action} a zadejte **přístupové heslo** ke své e-mailové adrese. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

![emailpro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby E-mail Pro:

|Typ serveru|Název serveru|Metoda šifrování|Port|
|---|---|---|---|
|Příchozí|pro1.mail.ovh.net|SSL / TLS|993|
|Odchozí|pro1.mail.ovh.net|STARTTLS|587|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím své aplikace Outlook 2016.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://pro1.mail.ovh.net>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace e-mailových účtů MX Plan v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/emails/konfigurace-outlook-2016/){.external}.

[Konfigurace účtu Exchange v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-outlook-2016/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.