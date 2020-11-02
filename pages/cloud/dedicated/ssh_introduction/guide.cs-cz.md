---
deprecated: true
title: Úvod do SSH
slug: ssh-uvod
excerpt: Seznamte se s použitím klienta SSH pro připojení ke svému serveru.
section: SSH a SSH klíč
order: 1
---

**Poslední aktualizace 22/01/2018**

## Cíl

Komunikační protokol SSH (Secure Shell) je předinstalován na všech serverech OVH (VPS, dedikované servery, instance Public Cloud).

**Zjistěte, jak používat SSH pro připojení ke svému serveru.**

## Prerekvizity

- SSH je předinstalován na všech serverech. Díky SSH lze se serverem navázat zabezpečené spojení a převzít nad ním kompletní kontrolu.


## Postup

### Kompatibilní software

Spojení SSH lze navázat pomocí široké škály softwarových řešení. Uvádíme jen několik příkladů.

#### Windows

- [Putty](http://www.putty.org/){.external} (k dispozici zdarma)
- [MobaXterm](https://mobaxterm.mobatek.net/) (k dispozici bezplatná i placená verze)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (k dispozici pouze placená verze)

Poslední verze systému Windows 10 a Windows Server nabízejí ve vývojářském režimu přístup k bash konzoli. Viz oficiální dokumentace společnosti Microsoft: <https://msdn.microsoft.com/fr-fr/commandline/wsl/install-win10>.

#### Mac

- Součástí operačního systému Mac OS X je nástroj `Terminal`{.action}.


#### Linux

- K navázání spojení lze použít předinstalované nástroje  `Console`{.action} nebo `Terminal`{.action}.
- Pro práci s více kartami použijte emulátor terminálu `Terminator`.
 Detailní informace naleznete v dokumentaci systémové distribuce Ubuntu: .
- [OpenSSH](http://www.openssh.com){.external} (k dispozici zdarma).


### Jednotlivé fáze připojení přes SSH

#### Fáze 1: první připojení

Pro připojení k serveru je zapotřebí znát následující údaje:

- IPv4 adresa nebo název serveru
- Root heslo daného serveru (obdrželi jste prostřednictvím e-mailu po instalaci serveru)


Spojení je iniciováno prostřednictvím následujícího příkazu:

```sh
ssh root@IP_serveru
```

Nebo také:

```sh
ssh root@nazev_serveru
```

Zobrazí se následující zpráva:

```sh
The authenticity of host servername (IP_serveru) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername,IP_serveru (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

V průběhu prvního připojení obdrží váš SSH klient otisk RSA klíče, což je otisk serveru, k němuž se připojujete. Tento otisk je ověřován při každém připojení. Pokud se otisk změní, budete o tom informováni. Takové oznámení znamená, že došlo k nějaké změně:

- server byl reinstalován,
- SSH server byl reinstalován,
- připojujete se k jinému serveru.

V průběhu prvního připojení budete muset přijmout otisk, který Váš SSH klient uloží na Vaši pracovní plochu.


#### Fáze 2: manuál

Na linuxových distribucích je k dispozici manuál obsahující veškeré dostupné příkazy a příslušné argumenty.

```sh
man bash
```

#### Fáze 3: aktualizace

SSH klient musí být vždy aktualizován na nejnovější verzi, stejně tak jako Vaše systémová distribuce. Aktuální verzi můžete ověřit pomocí následujícího příkazu:

```sh
ssh -V
```

V případě jakýchkoli nejasností se obraťte na oficiální dokumentaci svého SSH klienta.


## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.