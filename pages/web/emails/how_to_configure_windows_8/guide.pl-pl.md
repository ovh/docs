---
title: Konfiguracja adresu e-mail w Windows 8
excerpt: ''
slug: konfiguracja_adresu_e-mail_w_windows_8
legacy_guide_number: g1281
hidden: true
---


## Część 1: Uruchomienie aplikacji
Najpierw należy przejść do aplikacji poczty elektronicznej w Windows 8 na pulpicie komputera.

Przy pierwszym uruchamianiu należy wskazać adres e-mail oraz hasło, w innym interfejsie niż ten prezentowany tutaj. 

Jeśli masz już konto, pojawi się taki interfejs.

Ustaw kursor na części z prawej strony i wybierz "Ustawienia".

![](images/img_1142.jpg){.thumbnail}


## Część 2: Konta
Następnie kliknij na ikonkę "Konta", aby dodać nowe konto e-mail OVH.

![](images/img_1143.jpg){.thumbnail}


## Część 3: Dodanie konta
Widzimy, że adresy e-mail są już widoczne. 

Po dodaniu konta będziesz mógł uzyskać dostęp do ustawień konta (poprzez kliknięcie na konto e-mail). 

Kliknij na ikonkę "Dodaj konto", aby kontynuować.

![](images/img_1144.jpg){.thumbnail}


## Część 4: Rodzaj konta
Wybierz rodzaj konta e-mail, które chcesz dodać.
Kliknij na ikonkę "Inne konto", aby kontynuować.

![](images/img_1145.jpg){.thumbnail}


## Część 5: Parametry
W nowym interfejsie wypełnij pola:

"Adres poczty elektronicznej": Cały adres e-mail

"Hasło": Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) dla tego konta e-mail.

Kliknij na ikonkę "Połącz", aby kontynuować.

![](images/img_1146.jpg){.thumbnail}


## Część 6: Zaawansowane ustawienia
W tym interfejsie wypełnij pola:

"Adres poczty elektronicznej": Cały adres e-mail

"Nazwa użytkownika": Cały adres e-mail

"Hasło": Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) dla tego konta e-mail.

"Serwer poczty przychodzącej (IMAP)":
Adres serwera to SSL0.OVH.NET
"Port" to 993

"Serwer poczty przychodzącej wymaga SSL": musi być zaznaczone.

"Serwer poczty wychodzącej (SMTP)" :
Adres serwera to SSL0.OVH.NET
"Port" to 465

"Serwer poczty wychodzącej wymaga SSL": musi być zaznaczone.

"Serwer poczty wychodzącej wymaga uwierzytelniania": musi być zaznaczone.

"Używaj tej samej nazwy użytkownika i hasła do wysyłania i otrzymywania wiadomości": musi być zaznaczone.

Kliknij na ikonkę "Połącz", aby kontynuować.

![](images/img_1147.jpg){.thumbnail}

- Uwierzytelnianie dla serwera poczty wychodzącej jest parametrem niezbędnym, aby wysyłka e-maili mogła działać na naszych serwerach SMTP. 

- Jeśli uwierzytelnianie nie jest włączone, może zostać otwarte zgłoszenie Open SMTP informujące, że uwierzytelnianie "POP before SMTP" nie jest obsługiwane. Należy obowiązkowo włączyć uwierzytelnienie serwera poczty wychodzącej, aby móc wysyłać e-maile.




## Część 7: Zakończenie
Twoje konto e-mail zostało prawidłowo skonfigurowane w IMAP.

Oto interfejs zarządzania e-mailami.

Z prawej strony widać ustawienia konta.
([Część 3 tego przewodnika](#configuration_protocole_imap_partie_3_ajouter_un_compte)).

![](images/img_1148.jpg){.thumbnail}


## Konfiguracja POP
Oto informacje do konfiguracji konta e-mail POP.

Konfiguracja POP z zabezpieczeniem SSL włączonym/green] lub wyłączonym:

Adres Email : Cały adres e-mail
Hasło: Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Cały adres e-mail
Serwer poczty przychodzącej:ssl0.ovh.net
Port serwera poczty przychodzącej:995 lub 110
Serwer poczty wychodzącej:ssl0.ovh.net
Port serwera poczty wychodzącej:465 lub 587

Porty 110 i 587 są podawane, gdy zabezpieczenie SSL jest wyłączone.

Porty 995 i 465 są podawane, gdy zabezpieczenie SSL jest włączone.



- Należy obowiązkowo włączyć [uwierzytelnianie](#configuration_protocole_imap_partie_6_parametres_avances) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|995|110|
|Wychodzący|465|587|




## Konfiguracja IMAP
Oto informacje do konfiguracji konta e-mail IMAP.

Konfiguracja IMAP z zabezpieczeniem SSL włączonym/green] lub wyłączonym:

Adres Email : Cały adres e-mail
Hasło: Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Cały adres e-mail
Serwer poczty przychodzącej:ssl0.ovh.net
Port serwera poczty przychodzącej:993 lub 143
Serwer poczty wychodzącej:ssl0.ovh.net
Port serwera poczty wychodzącej:465 lub 587

Porty 143 i 587 są podawane, gdy zabezpieczenie SSL jest wyłączone.

Porty 993 i 465 są podawane, gdy zabezpieczenie SSL jest włączone.


- Należy obowiązkowo włączyć [uwierzytelnianie](#configuration_protocole_imap_partie_6_parametres_avances) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|993|143|
|Wychodzący|465|587|




## Informacje ogólne
Możemy wykonać niektóre operacje w ramach interwencji płatnej. 

Informacje na temat interwencji płatnych wykonywanych przez OVH oraz na temat procedury znajdują się w tym przewodniku:


- []({legacy}1683)



![](images/img_2500.jpg){.thumbnail}

