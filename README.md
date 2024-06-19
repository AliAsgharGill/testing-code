# test function get 2 arguments, 1st name of test that can be any, 2nd callback function which have logic of test using render(here write component that get tested), screen and expect() method, these 3 method in the callback function.

# When using react we can use test.skip, test.only, and when using keyword "it" then fit and xit.

## There are total three types of quires for finding single element in the component,page. 1. getBby.. 2. queryBy.. 3.findBy..

## There are total three types of quires for finding multiple elements in the component,page. 1. getBbyAll.. 2. queryByAll.. 3.findByAll..

**When using findBby and findByAll we need to make that test asynchronous using async await, and default time of findBy and findByAll is 1000ms**

# Whenever using user-event library we need to make it asynchronous using async await and also need to make each test user.setup()

# if input type is number then its role in getByRole is spinbutton.
