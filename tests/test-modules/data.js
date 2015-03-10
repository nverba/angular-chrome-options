console.log('loaded data');

var DATA = {

    example_config: {

      app_name: 'Chrome App',

      pages: [

        { id: 'TestPage 1', categories:
          [
            { label: 'TestCat A', id: 'testcat_a', options: [{ label: 'Option A1', id: 'option_a1', default: 4, type: 'number' }]},
            { label: 'TestCat B', id: 'testcat_b', options: [{ label: 'Option B1',id: 'option_b1', default: 5, type: 'number' }, { label: 'Option B2', id: 'option_b2', default: 6, type: 'number' }]}
          ]
        },

        { id: 'TestPage 2', categories:
          [
            { label: 'TestCat C', id: 'testcat_c', options: [{ label: 'Option C1', id: 'option_c1', default: 4, type: 'number' }]},
            { label: 'TestCat D', id: 'testcat_d', options: [{ label: 'Option D1', id: 'option_e1', default: 5, type: 'number' }]}
          ]
        }
      ]
    },

    expected_defaults: {

      testcat_a: {
        option_a1: 4
      },

      testcat_b: {
        option_b1: 5, 
        option_b2: 6
      },

      testcat_c: {
        option_c1: 4
      }, 

      testcat_d: {
        option_e1: 5
      }
    },

    updated_defaults: {

      testcat_a: {
        option_a1: 100
      }, 

      testcat_b: {
        option_b1: 5,
        option_b2: 6
      }, 

      testcat_c: {
        option_c1: 4
      }, 

      testcat_d: {
        option_e1: 5
      }
    }

  }