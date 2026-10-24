# ACCOMO API Endpoint Guide

ACCOMO uses Java Servlets and JDBC to connect the frontend with the MySQL database. The following routes are available under the application's `/HotelReservation` context path.

## Customer APIs

| Endpoint | Purpose | Access |
|---|---|---|
| `/api/hotels` | Retrieve hotel listings and details | Public hotel data |
| `/api/auth` | Customer authentication and session management | Depends on the requested action |
| `/api/reservations` | Retrieve customer reservation history | Authenticated customer |
| `/api/reservations/cancel` | Handle customer reservation cancellation | Authenticated customer; ownership must be validated |

## Admin APIs

| Endpoint | Purpose | Access |
|---|---|---|
| `/api/admin/auth` | Admin login, logout, and authentication state | Admin authentication |
| `/api/admin/metrics` | Dashboard metrics | Authorized admin |
| `/api/admin/reservations` | View reservation records | Authorized admin |
| `/api/admin/reservations/cancel` | Administrative reservation cancellation | Authorized admin |
| `/api/admin/customers` | Customer directory | Authorized admin |
| `/api/admin/payments` | Payment reports | Authorized admin |

## Authentication and Privacy

- Customer reservation history must only be returned to the authenticated customer who owns the bookings.
- Unauthenticated requests to protected reservation endpoints should receive `401 Unauthorized`.
- Administrative endpoints must validate the admin session on the server.
- Sensitive credentials, session identifiers, card numbers, and CVVs must not be committed to documentation or exposed through API responses.

## Local Development

The default application URL used in the current development environment is:

`http://localhost:8081/HotelReservation/`

For example, the hotel API is accessed at:

`http://localhost:8081/HotelReservation/api/hotels`

Actual HTTP methods, request fields, and response schemas should be confirmed against the corresponding Java Servlet implementation.
