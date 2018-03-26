---
title: Ligação por SFTP
excerpt: ''
slug: ligacao_por_sftp
legacy_guide_number: g589
---


## 
Num primeiro tempo será necessário que abra um terminal na sua máquina de forma a poder lançar a ligação SFTP.

Em Ubuntu GNOME, por exemplo, estará em Aplicações => Acessórios => Terminal.

Após ter iniciado o terminal, verifique que possui o comando sftp:


```
# man sftp
```

(este é um exemplo, poderá utilizar para outros comandos)
Após ter efetuado esta verificação, poderá lançar o comando da seguinte forma:


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


Depois irá ser pedido a respetiva password:


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


A password a introduzir será aquela com a qual se liga ao vSphere e que terá recebido no e-mail de entrega do serviço:


```
* Poderá efetuar o download em: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* endereço IP/Nome: pcc-178-32-194-8.ovh.com
* nome do utilizador: admin
* password: xxxxxxx
```


Uma vez ligado, poderá listar os seus datastores:


```
sftp> ls
pcc-000714
sftp>
```


De seguida será necessário que entre no datastore de forma a que consiga importar, por exemplo, a sua imagem iso.
Para tal deverá utilizar o seguinte comando:


```
sftp> cd pcc-000714
```

 (este código serve como exemplo, deverá substituir o datastore obtido no comando anterior)
Após estar na diretória do datastore, resta apenas efetuar o upload do ficheiro em questão:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100% 655MB 8.0MB/s 01:22
```




## Pré-requisitos
Será necessário que efetue o download e instale um cliente FTP/SFTP.
O mais utilizado é o Filezilla, disponível no seguinte endereço:


- [Lien de téléchargement Filezilla](http://downloads.sourceforge.net/filezilla/FileZilla_3.5.2_win32-setup.exe)




## Configuração e utilização:
Para se ligar por SFTP ao seu Private Cloud, será necessário que introduza 3 informações recebidas no e-mail de ativação do Private Cloud:


```
* Poderá efetuar o download em: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* endereço IP/Nome: pcc-178-32-194-8.ovh.com
* nome do utilizador: admin
* password: xxxxxxx
```


Veja aqui o exemplo de configuração para o pcc-000714 (no exemplo):

![](images/connection_sftp_filezilla.png){.thumbnail}
Uma vez ligado, poderá efetuar duplo clique em pcc-000714 (no exemplo) e efetuar um copiar-colar do ficheiro a transferir:

![](images/connection_sftp_filezilla.png){.thumbnail}

