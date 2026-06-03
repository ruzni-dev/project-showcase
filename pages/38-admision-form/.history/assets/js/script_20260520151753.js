const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const stepNumber = document.getElementById("step-number");
const progressBar = document.querySelector(".step-bar");

let currentStep = 0;

function showStep(index) {
    steps.forEach((step, i) => step.classList.toggle("active", i === index));
    prevBtn.classList.toggle("hidden", index === 0);
    nextBtn.textContent = index === steps.length - 1 ? "Submit" : "Next";
    stepNumber.textContent = index + 1;
    progressBar.style.width = `${((index + 1) / steps.length) * 100}%`;
}

nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        alert("Form submitted successfully!");
        document.getElementById("admissionForm").reset();
        currentStep = 0;
        showStep(currentStep);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

showStep(currentStep);