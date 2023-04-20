---
title: 'Połączenie za pomocą protokołu STFP'
routes:
    canonical: '/pages/cloud/private-cloud/sftp_connexion'
excerpt: Dowiedz się, jak się połączyć z Managed Bare Metal za pomocą SFTP
updated: 2020-11-18
---

**Ostatnia aktualizacja z dnia 18-11-2020**

## Wprowadzenie

Połączenie z datastores za pomocą protokołu SFTP (Secure File Transfer Protocol) pozwala na dodawanie lokalnych kopii zapasowych plików do infrastruktury. Możesz zalogować się za pośrednictwem graficznego interfejsu użytkownika przy użyciu oprogramowania takiego jak FileZilla, dostępnego dla systemów Windows i Mac. Możesz również zalogować się za pomocą wiersza poleceń w systemie operacyjnym Linux.

Ten system pozwoli Ci na dostęp tylko do folderu "upload-vpn" w Twoich datastores. Pliki spoza tego folderu nie będą dostępne przy wykorzystaniu tej metody.

**W przewodniku tym wyjaśniamy, jak łączyć się za pomocą SFTP przy użyciu graficznego interfejsu użytkownika lub wiersza poleceń.**

## Wymagania początkowe

- Posiadanie aktywnego użytkownika utworzonego w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

### Logowanie z poziomu interfejsu graficznego

W Twoim FTP (w tym przykładzie FileZilla) wprowadź następujące wartości:

```
Host: [sftp://pcc-xxx-xxx-xxx-xxx.ovh.com] / Username: user / Password: password
```

![Połączenie SFTP](images/connection_sftp_filezilla_log.png){.thumbnail}

Po zalogowaniu się, po lewej stronie znajdziesz Twoją lokalną stację roboczą, a po prawej - Twoje datastores:

![Połączenie przez SFTP przy użyciu FileZilla](images/connection_sftp_filezilla.png){.thumbnail}

### Połączenie za pośrednictwem terminala

W terminalu sprawdź, czy komenda `sftp` jest zainstalowana. W tym celu wpisz:

```sh
sftp
```

Do zalogowania użyj następującej komendy:

```sh
sftp user@pcc-xxx-xxx-xxx-xxx.ovh.com
```

Następnie wpisz hasło użytkownika. Po zalogowaniu, będziesz mógł utworzyć listę Twoich datastores za pomocą polecenia `ls`:

```sh
sftp> ls pcc-000714
```

Przeglądaj listę znalezionych datastores przy użyciu wskazanego wcześniej polecenia:

```sh
sftp> pcc-000714
```

Użyj polecenia `put`, aby wyeksportować pliki z datastore do lokalnego komputera.

```sh
sftp> put /home/ubuntu-18.04-server-amd64.iso
/datastore/pcc-000714/ubuntu-18.04-server-amd64.iso  
```

Użyj polecenia `put`, aby zaimportować pliki z lokalnego komputera do datastore.

```sh
sftp> get /datastore/pcc-00714/ubuntu-18.04-server-amd64.iso /home/
```

Użyj polecenia `exit`, aby zamknąć połączenie.

### Podgląd przy użyciu vSphere

W interfejsie vSphere będziesz mógł zobaczyć zawartość tego, co właśnie wysłałeś, przeglądając Twój datastore. W tym celu kliknij na wybrany datastore w folderze "upload-vpn":

![Połączenie SFTP za pomocą vSphere](images/sftpconnection.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
