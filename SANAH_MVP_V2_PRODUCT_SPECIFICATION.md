# San'ah --- MVP v2 Product Specification

## Source of Truth --- Business, UX, Roles, Workflows, Permissions

**Version:** MVP v2\
**Status:** Draft for approval before implementation\
**Purpose:** Replace/reconcile the legacy discovery-platform scope with
the current Service Marketplace direction.

------------------------------------------------------------------------

# 1. Product Definition

San'ah is a service marketplace that connects **Customers** with
**Providers/Artisans**.

The platform manages the service-request lifecycle inside the
application, while monetary transfers occur externally between the
Customer and Provider.

San'ah does **not** act as a payment gateway and does not hold or
process customer funds.

The platform records payment proof and the Provider confirms whether the
transferred amount was actually received. The Admin supervises the
process and handles disputes.

------------------------------------------------------------------------

# 2. Primary Roles

## 2.1 Customer

The Customer can:

-   Discover and search for services/providers.
-   View Provider profiles, skills, portfolio, ratings, and pricing
    information.
-   Create formal Service Requests.
-   Communicate with the Provider through in-app messaging.
-   Agree on service scope, duration, price, and payment timing.
-   Upload external payment proof when payment is made.
-   View request/service/payment status.
-   Confirm service completion.
-   Open disputes according to the dispute rules.
-   Submit a review only when the review eligibility rules are
    satisfied.

## 2.2 Provider

The Provider can:

-   Maintain a professional profile.
-   Define services, skills, service areas, portfolio, and daily price.
-   Receive Service Requests.
-   Review request details.
-   Accept or reject requests.
-   Communicate with Customers through in-app messaging.
-   Perform the service.
-   Mark the service as completed by the Provider.
-   Review uploaded payment proof.
-   Confirm receipt of an external payment.
-   Report a payment problem/dispute.
-   Participate in dispute resolution.
-   Receive eligible Customer reviews.

## 2.3 Admin

The Admin can:

-   Manage Customers and Providers.
-   Supervise Services and Service Requests.
-   Monitor payment-proof records.
-   Review disputes.
-   Review relevant request history, proof, and conversation context
    according to privacy/authorization rules.
-   Resolve disputes according to defined policy.
-   Manage categories and marketplace taxonomy.
-   Monitor platform analytics.
-   Manage reports and operational oversight.
-   Manage notifications/system settings.
-   Apply authorized moderation actions.

------------------------------------------------------------------------

# 3. Core Product Domains

The MVP v2 consists of these major domains:

1.  Identity & Authentication
2.  Customer
3.  Provider
4.  Service & Category
5.  Service Request
6.  Messaging
7.  Payment Proof
8.  Disputes
9.  Reviews & Ratings
10. Notifications
11. Admin & Moderation
12. Analytics/Reporting

------------------------------------------------------------------------

# 4. Service Discovery

The legacy discovery functionality remains valid.

Customers should be able to:

-   Browse categories.
-   Search for Providers/Services.
-   Filter by relevant marketplace attributes.
-   View Provider profiles.
-   View portfolio/work samples.
-   View ratings and reviews.
-   View the Provider's daily price.
-   View service areas/cities.

Discovery is now the entry point to a formal Service Request rather than
the final platform interaction.

------------------------------------------------------------------------

# 5. Provider Pricing Model

Provider pricing is represented primarily as a **daily work price**.

A Provider profile/service may expose:

-   Daily price
-   Skills
-   Experience
-   Service category
-   Service area
-   Portfolio
-   Rating/reviews
-   Relevant service information

The Service Request records the price and duration agreed for that
request.

## 5.1 Agreed Amount

The expected amount can be represented as:

**Daily Price × Agreed Number of Days = Agreed Total**

Example:

15,000 YER/day × 3 days = 45,000 YER.

The agreed amount must be recorded as part of the Service Request.

An extension/change to the agreed duration or amount must not silently
change the financial obligation. It requires an explicit change/approval
workflow.

------------------------------------------------------------------------

# 6. Service Request

A Service Request is the central aggregate of the marketplace
transaction.

It should contain, as applicable:

-   Request ID
-   Customer
-   Provider
-   Service/category
-   Service description
-   Scope/details
-   Location/service area
-   Daily price
-   Agreed duration
-   Agreed total amount
-   Payment timing
-   Current service status
-   Current payment status
-   Created/updated timestamps
-   Cancellation information
-   Completion information

------------------------------------------------------------------------

# 7. Service Request Lifecycle

The recommended primary lifecycle is:

PENDING → ACCEPTED → READY_TO_START → IN_PROGRESS → PROVIDER_COMPLETED →
CUSTOMER_CONFIRMED → CLOSED

Alternative/exception paths include:

-   PENDING → REJECTED
-   PENDING/ACCEPTED → CANCELLED
-   Applicable active states → DISPUTED

## 7.1 Meaning of States

### PENDING

The Customer submitted the request and the Provider has not yet
accepted/rejected it.

### ACCEPTED

The Provider accepted the request.

### READY_TO_START

The request has been accepted and the prerequisites for starting the
work have been satisfied according to the agreed workflow.

### IN_PROGRESS

The Provider is actively performing the service.

### PROVIDER_COMPLETED

The Provider states that the service has been completed.

### CUSTOMER_CONFIRMED

The Customer confirms receipt/acceptance of the completed service.

### CLOSED

The Service Request lifecycle is closed and eligible post-service
actions can occur.

### REJECTED

The Provider declined the request.

### CANCELLED

The request was cancelled according to the applicable cancellation
rules.

### DISPUTED

The request is under an active dispute and relevant progression may be
frozen until resolution.

------------------------------------------------------------------------

# 8. Payment Model

## 8.1 External Payment

San'ah does not process, hold, or transfer customer funds.

The Customer and Provider transfer money externally.

The platform records the related agreement and proof.

## 8.2 Payment Timing

The parties may agree to one of three payment timings:

1.  BEFORE_SERVICE
2.  DURING_SERVICE
3.  AFTER_SERVICE

The selected timing becomes part of the Service Request after agreement.

A party must not unilaterally change the agreed payment timing after
acceptance without the applicable change/approval process.

------------------------------------------------------------------------

# 9. Payment Proof

Payment Proof is evidence of an external transfer.

It is not an in-platform payment transaction.

The Customer uploads the proof to the relevant Service Request.

The Provider checks their actual external account/wallet/bank record and
confirms whether the money was received.

## 9.1 Payment Proof Lifecycle

For payment-required requests:

AWAITING_UPLOAD → PENDING_VERIFICATION → VERIFIED

If there is a problem:

PENDING_VERIFICATION → DISPUTED

A proof may also be marked invalid/rejected with a recorded reason where
the final backend policy defines such a state.

## 9.2 Payment Proof Data

Potential fields include:

-   Proof ID
-   Service Request ID
-   Customer ID
-   Provider ID
-   Amount shown
-   Transfer reference
-   Transfer date/time
-   Receipt file
-   Upload timestamp
-   Verification timestamp
-   Verification actor
-   Status
-   Rejection/issue reason

Sensitive proof files must be protected and accessible only to
authorized parties.

------------------------------------------------------------------------

# 10. Payment Verification

The Provider is the primary verifier when the external transfer is made
directly to the Provider.

Workflow:

Customer makes external transfer → Customer uploads proof → Provider
receives notification → Provider checks actual receipt → Provider
confirms receipt OR reports an issue.

Admin does not manually verify every normal payment.

Admin provides oversight and handles disputes/escalations.

------------------------------------------------------------------------

# 11. Dispute Management

Disputes are not limited to payment receipt problems.

Potential dispute categories include:

1.  Payment not received
2.  Payment amount mismatch
3.  Invalid/unclear payment proof
4.  Transfer to wrong account
5.  Duplicate payment proof
6.  Service not started
7.  Provider did not attend
8.  Service not completed
9.  Service quality problem
10. Service differs from agreed scope
11. Duration/timing disagreement
12. Price/amount disagreement
13. Unjustified cancellation
14. Provider/customer disappearance after payment
15. Inappropriate behavior
16. Other documented issue

## 11.1 Dispute Lifecycle

OPEN → UNDER_REVIEW → RESOLVED

The resolution must record:

-   Decision
-   Reason
-   Admin/resolver
-   Resolution timestamp
-   Relevant evidence
-   Any resulting state changes

The system should support resolution in favor of the Customer or
Provider where applicable.

## 11.2 Dispute Evidence

Depending on authorization and privacy rules, Admin may review:

-   Service Request details
-   Agreed price/duration
-   Payment proof
-   Request status history
-   Relevant messages/conversation
-   Uploaded evidence
-   Previous actions/events

The Admin must not infer facts that the system cannot substantiate.

------------------------------------------------------------------------

# 12. Messaging

Messaging is **inside San'ah**.

The primary conversation should be associated with the Service Request.

A request conversation may contain:

-   Customer messages
-   Provider messages
-   Attachments where supported
-   System events/notifications where appropriate

Messaging exists to keep service scope, communication, and dispute
context connected to the request.

Admin access to private conversations must be governed by explicit
authorization and applicable dispute/support rules.

------------------------------------------------------------------------

# 13. Reviews & Ratings

Reviews are verified marketplace feedback.

A Customer may review a Provider only after the relevant Service Request
reaches the eligible completed/closed state.

Recommended eligibility:

Service Request = CLOSED AND No active dispute

→ Review Allowed

If an active dispute exists:

OPEN / UNDER_REVIEW → Review NOT Allowed

Reviews should reference the completed Service Request.

The system should enforce the documented
one-review-per-customer/provider/request policy once finalized.

------------------------------------------------------------------------

# 14. Notifications

Notifications are required because the lifecycle is asynchronous.

Important events include:

### Customer

-   Request submitted
-   Provider accepted
-   Provider rejected
-   Provider sent a message
-   Payment proof uploaded
-   Payment proof verification result
-   Provider marked service completed
-   Dispute opened/updated/resolved
-   Service closed
-   Review becomes available

### Provider

-   New Service Request
-   Customer message
-   Payment proof uploaded
-   Dispute opened
-   Customer confirmed completion
-   Relevant cancellation/change events

### Admin

-   New dispute
-   Escalated payment issue
-   Operational alerts
-   Moderation/review alerts where applicable

The exact delivery channels (in-app, email, SMS, push) are
implementation decisions unless already fixed by the existing project
documentation.

------------------------------------------------------------------------

# 15. Cancellation

Cancellation must be explicit and auditable.

The system should record:

-   Who initiated cancellation
-   Reason
-   Timestamp
-   Request state at cancellation
-   Whether payment proof existed
-   Whether a dispute was opened as a result

Cancellation rules should differ depending on whether the request is
pending, accepted, started, or completed.

No financial consequence should be invented automatically without an
approved business rule.

------------------------------------------------------------------------

# 16. Permissions

The platform must enforce ownership and role-based access.

## Customer

Can access:

-   Own profile
-   Own Service Requests
-   Own payment proofs
-   Own conversations
-   Own disputes
-   Eligible reviews

Cannot access another Customer's private records.

## Provider

Can access:

-   Own profile
-   Requests assigned to/created with that Provider
-   Related payment proofs
-   Related conversations
-   Relevant disputes
-   Reviews concerning that Provider

Cannot access unrelated Customers' private data.

## Admin

Can access operational records required by Admin responsibilities,
subject to authorization and privacy controls.

Admin actions that change statuses or resolve disputes must be
auditable.

------------------------------------------------------------------------

# 17. Frontend Architecture

The React frontend should use role-based layouts and routing.

Recommended structure:

/admin/* /provider/* /customer/\*

## Admin

Use the TailAdmin dashboard foundation:

-   Sidebar
-   Header
-   Cards
-   Tables
-   Charts
-   Forms
-   Alerts
-   Badges
-   Responsive layout

## Provider

Use a modified dashboard/work-management layout.

Core areas:

-   Dashboard
-   Service Requests / Job Inbox
-   Active Jobs
-   Payment Verification
-   Services
-   Calendar if required by finalized booking/scheduling rules
-   Messages
-   Reviews
-   Profile
-   Notifications

## Customer

Use a marketplace-oriented layout rather than a heavy administrative
sidebar.

Core areas:

-   Marketplace Home
-   Search
-   Categories
-   Provider Profiles
-   Service Request creation
-   My Requests
-   Request Details
-   Payment Proof upload
-   Messages
-   Disputes
-   Reviews
-   Profile
-   Notifications

------------------------------------------------------------------------

# 18. Admin Information Architecture

Recommended Admin navigation:

-   Dashboard
-   Users
    -   Customers
    -   Providers
    -   Admins/Staff
-   Services
    -   All Services
    -   Categories
    -   Pending/Moderation where applicable
-   Service Requests
    -   All
    -   Pending
    -   Accepted
    -   In Progress
    -   Completed
    -   Disputed
    -   Cancelled
-   Payments
    -   All Payment Proofs
    -   Pending Verification
    -   Verified
    -   Disputed
-   Disputes
    -   Open
    -   Under Review
    -   Resolved
-   Reviews
-   Messages/Support where authorized
-   Notifications
-   Reports & Analytics
-   Settings

------------------------------------------------------------------------

# 19. Provider Information Architecture

Recommended Provider navigation:

-   Dashboard
-   Requests
    -   New
    -   Accepted
    -   Active
    -   Completed
    -   Cancelled/Disputed
-   Payment Verification
-   My Services
-   Messages
-   Reviews
-   Calendar/Schedule if finalized
-   Notifications
-   Profile
-   Settings

------------------------------------------------------------------------

# 20. Customer Information Architecture

Recommended Customer navigation:

-   Home
-   Categories
-   Search
-   Provider Profile
-   My Requests
    -   Pending
    -   Accepted
    -   Active
    -   Completed
    -   Disputed
    -   Cancelled
-   Messages
-   Payments/Payment Proofs
-   Disputes
-   Reviews
-   Notifications
-   Profile
-   Settings

------------------------------------------------------------------------

# 21. TailAdmin Reuse Strategy

The existing TailAdmin project should be treated as the frontend
foundation.

Reuse where appropriate:

-   AppLayout
-   Header
-   Sidebar architecture
-   Responsive behavior
-   Buttons
-   Inputs
-   Selects
-   Forms
-   Tables
-   Badges
-   Alerts
-   Avatars
-   Cards
-   Charts
-   Authentication UI
-   Profile UI
-   404 page
-   Theme infrastructure

Do not expose template showcase pages as production navigation.

The following existing pages are primarily reusable as component
references rather than production product pages:

-   Alerts showcase
-   Avatars showcase
-   Badge showcase
-   Buttons showcase
-   Images showcase
-   Videos showcase
-   Basic tables showcase
-   Form elements showcase
-   Line chart showcase
-   Bar chart showcase
-   Blank page

------------------------------------------------------------------------

# 22. RTL and Arabic UX

San'ah targets Arabic users, therefore RTL must be treated as a
first-class requirement.

Requirements:

-   `dir="rtl"` support
-   Correct sidebar placement
-   Logical spacing utilities
-   Correct icon/text alignment
-   Arabic typography
-   RTL-aware forms
-   RTL-aware tables
-   RTL-aware charts where applicable
-   Responsive behavior on mobile
-   Arabic labels and validation messages

The implementation should avoid hard-coded left/right positioning where
logical properties can be used.

------------------------------------------------------------------------

# 23. Responsive UX

Customer marketplace interfaces should prioritize mobile usability.

Provider and Admin dashboards must also remain usable on mobile/tablet.

Required considerations:

-   Collapsible navigation
-   Responsive tables
-   Mobile-friendly cards
-   Touch-friendly actions
-   File upload from mobile
-   Image preview
-   Chat usability
-   Status visibility
-   Clear primary actions

------------------------------------------------------------------------

# 24. Auditability

Important business actions should be auditable.

Examples:

-   Request accepted/rejected
-   Request status changes
-   Cancellation
-   Payment proof uploaded
-   Payment verification
-   Dispute opened
-   Dispute resolved
-   Admin override/action
-   Review submission

Where appropriate, record:

-   Actor
-   Action
-   Timestamp
-   Previous state
-   New state
-   Reason

------------------------------------------------------------------------

# 25. Backend Impact

The existing Laravel backend was designed around the legacy
discovery/trust model.

The current marketplace direction eventually requires backend support
for:

-   Service Requests
-   Request state transitions
-   Provider acceptance/rejection
-   Payment Proofs
-   Provider payment verification
-   Disputes
-   Review gating
-   Notifications
-   Messaging
-   Role-based authorization
-   Audit/history

Potential new domain modules:

-   Marketplace/ServiceRequest
-   PaymentProof/Financial Evidence
-   Dispute

The existing Trust/Review domain must be adapted so reviews can be tied
to completed Service Requests.

------------------------------------------------------------------------

# 26. Database Impact

Potential core entities include:

-   `service_requests`
-   `payment_proofs`
-   `disputes`
-   `service_request_events` or equivalent audit/history mechanism
-   `messages` / conversations
-   notifications, if not already present

The existing reviews structure should support a relationship to the
completed Service Request.

Exact columns and relationships must be derived from the final backend
architecture before migrations are written.

------------------------------------------------------------------------

# 27. API Impact

The current Laravel API must eventually expose endpoints for:

-   Service Request creation
-   Request listing
-   Request details
-   Accept/reject
-   Start/progress/completion
-   Customer confirmation
-   Cancellation
-   Payment proof upload
-   Payment proof status
-   Provider verification
-   Dispute creation
-   Dispute updates/resolution
-   Messaging
-   Notifications
-   Review eligibility/submission

Exact routes must be designed against the actual Laravel architecture
rather than invented independently by the frontend.

------------------------------------------------------------------------

# 28. Security and Privacy

Payment proof files may contain sensitive financial information.

Requirements:

-   Private storage
-   Authorization before access
-   No public direct file URLs unless explicitly safe
-   Access limited to relevant Customer, Provider, and authorized Admin
-   Secure upload validation
-   File type/size validation
-   Protection against malicious uploads
-   Audit access/actions where appropriate

Do not expose `.env` secrets or credentials.

------------------------------------------------------------------------

# 29. Legacy Documentation Reconciliation

The existing documentation describes a previous MVP where:

-   No formal in-app booking/service request existed.
-   Payments were outside the platform with no payment-proof workflow.
-   The platform focused on discovery/trust and proxy contact actions.

Those requirements are treated as **legacy scope** where they conflict
with this MVP v2.

Requirements that remain valid include:

-   Customer/Provider identity
-   Categories
-   Cities/service areas
-   Provider profiles
-   Portfolio
-   Search/discovery
-   Reviews, with the new completion-based eligibility rule.

The legacy documents should be preserved as historical/project
references, not silently deleted.

------------------------------------------------------------------------

# 30. Explicit Business Rules Confirmed for MVP v2

The following are confirmed decisions for the current product direction:

1.  San'ah is a Service Marketplace.
2.  Customer, Provider, and Admin are the primary roles.
3.  Formal Service Requests are managed in the platform.
4.  Providers explicitly accept/reject requests.
5.  Service status is tracked in the platform.
6.  Payment occurs outside San'ah.
7.  Payment timing can be before, during, or after service according to
    the parties' agreement.
8.  Provider pricing is represented as a daily work price.
9.  Agreed duration and total amount are recorded in the Service
    Request.
10. Customer uploads external payment proof.
11. Provider verifies actual receipt when money is transferred directly
    to the Provider.
12. Admin supervises and handles disputes rather than manually verifying
    every normal payment.
13. Messaging is inside San'ah.
14. Disputes cover payment and service-related issues, subject to final
    policy.
15. A Customer cannot review while an active dispute exists.
16. Reviews become available after the eligible completed/closed state.
17. TailAdmin is used as the React UI foundation.
18. The existing Laravel/docs are legacy/current sources that must be
    reconciled before implementation.

------------------------------------------------------------------------

# 31. Decisions Still Requiring Explicit Product Approval

The following details are not fully defined yet and must not be invented
by implementation agents:

1.  Exact payment timing rules for each service scenario.
2.  Whether payment proof is mandatory for every request or only when a
    payment is due.
3.  Exact cancellation policy and consequences.
4.  Exact extension/change-of-price workflow.
5.  Exact dispute resolution outcomes and time limits.
6.  Whether Admin can override service/payment states and under which
    conditions.
7.  Whether Customer confirmation is automatic after a timeout or always
    manual.
8.  Exact review window after service closure.
9.  Whether a Provider can request a partial payment/multiple payment
    proofs for one request.
10. Whether the final total can differ from daily price × days and under
    what approved conditions.
11. Notification channels for MVP (in-app only vs email/SMS/push).
12. Exact messaging attachment rules.
13. Exact Provider verification evidence required for payment disputes.
14. Exact retention/privacy policy for payment-proof files and
    conversations.

------------------------------------------------------------------------

# 32. Implementation Principle

No implementation agent should invent unresolved business rules.

The workflow must be:

Requirements → Architecture approval → Backend contract → Frontend
architecture → Page specifications → Implementation → Testing → Review →
Commit

Before each implementation phase, the agent must report:

-   Files to create
-   Files to modify
-   Files to delete
-   Dependencies to change
-   Reason for each change

The agent must wait for explicit approval before making non-trivial
project changes.

------------------------------------------------------------------------

# 33. Recommended Implementation Sequence

1.  Approve this MVP v2 specification.
2.  Reconcile the legacy Laravel architecture with the new requirements.
3.  Finalize domain/database model.
4.  Finalize API contract.
5.  Finalize authorization/permissions.
6.  Implement backend Service Request domain.
7.  Implement payment-proof domain.
8.  Implement disputes.
9.  Implement messaging and notifications.
10. Adapt reviews to completed requests.
11. Build Customer frontend.
12. Build Provider frontend.
13. Build Admin frontend.
14. Integrate frontend with Laravel APIs.
15. Implement RTL/Arabic polish.
16. Test complete service lifecycle.
17. Test payment-proof workflow.
18. Test dispute workflow.
19. Test role/permission boundaries.
20. Create production baseline and release.

------------------------------------------------------------------------

# 34. Current Status

**Legacy Analysis:** Complete\
**TailAdmin Analysis:** Complete\
**Migration/Impact Analysis:** Complete\
**Current Product Direction:** Defined\
**MVP v2 Specification:** Drafted\
**Business Implementation:** Not started\
**Database Migration:** Not started\
**Frontend Product Implementation:** Not started

This document must be approved and versioned before implementation
begins.
