package main

// go mod init <module path> - Creates a new module, initializing the go.mod file that describes it.
// go is confused where to start the program, so we need to tell go where to start the program with entry point
// entry point is the main function
import (
	"fmt"
	"strings"
) // fmt is a package that provides I/O functions and formatting functions

// Package level variables
// *  Defined at top outside all function
// *  They can be accessed inside any of the functions
// * Variables and Functions defines outside any function can be accessed in all other files within the same range
var conferenceName = "Rick Conference"

const totalNumberOfConferenceTickets = 50

var remainingTickets uint = 50

// A program can only have 1 main function, because you can only have 1 entry point
func main() {
	// fmt.Printf("Checking out on the data types: \n conferencename = %T \n totalNumberOfConferenceTickets = %T \n remainingTickets = %T \n", conferenceName, totalNumberOfConferenceTickets, remainingTickets)
	// Go is a statically typed language where you need to tell Go Compiler, the data type when declaring the variable
	// Type Inference: BUT, Go can infer the type when you assign a value in the same line with variable definition

	greet()

	// Arrays in Go: fixed size  and only of same type

	// var bookings [50]string

	// What if we don't know the array size? Then there comes the concept of slices. Also arrays may cause memory wastage in cases where array of size 50 holds only 1 or 2 values with remaining spaces unallocated and wasting the memory.

	// Slice in Go: (Abstraction of an array) A list with dynamic size and as it automatically expands as when new elements are added

	bookings := []string{}

	var userFirstName string
	var userLastName string
	var userEmail string
	var userTickets uint
	//ask user for their name

	// for {} - infinnite for loop
	for {

		fmt.Println("\nEnter your first name")
		fmt.Scan(&userFirstName)

		fmt.Println("Enter your last name")
		fmt.Scan(&userLastName)

		fmt.Println("Enter your email address")
		fmt.Scan(&userEmail)

		isValidName := len(userFirstName) >= 2 && len(userLastName) >= 2
		isValidEmail := strings.Contains(userEmail, "@")

		if !isValidName || !isValidEmail {
			fmt.Println("Invalid Credentials")
			continue
		}

		fmt.Println("How many tickets would you like to buy?")
		fmt.Scan(&userTickets)

		userBookedTicketsMoreThanAvailable := userTickets > remainingTickets

		if userBookedTicketsMoreThanAvailable {
			fmt.Printf("\nWe have only %v out of %v tickets at the moment and it is not possible to book %v tickets as per your request\n", remainingTickets, totalNumberOfConferenceTickets, userTickets)
			fmt.Println("Please, Try again within the available number of tickets")
			continue
		}

		remainingTickets = remainingTickets - userTickets

		// bookings[0] = userFirstName + " " + userLastName
		bookings = append(bookings, userFirstName+" "+userLastName)

		fmt.Printf("%v", bookings)

		fmt.Printf("\nHello %v %v, you have booked %v tickets with registered mail id - %v\n", userFirstName, userLastName, userTickets, userEmail)

		fmt.Printf("%v of %v tickets are remaining for the %v\n", remainingTickets, totalNumberOfConferenceTickets, conferenceName)

		printFirstNames(bookings)

		noticketsremaining := remainingTickets == 0
		// but there arises an exception when the user tries to book tickets more than the available ones
		if noticketsremaining {
			fmt.Println("=================================================")
			fmt.Println("Our conference is booked out, Come back next year")
			fmt.Println("=================================================")
			break
		}
	}
}

// Go programs are organized into packages
// Go's standard library, provides different core packages for us to use where fmt is one of them
// A package is a collection of source files in the same directory that are compiled together
