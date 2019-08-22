---
title: Vervanging van SSH keys in het geval van verlies
excerpt: Vervanging van SSH keys in het geval van verlies
slug: vervanging_van_ssh_keys_in_het_geval_van_verlies
legacy_guide_number: g2069
---


## 
Wanneer u uw SSH key verloren bent dan kan het voorkomen dat u zich niet zult kunnen verbinden met uw instance als u geen alternatieve methode hiervoor hebt geconfigureerd. 

Om toegang te verkrijgen hebben we een rescue modus voor u beschikbaar gesteld waarmee u kunt inloggen met een wachtwoord en vervolgens uw bestanden kunt veranderen. 

Deze handleiding legt uit hoe het admin gebruikers authorized_keys bestand geconfigureerd kan worden zodat u een nieuwe SSH key kunt toevoegen om zo weer toegang te verkrijgen tot uw instance.


## Vereisten

- [Creating SSH keys]({legacy}1769)
- Zet een instance in rescue modus




## 
Na het mounten van uw instance's disk in de rescue modus zult u toegang hebben tot al uw bestanden. 

Het bestand met uw SSH keys is:


```
/home/USER_NAME/.ssh/authorized_keys
```


Als u uw nieuwe SSH key wilt toevoegen hoeft u dit bestand alleen maar te wijzigen en uw nieuwe key eraan toe te voegen: 


```
admin@instance:~$ sudo vim
/mnt/home/USER_NAME
/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



## Informatie:
Om uw standaard gebruikers SSH key te veranderen hoeft u alleen maar naar het persoonlijke bestand van de gebruiker te gaan: 

Voor bijvoorbeeld de admin gebruiker heeft u het bestand nodig dat zich in de volgende map bevindt: 


```
/home/admin/.ssh/authorized_keys
```


Voor een Ubuntu 15.10 instance zal de standaard gebruiker ubuntu zijn en het bestand zal zich daarom bevinden in de map: 



```
/home/ubuntu
/.ssh/authorized_keys
```



## Ter informatie:
U kunt uw standaard gebruikerswachtwoord ook veranderen door rescue modus te gebruiken en de volgende commands (als de gebruiker admin is) in te voeren: 


- De root directory is veranderd zodat het direct geplaatst is op de disk van de instance: 


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```


- Het admin wachtwoord is veranderd:


```
root@instance:/# passwd 
admin
```



Zodra deze verandering is doorgevoerd en geback-upt is hoeft u alleen nog maar uw instance te rebooten op zijn disk zodat u op uw instance kunt inloggen met uw nieuwe SSH key.


## 

- [Become root and select a password]({legacy}1786)




## 
[Ga terug naar de index van Cloud handleidingen]({legacy}1785)

