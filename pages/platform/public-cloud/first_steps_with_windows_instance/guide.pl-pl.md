---
title: 'Rozpoczęcie pracy z instancją Windows'
excerpt: 'Odkryj, jak przeprowadzić instalację instancji z systemem Windows i nawiązać pierwsze połączenie'
slug: rozpoczecie_pracy_z_instancja_windows
legacy_guide_number: g1995
section: Tutoriale
---

**Ostatnia aktualizacja z dnia 25-11-2019**

## Wprowadzenie

Możesz korzystać z usługi Public Cloud w celu hostowania stron www przy użyciu IIS lub instalowania aplikacji kompatybilnych tylko z systemem Windows. Nasze instancje mogą być instalowane w dystrybucjach [Windows Desktop](https://www.ovh.pl/public-cloud/prices/){.external}.

Po utworzeniu instancji konieczne będzie dokończenie jej instalacji za pomocą konsoli VNC.

**Niniejszy przewodnik wyjaśnia procedurę, której należy przestrzegać, aby uzyskać dostęp do instancji Windows po jej zainstalowaniu.**

## Wymagania początkowe

- Utworzenie projektu Public Cloud
- Utworzenie [w panelu klienta instancji](https://docs.ovh.com/pl/public-cloud/tworzenie_instancji_w_panelu_klienta_ovh/) z dystrybucją Windows Desktop.

## W praktyce

### Etap 1: ustaw hasło

W przeciwieństwie do instancji z systemem Linux, instancja Windows nie jest instalowana ze wstępnie skonfigurowanym kluczem SSH. 

Konieczne jest więc dokończenie instalacji poprzez konsolę VNC:

- Kliknij `...`{.action} po prawej stronie swojej instancji, a następnie wybierz opcję  `Instance details`{.action} (Szczegóły instancji):

![windowsinstance](images/firststepswindows1.png){.thumbnail}

- Przejdź do karty `Konsola VNC`{.action}

![windowsinstance](images/firststepswindows2.png){.thumbnail}

- Wybierz ustawienia języka i klawiatury, a następnie wprowadź hasło:

![windowsinstance](images/firststepswindows3.png){.thumbnail}

> [!primary]
>
> Niektóre przyciski klawiatury w konsoli VNC mogą nie odpowiadać klawiaturze AZERTY. Sprawdź kilka razy swoje hasło przed jego zatwierdzeniem.
>

![windowsinstance](images/firststepswindows4.png){.thumbnail}

### Etap 2: dostęp do zdalnego pulpitu

Po ustawieniu hasła możesz łączyć się ze swoją instancją Windows za pomocą usługi zdalnego pulpitu.

Z poziomu komputera z systemem Windows:

![windowsinstance](images/firststepswindows5.png){.thumbnail}

Aby połączyć się z poziomu komputera z systemem Linux, wprowadź następujące polecenie:

```
rdesktop 12.34.56.789 -u administrator
```
 
### Etap 3: optymalizacja korzystania z Internetu

Domyślnie aktywowany jest zwiększony poziom zabezpieczeń w programie Internet Explorer. Podczas nawigacji wielokrotnie pojawiać się będzie ostrzeżenie przed zagrożeniami i nie będzie też można pobierać plików:

![windowsinstance](images/firststepswindows6.png){.thumbnail}

Aby tego uniknąć, należy wyłączyć zwiększony poziom zabezpieczeń z poziomu interfejsu zarządzania serwerem.

- Otwórz element **Server Manager** (Interfejs zarządzania serwerem), a następnie wybierz opcję `Local server`{.action} (Serwer lokalny) (1).

![windowsinstance](images/firststepswindows7.png){.thumbnail}

- Kliknij opcję `Active`{.action} (Aktywny) (2) obok pozycji **Internet Explorer enhanced security configuration** (Konfiguracja zwiększonego poziomu zabezpieczeń programu Explorer), aby móc wyłączyć zwiększony poziom zabezpieczeń.

![windowsinstance](images/firststepswindows8.png){.thumbnail}

## Sprawdź również

[Dostęp i bezpieczeństwo w Horizon](https://docs.ovh.com/gb/en/public-cloud/access_and_security_in_horizon/){.external}

[Dostęp do konsoli instancji w Horizon](https://docs.ovh.com/pl/public-cloud/dostep_do_konsoli_instancji_w_interfejsie_horizon/){.external}

[Korzystanie z vouchera](https://docs.ovh.com/pl/public-cloud/korzystanie-z-vouchera//){.external}

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>