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

A. Login with an account with No conditional Access


--Confirmed she is a member of sg_Allemployees
<img width="515" height="302" alt="image" src="https://github.com/user-attachments/assets/7db41b3e-a517-47d3-a8cd-7bae06ec80ce" />

---Amelia Martin - No CA - Can log in w/o MFA
<img width="1283" height="897" alt="image" src="https://github.com/user-attachments/assets/ad24f6be-cf3e-4365-b5c7-cf751da75ce1" />


5. Applied the policy to the sg_Allemployees

<img width="673" height="817" alt="image" src="https://github.com/user-attachments/assets/38427819-26c6-4620-b53c-1ba6665c9da3" />

6. Go back and try to login as Amelia Martin
Confirmed Policy is working - requiring MFA for non-admin users
<img width="442" height="371" alt="image" src="https://github.com/user-attachments/assets/9510bc97-b02e-4b76-bf45-a056ed3360b6" />
<img width="444" height="568" alt="image" src="https://github.com/user-attachments/assets/c4217c62-1a8d-42d8-90ff-982a1e8a4a9d" />




## Policy CA002 - Require MFA for Administrators
Similar application to CA001, but we are targeting users based on their role. 


