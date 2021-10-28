let x = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    // Sets the value of x to a random number of either 0, 1, 2, 3, 4, or 5.
    x = randint(1, 6)
    // If x = 5, show number 5 on the LED grid.
    // If x = 4, show number 4 on the LED grid.
    // If x = 3, show number 3 on the LED grid.
    // If x = 2, show number 2 on the LED grid.
    // If x = 1, show number 1 on the LED grid.
    if (x == 5) {
        basic.showNumber(5)
    } else if (x == 4) {
        basic.showNumber(4)
    } else if (x == 3) {
        basic.showNumber(3)
    } else if (x == 2) {
        basic.showNumber(2)
    } else if (x == 1) {
        basic.showNumber(1)
    } else {
        // If x = 0 show number 6 on the LED grid.
        basic.showNumber(0)
    }
})
