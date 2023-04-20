# Teo Links
[CDC NIH State Cancer Profile](https://statecancerprofiles.cancer.gov/map/map.withimage.php?00&county&001&001&00&0&01&0&1&5&0#results)
[EPA CO2 BY Country](https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data)
[WHO Air Polution](https://www.who.int/data/gho/data/themes/air-pollution)

# Sean Links
### Power Plant Locations and Types
[EPA Power Plants and Neighboring Communities](https://www.epa.gov/power-sector/power-plants-and-neighboring-communities)

### Nuclear Reactor Data
[List of Power Reactor Units](https://www.nrc.gov/reactors/operating/list-power-reactor-units.html)

[Information Digest, 2022–2023](https://www.nrc.gov/reading-rm/doc-collections/nuregs/staff/sr1350/index.html)

[EPA eGRID Data Download Site](https://www.epa.gov/egrid/download-data)

### US County Boundaries
[OpenDatSoft US County Boundaries](https://public.opendatasoft.com/explore/dataset/us-county-boundaries/table/?disjunctive.statefp&disjunctive.countyfp&disjunctive.name&disjunctive.namelsad&disjunctive.stusab&disjunctive.state_name)


# Will Links - Global Health Metrics

## Global GDP per capita (from years 2015 to 2019)
https://ourworldindata.org/grapher/gdp-per-capita-worldbank?tab=table



## Global Air Quality from openaq hosted on BigQuery by Google
https://console.cloud.google.com/bigquery?_ga=2.260127758.207968559.1681230265-1803462589.1681230265&project=elite-mix-372403&ws=!1m5!1m4!4m3!1sbigquery-public-data!2sopenaq!3sglobal_air_quality!1m5!1m4!1m3!1selite-mix-372403!2sbquxjob_52832293_187724e6a9c!3sUS

This dataset is humongous (>5E06 rows) and was found within Google Cloud Bigquery.
Just search openaq and click on "global_air_quality" if you have trouble finding it.
The original raw data file was too big, so, this is table is the result of a groupby function. Its a list of all of the raw data for countries between the months of april 2022 and may 2022.
It is Raw Data in the sense of still having null values.
The original data set has about 5E06 rows of data. This data can be used for machine learning model training since there are many individual cities.
Potential Strong Point: This dataset has pollution data for THOUSANDS of US cities, we can use this to train a strong ML model for predicting life expectancy per US city potentially.

## GDP per capita (2015-2019)
https://ourworldindata.org/grapher/gdp-per-capita-worldbank?tab=table

## Healthcare spending per capita (2015 to 2019) **Done**
che_per_capita_usd.csv
https://www.who.int/data/gho/data/indicators/indicator-details/GHO/current-health-expenditure-(che)-per-capita-in-us$


## Life Expectancy (only years 2015 and 2019) **Done** (output)
https://www.who.int/data/gho/data/indicators/indicator-details/GHO/life-expectancy-at-birth-(years)


## Poverty Level (miscellaneous years per country)
The poverty rate is the number of people (usually expressed as a percentage) in a given demographic group whose income falls below the poverty line.
https://worldpopulationreview.com/country-rankings/poverty-rate-by-country
