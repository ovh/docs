---
title: Logowanie do interfejsu vSphere
slug: polaczenie-interfejs-vsphere
excerpt:  Poznaj różne sposoby logowania do vSphere
section: Pierwsze kroki
order: 2
---

**Ostatnia aktualizacja z dnia 01-09-2020**

## Wprowadzenie

**Ten przewodnik prezentuje różne sposoby logowania do vSphere.**

## Wymagania początkowe

- Pełnienie funkcji kontaktu administracyjnego dla usługi Private Cloud.
- Utworzenie aktywnego użytkownika w Panelu klienta.


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

Na stronie `Home`{.action} odnajdziesz menu główne Twojego vCenter. Będziesz mógł wykonać różne czynności, takie jak:

- Wdrożenie maszyny wirtualnej po przejściu do `Hosts and Clusters`{.action};
- Przeglądanie datastores.

> [!warning]
>
> Zarządzanie urządzeniami *NSX Edge* nie jest jeszcze możliwe w przypadku tego klienta webowego.
>

### Wykorzystanie web client flash

Web client flash jest dostępny w webowym interfejsie Twojej usługi Private Cloud pod adresem: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client> (zastąp pcc-xxx-xx-xx-xxx.ovh.com adresem Twojej usługi Private Cloud).

Zaloguj się, podając dane identyfikacyjne, które zostały do Ciebie przesłane:

![Klient vSphere](images/vsphere-client.png){.thumbnail}

Przejdź do interfejsu:

![Logowanie do interfejsu vSphere](images/connection_interface_w.png){.thumbnail}

Na stronie `Home`{.action} odnajdziesz menu główne Twojego vCenter. Będziesz mógł wykonać różne czynności, takie jak:

- Wdrożenie maszyny wirtualnej po przejściu do `Hosts and Clusters`{.action};
- O ile dysponujesz tą opcją, wykorzystanie NSX po przejściu do `Network & Security`{.action};
- Przeglądanie datastores.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
