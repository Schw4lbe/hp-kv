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

- assign captcha state for solving persistant

### ContactPopup

- assign contact popup state for persistant reaction
- create timer (tbd with costumer)

### ContactSection

- add desc. text for contact section
- add desc. text to explain purpose of captcha
- position text on captcha position
- make text disapear on captcha activate
- after captcha display new text
- new text content gives advice on e-mail info for better help

### FooterMain

- include copyright element and own new logo

### GallerySection

- ok

### ImgGallery

- ok

### ImgModal

- Make Modal Images be swipeable
- fix sizing on mobile devices in horizontal view
- make header and description drop into image on mobile horizontal view
- make control icons better vissible

### KnowledgeBaseSection

- have cards with image and short header displayed
- on hover rotate to backside with short text and button "see more info"
- in desktop view auto rotate first item infinite/2 - 3 times (15sec intervall)
- on mobile always rotate image in viewport middle (Intersection Observer API)
- remove/add certain classes whenever a breakpoint is reached (window.matchMedia())

### MainSection

- ok

### NavbarMain

- navbar current item highlight

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
