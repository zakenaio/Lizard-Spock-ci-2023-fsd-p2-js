# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

![HTML Validation](documentation/test-w3html.png)

- https://validator.w3.org/nu/?doc=https%3A%2F%2Fzakenaio.github.io%2FLizard-Spock-ci-2023-fsd-p2-js%2Findex.html


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

![CSS Validation](documentation/test-w3css.png)


Link for testing of the live site.
- https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fzakenaio.github.io%2FLizard-Spock-ci-2023-fsd-p2-js%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv  


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

![JavaScript Validation](documentation/test-javascript.png)


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser |  |
| --- | --- |
| Brave | ![screenshot](documentation/test-browser-brave.png) | 
| | Works as expected |
| Edge | ![screenshot](documentation/test-broswer-edge.png) | 
| | Works as expected |
| Safari macOS | ![screenshot](documentation/test-browser-safari.png) |
| | Here the reset button is by itself, will see if i can find a solution. |
| Firefox macOS | ![screenshot](documentation/test-browser-firefox.png) |
| | Here the reset button is by itself, will see if i can find a solution. |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | DevTools | On Device |
| --- | --- | --- |
| Mobile  | ![mobile dev](documentation/test-respons-mobile.jpg) | ![pixel 7p](documentation/test-respons-mobile-p7.png) |
| Tablet  | ![tablet dev](documentation/test-respons-tablet.jpg) | ![tablet samsung](documentation/test-respons-tablet-samsung.jpg) |
| Desktop | ![desktop dev](documentation/test-respons-desktop.png) | ![desktop dev](documentation/test-respons-desktop-full.png) |  


## Test of functions in console

![Computer](documentation/test-computer-choice.png)

![Computer User](documentation/test-user-computer-choice.png)

![Winner Loser](documentation/test-console1.png)

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot](documentation/test-lighthouse-mobile.png) | ![screenshot](documentation/test-lighthouse-dektop.png) |


## Bugs.

### Solved bug
Found some bugs with the styling with overflow. small screen horizontal overflowsss 
The fix was :
`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`
And in the body :
`
     width: 100% !important;
`

On mac in Safari and FireFox the Reset button was on a new line underneath the 
Game-buttons. Doesnt affect the game. 