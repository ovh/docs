---
title: Logowanie do interfejsu vSphere
slug: polaczenie-interfejs-vsphere
excerpt:  Poznaj różne sposoby logowania do vSphere
section: Pierwsze kroki
order: 2
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 24-06-2022**

## Wprowadzenie

**Z tego przewodnika dowiesz się, jak się zalogować do vSphere.**

## Wymagania początkowe

- Posiadanie statusu kontaktu administratora infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymywać dane do logowania.
- Dodanie adresów IP do sekcji `Bezpieczeństwo`{.action} w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem [Autoryzacja IP, które mogą łączyć się z vCenter](https://docs.ovh.com/pl/private-cloud/autoryzacja-IP-ktore-moga-laczyc-sie-z-vCenter/).

## W praktyce

### Uzyskanie danych identyfikacyjnych

Dane identyfikacyjne są wysyłane pocztą elektroniczną podczas tworzenia projektu Hosted Private Cloud, przy okazji zmiany hasła lub tworzenia użytkownika:

```
IP/Name : pcc-xxx-xxx-xxx-xxx.ovh.com username : admin password : xxxxxx
```

Ten dokument VMware zawiera listę różnych portów, które należy otworzyć na firewall, aby uzyskać na przykład dostęp do konsoli: [Dostęp do konsoli](https://kb.vmware.com/kb/1012382){.external-link}

### Wykorzystanie klienta HTML5

Klient HTML5 jest dostępny w webowym interfejsie Twojej usługi Hosted Private Cloud pod adresem: (zastąp pcc-xxx-xx-xx-xxx.ovh.com adresem Twojej usługi Hosted Private Cloud).

![Logowanie do interfejsu vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Przejdź do interfejsu:

![Logowanie do interfejsu vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

Na stronie `Home`{.action} odnajdziesz menu główne Twojego vCenter.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
