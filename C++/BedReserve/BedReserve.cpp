// BedReserve.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"

#include <iostream>
using std::cout;
using std::cin;
using std::endl;

#include <string.h>
#include <iostream>


int main ()
{
	int blank;

	int TOTAL_REG_BEDS = 2700;
	int TOTAL_ICU_BEDS = 430;   // separate from reg beds
	int TOTAL_ICU_VENT_BEDS = 115;  // included within the ICU beds, ie 115 of the 430 icu beds have ventilators
	
	double PERCENT_REG_NEEDED = 0.80;
	double PERCENT_ICU_NEEDED = 0.70;
	double PERCENT_ICU_VENT_NEEDED = 0.07;

	int normal_reg_beds_needed = int(TOTAL_REG_BEDS * PERCENT_REG_NEEDED);
	int normal_icu_beds_needed = int(TOTAL_ICU_BEDS * PERCENT_ICU_NEEDED); 
    int normal_icu_vent_beds_needed = int(TOTAL_ICU_BEDS * PERCENT_ICU_VENT_NEEDED);
	
	//int EMERG_REG_BEDS_NEEDED; 
	//int EMERG_PERCENT_ICU_NEEDED; 
	//int EMERG_PERCENT_ICU_VENT_NEEDED; 
	
	int emerg_trial_reg_beds_needed; // number of beds
	int emerg_trial_icu_beds_needed; // percentage
	int emerg_trial_icu_vent_beds_needed; // percentage

	int emerg_icu_beds_needed;
	int emerg_icu_vent_reg_beds_needed;

	int regBedsLeft;
	int icuBedsLeft;
	int icuVentBedsLeft;

//	cout << TOTAL_REG_BEDS<< endl;
//	cout << normal_reg_beds_needed << endl;
//	cout << emerg_trial_reg_beds_needed << endl;

	cout << "Total Regular Beds in Hospital: " << TOTAL_REG_BEDS << endl;
	cout << "Total ICU Beds in Hospital: " << TOTAL_ICU_BEDS << endl;
	cout << "Number of ICU Beds that have ventilators: " << TOTAL_ICU_VENT_BEDS << endl;
	cout << "Average Number of Regular Beds Occupied: " << normal_reg_beds_needed << endl;
	cout << "Average Number of ICU Beds Occupied: " << normal_icu_beds_needed << endl;
    cout << endl;

	cout << "Enter trial number that may be hospitalized due to emergency: " ;
	cin >> emerg_trial_reg_beds_needed;
	cout << endl;

	
	regBedsLeft = TOTAL_REG_BEDS - normal_reg_beds_needed - emerg_trial_reg_beds_needed;
	/*
	cout << "Number of regular beds occupied due to emergency: " << emerg_trial_reg_beds_needed << endl;
	cout << "Regular hospital beds remaining in hospital: " << regBedsLeft << endl << endl;
    */

	cout << "Enter percentage that may require ICU beds: " ;
	cin >> emerg_trial_icu_beds_needed;
	cout << endl;

	//cout << TOTAL_ICU_BEDS << endl;
	//cout << normal_icu_beds_needed << endl;
	cout << emerg_trial_reg_beds_needed << endl;
	cout <<	emerg_trial_icu_beds_needed << endl;
	emerg_icu_beds_needed = emerg_trial_reg_beds_needed * emerg_trial_icu_beds_needed / 100;
	cout << emerg_icu_beds_needed << endl;
	
	icuBedsLeft = TOTAL_ICU_BEDS - normal_icu_beds_needed - emerg_icu_beds_needed;
	emerg_trial_reg_beds_needed = emerg_trial_reg_beds_needed - emerg_icu_beds_needed;
	regBedsLeft = regBedsLeft + emerg_trial_icu_beds_needed;

	cout << "Number of regular beds occupied due to emergency: " << emerg_trial_reg_beds_needed << endl;
	cout << "Number of ICU beds occupied due to emergency: " << emerg_icu_beds_needed << endl;
	cout << "Regular hospital beds remaining in hospital: " << regBedsLeft << endl;
	cout << "Number of ICU beds remaining in hospital: " << icuBedsLeft << endl;

	 cout << "Enter percentage that may require ICU beds that have ventilators: " ;
	cin >> emerg_trial_icu_vent_beds_needed;
	cout << endl;
	
	icuVentBedsLeft = TOTAL_ICU_VENT_BEDS - PERCENT_ICU_VENT_NEEDED - emerg_trial_icu_vent_beds_needed;
	
	cout << "Number of regular beds occupied due to emergency: " << emerg_trial_reg_beds_needed << endl;
	cout << "Number of ICU beds occupied due to emergency: " << emerg_icu_beds_needed << endl;
	cout << "number of ICU beds with ventilators occupied due to emergency: " << emerg_trial_icu_vent_beds_needed << endl;
	cout << "Regular hospital beds remaining in hospital: " << regBedsLeft << endl;
	cout << "Number of ICU beds remaining in hospital: " << icuBedsLeft << endl;
	cout << "Number of ICU beds with ventilators remaining in hospital: " << icuVentBedsLeft << endl;
	

    cin >> blank ;
	
	// return 0;
}
