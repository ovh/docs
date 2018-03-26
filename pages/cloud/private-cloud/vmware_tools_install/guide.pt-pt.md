---
title: Instalar o pacote VMware Tools
excerpt: ''
slug: instalar_o_pacote_vmware_tools
legacy_guide_number: g621
---


## 
Deverá utilizar o cliente vSphere seja graças a uma instalação feita no seu computador local, seja através do acesso RDP que lhe foi fornecido aquando da ativação do seu PCC.


## 
Monte o disco de instalação das VMware Tools a partir da conseila da sua VM, validando a opção « Install/Upgrade VMware Tools » :

![](images/img_142.jpg){.thumbnail}
De seguida, deverá montar o volume ativado com o comando :

/home :


```
#cd /home (par exemple)
#tar xvf /mnt/VmareTools-8.3.2-257589.tar.gz
#cd /home/VMWare-tools-distrib
#./VMWare-install.pl default
```


Uma vez uma instalação finalizada, o disco das ferramentas será automaticamente "desmontado" do sistema. #SECTION Instalar o pacote VMware Tools em GNU/Linux.


## 
Uma vez montado o volume através da validação da opção « Install/Upgrade VMware Tools », deverá encontrar o disco « O Meu Computador » da sua VM. Faça duplo clique no volume para lançar a instalação das VMware Tools :

![](images/img_143.jpg){.thumbnail}
O assistente de instalação irá agora ser lançado para lhe solicitar as licenças e o tipo de instalação a escolher (aconselhamos a instalação completa).
Uma vez a instalação terminada será convidado a reiniciar a máquina para que as modificações sejam tomadas em conta.

