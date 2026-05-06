---
title: "Zimbra - Konfiguracja konta e-mail w programie pocztowym"
excerpt: "Wybierz metodę konfiguracji odpowiednią dla Twojej oferty Zimbra Starter lub Pro oraz Twojego programu pocztowego"
updated: 2026-05-04
---

## Wprowadzenie

Z ofertą Zimbra OVHcloud oferuje platformę open source do pracy zespołowej z wszystkimi funkcjami niezbędnymi do profesjonalnego użytku. Niniejszy przewodnik pomoże Ci wybrać metodę konfiguracji odpowiednią dla Twojej oferty Zimbra oraz Twojego programu pocztowego.

**Dowiedz się, jaką metodę wybrać, aby skonfigurować Twoje konto e-mail Zimbra w wybranym programie pocztowym.**

## Wymagania początkowe

- Posiadasz subskrypcję konta e-mail w jednym z naszych [rozwiązań Zimbra](/links/web/emails-zimbra) (**Zimbra Starter** lub **Zimbra Pro**).
- Masz program pocztowy zainstalowany na wybranym urządzeniu.
- Posiadasz dane logowania do konfigurowanego adresu e-mail.

<!-- CP-NAV-START:web-zimbra -->
---

### Dostęp do Panelu klienta OVHcloud

- **Bezpośredni link:** [Zimbra](/links/control-panel/web-zimbra)
- **Aby uzyskać dostęp do usług:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## W praktyce

### Identyfikacja Twojej oferty Zimbra <a name="identifier-offre"></a>

Stosowana metoda konfiguracji zależy od posiadanej oferty Zimbra. Obie oferty nie obsługują tych samych protokołów.

| Oferta | Obsługiwane protokoły | Synchronizowane funkcje |
|---|---|---|
| **Zimbra Starter** | IMAP, POP, SMTP | Wyłącznie e-maile |
| **Zimbra Pro** | IMAP, POP, SMTP, **ActiveSync**, **EWS** | E-maile, kalendarz, kontakty, zadania |

> [!primary]
>
> Aby zidentyfikować Twoją ofertę, zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do `Web Cloud`{.action}, a następnie `Zimbra Mail`{.action}. W zakładce `Konta e-mail`{.action} oferta jest wskazana w kolumnie **Pakiet** dla każdego konta.

### Konfiguracja konta Zimbra Pro <a name="config-zimbra-pro"></a>

> [!success]
>
> Aby w pełni korzystać z funkcji pracy zespołowej Zimbra Pro (synchronizacja kalendarza, kontaktów i zadań), używaj protokołów **ActiveSync** lub **EWS** za pomocą poniższych dedykowanych przewodników. Konfiguracja IMAP/POP jest nadal możliwa, ale synchronizuje wyłącznie e-maile.

Kliknij kartę odpowiadającą typowi używanego urządzenia:

> [!tabs]
> **Komputer z systemem Windows**
>>
>> - [Klasyczny Outlook przez ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_windows)
>>
> **Komputer Apple Mac**
>>
>> - [Mail przez EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_macos)
>> - [Outlook przez EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_macos)
>>
> **iPhone lub iPad**
>>
>> - [Mail przez ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_app_ios)
>> - [Outlook przez ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_ios)
>>
> **Smartfon lub tablet z systemem Android**
>>
>> - [Gmail przez ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_gmail_app_android)
>> - [Outlook przez ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_android)
>>

### Konfiguracja konta Zimbra Starter (lub konta Zimbra Pro w IMAP/POP) <a name="mail-config"></a>

Dla oferty **Zimbra Starter** lub jeśli wolisz konfigurację IMAP/POP dla Twojego konta **Zimbra Pro**, użyj poniższych przewodników.

> [!primary]
>
> Poniższe przewodniki są wspólne z ofertą MX Plan, ponieważ ustawienia IMAP/POP/SMTP są ściśle identyczne dla obu ofert. Z tego powodu linki zawierają w tytule adnotację "MX Plan".

Kliknij kartę odpowiadającą typowi używanego urządzenia:

> [!tabs]
> **Komputer z systemem Windows**
>>
>> - [Outlook dla Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird dla Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Mail dla Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Komputer Apple Mac**
>>
>> - [Outlook dla macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail dla macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird dla macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone lub iPad**
>>
>> - [Mail dla iPhone'a i iPada](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartfon lub tablet z systemem Android**
>>
>> - [Gmail dla Androida](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interfejs WWW**
>>
>> - [Interfejs online programu Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Korzystanie z aplikacji mobilnej Zimbra <a name="config-zimbra-app"></a>

Kompatybilna z ofertami **Zimbra Starter** i **Zimbra Pro** aplikacja mobilna Zimbra (Android i iOS) umożliwia dostęp do Twojego konta przy użyciu natywnego protokołu Zimbra.

- [Konfiguracja aplikacji mobilnej Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

### Referencyjne ustawienia IMAP, POP i SMTP <a name="popimap-settings"></a>

Jeśli Twój program pocztowy wymaga ręcznej konfiguracji, użyj następujących ustawień.

#### Serwery przychodzące

Aby otrzymywać e-maile, zalecamy protokół **IMAP**. Protokół **POP** jest nadal dostępny. Kliknij kartę odpowiadającą wybranemu protokołowi:

> [!tabs]
> **IMAP (zalecany)**
>>
>> - **Nazwa użytkownika**: **pełny** adres e-mail
>> - **Hasło**: hasło do adresu e-mail
>> - **Serwer EUROPA (przychodzący)**: `imap.mail.ovh.net` **lub** `ssl0.ovh.net`
>> - **Serwer AMERYKA/AZJA-PACYFIK (przychodzący)**: `imap.mail.ovh.ca`
>> - **Port**: 993
>> - **Typ zabezpieczeń**: SSL/TLS
>>
> **POP**
>>
>> - **Nazwa użytkownika**: **pełny** adres e-mail
>> - **Hasło**: hasło do adresu e-mail
>> - **Serwer EUROPA (przychodzący)**: `pop.mail.ovh.net` **lub** `ssl0.ovh.net`
>> - **Serwer AMERYKA/AZJA-PACYFIK (przychodzący)**: `pop.mail.ovh.ca`
>> - **Port**: 995
>> - **Typ zabezpieczeń**: SSL/TLS
>>

#### Serwer wychodzący

Aby wysyłać e-maile, użyj następujących ustawień **SMTP**:

- **Nazwa użytkownika**: **pełny** adres e-mail
- **Hasło**: hasło do adresu e-mail
- **Serwer EUROPA (wychodzący)**: `smtp.mail.ovh.net` **lub** `ssl0.ovh.net`
- **Serwer AMERYKA/AZJA-PACYFIK (wychodzący)**: `smtp.mail.ovh.ca`
- **Port**: 465
- **Typ zabezpieczeń**: SSL/TLS

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Konfiguracja aplikacji mobilnej Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

[Korzystanie z poczty Zimbra Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ dotyczący rozwiązania Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

W przypadku specjalistycznych usług (SEO, programowanie, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
