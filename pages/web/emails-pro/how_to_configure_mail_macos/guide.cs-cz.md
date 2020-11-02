---
deprecated: true
title: Konfigurace účtů služby E-mail Pro na e-mailovém klientu macOS
slug: konfigurace-email-pro-macos
excerpt: Seznamte se s postupem pro konfiguraci účtů služby E-mail Pro na macOS El Capitan, Sierra a High Sierra
section: Konfigurace e-mailového klienta
order: 4
---

**Poslední aktualizace 13/02/2018**

## Cíl

Účty služby E-mail Pro je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svůj e-mail používat s aplikací dle své vlastní volby.

**Zjistěte, jak nakonfigurovat účty služby E-mail Pro na operačním systému macOS El Capitan, Sierra a High Sierra.**

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- E-mailový klient na zařízení s operačním systémem macOS.
- Přihlašovací údaje k účtu, který si přejete propojit s e-mailovým klientem.

> [!primary]
>
> Tato příručka popisuje postup pro konfiguraci účtů služby E-mail Pro na následujících verzích operačního systému macOS: El Capitan, Sierra a High Sierra.
>

## Postup

Konfiguraci lze provést dvěma různými způsoby:

- **Prostřednictvím našeho nástroje Apple Devices**: přejděte na odkaz [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} a řiďte se uvedenými pokyny.

- **Pomocí konfiguračního asistenta v aplikaci Mail**: spusťte aplikaci Mail na svém zařízení.

Tato příručka Vás provede jednotlivými kroky druhého z výše uvedených způsobů konfigurace.

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Mail přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: zobrazí se nabídka poskytovatelů e-mailových účtů. Zaškrtněte možnost `jiný e-mailový účet`{.action} a klikněte na tlačítko pokračovat.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Mail`{.action} v horní části obrazovky a následně na `Přidat účet`{.action}. Zaškrtněte možnost `jiný e-mailový účet`{.action} a klikněte na tlačítko pokračovat.

![emailpro](images/configuration-mail-sierra-step1.png){.thumbnail}

Zadejte informace o svém e-mailovém účtu:

|Informace|Popis|  
|---|---|  
|Jméno|Zadejte jméno, které bude při odesílání e-mailů z tohoto účtu uvedeno jako odesílatel.| 
|E-mailová adresa|Zadejte celou e-mailovou adresu.| 
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|  

Nyní klikněte na tlačítko `Připojit`{.action}. Následně budete požádáni o zadání dalších informací:

|Informace|Popis|  
|---|---|  
|Typ účtu|Ponechte možnost IMAP, která je již předvybrána.| 
|Server pro příchozí poštu|Zadejte následující server: *pro1.mail.ovh.net*.| 
|Server pro odchozí poštu|Zadejte následující server: *pro1.mail.ovh.net*.|  

Znovu klikněte na tlačítko `Připojit`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

![emailpro](images/configuration-mail-sierra-step2.png){.thumbnail}

Aby aplikace Mail mohla tento účet používat, ponechte při výběru aplikací zaškrtnuté políčko `Mail`{.action} a klikněte na tlačítko `Dokončit`{.action}.

Správnost nastavení ověřte odesláním zkušebního e-mailu.

Pokud bude nastavení účtu zapotřebí upravit manuálně, níže naleznete technické informace týkající se naší služby E-mail Pro:

|Typ serveru|Název serveru|SSL|Port|
|---|---|---|---|
|Příchozí|pro1.mail.ovh.net|Ano|993|
|Odchozí|pro1.mail.ovh.net|Ano|587|

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého e-mailového klienta.

Vyzkoušejte také webovou aplikaci OVH s [funkcemi pro týmovou spolupráci](https://www.ovh.cz/mail/){.external}, která je dostupná na následující adrese: [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. Přihlásit se můžete pomocí přihlašovacích údajů své e-mailové adresy. 

## Kam dál

[Konfigurace e-mailové adresy obsažené ve službě MX Plan nebo v nabídce webhostingu v e-mailovém klientu macOS](https://docs.ovh.com/cz/cs/emails/konfigurace-mxplan-macos/){.external}.

[Konfigurace účtu služby Exchange v e-mailovém klientu macOS](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-exchange-macos/){.external}.

Přidejte se k naší uživatelské komunitě na [https://community.ovh.com](https://community.ovh.com){.external}.