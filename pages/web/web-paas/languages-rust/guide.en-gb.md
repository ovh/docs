---
title: Rust
slug: languages-rust
section: Languages
order: 4
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} supports building and deploying applications written in Rust.

## Supported versions

{{% major-minor-versions-note %}}

| Grid and {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|----------------------------------------|------------------------------ |
| - 1 |

## Dependencies

The recommended way to handle Rust dependencies on {{< vendor/name >}} is using Cargo.
Commit a `Cargo.toml` and a `Cargo.lock` file in your repository
so the system automatically downloads dependencies using Cargo.

## Building and running your app

Assuming your `Cargo.toml` and `Cargo.lock` files are present in your repository,
you can build your app using the `cargo build` command to produce a working executable.

You can then start it from the `web.commands.start` directive.
Note that the start command _must_ run in the foreground.
If the program terminates for any reason it is automatically restarted.

The following basic [app configuration](../../create-apps/_index.md) is sufficient to run most Rust apps.
See the [complete example](#complete-example) below for more details.

```yaml {configFile="app"}

# The app's name, which must be unique within the project.
name: 'app'

# The language and version for your app.
type: 'rust:1'

# The size of the app's persistent disk (in MB).
disk: 2048

hooks:
  build:
    cargo build

web:
  commands:
      # Customize the start command with your own target.
      start: './target/debug/hello'
  
  locations:
        /:
            # Route all requests to the Rust app, unconditionally.
            # If you want some files served directly by the web server without hitting Rust, see
            # https://docs.platform.sh/create-apps/app-reference.html
            allow: false
            passthru: true
```

Note that there is still an Nginx proxy server sitting in front of your application. If desired, certain paths may be served directly by Nginx without hitting your application (for static files, primarily) or you may route all requests to the Rust app unconditionally, as in the example above.

## Built-in variables

{{< vendor/name >}} exposes relationships and other configuration as [environment variables](../development/variables/_index.md).

To get the `PORT` environment variable (the port on which your app is supposed to listen),
use the following snippet:

```rust
let port : String = env::var("PORT").unwrap_or(String::from("8888"));
```

Note that some of the environment variables are in JSON format and are base64 encoded.
For example, to decode the `PLATFORM_RELATIONSHIPS` environment variable,
use the following snippet: 

```rust
    use base64::{Engine as _, engine::{general_purpose}};
    use serde_json::Value;

    let bytes = general_purpose::STANDARD.decode(env::var("PLATFORM_RELATIONSHIPS").unwrap_or(String::new())).unwrap();
    let psh_config: Value = serde_json::from_slice(&bytes).unwrap();
    println!("{}", psh_config["database"]);
```

## Complete example

Here is a basic hello world app to illustrate how you can use Rust with {{< vendor/name >}}. 
It builds from a `hello.rs` file to serve a static `index.html`.
Follow these steps:

1\. [Install Rust and Cargo](https://www.rust-lang.org/tools/install).


2\. Create a repository for your app and add the following `Cargo.toml` file:


```toml
[package]
name = "hello_world"
version = "0.1.0"
edition = "2021"

[[bin]]
name = "hello"
path = "hello.rs"

[dependencies]
time = "0.1.12"
regex = "0.1.41"
base64 = "0.21.0"
serde = { version = "1.0", features = ["derive"] }

serde_json = "1.0"
```

3\. Add the following [app configuration](../../create-apps/_index.md):


```yaml {configFile="app"}

# The app's name, which must be unique within the project.
name: 'app'

# The language and version for your app.
type: 'rust:1'

# The size of the app's persistent disk (in MB).
disk: 2048

hooks:
  build:
    cargo build

web:
  commands:
      start: './target/debug/hello'
```

4\. To generate a `Cargo.lock` file,

   run the following command:

```bash
cargo generate-lockfile
```

5\. Add the following `hello.rs` file:


```rust
/* Simple HTTP Server */
/* Author : Ramesh Vyas */
use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::fs;
use std::env;

fn main() {
 
    /* Creating a Local TcpListener at Port 8888 */
    const HOST : &str ="127.0.0.1";
    let port : String = env::var("PORT").unwrap_or(String::from("8888"));

    /* Concating Host address and Port to Create Final Endpoint */
    let end_point : String = HOST.to_owned() + ":" +  &port;

    /*Creating TCP Listener at our end point */
    let listener = TcpListener::bind(end_point).unwrap();

    println!("Web server is listening at port {}",port);

    /* Connecting to any incoming connections */
    for stream in listener.incoming() {
        let _stream = stream.unwrap();
        // Call Function to process any incomming connections
        handle_connection(_stream);
    }
 
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    stream.read(&mut buffer).unwrap();

    let get = b"GET / HTTP/1.1\r\n";

    if buffer.starts_with(get) {
        let contents = fs::read_to_string("index.html").unwrap();

        let response = format!(
            "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}",
            contents.len(),
            contents
        );

        stream.write(response.as_bytes()).unwrap();
        stream.flush().unwrap();
    } else {
        // some other request
    }
}
```
