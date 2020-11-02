---
deprecated: true
title: SFTP připojení
excerpt: ''
slug: sftp_pripojeni
legacy_guide_number: g589
---


## 
Nejdříve musíte otevřít terminál na Vašem stroji abyste mohli navázat SFTP připojení.

Pod Ubuntu GNOME to například naleznete zde:
Aplikace >> Příslušenství >> Terminál

Jakmile budete mít terminál spuštěn, ověřte, zda máte sftp nainstalováno pomocí příkazu:


```
# man sftp
```

(toto je pouze příklad)
Jakmile je ověření dokončeno, musíte pro spuštění provést následující příkaz:


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


IP samosebou nahraďte svými údaji.
Poté bude požadováno Vaše heslo:


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


Heslo, které máte vložit je totožné s tím, které potřebujete pro přístup k vSphere a dostali jste ho v e-mailu:


```
* Klienta stáhnete zde: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP adresa/název: pcc-178-32-194-8.ovh.com
* uživatelské jméno: admin
* heslo: xxxxxxx
```


Po připojení můžete prohlížet svá úložiště:


```
sftp> ls
pcc-000714
sftp>
```


Nyní budeme pro názornost importovat obraz DVD na Vaše úložiště.
Nejprve je potřeba se dostat do adresáře:


```
sftp> cd pcc-000714
```

 (jde pouze o náš příklad. Vy budete muset nahradit název úložiště tím svým)
Nyní již jen stačí importovat konkrétní soubor:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100% 655MB 8.0MB/s 01:22
```




## Požadavky
Je potřeba si stáhnout a nainstalovat klienta FTP/SFTP.

Nejpoužívanějším klientem je Filezilla, kterou si můžete stáhnout zde:


- [Filezilla](http://downloads.sourceforge.net/filezilla/FileZilla_3.5.2_win32-setup.exe)




## Nastavení a použití
Pro SFTP připojení k Vašemu Private Cloud budete potřebovat vložit informace (celkově 3), které jste dostali e-mailem při aktivaci Private Cloud:


```
* Klienta stáhnete zde: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP adresa/název: pcc-178-32-194-8.ovh.com
* uživatelské jméno: admin
* heslo: xxxxxxx
```


Zde je v příkladu použit pcc-000714, který musíte nahradit vlastním:

![](images/connection_sftp_filezilla.png){.thumbnail}
Po připojení můžete dvojklikem na PCC-000714 chytit a přenáše pomocí myši jednotlivé soubory či složky:

![](images/connection_sftp_filezilla.png){.thumbnail}

