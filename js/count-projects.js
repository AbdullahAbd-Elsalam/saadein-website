document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "counter"
    let counters = document.querySelectorAll(".counter");
    let started = false;

    // Function to start counting
    function startCount(el) {
        let goal = parseFloat(el.textContent.replace(/\s+/g, '')); // Remove spaces and convert to number
        el.textContent = "0"; // Ensure it starts at 0

        let count = setInterval(() => {
            el.textContent = (+el.textContent + 1).toLocaleString(); // Add 1 and format with commas
            if (+el.textContent.replace(/,/g, '') >= goal) {
                clearInterval(count);
                el.textContent = goal.toLocaleString(); // Ensure it matches the goal exactly
            }
        }, 2000 / goal); // Adjust this for smoother animations if necessary
    }

    // Function to check when to start counting
    function checkStartCounting() {
        let numberSection = document.querySelector(".number");
        if (window.scrollY >= numberSection.offsetTop - window.innerHeight + 200) {
            if (!started) {
                counters.forEach(counter => startCount(counter));
            }
            started = true;
        }
    }

    // Listen to scroll event to trigger counting
    window.addEventListener("scroll", checkStartCounting);

    // Initial check in case the section is already in view
    checkStartCounting();
});
