# Federated Login Component

The **Federated Login** component handles user authentication through third-party providers like Google, Facebook, etc. It is responsible for managing the authentication flow and linking the user's external account with the internal system.

## Key Features:
- Authentication through external providers (OAuth, OpenID Connect)
- Token generation and session management
- Integration with the **UserLinkService** for linking user profiles

## Related Diagrams:
1. **Federated Login Flow:**
   This diagram illustrates the authentication flow, including token generation and session handling.

   <!--- [Federated Login Diagram](../../../../static/img/diagrams/key-components/federated-login/user-link-service/user-link-service-diagram.svg) -->

2. **Login Flow:**
   A detailed flow of the login process from the user's perspective.

   <!--- ![Login Flow Diagram](../../../../uml/login-flow.svg) -->

## Associated Modules:
### UserLinkService
The **UserLinkService** module manages the linking between external authentication providers and the user profiles in the system. It ensures that the user's information is securely stored and mapped to the correct user profile in the backend.

#### Related Diagrams:
<!--- - [User Link Service Flow](../../../../module-components/user-link-service/uml/user-link-service-diagram.svg) -->
