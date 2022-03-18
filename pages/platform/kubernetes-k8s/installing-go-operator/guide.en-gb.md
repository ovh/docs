---
title: Deploying a Kubernetes Operator written in Golang on OVHcloud Managed Kubernetes
slug: deploying-go-operator
excerpt: Learn how to deploy Kubernetes operator written in Golang on OVHcloud Managed Kubernetes and the Operator SDK
section: Operators
order: 02
---

**Last updated 15th Marsh, 2022.**

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
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

## Objective

[Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) are one way to extend Kubernetes to automate some actions in the cluster.

![Operator diagram](images/operator.png)

In a few words, an operator offers OPS actions programmatically and avoids repetitive human activities that are devoid of added value.
The tasks that an operator can do are various and can be on resources deployed in Kubernetes (like a Pod) or outside (like a database for example).
In this guide, we are focusing on resources inside a Kubernetes cluster.

An operator is based on a [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) that allow to extend Kubernetes API.<br>
Thanks to the control loop of Kubernetes, the operator maintains the right state of the resources.<br>
Then the operator's job is to monitor the state of the internal or external objects that it manages.

An operator can have various capabilities:

* basic application setup and configuration
* upgrade the application (with rollback if needed)
* backup and recovery if the operator handles a state
* auto-remediation of the application if a problem occurs
* monitoring and observability for its own metrics
* auto scaling, auto tuning...  

A good summary of the capabilities of an operator can be found on the [operator framework website](https://operatorframework.io/operator-capabilities/).

As an operator is a custom API in Kubernetes, you need to develop it. Thankfully there are frameworks to help you to develop your own operator.
The most important [framework](https://operatorframework.io/operator-capabilities/) allows you to develop an operator with Ansible, Helm and Go.
Another kind of frameworks exists to use other languages, like Java for instance with the [Java operator SDK](https://github.com/java-operator-sdk/java-operator-sdk).

As we can see in the tutorial below, the capability of the developed operator depends on the language. For example, developing an operator with Go offers lots of capabilities.

## Requirements

This tutorial assumes that you already have a Kubernetes cluster managed by OVHcloud, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

## Instructions

In this tutorial, you will create a simple operator that manages the installation of an Nginx server and monitors it. <br>
The operator allows you to:

 - install a Nginx server with the required number of Pods
 - upgrade the number of Pods
 - change the HTTP port
 - recreate the service if it is deleted

You'll develop this operator with the [operator SDK](https://sdk.operatorframework.io). <br>
The operator SDK provides several tools:

 - a [CLI](https://sdk.operatorframework.io/docs/cli/) to develop and run locally the developed operator
 - several helpers in different languages (Helm, Ansible and Go) to easily develop an operator

In this article, you will use the [Go helper](https://sdk.operatorframework.io/docs/building-operators/golang/quickstart/).  

### Install the CLI

The SDK includes a [CLI](https://sdk.operatorframework.io/docs/cli/) (**C**ommand **L**ine **I**nterface).<br>
In order to install the CLI, follow the instructions applicable to your OS. <br>
You can, for example, install it through Homebrew:

```bash
brew install operator-sdk
```

Then test if the CLI is correctly installed on your computer:

```bash
operator-sdk version
```

Output should be like this:

<pre class="console"><code>$ brew install operator-sdk
...
==> Installing dependencies for operator-sdk: go
==> Installing operator-sdk dependency: go
==> Pouring go--1.17.6.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/go/1.17.6: 10,822 files, 532.9MB
==> Installing operator-sdk
==> Pouring operator-sdk--1.17.0.x86_64_linux.bottle.tar.gz
==> Caveats
Bash completion has been installed to:
  /home/linuxbrew/.linuxbrew/etc/bash_completion.d
==> Summary
🍺  /home/linuxbrew/.linuxbrew/Cellar/operator-sdk/1.17.0: 10 files, 196.3MB
==> Running `brew cleanup operator-sdk`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> operator-sdk
...

$ operator-sdk version
operator-sdk version: "v1.17.0", commit: "704b02a9ba86e85f43edb1b20457859e9eedc6e6", kubernetes version: "v1.21", go version: "go1.17.6", GOOS: "darwin", GOARCH: "arm64"
</code></pre>

### Develop an operator with Go

In this guide, you will use [Go](https://go.dev/) to create your first operator.<br>
Helm is a package manager and provides templates to deploy applications in Kubernetes.

The CLI offers to scaffold an entire project, but it generates a lot of files that are not necessary for a non prod-ready application. <br>
More information on the project layout generated by the CLI can be found in the [official documentation](https://sdk.operatorframework.io/docs/overview/project-layout/).

#### Scaffold the project

The CLI offers to scaffold an entire project, you don't use all these files for the demo but it helps to easily bootstrap the project. <br>
More information on the project layout generated by the CLI can be found in the [official documentation](https://sdk.operatorframework.io/docs/overview/project-layout/).

First, create the root folder `nginx-go-operator` of your project:

```bash
mkdir nginx-go-operator
```

Then in the `nginx-go-operator` folder scaffold the project with the _Operator SDK_:

```bash
cd nginx-go-operator
operator-sdk init --project-name nginx-go-operator --domain ovhcloud.com --repo github.com/ovhcloud-devrel/nginx-operator-go
```

Output should be like this:

<pre class="console"><code>$ operator-sdk init --project-name nginx-go-operator --domain ovhcloud.com --repo github.com/ovhcloud-devrel/nginx-operator-go

Writing kustomize manifests for you to edit...
Writing scaffold for you to edit...
Get controller runtime:
$ go get sigs.k8s.io/controller-runtime@v0.11.0
Update dependencies:
$ go mod tidy
Next: define a resource with:
$ operator-sdk create api
</code></pre>

Several resources have been created:
```bash
.
├── Dockerfile
├── Makefile
├── PROJECT
├── config
│   ├── default
│   │   ├── kustomization.yaml
│   │   ├── manager_auth_proxy_patch.yaml
│   │   └── manager_config_patch.yaml
│   ├── manager
│   │   ├── controller_manager_config.yaml
│   │   ├── kustomization.yaml
│   │   └── manager.yaml
│   ├── manifests
│   │   └── kustomization.yaml
│   ├── prometheus
│   │   ├── kustomization.yaml
│   │   └── monitor.yaml
│   ├── rbac
│   │   ├── auth_proxy_client_clusterrole.yaml
│   │   ├── auth_proxy_role.yaml
│   │   ├── auth_proxy_role_binding.yaml
│   │   ├── auth_proxy_service.yaml
│   │   ├── kustomization.yaml
│   │   ├── leader_election_role.yaml
│   │   ├── leader_election_role_binding.yaml
│   │   ├── role_binding.yaml
│   │   └── service_account.yaml
│   └── scorecard
│       ├── bases
│       │   └── config.yaml
│       ├── kustomization.yaml
│       └── patches
│           ├── basic.config.yaml
│           └── olm.config.yaml
├── go.mod
├── go.sum
├── hack
│   └── boilerplate.go.txt
└── main.go
```

### Custom resources definition and controller

The [custom resources definition](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) (CRDs) is the main point of the operator.<br>
It allows you to extend the default API of Kubernetes. This means you can work with them the same way you would with its core resources.<br>
In other words, once you have created a CRD, you'll be able to create new resources, called Custom Resources (CRs) to distinguish them from the core Kubernetes resources.<br>
The CRD is some kind of schema for the CR based on it.

It is important to note that CRDs by themselves are just data. They do not have any logic attached to them, nor any special behavior. 
To add logic you need a [controller](https://kubernetes.io/docs/concepts/architecture/controller/) or an operator.

You need to add an API to create these two kind of resources:
```bash
operator-sdk create api --group tutorials --version v1 --kind OvhNginx --resource --controller
```

Output should be like this:

<pre class="console"><code>$operator-sdk create api --group tutorials --version v1 --kind OvhNginx --resource --controller

Writing kustomize manifests for you to edit...
Writing scaffold for you to edit...
api/v1/ovhnginx_types.go
controllers/ovhnginx_controller.go
Update dependencies:
$ go mod tidy
Running make:
$ make generate
go: creating new go.mod: module tmp
Downloading sigs.k8s.io/controller-tools/cmd/controller-gen@v0.8.0
go get: installing executables with 'go get' in module mode is deprecated.
	To adjust and download dependencies of the current module, use 'go get -d'.
	To install using requirements of the current module, use 'go install'.
	To install ignoring the current module, use 'go install' with a version,
	like 'go install example.com/cmd@latest'.
	For more information, see https://golang.org/doc/go-get-install-deprecation
	or run 'go help get' or 'go help install'.
go get: added github.com/fatih/color v1.12.0
go get: added github.com/go-logr/logr v1.2.0
go get: added github.com/gobuffalo/flect v0.2.3
go get: added github.com/gogo/protobuf v1.3.2
go get: added github.com/google/go-cmp v0.5.6
go get: added github.com/google/gofuzz v1.1.0
go get: added github.com/inconshreveable/mousetrap v1.0.0
go get: added github.com/json-iterator/go v1.1.12
go get: added github.com/mattn/go-colorable v0.1.8
go get: added github.com/mattn/go-isatty v0.0.12
go get: added github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd
go get: added github.com/modern-go/reflect2 v1.0.2
go get: added github.com/spf13/cobra v1.2.1
go get: added github.com/spf13/pflag v1.0.5
go get: added golang.org/x/mod v0.4.2
go get: added golang.org/x/net v0.0.0-20210825183410-e898025ed96a
go get: added golang.org/x/sys v0.0.0-20210831042530-f4d43177bf5e
go get: added golang.org/x/text v0.3.7
go get: added golang.org/x/tools v0.1.6-0.20210820212750-d4cc65f0b2ff
go get: added golang.org/x/xerrors v0.0.0-20200804184101-5ec99f83aff1
go get: added gopkg.in/inf.v0 v0.9.1
go get: added gopkg.in/yaml.v2 v2.4.0
go get: added gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b
go get: added k8s.io/api v0.23.0
go get: added k8s.io/apiextensions-apiserver v0.23.0
go get: added k8s.io/apimachinery v0.23.0
go get: added k8s.io/klog/v2 v2.30.0
go get: added k8s.io/utils v0.0.0-20210930125809-cb0fa318a74b
go get: added sigs.k8s.io/controller-tools v0.8.0
go get: added sigs.k8s.io/json v0.0.0-20211020170558-c049b76a60c6
go get: added sigs.k8s.io/structured-merge-diff/v4 v4.1.2
go get: added sigs.k8s.io/yaml v1.3.0
/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen object:headerFile="hack/boilerplate.go.txt" paths="./..."
Next: implement your new API and generate the manifests (e.g. CRDs,CRs) with:
$ make manifests
</code></pre>

Next you can generate your CRD:

```bash
make manifests
```

Output should be like this:

<pre class="console"><code>$ make manifests

/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen rbac:roleName=manager-role crd webhook paths="./..." output:crd:artifacts:config=config/crd/bases
</code></pre>



After this new things are generated:
```bash
.
├── Dockerfile
├── Makefile
├── PROJECT
├── api
│   └── v1
│       ├── groupversion_info.go
│       ├── ovhnginx_types.go
│       └── zz_generated.deepcopy.go
├── bin
│   └── controller-gen
├── config
│   ├── crd
│   │   ├── bases
│   │   │   └── tutorials.ovhcloud.com_ovhnginxes.yaml
...
│   ├── samples
│   │   ├── kustomization.yaml
│   │   └── tutorials_v1_ovhnginx.yaml
...
├── controllers
│   ├── ovhnginx_controller.go
│   └── suite_test.go
├── go.mod
├── go.sum
├── hack
│   └── boilerplate.go.txt
└── main.go
```

> [!primary]
>
> In this tutorial you mainly work with the resources in the following folders: `api/v1`, `config/crd`, `config/samples` and `controllers/`.
>

Next, you can have a look to the three main generated files. <br>
The CRD file `tutorials.ovhcloud.com_ovhnginxes.yaml` in the folder `./config/crd/bases`:
```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  annotations:
    controller-gen.kubebuilder.io/version: v0.8.0
  creationTimestamp: null
  name: ovhnginxes.tutorials.ovhcloud.com
spec:
  group: tutorials.ovhcloud.com
  names:
    kind: OvhNginx
    listKind: OvhNginxList
    plural: ovhnginxes
    singular: ovhnginx
  scope: Namespaced
  versions:
  - name: v1
    schema:
      openAPIV3Schema:
        description: OvhNginx is the Schema for the ovhnginxes API
        properties:
          apiVersion:
            description: 'APIVersion defines the versioned schema of this representation
              of an object. Servers should convert recognized schemas to the latest
              internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
            type: string
          kind:
            description: 'Kind is a string value representing the REST resource this
              object represents. Servers may infer this from the endpoint the client
              submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
            type: string
          metadata:
            type: object
          spec:
            description: OvhNginxSpec defines the desired state of OvhNginx
            properties:
              foo:
                description: Foo is an example field of OvhNginx. Edit ovhnginx_types.go
                  to remove/update
                type: string
            type: object
          status:
            description: OvhNginxStatus defines the observed state of OvhNginx
            type: object
        type: object
    served: true
    storage: true
    subresources:
      status: {}
status:
  acceptedNames:
    kind: ""
    plural: ""
  conditions: []
  storedVersions: []
```

The sample CR file `tutorials_v1_ovhnginx.yaml` in the folder `./config/samples`:
```yaml
apiVersion: tutorials.ovhcloud.com/v1
kind: OvhNginx
metadata:
  name: ovhnginx-sample
spec:
  # TODO(user): Add fields here
```

The GO controller `ovhnginx_controller.go` in the folder `./controllers`:
```go
package controllers

import (
	"context"

	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/log"

	tutorialsv1 "github.com/ovhcloud-devrel/nginx-operator-go/api/v1"
)

// OvhNginxReconciler reconciles a OvhNginx object
type OvhNginxReconciler struct {
	client.Client
	Scheme *runtime.Scheme
}

//+kubebuilder:rbac:groups=tutorials.ovhcloud.com,resources=ovhnginxes,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=tutorials.ovhcloud.com,resources=ovhnginxes/status,verbs=get;update;patch
//+kubebuilder:rbac:groups=tutorials.ovhcloud.com,resources=ovhnginxes/finalizers,verbs=update

// Reconcile is part of the main kubernetes reconciliation loop which aims to
// move the current state of the cluster closer to the desired state.
// TODO(user): Modify the Reconcile function to compare the state specified by
// the OvhNginx object against the actual cluster state, and then
// perform operations to make the cluster state reflect the state specified by
// the user.
//
// For more details, check Reconcile and its Result here:
// - https://pkg.go.dev/sigs.k8s.io/controller-runtime@v0.11.0/pkg/reconcile
func (r *OvhNginxReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	_ = log.FromContext(ctx)

	// TODO(user): your logic here

	return ctrl.Result{}, nil
}

// SetupWithManager sets up the controller with the Manager.
func (r *OvhNginxReconciler) SetupWithManager(mgr ctrl.Manager) error {
	return ctrl.NewControllerManagedBy(mgr).
		For(&tutorialsv1.OvhNginx{}).
		Complete(r)
}
```

Next, you can update the CRD to add fields to manage the Nginx server.
Update the file `api/v1/ovhnginx_types.go`:
```go
package v1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// OvhNginxSpec defines the desired state of OvhNginx
type OvhNginxSpec struct {
	// Number of replicas for the Nginx PODs
	ReplicaCount int32 `json:"replicaCount"`
	// Exposed port for the Nginx server
	Port int32 `json:"port"`
}

// OvhNginxStatus defines the observed state of OvhNginx
type OvhNginxStatus struct {
	// INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
	// Important: Run "make" to regenerate code after modifying this file
}

//+kubebuilder:object:root=true
//+kubebuilder:subresource:status

// OvhNginx is the Schema for the ovhnginxes API
type OvhNginx struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   OvhNginxSpec   `json:"spec,omitempty"`
	Status OvhNginxStatus `json:"status,omitempty"`
}

//+kubebuilder:object:root=true

// OvhNginxList contains a list of OvhNginx
type OvhNginxList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []OvhNginx `json:"items"`
}

func init() {
	SchemeBuilder.Register(&OvhNginx{}, &OvhNginxList{})
}
```

Then generate the manifest:
```bash
make manifest
```

Output should be like this:

<pre class="console"><code>$ make manifests

/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen rbac:roleName=manager-role crd webhook paths="./..." output:crd:artifacts:config=config/crd/bases
</code></pre>

Verify that the CRD is updated with the two fields (`port` and `replicaCount`):
```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  annotations:
    controller-gen.kubebuilder.io/version: v0.8.0
  creationTimestamp: null
  name: ovhnginxes.tutorials.ovhcloud.com
spec:
  group: tutorials.ovhcloud.com
  names:
    kind: OvhNginx
    listKind: OvhNginxList
    plural: ovhnginxes
    singular: ovhnginx
  scope: Namespaced
  versions:
  - name: v1
    schema:
      openAPIV3Schema:
        description: OvhNginx is the Schema for the ovhnginxes API
        properties:
          apiVersion:
            description: '...'
            type: string
          kind:
            description: '...'
            type: string
          metadata:
            type: object
          spec:
            description: OvhNginxSpec defines the desired state of OvhNginx
            properties:
              port:
                description: Exposed port for the Nginx server
                format: int32
                type: integer
              replicaCount:
                description: Number of replicas for the Nginx Pod
                format: int32
                type: integer
            required:
            - port
            - replicaCount
            type: object
          status:
            description: OvhNginxStatus defines the observed state of OvhNginx
            type: object
        type: object
    served: true
    storage: true
    subresources:
      status: {}
status:
  acceptedNames:
    kind: ""
    plural: ""
  conditions: []
  storedVersions: []
```

### The reconciler

After the CRD you have to update the reconciler to:
 - create the `deployment` for the Nginx pod,
 - create the `service`,
 - watch the created service to re-create it if it's deleted.

 Update the `./controllers/ovhnginx_controller.go` file:
 ```go
package controllers

import (
	"context"

	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/apimachinery/pkg/util/intstr"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	ctrllog "sigs.k8s.io/controller-runtime/pkg/log"

	tutorialsv1 "github.com/ovhcloud-devrel/nginx-operator-go/api/v1"
)

// OvhNginxReconciler reconciles a OvhNginx object
type OvhNginxReconciler struct {
	client.Client
	Scheme *runtime.Scheme
}

//+kubebuilder:rbac:groups=tutorials.ovhcloud.com,resources=ovhnginxes,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=tutorials.ovhcloud.com,resources=ovhnginxes/status,verbs=get;update;patch
//+kubebuilder:rbac:groups=tutorials.ovhcloud.com,resources=ovhnginxes/finalizers,verbs=update
// Custom RBAC to allow the operator to interact with mandatory resources
//+kubebuilder:rbac:groups="",resources={secrets,serviceaccounts,services},verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=apps,resources=deployments,verbs=get;list;watch;create;update;patch;delete
func (r *OvhNginxReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	log := ctrllog.FromContext(ctx)
	ovhNginx := &tutorialsv1.OvhNginx{}
	existingNginxDeployment := &appsv1.Deployment{}
	existingService := &corev1.Service{}

	log.Info("⚡️ Event received! ⚡️")
	log.Info("Request: ", "req", req)

	// Deletion case
	err := r.Get(ctx, req.NamespacedName, ovhNginx)
	if err != nil {
		if errors.IsNotFound(err) {
			log.Info("OvhNginx resource not found, check if a deployment must be deleted.")

			// Delete Deployment
			err = r.Get(ctx, types.NamespacedName{Name: req.Name, Namespace: req.Namespace}, existingNginxDeployment)
			if err != nil {
				if errors.IsNotFound(err) {
					log.Info("Nothing to do, no deployment found.")
					return ctrl.Result{}, nil
				} else {
					log.Error(err, "❌ Failed to get Deployment")
					return ctrl.Result{}, err
				}
			} else {
				log.Info("☠️ Deployment exists: delete it. ☠️")
				r.Delete(ctx, existingNginxDeployment)
			}

			// Delete Service
			err = r.Get(ctx, types.NamespacedName{Name: req.Name, Namespace: req.Namespace}, existingService)
			if err != nil {
				if errors.IsNotFound(err) {
					log.Info("Nothing to do, no service found.")
					return ctrl.Result{}, nil
				} else {
					log.Error(err, "❌ Failed to get Service")
					return ctrl.Result{}, err
				}
			} else {
				log.Info("☠️ Service exists: delete it. ☠️")
				r.Delete(ctx, existingService)
				return ctrl.Result{}, nil
			}

		}
	}

	log.Info("ℹ️ CR state ℹ️", "ovhNginx.Name", ovhNginx.Name, " ovhNginx.Namespace", ovhNginx.Namespace, "ovhNginx.Spec.ReplicaCount", ovhNginx.Spec.ReplicaCount, "ovhNginx.Spec.Port", ovhNginx.Spec.Port)

	// Check if the deployment and the service already exists, if not: create a new one only if a CR exists
	err = r.Get(ctx, types.NamespacedName{Name: ovhNginx.Name, Namespace: ovhNginx.Namespace}, existingNginxDeployment)
	r.Get(ctx, types.NamespacedName{Name: ovhNginx.Name, Namespace: ovhNginx.Namespace}, existingService)
	if err != nil && errors.IsNotFound(err) && ovhNginx != &(tutorialsv1.OvhNginx{}) {
		// Define a new deployment
		newNginxDeployment := r.createDeployment(ovhNginx)
		log.Info("✨ Creating a new Deployment", "Deployment.Namespace", newNginxDeployment.Namespace, "Deployment.Name", newNginxDeployment.Name)

		err = r.Create(ctx, newNginxDeployment)
		if err != nil {
			log.Error(err, "❌ Failed to create new Deployment", "Deployment.Namespace", newNginxDeployment.Namespace, "Deployment.Name", newNginxDeployment.Name)
			return ctrl.Result{}, err
		}

		// Create the Service
		newService := r.createService(ovhNginx)
		log.Info("✨ Creating a new Service", "Service.Namespace", newService.Namespace, "Service.Name", newService.Name)
		err = r.Create(ctx, newService)
		if err != nil {
			log.Error(err, "❌ Failed to create new Service", "Service.Namespace", newService.Namespace, "Service.Name", newService.Name)
			return ctrl.Result{}, err
		}
	} else if err == nil {
		// Deployment exist, check if the Deployment or the Service must be updated
		var replicaCount int32 = ovhNginx.Spec.ReplicaCount
		if existingNginxDeployment.Spec.Replicas != &replicaCount {
			log.Info("🔁 Number of replicas changes, update the deployment! 🔁")
			existingNginxDeployment.Spec.Replicas = &replicaCount
			err = r.Update(ctx, existingNginxDeployment)
			if err != nil {
				log.Error(err, "❌ Failed to update Deployment", "Deployment.Namespace", existingNginxDeployment.Namespace, "Deployment.Name", existingNginxDeployment.Name)
				return ctrl.Result{}, err
			}
		}

		var port int32 = ovhNginx.Spec.Port
		if existingService.Spec.Ports[0].Port != port {
			log.Info("🔁 Port number changes, update the service! 🔁")
			existingService.Spec.Ports[0].Port = port
			err = r.Update(ctx, existingService)
			if err != nil {
				log.Error(err, "❌ Failed to update Service", "Service.Namespace", existingService.Namespace, "Service.Name", existingService.Name)
				return ctrl.Result{}, err
			}
		}
	} else if err != nil {
		log.Error(err, "Failed to get Deployment")
		return ctrl.Result{}, err
	}

	return ctrl.Result{}, nil
}

// Create a Deployment for the Nginx server.
func (r *OvhNginxReconciler) createDeployment(ovhNginxCR *tutorialsv1.OvhNginx) *appsv1.Deployment {
	deployment := &appsv1.Deployment{
		ObjectMeta: metav1.ObjectMeta{
			Name:      ovhNginxCR.Name,
			Namespace: ovhNginxCR.Namespace,
		},
		Spec: appsv1.DeploymentSpec{
			Replicas: &ovhNginxCR.Spec.ReplicaCount,
			Selector: &metav1.LabelSelector{
				MatchLabels: map[string]string{"app": "ovh-nginx-server"},
			},
			Template: corev1.PodTemplateSpec{
				ObjectMeta: metav1.ObjectMeta{
					Labels: map[string]string{"app": "ovh-nginx-server"},
				},
				Spec: corev1.PodSpec{
					Containers: []corev1.Container{{
						Image: "ovhplatform/hello:1.0",
						Name:  "ovh-nginx",
						Ports: []corev1.ContainerPort{{
							ContainerPort: 80,
							Name:          "http",
							Protocol:      "TCP",
						}},
					}},
				},
			},
		},
	}
	return deployment
}

// Create a Service for the Nginx server.
func (r *OvhNginxReconciler) createService(ovhNginxCR *tutorialsv1.OvhNginx) *corev1.Service {
	service := &corev1.Service{
		ObjectMeta: metav1.ObjectMeta{
			Name:      ovhNginxCR.Name,
			Namespace: ovhNginxCR.Namespace,
		},
		Spec: corev1.ServiceSpec{
			Selector: map[string]string{
				"app": "ovh-nginx-server",
			},
			Ports: []corev1.ServicePort{
				{
					Name:       "http",
					Protocol:   corev1.ProtocolTCP,
					Port:       ovhNginxCR.Spec.Port,
					TargetPort: intstr.FromInt(80),
				},
			},
			Type: corev1.ServiceTypeLoadBalancer,
		},
	}

	return service
}

// SetupWithManager sets up the controller with the Manager.
func (r *OvhNginxReconciler) SetupWithManager(mgr ctrl.Manager) error {
	return ctrl.NewControllerManagedBy(mgr).
		For(&tutorialsv1.OvhNginx{}).
		Complete(r)
}
 ```

### Test the operator in "dev mode"

Before deploying the operator you may want to run with your IDE to avoid the packaging and deploying phase or to set breakpoints in your code.<br>
To that launch the following command:
```bash
make install run
```

Output should be like this:

<pre class="console"><code>$ make install run
/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen rbac:roleName=manager-role crd webhook paths="./..." output:crd:artifacts:config=config/crd/bases
go: creating new go.mod: module tmp
Downloading sigs.k8s.io/kustomize/kustomize/v3@v3.8.7
go get: added cloud.google.com/go v0.38.0
go get: added github.com/Azure/go-autorest/autorest v0.9.0
go get: added github.com/Azure/go-autorest/autorest/adal v0.5.0

...

go get: added sigs.k8s.io/kustomize/kustomize/v3 v3.8.7
go get: added sigs.k8s.io/kustomize/kyaml v0.9.4
go get: added sigs.k8s.io/structured-merge-diff/v3 v3.0.0
go get: added sigs.k8s.io/yaml v1.2.0
/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/kustomize build config/crd | kubectl apply -f -
customresourcedefinition.apiextensions.k8s.io/ovhnginxes.tutorials.ovhcloud.com created
/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen object:headerFile="hack/boilerplate.go.txt" paths="./..."
go fmt ./...
go vet ./...
go run ./main.go
1.647526515026746e+09   INFO    controller-runtime.metrics      Metrics server is starting to listen    {"addr": ":8080"}
1.647526515027149e+09   INFO    setup   starting manager
1.647526515027349e+09   INFO    Starting server {"path": "/metrics", "kind": "metrics", "addr": "[::]:8080"}
1.6475265150274749e+09  INFO    controller.ovhnginx     Starting EventSource    {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "source": "kind source: *v1.OvhNginx"}
1.647526515027502e+09   INFO    controller.ovhnginx     Starting Controller     {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx"}
1.647526515027501e+09   INFO    Starting server {"kind": "health probe", "addr": "[::]:8081"}
1.647526515428687e+09   INFO    controller.ovhnginx     Starting workers        {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "worker count": 1}
</code></pre>

> [!primary]
>
> There are two commands launched: `install` and `run`, the `install` command create the CRD in the Kubernetes cluster (based on your .kubeconfig) and the `run` command execute the operator in _dev_ mode. 
> You must not stop your operator in your terminal for the next steps of this chapter.
>

You can create a CR to interact with your operator.
Update the file `tutorials_v1_ovhnginx.yaml` in the folder `.config/samples`:
```yaml
apiVersion: tutorials.ovhcloud.com/v1
kind: OvhNginx
metadata:
  name: ovhnginx-sample
spec:
  port: 80
  replicaCount: 1
``` 

Before creating the CR, don't forget to create a namespace. This will be the namespace where the CR will be created and the Nginx server deployed:

```bash
kubectl create ns test-go-operator
```
Output should be like this:

<pre class="console"><code>$ kubectl create ns test-go-operator

namespace/test-go-operator created
</code></pre>

Then apply the CR to create it in your Kubernetes Cluster:
```bash 
kubectl apply -f ./config/samples/tutorials_v1_ovhnginx.yaml -n test-go-operator
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f ./config/samples/tutorials_v1_ovhnginx.yaml -n test-go-operator

ovhnginx.tutorials.ovhcloud.com/ovhnginx-sample created
</code></pre>

At this time, the operator which is currently running detects the new CR and does a few things:
```bash
...

1.6475285214460428e+09  INFO    controller.ovhnginx     Starting workers        {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "worker count": 1}
1.647529020596993e+09   INFO    controller.ovhnginx     ⚡️ Event received! ⚡️   {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
1.6475290205970829e+09  INFO    controller.ovhnginx     Request:        {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "req": "test-go-operator/ovhnginx-sample"}
1.6475290205971992e+09  INFO    controller.ovhnginx     ℹ️ CR state ℹ️    {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "ovhNginx.Name": "ovhnginx-sample", " ovhNginx.Namespace": "test-go-operator", "ovhNginx.Spec.ReplicaCount": 1, "ovhNginx.Spec.Port": 80}
1.64752902079885e+09    INFO    controller.ovhnginx     ✨ Creating a new Deployment    {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "Deployment.Namespace": "test-go-operator", "Deployment.Name": "ovhnginx-sample"}
1.647529020825273e+09   INFO    controller.ovhnginx     ✨ Creating a new Service       {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "Service.Namespace": "test-go-operator", "Service.Name": "ovhnginx-sample"}
```

Let's take a look at the resources in your Kubernetes cluster:

```bash
kubectl get pod,svc -n test-go-operator
```
Output should be like this:

<pre class="console"><code>$ kubectl get pod,svc -n test-go-operator

NAME                                 READY   STATUS    RESTARTS   AGE
pod/ovhnginx-sample-d6557f99-jr9sg   1/1     Running   0          14m

NAME                      TYPE           CLUSTER-IP   EXTERNAL-IP      PORT(S)        AGE
service/ovhnginx-sample   LoadBalancer   10.3.84.52   135.XXX.XXX.206   80:32549/TCP   14m
</code></pre>

You can now visit the URL at the IP mentioned in the `EXTERNAL-IP` column in the previous output command: `http://135.XXX.XXX.206/`:

![Hello world from Nginx](images/hello-world.png)

You can apply modifications the CR to see that the operator reacts as wanted. <br>
Update the file `tutorials_v1_ovhnginx.yaml` in the folder `.config/samples`:
```yaml
apiVersion: tutorials.ovhcloud.com/v1
kind: OvhNginx
metadata:
  name: ovhnginx-sample
spec:
  port: 8080
  replicaCount: 2
```

Then apply the CR to create it in your Kubernetes Cluster:
```bash 
kubectl apply -f ./config/samples/tutorials_v1_ovhnginx.yaml -n test-go-operator
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f ./config/samples/tutorials_v1_ovhnginx.yaml -n test-go-operator

ovhnginx.tutorials.ovhcloud.com/ovhnginx-sample configured
</code></pre>

At this time, the operator which is currently running detects the modifications of the CR:
```bash
...

1.647529020596993e+09   INFO    controller.ovhnginx     ⚡️ Event received! ⚡️   {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
1.6475290205970829e+09  INFO    controller.ovhnginx     Request:        {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "req": "test-go-operator/ovhnginx-sample"}
1.6475290205971992e+09  INFO    controller.ovhnginx     ℹ️ CR state ℹ️    {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "ovhNginx.Name": "ovhnginx-sample", " ovhNginx.Namespace": "test-go-operator", "ovhNginx.Spec.ReplicaCount": 1, "ovhNginx.Spec.Port": 80}
1.64752902079885e+09    INFO    controller.ovhnginx     ✨ Creating a new Deployment    {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "Deployment.Namespace": "test-go-operator", "Deployment.Name": "ovhnginx-sample"}
1.647529020825273e+09   INFO    controller.ovhnginx     ✨ Creating a new Service       {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "Service.Namespace": "test-go-operator", "Service.Name": "ovhnginx-sample"}
1.647531084056659e+09   INFO    controller.ovhnginx     ⚡️ Event received! ⚡️   {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
1.647531084056725e+09   INFO    controller.ovhnginx     Request:        {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "req": "test-go-operator/ovhnginx-sample"}
1.6475310840567749e+09  INFO    controller.ovhnginx     ℹ️ CR state ℹ️    {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "ovhNginx.Name": "ovhnginx-sample", " ovhNginx.Namespace": "test-go-operator", "ovhNginx.Spec.ReplicaCount": 2, "ovhNginx.Spec.Port": 8080}
1.647531084056868e+09   INFO    controller.ovhnginx     🔁 Number of replicas changes, update the deployment! 🔁        {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
1.647531084087546e+09   INFO    controller.ovhnginx     🔁 Port number changes, update the service! 🔁  {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
```

Let's take a look at the resources in your Kubernetes cluster:

```bash
kubectl get pod,svc -n test-go-operator
```

Output should be like this:

<pre class="console"><code>$ kubectl get pod,svc -n test-go-operator

NAME                                 READY   STATUS    RESTARTS   AGE
pod/ovhnginx-sample-d6557f99-86vl8   1/1     Running   0          3m25s
pod/ovhnginx-sample-d6557f99-jr9sg   1/1     Running   0          37m

NAME                      TYPE           CLUSTER-IP   EXTERNAL-IP      PORT(S)          AGE
service/ovhnginx-sample   LoadBalancer   10.3.84.52   135.XXX.XXX.206   8080:32549/TCP   37m
</code></pre>

// TODO: Add watcher to service deletion

Finally you can delete the CR to delete the Nginx pods:
```bash
kubectl delete ovhnginxes.tutorials.ovhcloud.com/ovhnginx-sample -n test-go-operator
```

Output should be like this:

<pre class="console"><code>$ kubectl delete ovhnginxes.tutorials.ovhcloud.com/ovhnginx-sample -n test-go-operator

ovhnginx.tutorials.ovhcloud.com "ovhnginx-sample" deleted
</code></pre>

At this time, the operator which is currently running detects the deletion of the CR:
```bash
...

1.6475322715005498e+09  INFO    controller.ovhnginx     ⚡️ Event received! ⚡️   {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
1.647532271500718e+09   INFO    controller.ovhnginx     Request:        {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator", "req": "test-go-operator/ovhnginx-sample"}
1.6475322715008829e+09  INFO    controller.ovhnginx     OvhNginx resource not found, check if a deployment must be deleted.     {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
1.647532271500972e+09   INFO    controller.ovhnginx     ☠️ Deployment exists: delete it. ☠️       {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
1.6475322715267258e+09  INFO    controller.ovhnginx     ☠️ Service exists: delete it. ☠️  {"reconciler group": "tutorials.ovhcloud.com", "reconciler kind": "OvhNginx", "name": "ovhnginx-sample", "namespace": "test-go-operator"}
```

Let's take a look at the resources in your Kubernetes cluster:

```bash
kubectl get pod,svc -n test-go-operator
```

Output should be like this:

<pre class="console"><code>$ kubectl get pod,svc -n test-go-operator

No resources found in test-go-operator namespace.
</code></pre>

You can now stop the local execution of the operator.
In the next chapter you will package it and you will deploy it in your Kubernetes Cluster.

### Deploy the operator on the OVHcloud Managed Kubernetes cluster

The Operator SDK create all resources needed to deploy your operator in the OVHcloud Managed Kubernetes.

> [!primary]
>
> You can have a look to the following files : `./Dockerfile`, `./config/rbac` and `./config/manager`.
>

First you need to update the `Makefile` at the root of the project to change the name and version of the generated image:
```makefile
# VERSION defines the project version for the bundle.
# Update this value when you upgrade the version of your project.
# To re-generate a bundle for another specific version without changing the standard setup, you can:
# - use the VERSION as arg of the bundle target (e.g make bundle VERSION=0.0.2)
# - use environment variables to overwrite this value (e.g export VERSION=0.0.2)
VERSION ?= 0.0.1

...

# IMAGE_TAG_BASE defines the docker.io namespace and part of the image name for remote images.
# This variable is used to construct full image tags for bundle and catalog images.
#
# For example, running 'make bundle-build bundle-push catalog-build catalog-push' will build and push both
# ovhcloud.com/nginx-go-operator-bundle:$VERSION and ovhcloud.com/nginx-go-operator-catalog:$VERSION.
IMAGE_TAG_BASE ?= [YOUR_PRIVATE_REGISTRY_URL]/example/nginx-go-operator

# BUNDLE_IMG defines the image:tag used for the bundle.
# You can use it as an arg. (E.g make bundle-build BUNDLE_IMG=<some-registry>/<project-name-bundle>:<tag>)
BUNDLE_IMG ?= $(IMAGE_TAG_BASE)-bundle:v$(VERSION)

...

# Image URL to use all building/pushing image targets
IMG ?= $(IMAGE_TAG_BASE):$(VERSION)

...
```

> [!warning]
> 
> If you use the last Mac M1, test can failed with the error `unable to start control plane itself: failed to start the controlplane. retried 5 times: exec: \"etcd\": executable file not found in $PATH"`. As mentioned in the following [issue](https://github.com/kubernetes-sigs/controller-runtime/issues/1657#issuecomment-988484517) you have to update `test` goal of the `Makefile` as following.
>

```makefile
...

.PHONY: test
test: manifests generate fmt vet envtest ## Run tests.
	KUBEBUILDER_ASSETS="$(shell $(ENVTEST) --arch=amd64 use $(ENVTEST_K8S_VERSION) -p path)" go test ./... -coverprofile cover.out

...
```

You can now build the image of your operator:

```bash
make docker-build
```

Output should be like this:

<pre class="console"><code>$ make docker-build
/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen rbac:roleName=manager-role crd webhook paths="./..." output:crd:artifacts:config=config/crd/bases
/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen object:headerFile="hack/boilerplate.go.txt" paths="./..."
go fmt ./...
go vet ./...
KUBEBUILDER_ASSETS="/Users/sphilipp/Library/Application Support/io.kubebuilder.envtest/k8s/1.23.3-darwin-amd64" go test ./... -coverprofile cover.out
?       github.com/ovhcloud-devrel/nginx-operator-go    [no test files]
?       github.com/ovhcloud-devrel/nginx-operator-go/api/v1     [no test files]
ok      github.com/ovhcloud-devrel/nginx-operator-go/controllers        5.356s  coverage: 0.0% of statements
docker build -t myregistryid.xxx1.container-registry.ovh.net/example/nginx-go-operator:0.0.1 .
[+] Building 53.9s (17/17) FINISHED                                                                                                                                                                          
 => [internal] load build definition from Dockerfile                                                                                                                                                    0.0s
 => => transferring dockerfile: 37B                                                                                                                                                                     0.0s
 => [internal] load .dockerignore                                                                                                                                                                       0.0s
 => => transferring context: 35B                                                                                                                                                                        0.0s
 => [internal] load metadata for gcr.io/distroless/static:nonroot                                                                                                                                       0.5s
 => [internal] load metadata for docker.io/library/golang:1.17                                                                                                                                          0.6s
 => [builder 1/9] FROM docker.io/library/golang:1.17@sha256:c7c94588b6445f5254fbc34df941afa10de04706deb330e62831740c9f0f2030                                                                            0.0s
 => [internal] load build context                                                                                                                                                                       0.0s
 => => transferring context: 3.68kB                                                                                                                                                                     0.0s
 => CACHED [stage-1 1/3] FROM gcr.io/distroless/static:nonroot@sha256:80c956fb0836a17a565c43a4026c9c80b2013c83bea09f74fa4da195a59b7a99                                                                  0.0s
 => CACHED [builder 2/9] WORKDIR /workspace                                                                                                                                                             0.0s
 => [builder 3/9] COPY go.mod go.mod                                                                                                                                                                    0.1s
 => [builder 4/9] COPY go.sum go.sum                                                                                                                                                                    0.0s
 => [builder 5/9] RUN go mod download                                                                                                                                                                  16.3s
 => [builder 6/9] COPY main.go main.go                                                                                                                                                                  0.0s
 => [builder 7/9] COPY api/ api/                                                                                                                                                                        0.0s
 => [builder 8/9] COPY controllers/ controllers/                                                                                                                                                        0.0s
 => [builder 9/9] RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -o manager main.go                                                                                                             36.7s
 => [stage-1 2/3] COPY --from=builder /workspace/manager .                                                                                                                                              0.1s
 => exporting to image                                                                                                                                                                                  0.1s
 => => exporting layers                                                                                                                                                                                 0.1s
 => => writing image sha256:6b56ce32852953c08409699dcdc4b64fff6336a782395a236f80fcd63b9a172c                                                                                                            0.0s
 => => naming to myregistryid.xxx1.container-registry.ovh.net/example/nginx-go-operator:0.0.1 
</code></pre>

Then, push the image to your favorite registry.
In order to create a private registry, you can follow the [how to create an OVHcloud private registry](../../private-registry/creating-a-private-registry/) tutorial.

```bash
docker login [YOUR_PRIVATE_REGISTRY_URL]
docker push [YOUR_PRIVATE_REGISTRY_URL]/example/nginx-go-operator:0.0.1
```

Output should be like this:

<pre class="console"><code>$ docker login https://myregistryid.xxx1.container-registry.ovh.net

Login Succeeded

$ docker push myregistryid.xxx1.container-registry.ovh.net/example/nginx-go-operator:0.0.1
The push refers to repository [myregistryid.xxx1.container-registry.ovh.net/example/nginx-go-operator]
5f70bf18a086: Pushed 
4edd44e1433c: Pushed 
35217553513b: Pushed 
7766e4bae829: Pushed 
895f2ebb55fa: Pushed 
ede2e4397fdc: Pushed 
87cd41b1f9f8: Pushed 
44f62afd0479: Pushed 
0.0.1: digest: sha256:509549a6bac0a2e52a19b4bbac80b5411a2c0fe581c5fbd2cc6b4a456e339eb3 size: 1984
</code></pre>

If you are using a private registry, as in the example, you have to create a secret.
First, create a base 64 version of your Docker credentials:

```bash
base64 -i ~/.docker/config.json
```

Output should be like this:

<pre class="console"><code>$ base64 -i ~/.docker/config.json

Tm8gaXQncyBub3QgbXkgcGFzc3dvcmQgOik=
</code></pre>

Then, create a `registry_secret.yaml` file in the directory `./config/rbac`:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: registry-secret
  namespace: system
data:
  .dockerconfigjson: Tm8gaXQncyBub3QgbXkgcGFzc3dvcmQgOik=
type: kubernetes.io/dockerconfigjson
```

> [!primary]
>
> The `.dockerconfigjson` field value is the previous base 64 encoding result of your Docker's configuration.
>

Then, add the secret file name in the files list in the `kustomization.yaml` file in the `./config/rbac`directory:
```yaml
resources:
# All RBAC will be applied under this service account in
# the deployment namespace. You may comment out this resource
# if your manager will use a service account that exists at
# runtime. Be sure to update RoleBinding and ClusterRoleBinding
# subjects if changing service account names.
- service_account.yaml
- role.yaml
- role_binding.yaml
- leader_election_role.yaml
- leader_election_role_binding.yaml
- registry_secret.yaml
# Comment the following 4 lines if you want to disable
# the auth proxy (https://github.com/brancz/kube-rbac-proxy)
# which protects your /metrics endpoint.
- auth_proxy_service.yaml
- auth_proxy_role.yaml
- auth_proxy_role_binding.yaml
- auth_proxy_client_clusterrole.yaml
```

The last step is to deploy your operator in the Kubernetes cluster.<br>
Thanks to the Operator SDK it's done in one line:

```bash
make deploy
```

Output should be like this:

<pre class="console"><code>$ make deploy

/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/controller-gen rbac:roleName=manager-role crd webhook paths="./..." output:crd:artifacts:config=config/crd/bases
cd config/manager && /Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/kustomize edit set image controller=myregistryid.xxx1.container-registry.ovh.net/example/nginx-go-operator:0.0.1
/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/kustomize build config/default | kubectl apply -f -
namespace/nginx-go-operator-system created
customresourcedefinition.apiextensions.k8s.io/ovhnginxes.tutorials.ovhcloud.com created
serviceaccount/nginx-go-operator-controller-manager created
role.rbac.authorization.k8s.io/nginx-go-operator-leader-election-role created
clusterrole.rbac.authorization.k8s.io/nginx-go-operator-manager-role created
clusterrole.rbac.authorization.k8s.io/nginx-go-operator-metrics-reader created
clusterrole.rbac.authorization.k8s.io/nginx-go-operator-proxy-role created
rolebinding.rbac.authorization.k8s.io/nginx-go-operator-leader-election-rolebinding created
clusterrolebinding.rbac.authorization.k8s.io/nginx-go-operator-manager-rolebinding created
clusterrolebinding.rbac.authorization.k8s.io/nginx-go-operator-proxy-rolebinding created
configmap/nginx-go-operator-manager-config created
secret/nginx-go-operator-registry-secret created
service/nginx-go-operator-controller-manager-metrics-service created
deployment.apps/nginx-go-operator-controller-manager created
</code></pre>

You can, agin, test the operator.<br>
In needed, recreate the namespace `test-go-operator`. <br>
Apply the CR `tutorials_v1_ovhnginx.yaml` of the `./config/samples` folder:

```bash
kubectl apply -f ./config/samples/tutorials_v1_ovhnginx.yaml -n test-go-operator
```

Output should be like this:

<pre class="console"><code>$ kubectl apply -f ./config/samples/tutorials_v1_ovhnginx.yaml -n test-go-operator

ovhnginx.tutorials.ovhcloud.com/ovhnginx-sample created
</code></pre>

The operator must have created the Nginx pod and its service:

```bash
kubectl get pod,svc -n test-go-operator
```

Output should be like this:

<pre class="console"><code>$ kubectl get pod,svc -n test-go-operator

NAME                                 READY   STATUS    RESTARTS   AGE
pod/ovhnginx-sample-d6557f99-bhlnl   1/1     Running   0          3m13s
pod/ovhnginx-sample-d6557f99-hwjfb   1/1     Running   0          3m13s

NAME                      TYPE           CLUSTER-IP    EXTERNAL-IP       PORT(S)          AGE
service/ovhnginx-sample   LoadBalancer   10.3.142.85   152.XXX.XXX.209   8080:30946/TCP   3m13s
</code></pre>

## Cleanup

If you want, you can uninstall the Nginx server and the operator.<br>
First, delete your CR to delete the deployed Nginx server:

```bash
kubectl delete ovhnginxes.tutorials.ovhcloud.com/ovhnginx-sample -n test-go-operator
```

Then, delete the namespace:

```bash
kubectl delete ns test-go-operator
```

Then, delete all resources and the operator itself:

```bash
make undeploy
```

Output should be like this:

<pre class="console"><code>$ kubectl delete ovhnginxes.tutorials.ovhcloud.com/ovhnginx-sample -n test-go-operator

ovhnginx.tutorials.ovhcloud.com "ovhnginx-sample" deleted

$ kubectl delete ns test-go-operator

namespace "test-go-operator" deleted

$ make undeploy

/Users/sphilipp/dev/ovh/corp/tutorials-code/nginx-go-operator/bin/kustomize build config/default | kubectl delete --ignore-not-found=false -f -
namespace "nginx-go-operator-system" deleted
customresourcedefinition.apiextensions.k8s.io "ovhnginxes.tutorials.ovhcloud.com" deleted
serviceaccount "nginx-go-operator-controller-manager" deleted
role.rbac.authorization.k8s.io "nginx-go-operator-leader-election-role" deleted
clusterrole.rbac.authorization.k8s.io "nginx-go-operator-manager-role" deleted
clusterrole.rbac.authorization.k8s.io "nginx-go-operator-metrics-reader" deleted
clusterrole.rbac.authorization.k8s.io "nginx-go-operator-proxy-role" deleted
rolebinding.rbac.authorization.k8s.io "nginx-go-operator-leader-election-rolebinding" deleted
clusterrolebinding.rbac.authorization.k8s.io "nginx-go-operator-manager-rolebinding" deleted
clusterrolebinding.rbac.authorization.k8s.io "nginx-go-operator-proxy-rolebinding" deleted
configmap "nginx-go-operator-manager-config" deleted
secret "nginx-go-operator-registry-secret" deleted
service "nginx-go-operator-controller-manager-metrics-service" deleted
deployment.apps "nginx-go-operator-controller-manager" deleted
</code></pre>

## What’s next

To go deeper on Kubernetes operators topic, follow others [Kubernetes'](../) tutorials in the `Operators` section.

## Go further

Join our community of users on <https://community.ovh.com/en/>.  
The [operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) pattern in Kubernetes.  
The operator [SDK](https://operatorframework.io/operator-capabilities/).
