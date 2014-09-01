angular.module('optionsConfig', []).value('config', [

  { id: 'ExampleA', categories: [

    { id: 'Example Section 1 A', options: [

      { id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { id: 'Checkbox', default: false, type: 'checkbox' },
      { id: 'Checkbox Two', default: true, type: 'checkbox' },
      { id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { id: 'Example Section 2 A', options: [

      { id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { id: 'Checkbox', default: false, type: 'checkbox' },
      { id: 'Checkbox Two', default: true, type: 'checkbox' },
      { id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { id: 'Example Section 3 A', options: [

      { id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { id: 'Checkbox', default: false, type: 'checkbox' },
      { id: 'Checkbox Two', default: true, type: 'checkbox' },
      { id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]}

  ]},

  { id: 'ExampleB', categories: [

    { id: 'Example Section 1 B', options: [

      { id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { id: 'Checkbox', default: false, type: 'checkbox' },
      { id: 'Checkbox Two', default: true, type: 'checkbox' },
      { id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { id: 'Example Section 2 B', options: [

      { id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { id: 'Checkbox', default: false, type: 'checkbox' },
      { id: 'Checkbox Two', default: true, type: 'checkbox' },
      { id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]},

    { id: 'Example Section 3 B', options: [

      { id: 'Select Number', default: 4, type: 'number', min: 1, max: 8 },
      { id: 'Checkbox', default: false, type: 'checkbox' },
      { id: 'Checkbox Two', default: true, type: 'checkbox' },
      { id: 'Drop Down', default: "option1", options: ['option1', 'option2', 'option3']}

    ]}

  ]}
]);
