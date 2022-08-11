---
title: 'Managing Helm charts in the OVHcloud Managed Private Registry'
excerpt: 'Find out how to manage Helm charts in the OVHcloud Managed Private Registry'
slug: using-helm-chart-museum
section: 'Tutorials'
order: 03
---

**Last updated 14 April, 2022.**

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   color: #ccc;
   font-family: monospace !important;
   font-size: 0.75em;
 }
 .small {
     font-size: 0.75em;
 }
</style>

OVHcloud Managed Private Registry service is a composite cloud-native registry which supports both container image management and [Helm](https://helm.sh/){.external} [chart](https://helm.sh/docs/topics/charts/){.external} management. 

This guide will explain how to manage Helm charts in the OVHcloud Managed Private Registry service: how to upload charts, list the available ones and use them.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../../kubernetes/deploying-hello-world/) documentation. You will need to have Helm installed on your cluster (see the [installing helm](../../kubernetes/installing-helm/) guide for more information).

You also need to have a working OVHcloud Managed Private Registry and have followed the guides on [creating a private registry](../creating-a-private-registry/), [connecting to the UI](../connecting-to-the-ui/), [managing users and projects](../managing-users-and-projects/), [creating and using private images](../creating-and-using-a-private-image/) and [using Private Registry with OVHcloud Managed Kubernetes](../using-private-registry-with-kubernetes/).


## Instructions



### Preparing a Helm chart

In order to do this tutorial, you will need a Helm chart to upload to your OVHcloud Managed Private Registry. 

If you already have a Helm chart in your filesystem, you can use it for the example, but in this section we are suppossing you haven't any. We are using a well known Helm chart often employed as example: the [WordPress](https://github.com/helm/charts/tree/master/stable/wordpress) chart.


#### Download the chart

The first step is downloading the WordPress chart using `helm`:

```bash
helm fetch bitnami/wordpress
```

The wordpress Helm chart is downloaded as a `tgz` file.

<pre class="console"><code>$ helm fetch bitnami/wordpress

$ ls
wordpress-13.1.4.tgz
</code></pre>



#### Inspect the chart (optional)


The file you have downloaded is a packaged Helm chart, useful for downloading it, and for uploading it to your OVHcloud Private Registry. Let's unpack it to have a peek inside it and get a better undestanding of its structure,

An unpackaged chart is organized as a collection of files inside of a directory. The directory name is the name of the chart (without versioning information). Thus, the chart describing WordPress should be stored in a 'wordpress/' folder.

Inside of this directory, Helm will expect a structure that matches this:

```bash
wordpress/
  Chart.yaml          # A YAML file containing information about the chart
  LICENSE             # OPTIONAL: A plain text file containing the license for the chart
  README.md           # OPTIONAL: A human-readable README file
  values.yaml         # The default configuration values for this chart
  values.schema.json  # OPTIONAL: A JSON Schema for imposing a structure on the values.yaml file
  charts/             # A directory containing any charts upon which this chart depends.
  crds/               # Custom Resource Definitions
  templates/          # A directory of templates that, when combined with values,
                      # will generate valid Kubernetes manifest files.
  templates/NOTES.txt # OPTIONAL: A plain text file containing short usage notes
```

Let's uncompress the helm chart:

```bash
tar zxf wordpress-13.1.4.tgz
```

As expected, the file is uncompressed into a `wordpress` folder, with the required files and folders inside it:

<pre class="console"><code>$ tar zxf wordpress-13.1.4.tgz

$ ls -l
total 248
drwxr-xr-x  11 avache  staff     352 14 avr 08:43 wordpress
-rw-r--r--   1 avache  staff  126906 14 avr 08:41 wordpress-13.1.4.tgz

$ ls -l wordpress
total 256
-rw-r--r--   1 avache  staff    387 19 mar 16:45 Chart.lock
-rw-r--r--   1 avache  staff   1024 19 mar 16:45 Chart.yaml
-rw-r--r--   1 avache  staff  65131 19 mar 16:45 README.md
drwxr-xr-x   5 avache  staff    160 14 avr 08:43 charts
drwxr-xr-x   7 avache  staff    224 14 avr 08:43 ci
drwxr-xr-x  23 avache  staff    736 14 avr 08:43 templates
-rw-r--r--   1 avache  staff   5706 19 mar 16:45 values.schema.json
-rw-r--r--   1 avache  staff  45756 19 mar 16:45 values.yaml
</code></pre>

You can now remove the `tgz` file, as we are recreating it.

To package a chart from a chart directory, you can use `helm package`:

```bash
helm package wordpress
```

It creates the packaged chart, with the version appended to the filename:

<pre class="console"><code>$ helm package wordpress
Successfully packaged chart and saved it to: /Users/avache/tmp/test-doc-k8s/helm/wordpress-13.1.4.tgz
</code></pre>


### Manage Helm Charts via the Harbor UI

If you go to the Harbor UI and click on your project, you will see the `Helm Charts`{.action} tab, that you will use to manage the charts inside your registry.

![Manage Helm Charts via the Harbor UI](images/harbor-ui-001.png){.thumbnail}

By default, it's empty, so let's upload a new chart...


### Upload a chart

To upload a chart, click on the `UPLOAD`{.action} button on the top left. 

On the upload dialog, choose the packaged chart file and click on `UPLOAD` button to upload it to your OVHcloud Managed Private Registry.

![Uploading a chart](images/harbor-ui-002.png){.thumbnail}

Now you will see the WordPress chart listed in your registry:

![Chart uploaded](images/harbor-ui-003.png){.thumbnail}


### List charts

As you can see, the existing helm charts are listed under the tab `Helm Charts`{.action} with the following information:

- Name of Helm chart
- The status of the chart: Active or Deprecated
- The vesion of the chart
- The created time of the chart

You can click on the icon buttons on the top right to switch views between card view and list view:

![List chart - Card view](images/harbor-ui-005-a.png){.thumbnail}

![List chart - Card view](images/harbor-ui-005.png){.thumbnail}


### Managing chart versions

Clicking on the chart name will show you the chart details, with one line per version of the chart. For each version you will have the following information:

- The chart version number
- The status of the chart
- The template engine used (default is `gotpl`)
- The maintainers of the chart version
- The created timestamp of the chart version
- The labels (if any)

![Chart details](images/harbor-ui-006.png){.thumbnail}

As with the top chart list, you can choose between a list mode and a card mode, by clicking on the icon buttons on the top right.

To delete a version, select it by checking the corresponding checkbox and clicking on `DELETE`{.action} button.

![Delete a chart](images/harbor-ui-007.png){.thumbnail}

Same thing to download a chart, select it and click on `DOWNLOAD`{.action} button to get the packaged chart file.

![Download a chart](images/harbor-ui-008.png){.thumbnail}

Of course, you can also go back in the project and click on the `UPLOAD`{.action} button to upload the new chart version for the current chart.

Labels are managed in the `Labels`{.action} section on the Harbor UI:

![Create a label](images/harbor-ui-009-a.png){.thumbnail}

Click on `NEW LABEL`{.action} button to create a new label.
Fill the `Label Name` and the `Description` fields, tne lick on `OK`{.action} button.

![Create a label](images/harbor-ui-009.png){.thumbnail}

![Create a label](images/harbor-ui-010.png){.thumbnail}

And in the chart version page, you can add or remove tag for each version.

![Adding tags](images/harbor-ui-011-a.png){.thumbnail}

![Adding tags](images/harbor-ui-012.png){.thumbnail}

You can also filter by tag

![Filter by tag](images/harbor-ui-013.png){.thumbnail}


### Chart version details

To see the details of a chart version, click on the link on the chart version number.

![Chart version details](images/harbor-ui-014.jpg){.thumbnail}

You can see more details about the specified chart version, structured in three sections. There are three content sections: summary, dependencies and values.

The *Summary* shows the `README` of the chart, some metadata (like the timestamp of creation and the application version), and helm commands for reference (to add the repository or instal the chart).

![Chart version details - Summary](images/harbor-ui-015.png){.thumbnail}


The *Dependencies* section show the dependant charts

![Chart version details - Dependencies](images/harbor-ui-017.png){.thumbnail}


And in the *Values* section you will find the content from the `values.yaml` file, with an option to see them as a key-value pairs list by clicking in the icon buttons on the top left.

![Chart version details - Values](images/harbor-ui-018.png){.thumbnail}

## Go further

To have an overview of OVHcloud Managed Private Registry service, you can go to the [OVHcloud Managed Private Registry site](../).

Join our community of users on <https://community.ovh.com/en/>.