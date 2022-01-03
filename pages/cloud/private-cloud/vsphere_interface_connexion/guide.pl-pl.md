---
title: Logowanie do interfejsu vSphere
slug: polaczenie-interfejs-vsphere
excerpt:  Poznaj różne sposoby logowania do vSphere
section: Pierwsze kroki
order: 2
---

**Ostatnia aktualizacja z dnia 28-12-2021**

## Wprowadzenie

**Ten przewodnik prezentuje różne sposoby logowania do vSphere.**

## Wymagania początkowe

- Posiadanie statusu kontaktu administratora infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymywać dane do logowania.
- Posiadanie aktywnego identyfikatora użytkownika [utworzonego w Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Uzyskanie danych identyfikacyjnych

Dane identyfikacyjne są wysyłane pocztą elektroniczną podczas tworzenia projektu Private Cloud, przy okazji zmiany hasła lub tworzenia użytkownika:

```
IP/Name : pcc-xxx-xxx-xxx-xxx.ovh.com username : admin password : xxxxxx
```

Ten dokument VMware zawiera listę różnych portów, które należy otworzyć na firewall, aby uzyskać na przykład dostęp do konsoli: [Dostęp do konsoli](https://kb.vmware.com/kb/1012382){.external-link}

### Wykorzystanie klienta HTML5

Klient HTML5 jest dostępny w webowym interfejsie Twojej usługi Private Cloud pod adresem: (zastąp pcc-xxx-xx-xx-xxx.ovh.com adresem Twojej usługi Private Cloud).

![Logowanie do interfejsu vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Przejdź do interfejsu:

![Logowanie do interfejsu vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

Na stronie `Home`{.action} odnajdziesz menu główne Twojego vCenter.

### Wykorzystanie web client flash

Web client flash jest dostępny w webowym interfejsie Twojej usługi Private Cloud pod adresem: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client> (zastąp pcc-xxx-xx-xx-xxx.ovh.com adresem Twojej usługi Private Cloud).

Zaloguj się, podając dane identyfikacyjne, które zostały do Ciebie przesłane:

![Klient vSphere](images/vsphere-client.png){.thumbnail}

Przejdź do interfejsu:

![Logowanie do interfejsu vSphere](images/connection_interface_w.png){.thumbnail}

Na stronie `Home`{.action} odnajdziesz menu główne Twojego vCenter.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
