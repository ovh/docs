---
title: 'Konfiguracja DNS secondary'
excerpt: 'Jak skonfigurować domenę na serwerze DNS secondary?'
slug: konfiguracja_dns_secondary
legacy_guide_number: g1477
section: Bezpieczeństwo
hidden: true
---

## Wprowadzenie
OVH dostarcza usługę serwera DNS secondary w sytuacji, gdy chcesz używać swojego serwera jako głównego serwera DNS dla swojej domeny.

Opcja DNS Secondary znajduje się w panelu klienta. 

Strona w panelu klienta wygląda następująco:

![](images/img_2008.jpg){.thumbnail}
Na tej stronie można:


- Sprawdzić listę domen skonfigurowanych na naszym serwerze DNS secondary;
- Dodać lub usunąć domenę z serwera DNS secondary.


## W praktyce

### Dodawanie domeny
Aby dodać domenę, kliknij na Dodaj domenę i wypełnij formularz:

![](images/img_2009.jpg){.thumbnail}

- W polu "Domena do dodania" wpisz nazwę domeny.



![](images/img_2010.jpg){.thumbnail}
Po wypełnieniu formularza kliknij na Zatwierdź.

Domena pojawi się na liście:

![](images/img_2011.jpg){.thumbnail}
Dla każdej dodanej domeny pojawiają się poniższe informacje:


- DOMENA: Domena skonfigurowana na naszym serwerze DNS secondary.
- DATA UTWORZENIA: Data dodania domeny do naszego serwera DNS secondary.
- IP: Adres IP głównego serwera DNS domeny.
- DNS Secondary: Nazwa serwera DNS secondary OVH, na którym skonfigurowana jest domena.


Możliwe, że zostanie wykonana weryfikacja zarządzania domeną. W takim przypadku otrzymasz komunikat z błędem podczas dodawania domeny:
Wystąpił błąd podczas dodawania domeny do serwera DNS secondary. (First we need to verify you are the owner of this domain. To do so, please add a TXT field on your DNS zone for the domain dedie-domaine.com, with the subdomain 'ownercheck' and the following value: '339ea8d0'. Once done and your zone reloaded, try again (you don't need to wait for DNS propagation).)
W takim przypadku należy dodać pole TXT dla subdomeny ownercheck.votredomaine.com w aktualnej strefie dns domeny:


```
ownercheck TXT "339ea8d0"
```

### Usuwanie domeny
Aby usunąć deklarację dns secondary dla danej domeny, wystarczy kliknąć na ikonkę Kosza znajdującą się z prawej strony skonfigurowanej domeny.

### Sprawdź również
Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
 


