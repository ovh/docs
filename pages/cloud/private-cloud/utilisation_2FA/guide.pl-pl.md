---
title: Używanie weryfikacji dwuetapowej (2FA) w infrastrukturze Private Cloud
slug: uzywanie-2FA
excerpt: Dowiedz się, jak wdrożyć weryfikację dwuetapową, aby chronić Twoją infrastrukturę
section: Funkcjonalności OVHcloud
order: 05
---

**Ostatnia aktualizacja z dnia 10-06-2022**

## Wprowadzenie

Wdrożenie weryfikacji dwuetapowej zapewnia ochronę dostępu do Twojej usługi Private Cloud, ograniczając ryzyko dotyczące na przykład kradzieży hasła.

**Dowiedz się, jak wdrożyć weryfikację dwuetapową, aby chronić Twoją infrastrukturę Private Cloud.**
 
## Wymagania początkowe

- Posiadanie infrastruktury [Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/) z opcją [zaawansowanego bezpieczeństwa](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/safety-compliance/sddc/) (dostępną w ofertach PCI-DSS i HDS).
- Posiadanie smartfona i aplikacji weryfikacji dwuetapowej (np.: Google Authenticator, Authy, OTP Auth).

## W praktyce

### Aktywacja weryfikacji dwuetapowej

Aby wdrożyć weryfikację dwuetapową w infrastrukturze, zaloguj się do certyfikowanego interfejsu Twojej usługi Private Cloud.

Możesz to zrobić na dwa sposoby:
	
- Przez bramę usługi Private Cloud (https://pcc-xxx-xxx-xxx-xxx.ovh.com): 

![Gateway Private Cloud](images/gatewayPCC.jpg){.thumbnail}

- Bezpośrednio przez adres https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ (uwaga: pamiętaj o umieszczeniu ukośnika „/” na końcu adresu).

Po zalogowaniu do interfejsu zarządzania kliknij `Change Password`{.action}

![Change Password](images/selectChangePassword.png){.thumbnail}

W interfejsie wykonaj następujące czynności:
	
* Wybierz `Password and 2FA Shared Secret`{.action};
* Podaj nowe hasło; 
* Zeskanuj kod QR przy użyciu dowolnej aplikacji na smartfona służącej do weryfikacji dwuetapowej;
* Potwierdź otrzymany kod.

![Scan QRcode](images/scanQRcode.png){.thumbnail}

Po utworzeniu zadania zostanie wysłany do Ciebie token.

Przejdź do sekcji `Operation validation`{.action}, załaduj operację otrzymaną w wiadomości SMS i potwierdź tokenem otrzymanym w tej samej wiadomości.

> [!primary]
>
> Jeśli zapomnisz hasła, najpierw uruchom procedurę „Password lost”, w której zostanie zaproponowane wdrożenie weryfikacji dwuetapowej.
>

### Logowanie

Korzystając z tego samego linku co zwykle, zaloguj się do klienta *Web*. Przejdziesz na następującą stronę:

![Connexion 2FA](images/2FAtoken.png){.thumbnail}

Zanim podasz hasło, wprowadź token wygenerowany przez zainstalowaną na Twoim smartfonie aplikację do weryfikacji dwuetapowej.


> [!warning]
>
> Weryfikacja dwuetapowa zostanie aktywowana, gdy któryś z użytkowników zmieni hasło. Oznacza to, że kiedy jeden użytkownik zmieni hasło, wszyscy zaczną korzystać z aktywnej weryfikacji dwuetapowej. 
>
> Użytkownicy musieli odnowić swoje hasła, a następnie ustawić weryfikację dwuetapową dla swoich kont. W przeciwnym razie stracą możliwość zalogowania się.
>
> W przypadku klientów posiadających infrastrukturę w wersji 6.0 dostęp do klienta vSphere (dostępnego wyłącznie w systemie Windows) nie będzie już możliwy. Dostęp będzie można uzyskać wyłącznie przez klienta przeglądarkowego vSphere.
>

### Tworzenie nowego użytkownika

Podczas tworzenia nowego użytkownika podejmujesz decyzję o przyznaniu (lub nieprzyznawaniu) mu uprawnienia *token validator*.

W obu przypadkach konieczna jest zmiana hasła przez certyfikowany interfejs, zgodnie z powyższą procedurą wdrażania weryfikacji dwuetapowej.

Jedyna różnica będzie polegała na tym, czy użytkownik będzie mógł samodzielnie zatwierdzić token.

### Autoryzacja aplikacji

Możliwe jest korzystanie z kilku aplikacji innych firm, które wymagają zalogowania do vCenter.

Aplikacje te muszą wcześniej uzyskać autoryzację poprzez politykę dostępu do vCenter, którą możesz skonfigurować w [Panelu klienta](https://docs.ovh.com/pl/private-cloud/manager-ovh-private-cloud/#bezpieczenstwo).

Aplikacje te będą mogły uzyskać dostęp do infrastruktur OVH, ale nie będą zarządzać bezpośrednio weryfikacją dwuetapową.

W tym przypadku konieczne jest utworzenie *białej listy* umożliwiającej *obejście* weryfikacji dwuetapowej.

Ta *biała lista* będzie uzupełnieniem listy głównej zarządzającej dostępem do vCenter.

Aby dodać publiczne adresy IP aplikacji do tej drugiej *białej listy*, musisz użyć następujących wywołań API: 

- Sprawdzenie adresów IP upoważnionych do niestosowania weryfikacji dwuetapowej.

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/twoFAWhitelist
>

- Dodanie adresu IP do *listy z obejściem* weryfikacji dwuetapowej.

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/twoFAWhitelist
>

- Wyświetlenie informacji o upoważnionym adresie IP (wymagany identyfikator pobrany przy pierwszym wywołaniu).

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
>

- Usunięcie adresu IP z listy adresów upoważnionych.

> [!api]
>
> @api {DELETE} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
>

- Zmiana informacji o upoważnionym adresie IP.

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties
>

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
