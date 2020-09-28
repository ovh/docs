---
title: 'Korzystanie z automatycznych kopii zapasowych na prywatnym serwerze wirtualnym'
slug: uzywanie-automatyczne-kopie-zapasowe-vps
excerpt: 'Dowiedz się, jak włączyć opcję "Automatyczne kopie zapasowe" w Panelu klienta OVHcloud i korzystać z niej'
section: 'Opcje kopii zapasowych'
order: 2
---

**Ostatnia aktualizacja: 22-04-2020**

## Wprowadzenie

Dzięki tej opcji będziesz mieć w Panelu klienta OVHcloud gotowe kopie zapasowe prywatnego serwera wirtualnego (VPS) — wygodnie, bez konieczności łączenia się z serwerem i ręcznego ich tworzenia oraz przywracania. Kolejną korzyścią jest dostęp do kopii zapasowej za pośrednictwem protokołu SSH po jej wcześniejszym zamontowaniu.

**Dowiedz się, jak korzystać z automatycznych kopii zapasowych prywatnego serwera wirtualnego (VPS) OVHcloud.**

> [!primary]
>
Przed zastosowaniem opcji tworzenia kopii zapasowych zalecamy przejrzenie [stron produktów oraz często zadawanych pytań (FAQ)](https://www.ovhcloud.com/pl/vps/options/) w celu porównania cen i uzyskania szczegółowych informacji.
>

## Wymagania początkowe

- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- skonfigurowana [usługa VPS](https://www.ovhcloud.com/pl/vps/) OVHcloud
- dostęp administracyjny (uprawnienia użytkownika root) do prywatnego serwera wirtualnego za pośrednictwem protokołu SSH

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager), przejdź do sekcji „Serwer” i wybierz serwer na lewym pasku bocznym pod pozycją `VPS`{.action}.

### Krok 1: subskrybowanie opcji automatycznych kopii zapasowych

Po wybraniu prywatnego serwera wirtualnego kliknij kartę `Automatyczne kopie zapasowe`{.action} w menu poziomym.

W następnym kroku przeczytaj informację o cenie i kliknij pozycję `Zamów`{.action}. Po przejściu kolejnych kroków procesu zamówienia otrzymasz wiadomość e-mail z potwierdzeniem. Kopie zapasowe będą tworzone codziennie, aż do czasu anulowania tej opcji.


### Krok 2: przywracanie kopii zapasowej z Panelu klienta OVHcloud

Po wybraniu prywatnego serwera wirtualnego kliknij kartę `Automatyczne kopie zapasowe`{.action} w menu poziomym. Dostępnych będzie maksymalnie 15 codziennych kopii zapasowych. Kliknij ikonę `...`{.action} obok kopii zapasowej, którą chcesz przywrócić, i wybierz pozycję `Przywrócenie`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Jeśli niedawno zmieniło się Twoje hasło użytkownika administracyjnego (root), w wyświetlonym oknie zaznacz opcję „Modyfikuj hasło administratora przy przywracaniu", aby zachować bieżące hasło, i kliknij pozycję `Potwierdź`{.action}. Po ukończeniu zadania otrzymasz wiadomość e-mail. Czas potrzebny do przywrócenia kopii zapasowej zależy od używanej przestrzeni dyskowej.

> [!alert]
>
W procesie tworzenia automatycznych kopii zapasowych nie są uwzględniane dodatkowe dyski.
>

### Montowanie kopii zapasowej i dostęp do niej

Całkowite zastąpienie istniejącej usługi w wyniku przywrócenia nie jest konieczne. Opcja „Montowanie” umożliwia dostęp do danych kopii zapasowej w celu przywrócenia poszczególnych plików. 

> [!warning]
>OVHcloud oferuje usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tym samym odpowiada za zapewnienie ich prawidłowego działania.
>
>Niniejszy przewodnik zawiera informacje pomocne przy wykonywaniu typowych zadań. Jednak w przypadku wystąpienia problemów zalecamy kontakt z dostawcą danych usług lub wydawcą oprogramowania, ponieważ nie będziemy w stanie udzielić pomocy. Więcej informacji zawiera sekcja „Sprawdź również” tego przewodnika.
>

#### Krok 1: Panel klienta 

Kliknij ikonę `...`{.action} obok kopii zapasowej, do której chcesz uzyskać dostęp, i wybierz pozycję `Montowanie`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Po ukończeniu procesu otrzymasz wiadomość e-mail. Teraz możesz się połączyć z prywatnym serwerem wirtualnym i dodać partycję, na której znajduje się kopia zapasowa.

#### Krok 2: protokół SSH

Najpierw połącz się z prywatnym serwerem wirtualnym przy użyciu protokołu SSH.

Aby zweryfikować nazwę nowo przyłączonego urządzenia, użyj następującego polecenia:

```
# lsblk
```

Przykład danych wyświetlonych po wykonaniu tego polecenia:

```
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
sdc       8:32   0   50G  0 disk 
```
W tym przykładzie partycja zawierająca system plików kopii zapasowej ma nazwę „sdb1”.
Następnie utwórz katalog dla tej partycji i zdefiniuj go jako punkt montowania:

```
# mkdir -p /mnt/restore
# mount /dev/sdb1 /mnt/restore
```

Teraz możesz się przełączyć do tego folderu i uzyskać dostęp do danych kopii zapasowej.

## Sprawdź również

[Korzystanie z migawek na prywatnym serwerze wirtualnym](../uzywanie-migawki-vps/)

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
