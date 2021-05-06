# Daily-Event-Planner

# Description
- For this repository I was tasked with creating a daily planner to log and save tasks for each hour in a standard work day in order to manage time more effectively. The project needed to have a the current day displayed at the top and timeblocks for each hour of the typical 9-5pm work day. Each timeblock needed to be color coded to indicate whether the it is in the past, present, or future of the current time. Each timeblock needed a text area that you could click on and type an event. Each timeblock also needed to have a save button that would save the event the user input in local storage and be loaded upon refresh.
- I think I could of saved some time by creating the timeblocks and save buttons with javascript and jquery but I did it all in the html. I had a little trouble comparing the id of each row to the current time to give it the correct past, present, or future class color designated in the CSS until I switched all the ids to military time and could compare them with id===currentTime. 
## Installation
- Click the link below to see the deployed application
- https://selden-cbc2021.github.io/Daily-Event-Planner/
## Usage 
- Click any timeblock you want and enter an event then click the save button that corresponds to the timeblock and the event will be saved and persist even after a page refresh.
-  ![alt text](assets/images/wds1.PNG)
-  ![alt text](assets/images/wds2.PNG)

