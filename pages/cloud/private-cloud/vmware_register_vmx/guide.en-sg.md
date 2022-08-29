---
title: Reregister VMs in a new PCC
slug: vsphere-register-vm-vmx
excerpt: Find out how to reregister VMs on a new service from old datastores
section: VMware vSphere features
order: 07
---

**Last updated 24th March 2021**

## Objective

Following an incident, some virtual machines may no longer appear in your vSphere inventory, but all files are still present in the datastores.

**This guide explains how to reregister VMs from a datastore in your vSphere inventory.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-sg/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg))

## Instructions

In your [vSphere interface](../login-vsphere-interface/), go to the `Storage`{.action} view.

![storage view](images/register-vmx-01.png){.thumbnail}

Select a datastore from the list.

![select datastore](images/register-vmx-02.png){.thumbnail}

In the folders for this datastore, select the `.vmx` file and click `Register VM`{.action}.

![reregister VM](images/register-vmx-03.png){.thumbnail}

Fill in the information required, then click `Finish`{.action}.

![enregistrer VM](images/register-vmx-04.png){.thumbnail}

You will need to repeat these same operations for each datastore, and for each VM that needs to be reregistered.

Check the settings of your VMs (name, [portgroup](../creation-vlan-vxlan/), etc...) by right-clicking on each one and then selecting `Edit Settings`{.action}.

![change](images/register-vmx-06.png){.thumbnail}

In the event of a configuration error, an error message will be displayed when you restart the VM. 

You can reactivate a VM by right-clicking on it, then clicking `Power On`{.action}.

![enregistrer VM](images/register-vmx-05.png){.thumbnail}

### Automation

In case you have more than a few VMs and/or datastores, it is possible to automate the process by using scripts to browse the datastores and register their VMs.

#### With PowerCLI

VMware provides PowerCLI for VMware administrators using PowerShell.
<br>Refer to the VMware guide to [install PowerCLI](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-F02D0C2D-B226-4908-9E5C-2E783D41FE2D.html){.external}.

Once installed, you can use the following PS script, written by [LucD](https://www.lucd.info/2009/12/02/raiders-of-the-lost-vmx/){.external}:

```powershell
function register-vmxX {
    param($entityName = $null,$dsNames = $null,$template = $false,$ignore = $null,$checkNFS = $true,$whatif=$false)

    function Get-Usage{
        Write-Host "Parameters incorrect" -ForegroundColor red
        Write-Host "register-vmxX -entityName  -dsNames [,...]"
        Write-Host "entityName   : a cluster-, datacenter or ESX hostname (not together with -dsNames)"
        Write-Host "dsNames      : one or more datastorename names (not together with -entityName)"
        Write-Host "ignore       : names of folders that shouldn't be checked"
        Write-Host "template     : register guests ($false)or templates ($true) - default : $false"
        Write-Host "checkNFS     : include NFS datastores - default : $true"
        Write-Host "whatif       : when $true will only list and not execute - default : $false"
    }

    if(($entityName -ne $null -and $dsNames -ne $null) -or ($entityName -eq $null -and $dsNames -eq $null)){
        Get-Usage
        break
    }

    if($dsNames -eq $null){
        switch((Get-Inventory -Name $entityName).GetType().Name.Replace("Wrapper","")){
            "Cluster"{
                $dsNames = Get-Cluster -Name $entityName | Get-VMHost | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            "Datacenter"{
                $dsNames = Get-Datacenter -Name $entityName | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            "VMHost"{
                $dsNames = Get-VMHost -Name $entityName | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            Default{
                Get-Usage
                exit
            }
        }
    }
    else{
        $dsNames = Get-Datastore -Name $dsNames | where {$_.Type -eq "VMFS" -or $checkNFS} | Select -Unique | % {$_.Name}
    }

    $dsNames = $dsNames | Sort-Object
    $pattern = "*.vmx"
    if($template){
        $pattern = "*.vmtx"
    }

    foreach($dsName in $dsNames){
        Write-Host "Checking " -NoNewline; Write-Host -ForegroundColor red -BackgroundColor yellow $dsName
        $ds = Get-Datastore $dsName | Select -Unique | Get-View
        $dsBrowser = Get-View $ds.Browser
        $dc = Get-View $ds.Parent
        while($dc.MoRef.Type -ne "Datacenter"){
            $dc = Get-View $dc.Parent
        }
        $tgtfolder = Get-View $dc.VmFolder
        $esx = Get-View $ds.Host[0].Key
        $pool = Get-View (Get-View $esx.Parent).ResourcePool

        $vms = @()
        foreach($vmImpl in $ds.Vm){
            $vm = Get-View $vmImpl
            $vms += $vm.Config.Files.VmPathName
        }
        $datastorepath = "[" + $ds.Name + "]"

        $searchspec = New-Object VMware.Vim.HostDatastoreBrowserSearchSpec
        $searchspec.MatchPattern = $pattern

        $taskMoRef = $dsBrowser.SearchDatastoreSubFolders_Task($datastorePath, $searchSpec)

        $task = Get-View $taskMoRef
        while ("running","queued" -contains $task.Info.State){
            $task.UpdateViewData("Info.State")
        }
        $task.UpdateViewData("Info.Result")
        foreach ($folder in $task.Info.Result){
            if(!($ignore -and (&{$res = $false; $folder.FolderPath.Split("]")[1].Trim(" /").Split("/") | %{$res = $res -or ($ignore -contains $_)}; $res}))){
                $found = $FALSE
                if($folder.file -ne $null){
                    foreach($vmx in $vms){
                        if(($folder.FolderPath + $folder.File[0].Path) -eq $vmx){
                            $found = $TRUE
                        }
                    }
                    if (-not $found){
                        if($folder.FolderPath[-1] -ne "/"){$folder.FolderPath += "/"}
                        $vmx = $folder.FolderPath + $folder.File[0].Path
                        if($template){
                            $params = @($vmx,$null,$true,$null,$esx.MoRef)
                        }
                        else{
                            $params = @($vmx,$null,$false,$pool.MoRef,$null)
                        }
                        if(!$whatif){
                            $taskMoRef = $tgtfolder.GetType().GetMethod("RegisterVM_Task").Invoke($tgtfolder, $params)
                            Write-Host "`t" $vmx "registered"
                        }
                        else{
                            Write-Host "`t" $vmx "registered" -NoNewline; Write-Host -ForegroundColor blue -BackgroundColor white " ==> What If"
                        }
                    }
                }
            }
        }
        Write-Host "Done"
        }
    }
```

After loading the script in your environment, you can use it as follows:

```powershell
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337"
register-vmxX -dsNames "ssd-012345","pcc-012345"
register-vmxX -dsNames "ssd-012345","pcc-012345" -template:$true
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337" -ignore "upload-vpn"
register-vmxX -dsNames "ssd-012345","pcc-012345" -ignore "upload-vpn" -checkNFS:$true
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337" -whatif:$true
```

> [!primary]
>
> The code section above has been adapted to OVHcloud VMware environments.
> NFS datastores are enabled by default.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
