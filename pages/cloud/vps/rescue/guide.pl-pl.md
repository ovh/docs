---
title: Uruchamianie trybu Rescue na serwerze VPS
slug: rescue
excerpt: Sprawdź, jak włączyć serwer VPS w trybie Rescue
section: Diagnostyka i tryb Rescue
---

**Ostatnia aktualizacja z dnia 24 listopada 2020 r**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Tryb Rescue jest narzędziem dla Twojego serwera VPS. Dzięki temu możesz uruchomić serwer z tymczasowego systemu operacyjnego. W ten sposób będziesz mógł zdiagnozować i rozwiązać problemy związane z głównym systemem operacyjnym. 

Za pomocą trybu Rescue możesz:

  - zmienić hasło root;
  - diagnozowanie problemów z siecią;
  - naprawić uszkodzony system operacyjny;
  - poprawienie nieprawidłowej konfiguracji zapory;
  - testuj wydajność dysku.

Wykonanie weryfikacji w trybie Rescue pomoże Ci również ustalić, czy problem jest związany z oprogramowaniem lub sprzętem. Zalecamy, abyś zrobił to przed skontaktowaniem się z naszymi zespołami wsparcia.

> [!warning]
>
> Jeśli posiadasz usługi produkcyjne na serwerze VPS, tryb Rescue je wyłącza, dopóki maszyna nie zostanie zrestartowana do trybu normalnego.
> 

**Niniejszy przewodnik wyjaśnia, jak uruchomić Twój VPS w trybie rescue.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Posiadanie [serwera VPS OVHcloud](https://www.ovhcloud.com/pl/vps/){.external} już skonfigurowanego

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, za które w pełni odpowiadasz - nie mając dostępu do tych maszyn, nie możemy być ich administratorem. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji „Sprawdź również” niniejszego przewodnika.
> 

## W praktyce

### Aktywacja trybu Rescue

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer z listy nawigacyjnej po lewej stronie, na `serwerze VPS`{.action}.

#### W ofercie VPS

W zakładce `Strona główna`{.action} kliknij przycisk `...`{.action} obok "Boot" w obszarze **Twój VPS**.

![konfiguracja trybu Rescue](images/rescue_new.png){.thumbnail}

Wybierz `Zrestartuj w trybie Rescue`{.action} w menu.

#### Z poprzednią ofertą VPS

W zakładce `Strona główna`{.action} kliknij link skrócony zatytułowany `Uruchom ponownie w trybie Rescue`{.action}.

![konfiguracja trybu Rescue](images/rescue_legacy.png){.thumbnail}

Pojawi się okno, kliknij `Zatwierdź`{.action}, aby uruchomić restart w trybie rescue.

### Korzystanie z trybu Rescue

Po uruchomieniu restartu pasek postępu wskazuje postęp zadania. Może to potrwać kilka minut.

> [!primary]
>
> Otrzymasz automatyczny e-mail z danymi do logowania przez SSH, aby uzyskać dostęp do trybu Rescue. Zaczekaj na otrzymanie e-maila przed podjęciem jakichkolwiek dalszych kroków. E-mail ten jest również dostępny w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Aby odnaleźć Twoje konto, kliknij nazwę powiązaną z Twoim identyfikatorem OVHcloud na pasku menu w prawym górnym rogu i wybierz pozycję `E-maile usługi`{.action}.
>

Możesz teraz zalogować się przez SSH do Twojego VPS, używając informacji dotyczących trybu Rescue. Po zakończeniu operacji w trybie Rescue uruchom ponownie serwer VPS w trybie "normalnym" w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager).

## Sprawdź również

[Zmiana hasła root na serwerze VPS](../root-password/)

[Wprowadzenie do protokołów SSH](../../dedicated/ssh-wprowadzenie/)

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
