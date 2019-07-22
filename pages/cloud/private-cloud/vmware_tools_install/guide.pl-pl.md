---
title: 'Instalacja VMware Tools'
slug: instalacja_vmware_tools
excerpt: 'Dowiedz się, jak wykonać instalację VMware Tools na wirtualnej maszynie'
section: 'Zarządzanie wirtualnymi maszynami'
legacy_guide_number: g621
---

**Ostatnia aktualizacja z dnia 12-07-2019**

## Wprowadzenie

Rozwiązanie VMware Tools zwiększa wydajność wirtualnej maszyny i pozwala korzystać z wielu użytecznych i prostych funkcji.

**Ten przewodnik przedstawia kolejne etapy instalacji VMware Tools.**

## Wymagania początkowe

- Posiadanie rozwiązania Hosted Private Cloud
- Dostęp do interfejsu zarządzania vSphere

## W praktyce

Procedura instalacji VMware Tools jest różna w zależności od systemu operacyjnego wirtualnej maszyny. Aby uzyskać informacje dotyczące procedury właściwej dla danego systemu operacyjnego, zapoznaj się z [dokumentacją VMware dotyczącą VMware Tools](https://kb.vmware.com/s/article/1014294){.external-link}.

### Linux

#### Najnowsze wersje

W przypadku większości najnowszych dystrybucji Linux możesz zainstalować VMware Tools za pośrednictwem systemów zarządzania pakietami o nazwie [*Open VM Tools*](https://kb.vmware.com/s/article/2073803){.external-link}.

Dzięki temu rozwiązanie VMware Tools jest na bieżąco aktualizowane w taki sam sposób, jak inne komponenty systemu operacyjnego wirtualnej maszyny. 

Jeśli używana przez Ciebie dystrybucja zawiera rozwiązanie *Open VM Tools*, znajdziesz je pod nazwą: *open-vm-tools*


Ta metoda instalacji dotyczy przynajmniej następujących wersji GNU/Linux:

- Fedora 19 i wyższe
- Debian 7.x i wyższe
- openSUSE 11.x i wyższe
- Ubuntu 12.04 LTS i wyższe
- Red Hat Enterprise Linux 7.0 i wyższe
- CentOS 7.0 i wyższe
- Oracle Linux 7.0 i wyższe
- SUSE Linux Enterprise 11 SP4 i wyższe


#### Starsze wersje

Zamontuj dysk VMware Tools za pośrednictwem klienta vSphere, kliknij prawym przyciskiem myszy maszynę wirtualną, po czym wybierz „Guest OS” i zatwierdź opcję „Install VMware Tools”:

![](images/tools.png){.thumbnail}

Następnie zamontuj wolumen za pomocą następującego polecenia:

```sh
>     # mount /dev/cdrom /mnt
```

Teraz rozpakuj archiwum VMwareTools do /tmp.

```sh
> cd /tmp 
> tar xvf /mnt/VMwareTools*.tar.gz
> cd vmware-tools-distrib
> ./vmware-install.pl default
```

> [!success]
>
> Jeśli chcesz domyślnie odpowiedzieć "tak" na proponowane odpowiedzi, dodaj „default” jako argument w poleceniu instalacji.
> 

Po zakończeniu instalacji dysk VMware Tools zostanie automatycznie odłączony od systemu.

### Windows

Po zamontowaniu wolumenu przy użyciu opcji „Install/Upgrade VMware Tools” odszukaj dysk na pulpicie Twojej wirtualnej maszyny. Kliknij na dysk dwukrotnie, aby rozpocząć instalację VMware Tools:

![](images/windows.jpg){.thumbnail}

Uruchomi się wówczas asystent instalacji. Zostaniesz poproszony o zaakceptowanie licencji oraz wybranie typu instalacji (zalecamy pełną instalację).

Po zakończeniu instalacji będziesz mógł wykonać restart maszyny, aby wprowadzone zmiany stały się aktywne. Czytnik CD zostanie automatycznie odłączony. 

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.