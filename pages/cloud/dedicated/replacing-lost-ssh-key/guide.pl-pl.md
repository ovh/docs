---
title: "Wymiana utraconej pary kluczy SSH"
slug: dedicated-servers-replacing-lost-ssh-key-pair
excerpt: "Dowiedz się, jak pobrać dostęp SSH do serwera dedykowanego"
section: 'Diagnostyka i tryb Rescue'
order: 2
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 06-02-2023**

## Wprowadzenie

Jeśli do [połączenia z serwerem dedykowanym używasz kluczy SSH](https://docs.ovh.com/pl/dedicated/tworzenie-klucze-ssh-dedykowane/), utrata prywatnego klucza SSH może oznaczać całkowitą utratę dostępu do serwera.

Możesz jednak zalogować się do swojego serwera w [trybie Rescue OVHcloud](https://docs.ovh.com/pl/dedicated/ovh-rescue/), używając hasła, które umożliwi Ci zmianę plików.

**Dowiedz się, jak zastąpić klucze SSH w przypadku utraty dostępu do serwera.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z [pomocy specjalisty](https://partner.ovhcloud.com/pl/directory/) lub kontakt z producentem oprogramowania. Niestety OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) na Twoim koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Etap 1 - Wyłącz aktualny klucz SSH

Aby uzyskać dostęp do serwera w trybie Rescue, należy najpierw wyłączyć aktywny klucz SSH.

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Klucze SSH`{.action}. W razie potrzeby skorzystaj z naszego przewodnika ["Tworzenie kluczy SSH"](https://docs.ovh.com/pl/dedicated/tworzenie-klucze-ssh-dedykowane/#cpsshkey).

Klucz publiczny przechowywany w Panelu klienta jest niepotrzebny bez odpowiedniego klucza prywatnego, możesz więc go usunąć. Kliknij przycisk <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> po prawej stronie klucza i wybierz `Usuń klucz`{.action}.

![Usuń klucz](images/replace-lost-key-01.png){.thumbnail}

W oknie, które się wyświetli kliknij `Zatwierdź`{.action}.

### Etap 2 - Tworzenie nowej pary kluczy

Utwórz nową parę kluczy SSH na Twoim komputerze, opisaną w pierwszej części przewodnika ["Tworzenie kluczy SSH"](https://docs.ovh.com/pl/dedicated/tworzenie-klucze-ssh-dedykowane/)

### Etap 3 - Dostęp do serwera w trybie Rescue i wymiana klucza

Postępuj zgodnie z instrukcjami zawartymi w przewodniku dotyczącym [trybu Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/), aby połączyć się z Twoim serwerem i zamontować partycje.

Po uzyskaniu dostępu do plików otwórz odpowiedni plik "authorized_keys" w edytorze tekstu. Plik ten przechowuje klucze SSH i znajduje się w katalogu `home` użytkownika podłączonego do Twojego serwera. (Zastąp "USER_NAME" nazwą użytkownika)

```
rescue-customer:~# sudo nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Skopiuj i wklej nowy klucz publiczny (utworzony w etapie 2) do pliku. Zawartość pliku powinna wyglądać jak następujący przykład:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000= old@sshkey
ssh-rsa AAAAAAAAAABBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDDDDDEEEEOG
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
```

Możesz usunąć ciąg "old" (obecnie przestarzały) z pliku. Zapisz i wyjdź z edytora.

Przywróć tryb "normalny" i zrestartuj serwer w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W razie potrzeby zapoznaj się z przewodnikiem ["Aktywuj i użyj trybu Rescue"](https://docs.ovh.com/pl/dedicated/ovh-rescue/).

Teraz masz dostęp do serwera z nową parą kluczy SSH.

## Sprawdź również <a name="go-further"></a>

[Zmiana hasła root na serwerze dedykowanym](https://docs.ovh.com/pl/dedicated/zmiana-hasla-root-na-serwerze-dedykowanym-linux/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.