---
title: 'Korzystanie z aliasów i przekierowań e-mail'
excerpt: 'Dowiedz się, jak zarządzać aliasami i przekierowaniami e-mail'
routes:
  canonical: "/pages/web/emails/feature_redirections"
updated: 2020-05-20
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 01-02-2023**

## Wprowadzenie

W tym przewodniku znajdziesz różne informacje i pomoce dotyczące konfiguracji przekierowań i aliasów e-mail, na przykład w celu przesłania wiadomości otrzymanych na adres A na adres B.

**Dowiedz się, jak zarządzać aliasami i przekierowaniami e-mail.**

### Co to jest przekierowanie wiadomości e-mail?

Przekierowanie pozwala na zmianę pierwotnej podróży z jednego e-maila na jeden lub kilka innych adresów e-mail.

Na przykład chcesz, aby przy wysyłce wiadomości e-mail na adres **contact@mydomain.ovh** została ona również przekierowana na adres **john.smith@otherdomain.ovh**. Pozwala to na automatyczne przesłanie e-maila na adres **contact@mydomain.ovh** na adres **john.smith@otherdomain.ovh**.

### Co to jest alias e-mail?

W przeciwieństwie do przekierowania, adres e-mail powiązany z aliasem nie jest adresem, który się z nim konsultuje, jest to "maska".

Utworzenie aliasu dla Twojego konta e-mail umożliwia komunikację z użytkownikami konta "maska" bez ujawniania nadawcy adresu e-mail. Jeden adres e-mail może mieć kilka aliasów.

Na przykład adres e-mail to **john.smith@mydomain.ovh** oraz alias **information@mydomain.ovh**. Możesz wówczas podać do wiadomości swoich kontaktów adres **information@mydomain.ovh** i otrzymywać e-maile na **john.smith@mydomain.ovh**, bez znajomości **john.smith@mydomain.ovh**.

### Przekierowanie i alias <a name="diagram"></a>

- **Przekierowanie proste (schemat 1 poniżej)**: e-mail jest bezpośrednio wysyłany na adres przekierowania, pierwotnego adresata nie otrzymuje wiadomości e-mail.

- **Przekierowanie z kopią lokalną (schemat 2 poniżej)**: e-mail jest wysyłany do pierwotnego adresata oraz na adres przekierowania.

- **Alias e-mail (schemat 3 poniżej)**: e-mail jest wysyłany do aliasu, który zwraca go do adresata, na który został skonfigurowany alias.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Możesz skonfigurować przekierowanie na kilka adresów e-mail.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Posiadanie wcześniej skonfigurowanego rozwiązania poczty elektronicznej OVHcloud (**MX Plan**, zaproponowanego w naszej [ofercie hostingu](https://www.ovhcloud.com/pl/web-hosting/), zawartego w [hostingu Start10M bezpłatnie](https://www.ovhcloud.com/pl/domains/free-web-hosting/) lub zamówionym oddzielnie jako rozwiązanie autonomiczne, takie jak [Hosted Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/) lub [Email Pro](https://www.ovhcloud.com/pl/emails/email-pro/))

## W praktyce

Postępuj zgodnie z naszym przewodnikiem [Korzystanie z aliasów i przekierowań e-mail](/pages/web/emails/feature_redirections) w sekcji "Konta e-mail na hostingu - MX Plan".