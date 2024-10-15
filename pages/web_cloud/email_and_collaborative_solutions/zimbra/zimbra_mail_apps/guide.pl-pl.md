---
title: "Konfiguracja konta e-mail Zimbra w programie pocztowym"
excerpt: "Dowiedz się, jak skonfigurować program pocztowy, aby sprawdzać e-maile dotyczące Twojego konta Zimbra"
updated: 2024-10-10
---

<style>
.w-400 {
max-width:400px!important;
}
</style>

> [!warning]
>
> **Ważne**
>
> Oferta Zimbra jest w fazie beta.
>
> Jest on dostępny tylko dla tych osób, które wypełniły [formularz rejestracji w fazie beta](https://labs.ovhcloud.com/en/zimbra-beta/).
>

## Wprowadzenie

Z ofertą Zimbra OVHcloud oferuje platformę open source do przesyłania wiadomości e-mail z wszystkimi niezbędnymi funkcjami do profesjonalnego użytku. Na tej stronie znajdziesz informacje niezbędne do skonfigurowania kont e-mail Zimbra w Twoim ulubionym programie pocztowym.

**Dowiedz się, jak skonfigurować program pocztowy do sprawdzania wiadomości e-mail na swoim koncie Zimbra**

## Wymagania początkowe

- Zakup konta e-mail w ramach naszego rozwiązania e-mail Zimbra OVHcloud.
- Instalacja programu pocztowego na wybranym urządzeniu.

## W praktyce

### Konfiguracja konta e-mail <a name="mail-config"></a>

Konfiguracja Twojego konta e-mail Zimbra korzysta z tych samych ustawień, co oferta MX Plan zawarta w pakiecie hostingowym OVHcloud lub oferowana samodzielnie. Z tego powodu poniższe linki konfiguracyjne zawierają w tytule adnotację "MX Plan".

Kliknij kartę odpowiadającą typowi używanego urządzenia:

> [!tabs]
> **Komputer z systemem Windows**
>>
>> - [Outlook dla Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird dla Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Poczta elektroniczna systemu Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Komputer Apple mac**
>>
>> - [Outlook for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail na macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird dla macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone lub iPad**
>>
>> - [Mail na iPhone'a i iPada](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone lub tablet z systemem Android**
>>
>> - [Gmail na Androida](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interfejs WWW**
>>
>> - [Interfejs online programu Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Przypomnienie parametrów POP, IMAP i SMTP <a name="popimap-settings"></a>

Jeśli chcesz otrzymywać e-maile, wybierz rodzaj konta. Zalecamy użycie **IMAP**. Możesz jednak wybrać **POP**.

- **Konfiguracja POP**

|Informacje|Opis|
|---|---|
|Nazwa użytkownika|Wpisz pełny adres e-mail **complete**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer **EUROPE** (ruch przychodzący)|pop.mail.ovh.net **ou** ssl0.ovh.net|
|Serwer **AMERYKA / AZJA-PACYFIK** (ruch przychodzący)|pop.mail.ovh.ca|
|Port|995|
|Typ zabezpieczeń|SSL/TLS|

- **Konfiguracja IMAP**

|Informacje|Opis|
|---|---|
|Nazwa użytkownika|Wpisz pełny adres e-mail **complete**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer **EUROPE** (ruch przychodzący)|imap.mail.ovh.net **ou** ssl0.ovh.net|
|Serwer **AMERYKA / AZJA-PACYFIK** (ruch przychodzący)|imap.mail.ovh.ca|
|Port|993|
|Typ zabezpieczeń|SSL/TLS|

Do wysyłki e-maili, jeśli wprowadzasz ręcznie ustawienia **SMTP** w ustawieniach konta poniżej znajdziesz parametry, których należy użyć:

- **Konfiguracja SMTP**

|Informacje|Opis|
|---|---|
|Nazwa użytkownika|Wpisz pełny adres e-mail **complete**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer **EUROPE** (ruch przychodzący)|smtp.mail.ovh.net **ou** ssl0.ovh.net|
|Serwer **AMERYKA / AZJA-PACYFIK** (przychodzący)|smtp.mail.ovh.ca|
|Port|465|
|Typ zabezpieczeń|SSL/TLS|

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Skorzystaj z poczty Zimbra Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ dotyczący rozwiązania Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

W przypadku specjalistycznych usług (SEO, programowanie, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Przyłącz się do [społeczności użytkowników](/links/community).