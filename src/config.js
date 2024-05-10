// Import necessary icons from react-icons
import { FaStethoscope, FaPeopleGroup, FaListCheck } from "react-icons/fa6";
import { FaRegEye, FaPeopleArrows } from "react-icons/fa";
import { RiHealthBookLine, RiPresentationFill} from "react-icons/ri";
import { TbWritingSign } from "react-icons/tb";
import { GiDiscussion } from "react-icons/gi";
import { MdQuiz, MdOutlineAssignment } from "react-icons/md";


export const items = [
    {
      id: 1,
      name: "MFAC3502 Surgery",
      category: "discipline",
      movable: true,
      subItems: [
        { id: "1a",},
        { id: "1b",},
      ]
    },
    { id: 2,
      name: "Elective",
      category: "discipline",
      movable: false },
    { id: 3,
      name: "MFAC3501 Medicine",
      category: "discipline",
      movable: true,
      subItems: [
      { id: "3a", },
      { id: "3b", },
    ]
      },
    { id: 4, name: "MFAC3505 Obstetrics and Gynaecology", category: "discipline", movable: true },
    { id: 5, name: "MFAC3506 Children's Health", category: "discipline", movable: true },
    { id: 6, name: "MFAC3504 Primary Care", category: "discipline", movable: true },
    { id: 7, name: "MFAC 3508 Critical Care", category: "discipline", movable: true },
    { id: 8, name: "MFAC3503 Psychiatry", category: "discipline", movable: true },
    { id: 9, name: "Selective", category: "discipline", movable: true },
    { id: 10, name: "Assessment 1", category: "assessment", movable: false },
    { id: 11, name: "Assessment 2", category: "assessment", movable: false },
  ];

// Define column and row heading text
export const columnHeadings = ["Year 5", "Year 6"];
export const rowHeadings = ["Summer / Term 1", "Term 2", "Term 3", "Term 4", "Term 5", "Term 6"]; // Adjust as needed
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
  learningPlan: RiHealthBookLine,
  oralPresentation: RiPresentationFill,
  writtenEssay: TbWritingSign,
  miniCEX: FaStethoscope,
  managementVivaExam: GiDiscussion,
  MCQ: MdQuiz,
  WBA: FaPeopleGroup,
  consultationSkillsRolePlay: FaPeopleArrows,
  teamCareAssignment: MdOutlineAssignment,
  logBook: FaListCheck, 
  observedExperiences: FaRegEye,
  };


export const itemDetails = {
//   1: {
//   	rows: [
//     	{ number: 1, icon: "oralPresentation", weighting: 20 },
//     	{ number: 1, icon: "miniCEX", weighting: 10 },
// { number: 1, icon: "miniCEX", weighting: 10 },
// { number: 1, icon: "learningPlan", weighting: 30 },
// { number: 1, icon: "learningPlan", weighting: 30 },
//   	]
// 	},
1: {
  rows: [],
  subItems: {
    "1a": {
      rows: [
        { number: 1, icon: "oralPresentation", weighting: 20 },
        { number: 1, icon: "miniCEX", weighting: 10 },
        { number: 1, icon: "learningPlan", weighting: 30 },
      ]
    },
    "1b": {
      rows: [
        { number: 1, icon: "miniCEX", weighting: 10 },
        { number: 1, icon: "learningPlan", weighting: 20 },
      ]
    }
  }
},
2: {
  rows: [],
},
3: {
  rows: [],
    subItems: {
    "3a": {
      rows: [
    { number: 1, icon: "oralPresentation", weighting: 10 },
    { number: 1, icon: "miniCEX", weighting: 10 },
    { number: 1, icon: "learningPlan", weighting: 35 },
      ]},
    "3b": {
      rows: [
{ number: 1, icon: "miniCEX", weighting: 10 },
{ number: 1, icon: "learningPlan", weighting: 35 },
      ]
    }
}
},


    // Add similar rows for other items...
  };