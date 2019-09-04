# Travel Product Authoring
An app used by travel agent to author a detailed travel product.

## Project Motivation
To create an effective, smart, and extensible tool in authoring travel products.

## Main Actor: Travel Agent

## Project Features
* A feature for travel agent to specify in detail important information related to authoring a travel product
* It offers flexibility for single day activity to multiday activities
* Includes a feature to list resources required for the product
* A feature to pre-assign a resource to a travel product

## Use Case
1. Travel agent authors a travel product
2. Travel agent creates a quotation
3. Travel agent confirms a booking

## App Design

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
  
