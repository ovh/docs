---
title: 'VMware Update Manager'
excerpt: 'Dowiedz się, jak korzystać z VMware Update Manager'
slug: korzystanie_z_vmware_update_manager
section: 'Funkcjonalności VMware vSphere'
legacy_guide_number: g591
order: 11
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 09-12-2021**

## Wprowadzenie

Menedżer aktualizacji oprogramowania VMware pozwala na aktualizację hostów poprzez instalację *Bug Fixes* i Patchs bezpieczeństwa bez interwencji naszych zespołów.     

> [!primary]
> Aktualizacje vCenter lub ważne aktualizacje wymagają zawsze naszego zaangażowania.

**Niniejszy przewodnik wyjaśnia, jak narzędzie działa**

## Wymagania początkowe

- Posiadanie kontaktu administratora [Hosted Private Cloud Infrastructure](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymywać dane do logowania.
- Posiadanie aktywnego identyfikatora użytkownika z uprawnieniami dla NSX (utworzonego w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl))

## W praktyce

### Maintenance Mode

Przed rozpoczęciem pracy na hoście należy uruchomić go w trybie konserwacji.    
Załadowanie patchera powoduje w większości przypadków restartowanie hosta, co ogranicza wpływ na VM produkcyjne. 

W menu interfejsu vSphere przejdź do dashboardu `Hosts and Clusters`{.action}.

![Konserwacja](images/en01menu.png){.thumbnail}

Po lewej stronie ekranu kliknij prawym przyciskiem myszy na hosta. W sekcji `Maintenance Mode`{.action} wybierz `Enter Maintenance Mode`{.action}.

![Konserwacja](images/en02maintenance.png){.thumbnail}

Upewnij się, że kratka jest zaznaczona na kolejnym etapie, po czym kliknij `OK`{.action}.

![Konserwacja](images/en03enter.png){.thumbnail}

Zakładając, że DRS jest aktywny, maszyny produkcyjne zostaną przeniesione na inny host.

> [!primary]
> Jeśli masz ustawiony spersonalizowane środowisko, możesz ręcznie wykonać migrację wirtualnych maszyn.
>

Może pojawić się następujące ostrzeżenie:     

![Konserwacja](images/en04warning.png){.thumbnail}

Twój host znajduje się wówczas w trybie konserwacji.

![Konserwacja](images/en05maintenanced.png){.thumbnail}

### Update Manager

Wybierz host i przejdź do sekcji `Update`{.action}.
Widzicie różne podstawowe statusy i zgodność hosta.     

Będziesz musiał zastosować "linię podstawową", aby sprawdzić zgodność.

![Update](images/en06summary.png){.thumbnail}

W sekcji `Attached Baselines` kliknij `Attach`{.action}, a następnie `Attach Baseline or Baseline Group`{.action}.

![Update](images/en07attach.png){.thumbnail}

Istnieją wstępnie zdefiniowane linie bazowe dla poszczególnych zalecanych poziomów poprawek.

> [!primary]
> W naszym przykładzie używamy krytycznych poprawek, ale możesz użyć dwóch istniejących linii lub utworzyć inne, aby zaspokoić różne potrzeby środowiska.
>

Wybierz wymaganą linię podstawową i kliknij `Attach`{.action}.

![Update](images/en08define.png){.thumbnail}

Streszczenie zgodności zostaje zaktualizowane.     

![Update](images/en09noncompliant.png){.thumbnail}

Wróć do sekcji `Attached Baselines`, wybierz wszystkie przydzielone linie bazowe i kliknij `Stage`{.action} pośrednie.

![Update](images/en10bisstage.png){.thumbnail}

Wybierz host i kliknij ponownie `Stage`{.action}.

![Update](images/en10terstagea.png){.thumbnail}

Proces transferu rozpoczyna się i będzie trwał w zależności od liczby i rozmiaru poprawek.

![Update](images/en10terstage.png){.thumbnail}

Zawsze w sekcji `Attached Baselines`, wybierz wszystkie przydzielone linie bazowe i kliknij `Remediate`{.action}.

![Update](images/en10remediate.png){.thumbnail}

Wybierz host i kliknij ponownie `Remediate`{.action}.

![Update](images/en11remediate.png){.thumbnail}

Proces aktualizacji rozpoczyna się i będzie trwał w zależności od liczby i rozmiaru zastosowanych poprawek.<br>
W razie potrzeby host zostanie automatycznie zrestartowany.

![Update](images/en12remediating.png){.thumbnail}

Po zakończeniu procesu weryfikacja zgodności zostanie wznowiona (lub może zostać wymuszona przez kliknięcie linku) i pojawi się zielony zaznaczyć.

![Update](images/en13compliant.png){.thumbnail}

Twój host jest teraz zaktualizowany.    

Pamiętaj, aby wyłączyć go z trybu konserwacji i wróci do produkcji.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
