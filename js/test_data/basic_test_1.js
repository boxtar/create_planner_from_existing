const TEST_MODE = false;
let TEST_DATA = [];
if (TEST_MODE)
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
export default TEST_DATA;
