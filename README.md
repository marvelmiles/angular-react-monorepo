## Angular-React Monorepo Integration Demo

This project demonstrates the seamless integration of Angular and React components within a single monolithic app using the NX Monorepo tools. The primary goal is to leverage the power of both frameworks in a cohesive application that allows Angular to manage routing and state while React is responsible for handling dynamic data visualizations.

## Note

### NX Build for production hosting

To deploy nx for CI hosting, Add `tasksRunnerOptions` to specify that you want to use the local runner instead of the cloud runner, remove the nxCloudId line.

```sh

"tasksRunnerOptions": {
"default": {
"runner": "nx/tasks-runners/default",
"options": {
"cacheableOperations": ["build", "lint", "test"],
"accessToken": "not-needed"
    }
  }
}

```

### Features

- Monorepo Architecture: Both Angular and React apps live in the same repository, using NX to manage their dependencies and build processes efficiently.

- Data Visualization: The React component renders interactive charts and visual data representations.

- Form Input & Validation: Angular manages user input for chart configurations (aspect ratio and colors), validating the input before passing it to the React component.

### Architecture

- Angular: Handles routing and form inputs.

- React: Responsible for rendering data visualizations, making use of reusable components for dynamic updates.

### Key Challenge

- Shadow DOM Encapsulation Issue

  - Challenge: Initially, I attempted to use Shadow DOM encapsulation for the custom Web Component that renders the React visualizer. However, TailwindCSS and React components do not render properly inside the Shadow DOM due to style isolation.

  - Solution: Instead of using the Shadow DOM, I manually retrieved the DOM from the app.component.html in Angular and mounted the React component onto it. This approach bypasses the style isolation issue, allowing TailwindCSS to be applied globally and making the integration smoother.

#

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your remote caching setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/yAkVldjWPq)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve angular-app
```

To create a production bundle:

```sh
npx nx build angular-app
```

To see all available targets to run for a project, run:

```sh
npx nx show project angular-app
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To create a new project, use:

```sh
npx create-nx-workspace@latest project-name
```

To add a new plugin (e.g react), use:

```sh
npx nx g @nx/[plugin_name]
```

To generate a new application, cd into apps and run:

```sh
npx nx g @nx/[plugin_name]:app app-name
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

### Note

Install nx console extension on your editor to run this commands easily.

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
