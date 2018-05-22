let container = document.getElementById("container")


let navbar = document.createElement("div")
navbar.className = "topnav"
let title = document.createElement("h2")
title.className = "h2"
let currentPage = document.createElement("label")
currentPage.className = "current"
let categories = document.createElement("a")
categories.className = "hover"

let currentReviews = document.createElement("div")
currentReviews.className = "current-reviews"
let currentReviewsTitle = document.createElement("div")
currentReviewsTitle.className = "current-reviews-title"
let currentReviewsText = document.createElement("div")
currentReviewsText.className = "current-reviews-text"

let pageTextWatchkit = document.createElement("div")
pageTextWatchkit.className = "page-text"
let pageTextWatchkitTitle = document.createElement("div")
pageTextWatchkitTitle.className = "page-text-title"
let pageMainWatchkitText = document.createElement("div")
pageMainWatchkitText.className = "page-main-text"

let w3BarWatchkit = document.createElement("div")
w3BarWatchkit.className = "w3-bar"
let w3TextWatchkitComments = document.createElement("div")
w3TextWatchkitComments.className = "w3-text"
let w3TextWatchkitLikes = document.createElement("div")
w3TextWatchkitLikes.className = "w3-text"

let swiftBox = document.createElement("div")
swiftBox.className = "page-text"
let swiftBoxTitle = document.createElement("div")
swiftBoxTitle.className = "page-text-title"
let swiftBoxText = document.createElement("div")
swiftBoxText.className = "page-main-text"

let w3BarSwift = document.createElement("div")
w3BarSwift.className = "w3-bar"
let w3SwiftComments = document.createElement("div")
w3SwiftComments.className = "w3-text"
let w3SwiftLikes = document.createElement("div")
w3SwiftLikes.className = "w3-text"


title.innerHTML = "HighOnCoding"
currentPage.innerHTML = "Home"
categories.innerHTML = "Categories"
currentReviewsTitle.innerHTML = "Curse of the Current Reviews"
currentReviewsText.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
pageTextWatchkitTitle.innerHTML = "Hello WatchKit"
pageMainWatchkitText.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
w3TextWatchkitComments.innerHTML = "12 comments"
w3TextWatchkitLikes.innerHTML = "124 likes"
swiftBoxTitle.innerHTML = "Introduction to Swift"
swiftBoxText.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift Language and how you can get started."
w3SwiftComments.innerHTML = "15 Comments"
w3SwiftLikes.innerHTML = "45 Likes"


container.appendChild(navbar)
navbar.appendChild(title)
navbar.appendChild(currentPage)
navbar.appendChild(categories)

container.appendChild(currentReviews)
currentReviews.appendChild(currentReviewsTitle)
currentReviews.appendChild(currentReviewsText)

container.appendChild(pageTextWatchkit)
pageTextWatchkit.appendChild(pageTextWatchkitTitle)
pageTextWatchkit.appendChild(pageMainWatchkitText)

container.appendChild(w3BarWatchkit)
w3BarWatchkit.appendChild(w3TextWatchkitComments)
w3BarWatchkit.appendChild(w3TextWatchkitLikes)

container.appendChild(swiftBox)
swiftBox.appendChild(swiftBoxTitle)
swiftBox.appendChild(swiftBoxText)

container.appendChild(w3BarSwift)
w3BarSwift.appendChild(w3SwiftComments)
w3BarSwift.appendChild(w3SwiftLikes)