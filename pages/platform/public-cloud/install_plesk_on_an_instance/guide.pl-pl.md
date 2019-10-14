---
title: 'Instalacja Pleska na instancji'
slug: instalacja_pleska_na_instancji
excerpt: 'Dowiedz się, jak wdrożyć Plesk na instancji Public Cloud'
legacy_guide_number: g1998
section: Tutoriale
---

**Ostatnia aktualizacja dnia 11-09-2019**

## Wprowadzenie

Plesk to prosty w użytkowaniu interfejs administracyjny dla serwerów dedykowanych.  Można go zainstalować i z niego korzystać na jednej z instancji [Public Cloud](https://www.ovh.pl/public-cloud/){.external}.

**Dowiedz się, jak wdrożyć Plesk na instancji Public Cloud.** 

> [!warning]
> 
> OVH oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Przyłącz się do [społeczności naszych użytkowników](https://community.ovh.com/en/){.external}.
>

## Wymagania początkowe

- [Utworzenie instancji w Panelu klienta](../tworzenie_instancji_w_panelu_klienta_ovh/)
- [Dostęp root i zdefiniowanie hasła](../dostep_root_i_zdefiniowanie_hasla/)

## W praktyce

### Etap 1: instalacja Pleska

Interfejs Plesk można zainstalować za pomocą połączenia SSH. W tym celu pobierz i wykonaj skrypt instalacyjny Pleska, używając najbardziej odpowiedniego dla Twojego przypadku polecenia.

- **Domyślna, niespersonalizowana instalacja Pleska**:

```bash
# sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Spersonalizowana instalacja Pleska**:

```bash
# sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Odczekaj chwilę, aż instalacja się zakończy. 

### Etap 2: konfiguracja Pleska

Zaloguj się teraz do interfejsu Plesk, aby go skonfigurować. W tym celu uruchom przeglądarkę i zaloguj się na stronie `https://IP.instancji:8443`, korzystając z danych do konta root. 

![public cloud](images/3301.png){.thumbnail}

Po zalogowaniu pojawi się asystent konfiguracji, który umożliwi Ci skonfigurowanie sposobu wyświetlania informacji w interfejsie Plesk. Wybierz widok odpowiedni dla rodzaju Twojej działalności.

![public cloud](images/3302.png){.thumbnail}

Wybierz typ wyświetlania dla interfejsu:

![public cloud](images/3303.png){.thumbnail}

Po wykonaniu tych czynności wprowadź informacje dotyczące dostępu do instancji:

- Hostname
- Adres IP
- Hasło Root



![public cloud](images/3304.png){.thumbnail}

Aby dokończyć konfigurację, wprowadź informacje dotyczące konta **administratora**.

![public cloud](images/3305.png){.thumbnail}

### Etap 3: dodanie licencji

Aby dodać licencję Plesk, użyj klucza, który otrzymałeś od Twojego dostawcy.

> [!primary]
>
> Nie sprzedajemy licencji Plesk dla usługi Public Cloud. Możesz zamówić licencję bezpośrednio na stronie [Pleska](https://www.plesk.com/){.external}.
> 

Podczas pierwszego logowania do interfejsu pojawi się strona z propozycją dodania licencji:

![public cloud](images/3306-2.png){.thumbnail}

Jeśli chcesz zmienić licencję (wymiana klucza testowego, zmiana oferty), możesz to zrobić w interfejsie Plesk, przechodząc do części `Server Management` i wybierając `Tools & Settings`{.action}.  Następnie w części **Plesk** wybierz `License Management`{.action}.

Po dodaniu nowego klucza możesz wyświetlić typ zainstalowanej licencji na pasku menu na górze po lewej stronie.

![public cloud](images/3322-2.png){.thumbnail}

## Sprawdź również

[Oficjalna dokumentacja Plesk](https://docs.plesk.com/en-US/onyx/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.