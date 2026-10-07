# Art Application

## Front End - template
<img width="1908" height="990" alt="image" src="https://github.com/user-attachments/assets/046fe59b-2ade-4200-b3bc-aa1d499f9cb4" />

--> making the "sign in with MIcrosoft" button work and connect to the internals of the application
## Code:

<img width="950" height="530" alt="image" src="https://github.com/user-attachments/assets/0b543d8e-636e-413d-b287-b2f71bf24092" />

## Verify login after connecting the application to entra:

<img width="439" height="557" alt="image" src="https://github.com/user-attachments/assets/ec3de507-ebf1-44e7-b0d4-18f534b0baaa" />

## Confirmation from Entra-side:

<img width="1606" height="407" alt="image" src="https://github.com/user-attachments/assets/f38f24c2-b102-43d6-bca1-749cd0bad26d" />


## After login:

<img width="1553" height="911" alt="image" src="https://github.com/user-attachments/assets/304fac76-4478-490f-b864-5efc170db6e7" />


Scripts ran:

1. include powershell code
2. include the .env.local file, which includes the syncing of the tenant id and client id to allow it to sync to entra.

## Setting Rules and permissions:

Follow the instructions below:

**Exactly—stage two is controlling who can sign in to the Art Portal.** We’ll do that through app assignments, rather than adding more API permissions.

In Entra:

1. Go to **Enterprise applications → Blaze Faction Art Portal**.
2. Open **Properties**, set **Assignment required? → Yes**, and save.
<img width="1053" height="802" alt="image" src="https://github.com/user-attachments/assets/34015711-1911-464a-a720-795c3e81d752" />
3. Open **Users and groups** and assign an ordinary Art employee, such as William.

Then test in separate fresh InPrivate sessions:

- **Assigned employee:** sign-in succeeds.
- **Unassigned employee:** sign-in is denied.

Once that works, we can connect the Art group and demonstrate how joining or leaving that group changes app access. That’s where your JML scenarios become visible.



<img width="1053" height="802" alt="image" src="https://github.com/user-attachments/assets/34015711-1911-464a-a720-795c3e81d752" />
