---
title: Object Storage Swift - Wykorzystanie Object Storage z rClone
slug: pcs/sync-rclone-object-storage
section: OpenStack Swift Storage Class Specifics
order: 140
---

**Ostatnia aktualizacja dnia 2018-01-22**

## Wprowadzenie

Object Storage w OVH można synchronizować przy użyciu rClone. 
rClone to zewnętrzne oprogramowanie do synchronizacji, szczegółowe informacje dotyczące korzystania z tego rozwiązania znajdują się w jego [oficjalnej dokumentacji](https://Rclone.org/).

**Z tego przewodnika, dowiesz się jakie kroki należy wykonać podczas synchronizacji w Panelu klienta OVH.**

## Wymagania początkowe

- Utworzony kontener *Object Storage* (z poziomu Panelu klienta lub z poziomu [Horizon](https://docs.ovh.com/pl/storage/tworzenie_kontenera_obiektow/){.external}).
- Utworzony [użytkownik OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external}.

## W praktyce

Po utworzeniu kontenera oraz użytkownika OpenStack do wykonania pozostają dwie czynności:

### Uzyskanie pliku konfiguracyjnego do rClone:

Po utworzeniu [użytkownika OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external} w Panelu klienta możesz uzyskać plik konfiguracyjny rClone.

W tym celu, na stronie użytkowników OpenStack w Panelu klienta, należy kliknąć ikonę klucza francuskiego, znajdującą się z prawej strony identyfikatora użytkownika, a następnie kliknąć `Pobierz plik konfiguracyjny rClone`{.external}.
![Pobierz plik konfiguracyjny rClone](images/download_file.png){.thumbnail}


### Konfiguracja rClone:

Po pobraniu pliku, uruchom poniższe polecenie, które spowoduje dodanie nowej przestrzeni dyskowej:

```sh
Rclone config
```

Pojawi się prośba o wprowadzenie zawartych w pliku danych konfiguracyjnych.

> [!primary]
>
> Możesz również skopiować i wkleić zawartość pliku w polu przeznaczonym na konfigurację Rclone (*.config/Rclone/Rclone.conf*).
> 

Po przeprowadzeniu konfiguracji, możesz przetestować ją wywołując listę Twoich kontenerów:

```sh
Rclone lsd BackupStorage
```

*BackupStorage* odpowiada nazwie nadanej przestrzeni dyskowej.

Na oficjalnej stronie rClone znajduje się dokładna dokumentacja opisująca działania potrzebne do przeprowadzenia synchronizacji Object Storage poprzez rClone: [Oficjalna dokumentacja rClone](https://Rclone.org/swift/){.external}.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.