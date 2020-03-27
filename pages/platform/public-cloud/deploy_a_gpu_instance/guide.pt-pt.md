---
title: 'Criar uma instância GPU'
slug: criar-uma-instancia-gpu
excerpt: 'Saiba como criar uma instância GPU em Linux ou Windows'
section: 'A partir da Área de Cliente OVH'
---

**Última atualização a 6 de dezembro de 2019**

## Sumário

As instâncias GPU são tecnicamente semelhantes às instâncias da gama 2017, mas dispõem também de uma placa gráfica (Unidade de Processamento Gráfico ou GPU). A tecnologia utilizada (*pci_passthrough*) permite ao sistema operativo da instância controlar a GPU tal como faria uma máquina física.

As GPU disponibilizadas são as NVIDIA Tesla V100. 

> [!warning]
>
> Atualmente, as instâncias GPU só estão disponíveis nos datacentres GRA3, GRA5, GRA7 e BHS3. É possível que tenha de criar um novo projeto e escolher a nova gama 2017. [Saber mais.](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/)
> 

**Este guia explica como criar uma instância GPU em Linux ou Windows**

## Requisitos

- um projeto Public Cloud com acesso às regiões onde as GPU estão disponíveis (GRA3, GRA5, GRA7 e BHS3)

## Instruções

Encontrará a informação necessária para criar uma instância GPU em Linux ou Windows abaixo.
Tenha presente que não pode alterar o SO da Instância de Linux para Windows ou vice-versa. Deste modo, certifique-se de que cria a instância com o SO correto por predefinição.


### Em Linux

Todas as imagens que disponibilizamos são compatíveis com uma instância GPU.

> [!primary]
>
> Se não se sentir à vontade para compilar manualmente um módulo do kernel, recomendamos que utilize uma distribuição oficialmente suportada pela Nvidia e para a qual a Nvidia forneça drivers *prontos a usar*: <https://developer.nvidia.com/cuda-downloads>.
> 

Depois de iniciar sessão na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, aceda ao seu projeto Public Cloud, clique em `Criar uma instância`{.action}e escolha uma instância GPU:

![public-cloud](images/gpu.png){.thumbnail}

Em seguida, selecione o SO Linux à sua escolha:

![public-cloud](images/linuxchoice.png){.thumbnail}

A instância será iniciada ao fim de alguns segundos. Pode depois iniciar sessão e procurar a placa gráfica: 

```ssh
lspci | grep -i nvidia
00:05.0 3D controller: NVIDIA Corporation GV100GL [Tesla V100 PCIe 16GB] (rev a1)
```

A placa gráfica está identificada, mas ainda não pode ser utilizada. Para o fazer, primeiro deve instalar o driver NVIDIA. Pode encontrar a lista dos pacotes no seguinte endereço: [Lista de pacotes Linux disponíveis](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Em seguida, deve executar os seguintes comandos:

```sh
wget URL_of_packet_to_download
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> O comando Linux pode variar em função da sua distribuição. Em caso de dúvida, consulte o guia oficial da sua versão Linux.
> 


Depois de a instância ser reiniciada, a placa gráfica será apresentada no utilitário NVIDIA:

```sh
nvidia-smi
Fri Dec  6 12:32:25 2019       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.67       Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Tesla V100-PCIE...  On   | 00000000:00:05.0 Off |                    0 |
| N/A   26C    P0    35W / 250W |      0MiB / 16130MiB |      5%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

A instância GPU está agora totalmente funcional e utilizável.


### Em Windows

Existem incompatibilidades entre o driver NVIDIA e a solução de virtualização *KVM/pci_passthrough*. **As imagens padrão do Windows não funcionam.**
Por isso, oferecemos imagens especiais, baseadas numa BIOS UEFI virtual, que permitem ao driver funcionar corretamente (tal só se aplica às instâncias G1, G2 e G3 - gama 2017 e anterior).

Depois de iniciar sessão na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, aceda ao seu projeto Public Cloud, clique em `Criar uma instância`{.action}e escolha uma instância GPU:

![public-cloud](images/gpu.png){.thumbnail}

Em seguida, selecione o SO Windows à sua escolha: 

![public-cloud](images/oschoice.png){.thumbnail}

Depois de a sua instância GPU ser iniciada, deve instalar o driver NVIDIA a partir do [website oficial](https://www.nvidia.com/Download/index.aspx){.external}.

Inicie uma instância utilizando um dos tipos de GPU disponíveis (t1-45, t1-90, t1-180...). A instância será iniciada ao fim de alguns minutos.

Depois desse processo, basta instalar o driver necessário que será depois apresentado aqui:

![public-cloud](images/driverson.png){.thumbnail}

![public-cloud](images/devicemanager.png){.thumbnail}


## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.