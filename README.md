# CRYPTOGRAPH - Wayne Pegg Milestone 2 submission - Code Institute/Full Stack Web Developer

CRYPTOGraph/CRYPTOGraphy is my submission for one of my 5 assessment projects for the above mentioned course.

However, since starting this project and having researched into this area, there is also a possible use-case/business product that will be discussed breifly later in this file.

This site is currently published on the following link:

[CRYPTOGraphy](https://peggy535.github.io/Cryptograph/)

This dashboard application has been built to be responsive to, and for any device type. Please also note, the signin and signup pages were not built to be functional. They were simply added to this project for a 'realism' factor.

## Conception

Having an avid interest in Cryptocurrency, Options Trading and Data Analytics, I was drawn to this option for my Milestone 2 project with Code Institute.

Having used several different trading platforms, I understand that it can take some time for the user to comprehend and fully appreciate how the respective
dashboards function. I have also experienced frustration in what I term, 'negative investor friendly functionality'. As an investor, I have one sole objective ultimately, to make profit as easily as possible. I don't neccesarily want to have to use mathematics to calculate the exact coin value for a specific Return on Investment (ROI).

Another important function which appears to be lacking in current software and trading platforms is a lack of effective and efficient notification. I have experienced, many times, late notifications or none at all when assets have hit or reached certain profit targets. As you can imagine, this is extremely frustrating!

The purpose of this project is straight forward. Provide a user-friendly, simple and information-rich dashboard that portrays the information I wish to have as an investor of a Crypto Currency asset. In this case, Bitcoin (BTC). Ultimately, as an investor, I will have and set a specific ROI. For this example, I have assumed the following:

"I'm the holder of 1 BTC that I purchased on the 1st April 2018 for $4000. My profit target is 350% ROI. I want a dashboard that portrays this information."


## UX Design

The main emphasise for this was to ensure simplicity for the investor whilst ensuring the data that is considered important to the users needs is presented in an effective and easily-identifiable manner.

Two landing images (SVG) were created for the Desktop vs. Table/Mobile responsive designs respectively using Adobe Illustrator.

The user is then presented with two options, to sign-in or sign-up. These screens were simply created for realism, they do not authenticate the user input.

The dashboard is then presented. For this project, it is assumed the user has already an open account and has entered their respective asset information which would include such information as; Coin, number of assets, purchase date, purchase value of coin, ROI percentage required, methods of notification etc...

The graphs/data were presented in such a fashion that all elements are responsive to the viewport size.

The wireframes constructed by Adobe XD are presented in the following directory [Please click here to view these](https://github.com/Peggy535/Cryptograph/tree/master/assets/Wireframes)

## Features of the dashboard

The user is presented with the following information:

| Feature                   | Description                    
|---------------------------|--------------------
| Guided Tour               |Interactive popups guide the user though the <br>dashboard highlighting the various features.<br>This is linked to the volume    |                           |chart such that<br>when a time frame is selected, the volume chart simultaneously changes.
|                           |
| Overview of BTC coin      |Graph showing BTC value against time. Data being<br>supplied by a `.csv` file.
|                           |
| BTC Quick Stats           |A data table with the previous 7 days trader info including,<br>the daily Open, Close, High and Low values reached.
|                           |
| Profit vs time graph      |Taking the users assumed and previously submitted data<br>a graph showing profit versus time since purchase is displayed.
|                           |
| User defined data         |A table showing the current data stored by the user
|                           |
| Volume of BTC traded      |A graph showing volume of traded BTC per day versus time.<br>This is linked directly to the Overview of BTC chart<br>where the user can select a specific date range.
|                           |
| Trading Focus             |A 'monthly' imaginary service where analysis of certain aspects<br>of the specific coins trading performance is considered.<br>In this example, a Scatter Plot is offered examining the relationship<br> of BTC value vs. BTC traded volume.<br>This chart is interactive for the user to select an area of data points.<br>All respective graphs on the dashboard will display the associated data points.
|                           |

Data for the project was provided from a free service [Crypto Datadownload](http://www.cryptodatadownload.com/). From this site, I simply downloaded a csv file that is used within the project. In this case `assets/data/Binance_BTC_2.csv`.

## Features of the dashboard

Some of the possible future features include:

1. Development of an asset input page. Security would have to be considered as it would mean having access to an individuals exchange account details.

2. Connection to a live-feed of data. API's such as [CoinAPI.io](https://www.coinapi.io/), [CryptoAPIs](https://cryptoapis.io/) and an interesting aspect of data analytics that is becoming increasingly used and relied upon, that being market-sentiment based on social media posts and other media platforms/activity. A great platform for this data can be found at [santiment.net](https://santiment.net/).

3. Correct implementation of user sign-in and sign-up account page with authentication and validation.

4. Implementation of several forms of communication for notification. Ideally, this would mean the implementation of an API micro-service such as Twilio.

5. Development of the service into a PWA with the integration of and utilization of Gatsby, Netlify and React.js.

6. Formulate and develop the service into a paid subscription service.

## Technologies used

The project has made use of the following technologies;

HTML5, CSS3, Bootstrap 4, Javascript, JQuery, D3.js, DC.js and Crossfilter.

Further to this, [anno.js by Dan Fox](http://iamdanfox.github.io/anno.js/) was employed to provide the user an interacive tour of the dashboard.

## Testing

Testing for this project was conducted in the 'shoes' of an actual user. That is, all possible options and scenario's were completed as detailed below:

1) Landing page

- Ensured the image, font size and sign-in/sign out buttons were rendered correctly for all responsive device types and orientations

2) Dashboard Guided-Tour

- Ensured that the guided tour is functional on all device viewport sizes. Position of the tour messages were viewable no matter what device or orientation of screen. This was accomplished using Google Dev tools and running through the guided tour for all screen sizes and orientations

3) Sign Out button

- The link was tested to ensure that no matter what device type, when this component was clicked, the correct landing page was rendered correctly.

4) Overview of Coin: BTC

- The graph was reviewed ensuring the correct date range and value's had been published from the `.csv` file. Several highs and low's were choosen and the value inspected to ensure the data had been plotted as should be expected.
- The chart was checked to ensure responsive design, reviewing all screen sizes and orientations via Google Dev tools.
- This chart was built to allow a time selection filter to be applied. This was checked several times for use ensuring this functioned correctly. This chart was also checked against the Trading Volume chart, to ensure that the Trading Volume data represented on the Trading Volume chart was exactly reflective of the date range choosen on the Overview of Coin Chart.
- Further to this, when the selected date range was deselected from the Overview of Coin chart, this was also directly rendered and actioned on the Trading Volume chart

5) BTC Quick Stats table

- The date table was checked to ensure that the data being displayed was correct as per the data on and from the `.csv` file. It was also checked to ensure the 'previous' 7 days of data was displayed. It was assumed, for this specific reason, that yesterday's date was the 5th November 2019.

6) Overview of Profits 

- Firstly, the chart was checked ensuring that the correct 'user-defined' date-range had been displayed correctly. This being from 1st April 2018 to the present time. 
- Several high's and lows were choosen from the chart to ensure that the correct percentage of profits, both +ve and -ve were reflected in the graph. As can be seen, the profits became slightly negative during the approximate period of NOv/Dec 2018 to April 2019. These results were checked such that the calculations were performed from the raw data using basic mathematics.
- The live guide lines were checked for functionality by hovering the mouse over the graphical line ensuring the correct levels were reflected on the x and y-axis for the value being hovered over

7) Profit Factors

- This was a 'made-up table of user data. This was checked for correct rendering and responsive behaviour.

8) Trading Volume

- The graph was reviewed ensuring the correct date range and value's had been published from the `.csv` file. Several data points were choosen and the value inspected to ensure the data had been plotted as should be expected.
- The chart was checked to ensure responsive design, reviewing all screen sizes and orientations via Google Dev tools.

9) Trading Focus and Scatter Plot

- Correct formatting and rendering for the text area was ensured as well as responsive behaviour for all screen sizes.
- The Scatter Plot was firstly checked to ensure correct rendering and responsive behaviour
- Several data points were choosen of various different values ensuring that these values were reflected correctly as per the raw data.
- The 'Click for a tip!' button was correctly fucntioning for all screen sizes and displayed the intended and correct text.
- The x and y-axis were checked to ensure the corect range of values were reflected.
- Several different areas of data were selected. I ensured the associated data points from the Scatter Plot were reflected on all three charts accordingly. 

## Deployment

This project was saved the following repository on [Github Peggy535/Cryptograph](https://github.com/Peggy535/Cryptograph).

There were not differences within configuration files nor any branches constructed.

The projects site was deployed to the following site address, [click here](https://peggy535.github.io/Cryptograph/).

## Credits

Content

- Thanks and acknowledgment is given to [Cryptodatadownload.com](http://www.cryptodatadownload.com/) for their excellent `.csv` data files used in this project.
- dc.js, d3.js and crossfilter communities for the content and API documentation references on Github.

Acknowledgements

- A huge thanks for the supportive, encouring and positive input my tutor, Spencer, has had into this project. He has been a great help and really inspired my efforts. Sincere thanks Spencer.
