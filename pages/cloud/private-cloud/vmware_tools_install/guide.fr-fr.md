---
title: Installation des VMware Tools
slug: installation-des-vmware-tools
legacy_guide_number: '7766427'
section: Gestion des machines virtuelles
---


La procédure d'installation des VMware Tools varie en fonction du système d'exploitation de la machine virtuelle. Pour obtenir des informations concernant la procédure spécifique à chaque OS, consultez la [documentation VMware concernant les VMware Tools](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1014294){.external-link}*(en anglais)*

Linux (Versions récentes)
-------------------------

Versions
--------

Cette méthode d'installation est valide pour les versions de GNU/Linux suivantes:

- Fedora 19 et supérieur
- Debian 7.x et supérieur
- openSUSE 11.x et supérieur
- Ubuntu 12.04 LTS et supérieur
- Red Hat Enterprise Linux 7.0 et supérieur
- CentOS 7.0 and et supérieur
- Oracle Linux 7.0 et supérieur
- SUSE Linux Enterprise 11 SP4 et supérieur

La plupart des distributions Linux récentes proposent l'installation des VMware Tools via leurs systèmes de gestion de paquets (sous le nom *Open VM Tools)*. Cela permet de maintenir à jour les VMware Tools de la même manière que les autres composants du système d'exploitation de la machine virtuelle. Si la distribution que vous utilisez le propose, vous pourrez trouver les *Open VM Tools* sous le nom de paquet suivant : *open-vm-tools*

**

Linux (Anciennes Versions)
--------------------------

Monter le disque des VMware tools depuis le web client Vsphere, faites un clic droit sur la VM, puis sélectionner "Guest OS" en validant l’option « Install VMware Tools » :

![](images/tools.png){.thumbnail}

Ensuite, monter le volume activé par la commande :

```sh
>     # mount /dev/cdrom /mnt
```

Puis, décompresser l’archive des VMwareTools. Ici, dans /tmp.

```sh
>     $ cd /tmp$ tar xvf /mnt/VMwareTools*.tar.gz $ cd /tmp/vmware-tools-distrib $
>         ./vmware-install.pl default
```

Petite astuce si vous voulez répondre par défaut aux réponses proposées et ne pas être prompté, rajouter "default" en argument à la ligne d'installation

Une fois l’installation finalisée, le disque des tools sera automatiquement désinscrit du système.

Windows
-------

Une fois le volume monté via l’option « Install/Upgrade VMware Tools », retrouver le disque dans le "poste de travail" de votre VM. Faire un double clic sur celui-ci afin de lancer l’installation des Tools :

![](images/windows.jpg){.thumbnail}

L'assistant d'installation va alors se lancer pour demander d'accepter les licences et le type d'installation à choisir (Nous vous conseillons l'installation Complète).Une fois l'installation terminée il vous proposera de redémarrer la machine pour prendre en compte les modifications.Le lecteur CD sera automatiquement démonté à la fin de l'installation
