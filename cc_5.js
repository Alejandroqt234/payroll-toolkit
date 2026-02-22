
// Step 2: Employee array (3–5 employees)
const employees = [
  { name: "Alejandro", hourlyRate: 18.5, hoursWorked: 38 },
  { name: "Sofia", hourlyRate: 22.0, hoursWorked: 44 },
  { name: "Karel", hourlyRate: 16.75, hoursWorked: 52 },
  { name: "Fabiana", hourlyRate: 19.25, hoursWorked: 40 },
  { name: "Victor", hourlyRate: 25.0, hoursWorked: 41 },
];

// Step 3: Base pay up to 40 hours only
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return baseHours * rate;
}

// Step 4: Overtime pay (hours > 40) at 1.5x rate
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

// Step 5: Taxes (15% deduction) -> return net pay
function calculateTaxes(grossPay) {
  const taxRate = 0.15;
  const taxes = grossPay * taxRate;
  return grossPay - taxes; // net pay
}

// Optional helper: round to 2 decimals (keeps output clean)
function roundMoney(amount) {
  return Number(amount.toFixed(2));
}

// Step 6: Process one employee and return payroll object
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = calculateTaxes(grossPay);

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay,
  };
}

/* ----------------------------
   Individual function tests
   (Important Note requirement)
----------------------------- */
console.log("TEST calculateBasePay(20, 35):", calculateBasePay(20, 35)); // 700
console.log("TEST calculateBasePay(20, 45):", calculateBasePay(20, 45)); // 800 (max 40 hours)
console.log("TEST calculateOvertimePay(20, 45):", calculateOvertimePay(20, 45)); // 150
console.log("TEST calculateOvertimePay(20, 40):", calculateOvertimePay(20, 40)); // 0
console.log("TEST calculateTaxes(1000):", calculateTaxes(1000)); // 850

console.log("--------------------------------------------------");

/* ----------------------------
   Step 7: Loop through employees
----------------------------- */
for (const employee of employees) {
  const payroll = processPayroll(employee);
  console.log(payroll);
}

// CC5 payroll functions added