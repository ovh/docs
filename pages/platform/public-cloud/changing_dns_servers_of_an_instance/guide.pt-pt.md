---
title: 'Modificar os servidores DNS de uma instância'
excerpt: 'Modificar os servidores DNS padrão de uma instância Public Cloud'
slug: modificar_os_servidores_dns_de_uma_instancia
legacy_guide_number: g1985
---

**Última atualização: 18/11/2019**

## Objetivo

O servidor DNS configurado nas instâncias será, por defeito, o da OVH ( 213.186.33.99 ). É possível que pretenda modificá-lo ou adicionar outro servidor. No entanto, os servidores DNS são configurados automaticamente graças ao servidor DHCP e não poderá modificá-los através de uma simples edição do ficheiro resolv.conf.

Este guia explica-lhe o procedimento a seguir para modificar a configuração DHCP da sua instância. Poderá, então, alterar os servidores DNS das suas instâncias.


## Requisitos
- Dispor de uma instância Public Cloud

## Instruções

### Em Debian/Ubuntu

- Ligue-se à instância em SSH. Pode consultar o guia [Ligar-se a uma instância Public Cloud](https://docs.ovh.com/pt/public-cloud/primeira-conexao/){.external}.
- Torne-se o utilizador root. Pode consultar o guia [Tornar-se o utilizador root e definir uma palavra-passe](https://docs.ovh.com/pt/public-cloud/tornar-se_root_e_definir_uma_palavra-passe/){.external}.

> [!success]
>
> É possível ler o ficheiro resolv.conf para verificar qual é o servidor DNS configurado:
> 
> cat /etc/resolv.conf
> 
> 
> domain openstacklocal
> search openstacklocal
> nameserver 213.186.33.99
>

- Edite o ficheiro /etc/dhcp/dhclient.conf com os servidores DNS desejados.
Tem duas opções relativamente a esta configuração:

Pretende adicionar um servidor DNS para além daquele que fornecemos por defeito:
  
```
supersede domain-name-servers 127.0.0.1;
```

Pretende adicionar um servidor DNS para substituir o servidor que fornecemos por defeito:
    
```
prepend domain-name-servers 127.0.0.1;
```
 
- Verifique que a configuração é bem aplicada (isto pode demorar vários minutos):

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### Em CentOS/Fedora

- Ligue-se à instância em SSH. Pode consultar o guia [Ligar-se a uma instância Public Cloud](https://docs.ovh.com/pt/public-cloud/primeira-conexao/){.external}.
- Torne-se o utilizador root. Pode consultar o guia [Tornar-se o utilizador root e definir uma palavra-passe](https://docs.ovh.com/pt/public-cloud/tornar-se_root_e_definir_uma_palavra-passe/){.external}.
- Verifique a configuração atual através do comando nmcli:

```
nmcli
 
eth0: ligado a System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 default
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: não-gerido
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```
- Consulte o nome da sua interface pública:

```
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```
- Desative a modificação dos DNS automáticos e indique os DNS pretendidos:

```
nmcli con mod "Nome da sua interface" ipv4.ignore-auto-dns yes
nmcli con mod "Nome da sua interface" ipv4.dns "127.0.0.1 213.186.33.99"
```
- Aplicar a configuração:

```
nmcli con down "Nome da sua interface" && nmcli con up "Nome da sua interface"
```
- Verifique que a configuração é bem aplicada:

```
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

### Windows

- Ligue-se através do ambiente de trabalho remoto ou da consola VNC. Pode consultar o guia [Ligar-se a uma instância Public Cloud](https://docs.ovh.com/pt/public-cloud/primeira-conexao/){.external}.

- Entre na configuração Network

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Entre, então, na configuração IPv4 da sua placa de rede pública

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Adicione os servidores DNS que pretende utilizar:

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
Num powershell, o comando nslookup permite-lhe verificar qual o servidor DNS utilizado por defeito.
>

## Quer saber mais?

[Conectar-se a uma instância Public Cloud](https://docs.ovh.com/pt/public-cloud/primeira-conexao/){.external}.

[Tornar-se o utilizador root e selecionar uma palavra-passe](https://docs.ovh.com/pt/public-cloud/tornar-se_root_e_definir_uma_palavra-passe/){.external}.

[Modificar o hostname de uma instância Public Cloud](https://docs.ovh.com/pt/public-cloud/modificar-hostname-de-uma-instancia/){.external}.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>