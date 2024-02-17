package main

import (
	"fmt"
	"strings"
)

// functions in Go encapsulate into own container logically being together
func greet() {
	// Syntatic Sugar in GO: A term to describe a feature in a language that let's you smth more easily
	// Makes the language "sweeter" for human use
	// But doesn't add any new functionality that it didn't already have
	fmt.Printf("Welcome to %v Booking application\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available\n", totalNumberOfConferenceTickets, remainingTickets)
	fmt.Printf("Get your tickets now!\n")
}

func printFirstNames(bookingsData []string) {

	firstnames := []string{}
	// The range iterates over elements of different data structures
	// For Slices and Arrays, range provides the index and value for each element

	for _, booking := range bookingsData { // Blank identifiers ignore a variable you don't want to use so with go you need to make ununsed variables explicit
		firstnames = append(firstnames, strings.Fields(booking)[0]) // The fields functino from string package splits the string with white space as a seperator and returns a slice with the split elements
	}
	fmt.Printf("The Slice of firstname contains --> %v\n", firstnames)
}
