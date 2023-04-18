# SWAT Project
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
- **Question 2**: Can you predict a country’s life expectancy with various readily available factors such as GDP per capita, healthcare spending per capita, energy sources, pollution levels, poverty levels, rates of smoking, obesity rates, etc?

## Description of the Data Sources
- Every county in the US and the coordinates of its geographic midpoint
- Every nuclear power plant currently operating in the US, their geographic coordinates, and their nameplate generation capacity
- Every fossil fuel (oil, gas, coal, biomass, other) power plant currently operating in the US, their geographic coordinates, their nameplate generation capacity, and their pollution emissions (NO<sub>x</sub>, SO<sub>2</sub>, CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O, PM<sub>2.5</sub>)
- Incidence rates of several types of cancers for each county in the US
- Incidence rates of various lung and cardiovascular diseases for each county in the US
- Life expectancy data for every country
- GDP per capita data for every country
- Healthcare spending per capita for every country
- Poverty rates for every country
- Obesity rates for every country
- Smoking rates for every country
- Pollution levels / air quality indices in every country

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
	

**In Progress**
- Collecting country socioeconomic/health data
- Creating database for the ML data

**Upcoming**
- Clean data and combine into one database for ML model
- Run preliminary ML models
- Attempt to create a neural network regression model for better results
- Create visualizations/map in Tableau or JavaScript
