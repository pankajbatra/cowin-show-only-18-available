# Co-Win Vaccination slots - show only 18+ or 45+ or covaxin only, and available slots

TamporMonkey Script to show only centres which are doing vaccination as per your requirement and have the slots available.
It hides remaining slots to save user's time.

Insipred by @jacobSingh [work](https://github.com/jacobSingh/cowin-18plus-userscript)

It checks for the slot every 3 seconds and plays audio in case a slot is found. It also checks if the user is still logged in, if not, it redirects to the login page and plays audio so that the user can re-login and restart the process.

[Video recording and instructions](https://www.loom.com/share/0a34939fd51e4b758f0e0a03f8b47ed9)
https://www.loom.com/share/0a34939fd51e4b758f0e0a03f8b47ed9

Steps (you may also check video link at bottom for steps):
1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) for chrome. 
2. Download and install the script (please install only one of below, installing more than one won't work). 
   1. [For 18+ slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.18available.user.js)
   2. [For 18+ covaxin slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.covaxin18available.user.js)
   3. [For 45+ slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.45available.user.js)
   4. [For 45+ covaxin slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.covaxin45available.user.js)
3. Reload Co-win site, select the state and city of your choice and press the search button.
4. Now it will play audio whenever a slot is found and keep searching every 5 seconds.

**How to update**: Click on same above link and tampermoney would show option to update script.

> Note: 
> 1. Cowin site keeps logging out every 15 minutes, please go back to the beneficiaries page and log in if required and follow step 3 above.
> 2. Please don't press the search button, again and again, the tool automatically does that for you every 3 seconds
> 3. In case of any issue just refresh the page by pressing the refresh button on the chrome URL bar and you should see tampermonkey icon on the top right with 1 written on top of a red colour icon
> 4. In case you are getting errors after sometime like as shown below:

![Error screenshot](https://i.ibb.co/W0FvYL1/Screenshot-2021-05-27-at-12-09-27-PM.png)
 
https://drive.google.com/file/d/1FVzRjJio67j-H3V1Uuqlk7oz9FvcfGW8/view?usp=sharing


[How to check whether page is being refreshed every 5 seconds or not](https://www.loom.com/share/c46722780d7843f69a70994b734d9b44)
