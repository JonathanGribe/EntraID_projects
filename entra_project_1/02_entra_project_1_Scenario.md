# Entra ID Foundations Lab - Scenario

# Scenario

You are the IT administrator for a new company called The Blaze Faction, a new gaming studio. You need to help set up a simple identity infrastructure based on the companies 
corporate structure below:

```mermaid
graph TD
    CEO["CEO"]
    CD["Creative Director"]
    ENG["Engineering"]
    ART["Art"]
    DES["Design"]
    AUD["Audio"]
    IT["IT Manager"]
    OPS["Operations / HR Manager"]
    CS["Customer Support Lead"]

    CEO --> CD
    CD --> ENG
    CD --> ART
    CD --> DES
    CD --> AUD

    CEO --> IT
    CEO --> OPS
    CEO --> CS
```

Also include is a 


