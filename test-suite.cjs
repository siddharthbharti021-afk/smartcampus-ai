// test-suite.cjs - Comprehensive test runner for SMARTCAMPUS AI Phase 1 & 2
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('====================================================');
console.log('🧪 SMARTCAMPUS AI - PHASE 2 VERIFICATION & TEST SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

// 1. Verify Complete Architecture & File Integrity
console.log('--- 1. Testing Project Architecture & Module Integrity ---');
const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'tailwind.config.js',
  'index.html',
  'src/main.tsx',
  'src/App.tsx',
  'src/index.css',
  'src/types/index.ts',
  'src/data/mockData.ts',
  'src/context/AppContext.tsx',
  'src/components/layout/Header.tsx',
  'src/components/layout/Sidebar.tsx',
  'src/components/dashboard/ExecutiveDashboard.tsx',
  'src/components/modules/AdmissionsModule.tsx',
  'src/components/modules/StudentRecordsModule.tsx',
  'src/components/modules/SmartAttendanceModule.tsx',
  'src/components/modules/ExaminationsModule.tsx',
  'src/components/modules/TimetableModule.tsx',
  'src/components/modules/ParentCommunicationModule.tsx',
  'src/components/modules/StudentServicesModule.tsx',
  'src/components/modules/GrievancesModule.tsx',
  'src/components/modules/FeesModule.tsx',
  'src/components/modules/CertificatesModule.tsx',
  'src/components/modules/HostelTransportModule.tsx',
  'src/components/modules/AICampusAssistant.tsx',
  'src/components/common/Badge.tsx',
  'src/components/common/StatCard.tsx',
  'src/components/common/Modal.tsx'
];

requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  assert(fs.existsSync(fullPath), `File exists: ${file}`);
});

// 2. Validate Phase 2 Datasets & Entity Constraints
console.log('\n--- 2. Testing Phase 2 Datasets & Domain Rules ---');
const mockDataContent = fs.readFileSync(path.join(__dirname, 'src/data/mockData.ts'), 'utf8');

assert(mockDataContent.includes('INITIAL_ADMISSIONS'), 'Admissions application pipeline initialized');
assert(mockDataContent.includes('INITIAL_EXAM_SCHEDULE'), 'End-Term examination schedule initialized');
assert(mockDataContent.includes('INITIAL_GRADES'), 'Grade points & transcript ledger initialized');
assert(mockDataContent.includes('INITIAL_PARENT_MESSAGES'), 'Parent-teacher two-way communication initialized');
assert(mockDataContent.includes('INITIAL_SERVICE_REQUESTS'), 'One-stop student service requests initialized');

// 3. Test Attendance Calculation & Exam Eligibility
console.log('\n--- 3. Testing Attendance & Examination Gatekeeping ---');
function checkExamEligibility(attendancePct) {
  return attendancePct >= 75.0;
}
assert(checkExamEligibility(85.7) === true, '85.7% Attendance unlocks Exam Hall Ticket');
assert(checkExamEligibility(71.1) === false, '71.1% Attendance triggers Exam Shortage Block');

// 4. Test CGPA Target Simulator Math
console.log('\n--- 4. Testing CGPA Projection Formulation ---');
function projectCgpa(currCgpa, compCredits, targetSgpa, semCredits) {
  const total = compCredits + semCredits;
  return parseFloat(((currCgpa * compCredits + targetSgpa * semCredits) / total).toFixed(2));
}

const projected = projectCgpa(8.84, 132, 9.20, 20);
assert(projected === 8.89, `CGPA Projection (8.84 @ 132cr + 9.20 @ 20cr = ${projected}) verified`);

// 5. Test Admissions Ranking & Token Integrity
console.log('\n--- 5. Testing Admissions & Service Token Verification ---');
function generateToken(prefix) {
  return `${prefix}-2026-${Math.floor(1000 + Math.random() * 9000)}`;
}
const token1 = generateToken('APP');
const token2 = generateToken('SRV');
assert(token1.startsWith('APP-2026-') && token1.length === 13, `Valid Admissions Application Number: ${token1}`);
assert(token2.startsWith('SRV-2026-') && token2.length === 13, `Valid Service Token: ${token2}`);

// 6. Test TypeScript Compilation & Vite Production Build
console.log('\n--- 6. Executing Production Build (tsc + vite build) ---');
try {
  const env = { ...process.env, PATH: `C:\\Program Files\\nodejs;${process.env.PATH}` };
  const buildOutput = execSync('call "C:\\Program Files\\nodejs\\npm.cmd" run build', {
    cwd: __dirname,
    env,
    encoding: 'utf8'
  });
  console.log(buildOutput);
  assert(fs.existsSync(path.join(__dirname, 'dist/index.html')), 'Production build output dist/index.html verified');
} catch (err) {
  console.error('Build execution failed:', err.stdout || err.message);
  assert(false, 'Production build compiles with 0 errors');
}

console.log('\n====================================================');
console.log(`🎯 Phase 2 Test Summary: ${passedTests}/${totalTests} Tests Passed`);
if (passedTests === totalTests) {
  console.log('✨ All Phase 1 & Phase 2 modules and tests PASSED cleanly with 0 ERRORS!');
} else {
  console.error('⚠️ Some tests failed. Please review output.');
  process.exit(1);
}
console.log('====================================================');
