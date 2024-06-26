function display() {
    var gallons = document.getElementById('gallons').value;
    document.getElementById('gallonsDisplay').textContent = gallons;
    var liters = gallons * 3.78541;
    document.getElementById('litersDisplay').textContent = liters;
}

