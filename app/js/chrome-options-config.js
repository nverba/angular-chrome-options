angular.module('optionsConfig', []).value('config', {

  app_name: 'Example App',

  pages: [

  { label: 'First Example Page', id: 'example_page_a', subhead: 'Example page sub-heading', filter: 'categories', categories: [

    { label: 'Example category', id: 'example_section_1_a', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", type: 'options', options: ['option1', 'option2', 'option3']},
      { type: 'h3', text: 'Reset Category' },
      { type: 'span', text: 'This is a selection of sample buttons, the reset button will reset category to defaults.' },
      { label: 'Reset 1a', type: 'buttons', controls: [{ type: 'button', action: 'test', label: 'Example 1' }, { type: 'button', action: 'test', label: 'Example 2' }, { type: 'spacer' }, { type: 'button', action: 'reset', label: 'Reset' }]   }

    ]},

    { label: 'Other section', id: 'example_section_2_a', options: [

      { label: 'Select Number', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
      { label: 'Checkbox', id: 'checkbox', default: false, type: 'checkbox' },
      { label: 'Checkbox Two', id: 'checkbox_two', default: true, type: 'checkbox' },
      { label: 'Drop Down', id: 'drop_down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { label: 'Last section', id: 'example_section_3_a', options: [

      { label: 'Zebra', id: 'select_number', default: 4, type: 'number', min: 1, max: 8 },
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
