```
 __    __    ______     ______    __  ___         __    ______   
|  |  |  |  /  __  \   /  __  \  |  |/  /        |  |  /  __  \  
|  |__|  | |  |  |  | |  |  |  | |  '  /         |  | |  |  |  | 
|   __   | |  |  |  | |  |  |  | |    <          |  | |  |  |  | 
|  |  |  | |  `--'  | |  `--'  | |  .  \    __   |  | |  `--'  | 
|__|  |__|  \______/   \______/  |__|\__\  (__)  |__|  \______/  

```
## Build and deploy HTTP microservices in seconds

To start using hook.io visit the website at [http://hook.io](http://hook.io). Here you will find many examples and documentation on how to use hook.io

## Creating new Hooks

It's very simple. Go to [http://hook.io](http://hook.io)

## Support

If you run into an issue, have a question, or have feedback with using hook.io you can open up a Github Issue by [clicking here](http://github.com/bigcompany/hook.io/issues/new)

## Adding new NPM Modules to hook.io

The fastest way to get an additional NPM module added to the hook.io platform is to open up a Pull Request modifying [this file](http://github.com/bigcompany/hook.io/blob/master/modules/modules.js).

If your module requires additional dependencies outside of what NPM can install, you can create a custom build script in [this folder](http://github.com/bigcompany/hook.io/blob/master/modules/builds/). The hosting environment for hook.io is `Ubuntu 14.04.1 LTS`. Bash scripts are recommended.

## Contributing

Contributions are welcomed and much appreciated. Simply open up a Github Pull Request to start the discussion.

All contributors must sign our <a href="https://www.clahub.com/agreements/bigcompany/hook.io">Contributor License Agreement</a>. 

This is a simple document to help protect both the hook.io project and your rights as a contributor.

## Dependency Tree

hook.io itself is not a very large application. The majority of what powers hook.io is already MIT open-sourced and available for immediately download.

Learning about the following dependencies is a great way to start understanding how [hook.io](http://hook.io) works.

 - [big](http://github.com/bigcompany/big)
 - [resource](http://github.com/bigcompany/resource)
 - [resource-http](http://github.com/bigcompany/resource-http)
 - [resource-mesh](http://github.com/bigcompany/resource-mesh)
 - [resource-user](http://github.com/bigcompany/resource-user)
 - [view](http://github.com/bigcompany/view)
 - [mschema](http://github.com/mschema/mschema)

## Server Source Code

Soon, the source code that runs the live [hook.io](http://hook.io) site will be open-sourced so that you can run your own private hook.io servers!

It's important for us that the experience of setting up a local server is as seamless as using http://hook.io

Once our private hook.io reaches this level of completeness we will release it.
