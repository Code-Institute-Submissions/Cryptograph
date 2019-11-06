# CRYPTOGRAPH - Wayne Pegg Milestone 2 submission - Code Institute/Full Stack Web Developer

CRYPTOGraph/CRYPTOGraphy is my submission for one of my 5 assessment projects for the above mentioned course.

However, since starting this project and having researched into this area, there is also a possible and future business product that will be discussed breifly later in the file.

This site is currently published on the following link:

[CRYPTOGraphy](https://peggy535.github.io/Cryptograph/)

## Conception

Having a avid interest in Cryptocurrency, Options trading and Data Analytics, I was drawn to this option for my milestone 2 project.

Having used several different trading platforms, I understand that it can take some time for the user to comprehend and fully appreciate how the respective
dashboards function. I have also experienced frustration in what I term, 'negative investor friendly functionality'. As an investor, I have one sole objective ultimately, to make profit as easily as possible. I don't neccesarily want to have to use mathematics to calculate the Return on Investment (ROI)

Another important function which appears to be lacking in current software and trading platforms is a lack of effective and efficient notification. I have experienced, many times, late notifications or none at all when assets have hit or reached certain profit targets. As you can imagine, this is extremely frustrating!

The purpose of this project is straight-forward. Provide a user-friendly, simple and information-rich dashboard that portrays the information I wish to have as an investor of a Crypto Currency asset. In this case, Bitcoin (BTC). Ultimately, as an investor, I will have and set a specific ROI. For this example, I have assumed the following:

"I'm the holder of 1 BTC that I purchased on the 1st April 2018 for $4000. My profit target is 350% ROI. I want a dashboard has information that is bias towards my desires! That is, when my assets reach 350% ROI"


## UX Design

The main emphasise for this was to ensure simplicity for the investor whilst ensuring the data that is considered important to the users needs is presented in an effective and easily-identifiable manner.

Two landing images (SVG) were created for the Desktop vs. Table/Mobile responsive designs respectively using Adobe Illustrator.

A The user is then presented with two options, to sign-in or sign-up. These screens were simply created for realism, they do not authenticate the user input although the email is evidently validated as per the Bootstrap specs.

The dashboard is then presented. For this project, it is assumed the user has already an open account and has entered their respective assets information which would include such information as; Coin, number of assets, purchase date, purchase value of coin, ROI percentage, methods of notification etc...

The graphs/data were presented in such a fashion that all elements are responsive to the viewport size.

The wireframes constructed by Adobe XD are presented in the following directory [Please click here to view these](https://github.com/Peggy535/Cryptograph/tree/master/assets/Wireframes)

## Features of the dashboard

The user is presented with the following information:

| Feature                   | Description                    
|---------------------------|--------------------
| Guided Tour               |Interactive popovers guide the user though the <br>dashboard highlighting the various features.<br>This is linked to the volume    |                           |chart such that<br>when a time frame is selected, the volume chart simultaneously changes.
|                           |
| Overview of BTC coin      |Graph showing BTC value against time. Data being<br>supplied by a `.csv` file.
|                           |
| BTC Quick Stats           |A data table with the previous 7 days trader info including,<br>the daily Open, Close, High and Low values reached.
|                           |
| Profit vs time graph      |Taking the users assumed and previously submitted data<br>a graph showing profit versus time since purchase is displayed.
|                           |
| User defined data         |A table showing the current data stored by the user
|                           |
| Volume of BTC traded      |A graph showing volume of traded BTC per day versus time.<br>This is linked directly to the Overview of BTC chart<br>
|                           |where the user can select a specific date range.
|                           |
|Trading Focus              |A 'monthly' imaginary service where analysis of certain aspects<br>of the specific coins trading performance is considered.<br>
|                           |In this example, a Scatter Plot is offered examining the relationship<br> of BTC value vs. BTC traded volume.<br>
|                           |This chart is interactive for the user to select an area of data points.<br>All respective graphs on the dashboard will display    |                           |the associated data points.

Data for the 