# About 

Loading spinner that covers all or some of the screen with animation.

When it is shown, if covers with a gray transparent layer the area blocking the user to interact with the covered container.

Fully customizable and simple.

Written in Typescript but runs everywhere.

# Demo

`npm start`

# Props

Only the `show` is required!

```
interface IDynaIsLoadingProps {
	className?: string;                 // for custom styles
	show: boolean;                      // (required) show it or not 
	fullScreen?: boolean;               // will cover the while screen
	spinner?: JSX.Element;              // react component will be shown as spinner
	message?: JSX.Element | string;     // message will be shown under the spinner
	onClick?: () => void;               // click event
}
```

# Usage

The visibility is controlled from the `show` prop.

Render always the `dyna-ui-is-loading` to get the animations effect. Handle the visibility from the `show` prop only. 

## On a div or any container

Render it in any container.

In this container you should apply the style `position: relative`.

This because the the `dyna-ui-is-loading` component will apply to itself `position: absolute` to cover the whole area of the parent container.

## On full screen

Render it in any container, `fullScreen: true`.

The `dyna-ui-is-loading` will be rendered in a dynamic container that will be created as last child in the `body`. This is supported from the [dyna-ui-modal-container](https://github.com/aneldev/dyna-ui-modal-container), for more about this read there but you don't need anything more really. 

## Style

Do it with the classic way

- apply a class name
- style this class overriding few styles

## Apply your custom `spinner`

The `spinner` property expects a react component. You can create your own super dooper spinner and pass it to `dyna-ui-is-loading`, since the `dyna-ui-is-loading` is actually a nice container to is loading spinners that cover some or all screen with animation.

# Dependency Font Awesome 4 (web font)

**Note: this is only for the default spinner.** 

You can apply your own spinner to `spinner` prop _where is a react component_, but if you want to use the default one you have to add this dependency.

## Load in your app

```
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```

## Other spinners from Font Awesome 4

https://fontawesome.com/v4.7.0/examples/#animated