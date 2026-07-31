# Entra ID Basic Lab - Report

This is where photos of all of the work you have done goes here.  Snap shots of the project.
## Tenant Overview

<img width="785" height="224" alt="image" src="https://github.com/user-attachments/assets/e93c541f-38c4-4ece-b2dd-38ca40accabb" />


## Users:

<img width="1520" height="927" alt="entraproject_1_users" src="https://github.com/user-attachments/assets/e044d694-797d-4cf7-acf9-deaac57836ad" />



**See full employee list:**   https://github.com/JonathanGribe/EntraID_projects/blob/main/entraproject_1_users.csv


## Groups
<img width="494" height="170" alt="image" src="https://github.com/user-attachments/assets/c942d69d-9b03-4d27-ae79-3d7a4ab5a37e" />

<img width="1492" height="906" alt="entraproject_1_groups" src="https://github.com/user-attachments/assets/4b878412-eb50-4fc7-826f-10ad06d0275a" />

**See full groups:**  https://github.com/JonathanGribe/EntraID_projects/blob/main/entraproject_1_groups.csv

**Group dynamic membership rules:**
**Acquired .json through Microsoft Graph**

| Group                  | Type          | Dynamic membership rule                                                                                                                    | Status |
| ---------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| sg_IT                  | Security      | `user.department -eq "IT"`                                                                                                                 | On     |
| m365_CreativeTeam      | Microsoft 365 | `(user.department -eq "Art") and (user.department -eq "Design") and (user.department -eq "Audio")`                                         | On     |
| sg_Art                 | Security      | `user.department -eq "Art"`                                                                                                                | On     |
| m365_Marketing         | Microsoft 365 | `user.department -eq "Marketing"`                                                                                                          | On     |
| sg_MissingAttributes   | Security      | `(user.department -eq null) or (user.department -eq "")`                                                                                   | On     |
| sg_Design              | Security      | `user.department -eq "Design"`                                                                                                             | On     |
| m365_HROperations      | Microsoft 365 | `user.department -eq "Operations / HR"`                                                                                                    | On     |
| m365_CustomerSuccess   | Microsoft 365 | `user.department -eq "Customer Support"`                                                                                                   | On     |
| sg_HumanResource       | Security      | `user.department -eq "Operations / HR"`                                                                                                    | On     |
| m365_GameDevTeam       | Microsoft 365 | `(user.department -eq "Art") and (user.department -eq "Audio") and (user.department -eq "Design") and (user.department -eq "Engineering")` | On     |
| sg_Engineering         | Security      | `user.department -eq "Engineering"`                                                                                                        | On     |
| sg_Creative Leadership | Security      | `user.department -eq "Creative Leadership"`                                                                                                | On     |
| m365_ITOps             | Microsoft 365 | `user.department -eq "IT"`                                                                                                                 | On     |
| sg_Executive           | Security      | `user.department -eq "Executive"`                                                                                                          | On     |
| sg_All employees       | Security      | `(user.objectId -ne null) and (user.userType -eq "Member")`                                                                                | On     |
| sg_Audio               | Security      | `user.department -eq "Audio"`                                                                                                              | On     |
| sg_marketing           | Security      | `user.department -eq "Marketing"`                                                                                                          | On     |
| sg_Customer Support    | Security      | `user.department -eq "Customer Support"`                                                                                                   | On     |

**Created with Microsoft Graph:** https://github.com/JonathanGribe/EntraID_projects/blob/main/entraproject_1_dynamicmemberjson.md

