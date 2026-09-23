
# Documenting the Baseline
Since conditional access will be applied security default will be set to OFF.

<img width="415" height="142" alt="image" src="https://github.com/user-attachments/assets/09289fff-a85b-4836-acb7-db68a5a1e48c" />


# User Authentication Requirements:

| User Type | Authentication Requirement |
|---|---|
| Regular Employees | Require MFA |
| Customer Support | Require MFA |
| Accounting | Require MFA |
| IT Staff | MFA + stronger authentication controls |
| IT Manager / Administrators | Strong authentication requirements and additional access protections |
| Test Account | Used to validate and troubleshoot authentication and Conditional Access policies |


# Conditional Access Policies:
| Policy | Purpose |
|---|---|
| CA001 - Require MFA for Employees | Require multifactor authentication for standard employees |
| CA002 - Require MFA for Administrators | Apply stronger MFA requirements to administrative accounts |
| CA003 - Block Legacy Authentication | Prevent access using older authentication protocols that do not support modern security controls |
| CA004 - Protect Azure / Entra Administrative Access | Add additional authentication requirements when accessing administrative resources |
| CA005 - Restrict Access from Selected Locations | Control access based on configured network or geographic locations |
| CA006 - Require Strong Authentication for Sensitive Roles | Require stronger authentication methods for accounts with elevated privileges |

