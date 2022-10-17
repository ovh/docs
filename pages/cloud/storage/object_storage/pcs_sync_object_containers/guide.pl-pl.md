---
title: Object Storage Swift - Synchronizacja kontenerów obiektów
slug: pcs/sync-object-containers
section: OpenStack Swift Storage Class Specifics
order: 060
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 27-10-2021**

## Wprowadzenie

Jeśli chcesz przenosić obiekty z jednego centrum danych do innego lub z jednego projektu do innego, najlepszym sposobem na uniknięcie przerwy w działaniu usługi podczas migracji jest synchronizacja obiektów między kontenerami. Niniejszy przewodnik wyjaśnia, jak wdrożyć to rozwiązanie.

## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/) z klientem swift
- [Pobranie zmiennych środowiskowych OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/)
- 2 kontenerów obiektów w 2 różnych centrach danych

## W praktyce

> [!primary]
>
> Jeśli kontener zawiera obiekty o rozmiarze większym niż 5Gb, oba kontenery muszą mieć taką samą nazwę.
>

### Konfiguracja synchronizacji

#### Utworzenie klucza synchronizacji

Aby kontenery mogły się identyfikować, utwórz klucz i skonfiguruj go na każdym z kontenerów obiektów:

- Utwórz klucz:


```bash
root@server-1:~$ sharedKey=$(openssl rand -base64 32)
```


#### Konfiguracja kontenera odbiorcy

Najpierw skonfiguruj klucz na kontenerze, który otrzyma dane. W naszym przypadku znajduje się on w BHS.

- Sprawdź obszar naładowany w zmiennych środowiskowych:

```bash
root@server-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS
```

- Skonfiguruj klucz w kontenerze odbiorcy:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- Sprawdza się, czy konfiguracja została przeprowadzona za pomocą następującego polecenia i jednocześnie pobiera się zawartość zmiennej "Account":

```bash
root@server-1:~$ swift stat containerBHS
                         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
                       Container: containerBHS
                         Objects: 0
                           Bytes: 0
                        Read ACL:
                       Write ACL:
                         Sync To:
                        Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
                   Accept-Ranges: bytes
                X-Storage-Policy: Policy-0
                      Connection: close
                     X-Timestamp: 1444812373.28095
                      X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
                    Content-Type: text/plain; charset=utf-8
```

- Pobierz adres kontenera odbiorcy, aby następnie skonfigurować go w kontenerze źródłowym (kontener jest typu: "//OVH_PUBLIC_CLOUD/Region/Account/Kontener")

```bash
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

#### Konfiguracja kontenera źródłowego

- Zmiana regionu w zmiennych środowiskowych:

```bash
root@server-1:~$ export OS_REGION_NAME=GRA
```

- Skonfiguruj klucz w kontenerze źródłowym:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Skonfiguruj odbiorcę w kontenerze źródłowym:

```bash
root@server-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- Jak poprzednio, możliwe jest sprawdzenie, czy konfiguracja została przeprowadzona przy użyciu następującego polecenia:

```bash
root@server-1:~$ swift stat containerGRA
         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
       Container: containerGRA
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS
        Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
   Accept-Ranges: bytes
      Connection: close
     X-Timestamp: 1444813114.55493
      X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
    Content-Type: text/plain; charset=utf-8
```

#### Weryfikacja synchronizacji

Po kilku minutach (w zależności od liczby i rozmiaru plików do wysłania) można sprawdzić, czy synchronizacja przebiegła pomyślnie, po prostu odczytując pliki w każdym z kontenerów.

- Wyświetl pliki dostępne w kontenerze źródłowym:

```bash
root@server-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- Wyświetl pliki dostępne w kontenerze docelowym:

```bash
root@server-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```

### Odwróć synchronizację między dwoma kontenerami

Aby odwrócić synchronizację między dwoma kontenerami, należy usunąć metadane `—sync-to` z kontenera źródłowego i ponownie zadeklarować je w innym kontenerze, który stanie się nowym kontenerem źródłowym.

> [!warning]
>
> Pamiętaj, aby zmienić również region w nowym URL sync-to.
>

```bash
root@server-1:~$ swift post -H "X-Container-Sync-To:" containerGRA
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerGRA"
root@server-1:~$ export OS_REGION_NAME=BHS
root@server-1:~$ swift post --sync-to "$destContainer" containerBHS
```

### Zatrzymaj synchronizację między dwoma kontenerami

Aby zatrzymać synchronizację między dwoma kontenerami, należy usunąć metadane `—sync-key` i `—sync-to`.

```bash
swift post -H "X-Container-Sync-Key:" containerGRA
swift post -H "X-Container-Sync-To:" containerGRA
```

> [!primary]
>
> Niniejszy przewodnik jest również przydatny do migracji obiektów z RunAbove na
> Public Cloud.
>

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
