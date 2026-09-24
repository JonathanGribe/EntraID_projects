# Applying Conditional Access

Once we got done with the baseline we are now moving into applying conditional access to all of our users.

## Stage 1 - Pilot run

We want to test out our conditional access on a few users before applying it to all users. 

1. Created a new security group: sg_CA_testUsers
2. Put two users into the group

<img width="1027" height="399" alt="image" src="https://github.com/user-attachments/assets/9c9755b7-a3c4-4ece-8718-04f73f0f5804" />


## Stage 2 - Created our first Conditional Access policy
Policy was to require MFA sign in as per CA001
<img width="1251" height="90" alt="image" src="https://github.com/user-attachments/assets/59b2e123-7fa9-4d61-a490-0c0b27260499" />

This policy was applied to the group sg_CA_testUsers

## Stage 3 - Testing our conditional access policy

1. Login with an account with No conditional Access
2. Login with an account with Conditional Access
