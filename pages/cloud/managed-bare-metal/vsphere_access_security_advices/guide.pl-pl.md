---
title: 'Dobre praktyki bezpieczeństwa dotyczące klienta vSphere'
routes:
    canonical: '/pages/cloud/private-cloud/vsphere_access_security_advices'
excerpt: 'Dowiedz się, jak zabezpieczyć dostęp do klienta vSphere'
updated: 2020-11-18
---

**Ostatnia aktualizacja dnia 18-11-2020**

## Wprowadzenie

Zalecamy ograniczenie dostępu do infrastruktury w celu zapewnienia jej optymalnego bezpieczeństwa. Możesz wykorzystać do tego jedną z proponowanych przez nas metod.

**Dowiedz się, jak szybko i w prosty sposób zabezpieczyć dostęp do klienta vSphere.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

## W praktyce

### Kontrola dostępu z adresów IP

Pierwsze zalecenie dotyczy ograniczenia dostępu z adresów IP. Zalecamy korzystanie z systemu dodawania adresów IP do białej listy.  Metoda ta działa w oparciu o zasadę odrzucania wszystkich adresów IP i dodawania do białej listy adresów uprawnionych do dostępu do Twojej infrastruktury.

Funkcja ta dostępna jest w Twoim [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Przejdź do sekcji Managed Bare Metal, a następnie do zakładki `Bezpieczeństwo`{.action}. Pojawi się tabela, w której wyświetlą się adresy IP uprawnione do dostępu oraz adresy z odmową dostępu. Aby dodać nowe adresy, kliknij przycisk po prawej stronie `Dodanie adresów IP`{.action} :

![Dodanie adresów IP](images/adding_ip.png){.thumbnail}

### Tworzenie indywidualnych dostępów dla użytkowników 

Zalecamy tworzenie odrębnego dostępu dla każdego użytkownika. Aby wykonać tę operację przejdź do[Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, zakładka `Użytkownicy`{.action}. Aby dodać nowych użytkowników, kliknij przycisk po prawej stronie: `Stwórz użytkownika`{.action}.

![Użytkownicy](images/users.png){.thumbnail}

Podczas tworzenia użytkownika zostaniesz poproszony o wpisanie hasła. 

> [!primary]
>
> Aby zapewnić bezpieczeństwo Twoich danych, wpisz hasło spełniające poniższe kryteria: 
>
> - hasło musi zawierać minimum osiem znaków;
> - musi zawierać minimum trzy typy znaków;
> - nie może figurować w słowniku;
> - nie może zawierać informacji osobistych typu imię, nazwisko czy data urodzenia;
> - nie może być wykorzystane dla kilku użytkowników;
> - musi być przechowywane w menedżerze haseł;
> - musi być zmieniane co trzy miesiące;
> - musi być inne niż poprzednie hasła.
>

Następnie możesz zarządzać uprawnieniami każdego użytkownika. W tym celu kliknij trzy kropki po prawej stronie nazwy użytkownika:

![Edycja parametrów użytkowników](images/users_edit.png){.thumbnail}

### Ograniczenie czasu sesji

Zalecamy każdorazowe zamknięcie sesji użytkownika. Aby ograniczyć czas połączenia, możesz określić liczbę minut, po upływie których wygasa sesja.

Ustawienia te możesz wprowadzić w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Przejdź do sekcji Managed Bare Metal, po czym wybierz `Bezpieczeństwo`{.action}. Następnie kliknij przycisk po prawej stronie`Zmień czas wygasania sesji`{.action}. W oknie, które się ukaże, wybierz czas (w minutach) wygaśnięcia sesji.

![Wygaśnięcie sesji](images/expiration.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.