// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-05-06/sw.js", {
    scope: "/ICS2OR-Unit-05-06/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("firstInputedNumber").value)
  var numB = parseFloat(document.getElementById("secondInputedNumber").value)
  var product = 0
  var counter = 0

  while (counter < Math.abs(numB)) {
    counter++
    product = product + Math.abs(numA)
  }

  if ((numA < 0 && numB > 0) || (numB < 0 && numA > 0))
    document.getElementById("product").innerHTML =
      "The product is: " + product
  else
    document.getElementById("product").innerHTML =
      "The product is: " + product
}
