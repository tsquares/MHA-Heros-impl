# My Hero Academia - Heros
CS3200 db design final project

## Contributors
* Jacqueline Tam - CS3200 33620 Database Design SEC 03 Spring 2021
* Tara Tam - CS3200 33620 Database Design SEC 03 Spring 2021

### (P3 FINAL PROJECT)
## Problem statement
Which superheroes are most popular? The amount of super-powered vigilantes appearing is ever increasing. We seek to track and monitor the heroes who are helping to save lives and work with local authorities.

## Solution statement
This database serves as a registry of heroes and their capabilities. In addition, approval ratings based on quotes of these heroes are stored. Our group has discovered that User 1 is the most popular user based on the number of likes by summing the total number of likes on quotes associated with this user.

## User
The typical users of the database are heroes themselves. They provide personal information such as their name, username (alias), email address, date of birth, and blood type. They are also able to register their super moves associated with them and their super ability (quirk).

## Domain objects
* Quirk
  * A quirk is a super power unique to a user. Quirks have a name, type, and description. There is a many to many relationship between users and quirks. A quirk cannot exist without a user.
* Quote
  * A quote is something said by a user in the database. Quotes have text, a number of likes, and can be favorited. One user can have many quotes, but quotes cannot exist without a user.

### (P1 DATABASE DESIGN AND IMPLEMENTATION)
## Project Description
Database of users representing Heros from the manga/anime My Hero Academia. Heros may or may not have a superpower called a Quirk. Quirks can be used by heros to perform a special technique called a SuperMove. Heros may also have quotes.

### UML Class Diagram
[UML pdf](db_design_final_project_UML.pdf)

### User Data Model
Hero
* a superhero from the My Hero Academia with a first and last name, username representing their hero alias, passsword, email, date of birth, blood type, and affiliation

### Domain Object Data Models
SuperMove
* special ability names with description, effective area of the move (i.e. close, medium, long, etc.), and primary usage type (i.e. offensive, defensive, etc.)

Quirk
* a super power that has a name, power type, and description of the power

Quote
* a quote from a user that has an upvote count and can be favorited

### User to Domain Object Relationships
User to SuperMove
* One User can have many SuperMoves
* SuperMove cannot exist without a User

User to Quote
* One User can have many Quotes
* Quotes cannot exist without a User

User to Quirk
* Many Users can have many Quirks
* Quirks cannot exist without a User

### Domain Object to Domain Object Relationships
Quirk to SuperMove
* One Quirk can have many SuperMoves
* Quirks cannot exist without a SuperMoves

### Portable Enumeration(s)
Affiliation
* "UA_HIGH_SCHOOL"
* "SHIKETSU_HIGH_SCHOOL"
* "KETSUBUTSU_ACADEMY"
* "HERO_ASSOCIATION"
