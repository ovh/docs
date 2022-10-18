---
title: Włącz połączenia SSO z Twoim kontem OVHcloud
slug: connect-saml-sso
excerpt: "Dowiedz się, jak powiązać usługę ADFS z Twoim kontem OVHcloud przez SAML 2.0"
section: Poziom zaawansowany
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 13-10-2022**

## Wprowadzenie

Do zalogowania się do konta OVHcloud możesz użyć **unikalnego** uwierzytelnienia SSO (*Single Sign-On*). Aby włączyć te połączenia, Twoje konto oraz usługi ADFS (*Active Directory Federation Services*) muszą być skonfigurowane za pomocą uwierzytelniania SAML (*Security Assertion Markup Language*).

**Niniejszy przewodnik wyjaśnia, jak powiązać Twoje konto OVHcloud z zewnętrzną Active Directory.**

## Wymagania początkowe

- Usługi ADFS (Active Directory Federation Services) muszą być wykonywane na serwerze
- Posiadanie [konta OVHcloud](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/)
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!primary]
>
> Aby usługodawca (tzn. Twoje konto OVHcloud) mógł nawiązać połączenie SSO z dostawcą tożsamości (tzn. usługą ADFS), należy przede wszystkim nawiązać relację zaufania.
>

### Budowa zaufania ADFS

Twój ADFS działa jako dostawca tożsamości. Zlecenia uwierzytelnienia Twojego konta OVHcloud zostaną przyjęte tylko wtedy, gdy zostanie ono uznane za zaufaną organizację trzecią.

W kontekście Active Directory oznacza to, że należy go dodać jako `Relying Party Trust`.

W menedżerze serwerów otwórz menu `Tools`{.action} i wybierz `AD FS Management`{.action}.

![Menu Narzędzia Windows Server](images/windows_server_tools_menu.png){.thumbnail}

Kliknij `Relying Party Trusts`{.action}.

![ADFS Menu](images/adfs_menu.png){.thumbnail}

Następnie kliknij `Add Relying Party Trust...`{.action}.

![Menu zatwierdzeń ADFS](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Wybierz `Claims aware`{.action} i zatwierdź przyciskiem `Start`{.action}.

![ADFS dodanie zatwierdzenia - etap 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Możesz wprowadzić ręcznie informacje dotyczące zaufanego podmiotu trzeciego lub zaimportować je z pliku metadanych.

#### Importuj metadane OVHcloud SP

Możesz uzyskać odpowiedni plik metadanych za pomocą następujących linków:

- [Metadane regionu UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadane regionu CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Wybierz `Import data about the relying party from a file`{.action} i wybierz Twój plik metadanych.

Następnie kliknij przycisk `Next`{.action}.

![ADFS - dodanie zatwierdzenia - etap 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Wprowadź nazwę wyświetlacza dla zaufanej strony trzeciej i kliknij przycisk `Next`{.action}.

![ADFS - dodanie zatwierdzenia - etap 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Kliknij `Next`{.action} w oknie kontroli dostępu.

![ADFS - dodanie zatwierdzenia - etap 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Kliknij `Next`{.action}, aby kontynuować.

![ADFS - dodanie zatwierdzenia - etap 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Kliknij przycisk `Close`{.action} w ostatnim oknie. Zatwierdzenie przez OVHcloud jako zaufaną organizację trzecią zostało dodane do Twojego ADFS.

![Zatwierdzenia ADFS](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Z OVHcloud dodanym jako zaufany podmiot zewnętrzny, powinieneś już mieć możliwość logowania się przez SSO. Jednak wszystkie informacje dotyczące tożsamości użytkownika (w zakresie "twierdzenia" SAML) pozostaną niedostępne do czasu skonfigurowania strategii dopasowania pól LDAP Active Directory do atrybutów SAML.
>

#### Korespondencja atrybutów LDAP z atrybutami SAML

Kliknij pozycję OVHcloud w części "Relying Party Trusts".

![Mapa zatwierdzenia ADFS etap 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Następnie kliknij `Edit Claim Issuance Policy...`{.action}.

![Mapa zatwierdzenia ADFS etap 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Kliknij przycisk `Add Rule...`{.action}.

![Mapa zatwierdzenia ADFS etap 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Kliknij `Next`{.action}.

Wpisz nazwę reguły i zdefiniuj tabelę korelacji.

Wybierz `Active Directory` jako `Attribute store`.

> [!primary]
>
> Poniższe parametry mogą być dowolnie skonfigurowane tak, aby dostawca usług mógł poprawnie odczytać dane LDAP Active Directory. Jako przykład możesz wykorzystać poniższy obraz.

Po zakończeniu kliknij przycisk `Finish`{.action}.

![Mapa zatwierdzenia ADFS etap 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![Mapa zatwierdzenia ADFS etap 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Kliknij przycisk `Apply`{.action} i zatwierdź `OK`{.action}.

![Mapa zatwierdzenia etapu 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Po utworzeniu tabeli korelacji Twoja usługa ADFS stała się zaufana OVHcloud jako dostawca usług. Kolejnym krokiem jest sprawdzenie, czy konto OVHcloud zaufa użytkownikowi ADFS.

### Budowa zaufania do konta OVHcloud i konfiguracja połączenia

Opcja dodawania ADFS jako zaufanego dostawcy danych jest dostępna w [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), w którym możesz dostarczyć metadane dostawcy tożsamości.

[Zaloguj się](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i kliknij swój profil w prawym górnym rogu.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Kliknij Twoją nazwę, aby przejść do strony zarządzania profilem.

![Informacje o użytkowniku OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Otwórz zakładkę `Zarządzanie użytkownikami`{.action}.

![Profil menu OVHcloud](images/ovhcloud_profile_menu.png){.thumbnail}

Kliknij przycisk `Login SSO`{.action} .

![Etap 1 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Wpisz metadane XML Twojej usługi ADFS. W tym przypadku pole `Nazwa atrybutu grupy` jest opcjonalne. Kliknij na `Zatwierdź`{.action}.

![Etap 2 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Odszukaj ADFS jako dostawcę danych, a także grupy domyślne.

![Etap 3 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Aby uzyskać więcej informacji, kliknij link pod `URL usługi SSO`.

![Etap 4 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![Etap 5 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Przycisk `...`{.action} pozwala na aktualizację lub usunięcie certyfikatu SSO i na zapoznanie się z jego szczegółami.

![Etap 6 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

Usługa ADFS jest obecnie uważana za zaufanego dostawcę tożsamości. Jednocześnie należy dodać grupy do konta OVHcloud.

> [!warning]
> Jeśli spróbujesz zalogować się przez SSO, prawdopodobnie wyświetli się komunikat błędu `Not in valid groups`.
>
> Twoje konto OVHcloud sprawdza, czy użytkownik loguje się do grupy istniejącej na koncie.
>

Aby to zrobić, sprawdź informacje zebrane w atrybucie "Group" zwróconym przez usługę ADFS.

Weźmy na przykład użytkownika "John Doe" z Active Directory, jak pokazano na poniższym obrazku.

![Użytkownik ADFS](images/adfs_user.png){.thumbnail}

Sprawdź tabelę korelacji w ADFS:

![Mapowanie zatwierdzenia części zaufania ADFS](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

W tym przykładzie atrybut "Group" zwrócony przez Active Directory dla użytkownika "John Doe" jest "title". Odpowiada to "job title", który jest `manager@<my-domain>.com`.

Możesz również sprawdzić w twierdzeniu SAML:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

Oznacza to, że należy dodać grupę `manager@<my-domain>.com` do Twojego konta OVHcloud i przypisać do niego określoną rolę. W przeciwnym razie Twoje konto OVHcloud nie wie, co może robić użytkownik.

Dodaj konto klikając przycisk `Zgłoś grupę`{.action} i wypełniając pola:

![Grupy zarządzania użytkownikami ADFS](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupy zarządzania użytkownikami ADFS](images/ovhcloud_user_management_groups_2.png){.thumbnail}

Następnie możesz sprawdzić, czy grupa została dodana do Twojego konta OVHcloud w sekcji `Grupy`:

![Grupy zarządzania użytkownikami ADFS](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Po zalogowaniu się z użytkownikiem Active Directory "John Doe" Twoje konto OVHcloud potwierdzi rolę "REGULAR" określoną przez jego grupę.

Następnie będziesz mógł wylogować się ze swojego konta i ponownie zalogować się z ADFS jako dostawcą danych.

### Logowanie przez SSO

Na [stronie logowania OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wpisz [identyfikator](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/#jaki-jest-moj-identyfikator-klienta), po którym następuje **/idp** bez hasła i kliknij przycisk `Login`{.action}.

![Połączenie z federacją OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

Zostaniesz przekierowany na stronę logowania ADFS. Wprowadź login/hasło użytkownika Active Directory LDAP, następnie kliknij przycisk `Sign in`{.action}.

![OVHcloud Federacja Logiczna Przekierowania ADFS](images/ovhcloud_federation_login_2.png){.thumbnail}

Teraz jesteś zalogowany tym samym identyfikatorem klienta, ale za pomocą użytkownika Active Directory oraz SSO ADFS.

![Federacja Informacji o Użytkownikach OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Sprawdź również

[Załóż konto OVHcloud](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/)

[Zabezpieczenie konta OVHcloud i zarządzanie danymi osobowymi](https://docs.ovh.com/pl/customer/identyfikator_klienta/)

[Definicja i zarządzanie hasłem do konta](https://docs.ovh.com/pl/customer/zarzadzanie-haslem/)

[Zabezpieczenie konta OVHcloud za pomocą weryfikacji dwuetapowej](https://docs.ovh.com/pl/customer/zabezpieczenie-konta-za-pomoca-2FA/)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
