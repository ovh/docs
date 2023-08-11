---
title: "Atualizar o sistema operativo"
excerpt: "Saiba como atualizar um sistema operativo em fim de vida"
updated: 2022-02-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 09/07/2021**

## Objetivo

Este tutorial descreve os passos a seguir para atualizar um sistema operativo em fim de vida para uma nova versão.

> [!alert]
> Aviso: tal como para qualquer atualização importante de um sistema operativo, existe um risco de falha, de perda de dados ou de falha da configuração de software.
> Assim, antes de seguir este tutorial, a OVHcloud recomenda-lhe vivamente que [guarde a sua instância](/pages/public_cloud/compute/save_an_instance) e que efetue testes aprofundados das suas aplicações, de forma a garantir que estas funcionem na nova versão do sistema operativo.
>

> [!primary]
> Para evitar os problemas acima mencionados, recomendamos a instalação de uma nova instância com o novo sistema operativo para o qual efetua a atualização e a subsequente migração dos dados.
> Poderá ainda ser necessário um exame das diferenças na sua aplicação, mas o sistema operativo será provavelmente mais estável.
>

## Requisitos

- Dispor de um [acesso root ao servidor](/pages/public_cloud/compute/become_root_and_change_password)
- Ter efetuado [um backup da sua instância](/pages/public_cloud/compute/save_an_instance)

## Instruções

### Debian

Antes de atualizar a versão principal do seu SO, certifique-se de que atualiza as versões mais recentes de todos os pacotes instalados na sua versão atual:

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get full-upgrade
```

> [!alert]
> A etapa seguinte é facultativa.
> No entanto, é preciso que analise cuidadosamente os pacotes que já não são necessários no sistema. Caso contrário, o comando seguinte pode danificar o sistema. 
>

```bash
$ sudo apt-get --purge autoremove
```

Uma vez que algumas atualizações podem necessitar de um reboot, primeiro deve reiniciar antes de começar a atualização:

```bash
$ sudo systemctl reboot
```

Após a reinicialização, atualize o diretório /etc/apt/sources.list para orientar a próxima versão (neste exemplo, passamos de Buster para Bullseye):

```bash
$ sudo cp -v /etc/apt/sources.list /root/
$ sudo cp -rv /etc/apt/sources.list.d/ /root/
$ sudo sed -i 's/buster/bullseye/g' /etc/apt/sources.list
$ sudo sed -i 's/bullseye\/updates/bullseye-security/g' /etc/apt/sources.list
```

Agora que a próxima versão está orientada, pode proceder à atualização assim como ao reboot final:

> [!primary]
> As janelas de contexto podem convidá-lo a reiniciar os seus serviços. Responda afirmativamente.
>

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get full-upgrade
$ sudo systemctl reboot
```

Verifique que a atualização funcionou:

```bash
$ uname -r
$ lsb_release -a
```

### Ubuntu

Antes de atualizar a versão principal do seu SO, certifique-se de que atualiza as versões mais recentes de todos os pacotes instalados na sua versão atual:

```sh
$ sudo apt-get update
```

De seguida, atualize os seus pacotes instalados para as suas últimas versões:

```sh
$ sudo apt-get upgrade -y
```

Terminada esta operação, efetue um *dist-upgrade* que lançará outras atualizações que possam ser necessárias:

```sh
$ sudo apt-get dist-upgrade -y
```

A atualização da versão maior pode então ser efetuada. Ubuntu fornece agora uma ferramenta chamada *do-release-upgrade* que torna a atualização mais segura e mais fácil. Comece a atualização através deste comando:

```sh
$ sudo do-release-upgrade
```

Siga as instruções apresentadas. Estas consistem principalmente em confirmar que deseja continuar a atualização.

Observações:

- A ferramenta pode pedir-lhe que reinicie o seu servidor antes de efetuar a atualização. Para isso, basta que introduza "reboot" (reinicie) e prima a Entrada.
- Atenção: não é recomendado efetuar esta operação através de uma ligação SSH. Como não existe acesso físico ao servidor, a ligação em SSH é a principal forma de aceder ao seu servidor.
O Ubuntu irá iniciar um novo serviço SSH noutra porta para que possa conservar outro acesso em caso de defeito. Além disso, poderá sempre aceder ao servidor através da consola se já não tiver acesso ao servidor através de SSH.
- Durante a atualização, poderá ser-lhe pedido que confirme a eliminação dos pacotes que já não são geridos. Verifique que isto não tem qualquer impacto nas suas aplicações antes de continuar.

Depois de finalizar a atualização, o servidor reiniciará e perderá a ligação até que esta seja reiniciada.
Alguns minutos mais tarde, deverá ser capaz de se ligar e ver uma mensagem semelhante a esta (a versão será a próxima disponível em relação à sua versão anterior):

```sh
$ Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 4.15.0-147-generic x86_64)
```

> [!primary]
> Quando atualiza o sistema operativo em vez de o reinstalar, a nova versão do seu SO não está indicada na Área de Cliente, na API OVHcloud, nem na API Horizon / OpenStack.
>

Verifique que as suas aplicações funcionam como previsto. Em caso de problema, recomendamos que [restaure o backup](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup) efetuado antes da atualização.

### Fedora

Antes de começar a atualização da versão principal do SO, certifique-se de que atualiza as versões mais recentes de todos os pacotes instalados na sua versão atual. Introduza esta encomenda:

```sh
$ sudo dnf upgrade —refresh
```

A seguir, reinicie o servidor:

```sh
$ reboot
```

Depois de reiniciar o servidor, instale o pacote de atualização:

```sh
$ sudo dnf install dnf-plugin-system-upgrade
```

Agora que dispõe do pacote necessário, pode efetuar a atualização. As atualizações do sistema só são oficialmente aceites e testadas em 2 versões no máximo (por exemplo, de 32 a 34).
Neste exemplo, vamos passar de Fedora 32 para 33:

```sh
$ sudo dnf system-upgrade download --releasever=33
$ sudo dnf system-upgrade reboot
```

Uma vez a versão descarregada e o processo de atualização lançado, o servidor reinicia-se para terminar a atualização.
<br>Pode demorar algum tempo até voltar a ligar-se ao servidor, pois a atualização leva tempo.

Verifique que as suas aplicações funcionam como previsto. Em caso de problema, recomendamos que [restaure o backup](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup) efetuado antes da atualização.

> [!primary]
> Se encontrar dificuldades, encontrará respostas às suas questões no website [Fedora Docs](https://docs.fedoraproject.org/en-US/quick-docs/dnf-system-upgrade/){.external}.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
