// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the income tax.
 */
function calculateIncomeTax() {
  // input
  const hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  const hourlyWage = parseFloat(document.getElementById("hourly-wage").value)

  // process
  const pay = hoursWorked * hourlyWage * (1.0 - 0.18)
  const taxes = hoursWorked * hourlyWage * 0.18

  // output
  // output
  document.getElementById("pay").innerHTML = `Your pay will be: $${pay.toFixed(
    2
  )}<br>The government will take: $${taxes.toFixed(2)}`
}
