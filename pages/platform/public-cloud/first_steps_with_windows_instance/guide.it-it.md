---
title: Come utilizzare un’istanza Windows
excerpt: Come utilizzare un'istanza Windows
slug: come_utilizzare_unistanza_windows
legacy_guide_number: g1995
---


## 
Il Public Cloud OVH ti permette di ospitare siti Web con IIS o le tue applicazioni compatibili solo con Windows.
Per le istanze di tipo EG e SP, ad esempio, è possibile installare Windows Server 2012 r2 (con un costo aggiuntivo per la licenza).

La configurazione iniziale di un'istanza Windows è diversa da quella di un'istanza Linux. Ad esempio, non devi creare chiavi SSH mentre è necessario utilizzare la console VNC per impostare la tua password amministratore.

Questa guida ti mostra come utilizzare un'istanza Windows.


## Requisiti necessari

- [Crea un'istanza dallo Spazio Cliente OVH]({legacy}1775) con Windows Server 2012.




## Configura la tua password
Ricordati che le chiavi SSH non possono essere configurate sulla tua istanza Windows. 
Prima di tutto, imposta la tua password utilizzando la console VNC:


- Avvia la console VNC dell'istanza dal tuo Spazio Cliente OVH



![](images/img_3288.jpg){.thumbnail}

- Inserisci la password per l'account amministratore



![](images/img_3289.jpg){.thumbnail}

## Attenzione!
Alcuni tasti della console VNC potrebbero non corrispondere alla tastiera QWERTY: verifica la password inserita prima di confermarla.


## Accedi al Remote Desktop
Una volta configurata la password, puoi accedere alla tua istanza via remote desktop.

Ad esempio, da una macchina Linux:


```
user@poste :~$ rdesktop 149.202.160.94 -k fr -u administrator

-------
Descrizione degli argomenti:
-k: tipo di tastiera
-u: utente
```


O da un'altra macchina Windows

![](images/img_3290.jpg){.thumbnail}


## Accedi a Internet
Le impostazioni di sicurezza di Internet Explorer sono attive di default.
Durante la tua navigazione, visualizzerai più volte un alert:

![](images/img_3291.jpg){.thumbnail}
I download non sono autorizzati.

Per scaricare file, è necessario disattivare le impostazioni di sicurezza.


- Apri il pannello di controllo Windows e accedi alla sezione "Local Server"



![](images/img_3292.jpg){.thumbnail}

- Clicca su "IE Enhanced Security Configuration" e disattiva l'opzione.



![](images/img_3293.jpg){.thumbnail}
A questo punto, puoi navigare liberamente e scaricare file.

![](images/img_3294.jpg){.thumbnail}


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

