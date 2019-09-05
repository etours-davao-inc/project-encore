# Travel Product Authoring
An app used by travel agent to author a detailed travel product.

## Project Motivation
1. To create an effective, smart, and extensible tool in authoring travel products
2. Reduce to single source of truth for travel products from a multiple source
3. Reduce interface and number of ways to author/modify products
4. Reduce time to author products

## Main Actor: Travel Agent

## Project Features
* A feature for travel agent to specify in detail important information related to authoring a travel product
* It offers flexibility for single day activity to multiday activities
* Includes a feature to list resources required for the product
* A feature to pre-assign a resource to a travel product

## Use Case

### Scenario 1: Travel agent creates a product
### Scenario 2: Travel agent creates quotation from a product
### Scenario 3: Travel agent creates a custom quotation
### Scenario 4: Booking agent confirms a booking

## App Design
![](https://drive.google.com/open?id=15znl7Taa8pH5eerwq9fs-khVa0DYqJpR)
* Product Object
  * Name Object
  * Days Object
  * Multiday Bool
  * [Activities]
    * Activity Object
      * Itinerary Object
      * [Team]
        * Transportation
          * [Crew]
            * CrewMembers
      * Accommodation Object
      * Expenses Object
        * [Shared]
          * item
        * [Individual]
          * item
      * Day
      * Date
      * Price - Group, fix/person, variable/person
        * Adults
        * kid02
        * kid35
        * kid611
        
* Quotation
  * Product/Activities
  * Computation
  * Customer Details
  
* Booking
  * Payment
  
        
  
  ### Some notes
  * An product may already have a pre-assigned team and date/s to run activity such that of public tours
  * Booking Agent may not be able to change pre-configured fields through a fix flag


