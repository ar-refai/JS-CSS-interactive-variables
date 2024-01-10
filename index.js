// grap all input elements
const inputs = document.querySelectorAll('.controlers input');


// our update function
function updateCSS() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

console.log();
// Event Listeners on change and mouse move
inputs.forEach(input => input.addEventListener('change', updateCSS));
inputs.forEach(input => input.addEventListener('mousemove', updateCSS));
