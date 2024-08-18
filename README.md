# hp-kv

### Backlock

### new pot. elements

- Intro Animation scene? even wanted?

# flow for popups

1. privacy popup
2. on click ok start timer second popup
3. on click close or contact no more popups
4. disable timer while in modal img
5. after closing modal activate contact popup directly

# Element Status & to-dos:

### ContactCaptcha

- cut out last empty string in captcha
- check why typing on enter on smartphone leads to scrool up to top instead of assigning the captcha phrase correctly
- assign captcha state for solving persistant

### ContactPopup

- assign contact popup state for persistant reaction
- create timer (tbd with costumer)

### ContactSection

- ok

### FooterMain

- include copyright element and own new logo

### GallerySection

- ok

### ImgGallery

- ok

### ImgModal

- check fullscreen requests on modal to avoid browser bar taking space from image

### KnowledgeBaseSection

- ok

### MainSection

- ok

### NavbarMain

- navbar current item highlight
- navbar in desktop making text bigger and icon next to text (feels strange having this small of a navbar in desktop view right now)

### PrivacyPopup

- ok

### ServiceSection

- ok

### HomeView

- ok

### ImprintView

- create full content

### PrivacyView

- create full content

### General for Production

- embedd post css and gulp
- create compressed css
- consider using uglyfier
- refactor components and outsource duplicate functions into utils.js
- refactor scss and create global styling partial for repeating element stylings (header, container)
