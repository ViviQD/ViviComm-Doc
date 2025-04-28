---
sidebar_class_name: hidden #<- add this if you want to hide this page.
---

import Mermaid from '@site/src/components/Mermaid';

# System Architecture Diagram

This diagram represents the architecture of the system, illustrating the connections and relationships between key components.

```mermaid
    class API_Gateway {
        +uses for login
        +authenticates requests
        +processes payments
        +interacts with admin interface
        +enables messaging
        +provides search functionality
        +validates user tokens
        +accesses profile data
        +handles user consent
        +sends notifications
        +caches data for performance
        +receives messages and forwards notification requests
        +Technologies: Spring WebFlux, Keycloak, Spring Cloud Gateway, reCaptcha, Spring Security
    }
    
    class SearchPromptLib {
        +provides search functionality for prompts
        +Technologies: OpenSearch (cloud service)
    }
    
    class QuartzScheduler {
        +triggers GDPR tasks
        +logs scheduler activities
        +Technologies: Quartz Scheduler, WebFlux, Spring Security
        +Logs: AuditLogger
    }
    
    class AdminPanel {
        +manages and teaches BastionGPT with documentation
        +interacts with AI services
        +views analytics data
        +processes payments
        +logs admin activities
        +Technologies: WebFlux, Node.js, BastionGPT, REST APIs, Spring Security
    }
    
    class NotificationCenter {
        +sends notifications to users
        *sends web push, mobile push, email, or in-app notifications
        +Technologies: WebFlux, Redis (external), Web Push, Email, Mobile Push
    }
    
    class ConversationService {
        +exchanges and manages messages
        +stores and searches conversation context
        +provides search functionality for messages and prompts
        +handles user consent
        +Technologies: Spring WebFlux, WebSockets, Spring Security, OpenSearch (cloud service)
    }

    class FederatedLogin {
        +triggers authentication
        +triggers token validation
        +logs login attempts
        +Technologies: OAuth2, OpenID Connect, Spring Security
    }
    
    class StripeAPI {
        +processes payment for profiles
        +logs payment transactions
        +Technologies: Stripe API
    }
    
    class GDPRCleanup {
        +ensures GDPR compliance with personal data
        +handles user consent for GDPR compliance
        +deletes messages with personal data
        +Technologies: Spring WebFlux, GDPR libraries, Spring Security
    }
    
    class TokenValidator {
        +validates user tokens
        +Technologies: JWT, OAuth2, Spring Security, WebFlux
    }
    
    class ProfileService {
        +stores personal data
        +manages user consent
        +Technologies: WebFlux, Spring Security
    }
    
    class ConsentManager {
        +stores consent data for health-related data
        +Technologies: Spring WebFlux, Keycloak, Spring Security, Spring JPA
    }
    
    class InfraFirewall {
        +secures communications and data
        +Technologies: WebFlux, Spring Security, Jenkins, IBM Cloud
    }
    
    class DiagnosisResult {
        +sends diagnosis results
        +Technologies: Spring WebFlux, Spring Security
    }
    
    class AIAdapter {
        +exports AI results
        +logs AI activities
        +Technologies: TensorFlow, PyTorch, WebFlux, Spring Security
    }

    class AnalyticsService {
        +gathers AI analytics
        +logs analytics events
        +Technologies: Prometheus, Grafana, Apache Kafka, Apache Spark, WebFlux, Spring Security
    }
    
    class ConversationContext {
        +stores conversation context data
        +Technologies: external MongoDB
    }
    
    class ConversationContextDB {
        +conversation context data DB
        +Technologies: MongoDB
    }

    class Authentication {
        +secures authentication data
        +2FA for enhanced security
        +Technologies: Keycloak, JWT, Spring Security, 2FA, WebFlux
    }

    class PHI_DB {
        +stores sensitive health data
        +Technologies: PostgreSQL, Encryption
    }

    class PII_DB {
        +stores personal data
        +Technologies: PostgreSQL, Encryption
    }
    
    class ExportEngine {
        +exports data
        +logs export events
        +exports PDF
        +Technologies: Apache Kafka, Data Export Framework, PDF Generation, WebFlux, Spring Security
    }
    
    class Redis {
        +caches data for performance
        +Technologies: Redis
    }
    
    class ModerationService {
        +moderates content
        +logs moderation activities
        +Technologies: Spring WebFlux, Content Moderation API, Rule Engine, Spring Security
    }
    
    class AmazonKMS {
        +secures sensitive data with encryption
        +Technologies: AWS KMS
    }
    
    class AuditLogger {
        +logs events for compliance
        +Technologies: OpenSearch (cloud service), Spring Actuator, JPA, WebFlux, Spring Security
    }
    
    class DICOMAnalyzer {
        +analyzes DICOM files
        +Technologies: Java, DICOM libraries
    }

    class BastionCMS {
        +manages content and admin interface
        +Technologies: Node.js, BastionGPT, Content Management
    }
    
    class AzureMonitor {
        +monitors system performance
        +triggers alarms for system issues
        +sends notifications for critical events
        +Technologies: Azure Monitor
    }

    %% Web Frontend connections
    WebFrontend --> API_Gateway : communicates with API Gateway

    %% API Gateway connections
    API_Gateway --> SearchPromptLib : provides prompt handling functionality
    API_Gateway --> FederatedLogin : uses for login
    API_Gateway --> StripeAPI : processes payments
    API_Gateway --> AdminPanel : interacts with admin interface
    API_Gateway --> NotificationCenter : triggers notification for user alerts
    API_Gateway --> ConversationService : enables messaging and search functionality
    API_Gateway --> TokenValidator : validates user tokens    
    API_Gateway --> Authentication : authenticates requests
    API_Gateway --> ProfileService : accesses profile data     
    API_Gateway --> ConsentManager : handles user consent
    API_Gateway --> Redis : caches data for performance
    
    %% SearchPromptLib connections
    SearchPromptLib --> OpenSearch : provides search functionality for prompts

    %% FederatedLogin connections
    FederatedLogin --> AuditLogger : logs login attempts
    FederatedLogin --> Authentication : triggers authentication
    FederatedLogin --> TokenValidator : triggers token validation
    
    %% StripeAPI connections
    StripeAPI --> ProfileService : processes payment for profiles
    StripeAPI --> AuditLogger : logs payment transactions
    
    %% GDPRCleanup connections    
    GDPRCleanup --> ProfileService : handles user and health-related data, consent for GDPR compliance
    GDPRCleanup --> ConversationService : deletes messages with personal data
    
    %% QuartzScheduler connections    
    QuartzScheduler --> GDPRCleanup : triggers GDPR tasks
    QuartzScheduler --> AuditLogger : logs scheduler activities

    %% AdminPanel connections
    AdminPanel --> StripeAPI : processes payments
    AdminPanel --> BastionCMS : manages and teaches BastionGPT with documentation
    AdminPanel --> AnalyticsService : views analytics data
    AdminPanel --> AIAdapter : interacts with AI services    
    AdminPanel --> AuditLogger : logs admin activities

    %% ConversationService connections    
    ConversationService --> AIAdapter : interacts with AI
    ConversationService --> AnalyticsService : gathers analytics data
    ConversationService --> ConversationContextDB : tracks conversation context
    ConversationService --> ModerationService : uses moderation service for content moderation
    ConversationService --> NotificationCenter : triggers notification for new messages
    ConversationService --> ExportEngine : exports conversations
    
    %% TokenValidator connections
    TokenValidator --> Authentication : validates user tokens
    
    %% ProfileService connections
    ProfileService --> PII DB : stores personal data
    ProfileService --> ConsentManager : manages user consent

    %% ConsentManager and PII DB connections
    ConsentManager --> PHI DB : stores consent data for health-related data

    %% InfraFirewall connections   
    InfraFirewall --> Authentication : secures authentication
    InfraFirewall --> AuditLogger : logs firewall actions
    InfraFirewall --> ExportEngine : secures export operations
    InfraFirewall --> Redis : secures cached data

    %% DiagnosisResult connections
    DiagnosisResult --> ConversationService : sends diagnosis results in message    
    DiagnosisResult --> ExportEngine : exports diagnostic results

    %% AIAdapter connections
    AIAdapter --> ExportEngine : exports AI results
    AIAdapter --> AuditLogger : logs AI activities
    AIAdapter --> AI Log Store : stores AI logs   
    
    %% AnalyticsService connections
    AnalyticsService --> AIAdapter : gathers AI analytics
    AnalyticsService --> AuditLogger : logs analytics events
    
    %% ConversationContext connections
    ConversationContext --> Redis : caches conversation context data
    ConversationContext --> MongoDB : stores context data in MongoDB    
    
    %% AuditDB connections
    AuditDB --> AmazonKMS : secures audit logs
    AuditDB --> AuditLogger : stores central audit logs
    AuditDB --> OpenSearch : stores searchable audit logs    

    %% Authentication connections
    Authentication --> AmazonKMS : secures authentication data

    %% PII DB connections
    PII DB --> AmazonKMS : secures sensitive data

    %% PHI DB connections
    PHI DB --> AmazonKMS : secures sensitive health data    

    %% ExportEngine connections
    ExportEngine --> AuditLogger : logs export events
    ExportEngine --> AnalyticsService : exports reports
    ExportEngine --> DICOMAnalyzer : exports DICOM data
    
    %% AI_Log_Store connections
    AI_Log_Store --> OpenSearch : stores searchable logs    

    %% ModerationService connections
    ModerationService --> AuditLogger : logs moderation activities

    %% Connections for monitoring and alerts
    AzureMonitor --> ConversationService : monitors performance
    AzureMonitor --> API_Gateway : monitors API performance
    AzureMonitor --> NotificationCenter : tracks notification delivery
    AzureMonitor --> Redis : monitors cache usage and performance
    AzureMonitor --> AuditLogger : tracks log generation and errors
```