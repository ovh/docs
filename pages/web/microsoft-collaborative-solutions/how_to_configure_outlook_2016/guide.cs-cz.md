---
deprecated: true
title: 'Konfigurace účtů Exchange v aplikaci Outlook 2016 pro Windows'
slug: konfigurace-outlook-2016
excerpt: 'Zjistěte, jak nakonfigurovat účty služby Exchange v aplikaci Outlook 2016 pro operační systém Windows'
section: 'Konfigurace e-mailového klienta Exchange'
---

**Poslední aktualizace 16/04/2018**

## Cíl

Účty služby Exchange je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat na zařízení podle své volby.

**Zjistěte, jak nakonfigurovat účty služby Exchange v aplikaci Outlook 2016 pro operační systém Windows.**

## Prerekvizity

- Služba [Exchange](https://www.ovh.cz/emails/){.external}.
- Aplikace Outlook 2016 nainstalovaná na Vašem zařízení s operačním systémem Windows.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.
- Správná konfigurace OVH SRV záznamu v DNS zóně domény.

> [!primary]
>
> Používáte Outlook 2016 pro Mac? V takovém případě postupujte podle následující dokumentace: [Konfigurace účtů služby Exchange v aplikaci Outlook 2016 pro Mac](https://docs.ovh.com/cz/cs/microsoft-collaborative-solutions/konfigurace-outlook-2016-mac/){.external}.
>

## Postup

### Fáze 1: přidání účtu

E-mailový účet lze po spuštění aplikace Outlook přidat dvěma různými způsoby.

- **Při prvním spuštění aplikace**: průvodce nastavením Vás vyzve k vyplnění informací o Vaší e-mailové adrese.

- **Pokud již máte připojený e-mailový účet**: klikněte na tlačítko `Soubor`{.action} v horní části obrazovky a následně na tlačítko `Přidat účet`{.action}.

![Exchange](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a rozklikněte tlačítko `Upřesnit možnosti`{.action}. Zaškrtněte políčko `Umožnit mi ručně si nastavit účet`{.action} a klikněte na tlačítko `Připojit`{.action}. Při volbě typu účtu vyberte Exchange.

Objeví se okno s žádostí o zadání **přístupového hesla** k dané e-mailové adrese. Zadejte heslo, zaškrtněte políčko pro jeho zapamatování a klikněte na tlačítko `OK`{.action}.

> [!primary]
>
> Pokud se objeví hlášení o tom, že aplikace Outlook nebyla schopna Váš účet nastavit, může to znamenat, že OVH SRV záznam nebyl v DNS zóně domény správně nakonfigurován.
>
> V takovém případě prosím ověřte konfiguraci domény nastavené ve Vaší službě Exchange. Za tímto účelem přejděte do [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} (záložka `Asociované domény`{.action}, sloupeček `Diagnostika`{.action}).
>

Pokud je Vaše doména nakonfigurována správně, zobrazí se žádost o autorizaci připojení k serveru OVH. Za účelem provedení automatické konfigurace Vašeho Exchange účtu žádost potvrďte.

Jakmile bude Váš účet úspěšně nastaven a zpřístupněn v rámci aplikace Outlook 2016, budete moci jeho funkčnost ověřit odesláním zkušebního e-mailu.

![Exchange](images/configuration-outlook-2016-windows-exchange-step2.png){.thumbnail}

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím své aplikace Outlook 2016.

OVH nabízí webovou aplikaci, která umožňuje přístup k Vaší e-mailové adrese prostřednictvím internetového prohlížeče. Aplikace je dostupná na adrese <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace e-mailových účtů MX Plan v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/emails/konfigurace-outlook-2016/){.external}

[Konfigurace účtů E-mail Pro v aplikaci Outlook 2016 pro Windows](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-outlook-2016/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.