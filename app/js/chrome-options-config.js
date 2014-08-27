angular.module('optionsConfig', []).value('config', [

  { page_id: 'ExampleA', sections: [

    { category_id: 'Example Section 1 A', options: [

      { option_id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { option_id: 'Checkbox', default: false, type: 'checkbox' },
      { option_id: 'Checkbox Two', default: true, type: 'checkbox' },
      { option_id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { category_id: 'Example Section 2 A', options: [

      { option_id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { option_id: 'Checkbox', default: false, type: 'checkbox' },
      { option_id: 'Checkbox Two', default: true, type: 'checkbox' },
      { option_id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { category_id: 'Example Section 3 A', options: [

      { option_id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { option_id: 'Checkbox', default: false, type: 'checkbox' },
      { option_id: 'Checkbox Two', default: true, type: 'checkbox' },
      { option_id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]}

  ]},

  { page_id: 'ExampleB', sections: [

    { category_id: 'Example Section 1 B', options: [

      { option_id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { option_id: 'Checkbox', default: false, type: 'checkbox' },
      { option_id: 'Checkbox Two', default: true, type: 'checkbox' },
      { option_id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { category_id: 'Example Section 2 B', options: [

      { option_id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { option_id: 'Checkbox', default: false, type: 'checkbox' },
      { option_id: 'Checkbox Two', default: true, type: 'checkbox' },
      { option_id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { category_id: 'Example Section 3 B', options: [

      { option_id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { option_id: 'Checkbox', default: false, type: 'checkbox' },
      { option_id: 'Checkbox Two', default: true, type: 'checkbox' },
      { option_id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]}

  ]}
]);
