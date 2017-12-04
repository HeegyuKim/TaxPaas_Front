
let TaxOrganizerForm = [
  {
    id: "service_agreement",
    title: "Service Agreement",
    type: "section",
    forms: [
      {
        type: "question-choose",
        label: "Client Service Aggrement",
        answers: [
          {label: "Agree"}
        ]
      },
      {
        type: "text",
        label: "Privacy Notice",
        text: "Blah Blah Blah..."
      },
      {
        type: "filelist",
        label: "Identification (Tax Payer/Spouse)",
        description: "Both the TAXPAYER and SPOUSE must include a PHOTOCOPY of the FRONT & BACK of their driver's license or state issued ID.",
      }
    ]
  },
  {
    id: "personal_information",
    label: "Personal Information",
    type: "section_list",
    sections: [
      {
        id:"taxpayer",
        title: "Taxpayer",
        forms: [
          { type: "input", label: "Name", id: "name"},
          { type: "input", label: "Social Security Number(SSN)", id: "ssn" },
          { type: "input", label: "Date of Birth", id: "birth" },
          { type: "input", label: "Occupation", id: "occupation"},
          { type: "input", label: "Work Phone", id: "work_phone"},
        ]
      },
      {
        id:"spouse",
        title: "Spouse",
        forms: [
          { type: "input", label: "Name", id: "name"},
          { type: "input", label: "Social Security Number(SSN)", id: "ssn" },
          { type: "input", label: "Date of Birth", id: "birth" },
          { type: "input", label: "Occupation", id: "occupation"},
          { type: "input", label: "Work Phone", id: "work_phone"},
        ]
      },
      {
        id:"residence",
        title: "Residence",
        forms: [
          { type: "input", label: "Street Address", id: "street_address"},
          { type: "input", label: "City", id: "city"},
          { type: "input", label: "State", id: "state"},
          { type: "input", label: "ZIP", id: "zip"},
          { type: "input", label: "Home Phone", id: "home_phone"},
          { type: "input", label: "Email address", id: "email_address"},
          { type: "input", label: "Town", id: "town"},
          { type: "input", label: "County", id: "county"},
          { type: "input", label: "Village", id: "village"},
          { type: "input", label: "School District", id: "school_district"},
          { type: "input", label: "City", id: "city"},
        ]
      },
      {
        id: "taxpayer_status",
        title: "Taxpayer Status",
        forms: [
          { type: "question-yesno", label: "Blind", id: "is_blind"},
          { type: "question-yesno", label: "Disabled", id: "is_disabled"},
          { type: "question-yesno", label: "Pres. Campaign Fund", id: "campaign_fund"},
        ]w
      {
        id: "spouse_status",
        title: "Spouse Status",
        forms: [
          { type: "question-yesno", label: "Blind", id: "is_blind"},
          { type: "question-yesno", label: "Disabled", id: "is_disabled"},
          { type: "question-yesno", label: "Pres. Campaign Fund", id: "campaign_fund"},
        ]
      },
      {
        id: "marital_status",
        title: "Marital Status",
        forms: [
          { type: "question-yesno", label: "Married", id: "is_blind"},
          { type: "question-yesno", label: "Single", id: "is_disabled"},
          { type: "question-yesno", label: "Window(er),", id: "is_window"},
          { type: "input", label: "Window(er), Date of Spouse's Death", id: "date_of_spouse_death"},
          { type: "question-yesno", label: "Will file jointly?", id: "will_file_jointly"},
        ]
      },
    ]
  },
  {
    id: "dependents",
    title: "Dependents (Children & Other)",
    type: "section",
    forms: [
        {
          label: "Dependents",
          type: "popup-table",
          fields: [
            { id: "name", label: "Name(First, Last)" },
            { id: "relationship", label: "Relationship" },
            { id: "birth", label: "Date of Birth" },
            { id: "ssn", label: "Social Security Number" },
            { id: "months_live_with_you", label: "Months Live with You" },
            { id: "is_disabled", label: "Disabled", type: "question-yesno" },
            { id: "is_fulltime_student", label: "Full Time Student", type: "question-yesno" },
            { id: "gross_income", label: "Name(First, Last)" }
          ]
        }
    ]
  }
]

export { TaxOrganizerForm }
