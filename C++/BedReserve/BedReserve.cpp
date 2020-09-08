// BedReserve.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"

#include <iostream>
using std::cout;
using std::cin;
using std::endl;

#include <string.h>
#include <iostream>

void hospStatRep(int *TOTAL_REG_BEDS, int *TOTAL_ICU_BEDS, int *TOTAL_ICU_VENT_BEDS, int *normal_reg_beds_needed, int *normal_icu_beds_needed, int *normal_icu_vent_beds_needed){
	cout << "HOSPITAL STATISTICS REPORT" << endl;
	cout << "--------------------------" << endl;
	cout << "Total Regular Beds in Hospital: " << *TOTAL_REG_BEDS << endl;
	cout << "Number of ICU Beds in Hospital: " << *TOTAL_ICU_BEDS << endl;
	cout << "Number of ICU Beds with Ventilators: " << *TOTAL_ICU_VENT_BEDS << endl;
	cout << endl;
	cout << "Average Number of Regular Beds Occupied: " << *normal_reg_beds_needed << endl;
	cout << "Average Number of ICU Beds Occupied: " << *normal_icu_beds_needed << endl;
	cout << "Average Number of ICU Beds With Ventilators Occupied: " << *normal_icu_vent_beds_needed << endl;
    cout << endl;
}

int main ()
{
	int blank;

	int TOTAL_REG_BEDS = 2700;
	int TOTAL_ICU_BEDS = 120;   // separate from reg beds
	int TOTAL_ICU_VENT_BEDS = 50;  // separate from ICU beds
	
	double PERCENT_REG_NEEDED = 0.80;
	double PERCENT_ICU_NEEDED = 0.55;
	double PERCENT_ICU_VENT_NEEDED = 0.15;

	int normal_reg_beds_needed = int(TOTAL_REG_BEDS * PERCENT_REG_NEEDED);
	int normal_icu_beds_needed = int(TOTAL_ICU_BEDS * PERCENT_ICU_NEEDED); 
    int normal_icu_vent_beds_needed = int(TOTAL_ICU_BEDS * PERCENT_ICU_VENT_NEEDED);
	
	int general_trial_beds_needed;
	int emerg_trial_reg_beds_needed; // number of beds
	int emerg_trial_icu_beds_needed; // percentage
	int emerg_trial_icu_vent_beds_needed; // percentage

	int emerg_icu_beds_needed;
	int emerg_icu_vent_beds_needed;

	int regBedsLeft;
	int icuBedsLeft;
	int icuVentBedsLeft;	

	char statDisplayChoice;

	/*cout << "Display Hospital Statistics? (Y/N): " ;
	cin >> statDisplayChoice;
	cout << endl;*/

	//if(statDisplayChoice ==+ "Y" || statDisplayChoice ==+ "y"){
       hospStatRep(&TOTAL_REG_BEDS, &TOTAL_ICU_BEDS, &TOTAL_ICU_VENT_BEDS, &normal_reg_beds_needed, &normal_icu_beds_needed, &normal_icu_vent_beds_needed);
	//} 

	cout << "Enter trial number that may be hospitalized due to emergency: " ;
	cin >> general_trial_beds_needed;
	cout << endl;

	cout << "Enter percentage that may require ICU beds: " ;
	cin >> emerg_trial_icu_beds_needed;
	cout << endl;

	emerg_icu_beds_needed = general_trial_beds_needed * emerg_trial_icu_beds_needed / 100;
	icuBedsLeft = TOTAL_ICU_BEDS - normal_icu_beds_needed - emerg_icu_beds_needed;
	emerg_trial_reg_beds_needed = general_trial_beds_needed - emerg_icu_beds_needed;
	regBedsLeft = TOTAL_REG_BEDS - normal_reg_beds_needed - emerg_trial_reg_beds_needed;

	cout << "Enter percentage of those requirng ICU that might need ventilators: " ;
	cin >> emerg_trial_icu_vent_beds_needed;
	cout << endl;

	emerg_icu_vent_beds_needed = emerg_icu_beds_needed * emerg_trial_icu_vent_beds_needed / 100;

	emerg_icu_beds_needed = emerg_icu_beds_needed - emerg_icu_vent_beds_needed;

    icuBedsLeft = icuBedsLeft + emerg_icu_vent_beds_needed;
	
	icuVentBedsLeft = TOTAL_ICU_VENT_BEDS - normal_icu_vent_beds_needed - emerg_icu_vent_beds_needed;
	
	cout << "Number of regular beds occupied due to emergency: " << emerg_trial_reg_beds_needed << endl;
	cout << "Number of ICU beds occupied due to emergency: " << emerg_icu_beds_needed << endl;
	cout << "Number of ICU beds with ventilators occupied due to emergency: " << emerg_icu_vent_beds_needed << endl;
	cout << endl;
	cout << "Number of regular hospital beds remaining in hospital: " << regBedsLeft << endl;
	cout << "Number of ICU beds remaining in hospital: " << icuBedsLeft << endl;
	cout << "Number of ICU beds with ventilators remaining in hospital: " << icuVentBedsLeft << endl;
	

    cin >> blank ;
	
	// return 0;
}
