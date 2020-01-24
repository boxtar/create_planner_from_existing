/**
 * Johnpaul McMahon
 * Planner Adjustment helper script
 *
 * Imports:
 * import App from App.js
 *
 */

const TEST_MODE = true;
let TEST_DATA = [];
if (TEST_MODE) {
  TEST_DATA = [
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 0,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 500,
      "Curr. amount": 0,
      "PCB Budget": 0,
      Amendment: "",
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 0,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 500,
      "Curr. amount": 0,
      "PCB Budget": 0,
      Amendment: "",
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201807,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 500,
      "Curr. amount": 500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "12.3762%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201808,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 500,
      "Curr. amount": 500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "12.3762%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201809,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 750,
      "Curr. amount": 750,
      "PCB Budget": 0,
      Amendment: 0,
      "": "18.5644%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201810,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 790,
      "Curr. amount": 790,
      "PCB Budget": 0,
      Amendment: 0,
      "": "19.5545%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201811,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1500,
      "Curr. amount": 1500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201812,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1500,
      "Curr. amount": 1500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201901,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1500,
      "Curr. amount": 1500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201902,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1500,
      "Curr. amount": 1500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201903,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1500,
      "Curr. amount": 1500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201904,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1500,
      "Curr. amount": 1500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201905,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1500,
      "Curr. amount": 1500,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: 201906,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 1960,
      "Curr. amount": 1960,
      "PCB Budget": 0,
      Amendment: 0,
      "": "37.1287%"
    },
    {
      Version: "PBFEC",
      Resbud: "XG10",
      "Resbud(T)": "Studentships",
      "Sub-Project": "302906-01",
      Period: "",
      Description: "",
      Amount: 15000,
      "Curr. amount": 15000,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 0,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 0,
      "Curr. amount": 0,
      "PCB Budget": "",
      Amendment: "",
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201807,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201808,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201809,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201810,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201811,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201812,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201901,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201902,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201903,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201904,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201905,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201906,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: -2500,
      "Curr. amount": -2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBFEC",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: "",
      Description: "",
      Amount: -30000,
      "Curr. amount": -30000,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201807,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201808,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201809,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201810,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201811,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201812,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201901,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201902,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201903,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201904,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201905,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: 201906,
      Description:
        "Project: 302906 Proposed Start: 01/02/2018 - Proposed End: 31/07/2021",
      Amount: 2500,
      "Curr. amount": 2500,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    },
    {
      Version: "PBPRICE",
      Resbud: "XZ90",
      "Resbud(T)": "Income",
      "Sub-Project": "302906-01",
      Period: "",
      Description: "",
      Amount: 30000,
      "Curr. amount": 3000,
      "PCB Budget": 0,
      Amendment: 0,
      "": ""
    }
  ];
}

// Entry point
(function() {
  /**
   * Shared store object.
   *
   * Will be controlled by App class which will pass
   * only what is required from the store to other
   * objects. This will allow the App class to
   * control the updating of the store.
   */
  const store = {
    constants: Object.freeze({
      TYPE: "Version",
      FEC_BUDGET_TYPES: ["PBFEC", "IBFEC"],
      PRICE_BUDGET_TYPES: ["PBPRICE", "IBPRICE"],
      RESBUD: "Resbud",
      NEW_BUDGET: "PCB Budget",
      GBP_AMOUNT: "Amount",
      CURR_AMOUNT: "Curr. amount",
      SUB_PROJECT: "Sub-Project",
      DESCRIPTION: "Description",
      PERIOD: "Period",
      BUDGET_CHANGE_EVENT: "newBudgetChanged"
    }),
    htmlHooks: Object.freeze({
      APP: "app",
      FILE_INPUT: "dataInput",
      NO_FILE: "noFile",
      INITIAL_CONTROLS: "initialControls",
      REPORT: "report",
      RESULT: "result",
      STATUS: "status",
      OUTPUT: "output"
    }),
    resbudMap: Object.freeze({
      XI10: "Animals",
      XU10: "Consumables",
      XP10: "Contingencies",
      XU11: "DA Consumables",
      XE11: "DA Equipment Maintenance",
      XE10: "Equipment",
      XF10: "Equipment Large Capital",
      XZ11: "Estates Costs",
      XQ10: "Exceptional Items",
      XZ90: "Income",
      XZ10: "Indirects",
      XS10: "Market Assessment",
      XW10: "Others",
      XJ10: "Patents",
      XA10: "Salaries - Clinical Academic",
      XA19: "Salary Recoups - Clinical",
      XA20: "Salaries - Research",
      XA29: "Salary Recoups - Research",
      XA30: "Salaries - Technical & Related",
      XA39: "Salary Recoups - Technical & Related",
      XA40: "Salaries - Modernisation of Pay",
      XA49: "Salary Recoups - Modernisation of Pay",
      XA50: "Salaries - Administrative",
      XA59: "Salary Recoups - Administrative",
      XA60: "Salaries - Others",
      XA69: "Salary Recoups - Others",
      XK10: "Sponsored Refurbishment",
      XG10: "Studentships",
      XT10: "Student Matric Fees",
      XR10: "Subcontract Costs",
      XZ12: "Technician Infrastructure Costs",
      XN10: "Travel Overseas",
      XM10: "Travel UK"
    }),
    utils: Object.freeze({
      createElement: (element, options = {}) => {
        element = document.createElement(element);
        Object.keys(options).forEach(option => {
          element[option] = options[option];
        });
        return element;
      },
      removeAllChildren: element => {
        while (element.firstChild) element.removeChild(element.firstChild);
      },
      roundToTwo(num) {
        // see https://stackoverflow.com/a/18358056
        return +(Math.round(num + "e+2") + "e-2");
      }
    })
  };

  if (TEST_MODE) {
    startProcessing(TEST_DATA, store);
  } else {
    try {
      // Setup file select dialog listener.
      document
        .getElementById(store.htmlHooks.FILE_INPUT)
        .addEventListener("change", getFileSelectedHandler(store), false);

      // Setup the drop zone listeners.
      let dropZone = document.getElementById("drop_zone");
      // When user drags over drop zone
      dropZone.addEventListener("dragover", handleDragOver, false);
      // When user leaves the drop zone
      dropZone.addEventListener(
        "dragleave",
        e => e.target.classList.remove("hovering"),
        false
      );
      // When user drops file on the drop zone
      dropZone.addEventListener("drop", getFileSelectedHandler(store), false);
    } catch (err) {
      document.getElementById("app").innerHTML =
        '<div style="color: red"><h2>ERROR: </h2><h4>' + err + "</h4></div>";
      console.error(err);
    }
  }
})();

/**
 * Called when user is dragging/hovering a file over the
 * drop zone area.
 *
 * @param {DragEvent} e
 */
function handleDragOver(e) {
  e.stopPropagation();
  e.preventDefault();

  // Explicitly show this is a copy.
  e.dataTransfer.dropEffect = "copy";

  // Add relevant class to drop zone if user is dragging over it.
  if (
    (" " + e.target.className + " ")
      .replace(/[\n\t]/g, " ")
      .indexOf(" hovering ") < 0
  ) {
    e.target.classList.add("hovering");
  }
}

/**
 |--------------------------------------------------
 | Callback used when user selects/drops an input file.
 | Kick starts the process
 |--------------------------------------------------
 */

function getFileSelectedHandler(store) {
  return e => {
    e.stopPropagation();
    e.preventDefault();

    try {
      let files = e.type === "drop" ? e.dataTransfer.files : e.target.files;
      if (files.length > 0) {
        if (files[0].name.split(".").pop() !== "csv")
          throw "File must be of CSV format and have .csv extension";
        // Use Papa to parse CSV file:
        Papa.parse(files[0], {
          complete: (results, file) => startProcessing(results.data, store),
          skipEmptyLines: true,
          header: true,
          dynamicTyping: true
        });
      } else {
        throw "No file chosen. Please refresh and try again...";
      }
    } catch (error) {
      console.error(error);
      document.getElementById(
        "file-error-status"
      ).innerHTML = `<div class="notification is-danger" style="margin-bottom: 15px;">${error}</div>`;
    }
  };
}

/**
 |--------------------------------------------
 | Process input file which contains the 
 | current planner budgets that require
 | amending.
 |
 | input is an array of objects. Each 
 | object is a record/row in the input file.
 | The column heading is the key for each
 | value within the record.
 |--------------------------------------------
 */
function startProcessing(data, store) {
  document.getElementById(store.htmlHooks.INITIAL_CONTROLS).style.display =
    "none";

  if (data.length > 0) {
    try {
      // filter out summary/blank rows
      data = data.filter(row => row[store.constants.PERIOD] != false);

      // Check for empty input which would mean no budgets in planner
      if (data.length === 0)
        throw "No budgets. Use RSO - 'RESBUD Costs per Period' enquiry";

      // Instantiate new App instance
      let app = new App(store);

      // Initialise App with the parsed data
      app.init(data);

      /**
       * Renders initial report for user to input new budgets
       * This also sets up the event for the user to
       * confirm new budgets and process results.
       */
      app.buildSummaryReport();
    } catch (err) {
      document.getElementById(store.htmlHooks.APP).innerHTML =
        '<div style="color: red"><h2>ERROR: </h2><h4>' + err + "</h4></div>";

      console.error(err);
    }
  }
}
