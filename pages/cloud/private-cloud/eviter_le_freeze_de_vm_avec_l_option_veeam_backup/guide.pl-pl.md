---
title: 'Rozwiązanie problemu z blokadą wirtualnej maszyny podczas korzystania z Veeam Backup Managed'
slug: unikanie-vm-freeze-disk-lock-veeam-backup
excerpt: 'Dowiedz się, jak wdrożyć rozwiązanie, które pozwala uniknąć blokady wirtualnej maszyny za pomocą mechanizmu VMware DRS'
section: 'Zarządzanie wirtualnymi maszynami'
---

**Ostatnia aktualizacja z dnia 11-01-2019**

## Wprowadzenie

W procesie tworzenia kopii zapasowej, po usunięciu snapshota wirtualnej maszyny na Twoim datastore NFS może wystąpić trwająca 30 sekund blokada dysku (disk lock) lub zamrożenie (freeze) wirtualnej maszyny.
Wynika to z faktu, że snapshot Twojej wirtualnej maszyny jest zainstalowany na backupie proxy, który działa na innym hoście. Jeśli proxy i wirtualna maszyna są umieszczone na tym samym hoście, taka blokada nie wystąpi.

**Niniejszy przewodnik wyjaśnia, jak wdrożyć rozwiązanie, które pozwala uniknąć blokady wirtualnej maszyny dzięki mechanizmowi VMware DRS.**

## Wymagania początkowe

- Posiadanie rozwiązania [Private Cloud](https://www.ovh.pl/private-cloud/){.external}
- Włączona opcja [Veeam Backup Managed](https://www.ovh.pl/private-cloud/opcje/veeam.xml){.external}
- Dostęp do interfejsu zarządzania vSphere

## W praktyce

### Procedura

> [!primary]
>
> Przed rozpoczęciem procesu zapoznaj się z poniższymi informacjami:
>
> - w przypadku dużych środowisk utworzenie wielu reguł DRS może potrwać długo;
> - użytkownik powinien dodać ręcznie nowe wirtualne maszyny do reguł DRS;
> - wszystkie maszyny wirtualne, które mają być objęte kopią zapasową, ale nie zostały ujęte w regułach DRS, mogą nadal doświadczać blokady dysku lub zamrożenia (freeze).
>


Aby wdrożyć to rozwiązanie, kliknij prawym przyciskiem myszy na odpowiedni klaster, następnie zmodyfikuj jego parametry.

Utwórz regułę DRS, aby **maszyny wirtualne były przechowywane w jednym miejscu** i dodaj je wraz z serwerem proxy wykonującym backup. Jeśli posiadasz dużą liczbę wirtualnych maszyn, których kopie zapasowe chcesz wykonać, możesz utworzyć kilka reguł DRS i powiązać je z kilkoma serwerami proxy. Algorytm OVH gwarantuje, że proces tworzenia kopii zapasowej wirtualnej maszyny jest realizowany przez serwer proxy znajdujący się na tym samym hoście ESXi, na którym znajduje się wirtualna maszyna.

> [!warning]
>
> Dodanie nowego backup proxy wiąże się z dodatkowymi kosztami.
>

W sekcji DRS możesz dodać następującą regułę:

![](images/image0_7.png){.thumbnail}

Utwórz inną regułę DRS, aby **oddzielić wirtualne maszyny** i utrzymywać serwery proxy wykonujące backupy na różnych hostach:

![](images/image0_28.png){.thumbnail}

Utwórz grupę wirtualnych maszyn, wprowadź nazwę grupy i dodaj host do tej reguły:

![](images/image1_9.png){.thumbnail}

Pamiętaj, aby utworzyć regułę „anti-affinity”, dzięki czemu serwery proxy wykonujące backu nie znajdą się nigdy na tym samym hoście. Liczba utworzonych reguł musi odpowiadać liczbie serwerów proxy.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.