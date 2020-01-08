---
title: 'Zarządzanie Object Storage za pomocą oprogramowania CyberDuck'
excerpt: 'Zarządzanie Object Storage za pomocą oprogramowania CyberDuck'
slug: zarzadzanie_object_storage_za_pomoca_oprogramowania_cyberduck
section: 'Object Storage'
legacy_guide_number: g1868
---

**Ostatnia aktualizacja dnia 2020-01-08**

## 
Object Storage to usługa przestrzeni dyskowej zarządzana z poziomu API OpenStack.

Jeśli nie posiadasz wiedzy na temat tego typu zarządzania przestrzenią dyskową, możesz skorzystać z rozwiązań graficznych, które w sposób niewidoczny używają API OpenStack.
Jednym z tego typu rozwiązań jest CyberDuck.

Inne interfejsy można odnaleźć w Internecie. Ich konfiguracja przebiega podobnie do tej, którą przedstawimy. 

Przewodnik ten wyjaśnia, jak skonfigurować oprogramowanie Cyberduck, aby móc zarządzać usługą Object Storage za pomocą graficznego interfejsu opartego na API Openstack.


## Wstępne wymagania

- Skonfigurowany użytkownik Horizon: []({legacy}1773)
- Identyfikator projektu i użytkownika, do uzyskania w menu 
[Dostęp i bezpieczeństwo w Horizon]({legacy}1774) pobierając plik OpenRC



## 

- Pobierz oprogramowanie [Cyberduck](https://cyberduck.io/)
- Zaloguj się na konto typu "Swift - OpenStack Object Storage"



![objectstorage-cyberduck](images/v3.0.png){.thumbnail}
W formularzu należy podać różne informacje:

- Server: auth.cloud.ovh.net (serwer uwierzytelniania)
- Tenant ID:Access Key: Jest to ID_Projektu:ID_Utilisateur_Horizon
- Secret Key: hasło użytkownika Horizon
- More Options / Path: v3.0



- Zaloguj się.



![objectstorage-cyberduck](images/img_2756.jpg){.thumbnail}


## 

- [Początek pracy z API Swift]({legacy}1916)
- [Konfiguracja Owncloud z Object Storage]({legacy}2000)




## 
[Przewodniki Cloud]({legacy}1785)

