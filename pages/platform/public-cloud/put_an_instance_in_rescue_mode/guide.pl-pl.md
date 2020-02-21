---
title: 'Przełączenie instancji w tryb rescue'
excerpt: 'Ten przewodnik zawiera informacje o przełączaniu instancji w tryb ratunkowy (rescue)'
slug: przelaczenie_instancji_w_tryb_rescue
legacy_guide_number: g2029
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 04-12-2019**

## Wprowadzenie

Jeśli instancja została niewłaściwie skonfigurowana lub utracono klucz SSH, instancja może być niedostępna.

W takiej sytuacji można ponownie skonfigurować instancję lub odzyskać dane przy użyciu trybu ratunkowego (rescue). 

**Ten przewodnik zawiera informacje o przełączaniu instancji w tryb ratunkowy (rescue)**

## Wymagania początkowe

* [instancja Public Cloud](https://www.ovhcloud.com/pl/public-cloud/){.external} utworzona na koncie OVHcloud
* dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* dostęp administracyjny (uprawnienia użytkownika root) do instancji za pośrednictwem protokołu SSH

## W praktyce

### Aktywacja trybu ratunkowego

Najpierw zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} i kliknij menu `Public Cloud`{.action}.

Następnie wybierz projekt Public Cloud z menu bocznego po lewej stronie ekranu i przejdź do pozycji Instancje.

![control panel](images/compute.png){.thumbnail}

Kliknij ikonę z trzema kropkami (po prawej stronie instancji) i wybierz `Restartuj w trybie ratunkowym`{.action}.

![control panel](images/rescue1.png){.thumbnail}

Zostanie wyświetlone okno dialogowe „Restart w trybie ratunkowym”. Kliknij listę rozwijaną, aby wybrać dystrybucję systemu Linux do użycia w trybie ratunkowym, a następnie kliknij przycisk `Uruchom ponownie`{.action}.

![control panel](images/rescue2.png){.thumbnail}

Po restarcie instancji w trybie ratunkowym u góry ekranu zostanie wyświetlony komunikat z hasłem tymczasowym.

![control panel](images/rescuedata.png){.thumbnail}


### Dostęp do danych

Po aktywacji trybu ratunkowego dane instancji będą widoczne jako dodatkowy dysk. Aby go zamontować, wykonaj następujące kroki.

Po pierwsze nawiąż połączenie SSH z instancją. Po nawiązaniu połączenia sprawdź dostępne dyski przy użyciu tego polecenia:

```
root@instance:/home/admin# lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```

Następnie zamontuj partycję:

```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```

Dane będą dostępne w folderze /mnt.

### Dezaktywacja trybu ratunkowego

Po wykonaniu wszystkich zadań można zdezaktywować tryb ratunkowy przez zrestartowanie instancji w trybie normalnym. Aby to zrobić, kliknij strzałkę menu rozwijanego instancji i wybierz pozycję `Wyjdź z trybu ratunkowego`{.action}.

![control panel](images/rescueexit.png){.thumbnail}

### Aktywacja trybu ratunkowego przy użyciu interfejsu API OpenStack

Tryb ratunkowy można aktywować także za pośrednictwem interfejsu API OpenStack przy użyciu następującego polecenia:

```
# root@server:~# nova rescue INSTANCE_ID
```

Aby wyjść z trybu ratunkowego, użyj następującego polecenia:

```
# root@server:~# nova unrescue INSTANCE_ID
```

## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.