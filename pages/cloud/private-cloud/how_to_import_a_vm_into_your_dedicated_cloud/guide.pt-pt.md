---
title: Importar uma VM para o seu Dedicated Cloud
excerpt: Guia de exemplo que ajuda a compreender como importar VMs existentes para o Dedicated Cloud HyperV
slug: importar_uma_vm_para_o_seu_dedicated_cloud
---


## Exporte a sua VM
Não é possível descrever a ação de exportação, pois a mesma depende da infraestrutura na qual a VM "roda". Utilize a função à sua disposição para recuperar a sua VM. Tenha em consideração o facto de o essencial é poder recuperar o disco da máquina virtual: vhdx (em HyperV) ou vmdk (em VMware).


- Recuperei o meu ficheiro vhdx:

nesse caso, pode passar diretamente à secção de importação.


- Recuperei o meu ficheiro vmdk:

será necessário, nesse caso, converter o seu ficheiro vmdk num ficheiro vhdx para que o mesmo seja compatível com hyperV. Para a conversão, pode utilizar uma destas ferramentas:

- Microsoft Virtual Machine Converter Solution Accelerator
- 2Tware Convert VHD

A indicação dessas ferramentas é meramente a título indicativo. Pode utilizar outras ferramentas. Lembra-se também que a OVH não pode assegurar o suporte a essas ferramentas, desenvolvidas por terceiros.


## Ligação ao catálogo de imagens através de FTPS
Uma vez recuperado o ficheiro de disco, deverá colocá-lo no seu catálogo VMM para poder de seguida criar uma VM a partir deste disco. Para se ligar ao serviço FTPs e fazer o upload do seu ficheiro de disco, pode seguir os exemplos do seguinte guia:
[]({legacy}1425).
Coloque o seu ficheiro de disco na pasta "Data".

![](images/img_1995.jpg){.thumbnail}


## Verificar a presença do disco importado no painel VMM
Para que possa ver o seu ficheiro de disco na interface VMM, é necessário que seja efetuada uma atualização do catálogo, que é efetuada a todas as horas. Poderá ter de aguardar ants de poder ver o disco no catálogo.

![](images/img_1996.jpg){.thumbnail}


## Criar um template a partir do disco
Poderá criar um template a partir de um ficheiro de disco e utilizar o mesmo para futuras criações de VMs. Tudo é detalhado no seguinte guia de exemplo: []({legacy}1436).


## Criar uma VM a partir de um disco
Se não deseja fazer uma personalização, poderá criar diretamente uma VM a partir do ficheiro de disco; tudo é detalhado no seguinte guia de exemplo: []({legacy}1426).

