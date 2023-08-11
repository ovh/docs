---
title: 'Napraw bootloader GRUB'
excerpt: 'Przewodnik naprawy bootloader GRUB na instancji'
updated: 2020-11-23
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 22-11-2020**

## Wprowadzenie

Możliwe, że trzeba naprawić bootloader GRUB. Niniejszy przewodnik pozwoli Ci w prosty sposób naprawić blokadę i przywrócić działanie instancji.

## Wymagania początkowe

- Instancja musi być w trybie Rescue (zapoznaj się z przewodnikiem [Zmień instancję w trybie rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode))

## W praktyce

Zaloguj się do instancji za pomocą VNC w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) lub przez SSH.

Wprowadź następujące polecenia, aby zamontować zdalny system plików i rozpocząć naprawę GRUB:

```sh
mount /dev/sdb1 /mnt
mount -o bind /proc /mnt/proc
mount -o bind /sys /mnt/sys
mount -o bind /dev /mnt/dev
chroot /mnt /bin/bash
```

### Aktualizacja GRUB (lub GRUB2)

Aktualizacja GRUB:

```sh
grub-install /dev/sdb
update-grub
```

Aktualizacja GRUB2:

```sh
grub2-install /dev/sdb
grub2-mkconfig -o /boot/grub2/grub.cfg
```

Możesz teraz wyjąć instancję z trybu Rescue. (Sprawdź przewodnik [Zmień instancję w trybie Rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode))

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.