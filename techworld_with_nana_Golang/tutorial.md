# GO

* Programming language developed at google in 2007
* Open-sourced in 2009

> Why another programming language?
> * Infrastructure changed a lot
> * Cloud infrastructure
> * Big networked computation clusters
>
> which resulted in,
> * Scalable & Distributed systems
> * Dynamic
> * More capacity
> * 1 task at a time vs doing multiple tasks at once

* Example - Google drive (Upload, Download & Browse at same time) and Google Docs (two persons editing at same time without overlapping)
> * **Concurrency** is about dealing with lots of things at once
* Developers need to write code to prevent conflicts
  * When tasks run in parallel
  * accessing shared data
* Built-in Concurrency mechanisms (C++, Java and Go) vs No Built-in Concurrency mechanisms (Python and Node.js) - Complex code, Expensive & Slow

>* **Go** was designed to **run on multiple cores** and built to support **concurrency**
>* Concurrency in Go is cheap and easy

> * **Main Use case of Go** => ( __Server side__ | __BACKEND__ ) For performant applications, Running on scaled, distributed systems => **Microservices**, **Web applications** and **Database services** => Docker, HashiCorp vault, Kubernetes and Cockroach DB

> **Simple and Readable syntax** of a dynamically typed language like (_Python_) + **Efficiency and Safety** of a lower-level, statically typed language like (_C++_) + **Fast build** time, start up and run + Requires **fewer resources**
>
> > Compiled Language => Compiles into single binary (machine code)
> * Faster than interpreted languages, like python
> * Consistent across different OS
>   * Simplicity + Speed
>   * Simple automation & Command line tools
>   * Devops and SRE applications