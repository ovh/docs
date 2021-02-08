---
title: 'Diagnostyka Exchange: Co zrobić w przypadku błędu?'
excerpt: 'Diagnostyka Exchange: Co zrobić w przypadku błędu?'
slug: diagnostyka_exchange_co_zrobic_w_przypadku_bledu
section: Inne
legacy_guide_number: g2277
---

## Wykonanie diagnostyki
Zaloguj się do [panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

Po zalogowaniu wybierz w menu z lewej strony sekcję Microsoft i usługę Exchange.

![](images/img_4450.jpg){.thumbnail}
Kliknij na zakładkę "Diagnostyka", wpisz konto e-mail Exchange i hasło, aby rozpocząć diagnostykę. 

Diagnostyka Exchange może zająć od 3 do 10 minut.

![](images/img_4451.jpg){.thumbnail}
Przedstawiamy przykład wyniku diagnostyki konta e-mail Exchange:

Możliwe operacje:


- Nowa diagnostyka: Wykonaj nową diagnostykę.

- Otwórz zgłoszenie: Pozwala na otworzenie zgłoszenia do naszego zespołu pomocy z wynikiem diagnostyki.



![](images/img_4471.jpg){.thumbnail}


## Błędy w wynikach diagnostyki
Poniżej opisujemy każdy z możliwych błędów:


- UWAGA: Konto zostało zablokowane z powodu wysyłania spamu:


Oznacza to, że wysyłka z Twojego konta została tymczasowo wyłączona. Nie dotyczy to odbierania e-maili. 

Gdy Twoje konto jest zablokowane z powodu spamu, jest ono widoczne z poziomu usługi Exchange w sekcji Konto e-mail. Widoczny jest tag SPAM. Możesz kliknąć, aby sprawdzić e-mail wysłany po wprowadzeniu blokady. 

Należy odpowiedzieć na ten e-mail, aby możliwe było odblokowanie konta.

![](images/img_4453.jpg){.thumbnail}

- UWAGA: Abonament konta wygasł:


W tym przypadku abonament nie jest aktywny. Odbieranie i wysyłanie e-maili jest wyłączone. Należy skontaktować się z zespołem pomocy, aby dowiedzieć się, jak ponownie włączyć usługę.

- UWAGA: Konto zostało zablokowane ze względu na politykę bezpieczeństwa:


W przypadku usługi Exchange można zdefiniować politykę bezpieczeństwa. Może to spowodować blokadę konta na określony czas. 

Możesz zdefiniować, że konto jest blokowane na określony czas po określonej liczbie nieudanych prób logowania.

Jeśli konto zostanie zablokowane na tym poziomie, możesz poczekać, aż minie zdefiniowany wcześniej czas albo możesz skontaktować się z pomocą Exchange otwierając zgłoszenie w panelu klienta.

- UWAGA: Logowanie do webmaila nie powiodło się:


Błąd ten może być związany z podaniem nieprawidłowego hasła podczas zlecania diagnostyki. W takim przypadku możesz wznowić diagnostykę. 

Możesz również zmienić hasło w zakładce Konto e-mail i wznowić diagnostykę. Jeśli pomimo tego problem się powtórzy, możesz otworzyć zgłoszenie.

- UWAGA: Wpis MX domeny jest nieprawidłowy:


Błąd ten wskazuje na brak możliwości odbierania e-maili i jest również związany z tym błędem: UWAGA: E-mail testowy nie dostał odebrany.

Oto prawidłowe serwery MX dla oferty Exchange:


- Tylko Exchange: mx1.mail.ovh.net
- Exchange + E-mail pop/imap zainstalowany w OVH: mx1.mail.ovh.net
- Exchange + E-mail pop/imap nie zainstalowany w OVH: ex.mail.ovh.net lub ex2.mail.ovh.net



- UWAGA: Wpis SRV domeny jest nieprawidłowy:


Wpis SRV jest niezbędny do automatycznej konfiguracji konta Exchange w kompatybilnym programie pocztowym, takim jak na przykład Outlook 2010, 2013 i 2016.

Pole SRV możesz sprawdzić w strefie DNS Twojej domeny. 

Oto pole SRV wymagane dla oferty Exchange:

|Priorytet|0|
|Ciężar|0|
|Port|443|
|Adres docelowy oferta Hosted| ex.mail.ovh.net lub ex2.mail.ovh.net |
|Adres docelowy oferta Private| Nazwa hosta|



- UWAGA: E-mail testowy nie mógł zostać wysłany z konta:


Ten błąd wskazuje na brak możliwości wysłania wiadomości e-mail z Twojego konta. 

Przyczyny mogą być różne:


- Konto jest zawieszone. 
- Wskazane hasło jest nieprawidłowe. 
- Konto jest zablokowane z powodu spamu.
- Problem w infrastrukturze Exchange


W tym przypadku sprawdź wskazówki opisane powyżej, aby poprawić błąd lub otworzyć zgłoszenie.

