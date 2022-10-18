---
title: Configurar a firewall em Linux com iptables
excerpt: Saiba como proteger um servidor com iptables
slug: firewall-iptables
section: Tutoriais
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 18/10/2022**

## Objetivo

O seu servidor dedicado está equipado com uma firewall. As firewalls criam uma barreira entre uma rede de confiança e uma rede não fiável.
As firewalls funcionam definindo regras que regulem o tráfego autorizado e o que está bloqueado. A firewall comercial desenvolvida para os sistemas Linux é iptables.

**Aprenda a proteger o seu servidor dedicado graças ao iptables.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços que são da sua responsabilidade. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou tiver dúvidas quanto à administração, utilização ou segurança de um servidor, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/). Para mais informações, aceda à secção “Quer saber mais?” deste manual.
>

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) na sua conta OVHcloud
- Dispor de um acesso administrador (root/sudo) ao seu servidor através de SSH

## Instruções

> [!primary]
>
> Este guia indica os comandos para uma distribuição Ubuntu Server.
>
> Manual para utilização geral. Poderá ter de adaptar alguns comandos consoante a distribuição e/ou o sistema operativo que utiliza. Poderá ser-lhe sugerida a utilização de ferramentas de terceiros. Em caso de dúvidas relacionadas com a sua utilização, consulte a documentação oficial.  
>

### Etapa 1: atualizar o sistema

Os programadores de sistemas operativos e de sistemas de distribuição propõem atualizações do software frequentes, muitas vezes por razões de segurança. **Atualizar a sua distribuição e o seu sistema operativo é essencial para proteger o seu servidor.**

Para mais informações, consulte o nosso manual sobre a [segurança de um servidor dedicado](https://docs.ovh.com/pt/dedicated/proteger-um-servidor-dedicado/).

### Etapa 2: instalar a firewall iptables em Ubuntu

> [!primary]
>
> Existem duas versões diferentes de iptables para IPv4 e IPv6. As regras que estamos a cobrir neste tutorial Linux iptables dizem respeito ao IPv4.
> Para configurar iptables para IPv6, deve utilizar o utilitário iptables6. Estes dois protocolos diferentes não funcionam em conjunto e devem ser configurados de forma independente.
>

O iptables é instalado de forma padrão na maior parte dos sistemas Linux. Para confirmar que o iptables está instalado, utilize o seguinte comando:

```bash
sudo apt-get install iptables
```

O exemplo de saída em Ubuntu confirma que a última versão do iptables já está presente:

![versão-iptables](images/step2-version-iptables.PNG){.thumbnail}

Geralmente, um comando iptables é o seguinte:

```bash
sudo iptables [option] CHAIN_rule [-j target]
```

Eis uma lista de algumas opções iptables comuns:

- -A —append: Adiciona uma regra a uma cadeia (no fim).
- -C —check: Procura uma regra que corresponda às exigências da cadeia.
- -D —delete: Eliminar as regras especificadas de uma cadeia.
- -F —flush: Elimina todas as regras.
- -I —insert: Adiciona uma regra a uma cadeia numa determinada posição.
- -L —list: Indica todas as regras de um canal.
- -N -new-chain: Crie uma nova cadeia.
- -v —verbose: Afixar mais informações aquando da utilização de uma opção de lista.
- -X —delete-chain: Eliminar a cadeia fornecida.

### Etapa 3: verificar o estado atual dos itens

Para apresentar o conjunto das regras atuais no seu servidor, introduza o seguinte comando na janela do terminal:

```bash
sudo iptables -L
```

O sistema apresenta o estado das suas cadeias.<br>
A saída irá listar três canais:

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}

### Etapa 4: autorizar o tráfego no localhost

Para autorizar o tráfego do seu próprio sistema (o localhost), adicione a cadeia de entrada ao introduzir o seguinte:

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
```

Este comando configura a firewall para aceitar o tráfego para a interface localhost (lo) (-i). Agora, tudo o que vem do seu sistema passará pela sua firewall.
Deve definir esta regra para que as aplicações possam comunicar com a interface localhost.

### Etapa 5: autorizar o tráfego em portos específicos <a name="step5"></a>

Estas regras autorizam o tráfego nas diferentes portas que especifica através dos comandos indicados abaixo.
Uma porta é um ponto de terminação de comunicação especificado para um tipo específico de dados.

Para autorizar o tráfego Web HTTP, introduza o seguinte comando:

```bash
sudo iptables -A INPUT -p tcp —dport 80 -j ACCEPT
```

Para autorizar apenas o tráfego SSH (Secure Shell) de entrada, introduza o seguinte (note que utilizamos a porta 22, que é o número padrão da porta SSH. Se o seu número de porta for diferente, certifique-se de ajustar os seguintes comandos em conformidade):

```bash
sudo iptables -A INPUT -p tcp —dport 22 -j ACCEPT
```

Para autorizar o tráfego Internet HTTPS, introduza o seguinte comando:

```bash
sudo iptables -A INPUT -p tcp —dport 443 -j ACCEPT
```

As opções funcionam da seguinte forma:

- -p: Verifique o protocolo especificado (tcp).
- --dport: Especifica o porto de destino.
- -j jump: Efetua a ação 

> [!warning]
> Em caso de perda de acesso ao seu servidor, poderá sempre utilizar a ferramenta KVM/IPMI para aceder novamente e modificar a sua configuração ou eliminar as suas regras.
>
> Para mais informações sobre o acesso a esta ferramenta, consulte [este guia](https://docs.ovh.com/pt/dedicated/usar-ipmi-servidores-dedicados/).  
> 

### Etapa 6: controlar o tráfego por endereço IP

Utilize o seguinte comando para aceitar o tráfego a partir de um endereço IP específico.

```bash
sudo iptables -A INPUT -s o_seu_endereço_IP_a_autorizar -j ACCEPT
```

Substitua o endereço IP na encomenda pelo endereço IP que pretende autorizar.

Também pode bloquear o tráfego a partir de um endereço IP:

```bash
sudo iptables -A INPUT -s o_seu_endereço_IP_ao_bloquear -j DROP
```

Substitua o endereço IP na encomenda pelo endereço IP que pretende bloquear.

Pode rejeitar o tráfego a partir de um intervalo de endereços IP, com o seguinte comando:

```bash
sudo iptables -A INPUT -m iprange —selecione o seu_endereço_IP_inicio-o_o_endereço_IP_fin -j REJECT
```

As opções essenciais que utilizámos nos exemplos funcionam da seguinte forma:

- -m: Corresponde à opção especificada.
- -iprange: Indica ao sistema esperar um intervalo de endereços de IP em vez de um só.
- —-src-range: Identifique o intervalo de endereços IP.

### Etapa 7: eliminar o tráfego indesejável

Se definir regras de firewall iptables, deve impedir os acessos não autorizados eliminando todo o tráfego proveniente de outras portas:

```bash
sudo iptables -A INPUT -j DROP
```

A opção -A acrescenta uma nova regra à cadeia. Se uma ligação passa por portas diferentes das que definiu, ela será abandonada.

> [!warning]
> 
>Atenção, se introduzir este comando antes de efetuar [o passo 5](#step5), bloqueará todos os acessos, incluindo o que está em curso, e o acesso SSH. Isto é particularmente problemático numa máquina na qual se pode aceder remotamente. 
>

### Etapa 8: eliminar uma regra

Um método mais preciso consiste em eliminar o número de linha de uma regra.

```bash
sudo iptables -P INPUT DROP 
```

Em primeiro lugar, liste todas as regras e introduza o seguinte:

```bash
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Procure a linha da regra da firewall que deseja eliminar e execute este comando:

```bash
sudo iptables -D INPUT <Number>
```
Substitua o `Number` pelo número de linha de regra que pretende eliminar.

### Etapa 9: registar as suas alterações

Ao reiniciar o sistema, o iptables não mantém as regras que criou.
Cada vez que configura o iptables sob Linux, todas as modificações que efetuar aplicam-se apenas até ao próximo reboot.

Para registar as regras nos sistemas baseados em Ubuntu, introduza:

```bash
sudo -s iptables-save -c
```

Quando iniciar o seu sistema, iptables recarregará automaticamente as regras da firewall.

Pode desde já configurar regras de firewall iptables para o seu servidor Linux.
Não hesite em experimentar, pois pode sempre eliminar as regras de que não precisa, esvaziar todas as regras e recomeçar.

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
