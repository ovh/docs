---
deprecated: true
title: 'Konfigurace účtů E-mail Pro v aplikaci Outlook 2016 pro Mac'
slug: konfigurace-outlook-2016-mac
excerpt: 'Zjistěte, jak nakonfigurovat účet E-mail Pro v aplikaci Outlook 2016 pro operační systém macOS'
section: 'Konfigurace e-mailového klienta'
order: 2
---

**Poslední aktualizace 11/04/2018**

## Cíl

Účty služby E-mail Pro je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat na zařízení podle své volby.

**Zjistěte, jak nakonfigurovat účet E-mail Pro v aplikaci Outlook 2016 pro operační systém macOS.**

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- Aplikace Outlook nainstalovaná na Vašem zařízení s operačním systémem macOS.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

> [!primary]
>
> Používáte Outlook 2016 pro Windows? V takovém případě postupujte podle následující dokumentace: [Konfigurace účtů E-mail Pro v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-outlook-2016/){.external}.
>

## Postup

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Outlook přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: průvodce nastavením Vás vyzve k vyplnění informací o Vaší e-mailové adrese.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Nástroje`{.action} v horní části obrazovky a následně na `Účty`{.action}. V nově zobrazeném okně klikněte na `+`{.action} a následně na `Nový účet`{.action}.

![emailpro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a klikněte na `Pokračovat`{.action}. Vyberte `IMAP/POP`{.action} a zadejte požadované informace.

|Informace|Popis|
|---|---|
|Typ účtu|Ponechte výchozí hodnotu (**IMAP**).|
|E-mailová adresa|Zadejte název, díky kterému účet rozpoznáte mezi ostatními účty v aplikaci Outlook.|
|Uživatel|Zadejte celou e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Příchozí server|Zadejte následující server: „pro1.mail.ovh.net“. Políčko **Použít SSL pro připojení** ponechte zaškrtnuté.|
|Příchozí port|Vyberte port 993.|
|Odchozí server|Zadejte následující server: „pro1.mail.ovh.net“. Políčko **Použít SSL pro připojení** ponechte zaškrtnuté.|
|Odchozí port|Vyberte port 587.|

Po vyplnění požadovaných údajů klikněte na tlačítko `Přidat účet`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

![emailpro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby E-mail Pro:

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|pro1.mail.ovh.net|Ano|993|
|Odchozí|pro1.mail.ovh.net|Ano|587|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého macOS zařízení.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://pro1.mail.ovh.net>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace e-mailové adresy MX Plan v aplikaci Outlook 2016 pro macOS](https://docs.ovh.com/cz/cs/emails/konfigurace-outlook-2016-mac/){.external}

[Konfigurace účtu Exchange v aplikaci Outlook 2016 pro macOS](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-outlook-2016-mac/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.