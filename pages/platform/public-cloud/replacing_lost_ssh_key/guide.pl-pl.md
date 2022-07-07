---
title: Zmiana klucza SSH w przypadku utraty
excerpt: Zmiana klucza SSH w przypadku utraty
slug: zmiana_klucza_ssh_w_przypadku_utraty
legacy_guide_number: g2069
section: Tutoriale
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 10/02/2022**

## Wprowadzenie

W przypadku utraty klucza SSH, niezależnie od tego, czy nastąpiła zmiana instalacji poczty czy innego typu, możliwe jest, że nie będziesz mógł się zalogować do instancji, jeśli nie skonfigurowałeś żadnego innego sposobu logowania się do instancji.

Aby odzyskać dostęp, udostępniliśmy [tryb Rescue](https://docs.ovh.com/pl/public-cloud/przelaczenie_instancji_w_tryb_rescue/), który pozwala na zalogowanie się przy użyciu hasła i na zmianę plików.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować plik *authorized_keys* użytkownika *admin*, aby móc dodać nowy klucz SSH, aby uzyskać dostęp do instancji.**

## Wymagania początkowe

- Posiadanie [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud
- Dostęp do Twojej instancji przez SSH w [tryb Rescue](https://docs.ovh.com/pl/public-cloud/przelaczenie_instancji_w_tryb_rescue/)
- Utwórz klucz SSH

## W praktyce

> [!primary]
>
Jeśli chcesz zapisać klucz SSH w Panelu klienta OVHcloud, zalecamy użycie szyfrowania RSA lub ECDSA. ED25519 nie jest aktualnie obsługiwany.
>

Po zamontowaniu dysku Twojej instancji w trybie Rescue, będziesz mógł uzyskać dostęp do wszystkich Twoich plików.

Plik zawierający klucze SSH to:

```sh
/home/USER_NAME/.ssh/authorized_keys
```

Jeśli chcesz dodać nowy klucz SSH, wystarczy edytować ten plik i dodać nowy klucz:

```sh
sudo vim /mnt/home/USER_NAME/.ssh/authorized_keys
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666777777777778888888888999999900000000000000000000000000= old@sshkey
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh= new@sshkey
```

### Zmień klucz SSH użytkownika domyślnie

Aby zmienić klucz SSH domyślnego użytkownika, wystarczy przejść do jego osobistego folderu. Na przykład, dla użytkownika administratora, plik, który ma być odnaleziony, znajduje się w następującym folderze:

```sh
/home/admin/.ssh/authorized_keys
```

W przypadku instancji z Ubuntu 15.10 domyślnym użytkownikiem będzie Ubuntu, plik będzie więc w następującym folderze:

```sh
/home/ubuntu/.ssh/authorized_keys
```

### Zmiana domyślnego hasła użytkownika

Możesz również zmienić domyślne hasło użytkownika, używając trybu Rescue i następujących poleceń (w przypadku gdy użytkownik jest admin):

Zmieniamy katalog główny i umieszczamy go bezpośrednio na dysku instancji:

> [!primary]
>
W poniższym przykładzie jako punkt montowania użyliśmy vdb1 jako nazwy dysku serwera.
>

```sh
/home/admin# mount /dev/vdb1 /mnt/
/home/admin# chroot /mnt/
```

Zmiana hasła administratora:

```sh
passwd admin
```

Po wykonaniu modyfikacji i zapisaniu jej zawartości wystarczy zrestartować instancję na dysku, aby móc połączyć się z instancją za pomocą nowego klucza SSH.

## Sprawdź również

[Zostań użytkownikiem root i wybierz hasło](https://docs.ovh.com/pl/public-cloud/dostep_root_i_zdefiniowanie_hasla/)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
