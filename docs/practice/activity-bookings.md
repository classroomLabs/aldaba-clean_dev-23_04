# Activity Bookings system.

Write a library in any language that implements the following use cases with these restrictions.

## Technical Specifications

- The library should be able to be used in a simple application that executes the use cases.
- All data should be stored in memory; no database is needed.
- The results of every use case should be printed to the console.

## Style Guide

- No more than 1 parameter per method
- No nesting of more than 1 level deep structures (if, for, while, etc.) inside methods
- Methods should be no longer than 9 lines
- Classes should be no longer than 99 lines
- No switch statements
- Use verbs for method names
- Use complete words for variables and methods

## Test and consumer

- Write a small application that uses the library
- Write tests for the library (optional)

## Use Cases

### 1 - Create an Activity

Data needed for creating an Activity:

- A Title
- A Location
- A Date in the future
- A non-negative Price
- A minimum Quorum
- A maximum Capacity
- An State (draft, published, confirmed, canceled, finished)

Default values while creating an Activity:

- A State of "draft"
- A maximum Capacity of 10
- A minimum Quorum of 5

#### Results of booking an activity:

- An Activity object with the Activity Id generated automatically (timestamp)

### 2- Update the State of an Activity

If it is in the "draft" state can be changed to 'published' or 'canceled'

If it is in the "published" state can be changed to 'confirmed' or 'canceled'

If it is in the "confirmed" state can be changed to 'finished'

If it is in the "canceled" state can not be changed.

If it is in the "finished" state can not be changed.

### 3- Book an Activity

#### Restrictions

If the Activity is in the "published" or "confirmed" state and has enough capacity, then the activity can be booked.

If bookings reach the required quorum, then the activity state is changed to "confirmed"

#### Data needed for booking an activity:

- The Activity ID
- A Name
- An Email
- The number of places to book

#### Results of booking an activity:

A Booking object with the Booking Id generated automatically (timestamp)

### 4 - List of Activities

- List all activities
- List all activities by status

### 5 - List of Bookings

- List all bookings
- List all bookings by activity
