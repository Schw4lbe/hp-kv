# hp-kv

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Backlock

- Intro Animation scene? even wanted?

- Make Modal Images be swipeable
- navbar on active scroll allmost fully transparent
- navbar mobile collapse view on breakpoint xs
- navbar current item highlight

- refactor components and outsource duplicate functions into utils.js
- refactor scss and create global styling partial for repeating element stylings (header, container)

# knowledge base

- have cards with image and short header displayed
- on hover rotate to backside with short text and button "see more info"
- in desktop view auto rotate first item infinite/2 - 3 times (15sec intervall)
- on mobile always rotate image in viewport middle (Intersection Observer API)
- remove/add certain classes whenever a breakpoint is reached (window.matchMedia())

# flow for popups

1. privacy popup
2. on click ok start timer second popup
3. on click close or contact no more popups
4. disable timer while in modal img
5. after closing modal activate contact popup directly
