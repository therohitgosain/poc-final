# FIS Configuration Service - Proof of Concept (POC)

## 📌 Overview
This POC demonstrates a **Standardized Configuration Architecture** for FIS microservices using the **OpenFeature** standard. 


The architecture decouples the *Application Code* from the *Configuration Source* (DynamoDB/LaunchDarkly), allowing backend changes without redeploying applications.

---

## 🏗️ Architecture
* **Standard:** [OpenFeature](https://openfeature.dev) (CNCF Project).
* **Language:** Node.js / TypeScript.
* **Pattern:** Server-Side SDK Wrapper.
* **Provider:** `InMemoryProvider` (Simulating DynamoDB for this POC).

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher)
* npm

### Installation
1.  Clone the repository:
    ```bash
    git clone <repo-url>
    cd fis-final-poc
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

---

## 🏃‍♂️ Running the Demo
To start the Client Application (which simulates the Billing Service):

```bash
npx ts-node src/client/app.ts