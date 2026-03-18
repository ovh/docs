---
title: "Usuń konto e-mail"
excerpt: "Dowiedz się, jak usunąć lub zresetować konto e-mail w Twojej usłudze e-mail"
updated: 2026-02-19
---

## Wprowadzenie

Chcesz:

- Usuń konto e-mail, którego nie używasz. 
- Zresetuj konto e-mail, aby z niego korzystać na nowym adresie e-mail. 
- Zresetuj konto e-mail, aby je rozwiązać.

**Dowiedz się, jak usunąć lub zresetować konto e-mail w Twojej usłudze e-mail**

## Wymagania początkowe

- Posiadanie wcześniej skonfigurowanego rozwiązania poczty elektronicznej OVHcloud:
    - **MX Plan**, zaproponowanego w naszej [ofercie hostingu](/links/web/hosting), zawartego w [Darmowy hosting 100M](/links/web/domains-free-hosting) lub zamówionym oddzielnie jako rozwiązanie autonomiczne.
    - [**Exchange**](/links/web/emails-exchange).
    - [**E-mail Pro**](/links/web/email-pro).
    - [**Zimbra**](/links/web/zimbra).
- Posiadanie statusu kontaktu administracyjnego danej usługi e-mail.
- Dostęp do danych adresów e-mail.

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-zimbra -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Dostęp do Panelu klienta OVHcloud

**MX Plan:**

- **Link bezpośredni:** [MX Plan](/links/control-panel/web-mx-plan)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `MX Plan`{.action} > Wybierz usługę MX Plan

**Zimbra:**

- **Link bezpośredni:** [Zimbra](/links/control-panel/web-zimbra)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

**E-mail Pro:**

- **Link bezpośredni:** [E-mail Pro](/links/control-panel/web-email-pro)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `E-mail Pro`{.action} > Wybierz platformę

**Exchange:**

- **Link bezpośredni:** [Exchange](/links/control-panel/web-exchange)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Exchange`{.action} > Wybierz platformę

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-zimbra -->
<!-- CP-NAV-END:web-mx-plan -->

<a name="whichmxplan"></a>

> [!primary]
>
> **Identyfikacja technologii e-mail Twojej oferty MX Plan.**
>
> W zależności od daty aktywacji Twojej oferty MX Plan lub niedawnej migracji, powiązana technologia e-mail może się różnić. Technologia ta charakteryzuje się interfejsem webmail. Aby ją zidentyfikować:
>
> - W zakładce `Informacje ogólne`{.action} zanotuj używaną technologię pod wzmianką **Webmail** w ramce `Abonament`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

## W praktyce <a name="instructions"></a>

OVHcloud oferuje 4 rozwiązania poczty elektronicznej. Pojęcie usunięcia konta różni się w zależności od wybranej oferty.

- **E-mail MX Plan**: oferta ta jest sprzedawana w formie pakietu kilku kont e-mail. Po usunięciu konta uruchomisz lokalizację dla pakietu.
- **E-mail Pro**, **Hosted Exchange** i **Zimbra**: te oferty są na zamówienie. Możesz zamówić indywidualny abonament na konto e-mail. Jeśli chcesz usunąć konto e-mail, musisz wykonać **reset**. Po zresetowaniu konta e-mail możesz ponownie użyć tego konta do utworzenia nowego konta e-mail. Możesz również [zrezygnować z subskrypcji](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#usuwanie-kont) tego konta, jeśli chcesz go definitywnie usunąć.

### Usuń lub zresetuj konto e-mail

Wybierz kartę odpowiadającą Twojej usłudze e-mail:

> [!tabs]
> **MX Plan Roundcube**
>>
>> Aby zidentyfikować technologię e-mail związaną z Twoją usługą MX Plan, zapoznaj się z częścią "[Identyfikacja technologii e-mail Twojej oferty MX Plan](#whichmxplan)" tego przewodnika.
>>
>> 1. Przejdź do zakładki `Konta e-mail`{.action}. Pojawi się okno, w którym widoczne są istniejące konta e-mail.
>> 1. Kliknij przycisk `...` po prawej stronie konta, które ma zostać zmienione, a następnie kliknij polecenie `Usuń konto`{.action}.
>>
>> ![email](images/email-mxplan-legacy-reset.png){.thumbnail}
>>
> **MX Plan Zimbra/OWA**
>>
>> Aby zidentyfikować technologię e-mail związaną z Twoją usługą MX Plan, zapoznaj się z częścią "[Identyfikacja technologii e-mail Twojej oferty MX Plan](#whichmxplan)" tego przewodnika.
>>
>> 1. Przejdź do zakładki `Konta e-mail`{.action}. Pojawi się okno, w którym widoczne są istniejące konta e-mail.
>> 1. Kliknij na przycisk `...` po prawej stronie konta, które chcesz zmienić, po czym kliknij przycisk `Zresetuj to konto`{.action}.
>>
>> ![e-mail](images/email-mxplan-new-reset.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> 1. Przejdź do zakładki `Konta e-mail`{.action}. Pojawi się okno, w którym widoczne są istniejące konta e-mail.
>> 1. Kliknij na przycisk `...` po prawej stronie konta, które chcesz zmienić, po czym kliknij przycisk `Zresetuj to konto`{.action}.
>>
>> Po zresetowaniu konta, jeśli chcesz go definitywnie usunąć, należy go rozwiązać. W tym celu zapoznaj się z naszym przewodnikiem [Zarządzanie płatnościami za Twoje konta Email-Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)
>>
>> ![email](images/emailpro-reset.png){.thumbnail}
>>
> **Exchange**
>>
>> 1. Przejdź do zakładki `Konta e-mail`{.action}.
>> 1. Kliknij na przycisk `...` po prawej stronie konta, które ma zostać zmienione, a następnie kliknij na `Zresetuj`{.action}.
>>
>> Po zresetowaniu konta, jeśli chcesz go definitywnie usunąć, należy go rozwiązać. W tym celu zapoznaj się z naszym przewodnikiem [Zarządzanie płatnościami za Twoje konta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange).
>>
>> ![email](images/exchange-reset.png){.thumbnail}
>>
> **Zimbra STARTER/PRO**
>>
>> 1. Przejdź do zakładki `Konto email`{.action}. Pojawi się okno, w którym widoczne są istniejące konta e-mail.
>> 1. Kliknij przycisk `⋮`{.action} po prawej stronie konta, które ma zostać zmienione, a następnie kliknij `Usuń`{.action}.
>>
>> ![email](images/email-zimbra-reset.png){.thumbnail}
>>

## Sprawdź również

[Pierwsze kroki z usługą MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Pierwsze kroki z usługą E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Pierwsze kroki z usługą Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Pierwsze kroki z Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Zarządzanie płatnościami za Twoje konta E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Zarządzanie płatnościami za konta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
