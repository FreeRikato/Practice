package helper

import (
	"fmt"
)

// functions in Go encapsulate into own container logically being together
func Greet(conferenceName string, totalNumberOfConferenceTickets int, remainingTickets uint) {
	// Syntatic Sugar in GO: A term to describe a feature in a language that let's you smth more easily
	// Makes the language "sweeter" for human use
	// But doesn't add any new functionality that it didn't already have
	fmt.Printf("Welcome to %v Booking application\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available\n", totalNumberOfConferenceTickets, remainingTickets)
	fmt.Printf("Get your tickets now!\n")
}
