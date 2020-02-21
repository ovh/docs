---
title: 'Dostosuj swoją chmurę prywatną (Private Cloud) do certyfikacji HDS lub PCI DSS'
slug: aktywuj-opcje-hds-hipp-lub-pci-dss
excerpt: 'Odkryj, jak dostosować swoją chmurę prywatną do certyfikacji HDS lub PCI DSS'
section: 'Usługi i opcje OVH'
---

**Ostatnia aktualizacja z dnia 01-06-2019**

## Wprowadzenie

Możesz dostosować swoją chmurę prywatną do wymogów certyfikacji HDS lub PCI DSS. Uzyskanie jednej z nich może okazać się niezbędne dla Twojej działalności, zwłaszcza w przypadku hostingu [danych zdrowotnych](https://www.ovhcloud.com/pl/enterprise/solutions/certified-cloud-solutions/healthcare-data-hosting-hds/){.external} (HDS) lub [danych kart płatniczych](https://www.ovh.pl/private-cloud/payment-infrastructure/pci-dss.xml){.external} (PCI DSS). Dostosowanie przebiega w kilku etapach.

**Odkryj, jak dostosować swoją chmurę prywatną do certyfikacji HDS lub PCI DSS**

## Wymagania początkowe

- Dysponowanie infrastrukturą Private Cloud w wersji co najmniej 6.0.
- Dostęp do[Panelu klienta](https://www.ovh.com/auth/?action=gotomanager), sekcja `Dedykowane`{.action}

## W praktyce

### Upewnić się, że opcja bezpieczeństwa jest aktywna.

Aby dostosować swoją chmurę prywatną do certyfikacji HDS lub PCI DSS, należy aktywować jedną z odpowiednich opcji bezpieczeństwa. Aby sprawdzić jej stan, zaloguj się do swojego [panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager) i przejdź do sekcji „Dedykowane”. Kliknij opcję `Private Cloud`{.action}, a następnie wybierz odpowiednią usługę. 

W oknie, które się pojawi, kliknij kartę`Informacje ogólne`{.action}. Następnie sprawdź stan aktywacji opcji bezpieczeństwa w sekcji „Opcje bezpieczeństwa”. **Należy pamiętać, że na chwilę obecną nie można włączyć więcej niż jednej opcji bezpieczeństwa dla tej samej chmury prywatnej.**

![hdspcidsscompliance](images/HomeSDDCManager.PNG){.thumbnail}

Jeśli pożądana opcja nie jest aktywna, włącz ją, klikając przycisk `...`{.action} i wybierając opcję `Aktywuj`{.action}. Wymaga to spełnienia wielu wymagań wstępnych.

- **Opcje[NSX](https://www.ovh.pl/private-cloud/opcje//nsx.xml){.external} i [vROps](https://www.ovh.pl/private-cloud/opcje//vrops.xml){.external} muszą być zainstalowane**\: z poziomu karty `Informacje ogólne`{.action} w sekcji „Opcje chmury prywatnej” możesz sprawdzić stan aktywacji tych opcji. Jeśli nie są aktywne, naciśnij przycisk `...`{.action}, a następnie `Aktywuj`{.action}, aby je włączyć.

- **Dostęp do vCenter musi być ograniczony**\: w karcie „Bezpieczeństwo”  możesz sprawdzić politykę dostępu. Jeśli nie wyświetla się ona jako ograniczona („Restricted”), włącz ograniczenia dostępu, klikając przycisk `Polityka dostępu do vCenter`{.action}, a następnie przechodząc przez kolejne etapy procedury. Więcej informacji na jej temat znajdziesz w dokumentacji „[Prezentacja Panelu klienta Private Cloud](https://docs.ovh.com/pl/private-cloud/manager-ovh-private-cloud/)”.

- **Musisz dysponować co najmniej jednym adresem IP uprawnionym do dostępu do vCenter**\: przejdź do karty „Bezpieczeństwo” i upewnij się, że masz co najmniej jeden uprawniony adres IP. W razie konieczności użyj przycisku `Dodaj adresy IP`{.action}. Więcej informacji na jej temat znajdziesz w dokumentacji „[Prezentacja Panelu klienta Private Cloud](https://docs.ovh.com/pl/private-cloud/manager-ovh-private-cloud/)”.

Zalecamy posiadanie co najmniej dwóch uprawnionych adresów IP, aby zawsze móc się połączyć. Z oczywistych względów związanych z dostępnością, muszą one być stałe, a nie dynamiczne.

- **Dane użytkownika „admin” są kompletne, a on sam ma dysponuje niezbędnym uprawnieniem**\: w karcie „Użytkownicy”  upewnij się, że w przypadku użytkownika „admin” podano numer telefonu i adres e-mail, a dodatkowo posiada on uprawnienie „**token validator**”. W razie potrzeby można dostosować właściwości użytkownika – wystarczy kliknąć przycisk `...`{.action}, a następnie `Edytuj`{.action}. Nasza dokumentacja „[Prezentacja panelu klienta Private Cloud OVH](https://docs.ovh.com/pl/private-cloud/manager-ovh-private-cloud/#uzytkownicy)” zawiera więcej informacji na ten temat.

Zalecamy posiadanie co najmniej dwóch kont użytkownika z wymaganymi danymi i uprawnieniami (z różnymi adresami e-mail i numerami telefonu), aby zawsze móc połączyć się z vCenter.

Po ukończeniu etapów aktywacji należy:

- zatwierdzić token przesłany SMS-em do użytkowników z uprawnieniem „**token validator**”. Dzięki temu możesz potwierdzić, że jesteś w stanie otrzymywać te tokeny, które będą niezbędne do zatwierdzania czynności i
- uzupełniania dokumentów otrzymywanych e-mailem w celu finalizacji części umownej. 

Zalecamy, by w międzyczasie przeprowadzić pierwsze kroki w bezpiecznym interfejsie z pomocą niniejszej dokumentacji. 

> [!primary]
>
> Należy pamiętać, że interfejs vSphere nie będzie dostępny podczas aktywacji opcji bezpieczeństwa.
>

### Pierwsze kroki w bezpiecznym interfejsie

Po aktywacji opcji bezpieczeństwa otrzymasz e-mail z procedurą zatwierdzania tokenów. Zawiera on m.in. opis ich działania i spis czynności umożliwiających korzystanie z nich. 

Jak wspomniano powyżej, jako zabezpieczenie po aktywacji opcji bezpieczeństwa:

- wszyscy użytkownicy chmury prywatnej są dezaktywowani;
- należy zmienić hasła użytkowników, aby ich reaktywować;
- hasła użytkowników można odtąd zmieniać wyłącznie z poziomu bezpiecznego interfejsu. Nie będzie już można tego robić w panelu klienta OVH. 

Przypominamy, że dostęp do interfejsu będzie możliwy dopiero po aktywacji opcji bezpieczeństwa.

Należy kliknąć link zawarty w przesłanym e-mailu i zalogować się do bezpiecznego interfejsu. Link ten powinien wyglądać mniej więcej tak: „https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/password-lost” Po zalogowaniu się możesz zmienić hasło użytkownika „admin”, a następnie dodatkowych użytkowników. Zapoznaj się z dokumentacją „[Korzystanie z bezpiecznego interfejsu](../interface-secure/)”, aby uzyskać szczegółowe instrukcje.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com>.