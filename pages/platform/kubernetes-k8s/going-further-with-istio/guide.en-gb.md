---
title: 'Going further with Istio on OVH Managed Kubernetes'
slug: going-further-with-istio
excerpt: 'Find out how to go further with Istio on OVH Managed Kubernetes'
section: Tutorials
---

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

**Last updated 1<sup>st</sup> July, 2019.**

[Istio](https://istio.io){.external} is a open source service mesh and platform to reduce the complexity of deploying, securing, controlling and observing distributed services. As the Istio site explains, Istio helps you to:

- Control the flow of traffic between services
- Secure the services and manage the authentication, authorization and encryption of inter-service communications
- Apply and enforce policies on distributes services
- Monitor the services gathering metrics, logs and traces

In this tutorial we are showing some advanced features of Istio, and how you can use them on your OVH Managed Kubernetes cluster.


## Before you begin

This tutorial presupposes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

It also supposes you have a basic knowledge of Istio, and that you have installed it in your Kubernetes cluster. If it isn't the case, please follow the [Installing Istio on OVH Managed Kubernetes](../installing-istio/) tutorial. We are going to use the [Bookinfo](https://istio.io/docs/examples/bookinfo/){.external} example application, as we did in that tutorial, so if you haven't installed it, please do it now.


## A/B Testing with Istio

[A/B Testing](https://en.wikipedia.org/wiki/A/B_testing) is used when we want to try two different versions of an application and compare user interaction and engagement to choose the best one. It requires to be able to push the two versions into production at the same time, split traffic between the two versions, and collect metrics to be able to do an informed choice.

A/B Testing used to be a difficult problem with traditional deployment methods, and it's very hard to do it directly in Kubernetes since there is no notion of versions, but Istio make it rather simple. 

Let's use the Bookinfo  application to show how easily you can do A/B Testing on Kubernetes with Istio. The Bookinfo application composed of four separate microservices: 

- `productpage`: it calls the `reviews` and `details` service and build the page
- `reviews`: it contains with book reviews, and it calls the `rating` service
- `details`: it contains the book information
- `ratings`: it contains the book rating information

To setup A/B Testing on Bookinfo we are using the `reviews` microservice, as it has three versions:

- `v1`: it doesn't call the `ratings` service
- `v2`: it calls the `ratings` service and displays the rating as black stars
- `v3`: it calls the `ratings` service and displays the rating as red stars

![Bookinfo architecture]()

By default, the Bookinfo install deploys the three versions without explicit routing definitions. Istio then routes the requests to all available versions of `reviews` in a round robin fashion, so sometimes the book review output contains star ratings and other times it does not.

Let's say we want to send 50% of traffic to `v2` and get the black stars, and the other 50% to `v3` and its red stars. We can create a `VirtualService` to define this behavior:

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
    - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v2
      weight: 50
    - destination:
        host: reviews
        subset: v3
      weight: 50
```

Write down the `VirtualService` into a `review-50-v2-50-v3.yaml` file and apply it:

```bash
kubectl apply -f review-50-v2-50-v3.yaml
```

and confirm that the rule is created:

```bash
kubectl get virtualservice reviews -o yaml
```

Now, on the `/productpage` of the Bookinfo app, at every refresh you will see that stars change alternatively between back (`v2`) and red (`v3`).

