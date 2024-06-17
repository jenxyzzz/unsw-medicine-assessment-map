// Import necessary icons from react-icons
import { FaStethoscope, FaPeopleGroup, FaListCheck } from "react-icons/fa6";
import { FaRegEye, FaPeopleArrows } from "react-icons/fa";
import { RiHealthBookLine, RiPresentationFill} from "react-icons/ri";
import { TbWritingSign } from "react-icons/tb";
import { GiDiscussion } from "react-icons/gi";
import { MdQuiz, MdOutlineAssignment } from "react-icons/md";


export const items = [
  // order that they are displayed is determined by "order: x" property and rendered down a column.
    {
      id: 1,
      order: 1,
      name: "MFAC3502 Surgery",
      category: "discipline",
      movable: true,
      hasSubItems: true,
    },
    { id: 2,
      order: 2,
      name: "MFAC3501 Medicine",
      category: "discipline",
      movable: true,
      hasSubItems: true,
      },
    { id: 3,
      order: 7,
      name: "Elective",
      category: "discipline",
      movable: false,
      hasSubItems: false,
    },
    { id: 4,
      order: 4,
      name: "MFAC3505 Obstetrics and Gynaecology",
      category: "discipline",
      movable: true
    },
    { id: 5,
      order: 5,
      name: "MFAC3506 Children's Health",
      category: "discipline",
      movable: true
    },
    { id: 6,
      order: 10,
      name: "MFAC3504 Primary Care",
      category: "discipline",
      movable: true
    },
    { id: 7,
      order: 3,
      name: "MFAC 3508 Critical Care",
      category: "discipline",
      movable: true
    },
    { id: 8,
      order: 8,
      name: "MFAC3503 Psychiatry",
      category: "discipline",
      movable: true
    },
    { id: 9,
      order: 9,
      name: "Selective",
      category: "discipline",
      movable: true
    },
    { id: 10, order: 6, name: "Assessment 1", category: "assessment", movable: false },
    { id: 11, order: 11, name: "Assessment 2", category: "assessment", movable: false },
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
1: {
  rows: [
    {number: 1, icon: "logBook", weighting: 10},
  ],
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
  },
  showParentItemDetails: false // set to 'true' or 'false' to show the number and weighting (and dashed lines) of the item that's outside of the sub blocks
},
2: {
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
},
showParentItemDetails: false
},
3: {
  rows: [],
  showParentItemDetails: false
},
4: {
  rows: [
    { number: 1, icon: "writtenEssay", weighting: 10 },
    { number: 3, icon: "miniCEX", weighting: 30 },
    { number: 1, icon: "learningPlan", weighting: 60 },
  ],
showParentItemDetails: true,
},
5: {
  rows: [],
    subItems: {
    "5a": {
      rows: [
    { number: 1, icon: "oralPresentation", weighting: 10 },
    { number: 1, icon: "miniCEX", weighting: 10 },
    { number: 1, icon: "learningPlan", weighting: 35 },
      ]},
    "5b": {
      rows: [
{ number: 1, icon: "miniCEX", weighting: 10 },
{ number: 1, icon: "learningPlan", weighting: 35 },
      ]
    }
},
showParentItemDetails: false
},
6: {
  rows: [
    { number: 1, icon: "logBook", weighting: 0 },
  ],
    subItems: {
    "6a": {
      rows: [
    { number: 1, icon: "teamCareAssignment", weighting: 30 },
    { number: 1, icon: "miniCEX", weighting: 0 },
    { number: 1, icon: "learningPlan", weighting: 22.5 },
      ]},
    "6b": {
      rows: [
{ number: 1, icon: "miniCEX", weighting: 0 },
{ number: 1, icon: "consultationSkillsRolePlay", weighting: 25 },
{ number: 1, icon: "learningPlan", weighting: 22.5 },
      ]
    }
},
showParentItemDetails: false
},
7: {
  rows: [
    { number: 2, icon: "oralPresentation", weighting: 40 },
    { number: 2, icon: "miniCEX", weighting: 0 },
    { number: 2, icon: "managementVivaExam", weighting: 30 },
    { number: 1, icon: "consultationSkillsRolePlay", weighting: 25 },
    { number: 2, icon: "learningPlan", weighting: 30 },
    { number: 1, icon: "logBook", weighting: 0 },
  ],
showParentItemDetails: true
},

8: {
  rows: [],
    subItems: {
    "8a": {
      rows: [
    { number: 1, icon: "oralPresentation", weighting: 20 },
    { number: 1, icon: "observedExperiences", weighting: 8 },
    { number: 1, icon: "learningPlan", weighting: 8.5 },
      ]},
    "8b": {
      rows: [
{ number: 1, icon: "oralPresentation", weighting: 20 },
{ number: 1, icon: "managementVivaExam", weighting: 15 },
{ number: 1, icon: "WBA", weighting: 15 },
{ number: 1, icon: "MCQ", weighting: 3.5 },
{ number: 1, icon: "learningPlan", weighting: 8.5 },
      ]
    }
},
showParentItemDetails: false
},
    // add similar rows for other items...
  };
