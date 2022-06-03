---
title: Zmiana hasła root na serwerze VPS
slug: root-password
excerpt: Sprawdź, jak zmienić hasło root
section: Diagnostyka i tryb Rescue
---

**Ostatnia aktualizacja z dnia 27/04/2021**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Może zaistnieć konieczność zmiany hasła root do systemu operacyjnego Linux. Istnieją dwa możliwe scenariusze:

- Możesz nadal logować się przez SSH
- Nie możesz logować się przez SSH, ponieważ straciłeś hasło

**Niniejszy przewodnik wyjaśnia, jak zmienić hasło administratora w zależności od tych dwóch sytuacji.**

## Wymagania początkowe

- Posiadanie [serwera VPS OVHcloud](https://www.ovhcloud.com/pl/vps/){.external} już skonfigurowanego
- Posiadanie danych do logowania otrzymanych e-mailem po instalacji (jeśli są one nadal prawidłowe)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} (aby korzystać z trybu Rescue)

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, za które w pełni odpowiadasz - nie mając dostępu do tych maszyn, nie możemy być ich administratorem. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## W praktyce

### Zmiana hasła, jeśli nadal masz dostęp (sudo lub root)

> [!primary]
>
> Aby uzyskać więcej informacji na temat logowania do serwera VPS, zapoznaj się z naszym przewodnikiem Pierwsze kroki [z serwerem VPS](../pierwsze-kroki-vps/).
>

Zaloguj się do Twojego serwera VPS przez SSH. Przejdź na użytkownika root, jeśli konieczne:

```sh
~$ sudo su -
~#
```

Zmień hasło dla aktualnego użytkownika:

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> W dystrybucji Linux wpisane hasło **nie** będzie się wyświetlało.
>

Jeśli chcesz zezwolić na logowanie jako użytkownik root, postępuj zgodnie z instrukcjami zawartymi w [tej sekcji](./#wlacz-haslo-root_1).

### Zmiana hasła, jeśli zostało ono utracone

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Etap 1: Zrestartuj serwer VPS do trybu Rescue.

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i zrestartuj serwer VPS w trybie Rescue. Jeśli potrzebujesz dodatkowych instrukcji dotyczących trybu Rescue na serwerze VPS, zapoznaj się z [przewodnikiem dotyczącym trybu Rescue](../rescue/).

#### Etap 2: Sprawdzenie punktu montowania

W przypadku starszych gam VPS partycje zostaną automatycznie zamontowane w trybie rescue. Do identyfikacji punktu montowania partycji możesz użyć następujących poleceń:

##### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

##### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

Powyższy przykład pokazuje, że partycja systemowa jest zamontowana na **/mnt/sdb1**.

Jeśli VPS jest nowy, kolumna `MOUNTPOINT` powinna być pusta. W tym przypadku najpierw zamontuj partycję:

```sh
~$ mkdir -p /mnt/sdb1
~$ mount /dev/sdb1 /mnt/sdb1
```

#### Etap 3: zezwolenia CHROOT

Teraz zmodyfikuj katalog główny, aby wprowadzić zmiany do systemu. W tym celu użyj polecenia `chroot`:

```sh
~$ chroot /mnt/sdb1/
```

Możesz przeprowadzić weryfikację, wpisując komendę `ls -l`, która zawiera listę treści przechowywanych w bieżącym katalogu systemu:

```sh
~$ ls -l
```

#### Etap 4: Zmiana hasła (root)

W ostatnim etapie wpisz hasło za pomocą polecenia `passwd`.

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

Jeśli VPS to najnowsza generacja (masz na imię: *vps-XXXXXXX.vps.ovh.net*). początkowo otrzymałeś dane do logowania dla użytkownika posiadającego ważne uprawnienia, zamiast domyślnego konta "root". Ponadto usługa SSH nie akceptuje żądań logowania jako root.

Należy zatem wprowadzić nazwę użytkownika, którego używasz do logowania się po `passwd`:

```sh
~# passwd <username>
New password:
Retype new password:
passwd: password updated successfully
```

Po restarcie będziesz mógł ponownie zalogować się z tą nazwą użytkownika, jeśli połączenie root zostanie wyłączone.

Następnie zrestartuj Twój VPS z dysku w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).


### Włącz hasło root

Jeśli VPS to najnowsza generacja (masz na imię: *vps-XXXXXXX.vps.ovh.net*), otrzymałeś dane do logowania dla użytkownika posiadającego ważne uprawnienia, zamiast domyślnego konta "root". Ponadto usługa SSH nie akceptuje żądań logowania jako root.

> [!warning]
>
> Włączenie hasła root jest traktowane jako podatność na zagrożenia i dlatego nie jest zalecane.
>
> Zalecamy podjęcie działań mających na celu zabezpieczenie serwera VPS. Zapoznaj się z przewodnikiem dotyczącym [zabezpieczenia serwera VPS](../porady-zabezpieczenie-vps/).
>

#### Etap 1: Zmodyfikuj plik sshd_config

Użyj edytora tekstu, takiego jak vim lub nano, aby zmienić ten plik konfiguracyjny:

```sh
~$ nano /etc/ssh/sshd_config
```

Dodaj następujący wiersz.

```sh
PermitRootLogin yes
```

Wyszukaj tę linię i upewnij się, że została ona skomentowana:

```sh
#PermitRootLogin prohibit-password
```

Zapisz plik i wyjdź z edytora.

#### Etap 2: Zrestartuj usługę SSH

```sh
~$ systemctl restart sshd
```

Powinno to wystarczyć do wdrożenia zmian. Możesz również zrestartować serwer VPS (```~$ reboot```).

### Nieprawidłowe działanie

Jeśli po zmianie hasła i uruchomieniu pojawią się problemy z jego rozpoczęciem:

- Sprawdź KVM, dlaczego VPS nie może uruchomić. Zapoznaj się z [przewodnikiem KVM](../kvm_na_serwerach_vps/), aby uzyskać pomoc w korzystaniu z tej funkcji w Panelu klienta OVHcloud.
- Jeśli KVM wyświetla uruchomienie serwera VPS lub nie jest w stanie odnaleźć dysku, upewnij się, że [bootlog jest włączony](../wyswietlanie-bootlog-w-kvm/). Prześlij stosowne logi do naszych zespołów wsparcia, tworząc zgłoszenie w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), aby uzyskać więcej informacji.

## Sprawdź również

[Wprowadzenie do protokołów SSH](../../dedicated/ssh-wprowadzenie/)

[Zabezpieczenie serwera VPS](../porady-zabezpieczenie-vps/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
