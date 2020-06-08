---
title: 'Pierwsze kroki z serwerem VPS'
excerpt: 'Poznaj podstawy korzystania z serwera VPS'
slug: pierwsze-kroki-vps
section: 'Pierwsze kroki'
order: 1
---

**Ostatnia aktualizacja z dnia 29-05-2020**
 
## Wprowadzenie

Prywatny serwer wirtualny VPS (z ang. *Virtual Private Server*) to wirtualny serwer dedykowany. W przeciwieństwie do hostingu, gdzie techniczne zarządzanie należy do zadań OVHcloud, Twój serwer VPS jest administrowany wyłącznie przez Ciebie.

**Niniejszy przewodnik zawiera kilka podstawowych wskazówek, które pomogą Ci zacząć pracować z Twoim nowym, zainstalowanym serwerem VPS.**


> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, za które w pełni odpowiadasz - nie mając dostępu do tych maszyn, nie możemy być ich administratorem. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji „Sprawdź również” niniejszego przewodnika.
> 


## Wymagania początkowe

- Rezerwacja Twojego serwera VPS na [stronie OVHcloud](https://www.ovhcloud.com/pl/vps/){.external}.
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
- Dostęp do danych do logowania wysłanych e-mailem po zakończonej instalacji

## W praktyce

Zaloguj się do Twojego [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, wejdź do sekcji `Serwer`{.action} i wybierz Twój serwer na liście nawigacyjnej znajdującej się po lewej stronie, pod `VPS`{.action}. 

Ten interfejs zarządzania zawiera ważne informacje o Twojej usłudze i pozwala na przeprowadzenie najważniejszych operacji. Jego wygląd będzie różnił się w zależności od gamy, do jakiej należy Twój VPS. 

- Jeżeli właśnie zamówiłeś/-aś serwer VPS, jego numer referencyjny przedstawia się w sposób następujący:  *vps-XXXXXXX.vps.ovh.net* (przy czym *X* odpowiada cyfrze lub literze). 
- Jeśli zarządzasz starszym modelem VPS, jego numer referencyjny będzie skonstruowany inaczej: *vpsXXXX.ovh.net* (gdzie *X* odpowiada liczbie). 

W przypadku aktualnej gamy VPS, przeczytaj następną sekcję niniejszego przewodnika: **Pierwsze kroki (aktualna gama VPS)**. 

W przypadku starszego modelu VPS, zapraszamy do dalszej lektury przewodnika po kliknięciu w link: [Pierwsze kroki (poprzednia gama VPS)](./#pierwsze-kroki-poprzednia-gama-vps_1).

### Pierwsze kroki (aktualna gama VPS)

#### Łączenie z Twoim serwerem VPS (gama aktualna)

W momencie pierwszej instalacji lub reinstalacji z poziomu panelu klienta, zostanie stworzony profil użytkownika posiadający wszystkie uprawnienia. Jego dane identyfikacyjne zostaną Ci wysłane w wiadomości e-mail.
Nazwa użytkownika zostanie wygenerowana w zależności od systemu operacyjnego, na przykład „ubuntu” czy „debian”. 

Z serwerem VPS będzie można połączyć się za pomocą SSH, używając nazwy użytkownika oraz hasła dostępu. (SSH to szyfrowany protokół komunikacyjny. Aby dowiedzieć się więcej na jego temat, zapraszamy do lektury [przewodnika wprowadzającego do tematyki SSH dla serwerów dedykowanych OVHcloud](../../dedicated/ssh-wprowadzenie/). Dostęp do Twojego serwera odbywa się przez okienko terminala linii poleceń (Linux lub MAC), a w systemie Windows za pomocą oprogramowania innych producentów (zalecamy PuTTy).

Jeśli korzystasz na przykład z oprogramowania PuTTy, wystarczy, że otworzysz aplikację i wpiszesz nazwę serwera lub jego adres IPv4, aby zainicjować połączenie. Po wpisaniu nazwy użytkownika oraz hasła otrzymasz dostęp do interfejsu linii poleceń CLI (z ang. *Command Line Interface*).

![zastosowanie putty](images/putty1.png){.thumbnail}

Po otworzeniu terminala należy wpisać następujące polecenie, aby połączyć się z Twoim serwerem VPS używając informacji przekazanych e-mailem (nazwa użytkownika i adres IPV4):

```sh
ssh nom_d_utilisateur@IPv4_de_votre_VPS
```

Jesteś teraz zalogowany/-a jako użytkownik z uprawnieniami root (użytkownik sudo), możesz zacząć wpisywać polecenia i wykonywać zadania administracyjne. Przed rozpoczęciem tych operacji zalecamy zmianę hasła:

```sh
$ sudo passwd
New password:
Retype new password:
passwd: password updated successfully
```

Należy zaznaczyć, iż hasła nie są wyświetlane. Zmień następnie profil użytkownika na profil „root” i ustaw Twoje hasło dostępu dla administratora:

```sh
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Instalacja lub reinstalacja Twojego serwera VPS (gama aktualna)

Każdą reinstalację możesz przeprowadzić bezpośrednio z poziomu panelu klienta OVHcloud. Z zakładce „Strona główna” odszukaj  „OS / Dystrybucja” w części **Twój VPS**. Kliknij `...`{.action}, a następnie `Reinstalacja serwera VPS`{.action}.

![Reinstalacja serwera VPS](images/2020panel_02.png){.thumbnail}

Po otwarciu się okna będziesz mieć do wyboru:

- jedną spośród proponowanych dystrybucji;
- klucz SSH, jeżeli stworzyłeś/-aś uprzednio klucz w Twoim panelu klienta.

![Reinstalacja serwera VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Niektóre dystrybucje, jak Plesk czy Windows, wymagają uprzedniego wykupienia licencji. Możesz ją zamówić albo bezpośrednio u OVHcloud, albo u pośrednika. Następnie należy uruchomić ją ręcznie lub z poziomu Twojego panelu klienta. Licencjami możesz zarządzać udając się do sekcji `Serwer`{.action}, a następnie `Licencje`{.action}.
Z tego samego miejsca możesz również zamawiać licencje (przycisk po prawej stronie `Zamów`{.action}) lub dodać Twoją własną licencję SPLA Windows albo SPLA SQL Server (przycisk po prawej stronie `Dodaj licencję SPLA`{.action}).
> 

W Twoim panelu klienta wyświetli się pasek postępu informujący o stanie zaawansowania procesu reinstalacji, która może trwać do 30 minut.

### Pierwsze kroki (poprzednia gama VPS)

#### Łączenie z Twoim serwerem VPS (poprzednia gama)

Podczas instalacji (lub reinstalacji) Twojego serwera VPS, otrzymasz wiadomość e-mail z hasłem dostępu root. Połączenie będzie inicjowane za pomocą SSH - szyfrowanego protokołu komunikacyjnego. Aby dowiedzieć się więcej na jego temat, zapraszamy do lektury [przewodnika wprowadzającego do tematyki SSH dla serwerów dedykowanych OVHcloud](../../dedicated/ssh-wprowadzenie/). 

Dostęp odbywa się przez okienko terminala poleceń (Linux lub MAC), a w systemie Windows za pomocą oprogramowania innych producentów (na przykład PuTTy).

Jeśli korzystasz na przykład z oprogramowania PuTTy, wystarczy, że otworzysz aplikację i wpiszesz nazwę serwera lub jego adres IPv4, aby zainicjować połączenie. Po wpisaniu nazwy użytkownika oraz hasła otrzymasz dostęp do interfejsu linii poleceń CLI (z ang. *Command Line Interface*).

![zastosowanie putty](images/putty1.png){.thumbnail}

Po otworzeniu terminala należy wpisać następujące polecenie, aby połączyć się z serwerem VPS:

```sh
ssh root@IPv4_de_votre_VPS
```

Albo:

```sh
ssh root@Référence_de_votre_VPS
```

#### Instalacja lub reinstalacja Twojego serwera VPS (poprzednia gama)

Każda reinstalacja zostaje przeprowadzona bezpośrednio z poziomu Twojego panelu klienta. W tym celu wystarczy kliknąć przycisk `Reinstalacja serwera VPS`{.action}:

![Reinstalacja serwera VPS](images/reinstall_manager.png){.thumbnail}

Po otwarciu się okna będziesz mieć do wyboru:

- jedną spośród proponowanych dystrybucji;
- język;
- klucz SSH, jeżeli stworzyłeś/-aś uprzednio klucz w Twoim panelu klienta.


![Menu z opcjami reinstalacji](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Niektóre dystrybucje, jak Plesk czy Windows, wymagają uprzedniego wykupienia licencji. Możesz ją zamówić albo bezpośrednio u OVHcloud, albo u pośrednika. Następnie należy uruchomić ją ręcznie lub z poziomu Twojego panelu klienta. Licencjami możesz zarządzać udając się do sekcji `Serwer`{.action}, a następnie `Licencje`{.action}.
Z tego samego miejsca możesz również zamawiać licencje (przycisk po prawej stronie `Zamów`{.action}) lub dodać Twoją własną licencję SPLA Windows albo SPLA SQL Server (przycisk po prawej stronie `Dodaj licencję SPLA`{.action}).
> 

W Twoim panelu klienta wyświetli się pasek postępu informujący o stanie zaawansowania procesu reinstalacji, która może trwać do 30 minut.

### Zabezpiecz Twój serwer VPS

Zgodnie z informacją zawartą w części „Wprowadzenie” niniejszego przewodnika, jesteś administratorem Twojego serwera VPS. W związku z tym ponosisz odpowiedzialność za dane oraz ich bezpieczeństwo.

Jeśli chcesz otrzymać kilka podstawowych informacji na ten temat, zachęcamy do przeczytania sekcji dotyczącej [zabezpieczania serwera VPS](../porady-zabezpieczenie-vps/){.external} naszego przewodnika.


### Zabezpiecz swoją domenę certyfikatem SSL

Po zainstalowaniu i zabezpieczeniu Twojego serwera VPS, masz możliwość zabezpieczenia nazwy Twojej domeny oraz Twojej strony web. W tym celu konieczne jest zainstalowanie certyfikatu SSL, który umożliwi transfer danych w ramach protokołu szyfrowanego *https*, a nie wyłącznie na podstawie protokołu *http*.

Certyfikat SSL możesz zainstalować ręcznie, bezpośrednio na serwerze VPS. W tym celu skonsultuj oficjalne materiały informacyjne odnoszące się do używanej przez Ciebie dystrybucji.

OVHcloud zaproponuje Ci w sposób automatyczny [SSL Gateway](https://www.ovh.pl/ssl-gateway/). Zachęcamy do odwiedzenia [strony komercyjnej](https://www.ovh.pl/ssl-gateway/){.external} lub zapoznania się z [dokumentacją](https://docs.ovh.com/pl/ssl-gateway/){.external} dotyczącą tej oferty.

## Sprawdź również

[Wprowadzenie do protokołów SSH](../../dedicated/ssh-wprowadzenie/){.external}

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.