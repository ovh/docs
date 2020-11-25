---
deprecated: true
title: 'Konfigurace účtů služby E-mail Pro v aplikaci Pošta pro Windows 10'
slug: konfigurace-posta-windows-10
excerpt: 'Zjistěte, jak nakonfigurovat účet E-mail Pro v aplikaci Pošta pro operační systém Windows 10'
section: 'Konfigurace e-mailového klienta'
order: 7
---

**Poslední aktualizace 18/04/2018**

## Cíl

Účty služby E-mail Pro je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat na zařízení podle své volby.

**Zjistěte, jak nakonfigurovat účet E-mail Pro v aplikaci Pošta pro operační systém Windows 10.**

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- Aplikace Pošta nainstalovaná na Vašem zařízení.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

## Postup

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Pošta přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: zobrazí se okno s výzvou pro `Přidání účtu`{.action}.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Účty`{.action} v levém panelu a následně klikněte na tlačítko `Přidat účet`{.action}.

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

Vyberte možnost `Rozšířené nastavení`{.action} a při volbě typu účtu zvolte `Internetový e-mail`{.action}.

Následně budete požádáni o zadání následujících informací:

|Informace|Popis|
|---|---|
|E-mailová adresa|Zadejte celou e-mailovou adresu.|
|Uživatel|Zadejte e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Název účtu|Zadejte název, díky kterému účet rozpoznáte mezi ostatními účty v aplikaci Pošta.|
|Zprávy odesílat pod tímto jménem|Zadejte jméno, které bude při odesílání e-mailů z tohoto účtu uvedeno jako odesílatel. |
|Server příchozí pošty|Zadejte následující server: „pro1.mail.ovh.net:993“.|
|Typ účtu|Doporučujeme použití protokolu **IMAP4**. V rozbalovacím menu si nicméně můžete vybrat i protokol **POP** pro ukládání e-mailů z aplikace Pošta přímo na lokální disk.|
|Server odchozí pošty|Zadejte následující server: „pro1.mail.ovh.net:587“.|

Následující políčka ponechte zaškrtnutá:

- „Server odchozí pošty vyžaduje ověření“
- „Při odesílání e-mailů požívat stejné uživatelské jméno a heslo“
- „Vyžadovat SSL pro příchozí e-maily“
- „Vyžadovat SSL pro odchozí e-maily“

Po vyplnění údajů klikněte na tlačítko `Přihlásit se`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby E-mail Pro:

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|pro1.mail.ovh.net|Ano|993|
|Odchozí|pro1.mail.ovh.net|Ano|587|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím aplikace Pošta.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace e-mailové adresy v aplikaci Pošta pro Windows 10](https://docs.ovh.com/cz/cs/emails/konfigurace-posta-windows-10/){.external}.

[Konfigurace účtů služby Exchange v aplikaci Pošta pro Windows 10](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-posta-windows-10/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.