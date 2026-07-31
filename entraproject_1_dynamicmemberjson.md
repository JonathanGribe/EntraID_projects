# Entra id project_1: Dynamic group membership rules

In order to create a table of all the dynamic membership rules (found in the lab report), we use Microsoft Graph to pull .json information for those rules and placed them into chatGPT to create a table.

## Microsoft Graph Query


```
https://graph.microsoft.com/v1.0/groups?$select=displayName,mailNickname,groupTypes,membershipRule,membershipRuleProcessingState

```
<img width="1093" height="69" alt="image" src="https://github.com/user-attachments/assets/680d4fed-36d8-4203-a0ff-4b4e5220bbe1" />


## .json Output
```

{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#groups(displayName,mailNickname,groupTypes,membershipRule,membershipRuleProcessingState)",
    "value": [
        {
            "displayName": "sg_IT",
            "mailNickname": "e0e2649f-e",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"IT\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "m365_CreativeTeam",
            "mailNickname": "m365_CreativeTeam",
            "groupTypes": [
                "DynamicMembership",
                "Unified"
            ],
            "membershipRule": "(user.department -eq \"Art\") and (user.department -eq \"Design\") and (user.department -eq \"Audio\")",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_Art",
            "mailNickname": "9a4845bc-1",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Art\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "m365_Marketing",
            "mailNickname": "m365_Marketing",
            "groupTypes": [
                "DynamicMembership",
                "Unified"
            ],
            "membershipRule": "user.department -eq \"Marketing\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_MissingAttributes",
            "mailNickname": "00678a4b-c",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "(user.department -eq null) or (user.department -eq \"\")",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_Design",
            "mailNickname": "ea26d2f4-5",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Design\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_EngineeringLeadership",
            "mailNickname": "e566cc2c-8",
            "groupTypes": [],
            "membershipRule": null,
            "membershipRuleProcessingState": null
        },
        {
            "displayName": "m365_HROperations",
            "mailNickname": "m365_HR",
            "groupTypes": [
                "DynamicMembership",
                "Unified"
            ],
            "membershipRule": "user.department -eq \"Operations / HR\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "m365_CustomerSuccess",
            "mailNickname": "m365_CustomerSuccess",
            "groupTypes": [
                "DynamicMembership",
                "Unified"
            ],
            "membershipRule": "user.department -eq \"Customer Support\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_HumanResource",
            "mailNickname": "1be41cd9-a",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Operations / HR\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "m365_GameDevTeam",
            "mailNickname": "m365_GameDevTeam",
            "groupTypes": [
                "DynamicMembership",
                "Unified"
            ],
            "membershipRule": "(user.department -eq \"Art\") and (user.department -eq \"Audio\") and (user.department -eq \"Design\") and (user.department -eq \"Engineering\")",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_Engineering",
            "mailNickname": "e0b853d3-4",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Engineering\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_DepartmentLeaders",
            "mailNickname": "69480f82-7",
            "groupTypes": [],
            "membershipRule": null,
            "membershipRuleProcessingState": null
        },
        {
            "displayName": "SSPR_Enabled",
            "mailNickname": "e757abba-4",
            "groupTypes": [],
            "membershipRule": null,
            "membershipRuleProcessingState": null
        },
        {
            "displayName": "sg_Creative Leadership",
            "mailNickname": "3af11f34-c",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Creative Leadership\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "m365_ITOps",
            "mailNickname": "m365_ITOps",
            "groupTypes": [
                "DynamicMembership",
                "Unified"
            ],
            "membershipRule": "user.department -eq \"IT\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_Executive",
            "mailNickname": "e93b8d5d-1",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Executive\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_All employees",
            "mailNickname": "00855e02-6",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "(user.objectId -ne null) and (user.userType -eq \"Member\")",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_ITAdmins",
            "mailNickname": "9f631a41-f",
            "groupTypes": [],
            "membershipRule": null,
            "membershipRuleProcessingState": null
        },
        {
            "displayName": "sg_Audio",
            "mailNickname": "fbc023e2-f",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Audio\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_marketing",
            "mailNickname": "5655ed4c-f",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Marketing\"",
            "membershipRuleProcessingState": "On"
        },
        {
            "displayName": "sg_Customer Support",
            "mailNickname": "e1a62865-3",
            "groupTypes": [
                "DynamicMembership"
            ],
            "membershipRule": "user.department -eq \"Customer Support\"",
            "membershipRuleProcessingState": "On"
        }
    ]
}
```

## Back to lab Report

