---
title: Pushing logs with a logging library - Rust - gelf_logger and log4rs-gelf
updated: 2024-07-19
---

## Objective

This guide will explain how to push your logs to Logs Data Platform using Rust.

Rust has a logging implementation ([log](https://docs.rs/log/*/log/){.external}) which is widely used. OVHcloud has implemented this system to support the [GELF format](https://go2docs.graylog.org/4-x/getting_in_log_data/gelf.html?tocpath=Getting%20in%20Log%20Data%7CLog%20Sources%7CGELF%7C_____0#GELFPayloadSpecification#gelf-payload-specification){.external}:

- **gelf_logger**: This is a minimal logger.
- **log4rs-gelf**: Based on _gelf_logger_, this implementation is compatible with the complex configurable framework [log4rs](https://docs.rs/log4rs/*/log4rs/){.external}.

Those loggers will:

- serialize log entries using the serde_gelf crate.
- bufferize the result into memory.
- batch send over network using TCP/TLS.
- a facility to ensure fields suits the [LDP naming conventions](/pages/manage_and_operate/observability/logs_data_platform/getting_started_field_naming_convention).

## Requirements

To complete this guide you will need:

- Rust, we recommend the last stable version.
- [Activated your Logs Data Platform account.](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-account~productId~%27logs%29){.external}
- [To create at least one Stream and get its token.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Install the **serde** crate with the **serde_derive** feature.
- Install the **log** crate with the **serde** feature.


## gelf_logger

You can install the **gelf_logger** crate by adding the dependency to your `Cargo.toml`:

```toml
[dependencies]
gelf_logger = { version = "0.3.0", features = ["ovh-ldp"] }
```

Alternatively, the following cargo command will install it:

```shell-session
$ cargo add gelf_logger -F ovh-ldp
```


Here is a full main.rs file showing how to use the **log** and the **gelf_logger** API.

```rust
use gelf_logger::{
    gelf_alert, gelf_critical, gelf_debug, gelf_emergency, gelf_error, gelf_info, gelf_log,
    gelf_notice, gelf_warn, Builder, GelfLevel,
};
use log::{error, info, warn, LevelFilter};
use serde::Serialize;

#[derive(Serialize, Debug)]
struct Request<'a> {
    id: u16,
    method: &'a str,
    path: &'a str,
}

fn main() {
    Builder::new()
        .filter_level(LevelFilter::Info)
        .ovh_ldp(
            "<YOUR-LDP-CLUSTER-ADDRESS>".to_owned(),
            "<YOUR-WRITE-TOKEN>".to_owned(),
        )
        .init();

    // basic logs
    info!("hello from rust");

    // Basic key-value logs.
    info!(count = 5; "packet received");
    warn!(user = "foo"; "unknown user");
    error!(err:err = "abc".parse::<u32>().unwrap_err(); "parse error");

    let req = Request {
        id: 42,
        method: "GET",
        path: "/login",
    };
    // Will serialize as a `Debug` string.
    info!(req:?; "incoming request");
    // Will flatten all the field and add them as additional fields.
    info!(req:serde; "incoming request flattened");

    // Gelf specific levels.
    gelf_log!(GelfLevel::Emergency, foo = "bar"; "an emergency log");
    gelf_emergency!(foo = "bar"; "an emergency log");
    gelf_alert!(foo = "bar"; "an alert log");
    gelf_critical!(foo = "bar"; "a critical log");
    gelf_error!(foo = "bar"; "an error log");
    gelf_warn!(foo = "bar"; "a warn log");
    gelf_notice!(foo = "bar"; "a notice log");
    gelf_info!(foo = "bar"; "an info log");
    gelf_debug!(foo = "bar"; "a debug log");

    // Flush underlying TCP socket.
    // This will only flush. The socket may be dropped without proper closing.
    log::logger().flush();
}
```

Don't forget to modify the placeholder **<YOUR-LDP-CLUSTER-ADDRESS>** to the cluster where your stream resides. There is no need to put the Gelf port. Example: "gra3.logs.ovh.com".

Don't forget to modify the placeholder **<YOUR-WRITE-TOKEN>** to the actual value of the write token of your stream.

You could also look at the [generated API documentaton](https://docs.rs/gelf_logger/*){.external}.

## log4rs-gelf

Install **log4rs** and **log4rs-gelf** in your Rust project.


Here is the modified Cargo.toml file:

```toml
[dependencies]
log = { version = "0.4.22", features = ["serde"] }
log4rs = "1.3.0"
log4rs-gelf = { version = "0.1.4", features = ["ovh-ldp"] }
serde = { version = "1.0.204", features = ["derive"] }
```

Alternatively, use the following cargo commands:


```shell-session
$ cargo add log4rs
```

```shell-session
$ cargo add log4rs-gelf -F ovh-ldp
```


### Examples

#### From a YAML configuration file

```yaml
appenders:
  ldp:
    additional_fields:
      component: rust-cs
    buffer_duration: 5
    buffer_size: 5
    hostname: 127.0.0.1
    kind: buffer
    level: Informational
    null_character: true
    port: 12202
    use_tls: false
root:
  appenders:
  - ldp
  level: info
```

And then:

```rust
use core::time;
use std::thread::sleep;

use log::{info, warn};

fn main() {
    // reading
    log4rs_gelf::init_file("./log4rs.yml", None).unwrap();

    // using log crate APIs
    info!("Hello from rust");
    warn!("Warning from rust");

    // simulating some work (log framework is asynchronous)
    sleep(time::Duration::from_secs(5));

    // flushing remaining logs
    log4rs_gelf::flush().expect("Failed to send buffer, log records could be lost !");
}

```

You could also look at the [generated API documentation](https://docs.rs/log4rs-gelf/*){.external}.

## Go further

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
