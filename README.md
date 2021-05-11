# Co-Win Vaccination slots - show only 18+ or 45+ or covaxin only, and available slots

TamporMonkey Script to show only centres which are doing vaccination as per your requirement and have the slots available.
It hides remaining slots to save user's time.

Insipred by @jacobSingh [work](https://github.com/jacobSingh/cowin-18plus-userscript)

It checks for the slot every 3 second and plays audio in case a slot is found. It also checks if user is still logged in, if not, it redirects to login page and plays audio so that user can re-login and restart the process.

Steps:
1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) for chrome. 
2. Download and install the script (please install any one, installing more than one won't work)
   1. [For 18+ slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.18available.user.js)
   2. [For 18+ covaxin slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.covaxin18available.user.js)
   3. [For 45+ slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.45available.user.js)
   4. [For 45+ covaxin slots](https://github.com/pankajbatra/cowin-show-only-18-available/raw/main/cowin.covaxin45available.user.js)
3. Reload Co-win site, select state and city of your choice and press search button.
4. Now it will play audio whenever slot is found and keep searching every 5 seconds.

> Note: 
> 1. Cowin site keeps logging out every 15 minutes, please go back to beneficiaries page and relogin if required and follow step 3 above.
> 2. Please don't press search button again and again, tool automatically does that for you every 3 seconds 
> 3. In case of any issue just refresh the page by pressing refresh button on chrome url bar and you should see tampermonkey icon on top right with 1 written on top of a red color icon

[Video recording and instructions](https://www.loom.com/share/0a34939fd51e4b758f0e0a03f8b47ed9)

https://www.loom.com/share/0a34939fd51e4b758f0e0a03f8b47ed9


[How to check whether page is being refreshed every 5 seconds or not](https://www.loom.com/share/c46722780d7843f69a70994b734d9b44)
