# SWAT Project: US and Global Health Metrics for Disease and Life Expectancy Predictions
Welcome to Team SWAT's final project!

- **S**ean Wood
- **W**ill Mino
- **A**fra Panahi
- **T**eo Anderson

## Communication Protocols

The main form of communication between group members takes place in a private Slack channel, with a pinned thread for active tasks. Additionally, there is a Google document containing minutes from each group meeting, including topics such as our divided responsibilities and upcoming tasks to be completed.

## Selected Topic and Reasoning for Selection 
Probing the Links Between Energy Sources, Pollution, and Socioeconomic Factors with Various Health Metrics

Nuclear energy is often feared by the public because of the potential health hazards of radiation. But are these fears warranted? Or are normal fossil fuel power plants more dangerous for our health? We plan to compare the two to see which one has a stronger correlation to a variety of diseases and cancers.

On a global scale, the required metrics are often not collected at a granular-enough scale to do a similar study, so instead we are going to see if we can develop a model that takes in commonly available worldwide data about countries and outputs the country's life expectancy.

## Questions the Group Originally Aimed to Answer with the Data
- **Question 1a**: Does the proximity of a nuclear power plant to a county in the United States increase the risks of cancer (e.g. thyroid) for the residents of that county?
- **Question 1b**: Do (1) the proximity of a pollution-emitting fossil fuel power plant to a county and (2) pollutant emissions (NOx, SOx, particulate matter, etc) correlate to rates of lung diseases, cardiovascular diseases, or cancers?
- **Question 2**: Can you predict a country’s life expectancy with various readily available factors such as GDP per capita, healthcare spending per capita, energy sources, pollution levels, poverty levels, obesity rates, etc?

## Description of the Data Sources
- Every county in the US and the coordinates of its geographic midpoint
- Every nuclear power plant currently operating in the US, their geographic coordinates, and their nameplate generation capacity
- Every fossil fuel (oil, gas, coal, biomass, other) power plant currently operating in the US, their geographic coordinates, their nameplate generation capacity, and their pollution emissions (NO<sub>x</sub>, SO<sub>2</sub>, CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O, PM<sub>2.5</sub>)
- Global dataset pollution data: various pollutions emitions such as co, so2, no2, no, o3, nh3, etc. Obtained from Openweathermap Historical Pollution API.
- Incidence rates of several types of cancers for each county in the US
- Incidence rates of various lung and cardiovascular diseases for each county in the US
- Life expectancy data for every country
- GDP per capita data for every country
- Healthcare spending per capita for every country
- Poverty rates for every country
- Obesity rates for every country
- Pollution levels / air quality indices in every country

Links to data sources can be found in [links.md](https://github.com/TeodorAnderson/SwatProject/blob/main/links.md)

## Project Progress

### Question 1a:

**Completed**
- Collect US county midpoint coordinate data
- Collect nuclear plant data
- Collect county-by-county cancer data
- Clean datasets and combine for ML model
- Run preliminary ML models (Lasso and Random Forest regressors) with each type of cancer as the target

**In Progress**
- Creating database for the ML data

**Upcoming**
- Attempt to create a neural network regression model for better results
- Create visualizations/map in Tableau or JavaScript

### Question 1b:

**Completed**
- Collect US county midpoint coordinate data
- Collect fossil fuel plant data
- Collect county-by-county cancer data
- Clean datasets and combine for ML model
- Run preliminary ML models (Lasso and Random Forest regressors) with each type of cancer as the target		

**In Progress**
- Collecting county-by-county lung and cardiovascular disease data
- Clean data
- Add to existing dataset
- Run ML models with new diseases as targets
- Creating database for the ML data

**Upcoming**
- Refine models by removing unnecesary data
- Attempt to create a neural network regression model for better results
- Create visualizations/map in Tableau or JavaScript

### Question 2:

**Completed**
- Collecting country socioeconomic/health data
- Automated Database schema generator
- Reading and writing data to pgAdmin postgres from python and vice versa.
- Database Schema
- Database
- Cleaned data hosted on AWS S3 bucket using boto3 python module
- Clean data and combine into one dataframe/table for ML model. [cleaned_global_data](https://github.com/TeodorAnderson/SwatProject/blob/main/cleaned_data/global_clean/global_health_data.csv)
- ML Model: Life expectancy predictions per country are made by a prototype ML model.
- Data set was expanded to include over 149 countries. This was made possible by an API call to the openweathermap historical pollution data API.

**In Progress**
- Further optimize the global health data ML models to improve accuracy score for life expectancy predictions.

**Upcoming**
- Attempt to create a neural network regression model for better results
- Create visualizations/map in Tableau or JavaScript


### Global Health Metrics Machine Learning:
- Both cateogorical and continuous life expectancy predictions were made
- From global_health_data.csv file, three categories low, medium, and high life expectancy were created.
- LogistcRegression ML model was used for categorical predictions.
    - This model exhibited a balanced accuracy score of 0.94 for predicting life_expectancy groups (low, medium, and high).
- RandomForestRegressor ML model was used for continuous data predictions (life expectancy floating pont numbers).
    - This model exhibited an r^2 value of 0.83 for predicting continuous values of life_expectancy.
- Multiple Linear Regression Model predicted continuous values for life_expectancy as well.
    - This model exhibited an r^2 value of 0.74 and mean squared error (mse) of 17.9.




### Data Pipeline
Use the data_pipeline.ipynb file to allow for the flow of data through our pipeline.

**Completed**
1. Data is read from an S3 bucket into python. Each table is directly stored in python as a dataframe.
2. An automated schema is generated for each dataframe.
3. Via sqlAlchemy, each table schema is written to pgAdmin postgres using python. All data corresponding to each table is also written to pgAdmin postgres.
4. SQL queries can be made using postgres SQL in pgAdmin. Any resulting tables can be transferred back to our [data_pipeline.ipynb](https://github.com/TeodorAnderson/SwatProject/blob/main/scripts/data_pipeline/data_pipeline.ipynb) script.
5. SqlAlchemy allows for data to be read from postgres pgAdmin into the data_pipeline.ipynb python script. This allows for aggregated data to be put into ML models.

**In-progress**
- Data will be transferred from python to a data visualization software such as Tableau or PowerBI.


![Health_Metrics_Schema](https://github.com/TeodorAnderson/SwatProject/blob/main/schema_.png)

### SQL Database

![SQL_Database](https://github.com/TeodorAnderson/SwatProject/blob/main/database.png)

