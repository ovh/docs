---
title: Object Storage Swift - Pierwsze kroki z API Swift
excerpt: Pierwsze kroki z API Swift
slug: pcs/getting-started-with-the-swift-api
legacy_guide_number: g1916
section: OpenStack Swift Storage Class Specifics
order: 010
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 25-06-2021**

## Wprowadzenie

API OpenStack umożliwia wygenerowanie skryptów do automatyzacji Twoich działań na instancjach Public Cloud.

*Swiftclient* OpenStack umożliwia interakcję z kontenerami i obiektami i zarządzanie nimi. Możesz na przykład regularnie wysyłać pliki do Twoich kontenerów, aby je zapisać.

**Niniejszy przewodnik pomoże Ci zapoznać się z API OpenStack, aby zarządzać kontenerami obiektów za pomocą *python-swiftclient*.**

## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/prepare_the_environment_for_using_the_openstack_api/) poprzez instalację python-swiftclient
- [Pobranie zmiennych środowiskowych OpenStack](https://docs.ovh.com/pl/public-cloud/set-openstack-environment-variables/)

## W praktyce

> [!primary]
>
Należy pamiętać, że poniższe instrukcje dotyczą wyłącznie interfejsu wiersza poleceń dystrybucji GNU/Linux, po wdrożeniu powyższych wymagań.
>

### Dokumentacja Swift

Listę możliwych zamówień znajdziesz w dokumentacji klienta:

```
admin@server-1:~$ swift --help
```

Oto lista głównych zamówień:

|Zamówienie|Opis|
|---|---|
|**delete**|Usuwa kontener lub obiekty znajdujące się w kontenerze|
|**download**|Pobieranie obiektów z kontenerów|
|**lista**|Wyświetla kontenery konta lub obiekty kontenera|
|**post**|Aktualizuj metadane konta, kontenera lub obiektu. Jeśli kontener nie zostanie odnaleziony, zostanie on automatycznie utworzony.|
|**stat**|Wyświetla informacje dotyczące konta, kontenera lub obiektu.|
|**upload**|Pobierz pliki i katalogi określone do danego kontenera.|
|**zdolność**|Wyciągnij pojemność proxy.|
|**świątynia**|generuje tymczasowy adres URL dla obiektu Swift.|


Aby uzyskać więcej informacji na temat konkretnego zamówienia Swift, dodaj `--help` na końcu zamówienia:

```
admin@server-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional argumenty:
[container] Name of container to post to.
[object] Name of object to post. Wielokierunkowy Specify
dla wielu obiektów.
[...]
```

Znajdziesz również dokumentację Swift dostępną na [stronie OpenStack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).

### Tworzenie kontenera obiektów publicznych

- Utwórz kontener "container1":

```
admin@server-1:~$ swift post container1
```

- Skonfiguruj prawa dostępu, aby udostępnić Twój kontener publicznie:

```
admin@server-1:~$ swift post --header "X-Container-Read: .r:*" container1
```

- Sprawdź konfigurację kontenera:

```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: kontener1
Objects: 0
Bajty: 0
Read ACL: r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: klosz
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```

### Wysyłanie plików do kontenera

- Prześlij zawartość katalogu lokalnego do kontenera:

```
admin@server-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```

Prefiks zostanie automatycznie dodany do plików, jeśli wyślesz cały folder zamiast jednego pliku.

- Wyświetl listę plików kontenera:

```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```

Możliwe jest wyświetlenie plików z określonym prefiksem dzięki argumentowi `--prefix`:

```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

Jeśli kontener jest skonfigurowany jako publiczny, możesz uzyskać dostęp do pliku za pomocą adresu URL:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```

Ten adres URL składa się z punktu zakończenia dostępnego w [interfejsie Horizon](https://docs.ovh.com/pl/public-cloud/dostęp-i-bezpieczenstwo-w-horizon/), nazwy kontenera i nazwy obiektu (w tym prefiksu).

### Pobieranie plików

- Pobierz plik:

```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, razem 0.453s, 0.000 MB/s]
```

Możesz pobrać kilka plików z tym samym prefiksem, wpisując następujące polecenie:

```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, łącznie 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, łącznie 0.559s, 2.657 MB/s]
```

### Usuwanie kontenerów lub obiektów

- Usuń plik:

```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```

Podobnie jak w przypadku pobierania, możesz usunąć kilka plików z tym samym prefiksem za pomocą polecenia:

```
admin@server-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Usuń kontener:

```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```

Operacja ta spowoduje usunięcie wszystkich plików z kontenera.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
