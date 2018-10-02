---
title: 'Exchange: Pierwsze kroki z serwerem Private Exchange'
excerpt: 'Pierwsza konfiguracja serwera Private Exchange'
slug: exchange_pierwsze_kroki_na_serwerze_private
section: 'Konfiguracja usługi Exchange'
legacy_guide_number: g2074
---

## Etap 1: e-mail konfiguracyjny
Po opłaceniu zamówienia otrzymasz e-mail dotyczący zainstalowania serwera "Private".
E-mail jest wysyłany na adres e-mail do kontaktu wskazany w panelu klienta.
E-mail ten jest również dostępny w panelu klienta:


- Kliknij na identyfikator klienta (w górnym prawym rogu) i wybierz "Moje konto".



![](images/img_4047.jpg){.thumbnail}

- Otrzymane e-maile



![](images/img_4050.jpg){.thumbnail}
W tej sekcji odnajdziesz e-mail wysłany, w celu wykonania konfiguracji serwera Private Exchange:


- Tytuł e-maila to:

"Trwa instalowanie usługi Exchange 2016v1."


![](images/img_4051.jpg){.thumbnail}
Otrzymany e-mail wygląda mniej więcej tak:


```
Szanowni Państwo,

Nie dokończyli Państwo konfiguracji prywatnego serwera, przypisanego
do usługi Private Exchange 2016v1.

Aby mogli Państwo korzystać z serwera Exchange Private #VERSION#, należy uzupełnić kilka etapów. Są to:
- Personalizacja adresu dostępowego do webmaila (dedykowany certyfikat SSL)
- Podanie adresu e-mail do kontaktu, w celu zatwierdzenia certyfikatu (uwaga: musi to być aktywny istniejący adres e-mail)

Aby dokończyć ten proces, wystarczy wypełnić formularz dostępny 
na stronie:
https://www.ovh.com/fr/emails/commande/?orderId=5035xxxx&orderPassword=nqiJ#/serverConfig

Aby zalogować się do tej strony, prosimy o wpisanie identyfikatora
ab12345-ovh oraz przypisanego do niego hasła.

WAŻNE: Po wykonaniu tych czynności pozostanie do wykonania ostatni etap: wskazanie wybranej subdomeny na adres IP serwera (adres IP zostanie przesłany w kolejnym e-mailu). 

Potrzebują Państwo pomocy?
Prosimy o zapoznanie się z naszymi przewodnikami:
https://www.ovh.pl/emaile/hosted-exchange/przewodniki/
```




## Etap 2: Automatyczna konfiguracja strefy dns
Kliknij na link zawarty w otrzymanym e-mailu. Zostaniesz przekierowany na stronę konfiguracyjną serwera.

![](images/img_4052.jpg){.thumbnail}

- "Nazwa serwera": Zdefiniuj nazwę dla swojego serwera oraz link dostępowy do webmaila. Będziesz miał do wyboru kilka opcji. 


Przykład:


- mail
- exchange
- exchange2016


Po wybraniu subdomeny należy wskazać prawidłową domenę. Link dostępowy do webmaila (owa) to na przykład:
exchange2016.twoja_domena.pl
Kolejny etap polega na wybraniu adresu e-mail, na który zostanie wysłana wiadomość dotycząca zatwierdzenia certyfikatu SSL. Adres ten musi być prawidłowy i działać. W przeciwnym przypadku nie będziesz mógł zatwierdzić certyfikatu SSL. 

Zaproponowana lista zawiera podstawowe adresy e-mail takie jak:


- postmaster@twoja_domena.pl
- admin@twoja_domena.pl


Jeśli domena jest zainstalowana w OVH i nie ma do niej przypisanej usługi poczty elektronicznej, możesz w panelu klienta utworzyć przekierowanie (alias) z adresu adres@twoja_domena.pl na istniejący adres.

Można również utworzyć przekierowanie e-mail na istniejący adres.
Opcja DNS Assist: Ta opcja pozwala na automatyczne skonfigurowanie Twojej strefy DNS (utworzenie pola typu ipv4 (A) w zależności od wybranej subdomeny).
Domena musi być zarządzana na tym samym koncie klienta, dla którego został zamówiony serwer. W innej sytuacji należy ręcznie skonfigurować strefę dns.
W naszym przykładzie opcja DNS Assist została zaznaczona. Następnie możesz zatwierdzić konfigurację. Jeśli korzystasz z opcji DNS Assist, nie musisz wykonywać etapu 3.


## Etap 3: Ręczna konfiguracja strefy dns
Jeśli Twoja domena nie jest zarządzana na tym samym koncie klienta lub nie jest zainstalowana w OVH, otrzymasz drugi e-mail z informacjami niezbędnymi do zmodyfikowania strefy dns. 

Treść e-maila:


```
Subject: [OVH-EXCHANGE] Instalacja serwera exchange

Szanowni Państwo, 

Aby mogli Państwo zamówić certyfikat SSL dla swojego serwera, konieczne jest 
utworzenie adresu w strefie DNS. 

Wybrany adres to: exchange2016.testinterne.ovh
IP serwera to: 149.202.xxx.103
   
Prosimy o utworzenie wpisu A dla tego adresu.
```


W tym przypadku należy utworzyć wpis A:


- exchange2016.testinterne.ovh A 149.202.xxx.103




## Etap 4: Zaakceptowanie certyfikatu SSL
Po ręcznym lub automatycznym skonfigurowaniu strefy dns otrzymasz e-mail dotyczący zatwierdzenia certyfikatu SSL. E-mail zostanie wysłany na adres wybrany podczas personalizowania linku dostępowego do webmaila.
E-mail powinien zostać wysłany w ciągu 4 godzin.
Oto zawartość tej wiadomości:

![](images/img_4059.jpg){.thumbnail}
Kliknij na  link , aby zatwierdzić certyfikat SSL.
Zostaniesz przekierowany do interfejsu Global Sign. Należy kliknąć na "I APPROVE", aby zatwierdzić certyfikat.

![](images/img_4054.jpg){.thumbnail}


## Zakończenie
Usługa powinna zostać dostarczona w ciągu 4 godzin od zatwierdzenia certyfikatu. W trakcie wykonywania powyższych czynności serwer Private Exchange nie jest widoczny w panelu klienta. 

Po dostarczeniu serwera otrzymasz e-mail z tą informacją. 

Zapoznaj się z przewodnikiem [na temat pierwszej konfiguracji](https://www.ovh.pl/g1311.konfiguracja-uslugi).

