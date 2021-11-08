---
title: 'Zmiana hasła do konta FTP'
slug: zmiana-hasla-konto-ftp
excerpt: 'Dowiedz się, jak zmienić hasło dla użytkownika FTP utworzonego na Twoim hostingu'
section: 'FTP i SSH'
order: 1
---

**Ostatnia aktualizacja dnia 2018-04-03**

## Wprowadzenie

Wraz z pakietami hostingowymi OVH zyskujesz dostęp do przestrzeni dyskowej umożliwiającej umieszczanie w Internecie plików Twojej strony WWW. Możesz logować się do przestrzeni dyskowej, za pomocą konta FTP i odpowiedniego hasła.

**Dowiedz się, jak zmienić hasło do konta FTP utworzonego na Twoim hostingu.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

## W praktyce

### Etap 1: dostęp do zarządzania użytkownikami FTP

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiedni hosting. Teraz przejdź do zakładki `FTP - SSH`{.action}.

W tabeli wyświetlają się nazwy użytkowników FTP utworzone na Twoim hostingu. Używając tych loginów, możesz zalogować się do Twojej przestrzeni dyskowej, aby umieścić w Internecie pliki Twojej strony WWW. Pierwszy użytkownik (login) tworzony jest automatycznie podczas instalacji hostingu.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### Etap 2: zmiana hasła użytkownika FTP

Zmiana hasła do konta FTP utworzonego na Twoim hostingu może zostać przeprowadzona na dwa różne sposoby, w zależności od wybranej oferty [hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external}:

- **w przypadku pakietów, które nie pozwalają tworzyć wielu użytkowników FTP** (oferty Start 10MB, Kimsufi Web i Hosting Perso): kliknij ikonę ołówka w kolumnie `Hasło`{.action} tabeli, wprowadź nowe hasło, a następnie zatwierdź zmianę;

- **w przypadku pakietów, które pozwalają tworzyć wielu użytkownikow FTP** (oferty Pro i Performance): kliknij w tabeli ikonę koła zębatego po prawej stronie wybranego loginu, a następnie kliknij `Zmień hasło`{.action}. W oknie, które się wyświetli, wprowadź nowe hasło i kliknij przycisk `Zatwierdź`{.action}.

Nowe hasło będzie aktywne kilku minutach.

> [!primary]
>
> Przy wyborze nowego hasła zalecamy zastosowanie zwyczajowych zasad bezpieczeństwa. Zalecamy również:
>
> - nie używać dwa razy tego samego hasła; 
>
> - wybrać hasło, które nie ma żadnego związku z Twoimi danymi osobistymi (takimi jak nazwisko, imię czy data urodzenia);
>
> - regularnie zmieniać hasła;
>
> - nie zapisywać haseł na kartce ani nie przesyłać ich na Twój adres e-mail;
>
> - nie zapisywać haseł w przeglądarce internetowej, nawet jeśli wyświetli się taka sugestia.
>

### Etap 3: dostęp do Twojej przestrzeni dyskowej

Po zmianie hasła do konta FTP możesz zalogować się do Twojej przestrzeni dyskowej

W zależności od [pakietu hostingowego](https://www.ovhcloud.com/pl/web-hosting/){.external} masz kilka możliwości:

- **FTP Explorer**: umożliwia dostęp do przestrzeni dyskowej przy użyciu przeglądarki internetowej. Aby skorzystać z tej opcji, pozostań w zakładce `FTP - SSH`{.action} i kliknij przycisk `FTP Explorer`{.action};

- **program kompatybilny z protokołem FTP**: zainstaluj na Twoim komputerze odpowiedni program, np. FileZilla;

- **dostęp przez SSH**: wpisz odpowiednie komendy w terminalu, aby połączyć się z przestrzenią dyskową. Aby korzystać z tego typu dostępu, konieczna jest zaawansowana wiedza techniczna. 

## Sprawdź również

[Korzystanie z programu FileZilla na Twoim hostingu](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/){.external}

[SSH na hostingu](https://docs.ovh.com/pl/hosting/hosting_www_ssh_na_hostingu/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.