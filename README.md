All code developed on Snack (changes can be seen there) : https://snack.expo.io/@lifealert116/swminiproject

We use cloud database in Firebase to store user’s login information and  trackers of symptoms. The email address will be added when users sign up with
authentication. The forms will be consists of Boolean function if users have symptoms and their zip code address. We can make a admin dashboard by have one more
indicator whether the user is admin. If true, they have access to the see the output of read data in cloud database what percentage of people have symptoms.
However, when we actually run the code for Auth and cloud database, there is error about package dependency. React Native can not connect the firebase correctly
even we put a number of firebase keys at the top.

For the API we decided to use the api given: 'https://api.covid19api.com'. We used the path 'https://api.covid19api.com/summary' in order to get the total global 
amounts of death.

The UI is simplistic and streamlined in order to make it easy to use.

