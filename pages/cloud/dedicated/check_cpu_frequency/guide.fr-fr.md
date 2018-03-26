---
title: Verification de la frequence CPU du MC-64 OC
slug: check-cpu-frequency
excerpt: Retrouvez ici comment verifier la frequence de votre CPU sur le serveur MC-64 OC.
section: Diagnostic et mode Rescue
---


## Prérequis
La game MC-64 OC possède un processeur i7-6700k qui a sa fréquence de base à 4Ghz ou 4.2Ghz en turbo.

Nous avons éprouvé ce processeur afin d'en augmenter les performances et nous avons développé un profil overclock de ce processeur à 4.4Ghz en utilisation sur plusieurs core ou 4.7Ghz en mode turbo en utilisant qu'un seul core.

Afin de réaliser les différentes étapes de ce guide, il vous faut :

- Avoir un serveur MC-64 OC.
- Disposer d'un accès SSH.
- Avoir un accès au Bureau à distance (Pour Windows).


## Procédure

### Verifier la frequence depuis le rescue
Vous pouvez vous connecter à votre serveur en SSH avec le mot de passe rescue que vous avez reçu par mail.

En rescue, nous pouvons voir la fréquence en temps réel avec cette commande :

```sh
root@rescue:~# watch -n 0 "lscpu | grep MHz"
>>> Every 0.1s: lscpu | grep MHz
>>> CPU MHz:               800.312
>>> CPU max MHz:           4700.0000
CPU min MHz:           800.0000
```

Au repos, le processeur réduit de lui même la fréquence afin de réduire la consommation électrique.

Lorsque nous lançons un :action:`burnP6` sur un seul thread, cela n'utilise qu'un seul core et donc nous avons la fréquence maximal du processeur.

```sh
root@rescue:~# burnP6
root@rescue:~# lscpu | grep MHz
>>> CPU MHz:               4671.562
>>> CPU max MHz:           4700.0000
>>> CPU min MHz:           800.0000
```

Plus nous utilisons de thread, plus la fréquence est dégressive jusqu'au minimum de 4.4Ghz.

```sh
root@rescue:~# burnP6 & burnP6 & burnP6 & burnP6
>>> [1] 19146
>>> [2] 19147
>>> [3] 19148
```

```sh
root@rescue:~# lscpu | grep MHz
>>> CPU MHz:               4400.625
>>> CPU max MHz:           4700.0000
>>> CPU min MHz:           800.0000
```

### Vérifier la fréquence sous linux

Il se peut parfois que la distribution soit trop ancienne ou que la commande lscpu ne soit pas disponible.

Dans ce cas nous avons une alternative qui est `i7z`{.action}.

Vous pouvez l'installer et l'exécuter comme suit (Cela fonctionne également en mode rescue).

```sh
root@ns3054631:~# wget ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit
>>> converted 'ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit' (ANSI_X3.4-1968) -> 'ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit' (UTF-8)
>>> --2017-01-14 12:20:09--  ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit
>>>        => 'i7z_64bit'
>>> Resolving ftp.ovh.net (ftp.ovh.net)... 213.186.33.9
>>> Connecting to ftp.ovh.net (ftp.ovh.net)|213.186.33.9|:21... connected.
>>> Logging in as anonymous ... Logged in!
>>> ==> SYST ... done.    ==> PWD ... done.
>>> ==> TYPE I ... done.  ==> CWD (1) /made-in-ovh/dedie/bench ... done.
>>> ==> SIZE i7z_64bit ... 1053813
>>> ==> PASV ... done.    ==> RETR i7z_64bit ... done.
>>> Length: 1053813 (1.0M) (unauthoritative)

>>> i7z_64bit                 100%[=====================================>]   1.00M  --.-KB/s   in 0.08s

>>> 2017-01-14 12:20:09 (12.0 MB/s) - 'i7z_64bit' saved [1053813]

root@ns3054631:~# chmod +x i7z_64bit
root@ns3054631:~# ./i7z_64bit
```

Vous aurez alors un affichage de ce type.

```sh
>>> Cpu speed from cpuinfo 4007.00Mhz
>>> cpuinfo might be wrong if cpufreq is enabled. To guess correctly try estimating via tsc
>>> Linuxs inbuilt cpu_khz code emulated now
>>> True Frequency (without accounting Turbo) 4007 MHz
>>>  CPU Multiplier 40x || Bus clock frequency (BCLK) 100.18 MHz

>>> Socket [0] - [physical cores=4, logical cores=8, max online cores ever=4]
>>>  TURBO ENABLED on 4 Cores, Hyper Threading ON
>>>  True Frequency 4107.18 MHz (100.18 x [41])
>>>  Max TURBO Multiplier (if Enabled) with 1/2/3/4 Cores is  47x/46x/45x/44x
>>>  Current Frequency 800.65 MHz [100.18 x 7.99] (Max of below)
>>>        Core [core-id]  :Actual Freq (Mult.)      C0%   Halt(C1)%  C3 %   C6 %  Temp
>>>        Core 1 [0]:       799.57 (7.98x)           1     100       0       0    22
>>>        Core 2 [1]:       799.74 (7.98x)           1      99       0       1    23
>>>        Core 3 [2]:       799.83 (7.98x)           1     100       0       0    24
>>>        Core 4 [3]:       800.65 (7.99x)           1     100       0       0    21

>>> C0 = Processor running without halting
>>> C1 = Processor running with halts (States >C0 are power saver)
>>> C3 = Cores running with PLL turned off and core cache turned off
>>> C6 = Everything in C3 + core state saved to last level cache
>>>   Above values in table are in percentage over the last 1 sec
>>> [core-id] refers to core-id number in /proc/cpuinfo
>>> 'Garbage Values' message printed when garbage values are read
>>>   Ctrl+C to exit
```

Il faut toutefois noter que les fréquences indiquées sur la ligne **CPU speed from cpuinfo** et la ligne **True Frequency** ne sont pas les fréquences réelles du processeur. Les seules valeurs qui comptes sont celles indiquées sur les **Core**.


### Vérifier la fréquence sous Windows et WinPE
Vous pouvez également vérifier la fréquence du serveur en mode WinPE.

Pour ce faire, vous devez installer un logiciel tier car Windows ne sais pas lire les vitesses réelles du processeur en natif.

Rendez-vous sur le [site officiel de CPU-Z](http://www.cpuid.com/softwares/cpu-z.html){.external} afin de télécharger ce logiciel, et installez le.

Nous aurons alors une fenêtre indiquant les fréquences réelles du processeur :



> [!primary]
>
> Pour afficher la fenêtre clocks, il faut aller dans Tools, puis cliquer sur clocks.
> 


![freq_win1](images/guide_freq_win1.png){.thumbnail}


![freq_win2](images/guide_freq_win2.png){.thumbnail}

Vous remarquerez que la vitesse plafonne à 4.7Ghz lors de l'utilisation d'un seul core.

Pour la suite du test sous Windows, nous avons utilisé le logiciel [CPU stress MT](http://www.octeam.fr/remository/utilitaires-cpu/cpu-stress-mt.html){.external}.

Une fois installé, pour lancer un bench, il suffit de cliquer sur le bouton `Démarrer`{.action} sans modifier les configurations.

Si nous lançons un bench du processeur, nous aurons alors la vitesse de 4.4Ghz.


![freq_win3](images/guide_freq_win3.png){.thumbnail}