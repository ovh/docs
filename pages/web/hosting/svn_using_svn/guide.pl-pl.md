---
title: 'Hosting www: Korzystanie z SVN'
slug: hosting_www_korzystanie_z_svn
section: FTP i SSH - zdalny dostęp
---


## 

- Posiadanie hostingu www z dostępem przez SSH (od oferty Pro)
- Umiejętność zalogowania się przez SSH




## 
Po zalogowaniu na hosting przez SSH, należy utworzyć katalog główny dla repozytoriów svn oraz repozytorium.

Wpisz polecenie:


```
mkdir svn
```


i


```
svnadmin create svn/depot_test
```


Korzystając z poniższej komendy, będziesz mógł sprawdzić, czy katalogi zostały utworzone:


```
ls -la
```




## 
Powinieneś otrzymać katalogi tak, jak to widać na tym obrazku:

![](images/img_3078.jpg){.thumbnail}


## Linux z openssh
Ta część odbywa się na komputerze, który będzie się łączył z repozytorium svn (klient svn). Należy utworzyć parę kluczy dsa. W tym celu wpisz w konsoli to polecenie:


```
ssh-keygen -t dsa
```


i pobierz linię znajdującą się domyślnie w pliku .ssh/id_dsa.pub. Aby wyedytować plik, użyj polecenia vi. 


```
vi .ssh/id_dsa.pub
```


Odnajdziesz klucz składający się z trzech ciągów znaków: typ, klucz i komentarz.


## Windows z putty
Ta część odbywa się na komputerze, który będzie się łączył z repozytorium svn (klient svn).
Pobierz pliki instalacyjne programu windows putty i zainstaluj ten program.
Należy utworzyć parę kluczy dsa. W tym celu uruchom program PuTTYGen, wygeneruj parę kluczy i je zapisz:

![](images/img_3079.jpg){.thumbnail}


## 
Po uzyskaniu klucza należy dodać klucz na hostingu w pliku .ssh/authorized_keys2. W tym celu wystarczy wpisać poniższe polecenie:


```
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```


Po otwarciu pliku należy wpisać w nim następującą linię:


```
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```


Wszystko powinno zostać wpisane w tej samej linii.
Zastąp "/home.XXX/loginFTP" i "marc" odpowiednimi informacjami!
Aby uzyskać informację na temat cyfr, których należy użyć zamiast /home.XXX/loginFTP", wpisz polecenie "pwd" przez ssh.

![](images/img_3080.jpg){.thumbnail}
Będzie więc można pobrać zawartość repozytorium bez logowania przez ssh na maszynę.
Uwaga: Nie można używać tego samego klucza dla usługi svn i dla ssh.


## Linux
Możesz wykonać test z komputera łączącego się z repozytorium svn wpisując w linii poleceń:


```
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```




## Windows z TortoiseSVN

- Pobierz i zainstaluj program tortoisesvn ([http://tortoisesvn.net/downloads](http://tortoisesvn.net/downloads))
- Kliknij dwa razy na klucz prywatny. Na dole z prawej strony pojawi się ikonka. Klucz został pobrany przez program uwierzytelniający. 
- Utwórz katalog. Kliknij prawym przyciskiem na ten katalog i wybierz "SVN Checkout". Wpisz:


```
svn+ssh://loginFTP@clusterXXX/depot_test
```



w polu "URL of repository" i kliknij na OK:

![](images/img_3081.jpg){.thumbnail}
Na tej stronie znajduje się bardzo dobra dokumentacja w języku angielskim na temat SVN: [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html)


## Utworzenie kilku kont
W pierwszej kolejności należy utworzyć kilka kluczy ssh. Następnie podczas dodawania publicznego klucza na hostingu:


```
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```


Należy zmienić poniższy parametr dodając poszczególnych użytkowników:


```
--tunnel-user
```


Można również przyznać dostęp tylko do odczytu dodając parametr:


```
--read-only.
```




## Lokalna weryfikacja z poziomu serwera
Jeśli chcesz dokonać weryfikacji lokalnie, podane przykłady nie będą działać. 
Należy użyć:


```
svn+ssh://login@ftp.nazwa_strony.tld/home.XXX/login/svn/depot_test
```



