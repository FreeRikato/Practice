package main

// go mod init <module path> - Creates a new module, initializing the go.mod file that describes it.
// go is confused where to start the program, so we need to tell go where to start the program with entry point
// entry point is the main function
import (
	"booking-app/helper"
	"fmt"
	"sync"
	"time"

	// "strconv"
	"strings"
) // fmt is a package that provides I/O functions and formatting functions

// Package level variables
// *  Defined at top outside all function
// *  They can be accessed inside any of the functions
// * Variables and Functions defines outside any function can be accessed in all other files within the same range
var (
	conferenceName                 string = "Go Conference"
	totalNumberOfConferenceTickets int    = 50
	remainingTickets               uint   = 50
)

type UserData struct {
	firstName       string
	lastName        string
	email           string
	numberOfTickets uint
}

// Waits for the launched goroutine to finish
// Package "sync" provides basic synchronization functionality
var wg = sync.WaitGroup{}

func PrintFirstNames(bookings []UserData) {

	firstnames := []string{}
	// The range iterates over elements of different data structures
	// For Slices and Arrays, range provides the index and value for each element

	for _, booking := range bookings { // Blank identifiers ignore a variable you don't want to use so with go you need to make ununsed variables explicit
		firstnames = append(firstnames, booking.firstName) // The fields functino from string package splits the string with white space as a seperator and returns a slice with the split elements
	}
	fmt.Printf("The Slice of firstname contains --> %v\n", firstnames)
}

func sendTicket(userTickets uint, firstName string, lastName string, email string) {
	// By default: Sequential code execution
	// Solution: Executing sendTicket code in a seperate goroutine
	// Go is using, what's called a "Green Thread" which is an actual abstraction of an actual thread - GoRoutine better than OS Threads
	// You can run hundreds of thousands or millions goroutines without affecting the performance
	time.Sleep(10 * time.Second)
	var ticket = fmt.Sprintf("%v tickets for %v %v", userTickets, firstName, lastName)
	fmt.Println("####################################")
	fmt.Printf("Sending ticket: %v to email address %v\n", ticket, email)
	fmt.Println("####################################")
	// Done: Decrements the WaitGroup counter by 1 so this is called by the goroutine to indicate that is is finished
	wg.Done()

}

// A program can only have 1 main function, because you can only have 1 entry point
func main() {
	// fmt.Printf("Checking out on the data types: \n conferencename = %T \n totalNumberOfConferenceTickets = %T \n remainingTickets = %T \n", conferenceName, totalNumberOfConferenceTickets, remainingTickets)
	// Go is a statically typed language where you need to tell Go Compiler, the data type when declaring the variable
	// Type Inference: BUT, Go can infer the type when you assign a value in the same line with variable definition

	helper.Greet(conferenceName, totalNumberOfConferenceTickets, remainingTickets)

	// Arrays in Go: fixed size  and only of same type

	// var bookings [50]string

	// What if we don't know the array size? Then there comes the concept of slices. Also arrays may cause memory wastage in cases where array of size 50 holds only 1 or 2 values with remaining spaces unallocated and wasting the memory.

	// Slice in Go: (Abstraction of an array) A list with dynamic size and as it automatically expands as when new elements are added

	bookings := make([]UserData, 0)

	var userFirstName string
	var userLastName string
	var userEmail string
	var userTickets uint

	// Instead of storing the bookings details as [Aravinthan, Rikato]
	// We can use the map concept where
	// "Aravinthan Ravi"
	// firstname: Aravinthan
	// lastname: Ravi
	// email: "aravinthanrc@gmail.com"
	// tickets: 3

	// Map unique keys to values
	// You can retreive the value by using its key later
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
		// Create a map for a user
		// stuct helps us to store a bundle of data with different type
		// The type keyword creates a new type, with the name I specify
		// In fact, you could also create a type based on every other data type like int, sting.etc

		// var userData = make([]UserData, 0) //all keys have the same type and all values have the same type

		var userData = UserData{
			firstName:       userFirstName,
			lastName:        userLastName,
			email:           userEmail,
			numberOfTickets: userTickets,
		}

		// userData["firstName"] = userFirstName
		// userData["lastName"] = userLastName
		// userData["email"] = userEmail
		// userData["numberOfTickets"] = strconv.FormatUint(uint64(userTickets), 10)

		bookings = append(bookings, userData)

		fmt.Printf("List of bookings is %v", bookings)

		fmt.Printf("\nHello %v %v, you have booked %v tickets with registered mail id - %v\n", userFirstName, userLastName, userTickets, userEmail)

		fmt.Printf("%v of %v tickets are remaining for the %v\n", remainingTickets, totalNumberOfConferenceTickets, conferenceName)

		PrintFirstNames(bookings)
		// starts a new goroutine
		// A goroutine is a lightweight thread managed by the Go runtime
		// There arises a problem by default, the main goroutine does not wait for other goroutines, main goroutine exited before "sendTicket" had time to start and execute the code
		// Add: Sets the number of goroutines to wait for (increase the counter by the provided number)
		wg.Add(1)
		go sendTicket(userTickets, userFirstName, userLastName, userEmail)

		noticketsremaining := remainingTickets == 0
		// but there arises an exception when the user tries to book tickets more than the available ones
		if noticketsremaining {
			fmt.Println("=================================================")
			fmt.Println("Our conference is booked out, Come back next year")
			fmt.Println("=================================================")
			break
		}
	}
	wg.Wait()
}

// Go programs are organized into packages
// Go's standard library, provides different core packages for us to use where fmt is one of them
// A package is a collection of source files in the same directory that are compiled together
