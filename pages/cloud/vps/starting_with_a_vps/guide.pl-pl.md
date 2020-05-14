---
title: 'Pierwsze kroki z serwerem VPS'
excerpt: 'Poznaj podstawy korzystania z serwera VPS'
slug: pierwsze-kroki-vps
section: 'Pierwsze kroki'
order: 1
---

**Ostatnia aktualizacja dnia 2018-04-18**
 
## Wprowadzenie

Wirtualny serwer prywatny (VPS, Virtual Private Server) to inaczej zwirtualizowana wydzielona część serwera dedykowanego. W przeciwieństwie do hostingu współdzielonego, w przypadku którego zarządzanie techniczne leży po stronie OVHcloud, tutaj to Ty zarządzasz w całości serwerem VPS.

**Ten przewodnik pomoże Ci rozpocząć pracę z Twoim nowym serwerem VPS.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji maszynę, za którą to Ty przejmujesz odpowiedzialność. Ponieważ nie mamy dostępu do udostępnionej Ci maszyny, nie możemy być jej administratorem. Dlatego to do Ciebie należy codzienne  zarządzanie oprogramowaniem i dbanie o bezpieczeństwo. Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. Jeśli jednak napotkasz jakiekolwiek trudności lub wątpliwości związane z administrowaniem, użytkowaniem lub dbaniem o bezpieczeństwo serwera, zalecamy skontaktowanie się z wyspecjalizowanym dostawcą. Więcej informacji znajduje się w rozdziale „Sprawdź również”.
> 

## Wymagania początkowe

- Zakupienie serwera VPS na [stronie OVHcloud](https://www.ovhcloud.com/pl/vps/){.external}.
- Otrzymanie po instalacji wiadomości e-mail (po weryfikacji i zrealizowaniu zamówienia) zawierającej dane dostępowe.

## W praktyce

W celu sprawdzenia informacji o Twoim serwerze VPS wystarczy po zalogowaniu się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} przejść do części `Cloud`{.action}, a następnie do `Serwery`{.action} w kolumnie po lewej stronie. Znajdziesz tam wszystko, co dotyczy Twojego serwera VPS: informacje ogólne o środowisku, dostępne operacje, które możesz wykonywać w formie przycisków po prawej stronie ekranu, a u dołu strony dostępne opcje.

### Logowanie do serwera VPS

Podczas instalacji (lub reinstalacji) serwera VPS otrzymasz e-mail z hasłem dostępu do roota. Połączenie będzie szyfrowane protokołem SSH. SSH to szyfrowany protokół komunikacyjny. Dostęp odbywa się przez okienko terminala (Linux lub MAC), a  w systemie Windows za pomocą oprogramowania innych producentów (np. Putty).

W celu połączenia się z serwerem VPS, po otwarciu okienka terminala należy wpisać następujące polecenie:

```sh
ssh root@IPv4_de_votre_VPS
```

Lub:

```sh
ssh root@nazwa_Twojego_VPS
```

Oznaczenie serwera VPS będzie zawsze zaczynało się następująco: vpsXXXX.ovh.net (gdzie XXXX to ciąg cyfr).

### Instalacja lub reinstalacja serwera VPS

Reinstalacja odbywa się bezpośrednio w Panelu klienta. Wystarczy kliknąć przycisk `Reinstalacja serwera VPS`{.action}:

![Reinstalacja serwera VPS](images/reinstall_manager.png){.thumbnail}

Otworzy się okienko, w którym należy wybrać:

- właściwą dystrybucję z listy wyświetlonych;
- język;
- klucz SSH, jeśli wygenerowałeś klucz w Panelu klienta.

![Menu wyboru dla reinstalacji](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Niektóre dystrybucje, np. Plesk lub Windows wymagają wcześniejszego wykupienia licencji, którą możesz nabyć w OVHcloud lub od innego dystrybutora. Następnie należy wprowadzić go ręcznie lub poprzez Panel klienta. Wchodząc w panel `Dedykowany`{.action}, a następnie `Licencje`{.action}, można również zarządzać licencjami.
> W tym miejscu możesz także zamawiać licencje (przycisk po prawej `Zamów`{.action}) lub dodać własną licencję SPLA Windows lub SPLA SQL Server (przycisk po prawej `Dodaj licencję SPLA`{.action}).
> 

W Panelu klienta wyświetli się pasek postępu informujący o postępie reinstalacji, która może trwać do 30 minut.

### Zadbaj o bezpieczeństwo swojego serwera VPS

Jak wyjaśniono we „Wprowadzeniu”, to Ty jesteś administratorem swojego serwera VPS. W związku z tym jesteś odpowiedzialny za jego bezpieczeństwo oraz znajdujące się tam dane.

Jeśli potrzebujesz podstawowych objaśnień, przejdź do przewodnika [zabezpieczenia serwera VPS](https://docs.ovh.com/pl/vps/porady-zabezpieczenie-vps/).

### Zadbaj o bezpieczeństwo swojej domeny z certyfikatem SSL

Po zainstalowaniu i zabezpieczeniu serwera VPS możesz również zabezpieczyć swoją witrynę i nazwę domeny. W tym celu konieczna jest instalacja certyfikatu SSL, dzięki któremu adres strony będzie posiadał oznaczenie protokołu *https*, a nie tylko *http*.

Certyfikat ten można zainstalować ręcznie we własnym zakresie bezpośrednio na serwerze VPS. W tym celu sprawdź oficjalną dokumentację użytkowanej przez Ciebie dystrybucji.

Jeśli chcesz tego dokonać w sposób bardziej zautomatyzowany, OVHcloud oferuje [SSL Gateway](https://www.ovh.pl/ssl-gateway/). Przejdź na stronę [oferty](https://www.ovh.pl/ssl-gateway/){.external} lub do [dokumentacji](https://docs.ovh.com/pl/ssl-gateway/korzystanie-ssl-gateway/){.external} proponowanej oferty.

## Sprawdź również

[Wprowadzenie do protokołów SSH](https://docs.ovh.com/pl/dedicated/ssh-wprowadzenie/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.