---
deprecated: true
title: 'Konfigurace e-mailových účtů v aplikaci Outlook 2016 pro Windows'
slug: konfigurace-outlook-2016
excerpt: 'Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan v aplikaci Outlook 2016 pro operační systém Windows'
section: Outlook
---

**Poslední aktualizace 06/04/2018**

## Cíl

E-mailové účty služby MX Plan je možné propojit s kompatibilními e-mailovými klienty. To Vám umožní posílat a přijímat zprávy v aplikaci dle Vašeho vlastního výběru.

**Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan v aplikaci Outlook 2016 pro operační systém Windows.**

## Prerekvizity

- E-mailová adresa služby MX Plan (součást nabídky MX Plan nebo [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}).
- Aplikace Outlook 2016 nainstalovaná na Vašem zařízení s operačním systémem Windows.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

> [!primary]
>
> Používáte Outlook 2016 pro Mac? V takovém případě postupujte podle následující dokumentace: [Konfigurace e-mailových účtů v aplikaci Outlook 2016 pro Mac](https://docs.ovh.com/cz/cs/emails/konfigurace-outlook-2016-mac/){.external}.
>

## Postup

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Outlook přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: průvodce nastavením Vás vyzve k vyplnění informací o Vaší e-mailové adrese.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Soubor`{.action} v horní části obrazovky a následně na tlačítko `Přidat účet`{.action}.

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a rozklikněte tlačítko `Upřesnit možnosti`{.action}. Zaškrtněte políčko `Umožnit mi ručně si nastavit účet`{.action} a klikněte na tlačítko `Připojit`{.action}.

Při volbě typu účtu vyberte mezi **IMAP** a **POP**. Doporučujeme použití protokolu IMAP. Vybrat si nicméně můžete i protokol **POP** pro ukládání e-mailů z aplikace Outlook přímo na lokální disk.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Následně vyplňte požadované informace.

- **Sekce příchozí pošta:**

|Informace|Popis|
|---|---|
|Server|Zadejte následující server: ssl0.ovh.net.|
|Port|Zadejte následující port: 993|
|Metoda šifrování|Vyberte SSL / TLS|
|Požadovat přihlášení|Nezaškrtávejte políčko „Požadovat přihlášení pomocí zabezpečeného ověřovacího hesla (SPA)“.|

- **Sekce odchozí pošta:**

|Informace|Popis|
|---|---|
|Server|Zadejte následující server: ssl0.ovh.net.|
|Port|Zadejte následující port: 465|
|Metoda šifrování|Vyberte SSL / TLS|
|Požadovat přihlášení|Nezaškrtávejte políčko „Požadovat přihlášení pomocí zabezpečeného ověřovacího hesla (SPA)“.|

Po vyplnění požadovaných informací klikněte na tlačítko `Připojit`{.action} a zadejte **přístupové heslo** ke své e-mailové adrese. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

![mxplan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby MX Plan:

- **pro konfiguraci s protokolem IMAP**

|Typ serveru|Název serveru|Metoda šifrování|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|SSL / TLS|993|
|Odchozí|ssl0.ovh.net|SSL / TLS|465|

- **pro konfiguraci s protokolem POP**

|Typ serveru|Název serveru|Metoda šifrování|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|SSL / TLS|995|
|Odchozí|ssl0.ovh.net|SSL / TLS|465|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím své aplikace Outlook 2016.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace účtu E-mail Pro v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-outlook-2016/){.external}

[Konfigurace účtu Exchange v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-outlook-2016/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.