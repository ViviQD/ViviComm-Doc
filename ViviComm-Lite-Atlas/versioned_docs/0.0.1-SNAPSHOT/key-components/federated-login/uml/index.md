# Federated Login UML Diagrams


# FederatedLogin – Corrected Mermaid Diagrams

---

## ▶️ Sequence Diagram

```mermaid
sequenceDiagram
    actor EndUser as End User
    participant FL as FederatedLogin
    participant OP as OAuth Provider
    participant ULS as UserLinkService

    EndUser->>FL: Login Click
    FL->>OP: Redirect to Auth
    OP-->>FL: Auth + Code
    FL->>OP: Exchange Token
    OP-->>FL: Token + Profile
    FL->>ULS: Link User
    ULS-->>FL: User ID
    FL->>EndUser: Create Session
```

---

## 🧩 Use Case Diagram (Restored)

```mermaid
graph TD
    A[OAuth2 Handler] --> UC1[Match by External ID]
    A --> UC2[Fallback Match by Verified Email]
    A --> UC3[Detect Conflicts]
    A --> UC4[Create New User (Verified Only)]
    A --> UC5[Log Link Outcome]
    Admin --> UC3
    Admin --> UC5
```

---

## 🔄 State Diagram (Restored)

```mermaid
stateDiagram-v2
    [*] --> TryExternalIdMatch
    TryExternalIdMatch --> MatchFound : Match exists
    TryExternalIdMatch --> CheckFallback : No match
    MatchFound --> AuditSuccess
    CheckFallback --> ValidFallback : Fallback enabled + verified email
    CheckFallback --> CheckCreateAllowed : No fallback match
    ValidFallback --> AuditSuccess
    CheckCreateAllowed --> CreateUser : Creation allowed
    CheckCreateAllowed --> Reject : Not allowed
    CreateUser --> AuditSuccess
    Reject --> AuditFailure
    AuditSuccess --> [*]
    AuditFailure --> [*]
```

---

## 📡 Data Flow Diagram (Corrected + Labeled)

```mermaid
graph LR
    EU[End User] -->|Login Request| FL[FederatedLogin]
    FL -->|Redirect & Token| OP[OAuth2 Provider]
    OP -->|Auth Code + Token| FL
    FL -->|Profile| ULS[UserLinkService]
    ULS -->|Lookup/Create| UDB[User Database]
    FL -->|Session Created| EU
```
