---
deprecated: true
title: 'Konfigurace e-mailových účtů v aplikaci Outlook 2016 pro Mac'
slug: konfigurace-outlook-2016-mac
excerpt: 'Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan v aplikaci Outlook 2016 pro operační systém macOS'
section: Outlook
---

**Poslední aktualizace 06/04/2018**

## Cíl

E-mailové účty služby MX Plan je možné propojit s kompatibilními e-mailovými klienty. To Vám umožní posílat a přijímat zprávy v aplikaci dle Vašeho vlastního výběru.

**Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan v aplikaci Outlook 2016 pro operační systém macOS.**

## Prerekvizity

- E-mailová adresa služby MX Plan (součást nabídky MX Plan nebo [webhostingového řešení OVH](https://www.ovh.cz/){.external}).
- Aplikace Outlook nainstalovaná na Vašem zařízení s operačním systémem macOS.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

> [!primary]
>
> Používáte Outlook 2016 pro Windows? V takovém případě postupujte podle následující dokumentace: [Konfigurace e-mailových účtů v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/emails/konfigurace-outlook-2016/){.external}.
>

## Postup

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Mail přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: průvodce nastavením Vás vyzve k vyplnění informací o Vaší e-mailové adrese.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Nástroje`{.action} v horní části obrazovky a následně na `Účty`{.action}. V nově zobrazeném okně klikněte na `+`{.action} a následně na `Nový účet`{.action}.

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a klikněte na `Pokračovat`{.action}. Vyberte `IMAP/POP`{.action} a zadejte požadované informace.

|Informace|Popis|
|---|---|
|Typ účtu|Doporučujeme použití protokolu **IMAP** (vybrán ve výchozím nastavení). V rozbalovacím menu si nicméně můžete vybrat i protokol **POP** pro ukládání e-mailů z aplikace Outlook přímo na lokální disk.|
|E-mailová adresa|Zadejte název, díky kterému účet rozpoznáte mezi ostatními účty v aplikaci Outlook.|
|Uživatelské jméno|Zadejte celou e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Příchozí server|Zadejte následující server: „ssl0.ovh.net“. Políčko **Použít SSL pro připojení** ponechte zaškrtnuté.|
|Příchozí port|Vyberte port 993.|
|Odchozí server|Zadejte následující server: „ssl0.ovh.net“. Políčko **Použít SSL pro připojení** ponechte zaškrtnuté.|
|Odchozí port|Vyberte port 465.|

Po vyplnění požadovaných údajů klikněte na tlačítko `Přidat účet`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

![mxplan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

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

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého macOS zařízení.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace účtu E-mail Pro v aplikaci Outlook 2016 pro macOS](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-outlook-2016-mac/){.external}.

[Konfigurace účtu Exchange v aplikaci Outlook 2016 pro macOS](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-outlook-2016-mac/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.