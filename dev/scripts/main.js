PSEUDOCODE:
Input field where users input name of a movie (required)
(if no movie exists / can be found - do something - but we will have autocomplete to avoid this problem)
On submit: Searches the IMDB database for movies with the same title
Also look at the genres that the movie title is associated with
Return list of X (4) desired books
Connect to a book API (Google Books) to determine length of book (depends on API data)
Also display a paragraph (of 100 words) for user to time themselves reading
Timer on the designated paragraph. User can hit start to begin, and then stop once they finish reading it.
When click on start, timer starts (visible to user)
Option to reset timer
When click stop, timer stops - we store the number into a variable: UserTime.
Reading Speed: Measured in words per minute. Function: ReadingSPeed to Take number of words and divide by UserTime
Display Reading Speed: eading speed is displayed.

Input field: "How much time will you spend reading each day?" User inputs a number
Take that value and store it in a variable: UserFreeTime

Calculate how long it takes to read the book based on UserFreeTime and ReadingSpeed


readingSpeed = Words / minute
bookAvg = 250 words / page
totalPages = x pages / book (in pages)

using math, determine:
totalWords = totalPages * bookAvg (in words)

totalTimeToRead = totalWords / readingSpeed (in time)

freeTimePerDay = minutes

total days totalTimeToRead / freeTimePerDay

A paragraph is displayed to the user that shows the results
Also included is an average result (so user can compare their results to the average person)
(Disclaimer: Numbers may be slightly inaccurate)