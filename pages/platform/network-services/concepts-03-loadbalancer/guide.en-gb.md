---
title: Concepts - Load Balancer
excerpt: "Understand the configuration concepts that are powering the Public Cloud Load Balancer"
updated: 2023-08-11
---

## Objective
The Public Cloud Load Balancer (based on Octavia Openstack project) provides a lot of features and its configuration can be complex. The goal of this page is to explain the different configuration concepts that are powering the Load Balancer so that you have a high level understanding of all the features and the associated configuration items.


## Load Balancer Configuration concepts
![LB concepts](./LB_concepts.svg)

### Listener
The listener specifies a listening endpoint where the incoming traffic is received. Its mains attributes are the protocol and the port, for instance `HTTPS` and `443`. Note that you can have multiple listeners on one Load Balancer.


### Pool
A pool specifies a group of members to which the listener forwards client requests. A pool is associated to one listener. For complex configuration using L7 Policies, a listener can be associated to multiple pools.
The main pool attributes are the load balancing algorithm (e.g. `Round Robin`) and the protocol that is used to query the members e.g. `HTTPS` 

### Member
A member represents the configuration for a target back-end server to which the traffic is sent. Its main attributes are its IP e.g. `192.168.1.10` and a port e.g. `443`. A member is part of a pool. 

### Health Monitor
The Health Monitor defines how the load balancer will check the health of the pool members. Its main attributes are the check method e.g. `PING` with various delays and timeouts. It is associated with exactly one Pool.  
   
###  L7 Rule
a L7 Rule is a single logical expression that is used to match a condition present in a given HTTP or terminated HTTPS request. L7 rules typically match against a specific header or part of the URI. An L7 rule is associated with exactly one L7 policy.
For example, a L7 rule can evaluate if an URI begins with “/api”.

###  L7 Policy
A L7 Policy associates one or many L7 rules to a listener. It main attribute is the action that is performed it the L7 rules all returns `true`. For example, a user could specify an L7 policy that any client request that matches the L7 rule “request URI starts with ‘/api’” should get routed to a specific “api” pool.


## Going Further

- An exhaustive technical documentation on [openstack project page](https://docs.openstack.org/octavia/latest/).

- Configure your first load balancer with this [guide](../getting-started-01-create-lb-service)