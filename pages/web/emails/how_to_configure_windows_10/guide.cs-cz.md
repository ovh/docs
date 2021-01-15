---
deprecated: true
title: 'Konfigurace e-mailové adresy v aplikaci Pošta pro Windows 10'
slug: konfigurace-posta-windows-10
excerpt: 'Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan v aplikaci Pošta pro operační systém Windows 10'
section: Windows
---

**Poslední aktualizace 18/04/2018**

## Cíl

E-mailové účty služby MX Plan je možné propojit s kompatibilními e-mailovými klienty. To Vám umožní posílat a přijímat zprávy v aplikaci dle Vašeho vlastního výběru.

**Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan v aplikaci Pošta pro operační systém Windows 10.**

## Prerekvizity

- E-mailová adresa služby MX Plan (součást nabídky MX Plan nebo [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}).
- Aplikace Pošta nainstalovaná na Vašem zařízení.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

## Postup

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Pošta přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: zobrazí se okno s výzvou pro `Přidání účtu`{.action}.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Účty`{.action} v levém panelu a následně klikněte na tlačítko `Přidat účet`{.action}.

![mxplan](images/configuration-mail-windows-step1.png){.thumbnail}

Vyberte možnost `Rozšířené nastavení`{.action} a při volbě typu účtu zvolte `Internetový e-mail`{.action}.

Následně budete požádáni o zadání následujících informací:

|Informace|Popis|
|---|---|
|E-mailová adresa|Zadejte celou e-mailovou adresu.|
|Uživatelské jméno|Zadejte e-mailovou adresu.|
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Název účtu|Zadejte název, díky kterému účet rozpoznáte mezi ostatními účty v aplikaci Pošta.|
|Zprávy odesílat pod tímto jménem|Zadejte jméno, které bude při odesílání e-mailů z tohoto účtu uvedeno jako odesílatel.|
|Server příchozí pošty|Zadejte následující server: „ssl0.ovh.net:993“.|
|Typ účtu|Doporučujeme použití protokolu **IMAP4**. V rozbalovacím menu si nicméně můžete vybrat i protokol **POP** pro ukládání e-mailů z aplikace Pošta přímo na lokální disk.|
|Server odchozí pošty|Zadejte následující server: „ssl0.ovh.net:465“.|

Následující políčka ponechte zaškrtnutá:

- „Server odchozí pošty vyžaduje ověření“
- „Při odesílání e-mailů požívat stejné uživatelské jméno a heslo“
- „Vyžadovat SSL pro příchozí e-maily“
- „Vyžadovat SSL pro odchozí e-maily“

Po vyplnění údajů klikněte na tlačítko `Přihlásit se`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

![mxplan](images/configuration-mail-windows-step2.png){.thumbnail}

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete nezbytné technické informace týkající se naší služby MX Plan:

- **Pro konfiguraci s protokolem IMAP4**

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|Ano|993|
|Odchozí|ssl0.ovh.net|Ano|465|

- **Pro konfiguraci s protokolem POP**

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|ssl0.ovh.net|Ano|995|
|Odchozí|ssl0.ovh.net|Ano|465|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím aplikace Pošta.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče (Webmail). Aplikace je dostupná na následující adrese: <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.
 
## Kam dál

[Konfigurace účtů služby E-mail Pro v aplikaci Pošta pro Windows](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-posta-windows-10/){.external}.

[Konfigurace účtů služby Exchange v aplikaci Pošta pro Windows](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-posta-windows-10/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.