---
title: "Jak zastąpić parę kluczy SSH"
excerpt: "Dowiedz się, jak przywrócić dostęp do serwera w przypadku utraty klucza prywatnego przez wygenerowanie nowej pary kluczy SSH"
updated: 2024-04-04
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Jeśli do [połączenia z serwerem używasz kluczy SSH](creating-ssh-keys-dedicated1.), utrata prywatnego klucza SSH może oznaczać całkowitą utratę dostępu do serwera.

Możesz jednak zalogować się do swojego serwera w [trybie Rescue OVHcloud](rescue_mode1.), używając hasła, które umożliwi Ci zmianę plików.

**Dowiedz się, jak zastąpić klucze SSH w przypadku utraty dostępu do serwera.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z [pomocy specjalisty](https://partner.ovhcloud.com/pl/directory/) lub kontakt z producentem oprogramowania. Niestety OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](replacing-lost-ssh-key_#go-further.) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) lub [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Etap 1 - Tworzenie nowej pary kluczy

Utwórz nową parę kluczy SSH na Twoim komputerze, opisaną w pierwszej części przewodnika ["Tworzenie kluczy SSH"](creating-ssh-keys-dedicated1.).

<a name="step2"></a>

### Etap 2 - Dostęp do serwera w trybie Rescue i wymiana klucza

Postępuj zgodnie z instrukcjami zawartymi w przewodniku dotyczącym trybu Rescue, aby połączyć się z Twoim serwerem i zamontować partycje:

- [Tryb Rescue dla serwera dedykowanego](rescue_mode1.)
- [VPS w trybie rescue](rescue1.)

Po uzyskaniu dostępu do plików otwórz odpowiedni plik "authorized_keys" w edytorze tekstu. Plik ten przechowuje klucze SSH i znajduje się w katalogu `home` użytkownika podłączonego do Twojego serwera. (Zastąp "USER_NAME" nazwą użytkownika.)

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Skopiuj i wklej nowy klucz publiczny (utworzony w etapie 2) do pliku. Zawartość pliku powinna wyglądać jak następujący przykład:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000= old@sshkey
ssh-rsa AAAAAAAAAABBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDDDDDEEEEOG
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
```

Ze względów bezpieczeństwa usuń z pliku ciąg klucza "old" (obecnie przestarzały). Zapisz i wyjdź z edytora.

Przywróć tryb "normalny" i zrestartuj serwer w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W razie potrzeby zapoznaj się z przewodnikiem ["Aktywuj i użyj trybu Rescue"](#step2.).

Teraz masz dostęp do serwera z nową parą kluczy SSH.

## Sprawdź również <a name="go-further"></a>

[Wprowadzenie do SSH](ssh_introduction1.)

[Tryb Rescue dla serwera dedykowanego](rescue_mode1.)

[VPS w trybie rescue](rescue1.)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.