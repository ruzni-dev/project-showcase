const toggle = document.getElementById('billing-toggle');
const amounts = document.querySelectorAll('.amount');
const durations = document.querySelectorAll('.duration');

toggle.addEventListener('change', () => {
    const yearly = toggle.checked;
    amounts.forEach(amount => {
    amount.textContent = yearly ? amount.dataset.year : amount.dataset.month;
    });
    durations.forEach(duration => {
    duration.textContent = yearly ? '/yr' : '/mo';
    });
});