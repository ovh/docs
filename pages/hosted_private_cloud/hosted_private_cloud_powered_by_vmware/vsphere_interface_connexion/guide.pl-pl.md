---
title: Logowanie do interfejsu vSphere
excerpt:  Poznaj różne sposoby logowania do vSphere
updated: 2022-06-24
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

**Z tego przewodnika dowiesz się, jak się zalogować do vSphere.**

## Wymagania początkowe

- Posiadanie statusu kontaktu administratora infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymywać dane do logowania.
- Dodanie adresów IP do sekcji `Bezpieczeństwo`{.action} w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem [Autoryzacja IP, które mogą łączyć się z vCenter](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter).

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
