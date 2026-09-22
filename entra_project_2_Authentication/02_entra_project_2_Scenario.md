# Scenario
We now want to take steps in securing our organization (Blaze Faction). We will implement stronger authentication controls after recognizing that passwords alone are insufficient.
IT has been asked to implement MFA and Conditional Access while avoiding unnecessary disruption to employees.

I've modeled this lab after he following Microsoft document: https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview

| User Type | Authentication Requirement |
|---|---|
| Regular Employees | Require MFA |
| Customer Support | Require MFA |
| Accounting | Require MFA |
| IT Staff | MFA + stronger authentication controls |
| IT Manager / Administrators | Strong authentication requirements and additional access protections |
| Test Account | Used to validate and troubleshoot authentication and Conditional Access policies |


| Policy | Purpose |
|---|---|
| CA001 - Require MFA for Employees | Require multifactor authentication for standard employees |
| CA002 - Require MFA for Administrators | Apply stronger MFA requirements to administrative accounts |
| CA003 - Block Legacy Authentication | Prevent access using older authentication protocols that do not support modern security controls |
| CA004 - Protect Azure / Entra Administrative Access | Add additional authentication requirements when accessing administrative resources |
| CA005 - Restrict Access from Selected Locations | Control access based on configured network or geographic locations |
| CA006 - Require Strong Authentication for Sensitive Roles | Require stronger authentication methods for accounts with elevated privileges |

