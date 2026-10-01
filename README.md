# SMARTCAMPUS AI
> **Tagline:** "One Campus. One Platform. Smarter Governance."

A unified, modern Smart Campus Management Platform designed for colleges and universities to consolidate fragmented institutional systems into a singular, high-performance web application.

---

## 🏛️ Comprehensive Institutional Coverage

SMARTCAMPUS AI completely solves the institutional fragmentation problem across all 13 core campus operational pillars:

1. **Admissions & Quota Seat Allotment Pipeline** — Online entrance rank verification, OCR document audits, merit lists, and digital enrollment onboarding.
2. **Student 360° Academic Records** — Centralized student dossier with CGPA, accumulated credits ledger, arrears tracking, and residency status.
3. **Smart Biometric Attendance & RFID Radar** — Live biometric turnstile logs, 75% examination eligibility warning threshold, and recovery session calculator.
4. **Examinations & QR-Verified Hall Tickets** — End-term schedule, biometric admit card generation with barcode security, and previous semester grade cards.
5. **Interactive CGPA / SGPA Target Simulator** — Predictive calculator to plan graduating GPA targets and honors qualification.
6. **Academic Timetable & Classroom Allocation** — Dynamic schedules, live active lecture detection, and room conflict prevention.
7. **Fees & FinTech Management Portal** — Tuition and amenities fee breakdown, scholarship adjustments, multi-mode payment checkout (UPI/Card/NetBanking), and printable GST receipts.
8. **Digital Certificates & Credentials** — Self-service instant issuance for Bona Fide, Transcripts, and Degrees with tamper-proof SHA-256 cryptographic verification.
9. **Hostel Residency & Dining Management** — Senior/Junior block allocations, daily mess menus, and digital outing gate pass approvals.
10. **Campus Transit & Fleet GPS Tracking** — Live GPS transit routes, driver directories, and departure schedules.
11. **AI Grievance Redressal & Anti-Ragging Cell** — Categorized complaints with statutory SLA countdown timers and auto-dispatch.
12. **Parent-Teacher Dialogue & Ward Welfare Hub** — Direct messaging with Faculty Advisors/HODs and automated SMS attendance alerts.
13. **Student Services Desk & Emergency SOS Beacon** — One-stop desk for library reservations, internship NOCs, and instant campus-wide security distress beacon.
14. **SmartCampus AI Copilot** — Grounded institutional copilot answering queries on campus regulations, deadlines, and exams with direct deep links.

---

## 👥 Multi-Role Personas Supported
- **Super Admin / Dean** (`admin`): Dr. S. K. Mahapatra (Dean of Academic Governance & Registrar)
- **Faculty / HOD** (`faculty`): Prof. Priya Raman, Ph.D. (HOD Computer Science & Engineering)
- **Student** (`student`): Aarav Sharma (B.Tech CSE - 6th Semester, Roll # CS2022-048)
- **Parent / Guardian** (`parent`): Manoj Sharma (Parent of Aarav Sharma)

---

## 🛠️ Tech Stack & Architecture
- **Frontend & App Shell:** React 18, TypeScript, Tailwind CSS, Lucide React Icons
- **Bundler & Build Tool:** Vite 6
- **Architecture:** Context-driven reactive state management with interactive simulation engines
- **Verification:** Automated unit, integration, and build test runner (`test-suite.cjs`)

---

## 💻 Running & Testing Locally

### 1. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 2. Run Test Suite & Build Verification
```bash
cmd /c run-tests.bat
# OR
npm test
```

### 3. Build Production Bundle
```bash
npm run build
```
Output artifacts are generated in the `dist/` directory.
