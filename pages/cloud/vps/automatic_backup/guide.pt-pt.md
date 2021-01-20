---
title: Backup Automático
excerpt: ''
slug: backup_automatico
legacy_guide_number: g1486
hidden: true
---


## 
Para gerir o backup Automático necessita:


- Uma VPS da gama Cloud
- Os seus identificadores para o acesso ao Manager OVH
- O acesso ao seu servidor (SSH ou RDP)




## A partir do Manager
É necessário então efetuar a ligação ao Manager via o seguinte link: [Manager](https://www.ovh.com/manager/web/)

![](images/img_2080.jpg){.thumbnail}

- Identificador: indique a sua conta OVH

- Password, especifique a password associada à sua conta OVH


Seleciona a sua VPS no menu à esquerda:

![](images/img_2023.jpg){.thumbnail}
No menu principal aceda ao separador "Backup Automatizado":

![](images/img_2026.jpg){.thumbnail}
Clique de seguida no ícone à direita, "Ativar o Backup Automatizado":

![](images/img_2027.jpg){.thumbnail}
Resta-lhe agora clicar no botão "pagar" para aceder à nota de encomenda:

![](images/img_2028.jpg){.thumbnail}
Após o pagamento ter sido efetuado, a opção de backup automatizado será entregue.


## A partir do Manager
É necessário, num primeiro tempo, que se ligue ao Manager utilizando a primeira parte deste guia e depois selecione a VPS que possui a opção.
No menu principal aceda ao "Backup Automatizado" onde poderá consultar a lista dos backups disponíveis:

![](images/img_2021.jpg){.thumbnail}
Clique agora em Restauração:

![](images/img_2025.jpg){.thumbnail}
Após a validação efetuada, será criado um trabalho de restauro (duração: de 30 minutos a uma hora dependendo do modelo de VPS)

Após o término do restauro receberá um e-mail, e-mail esse que conterá as informações de ligação à sua VPS:


```
PARÂMETROS DE ACESSO:

O endereço IPv4 da VPS é: O seu IPv4
O endereço IPv6 da VPS é: O seu IPv6

O nome da VPS é: vpsXXXXX.ovh.net

A password da sua VPS é aquela em vigor à data de 2014-06-24 02:37:16.
```




## Ao utilizar o Manager
Depois de efetuar a ligação ao Manager (procedimento descrito em cima), clique na VPS e de seguida aceda ao separador "Backup Automatizado", e depois escolha o ponto de montagem desejado:

![](images/img_2022.jpg){.thumbnail}
Valide o pedido para que obtenha por e-mail os acessos para montar o seu backup na sua VPS.

No e-mail encontrará os comandos para que consiga montar o seu backup em NFS ou CIFS:


```
Pode montar o seu backup sob linux com a ajuda dos seguintes comandos:

mount -t nfs -o ro,vers=3 IP.IP.IP.IP:/mnt/veeam/vpsXXXXX /mnt

Poderá necessitar do pacote nfs-common em Debian e Ubuntu ou dos pacotes
nfs-utils e nfs-utils-lib em CentOS.

mount -t cifs -o username=vpsXXXXX,password=YYYYYY //IP.IP.IP.IP/VPSXXXXX /mnt

Pode ser necessária a instalação do pacote cifs-utils em Debian, Ubuntu e CentOS.
```



