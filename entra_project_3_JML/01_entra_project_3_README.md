# Entra ID Project 3 - Demonstrating the JML Lifecycle
<img width="2172" height="724" alt="image" src="https://github.com/user-attachments/assets/8706ff49-5124-4e27-aeaf-cfc5f2520388" />



## Table of Contents
1. About
2. Scenario
3. Scope, tenant checks, HR requests, test group
4. Joiner and mover
5. Leaver
6. Onboarding script and checks
7. Final Report


## About
In any organizations employees will constantly be in different status' within the organization.  Some will be onboarded (Joiner), switching roles (mover), or leaving the organization (leaver).  The process
on how that is understood is called the Joiner, Mover, and Leaver Lifecycle.  In this lab we explore the process on how we accomplish this within Entra ID.  


## Scenario and Scope
Blaze Faction has a new employee they would like to onboard, while others will we switching and leaving the group. We walk through a few examples on how this is handled. 

| Request | Employee | Scenario |
|---|---|---|
| HR-001 | Maya Chen | New artist joins |
| HR-002 | William Harris | Transfers from Art to Engineering |    
| HR-003 | Henry Turner  | Leaves company |

Maya replaces William who replaces Henry who leaves the company

## Platforms
Entra ID
Microsoft 365 Admin
Microsoft Graph
