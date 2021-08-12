# cs455-term-project

## Team Weiner Dog :dog: ##
* Caleb Tran 
* Gurveer Kaur 
* Joseph Gao
* Jungwook Jang 

## Project Description ##

Developed WeinerX website to facilitate the buying/selling of sneakers between users on our website. The website supports sellers being able to list and sell their sneakers, and buyers being able to view listings and purchasing sneakers. We are storing user logins, as well as sale listings and price history to the database, as well as user shipping/purchasing information, and sneaker information. With this data, users will be able to create accounts, view listings, and view the price history of different sneakers they want to purchase. Additional functionally includes recommending sneakers based on previous purchases/page views, and displaying price table.  

## Task Requirements ##
* - [x] indicates completed; [] indicates not completed
### Minimum Viable Project Requirements ###
* - [x] 3UI (seller, buyer, admin) 
* - [x] Create accounts
* - [x] Shoes listing
* - [x] Basic search (Non Complex query search)

### Standard Requirements ###
* - [x] Search with complex filters (size, brand, price, etc)
*   [] Seller reviews 
* - [x] View seller profile
* - [x] View price history 
* - [x] View popular listings 
* - [x] Implement payment (simulated) saving credit card info to database
* - [x] Upcoming release info

### Stretch Requirements ###
* - [x] Recommend sneakers
* - [x] Display price chart
*   [] 360 degree shoes image
* - [x] Tracking sale process (buy history/sale history)

## Technology Used ##

### Frontend/Backend ### 
* HTML 
* CSS 
* Javascript 
* React/Redux
* NodeJS 
* MongoDB
* materialUI 

### Website Deployment ### 
* Heroku

## Above and Beyond functionality ##
* Implemented pagination to display large data items (shoes) on Search page
* search feature to filter on price and brand

## Next Steps ##
* Add Seller Reviews
* 360 degree rotation of shoes

## List of Contributions ##
* Gurveer Kaur: Worked on navbar using javascript, css and facilitated routing to various pages. Database design and implementation of frontend and backend integration for buyer and seller to buy/sell sneakers from the app (click to buy/click to sell, display shoe availability based on size and min price, get user credit card info and billing info, display total payment/payout amount after deducting transaction/shipping and processing charges). Api endpoint to post/update/get data from/to saleItem collection and userBillingInfo collection.
Fetched data from the backend to populate price table with size, quantity and price on product detail page.

* Caleb Tran: Worked on the layout of the profile page, parts of the nav bar, login/register pages, view/buy/sell history and popular sneakers. Implemented recommended sneakers using a markov-chain like algorithm. 

* Joseph Gao: Worked on authentication, some parts of profile page (my profile, add listing). Helped rework credit card info and billing section, helped implement some backend endpoints related to user profile/seller items, helped set up Redux state management, set up state persistance across pages. 

* Jungwook Jang: Worked on mainly on home page, Search Page, Admin Page, etc(product detail page, each listing of sneakers). Implemented custom grid style filter panel to enable user can select each size of shoes from scratch. Implemented various Api endpoint to allow data interation between client side and database. Implemented pagination with custom logic to avoid massive shoes rendered in one page. Created a simple logic to update the lowest asking price when user add a list of sneakers, or buy a sneakers.

## UI Design ## 

### Home Page ###

![Home Page](https://user-images.githubusercontent.com/44458556/119916175-e2cae480-bf18-11eb-91d9-eb23e3bb659b.png)

### Login Modal ### 

![Login Modal](https://user-images.githubusercontent.com/44458556/119916332-2faebb00-bf19-11eb-8a2c-b7d41347c6ea.png)

### Product Page ### 

![Product Page](https://user-images.githubusercontent.com/44458556/119916396-4ce38980-bf19-11eb-97bf-d565bb0cccf7.png)



