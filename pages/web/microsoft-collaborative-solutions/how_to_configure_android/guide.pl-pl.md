---
title: 'Konfiguracja konta Exchange na urządzeniach Android poprzez aplikację Gmail'
slug: exchange_20132016_konfiguracja_w_systemie_android
excerpt: 'Dowiedz się, jak skonfigurować konto Exchange na urządzeniach z systemem Android poprzez aplikację Gmail'
section: 'Konfiguracja konta Exchange na smartfonie/tablecie'
order: 01
---

**Ostatnia aktualizacja dnia 2018-03-29**

## Wprowadzenie

Konta Exchange mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych.  Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować konto Exchange na urządzeniach z systemem Android poprzez aplikację Gmail.**

## Wymagania początkowe

- Wykupienie konta e-mail [Exchange](https://www.ovhcloud.com/pl/emails/){.external}
- Zainstalowana aplikacja Gmail na Twoim urządzeniu (możesz pobrać ją z Google Play Store)
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Niniejszy przewodnik został stworzony w oparciu o urządzenie Nexus 6 z wersją systemu Android 7.1.1. W celu ujednolicenia procedury korzystamy z aplikacji Gmail, którą można pobrać z Play Store. Jeśli wybierzesz inną aplikację, sposób postępowania będzie wyglądał inaczej. 
>

## W praktyce

### Etap 1: dodanie konta

Na ekranie Twojego urządzenia wybierz aplikację `Gmail`{.action}. Dodanie konta może zostać przeprowadzone na dwa różne sposoby:

- **jeśli nie jest skonfigurowane żadne konto**: postępuj zgodnie z instrukcjami etapu powitalnego, następnie kliknij `Dodaj konto e-mail`{.action}. W kolejnym kroku wybierz `Exchange i Office 365`{.action}; 

- **jeśli inne konto jest już skonfigurowane**: kliknij piktogram w postaci trzech myślników na górze po lewej stronie, a następnie piktogram w postaci strzałki po prawej stronie nazwy skonfigurowanego konta. Następnie kliknij `Dodaj konto`{.action} i wybierz `Exchange i Office 365`{.action}. 

![Exchange](images/configuration-exchange-gmail-application-android-step1.png){.thumbnail}

Wpisz Twój adres e-mail i kliknij `Dalej`{.action}.

Następnie wpisz hasło wybrane dla Twojego konta e-mail, nie wybieraj certyfikatu klienta, kliknij `Dalej`{.action}, aby kontynuować konfigurację. W trakcie konfiguracji konta może zaistnieć potrzeba połączenia z serwerem OVHcloud. W takim przypadku urządzenie wyświetli powiadomienie: kliknij `OK`{.action}, aby połączyć się z serwerem.

Wpisz parametry serwera poczty przychodzącej. Niektóre pola mogą być wstępnie uzupełnione.

|Informacja|Opis| 
|---|---| 
|Domena/Nazwa użytkownika|Wpisz pełny adres e-mail.|  
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|
|Certyfikat klienta|Pozostaw puste.|
|Serwer|Wskaż serwer, na którym hostowana jest Twoja usługa Exchange. Możesz znaleźć go w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > zakładka `Informacje ogólne`{.action} dotyczące danej usługi Exchange > `Połączenie`{.action}.|
|Port|Wpisz port 443.|  
|Typ zabezpieczenia|Wybierz « SSL/TLS ».|

Następnie kliknij `Dalej`{.action}. Jeśli wpisane informacje są poprawne, logowanie zakończy się sukcesem.

![Exchange](images/configuration-exchange-gmail-application-android-step2.png){.thumbnail}

Aby zakończyć konfigurację, zezwól serwerowi OVHcloud na zdalne zarządzanie niektórymi funkcjami bezpieczeństwa związanymi z urządzeniem. Kliknij `OK`{.action}, zapoznaj się z informacjami, które się wyświetlą, po czym kliknij `Aktywuj administratora tego urządzenia`{.action}.

Następnie nazwij konto w taki sposób, aby łatwo je było odróżnić od innych kontdostępnych w aplikacji. Następnie kliknij `Dalej`{.action}.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową posiadającą [funkcje do pracy zespołowej](https://www.ovhcloud.com/pl/emails/){.external}  dostępną pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

## Sprawdź również

[Konfiguracja konta e-mail, włączonego do usługi MX Plan lub do usługi hostingu, na urządzeniu z systemem Android przy użyciu aplikacji Gmail](https://docs.ovh.com/pl/emails/konfiguracja-android/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>