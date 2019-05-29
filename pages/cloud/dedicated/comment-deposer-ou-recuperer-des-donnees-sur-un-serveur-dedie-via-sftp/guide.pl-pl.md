---
title: 'Przesyłanie i pobieranie danych z serwera dedykowanego za pośrednictwem SFTP'
slug: przesylanie-i-pobieranie-danych-sftp
excerpt: 'Dowiedz się, jak przesłać dane z serwera dedykowanego na komputer lokalny i na odwrót'
section: Tutoriale
---

**Ostatnia aktualizacja z dnia 03-04-2019**

## Wprowadzenie

W procesie migracji może być konieczne pobranie danych z serwera dedykowanego, a następnie przesłanie ich na inną maszynę. Protokół Secure File Transfer Protocol (SFTP) umożliwia szybki i łatwy transfer plików przez bezpieczne połączenie SSH.

**Tutorial ten wyjaśnia, jak przesyłać lub pobierać dane z serwera dedykowanego za pomocą SFTP.**

> [!warning]
>Tutorial przedstawia zastosowanie jednego lub kilku rozwiązań OVH w powiązaniu z zewnętrznymi narzędziami i opisuje operacje, jakie należy wykonać w konkretnym przypadku. Wybierz odpowiednie dla Ciebie rozwiązanie. Jeśli napotkasz trudności podczas przeprowadzania tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług administracyjnych i/lub zadaj pytanie na forum społeczności OVH <https://community.ovh.com/en/>. Niestety OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie.
>


## Wymagania początkowe

### Co powinieneś umieć:

*     Podstawy administrowania systemem Linux;
*     Łączyć się z serwerem za pomocą SSH;
*     Zainstalować dystrybucję (w niniejszym tutorialu mowa o dystrybucji Debian 9.4).


### Co powinieneś mieć:

*     Co najmniej jeden serwer dedykowany OVH;
*     Program obsługujący SFTP (w niniejszym tutorialu mowa o programie [FileZilla](https://filezilla-project.org/)).


## W praktyce

### Etap 1: pobieranie danych

Domyślnie serwer zainstalowany z systemem Linux będzie dostępny przez SSH na porcie 22.

Protokół SFTP (Secure File Transfert Protocol) umożliwia transfer plików za pomocą bezpiecznego połączenia SSH. Poniżej przedstawiamy, jak używać tego protokołu w dwóch sytuacjach: kiedy masz dostęp do Twojego serwera i kiedy Twój serwer znajduje się w trybie Rescue.


#### Kiedy masz dostęp do serwera

W programie FileZilla wprowadź IP w polu „Host”. Następnie wpisz nazwę użytkownika „root” oraz hasło. W polu „Port” wpisz numer „22” lub, jeśli go zmodyfikowałeś, wpisz numer Twojej usługi SSH.

Połączenie zostało teraz ustanowione, a w sekcji „Serwer” wyświetla się drzewo katalogów.

 
![site distant sftp](images/sftp_ds_01.png)
 

Możesz przeciągać i upuszczać dane z prawego okna (`zdalny serwer`) do lewego okna (`adres lokalny`), aby zapisać je na komputerze osobistym. W przedstawionym przez nas przypadku informacje zawarte są w katalogu „/home/data” widocznym w prawym oknie (`zdalny serwer`).

Postęp transferu jest widoczny w oknie FileZilla na dole:

 
![progression transfert sftp](images/sftp_ds_02.png)


#### Kiedy serwer znajduje się w trybie Rescue

W przypadku trybu Rescue przede wszystkim konieczne jest zamontowanie partycji.  W tym celu wykonaj czynności opisane w [tym przewodniku](https://docs.ovh.com/pl/dedicated/ovh-rescue/). 

Po zamontowaniu partycji połącz się ponownie za pomocą portu 22 przy użyciu odpowiedniego programu (w tym przypadku FileZilla).


> [!primary]
>
> Użyj loginu i hasła wysłanych do Ciebie e-mailem po przełączeniu serwera w tryb Rescue.
>


Jeśli prawidłowo ustawiłeś punkt montowania, dane będą się znajdowały w katalogu „/mnt” (czyli „/mnt/data/” w naszym przykładzie).

![site distant sftp mode rescue](images/sftp_ds_03.png)

 
### Etap 2: przesyłanie danych na serwer

Zasada logowania jest w tym przypadku identyczna: uzyskaj dostęp SSH przez port 22, korzystając z loginu root i postępując zgodnie z instrukcjami podanymi powyżej.

Po połączeniu z serwerem, na który chcesz przesłać dane, możesz ponownie użyć funkcji „przeciągnij i upuść”. Tym razem jednak przeciągnij dane z lewego okna (`adres lokalny`) do okna prawego (`serwer zdalny`), co zaskutkuje transferem danych z Twojego komputera osobistego na serwer. 

## Podsumowanie

Dzięki tutorialowi dowiedziałeś się, jak przesyłać lub pobierać dane z serwera dedykowanego za pośrednictwem SFTP.
Aby dowiedzieć się więcej, przyłącz się do społeczności naszych użytkowników <https://community.ovh.com/en/>.