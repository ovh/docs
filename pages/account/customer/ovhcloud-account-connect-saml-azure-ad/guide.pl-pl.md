---
title: Włącz połączenia Azure AD SSO z Twoim kontem OVHcloud
slug: connect-saml-sso-azure-ad
excerpt: "Dowiedz się, jak powiązać Azure Active Directory z Twoim kontem OVHcloud przy użyciu SAML 2.0"
section: Poziom zaawansowany
order: 02
updated: 2023-04-05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 05-04-2023**

## Wprowadzenie

Możesz użyć uwierzytelnienia **SSO** (*Single Sign-On*), aby zalogować się do Twojego konta OVHcloud. Aby włączyć te połączenia, Twoje konto oraz Azure AD (Active Directory) muszą być skonfigurowane przy użyciu SAML (*Security Assertion Markup Language*).

**Dowiedz się, jak powiązać Twoje konto OVHcloud z zewnętrznym Azure AD.**

## Wymagania początkowe

- Dostęp do ról **Administrator aplikacji** i **administrator użytkowników** usługi Azure AD
- Posiadanie [konta OVHcloud](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/)wferee
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!primary]
>
> Aby dostawca usług (na przykład Twoje konto OVHcloud) nawiązał połączenie SSO z dostawcą tożsamości (na przykład Azure AD), musisz nawiązać wzajemne zaufanie, rejestrując połączenie SSO w obu usługach.
>

### Użytkownicy i grupy AD

Twój Azure AD działa jako dostawca tożsamości. Zlecenia uwierzytelnienia Twojego konta OVHcloud zostaną przyjęte tylko wtedy, gdy wstępnie zadeklarowałeś je jako zaufaną osobę trzecią.

Skupmy się na tożsamości dostawcy tożsamości.

#### Użytkownicy Azure

Aby rozpocząć, przejdź do dashboardu Azure AD.

![Dashboard Azure AD](images/azure_ad_dashboard.png){.thumbnail}

Następnie kliknij `Users`{.action} w menu po lewej stronie.

![Użytkownik menu Azure AD](images/azure_ad_menu_user.png){.thumbnail}

Twórz wybraną liczbę użytkowników i/lub sprawdzaj użytkowników klikając na nią.

W tym przykładzie użyty zostanie użytkownik **John Smith**.

![Użytkownik Azure AD](images/azure_ad_user.png){.thumbnail}

W przypadku uwierzytelnienia SSO tożsamość **John Smith** jest przekazywana przez Azure AD na konto OVHcloud. Jednakże tożsamość ta musi zawierać co najmniej jedną grupę. Jeśli grupa nie istnieje, sprawdź poniżej, jak ją utworzyć, aby dodać do niej **John Smith**.

#### Grupy Azure AD

Kliknij `Groups`{.action} w menu po lewej stronie.

![Grupy menu Azure](images/azure_ad_menu_groups.png){.thumbnail}

Kliknij `New group`{.action} w menu na górze i uzupełnij wszystkie niezbędne informacje.

W tym przykładzie użyta zostanie grupa **manager@ovhcloudsaml**.

![Etap 1 Azure AD Group](images/azure_ad_group_1.png){.thumbnail}

Kliknij przycisk `Create`{.action}, aby wyświetlić wszystkie informacje o tej grupie.

![Etap 2 Azure AD Group](images/azure_ad_group_2.png){.thumbnail}

Teraz użytkownicy, którzy będą używali do uwierzytelniania SSO muszą zostać dodani do grupy.

W tym przykładzie, skupmy użytkownika **John Smith** na grupie **manager@ovhcloudsaml**.

W interfejsie wybranej grupy kliknij `Members`{.action} w menu po lewej stronie, a następnie kliknij `Add members`{.action} w menu na górze.

![Azure AD Group User Asignment Etap 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Wybierz użytkownika, który chcesz dodać do tej grupy, następnie kliknij przycisk `Select`{.action}.

![Azure AD Group User Asignment Etap 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Teraz użytkownik jest przypisany do grupy.

Aby wykonywać uwierzytelnienia SSO, należy utworzyć aplikację Azure AD.

W tej aplikacji należy skonfigurować jednorazowe uwierzytelnienie.

### Aplikacje Azure AD

Po pierwsze, utwórz aplikację, jeśli jeszcze jej nie ma.

#### Tworzenie aplikacji Azure AD

Kliknij `Enterprise applications`{.action} w menu po lewej stronie.

![Aplikacje menu Azure AD](images/azure_ad_menu_applications.png){.thumbnail}

Kliknij `New application`{.action} w menu na górze.

![Aplikacje Azure AD etap 1](images/azure_ad_applications_1.png){.thumbnail}

Kliknij `Create your own application`{.action} w menu na górze.

![Aplikacje Azure AD etap 2](images/azure_ad_applications_2.png){.thumbnail}

Wybierz `Non-gallery`{.action} z menu po lewej stronie i kliknij przycisk `Create`{.action}.

![Aplikacje Azure AD etap 3](images/azure_ad_applications_3.png){.thumbnail}

Wyświetlą się wówczas szczegółowe informacje dotyczące aplikacji.

![Aplikacje Azure AD etap 4](images/azure_ad_applications_4.png){.thumbnail}

Aplikacja Azure AD została utworzona. Użytkownicy, którzy chcą uwierzytelniać SSO za pomocą tej aplikacji, powinni teraz zostać dodani do tej aplikacji.

#### Aplikacja Azure AD - Przydział dla użytkowników

> [!primary]
>
> Aby użytkownik wykonał uwierzytelnienie SSO z aplikacji Azure AD, należy go dodać do tej aplikacji. Poniżej znajdziesz metody dodawania użytkownika do aplikacji Azure AD.
>
> Jednakże, w przypadku gdy dysponujesz usługą **Azure AD Premium**, lepiej jest dodać grupę użytkowników.
>

W menu po lewej stronie kliknij `Users and groups`{.action}, a następnie `Add user/group`{.action} w menu na górze.

Następnie kliknij sekcję `Users`{.action}, wybierz użytkownika, który ma zostać dodany do aplikacji, po czym kliknij przycisk `Select`{.action}.

![Azure AD Application User Dołącz do etapu 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Azure AD Application User Dołącz do etapu 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

Aplikacja jest utworzona, użytkownik jest przydzielony. Wystarczy uruchomić SSO przez SAML.

#### Azure AD aplikacja SSO

Przejdź do ogólnego widoku przez przycisk `Overview`{.action} w menu po lewej stronie, a następnie kliknij sekcję `Set up single sign on`{.action}.

![Etap 1 Azure AD SSO](images/azure_ad_sso_1.png){.thumbnail}

Kliknij `SAML`{.action}.

![Etap 2 Azure AD SSO](images/azure_ad_sso_2.png){.thumbnail}

Kliknij `Upload metadata file`{.action} w menu na górze.

![Etap 3 Azure AD SSO](images/azure_ad_sso_3.png){.thumbnail}

Kliknij ikonę przycisku `Select a file`{.action}, wybierz plik metadanych OVHcloud Service Provider i kliknij przycisk `Add`{.action}.

Możesz uzyskać odpowiedni plik metadanych za pomocą następujących linków:

- [Metadane w regionie UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadane regionu CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Pobierz plik metadanych, będziesz tego potrzebował później.

![Etap 5 Azure AD SSO](images/azure_ad_sso_5.png){.thumbnail}

Wyświetli się konfiguracja SAML.

![Etap 6 Azure AD SSO](images/azure_ad_sso_6.png){.thumbnail}

W sekcji `Attributes & Claims`{.action} kliknij przycisk `Edit`{.action}.

![Etap 9 Azure AD SSO](images/azure_ad_sso_9.png){.thumbnail}

Kliknij `Add a group claim`{.action} w menu na górze.

![Etap 10 Azure AD SSO](images/azure_ad_sso_10.png){.thumbnail}

Wybierz `Security groups`{.action} i **Group ID** w `Source attribute`{.action}, a następnie kliknij przycisk `Save`{.action}.

![Etap 11 Azure AD SSO](images/azure_ad_sso_11.png){.thumbnail}

Prośba o **groups** musi się teraz znaleźć na liście.

Skopiuj i zapisz gdzieś wartość **Claim name** (np. notatnik). Będziesz potrzebował jej później.

![Etap 12 Azure AD SSO](images/azure_ad_sso_12.png){.thumbnail}

W sekcji `SAML certificates`{.action} skopiuj wartość pola `App Federation Metadata Url`{.action}.

Użyj tego linku do pobrania pliku metadanych aplikacji Azure AD, aby później korzystać z tego linku na koncie OVHcloud.

![Etap 8 Azure AD SSO](images/azure_ad_sso_8.png){.thumbnail}

### Budowa zaufania do konta OVHcloud i konfiguracja połączenia

Aplikacja Azure AD zostaje dodana jako zatwierdzony dostawca danych w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), w którym możesz dostarczyć metadane dostawcy tożsamości.

#### Zaufanie OVHcloud

[Zaloguj się do Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i kliknij Twój profil w prawym górnym rogu.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Kliknij Twoją nazwę, aby przejść do strony zarządzania profilem.

![Informacje o użytkowniku OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Otwórz zakładkę `Zarządzanie użytkownikami`{.action}.

![Profil menu OVHcloud](images/ovhcloud_profile_menu.png){.thumbnail}

Następnie kliknij przycisk `Logowanie SSO`{.action}.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Uzupełnij pole **Group Atrybute Name** z wartością **Claim name** z wcześniej zarejestrowanych grup aplikacji Azure AD.

Wypełnij metadane XML aplikacji Azure AD z wcześniej zarejestrowanego pliku.

Kliknij przycisk `Zatwierdź`{.action}.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

Dodawanie aplikacji Azure AD do Twojego konta e-mail zostało ustanowione, ale należy dodać grupy do Twojego konta OVHcloud.

> [!warning]
> Jeśli spróbujesz zalogować się przez SSO, prawdopodobnie wyświetli się komunikat błędu "`Not in valid groups`".
>
> Twoje konto OVHcloud sprawdza, czy uwierzytelniony użytkownik należy do grupy istniejącej na koncie.
>

Aby rozwiązać tę sytuację, sprawdź atrybut "Group" zwrócony przez aplikację Azure AD: Pole **Object Id**.

#### Sprawozdawczość grup OVHcloud

![Etap 2 Azure AD Group](images/azure_ad_group_2.png){.thumbnail}

Dodaj plik, klikając przycisk `Declarer grupy`{.action}.

![Grupy zarządzania użytkownikami Ovhcloud etap 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Uzupełnij pola, następnie kliknij przycisk `Zatwierdź`{.action}.

![Grupy zarządzania użytkownikami Ovhcloud etap 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

Utworzona grupa musi pojawić się na liście.

![Grupy zarządzania użytkownikami Ovhcloud etap 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

### Logowanie przez SSO

Na [stronie logowania OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wpisz [identyfikator](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/#jaki-jest-moj-identyfikator-klienta), po którym następuje **/idp** bez hasła i kliknij przycisk `Login`{.action}.

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

Zostaniesz przekierowany na stronę logowania do aplikacji Azure AD. Wybierz `Use another account`{.action}.

![Etap 1 Azure AD Login](images/azure_ad_login_1.png){.thumbnail}

Wpisz e-mail użytkownika aplikacji Azure AD, a następnie kliknij przycisk `Next`{.action}.

![Etap 2 Azure AD Login](images/azure_ad_login_2.png){.thumbnail}

Wprowadź hasło użytkownika aplikacji Azure AD, a następnie kliknij przycisk `Sign In`{.action}.

![Etap 3 Azure AD Login](images/azure_ad_login_3.png){.thumbnail}

Teraz jesteś zalogowany do tego samego identyfikatora klienta, ale za pośrednictwem użytkownika Active Directory i korzystając z SSO aplikacji Azure AD.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}


## Sprawdź również

[Załóż konto OVHcloud](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/)

[Zabezpieczenie konta OVHcloud i zarządzanie danymi osobowymi](https://docs.ovh.com/pl/customer/identyfikator_klienta/)

[Definicja i zarządzanie hasłem do konta](https://docs.ovh.com/pl/customer/zarzadzanie-haslem/)

[Zabezpieczenie konta OVHcloud za pomocą weryfikacji dwuetapowej](https://docs.ovh.com/pl/customer/zabezpieczenie-konta-za-pomoca-2FA/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.