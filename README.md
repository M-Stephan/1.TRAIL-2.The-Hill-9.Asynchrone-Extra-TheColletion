# 9.Asynchrone | Extra The Colletion

## Description
- It's a webpage representing a guitar collection with their information and specifications displayed in card format.

## Changes & Improvements
- This new version of The Collection has been completely rewritten to improve structure and functionality:
- Object Data Handling: Guitars are now stored in a JSON file instead of being hardcoded in JavaScript.
- Dynamic Data Loading: The application now uses fetch to load guitar data dynamically from json/objects.json.
- Filtering System: The guitar selection now filters based on the type chosen in the dropdown menu.
- Card Creation: Each guitar is displayed dynamically by generating HTML elements in JavaScript.
- New Features:
  - Scrollbar behavior improved for better UI consistency.

## Structure
```
racine/
    ├─ README.md
    ├─ index.html
    ├─ script.js
    ├─ json/
    |   └─ objects.json
    |
    ├─ csc/
    |   └─ style.css
    |
    └─ assets/
        ├─ 12str.png
        ├─ acoustic.png
        ├─ archtop.png
        ├─ bg.png
        ├─ classic.png
        ├─ flyingv.png
        ├─ jem.png
        ├─ lespaul.png
        ├─ sg.png
        ├─ strato.png
        └─ telecaster.png

```

## Information
- **Please do not modify the repository.**