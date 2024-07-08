const hourlyRateInput = document.getElementById('hourlyRate')
const hoursperdayInput = document.getElementById('hoursperday')
const daysperweekInput = document.getElementById('daysperweek')

const hoursNumE1 = document.getElementById('hours-num')
const daysNumE1 = document.getElementById('days-num')

hourlyRateInput.addEventListener('input', calculateSalary)
hoursperdayInput.addEventListener('input', calculateSalary)
daysperweekInput.addEventListener('input', calculateSalary)

function calculateSalary() {
    const hourlyRate = parseFloat(hourlyRateInput.value)
    const hoursperday = parseFloat(hoursperdayInput.value)
    const daysperweek = parseFloat(daysperweekInput.value)
    
    const hourlyAmount = hourlyRate
    const dailyAmount = hourlyRate * hoursperday
    const weeklyAmount = dailyAmount * daysperweek
    const monthlyAmount = weeklyAmount * 4
    const annualAmount = monthlyAmount * 12

    hoursNumE1.innerText = hoursperdayInput.value
    daysNumE1.innerText = daysperweekInput.value

    displayAmounts(hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount)
}
function displayAmounts(hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount) {
    document.getElementById('hourlyAmount').textContent = `$${hourlyAmount.toFixed(2)}`
    document.getElementById('dailyAmount').textContent = `$${dailyAmount.toFixed(2)}`
    document.getElementById('weeklyAmount').textContent = `$${weeklyAmount.toFixed(2)}`
    document.getElementById('monthlyAmount').textContent = `$${monthlyAmount.toFixed(2)}`
    document.getElementById('annualAmount').textContent = `$${annualAmount.toFixed(2)}`
}

calculateSalary()