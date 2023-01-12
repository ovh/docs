---
title: Cloud Archive Swift - Zarządzanie Twoimi archiwami za pomocą Rsync
slug: pca/rsync
excerpt: Dowiedz się, jak uzyskać dostęp do Twoich archiwów Public Cloud za pomocą Rsync
section: OpenStack Swift Archive Storage Class Specifics
order: 090
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 08-12-2020**

## Wprowadzenie

OVHcloud Public Cloud Archive to rozwiązanie do przechowywania danych zarządzane głównie przez API OpenStack. Opracowaliśmy jednak bramę pozwalającą na połączenie z kontenerem PCA za pomocą Rsync.

**Poznaj informacje niezbędne do uruchomienia połączenia z danymi przechowywanymi za pomocą Rsync.**

## Wymagania początkowe

### Rsync

[Rsync](https://rsync.samba.org/) est un utilitaire Open Source qui permet un transfert de fichiers incrémentiel rapide.<br>
Pliki binarne są dostępne w większości najnowszych dystrybucji systemów operacyjnych. Dlatego należy najpierw sprawdzić, czy możesz zainstalować pakiet Rsync przy użyciu standardowych narzędzi do instalacji pakietów dla systemu operacyjnego.

### ID OpenStack

Za pomocą tego [przewodnika](https://docs.ovh.com/pl/public-cloud/horizon/) możesz wygenerować identyfikator klienta i hasło OpenStack.

### TenantName

TenantName odpowiada nazwie Twojego projektu Horizon. Aby uzyskać TenantName, zaloguj się do interfejsu OpenStack: [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}.

Po zalogowaniu TenantName jest widoczny na górze strony.

![horizon](images/image1.png){.thumbnail}

## W praktyce

### Szczegóły połączenia

- Host Name: gateways.storage.{region}.cloud.ovh.net
- User Name: pca
- Password: {TenantName}.{Username_Openstack}.{Password_Openstack}
- Port: 22

### Przesyłanie danych

Przykład wiersza poleceń, jeśli utworzyłeś kontener PCA w regionie GRA:

```bash
user@host:~$ rsync -a /path/to/my/dir pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Pobieranie danych

OVHcloud Public Cloud Archive oferuje tanią przestrzeń dyskową danych w zamian za większy czas odpowiedzi w procesie odzyskiwania danych. Aby uzyskać dostęp do archiwum, należy otrzymać wniosek o ekstrakcję wraz z nazwami kontenera i archiwów, do których się odnosi.

Po wyodrębnieniu archiwum możesz pobrać archiwum przez 24 godziny z nieograniczoną szybkością i nieograniczoną częstotliwością dostępu. Po tym czasie archiwum zostanie ponownie zablokowane.

```bash
user@host:~$ rsync -a pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Dodatkowe informacje: Options Rsync

Ponieważ serwer Rsync został skopiowany do działania z API Swift, opcje te zostaną zastosowane po stronie serwera, aby dopasować zachowanie głównego serwera do przechowywania obiektów:

> —inplace: Zamiast metody domyślnej polegającej na utworzeniu nowej kopii pliku, a następnie na jej przeniesienie po zakończeniu procesu, Rsync zapisuje zaktualizowane dane bezpośrednio do pliku docelowego.
>

Ponadto tylko jedna podgrupa opcji jest dostępna dla klienta:

> -a, --archive: Włącz tryb archiwizacji.
>
> -r, —recursive: Kopiuj katalogi rekurencyjnie.
>
> -v, —verbose: Zwiększ ilość informacji, które otrzymasz podczas transferu.
>
> --del, --delete: Usuwa zbędne pliki z docelowego katalogu.
>
> -P, --progress: Wydrukuje informacje wskazujące postęp transferu.


## Sprawdź również

[Specyfika API Openstack Swift w usłudze Cloud Archive](https://docs.ovh.com/gb/en/storage/pca/api/)

[Strona główna Rsync](https://linux.die.net/man/1/rsync)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
