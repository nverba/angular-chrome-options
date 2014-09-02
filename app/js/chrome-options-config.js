angular.module('optionsConfig', []).value('config', {

  app_name: 'Chrome Options',

  pages: [

  { label: 'Example Page A', id: 'example_page_a', subhead: 'Example page "A" sub-heading', categories: [

    { label: 'Example Section 1 A', id: 'example_section_1_a', subhead: 'subhead 1 a', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { label: 'Example Section 2 A', id: 'example_section_2_a', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { label: 'Example Section 3 A', id: 'example_section_3_a', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]}

  ]},

  { label: 'Example Page B', id: 'example_page_b', categories: [

    { label: 'Example Section 1 B', id: 'example_section_1_b', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { label: 'Example Section 2 B', id: 'example_section_2_b', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { label: 'Example Section 3 B', id: 'example_section_3_b', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]}

  ]}
]});
