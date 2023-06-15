---
title: Installare la chiave SSH OVHcloud
slug: chiave-ssh-ovh
excerpt: Come configurare una chiave SSH OVHcloud per consentire l'intervento dei nostri amministratori
section: SSH e chiave SSH
updated: 2018-02-12
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 12/04/2021**

## Obiettivo

In alcuni casi, potrebbe essere necessario l'intervento di un amministratore OVHcloud sulla tua infrastruttura dedicata. 

**Questa guida ti mostra la procedura di installazione di una chiave SSH OVHcloud per consentire l'accesso ai nostri amministratori e come disattivarla a intervento terminato.**

## Prerequisiti

- Avere [accesso in SSH](https://docs.ovh.com/it/dedicated/introduzione-ssh/){.external} (root)

## Procedura

### Step 1: installa la chiave

Accedi in SSH ed esegui questo comando:

- per i server ospitati in OVHcloud Europa:

```sh
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- per i server ospitati in OVHcloud Canada:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
```

Se l'operazione è andata a buon fine, è stato creato il file `authorized_keys2`, che contiene informazioni in questo formato: 

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Step 2: correggi eventuali errori

Anche se la chiave è stata installata correttamente, è possibile che i nostri amministratori non riescano ad accedere al tuo server. In questo caso, è necessario verificare:

#### l’esistenza del file */root/.ssh /authorized_keys2* 

Per assicurarti della presenza del file, esegui il comando:


```sh
cat /root/.ssh/authorized_keys2
```

#### che il server SSH sia configurato in modo da accettare le connessioni da root

Per effettuare questa operazione, controlla nel file `/etc/ssh/sshd_config` questi parametri:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

A questo punto, riavvia il servizio SSH:

```sh
/etc/init.d/sshd restart
```

#### che la *home directory* dell'utente root sia effettivamente /root

Per farlo, utilizza il comando `/etc/passwd`:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Il sesto elemento della riga (gli elementi sono separati da **:**) deve essere /root.

#### che l’applicazione firewall non blocchi l'accesso

In caso di utilizzo di un’applicazione firewall, è necessario aggiungere una regola di autorizzazione per la sorgente cache-ng.ovh.net (cache-ng.ovh.ca per un server in Canada) impostando come porta di destinazione la tua porta SSH (di default, la 22). Ecco un esempio di regola iptables:

**Per un server in Francia**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Per un server in Canada**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Verifica che la porta SSH non sia stata personalizzata e, in caso contrario, precisa questa informazione in modo che l'amministratore possa connettersi.


### Step 3: disattiva la chiave

Una volta che l'amministratore ha completato l’intervento è possibile disabilitare la chiave SSH. Per farlo, è sufficiente modificare il file `authorized_keys2` e aggiungere un commento (con **#**) come indicato qui sotto:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Per saperne di più

[Introduzione a SSH](https://docs.ovh.com/it/dedicated/introduzione-ssh/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
