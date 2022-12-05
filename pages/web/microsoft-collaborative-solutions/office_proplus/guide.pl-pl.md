---
title: Skorzystaj ze zdalnego pulpitu z Microsoft 365 apps
legacy_guide_number: 2339
slug: office365-proplus-biuro-a-zdalne
excerpt: Dowiedz się, jak zainstalować i korzystać z Microsoft 365 apps na zdalnym pulpicie (RDS) lub komputerze współdzielonym
section: Office
order: 04
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 06-09-2021**

## Wprowadzenie

Chcesz korzystać z pakietu oprogramowania Microsoft 365 apps na maszynie zdalnej lub współdzielonej. W tym celu należy postępować zgodnie z procedurą instalacji opisaną w tym przewodniku.

**Dowiedz się, jak zainstalować i korzystać z Microsoft 365 apps na zdalnym pulpicie (RDS) lub komputerze współdzielonym.**

## Wymagania początkowe

- Posiadanie licencji Microsoft 365 apps for entreprise (Dawniej Office 365 ProPlus)
- Korzystanie z usługi Microsoft Windows przez zdalny pulpit (**R**emote **D**esktop **S**ervices)

> [!warning]
>
> Licencja Microsoft 365 Apps for business jest niekompatybilna z korzystaniem z RDS i komputera współdzielonego.
> 

## W praktyce

Niniejszy przewodnik jest oparty na informacjach wydanych w przewodniku Microsoft [Deploy Microsoft 365 Apps by using Remote Desktop Services](https://docs.microsoft.com/pl-pl/deployoffice/deploy-microsoft-365-apps-remote-desktop-services) pulpitu.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

### Metoda 1: Ręczna konfiguracja

Instalacja oferty Microsoft 365 Apps for entreprise na współdzielonym komputerze przy użyciu zdalnego pulpitu (RDS) nie działa bez określonej konfiguracji. Bez tego parametru powinieneś otrzymać następującą wiadomość:

![emails](images/4717.png){.thumbnail}

> [!primary]
>
> Jeśli zainstalowałeś już Twoją licencję Office 365 Proplus, konieczne jest jej **odinstalowanie**.
>

- Po odinstalowaniu Twojej licencji [kliknij tutaj](https://www.microsoft.com/en-us/download/details.aspx?id=49117){.external}, aby pobrać narzędzie wdrażające Microsoft 365.


- **Uruchom** narzędzie do wdrażania na Twojej maszynie.


- Zmień plik `configuration.xml`.

![office 365](images/4720.png){.thumbnail}

Edytuj plik `configuration.xml`, następnie uruchom następujące wiersze:

```xml
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

Jeśli te linie nie istnieją, możesz je skopiować/wkleić do pliku.

- Zapisz wprowadzone zmiany. Następnie otwórz terminal powershell i wykonaj oba polecenia z folderu, w którym znajduje się plik `configuration.xml`:

```powershell
./setup.exe /download configuration.xml
```

następnie

```powershell
./setup.exe /configure configuration.xml
```
> [!primary]
>
> Realizacja tych zamówień może zająć kilka minut.

- Otwórz edytor rejestru windows, wykonując `Regedit`, następnie postępuj zgodnie z poniższą ścieżką:

```powershell
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Sprawdź następujący klucz:

```powershell
SharedComputerLicensing
```

Upewnijcie się, że jej wartość wynosi `1`. Jeśli ten klucz nie istnieje, możesz go utworzyć.

![emails](images/4723.png){.thumbnail}

- Uruchom aplikację Office 365, zostaniesz poproszony o wpisanie nazwy użytkownika i hasła.

![emails](images/4724.png){.thumbnail}

- Teraz możesz korzystać z pakietu Office 365 z komputera współdzielonego, korzystając z usług RDS.


![emails](images/4726.png){.thumbnail}


## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
