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
  {
    id: 2,
    order: 2,
    name: "MFAC3501 Medicine",
    category: "discipline",
    movable: true,
    hasSubItems: true,
  },
  {
    id: 3,
    order: 7,
    name: "Elective",
    category: "discipline",
    movable: false,
    hasSubItems: false,
  },
  {
    id: 4,
    order: 4,
    name: "MFAC3505 Obstetrics and Gynaecology",
    category: "discipline",
    movable: true
  },
  {
    id: 5,
    order: 5,
    name: "MFAC3506 Children's Health",
    category: "discipline",
    movable: true
  },
  {
    id: 6,
    order: 10,
    name: "MFAC3504 Primary Care",
    category: "discipline",
    movable: true
  },
  {
    id: 7,
    order: 3,
    name: "MFAC 3508 Critical Care",
    category: "discipline",
    movable: true
  },
  {
    id: 8,
    order: 8,
    name: "MFAC3503 Psychiatry",
    category: "discipline",
    movable: true
  },
  {
    id: 9,
    order: 9,
    name: "Selective",
    category: "discipline",
    movable: true
  },
  {
    id: 10, order: 6, name: "Assessment 1", category: "assessment", movable: false },
  {
    id: 11, order: 11, name: "Assessment 2", category: "assessment", movable: false },
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
  learningPlan: { component: RiHealthBookLine, hoverText: "Each rotation requires a ‘learning plan’ that outlines specific expectations and assessments related to three graduate capabilities: Patient Assessment and Management, Teamwork, and Self-directed Learning and Critical Evaluation. Students are meant to be evaluated by their supervisor for the rotation. Failure to meet this attendance requirement can lead to an unsatisfactory grade and the necessity to repeat the course." },
  oralPresentation: { component: RiPresentationFill, hoverText: "The course assessment may require that you deliver an oral presentation at a department meeting or other forum during the course. The presentation could be case-based or topic-based as for written assignments. The course guide will provide further information on the requirements of the oral presentation." },
  writtenEssay: { component: TbWritingSign, hoverText: "The course assessment may include a case-based report (as in Phase 2) or a topic-based assignment. Marking will be done by the clerkship supervisor or a clinical teacher, and the marked assignment may be submitted as evidence towards one or more graduate capabilities (including a negotiated capability) in eMed. The course guide will provide further information on the requirements of the written assignment." },
  miniCEX: { component: FaStethoscope, hoverText: "The course assessment may require that you demonstrate satisfactory clinical skills in an observed assessment of a patient. There should be many opportunities for you to seek feedback on your clinical and communication skills during a clerkship. The course will stipulate the requirement for a summative assessment." },
  WBA: { component: FaPeopleGroup, hoverText: "Work Based Assessments assess key psychiatric clinical skills including history taking, mental state examination and presentation skills. WBAs can be completed on routine ward activities e.g., presentation of a case at a ward round, clerking a patient, documentation in the electronic medical record, writing a discharge summary etc. OR in dedicated teaching sessions with your supervisor or registrar." },
  consultationSkillsRolePlay: { component: FaPeopleArrows, hoverText: "Consultation skills role play." },
  teamCareAssignment: { component: MdOutlineAssignment, hoverText: "Team care assignment." },
  logBook: { component: FaListCheck, hoverText: "Log book." },
  observedExperiences: { component: FaRegEye, hoverText: "Observed experiences." },
  managementVivaExam: { component: GiDiscussion, hoverText: "Management viva exam." },
  MCQ: { component: MdQuiz, hoverText: "MCQ." }
};

export const itemDetails = {
  1: {
    rows: [
      { number: 1, icons: ["logBook"], weighting: 10 },
    ],
    subItems: {
      "1a": {
        rows: [
          { number: 1, icons: ["oralPresentation"], weighting: 20 },
          { number: 1, icons: ["miniCEX"], weighting: 10 },
          { number: 1, icons: ["learningPlan"], weighting: 30 },
        ]
      },
      "1b": {
        rows: [
          { number: 1, icons: ["miniCEX"], weighting: 10 },
          { number: 1, icons: ["learningPlan"], weighting: 20 },
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
          { number: 1, icons: ["oralPresentation"], weighting: 10 },
          { number: 1, icons: ["miniCEX"], weighting: 10 },
          { number: 1, icons: ["learningPlan"], weighting: 35 },
        ]
      },
      "3b": {
        rows: [
          { number: 1, icons: ["miniCEX"], weighting: 10 },
          { number: 1, icons: ["learningPlan"], weighting: 35 },
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
      { number: 1, icons: ["writtenEssay", "oralPresentation"], weighting: 10 },
      { number: 3, icons: ["miniCEX"], weighting: 30 },
      { number: 1, icons: ["learningPlan"], weighting: 60 },
    ],
    showParentItemDetails: true,
  },
  5: {
    rows: [],
    subItems: {
      "5a": {
        rows: [
          { number: 1, icons: ["oralPresentation"], weighting: 10 },
          { number: 1, icons: ["miniCEX"], weighting: 10 },
          { number: 1, icons: ["learningPlan"], weighting: 35 },
        ]
      },
      "5b": {
        rows: [
          { number: 1, icons: ["miniCEX"], weighting: 10 },
          { number: 1, icons: ["learningPlan"], weighting: 35 },
        ]
      }
    },
    showParentItemDetails: false
  },
  6: {
    rows: [
      { number: 1, icons: ["logBook"], weighting: 0 },
    ],
    subItems: {
      "6a": {
        rows: [
          { number: 1, icons: ["teamCareAssignment"], weighting: 30 },
          { number: 1, icons: ["miniCEX"], weighting: 0 },
          { number: 1, icons: ["learningPlan"], weighting: 22.5 },
        ]
      },
      "6b": {
        rows: [
          { number: 1, icons: ["miniCEX"], weighting: 0 },
          { number: 1, icons: ["consultationSkillsRolePlay"], weighting: 25 },
          { number: 1, icons: ["learningPlan"], weighting: 22.5 },
        ]
      }
    },
    showParentItemDetails: false
  },
  7: {
    rows: [
      { number: 2, icons: ["oralPresentation"], weighting: 40 },
      { number: 2, icons: ["miniCEX"], weighting: 0 },
      { number: 2, icons: ["managementVivaExam"], weighting: 30 },
      { number: 1, icons: ["consultationSkillsRolePlay"], weighting: 25 },
      { number: 2, icons: ["learningPlan"], weighting: 30 },
      { number: 1, icons: ["logBook"], weighting: 0 },
    ],
    showParentItemDetails: true
  },

  8: {
    rows: [],
    subItems: {
      "8a": {
        rows: [
          { number: 1, icons: ["oralPresentation"], weighting: 20 },
          { number: 1, icons: ["observedExperiences"], weighting: 8 },
          { number: 1, icons: ["learningPlan"], weighting: 8.5 },
        ]
      },
      "8b": {
        rows: [
          { number: 1, icons: ["oralPresentation"], weighting: 20 },
          { number: 1, icons: ["managementVivaExam"], weighting: 15 },
          { number: 1, icons: ["WBA"], weighting: 15 },
          { number: 1, icons: ["MCQ"], weighting: 3.5 },
          { number: 1, icons: ["learningPlan"], weighting: 8.5 },
        ]
      }
    },
    showParentItemDetails: false
  },
  // add similar rows for other items...
};
