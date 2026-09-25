# Applying Conditional Access

Once we got done with the baseline we are now moving into applying conditional access to all of our users based on our policies laid out below:

## Conditional Access Policies:
| Policy | Purpose |
|---|---|
| CA001 - Require MFA for Employees | Require multifactor authentication for standard employees |
| CA002 - Require MFA for Administrators | Apply stronger MFA requirements to administrative accounts |
| CA003 - Block Legacy Authentication | Prevent access using older authentication protocols that do not support modern security controls |
| CA004 - Protect Azure / Entra Administrative Access | Add additional authentication requirements when accessing administrative resources |
| CA005 - Restrict Access from Selected Locations | Control access based on configured network or geographic locations |
| CA006 - Require Strong Authentication for Sensitive Roles | Require stronger authentication methods for accounts with elevated privileges |




## Policy CA001 - Require MFA for Employees

We want to test out our conditional access on a few users before applying it to all users. 

1. Created a new security group: sg_CA_testUsers
2. Put two users into the group

<img width="1027" height="399" alt="image" src="https://github.com/user-attachments/assets/9c9755b7-a3c4-4ece-8718-04f73f0f5804" />

Once we confirmed that it worked we apply the policy to the sg_A

3. Created our first Conditional Access policy
Policy was to require MFA sign in as per CA001
<img width="1251" height="90" alt="image" src="https://github.com/user-attachments/assets/59b2e123-7fa9-4d61-a490-0c0b27260499" />

This policy was applied to the group sg_CA_testUsers

4. Testing our conditional access policy

1. Login with an account with No conditional Access
2. Login with an account with Conditional Access

5. Applied the policy to the sg_Allemployees

<img width="673" height="817" alt="image" src="https://github.com/user-attachments/assets/38427819-26c6-4620-b53c-1ba6665c9da3" />


## Policy CA002 - Require MFA for Administrators
Similar application to CA001, but we are targeting users based on their role. 


