---
deprecated: true
title: Konfigurace účtu Exchange na Androidu prostřednictvím aplikace Gmail
slug: konfigurace-android
excerpt: Zjistěte, jak nakonfigurovat účet Exchange na Androidu prostřednictvím aplikace Gmail
section: Konfigurace Exchange na kompatibilním smartphonu / tabletu
---

**Poslední aktualizace 22/03/2018**

## Cíl

Účty služby Exchange je možné propojit s kompatibilními e-mailovými klienty. Díky tomu můžete svou e-mailovou adresu používat na zařízení podle své volby.

**Zjistěte, jak nakonfigurovat účet Exchange na Androidu prostřednictvím aplikace Gmail.**

## Prerekvizity

- Služba [Exchange](https://www.ovh.cz/emails/){.external}.
- Aplikace Gmail nainstalovaná na Vašem zařízení. Aplikaci si můžete stáhnout z Google Play Store.
- Přihlašovací údaje k účtu, který si přejete s aplikací propojit.

> [!primary]
>
> Tato příručka popisuje konfigurační postup pro zařízení Nexus 6 s operačním systémem Android 7.1.1. Pro účely standardizace používáme aplikaci Gmail, kterou je možné nainstalovat pomocí Google Play Store.  Pokud chcete používat jinou aplikaci, bude se postup lišit.
>

## Postup

### Fáze 1: přidání účtu

V hlavním menu svého zařízení klikněte na aplikaci `Gmail`{.action}. Účet lze přidat dvěma různými způsoby:

- **Pokud dosud nemáte nastaven žádný účet**: přeskočte uvítací obrazovku a následně klikněte na možnost `Přidat účet`{.action}. Nakonec zvolte možnost `Exchange a Office 365`{.action}. 

- **Pokud již máte nastaven jiný e-mailový účet**: vlevo nahoře klikněte na ikonku ve tvaru tří čárek a následně na ikonku ve tvaru šipky, kterou najdete napravo od názvu již nastaveného účtu. Nakonec klikněte na `Přidat účet`{.action} a vyberte `Exchange a Office 365`{.action}. 

![Exchange](images/configuration-exchange-gmail-application-android-step1.png){.thumbnail}

Vyplňte svou e-mailovou adresu a klikněte na `Další`{.action}.

Nyní uveďte heslo ke své e-mailové adrese. Certifikát klienta nevybírejte a pro pokračování konfigurace klikněte na `Další`{.action}. Pro účely konfigurace Vašeho účtu může proběhnout spojení se serverem OVH. V takovém případě se na Vašem zařízení zobrazí oznámení: kliknutím na tlačítko `OK`{.action} spojení uskutečníte.

Nyní doplňte parametry příchozího serveru. Některá pole mohou být předvyplněna. 

|Informace|Popis| 
|---|---| 
|Doména / uživatelské jméno|Zadejte celou e-mailovou adresu.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|Certifikát klienta|Nic nevybírejte.|
|Server|Zadejte server, na kterém je Vaše služba Exchange hostována. Informace o serveru naleznete ve svém [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (záložka `Obecné informace`{.action} u příslušné služby Exchange, box `Připojení`{.action}).|
|Port|Vyberte port 443.|  
|Typ zabezpečení|Zvolte „SSL / TLS“.|

Nyní klikněte na tlačítko `Další`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně.

![Exchange](images/configuration-exchange-gmail-application-android-step2.png){.thumbnail}

Pro dokončení konfigurace budete muset serveru OVH udělit oprávnění pro vzdálenou kontrolu některých funkcí obsažených v zabezpečení Vašeho zařízení.  Klikněte na tlačítko `OK`{.action}, seznamte se se zobrazenými informacemi a klikněte na možnost `Aktivovat správce zařízení`{.action}.

Nakonec svůj účet pojmenujte tak, abyste jej rozpoznali mezi dalšími účty zobrazenými v aplikaci. Následně klikněte na `Další`{.action}.

Správnost nastavení účtu můžete ověřit odesláním zkušebního e-mailu.

### Fáze 2: použití e-mailu

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím svého Android zařízení.

Vyzkoušejte také webovou aplikaci OVH s [funkcemi pro týmovou spolupráci](https://www.ovh.cz/emails/){.external}, která je dostupná na následující adrese: <https://www.ovh.cz/mail/>. Přihlásit se můžete pomocí přihlašovacích údajů ke své e-mailové adrese.

## Kam dál

[Konfigurace e-mailové adresy zahrnuté v nabídce MX Plan nebo v nabídce webhostingu  na Androidu prostřednictvím aplikace Gmail](https://docs.ovh.com/cz/cs/emails/konfigurace-android/){.external}.

[Konfigurace účtu E-mail Pro na Androidu prostřednictvím aplikace Gmail](https://docs.ovh.com/cz/cs/emails-pro/konfigurace-android/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.