---
title: Połączenie z interfejsem vSphere
slug: polaczenie-interfejs-vsphere
routes:
    canonical: 'https://docs.ovh.com/pl/private-cloud/polaczenie-interfejs-vsphere/'
excerpt: Odkryj różne sposoby łączenia się z vSphere
section: Pierwsze kroki
updated: 2020-11-18
---

**Ostatnia aktualizacja dnia 18-11-2020**

## Wprowadzenie

**Ten przewodnik prezentuje różne sposoby łączenia się z interfejsem vSphere.**

## Wymagania początkowe

- Konto administratora Managed Bare Metal z danymi do logowania.
- Utworzenie aktywnego konta użytkownika w Panelu klienta.

## W praktyce

### Odzyskiwanie loginów

Loginy są wysyłane e-mailem przy tworzeniu konta Managed Bare Metal, przy zmianie hasła lub przy tworzeniu konta użytkownika:

```
adres IP/Nazwa: pcc-xxx-xxx-xxx-xxx.ovh.com nazwa użytkownika : admin hasło : xxxxxx
```

Dokument VMware zawiera spis portów, które należy otworzyć w zaporze sieciowej, aby np. mieć dostęp do konsoli: [Dostęp do konsoli](https://kb.vmware.com/kb/1012382){.external}

### Połączenie z vSphere za pomocą klienta desktopowego

Najpierw należy pobrać plik instalacyjny oprogramowania vSphere Client. W e-mailu otrzymanym podczas tworzenia konta użytkownika znajduje się link.

Można go również pobrać pod adresem: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/client/VMware-viclient.exe`.

Pobrany plik należy następnie uruchomić. Rozpocznie się instalacja. Asystent instalacji poprosi najpierw o wybranie języka i zaakceptowanie warunków korzystania z oprogramowania VMware.

Po zakończeniu instalacji asystent zaproponuje logowanie do usługi Managed Bare Metal z wykorzystaniem otrzymanych wcześniej danych do logowania.

![Połączenie z klientem desktopowym](images/connexion_client_l.png){.thumbnail}

### Połączenie za pomocą klienta webowego

Klient webowy jest dostępny w ramach Twojej usługi Managed Bare Metal pod adresem: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client` (zastąp pcc-xxx-xx-xx-xxx.ovh.com adresem Twojej Managed Bare Metal).

Zaloguj się wykorzystując otrzymane dane do logowania:

![Klient vSphere](images/vsphere-client.png){.thumbnail}

Uzyskasz następnie dostęp do tego interfejsu:

![Logowanie do vSphere](images/connection_interface_w.png){.thumbnail}

Na stronie `Home`{.action} znajdziesz główne menu swojego vCenter. Z jego poziomu będziesz mógł wykonywać różne czynności:

- uruchamiać wirtualne maszyny w sekcji `Hosts and Clusters`{.action};
- przeglądać zawartość zasobów datastore.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.