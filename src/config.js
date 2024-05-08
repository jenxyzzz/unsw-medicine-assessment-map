// Import necessary icons from react-icons
import { MdLocalHospital, MdAssessment } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa6";

export const items = [
    { id: 1, name: "MFAC3502 Surgery", category: "discipline", movable: true },
    { id: 2, name: "MFAC3501 Medicine", category: "discipline", movable: true },
    { id: 3, name: "MFAC3505 Obstetrics and Gynaecology", category: "discipline", movable: true },
    { id: 4, name: "MFAC3506 Children's Health", category: "discipline", movable: true },
    { id: 5, name: "MFAC3504 Primary Care", category: "discipline", movable: true },
    { id: 6, name: "MFAC 3508 Critical Care", category: "discipline", movable: true },
    { id: 7, name: "MFAC3503 Psychiatry", category: "discipline", movable: true },
    { id: 8, name: "Selective", category: "discipline", movable: true },
    { id: 9, name: "Elective", category: "discipline", movable: true },
    { id: 10, name: "Assessment 1", category: "assessment", movable: false },
    { id: 11, name: "Assessment 2", category: "assessment", movable: false },
  ];

// Define column and row heading text
export const columnHeadings = ["Year 5", "Year 6"];
export const rowHeadings = ["Term 1", "Term 2", "Term 3", "Term 4", "Term 5", "Term 6"]; // Adjust as needed
export const initialContainers = {
  container1: [1],
  container2: [2],
  container3: [3],
  container4: [4],
  container5: [5],
  container6: [6],
  container7: [7],
  container8: [8],
  container9: [9],
  container10: [10],
  container11: [11],
  // ... can add other containers
  // The containers object organises the items into different containers. Each container is represented by a key-value pair, where the key is the container ID and the value is an array of item IDs. The item IDs correspond to the items array.
};
// Icon mapping dictionary
export const iconMap = {
    hospital: MdLocalHospital,
    assessment: MdAssessment,
    stethoscope: FaStethoscope,
  };


export const itemDetails = {
    1: {
      rows: [
        { number: 1, icon: "hospital", weighting: 20 },
        { number: 2, icon: "assessment", weighting: 30 }
      ]
    },
    2: {
      rows: [
        { number: 1, icon: "stethoscope", weighting: 25 },
        { number: 2, icon: "stethoscope", weighting: 10 }
      ]
    },
    3: {
      rows: [
        { number: 1, icon: "stethoscope", weighting: 15 },
        { number: 2, icon: "stethoscope", weighting: 18 }
      ]
    },
    // Add similar rows for other items...
  };